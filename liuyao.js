/* =========================================================
 * 东观易 · 六爻预测（纳甲法）核心模块 v2026.8.29
 * 包含：八宫卦序、纳甲、六亲、世应、五行、月建日辰、旺衰、用神、综合判断
 * ========================================================= */

const LiuYao = (function () {
    'use strict';

    // ========== 五行 ==========
    var WUXING = {
        // 天干五行
        tianGan: {
            '甲': '木', '乙': '木',
            '丙': '火', '丁': '火',
            '戊': '土', '己': '土',
            '庚': '金', '辛': '金',
            '壬': '水', '癸': '水'
        },
        // 地支五行
        diZhi: {
            '子': '水', '丑': '土',
            '寅': '木', '卯': '木',
            '辰': '土', '巳': '火',
            '午': '火', '未': '土',
            '申': '金', '酉': '金',
            '戌': '土', '亥': '水'
        },
        // 五行相生
        sheng: { '金': '水', '水': '木', '木': '火', '火': '土', '土': '金' },
        // 五行相克
        ke: { '金': '木', '木': '土', '土': '水', '水': '火', '火': '金' }
    };

    // ========== 八宫卦序 ==========
    // 每宫：纯卦、一世、二世、三世、四世、五世、游魂、归魂
    var BA_GONG = {
        '乾宫': { wuxing: '金', guas: [1, 44, 33, 12, 20, 23, 35, 14] },
        '兑宫': { wuxing: '金', guas: [58, 47, 45, 31, 39, 15, 62, 54] },
        '离宫': { wuxing: '火', guas: [30, 56, 50, 64, 4, 59, 6, 13] },
        '震宫': { wuxing: '木', guas: [51, 16, 40, 32, 46, 48, 28, 17] },
        '巽宫': { wuxing: '木', guas: [57, 9, 37, 42, 25, 21, 27, 18] },
        '坎宫': { wuxing: '水', guas: [29, 60, 3, 63, 49, 55, 36, 7] },
        '艮宫': { wuxing: '土', guas: [52, 22, 26, 41, 38, 10, 61, 53] },
        '坤宫': { wuxing: '土', guas: [2, 24, 19, 11, 34, 43, 5, 8] }
    };

    // 卦id -> 宫位信息
    var GUA_GONG = {};
    for (var gongName in BA_GONG) {
        var gong = BA_GONG[gongName];
        gong.guas.forEach(function (guaId, idx) {
            var type = ['纯卦', '一世', '二世', '三世', '四世', '五世', '游魂', '归魂'][idx];
            GUA_GONG[guaId] = {
                gong: gongName,
                wuxing: gong.wuxing,
                type: type,
                index: idx
            };
        });
    }

    // ========== 纳甲（每卦六爻的天干地支，从初爻到上爻） ==========
    var NA_JIA = {
        1: ['甲子', '甲寅', '甲辰', '壬午', '壬申', '壬戌'],  // 乾为天
        2: ['乙未', '乙巳', '乙卯', '癸丑', '癸亥', '癸酉'],  // 坤为地
        51: ['庚子', '庚寅', '庚辰', '庚午', '庚申', '庚戌'], // 震为雷
        57: ['辛丑', '辛亥', '辛酉', '辛未', '辛巳', '辛卯'], // 巽为风
        29: ['戊寅', '戊辰', '戊午', '戊申', '戊戌', '戊子'], // 坎为水
        30: ['己卯', '己丑', '己亥', '己酉', '己未', '己巳'], // 离为火
        52: ['丙辰', '丙午', '丙申', '丙戌', '丙子', '丙寅'], // 艮为山
        58: ['丁巳', '丁卯', '丁丑', '丁亥', '丁酉', '丁未']  // 兑为泽
    };

    // 根据上下卦获取纳甲
    function getNaJia(gua) {
        // 内卦（下卦）用该卦的纳甲前3爻
        // 外卦（上卦）用该卦的纳甲后3爻
        var lowerTri = gua.lower;
        var upperTri = gua.upper;
        var lowerNaJia = NA_JIA[getPureGuaId(lowerTri)];
        var upperNaJia = NA_JIA[getPureGuaId(upperTri)];
        return lowerNaJia.slice(0, 3).concat(upperNaJia.slice(3, 6));
    }

    // 八卦id -> 八纯卦id
    function getPureGuaId(trigramId) {
        var pureMap = { 1: 1, 2: 58, 3: 30, 4: 51, 5: 57, 6: 29, 7: 52, 8: 2 };
        return pureMap[trigramId];
    }

    // ========== 世应位置 ==========
    function getShiYing(guaId) {
        var info = GUA_GONG[guaId];
        if (!info) return { shi: 6, ying: 3 };
        var shiPos;
        switch (info.type) {
            case '纯卦': shiPos = 6; break;
            case '一世': shiPos = 1; break;
            case '二世': shiPos = 2; break;
            case '三世': shiPos = 3; break;
            case '四世': shiPos = 4; break;
            case '五世': shiPos = 5; break;
            case '游魂': shiPos = 4; break;
            case '归魂': shiPos = 3; break;
            default: shiPos = 6;
        }
        // 应爻与世爻相隔两爻
        var yingPos = shiPos <= 3 ? shiPos + 3 : shiPos - 3;
        return { shi: shiPos, ying: yingPos };
    }

    // ========== 六亲 ==========
    // 以宫五行为"我"：生我者父母，我生者子孙，克我者官鬼，我克者妻财，比和者兄弟
    function getLiuQin(guaId, naJiaList) {
        var info = GUA_GONG[guaId];
        var gongWuxing = info ? info.wuxing : '土';
        return naJiaList.map(function (ganzhi) {
            var zhi = ganzhi.charAt(1);
            var zhiWuxing = WUXING.diZhi[zhi];
            if (zhiWuxing === gongWuxing) return '兄弟';
            if (WUXING.sheng[gongWuxing] === zhiWuxing) return '子孙';
            if (WUXING.sheng[zhiWuxing] === gongWuxing) return '父母';
            if (WUXING.ke[zhiWuxing] === gongWuxing) return '官鬼';
            if (WUXING.ke[gongWuxing] === zhiWuxing) return '妻财';
            return '兄弟';
        });
    }

    // ========== 月建日辰 ==========
    // 月建：农历月份的地支
    function getYueJian(date) {
        // 简化：用公历月份近似（实际应为节气，但简化处理）
        // 寅月=立春后约2月4日-3月5日，卯月=3月6日-4月4日...
        var month = date.getMonth() + 1;
        var day = date.getDate();
        // 节气近似日期
        var jieqi = [
            { month: 1, day: 6, zhi: "丑" },   // 小寒
            { month: 2, day: 4, zhi: "寅" },   // 立春
            { month: 3, day: 6, zhi: "卯" },   // 惊蛰
            { month: 4, day: 5, zhi: "辰" },   // 清明
            { month: 5, day: 6, zhi: "巳" },   // 立夏
            { month: 6, day: 6, zhi: "午" },   // 芒种
            { month: 7, day: 7, zhi: "未" },   // 小暑
            { month: 8, day: 8, zhi: "申" },   // 立秋
            { month: 9, day: 8, zhi: "酉" },   // 白露
            { month: 10, day: 8, zhi: "戌" },  // 寒露
            { month: 11, day: 7, zhi: "亥" },  // 立冬
            { month: 12, day: 7, zhi: "子" }   // 大雪
        ];
        var zhi = '丑'; // 默认
        for (var i = 0; i < jieqi.length; i++) {
            var jq = jieqi[i];
            if (month > jq.month || (month === jq.month && day >= jq.day)) {
                zhi = jq.zhi;
            }
        }
        // 1月的情况特殊
        if (month === 1 && day < 6) zhi = '子';
        return zhi;
    }

    // 日辰：计算当天的天干地支
    // 基准：2000年1月1日是戊午日
    function getRiChen(date) {
        var baseDate = new Date(2000, 0, 1);
        var baseGanzhi = '戊午';
        var tianGan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
        var diZhi = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
        var baseGanIdx = tianGan.indexOf(baseGanzhi.charAt(0));
        var baseZhiIdx = diZhi.indexOf(baseGanzhi.charAt(1));
        var diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
        var ganIdx = ((baseGanIdx + diffDays) % 10 + 10) % 10;
        var zhiIdx = ((baseZhiIdx + diffDays) % 12 + 12) % 12;
        return tianGan[ganIdx] + diZhi[zhiIdx];
    }

    // ========== 旺相休囚死 ==========
    // 以月令五行论：同我者旺，我生者相，生我者休，克我者囚，我克者死
    function getWangShuai(yaoWuxing, yueZhi) {
        var yueWuxing = WUXING.diZhi[yueZhi];
        if (yaoWuxing === yueWuxing) return { level: '旺', score: 5 };
        if (WUXING.sheng[yueWuxing] === yaoWuxing) return { level: '相', score: 4 };
        if (WUXING.sheng[yaoWuxing] === yueWuxing) return { level: '休', score: 3 };
        if (WUXING.ke[yaoWuxing] === yueWuxing) return { level: '囚', score: 2 };
        if (WUXING.ke[yueWuxing] === yaoWuxing) return { level: '死', score: 1 };
        return { level: '平', score: 3 };
    }

    // ========== 用神选取 ==========
    function getYongShen(question) {
        var q = question || '';
        // 官鬼：工作、事业、官职、丈夫、疾病、盗贼、官非
        if (/工作|事业|升职|官职|官运|丈夫|老公|疾病|病|灾|盗贼|小偷|官非|官司|诉讼/.test(q)) {
            return { type: '官鬼', reason: '问工作/事业/疾病/官非，取官鬼为用神' };
        }
        // 妻财：财运、妻子、财产、交易、恋爱
        if (/财运|发财|赚钱|投资|股票|基金|钱|财富|妻子|老婆|财产|交易|买卖|恋爱|感情|对象|女朋友/.test(q)) {
            return { type: '妻财', reason: '问财运/感情/财产，取妻财为用神' };
        }
        // 子孙：子女、晚辈、动物、医药、解忧、下属
        if (/子女|儿子|女儿|孩子|晚辈|动物|宠物|猫|狗|医药|医生|医院|下属|员工|解忧|消灾/.test(q)) {
            return { type: '子孙', reason: '问子女/医药/动物，取子孙为用神' };
        }
        // 父母：父母、长辈、文书、房屋、车辆、考试、学业
        if (/父母|爸妈|爸爸|妈妈|父亲|母亲|长辈|老人|文书|文件|合同|房屋|房子|房产|车辆|车|考试|学业|学习|成绩|升学/.test(q)) {
            return { type: '父母', reason: '问父母/文书/房屋/考试，取父母为用神' };
        }
        // 兄弟：兄弟、朋友、同辈、竞争、合作
        if (/兄弟|哥哥|弟弟|姐妹|朋友|同事|同辈|竞争|对手|合作|合伙/.test(q)) {
            return { type: '兄弟', reason: '问兄弟/朋友/竞争，取兄弟为用神' };
        }
        // 默认：妻财（大多数占卜问财运感情）
        return { type: '妻财', reason: '未明确问事类型，默认取妻财为用神' };
    }

    // ========== 综合分析 ==========
    function analyze(castResult) {
        var gua = castResult.originalGua;
        var yaoResults = castResult.yaoResults;
        var question = castResult.question;
        var timestamp = castResult.timestamp || Date.now();
        var date = new Date(timestamp);

        // 1. 纳甲
        var naJiaList = getNaJia(gua);

        // 2. 六亲
        var liuQinList = getLiuQin(gua.id, naJiaList);

        // 3. 世应
        var shiYing = getShiYing(gua.id);

        // 4. 月建日辰
        var yueJian = getYueJian(date);
        var riChen = getRiChen(date);

        // 5. 宫位信息
        var gongInfo = GUA_GONG[gua.id] || { gong: '未知', wuxing: '土', type: '未知' };

        // 6. 每爻的五行和旺衰
        var yaoAnalysis = [];
        for (var i = 0; i < 6; i++) {
            var ganzhi = naJiaList[i];
            var zhi = ganzhi.charAt(1);
            var wuxing = WUXING.diZhi[zhi];
            var wangshuai = getWangShuai(wuxing, yueJian);
            // 日辰对爻的作用（日冲为暗动，日合为合住）
            var riZhi = riChen.charAt(1);
            var riEffect = '';
            if (riZhi === zhi) riEffect = '日临（伏吟）';
            else if (WUXING.ke[WUXING.diZhi[riZhi]] === wuxing) riEffect = '日克';
            else if (WUXING.sheng[WUXING.diZhi[riZhi]] === wuxing) riEffect = '日生';
            else if (WUXING.ke[wuxing] === WUXING.diZhi[riZhi]) riEffect = '爻克日（无力）';
            else if (WUXING.sheng[wuxing] === WUXING.diZhi[riZhi]) riEffect = '爻生日（泄气）';

            yaoAnalysis.push({
                position: i + 1,
                ganzhi: ganzhi,
                wuxing: wuxing,
                liuQin: liuQinList[i],
                isYang: yaoResults[i].isYang,
                isMoving: yaoResults[i].isMoving,
                value: yaoResults[i].value,
                wangshuai: wangshuai.level,
                wangshuaiScore: wangshuai.score,
                riEffect: riEffect,
                isShi: (i + 1) === shiYing.shi,
                isYing: (i + 1) === shiYing.ying
            });
        }

        // 7. 用神
        var yongShen = getYongShen(question);
        var yongShenYao = yaoAnalysis.filter(function (y) { return y.liuQin === yongShen.type; });

        // 8. 动爻分析
        var movingYao = yaoAnalysis.filter(function (y) { return y.isMoving; });

        // 9. 综合判断
        var judgment = buildJudgment(yaoAnalysis, yongShen, yongShenYao, movingYao, shiYing, yueJian, riChen, gongInfo, gua);

        return {
            gong: gongInfo.gong,
            gongWuxing: gongInfo.wuxing,
            guaType: gongInfo.type,
            naJia: naJiaList,
            liuQin: liuQinList,
            shiYing: shiYing,
            yueJian: yueJian,
            riChen: riChen,
            yaoAnalysis: yaoAnalysis,
            yongShen: yongShen,
            yongShenYao: yongShenYao,
            movingYao: movingYao,
            judgment: judgment
        };
    }

    // 构建综合判断
    function buildJudgment(yaoAnalysis, yongShen, yongShenYao, movingYao, shiYing, yueJian, riChen, gongInfo, gua) {
        var lines = [];

        // 基本信息
        lines.push('【六爻排盘】');
        lines.push(gua.name + ' · ' + gongInfo.gong + '(' + gongInfo.wuxing + ') · ' + gongInfo.type);
        lines.push('月建：' + yueJian + '月 · 日辰：' + riChen + '日');
        lines.push('世爻：第' + shiYing.shi + '爻 · 应爻：第' + shiYing.ying + '爻');
        lines.push('');

        // 用神
        lines.push('【用神】');
        lines.push(yongShen.reason);
        lines.push('用神：' + yongShen.type);
        if (yongShenYao.length > 0) {
            var ys = yongShenYao.map(function (y) {
                return '第' + y.position + '爻(' + y.ganzhi + '·' + y.wuxing + '·' + y.wangshuai + ')' + (y.isMoving ? '动' : '');
            }).join('、');
            lines.push('用神爻：' + ys);
        } else {
            lines.push('注意：本卦无' + yongShen.type + '爻，需看伏神（暂不支持伏神分析）');
        }
        lines.push('');

        // 旺衰判断
        lines.push('【旺衰分析】');
        if (yongShenYao.length > 0) {
            var mainYongShen = yongShenYao[0];
            var wangshuaiText = '';
            if (mainYongShen.wangshuaiScore >= 4) {
                wangshuaiText = '用神' + mainYongShen.wangshuai + '，有气有力，事可成';
            } else if (mainYongShen.wangshuaiScore === 3) {
                wangshuaiText = '用神' + mainYongShen.wangshuai + '，中平，需看动爻生扶';
            } else {
                wangshuaiText = '用神' + mainYongShen.wangshuai + '，休囚无力，事难成，需待时';
            }
            lines.push(wangshuaiText);
            if (mainYongShen.riEffect) {
                lines.push('日辰作用：' + mainYongShen.riEffect);
            }
        }
        lines.push('');

        // 动爻分析
        if (movingYao.length > 0) {
            lines.push('【动爻分析】');
            movingYao.forEach(function (y) {
                var effect = '';
                // 动爻对用神的作用
                if (yongShenYao.length > 0) {
                    var ys = yongShenYao[0];
                    if (y.position === ys.position) {
                        effect = '用神发动，事有变动，' + (y.wangshuaiScore >= 4 ? '动而有力，吉' : '动而无力，凶');
                    } else if (WUXING.sheng[y.wuxing] === ys.wuxing) {
                        effect = '动爻生用神，有贵人相助，吉';
                    } else if (WUXING.ke[y.wuxing] === ys.wuxing) {
                        effect = '动爻克用神，有阻碍，凶';
                    } else if (WUXING.sheng[ys.wuxing] === y.wuxing) {
                        effect = '动爻泄用神之气，有损耗';
                    } else if (WUXING.ke[ys.wuxing] === y.wuxing) {
                        effect = '动爻为用神所克，需费力';
                    } else {
                        effect = '动爻与用神比和，平稳';
                    }
                }
                lines.push('第' + y.position + '爻动（' + y.ganzhi + '·' + y.liuQin + '·' + y.wuxing + '）：' + effect);
            });
            lines.push('');
        }

        // 世应关系
        lines.push('【世应关系】');
        var shiYao = yaoAnalysis[shiYing.shi - 1];
        var yingYao = yaoAnalysis[shiYing.ying - 1];
        if (shiYao && yingYao) {
            if (WUXING.sheng[yingYao.wuxing] === shiYao.wuxing) {
                lines.push('应生世：对方生助我，得人相助，吉');
            } else if (WUXING.ke[yingYao.wuxing] === shiYao.wuxing) {
                lines.push('应克世：对方克制我，有压力阻碍，凶');
            } else if (WUXING.sheng[shiYao.wuxing] === yingYao.wuxing) {
                lines.push('世生应：我生助对方，我需付出，泄气');
            } else if (WUXING.ke[shiYao.wuxing] === yingYao.wuxing) {
                lines.push('世克应：我克制对方，我占主动，但费力');
            } else {
                lines.push('世应比和：双方平等，平稳');
            }
            lines.push('世爻：第' + shiYing.shi + '爻(' + shiYao.ganzhi + '·' + shiYao.liuQin + '·' + shiYao.wangshuai + ')');
            lines.push('应爻：第' + shiYing.ying + '爻(' + yingYao.ganzhi + '·' + yingYao.liuQin + '·' + yingYao.wangshuai + ')');
        }
        lines.push('');

        // 综合结论
        lines.push('【综合结论】');
        var conclusion = buildConclusion(yongShenYao, movingYao, shiYao, yingYao);
        lines.push(conclusion);

        return lines.join('\n');
    }

    // 构建结论
    function buildConclusion(yongShenYao, movingYao, shiYao, yingYao) {
        var score = 0;
        var reasons = [];

        // 用神旺衰
        if (yongShenYao.length > 0) {
            var ys = yongShenYao[0];
            score += ys.wangshuaiScore - 3; // -2到+2
            if (ys.wangshuaiScore >= 4) reasons.push('用神旺相');
            else if (ys.wangshuaiScore <= 2) reasons.push('用神休囚');
        }

        // 动爻生克
        movingYao.forEach(function (y) {
            if (yongShenYao.length > 0) {
                var ys = yongShenYao[0];
                if (y.position !== ys.position) {
                    if (WUXING.sheng[y.wuxing] === ys.wuxing) { score += 1; reasons.push('动爻生用神'); }
                    else if (WUXING.ke[y.wuxing] === ys.wuxing) { score -= 1; reasons.push('动爻克用神'); }
                }
            }
        });

        // 世应关系
        if (shiYao && yingYao) {
            if (WUXING.sheng[yingYao.wuxing] === shiYao.wuxing) { score += 1; reasons.push('应生世'); }
            else if (WUXING.ke[yingYao.wuxing] === shiYao.wuxing) { score -= 1; reasons.push('应克世'); }
        }

        var result = '';
        if (score >= 3) result = '大吉，事可成，且顺利';
        else if (score >= 1) result = '吉，事可成，但需努力';
        else if (score >= -1) result = '中平，成败参半，需看时机';
        else if (score >= -3) result = '凶，事难成，有阻碍';
        else result = '大凶，事必败，宜守不宜进';

        return result + '（' + reasons.join('，') + '）\n\n建议：' + (score >= 1 ? '积极进取，把握时机' : score <= -1 ? '宜守不宜进，等待时机' : '谨慎行事，随机应变');
    }

    // ========== 公开接口 ==========
    return {
        analyze: analyze,
        getNaJia: getNaJia,
        getLiuQin: getLiuQin,
        getShiYing: getShiYing,
        getYueJian: getYueJian,
        getRiChen: getRiChen,
        getYongShen: getYongShen,
        getWangShuai: getWangShuai,
        GUA_GONG: GUA_GONG,
        WUXING: WUXING
    };

})();
