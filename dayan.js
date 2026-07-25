// =========================================================
// 大衍筮法核心算法
// =========================================================

(function () {
    'use strict';

    // 八卦名称
    window.trigramName = {
        1: '乾',
        2: '兑',
        3: '离',
        4: '震',
        5: '巽',
        6: '坎',
        7: '艮',
        8: '坤'
    };

    // 八卦二进制编码（用于卦象变换）
    var trigramBinary = {
        1: 0b111, // 乾
        2: 0b110, // 兑
        3: 0b101, // 离
        4: 0b100, // 震
        5: 0b011, // 巽
        6: 0b010, // 坎
        7: 0b001, // 艮
        8: 0b000  // 坤
    };

    // 根据二进制值找八卦编号
    function findTrigramByBinary(bin) {
        for (var key in trigramBinary) {
            if (trigramBinary[key] === bin) return parseInt(key);
        }
        return null;
    }

    // 单次三变生成一个爻
    window.dayanThreeChanges = function (seedTime) {
        var t = seedTime || Date.now();

        // 第一次变
        t = ((t * 1664525 + 1013904223) % Math.pow(2, 32)) >>> 0;
        var left1 = (t % 44) + 1; // 左堆1-44根

        t = ((t * 1664525 + 1013904223) % Math.pow(2, 32)) >>> 0;
        var right1 = 49 - 1 - left1;

        // 挂一
        var remain1 = (left1 - 1) % 4 || 4;
        var total1 = left1 - 1 - remain1 + (right1 % 4 || 4);

        // 第二变
        t = ((t * 1664525 + 1013904223) % Math.pow(2, 32)) >>> 0;
        var left2 = (t % (total1 - 1)) + 1;
        var right2 = total1 - left2;
        var remain2 = (left2 - 1) % 4 || 4;
        var total2 = left2 - 1 - remain2 + (right2 % 4 || 4);

        // 第三变
        t = ((t * 1664525 + 1013904223) % Math.pow(2, 32)) >>> 0;
        if (total2 <= 4) {
            return { value: 8, type: '少阴', isMoving: false };
        }

        var left3 = (t % (total2 - 1)) + 1;
        var right3 = total2 - left3;
        var remain3 = (left3 - 1) % 4 || 4;
        var total3 = left3 - 1 - remain3 + (right3 % 4 || 4);

        if (total3 <= 4) {
            return { value: 9, type: '老阳', isMoving: true };
        } else if (total3 === 8) {
            return { value: 7, type: '少阳', isMoving: false };
        } else {
            return { value: 6, type: '老阴', isMoving: true };
        }
    };

    // 完整的大衍筮法起卦
    window.castGuaDayan = function (startTime) {
        var baseSeed = startTime || Date.now();
        var yaoResults = [];

        for (var i = 0; i < 6; i++) {
            var yaoSeed = baseSeed + i * 10000 + Math.floor(Math.random() * 1000);
            var yaoResult = window.dayanThreeChanges(yaoSeed);
            yaoResults.push(yaoResult);
        }

        // 从下往上构建爻位（第1爻在最下面）
        // 少阳(7)=阳，少阴(8)=阴，老阳(9)=阳动，老阴(6)=阴动
        var lowerBin = 0;
        var upperBin = 0;

        for (var j = 0; j < 3; j++) {
            // 下卦：爻1-3（从下往上）
            if (yaoResults[j].value === 7 || yaoResults[j].value === 9) {
                lowerBin |= (1 << j);
            }
            // 上卦：爻4-6（从下往上）
            if (yaoResults[j + 3].value === 7 || yaoResults[j + 3].value === 9) {
                upperBin |= (1 << j);
            }
        }

        var lowerTrigram = findTrigramByBinary(lowerBin);
        var upperTrigram = findTrigramByBinary(upperBin);

        // 查找本卦
        var originalGua = guaData.find(function (g) {
            return g.upper === upperTrigram && g.lower === lowerTrigram;
        });

        if (!originalGua) {
            console.error('未找到本卦:', upperTrigram, lowerTrigram);
            originalGua = guaData[0];
        }

        // 计算变卦
        var changedGua = originalGua;
        var movingYao = 0;
        var movingLines = [];

        yaoResults.forEach(function (yao, idx) {
            if (yao.isMoving) {
                movingLines.push(idx + 1);
                movingYao = idx + 1;
            }
        });

        if (movingLines.length > 0) {
            // 变换上/下卦的对应位
            var newUpperBin = upperBin;
            var newLowerBin = lowerBin;

            movingLines.forEach(function (lineNum) {
                if (lineNum <= 3) {
                    newLowerBin ^= (1 << (lineNum - 1));
                } else {
                    newUpperBin ^= (1 << (lineNum - 4));
                }
            });

            var newUpperTri = findTrigramByBinary(newUpperBin);
            var newLowerTri = findTrigramByBinary(newLowerBin);

            if (newUpperTri && newLowerTri) {
                changedGua = guaData.find(function (g) {
                    return g.upper === newUpperTri && g.lower === newLowerTri;
                }) || originalGua;
            }
        } else {
            // 无动爻时取第6爻作为参考
            movingYao = 0;
        }

        return {
            originalGua: originalGua,
            changedGua: changedGua,
            upperTrigram: upperTrigram,
            lowerTrigram: lowerTrigram,
            movingYao: movingYao,
            yaoResults: yaoResults
        };
    };

})();
