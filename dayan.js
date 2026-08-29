/* =========================================================
 * 东观易 · 大衍筮法核心算法 v2026.8.28
 * 修复：三变计算错误、多动爻支持、随机数增强、变占七则
 * 兼容旧接口：window.dayanThreeChanges / window.castGuaDayan
 * 新接口：window.Dayan.castHexagram / getDivinationRule
 * ========================================================= */

(function () {
    'use strict';

    // ===== 八卦数据 =====
    var trigramName = {
        1: '乾', 2: '兑', 3: '离', 4: '震',
        5: '巽', 6: '坎', 7: '艮', 8: '坤'
    };

    // 二进制编码（初爻=bit0最低位，从下往上读：初爻二爻三爻）
    // 修复v2026.8.28：旧版兑/巽、震/艮位序颠倒，导致本卦变卦查找错误
    var trigramBinary = {
        1: 0b111, // 乾 ☰ 阳阳阳
        2: 0b011, // 兑 ☱ 阳阳阴
        3: 0b101, // 离 ☲ 阳阴阳
        4: 0b001, // 震 ☳ 阳阴阴
        5: 0b110, // 巽 ☴ 阴阳阳
        6: 0b010, // 坎 ☵ 阴阳阴
        7: 0b100, // 艮 ☶ 阴阴阳
        8: 0b000  // 坤 ☷ 阴阴阴
    };

    function binaryToTrigram(bin) {
        for (var id in trigramBinary) {
            if (trigramBinary[id] === bin) return parseInt(id, 10);
        }
        return null;
    }

    // ===== 随机数生成器 =====
    // 优先 crypto.getRandomValues，降级 LCG，支持种子可复现
    function createRng(seed) {
        var s;
        if (seed !== undefined && seed !== null) {
            s = (typeof seed === 'number') ? seed >>> 0 : hashCode(String(seed)) >>> 0;
        } else {
            var hasCrypto = typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues;
            if (hasCrypto) {
                var buf = new Uint32Array(1);
                window.crypto.getRandomValues(buf);
                s = buf[0];
            } else {
                s = ((Date.now() & 0xffffffff) ^ Math.floor(Math.random() * 0x100000000)) >>> 0;
            }
        }
        // LCG (Numerical Recipes)
        return function () {
            s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
            return s / 4294967296;
        };
    }

    function hashCode(str) {
        var h = 0;
        for (var i = 0; i < str.length; i++) {
            h = ((h << 5) - h + str.charCodeAt(i)) | 0;
        }
        return h >>> 0;
    }

    // ===== 爻值工具 =====
    function yaoFromValue(value) {
        var types = { 6: '老阴', 7: '少阳', 8: '少阴', 9: '老阳' };
        return {
            value: value,
            type: types[value] || '未知',
            isMoving: (value === 6 || value === 9),
            isYang: (value === 7 || value === 9)
        };
    }

    // ===== 大衍筮法：单爻三变 =====
    // 正确流程：49根 → 分二 → 挂一(右堆取1) → 揲四(左右各%4余0取4) → 归奇(剩余=总数-1-左余-右余)
    // 重复三次，最终剩余/4 = 爻值（6老阴 7少阳 8少阴 9老阳）
    function dayanSingleYao(rng) {
        var count = 49; // 大衍之数五十，其用四十有九

        for (var change = 0; change < 3; change++) {
            // 分二：随机分成左右两堆（每堆至少1根）
            var left = Math.floor(rng() * (count - 1)) + 1;
            var right = count - left;

            // 挂一：从右堆取一根
            right -= 1;

            // 揲四：左右分别除以4取余数（余0取4）
            var leftRem = left % 4 || 4;
            var rightRem = right % 4 || 4;

            // 归奇：剩余 = 总数 - 挂一(1) - 左余 - 右余
            count = count - 1 - leftRem - rightRem;
        }

        // 三变后剩余数除以4得爻值
        return yaoFromValue(count / 4);
    }

    // ===== 铜钱法：单爻 =====
    // 三枚铜钱，正面=3 反面=2，总和映射爻值
    // 概率：6老阴=1/8, 7少阳=3/8, 8少阴=3/8, 9老阳=1/8
    function coinSingleYao(rng) {
        var sum = 0;
        for (var i = 0; i < 3; i++) {
            sum += (rng() < 0.5) ? 2 : 3;
        }
        return yaoFromValue(sum);
    }

    // ===== 卦象查找 =====
    function findGua(upper, lower) {
        if (typeof guaData === 'undefined' || !guaData) return null;
        for (var i = 0; i < guaData.length; i++) {
            if (guaData[i].upper === upper && guaData[i].lower === lower) {
                return guaData[i];
            }
        }
        return null;
    }

    function getYaoText(gua, position) {
        if (!gua || !gua.yaoTexts) return null;
        for (var i = 0; i < gua.yaoTexts.length; i++) {
            if (gua.yaoTexts[i].position === position) return gua.yaoTexts[i];
        }
        return null;
    }

    // ===== 完整起卦（六爻） =====
    function castHexagram(method, seed) {
        var rng = createRng(seed);
        var singleYaoFn = (method === 'coin') ? coinSingleYao : dayanSingleYao;
        var yaoResults = [];

        // 从下往上生成六爻（初爻→上爻）
        for (var i = 0; i < 6; i++) {
            yaoResults.push(singleYaoFn(rng));
        }

        // 计算上下卦二进制（从下往上，初爻=bit0）
        var lowerBin = 0, upperBin = 0;
        for (var j = 0; j < 3; j++) {
            if (yaoResults[j].isYang) lowerBin |= (1 << j);       // 下卦：爻1-3
            if (yaoResults[j + 3].isYang) upperBin |= (1 << j);   // 上卦：爻4-6
        }

        var lowerTrigram = binaryToTrigram(lowerBin);
        var upperTrigram = binaryToTrigram(upperBin);

        // 查找本卦
        var originalGua = findGua(upperTrigram, lowerTrigram);
        if (!originalGua) {
            originalGua = (typeof guaData !== 'undefined' && guaData[0]) ? guaData[0] : null;
        }

        // 收集动爻
        var movingLines = [];
        for (var k = 0; k < yaoResults.length; k++) {
            if (yaoResults[k].isMoving) movingLines.push(k + 1);
        }

        // 计算变卦（动爻阴阳翻转）
        var changedGua = originalGua;
        if (movingLines.length > 0 && originalGua) {
            var newLowerBin = lowerBin, newUpperBin = upperBin;
            for (var m = 0; m < movingLines.length; m++) {
                var ln = movingLines[m];
                if (ln <= 3) {
                    newLowerBin ^= (1 << (ln - 1));
                } else {
                    newUpperBin ^= (1 << (ln - 4));
                }
            }
            var newUpper = binaryToTrigram(newUpperBin);
            var newLower = binaryToTrigram(newLowerBin);
            if (newUpper && newLower) {
                changedGua = findGua(newUpper, newLower) || originalGua;
            }
        }

        return {
            originalGua: originalGua,
            changedGua: changedGua,
            upperTrigram: upperTrigram,
            lowerTrigram: lowerTrigram,
            movingLines: movingLines,
            movingYao: movingLines.length > 0 ? movingLines[movingLines.length - 1] : 0, // 兼容旧接口
            yaoResults: yaoResults,
            method: method === 'coin' ? '铜钱法' : '大衍筮法'
        };
    }

    // ===== 朱熹《易学启蒙》变占七则 =====
    // 根据动爻数量决定解卦取辞规则
    function getDivinationRule(result) {
        var n = result.movingLines ? result.movingLines.length : 0;
        var orig = result.originalGua;
        var chg = result.changedGua;
        var rules = [];

        if (!orig) return { movingCount: n, rules: rules };

        if (n === 0) {
            // 0动爻：以本卦卦辞为断
            rules.push(makeRule('本卦卦辞', orig, null, orig.hexagramText, orig.hexagramTranslation));
        } else if (n === 1) {
            // 1动爻：以本卦动爻爻辞为断
            var y1 = getYaoText(orig, result.movingLines[0]);
            if (y1) rules.push(makeRule('本卦动爻辞', orig, result.movingLines[0], y1.text, y1.translation, y1.interpretation));
        } else if (n === 2) {
            // 2动爻：以本卦两动爻爻辞为断，以上爻为主
            var lines2 = result.movingLines.slice().sort(function (a, b) { return a - b; });
            for (var i2 = 0; i2 < lines2.length; i2++) {
                var pos2 = lines2[i2];
                var y2 = getYaoText(orig, pos2);
                if (y2) {
                    var tag2 = (i2 === lines2.length - 1) ? '本卦动爻辞（主）' : '本卦动爻辞';
                    rules.push(makeRule(tag2, orig, pos2, y2.text, y2.translation, y2.interpretation));
                }
            }
        } else if (n === 3) {
            // 3动爻：以本卦卦辞和变卦卦辞合参
            rules.push(makeRule('本卦卦辞', orig, null, orig.hexagramText, orig.hexagramTranslation));
            if (chg && chg !== orig) {
                rules.push(makeRule('变卦卦辞', chg, null, chg.hexagramText, chg.hexagramTranslation));
            }
        } else if (n === 4) {
            // 4动爻：以变卦两静爻爻辞为断，以下爻为主
            var static4 = [1, 2, 3, 4, 5, 6].filter(function (p) {
                return result.movingLines.indexOf(p) === -1;
            });
            for (var i4 = 0; i4 < Math.min(2, static4.length); i4++) {
                var pos4 = static4[i4];
                var y4 = chg ? getYaoText(chg, pos4) : null;
                if (y4) {
                    var tag4 = (i4 === 0) ? '变卦静爻辞（主）' : '变卦静爻辞';
                    rules.push(makeRule(tag4, chg, pos4, y4.text, y4.translation, y4.interpretation));
                }
            }
        } else if (n === 5) {
            // 5动爻：以变卦唯一静爻爻辞为断
            var static5 = [1, 2, 3, 4, 5, 6].find(function (p) {
                return result.movingLines.indexOf(p) === -1;
            });
            if (static5 !== undefined && chg) {
                var y5 = getYaoText(chg, static5);
                if (y5) rules.push(makeRule('变卦静爻辞', chg, static5, y5.text, y5.translation, y5.interpretation));
            }
        } else if (n === 6) {
            // 6动爻：乾坤二卦取"用九""用六"，其余取变卦卦辞
            if (orig.id === 1) {
                rules.push({ type: '乾卦·用九', source: null, position: null, text: '用九：见群龙无首，吉。', translation: '六爻皆阳，群龙无首，吉。', interpretation: '刚健至极，以柔济刚，不可为首逞强。' });
            } else if (orig.id === 2) {
                rules.push({ type: '坤卦·用六', source: null, position: null, text: '用六：利永贞。', translation: '六爻皆阴，利于永久守正。', interpretation: '柔顺至极，以贞固自守，方能利终。' });
            } else if (chg && chg !== orig) {
                rules.push(makeRule('变卦卦辞', chg, null, chg.hexagramText, chg.hexagramTranslation));
            }
        }

        return { movingCount: n, rules: rules };
    }

    function makeRule(type, source, position, text, translation, interpretation) {
        return {
            type: type,
            source: source,
            position: position,
            text: text || '',
            translation: translation || '',
            interpretation: interpretation || ''
        };
    }

    // ===== 互卦计算 =====
    // 互卦下卦（内互）= 本卦二、三、四爻；互卦上卦（外互）= 本卦三、四、五爻
    function getNuclearGua(result) {
        if (!result || !result.yaoResults || result.yaoResults.length < 6) return null;
        var y = result.yaoResults;

        // 内互卦 = 二爻(bit0)、三爻(bit1)、四爻(bit2)
        var lowerBin = 0;
        if (y[1].isYang) lowerBin |= 1;
        if (y[2].isYang) lowerBin |= 2;
        if (y[3].isYang) lowerBin |= 4;

        // 外互卦 = 三爻(bit0)、四爻(bit1)、五爻(bit2)
        var upperBin = 0;
        if (y[2].isYang) upperBin |= 1;
        if (y[3].isYang) upperBin |= 2;
        if (y[4].isYang) upperBin |= 4;

        var lowerTri = binaryToTrigram(lowerBin);
        var upperTri = binaryToTrigram(upperBin);
        var nuclearGua = findGua(upperTri, lowerTri);

        return {
            gua: nuclearGua,
            upperTrigram: upperTri,
            lowerTrigram: lowerTri,
            upperBin: upperBin,
            lowerBin: lowerBin
        };
    }

    // ===== 比应当位分析 =====
    // 得位：阳爻居阳位(初/三/五)，阴爻居阴位(二/四/上)
    // 相应：初与四、二与五、三与上，一阴一阳为相应
    // 承乘：阴承阳为顺，阳承阴为逆
    function analyzeYaoPositions(result) {
        if (!result || !result.yaoResults || result.yaoResults.length < 6) return [];
        var y = result.yaoResults;
        var analysis = [];

        // 相应关系映射
        var correspondMap = { 0: 3, 1: 4, 2: 5, 3: 0, 4: 1, 5: 2 };

        for (var i = 0; i < 6; i++) {
            var pos = i + 1; // 爻位1-6
            var isYangPos = (pos % 2 === 1); // 奇数位为阳位
            var isYangYao = y[i].isYang;
            var isProper = (isYangPos === isYangYao); // 得位

            // 相应
            var partnerIdx = correspondMap[i];
            var isCorresponding = (y[i].isYang !== y[partnerIdx].isYang);

            // 承乘（只看与上一爻的关系）
            var chengCheng = '';
            if (i > 0) {
                var upperYao = y[i - 1]; // 数组中i-1是上面的爻（因为数组从初爻开始）
                // 等等，数组索引0=初爻(最下)，索引5=上爻(最上)
                // 所以对于第i爻(索引i)，它上面的爻是索引i+1，下面的爻是索引i-1
            }
            // 重新理清：索引0=初爻(最下)，索引5=上爻(最上)
            // 对于爻i(索引i)，上面的爻是i+1，下面的爻是i-1
            var cheng = ''; // 承：下爻对上爻
            var cheng2 = ''; // 乘：上爻对下爻
            if (i < 5) {
                var upper = y[i + 1];
                if (!isYangYao && upper.isYang) cheng = '阴承阳(顺)';
                else if (isYangYao && !upper.isYang) cheng = '阳承阴(逆)';
            }
            if (i > 0) {
                var lower = y[i - 1];
                if (isYangYao && !lower.isYang) cheng2 = '阳乘阴(顺)';
                else if (!isYangYao && lower.isYang) cheng2 = '阴乘阳(逆)';
            }

            analysis.push({
                position: pos,
                isYang: isYangYao,
                isYangPos: isYangPos,
                isProper: isProper,
                properText: isProper ? '得位' : '失位',
                corresponding: isCorresponding,
                correspondPos: partnerIdx + 1,
                correspondText: isCorresponding ? '与第' + (partnerIdx + 1) + '爻相应' : '与第' + (partnerIdx + 1) + '爻无应',
                chengText: cheng,
                cheng2Text: cheng2
            });
        }

        return analysis;
    }

    // ===== 导出 =====
    // 兼容旧接口
    window.trigramName = trigramName;
    window.trigramBinary = trigramBinary;

    window.dayanThreeChanges = function (seedTime) {
        var rng = createRng(seedTime);
        return dayanSingleYao(rng);
    };

    window.castGuaDayan = function (startTime) {
        return castHexagram('dayan', startTime);
    };

    // 新接口（推荐使用）
    window.Dayan = {
        createRng: createRng,
        dayanSingleYao: dayanSingleYao,
        coinSingleYao: coinSingleYao,
        castHexagram: castHexagram,
        getDivinationRule: getDivinationRule,
        getYaoText: getYaoText,
        findGua: findGua,
        binaryToTrigram: binaryToTrigram,
        getNuclearGua: getNuclearGua,
        analyzeYaoPositions: analyzeYaoPositions,
        trigramName: trigramName,
        trigramBinary: trigramBinary
    };

})();
