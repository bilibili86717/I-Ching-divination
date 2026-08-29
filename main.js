/* =========================================================
 * 东观易 · 大衍筮法 主程序 v2026.8.28
 * 完全手动起卦 · 蓍草分揲可视化 · 粒子背景 · 分层解卦
 * ========================================================= */

(function () {
    'use strict';

    // ========== 全局状态 ==========
    var state = {
        currentYao: 0,      // 当前爻 (0-5)
        currentBian: 0,     // 当前变 (0-2)
        yaoResults: [],     // 六爻结果
        remaining: 49,      // 当前剩余蓍草数
        leftCount: 0,       // 左堆数量
        rightCount: 0,      // 右堆数量
        castResult: null,   // 完整起卦结果
        question: ''        // 问事
    };

    // ========== DOM 元素 ==========
    var $ = function (id) { return document.getElementById(id); };
    var pages = {
        input: document.querySelector('[data-page="input"]'),
        casting: document.querySelector('[data-page="casting"]'),
        result: document.querySelector('[data-page="result"]')
    };

    // ========== 页面切换 ==========
    function showPage(name) {
        Object.keys(pages).forEach(function (k) {
            pages[k].classList.toggle('hidden', k !== name);
        });
        window.scrollTo(0, 0);
    }

    // ========== 粒子背景 ==========
    function initParticles() {
        var canvas = $('particle-canvas');
        if (!canvas) return;
        var ctx = canvas.getContext('2d');
        var particles = [];
        var PARTICLE_COUNT = 40;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        for (var i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(function (p) {
                p.x += p.vx;
                p.y += p.vy;
                p.pulse += 0.02;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                var a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(212, 175, 55, ' + a + ')';
                ctx.fill();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(212, 175, 55, ' + (a * 0.15) + ')';
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // ========== 蓍草渲染 ==========
    function renderStalks(containerId, count, highlightCount) {
        var container = $(containerId);
        if (!container) return;
        container.innerHTML = '';
        var displayCount = Math.min(count, 35);
        for (var i = 0; i < displayCount; i++) {
            (function (idx) {
                var stalk = document.createElement('div');
                stalk.className = 'stalk-item';
                stalk.style.animationDelay = (idx * 0.015) + 's';
                if (highlightCount && idx < highlightCount) {
                    setTimeout(function () { stalk.classList.add('highlight'); }, 200 + idx * 20);
                }
                container.appendChild(stalk);
            })(i);
        }
    }

    function updateCount(elementId, value) {
        var el = $(elementId);
        if (!el) return;
        el.textContent = value;
        el.classList.remove('change');
        void el.offsetWidth;
        el.classList.add('change');
    }

    function setOpHint(icon, text) {
        $('op-icon').textContent = icon;
        $('op-text').textContent = text;
    }

    function updateProgress() {
        $('cast-step').textContent = '第 ' + (state.currentYao + 1) + ' 爻 · 第 ' + (state.currentBian + 1) + ' 变';
        var completed = state.currentYao * 3 + state.currentBian;
        $('yao-progress').textContent = '完成 ' + completed + ' / 18 变';
    }

    // ========== 起卦流程（完全手动） ==========
    function startCasting() {
        state.question = $('question').value.trim() || '（未填写问事）';
        state.currentYao = 0;
        state.currentBian = 0;
        state.yaoResults = [];
        state.remaining = 49;

        $('yao-display').innerHTML = '';
        showPage('casting');

        // 初始化舞台
        updateCount('remaining-number', 49);
        updateCount('count-left', 0);
        updateCount('count-right', 0);
        $('gua-yi').classList.remove('show');
        $('gui-ji').classList.remove('show');
        renderStalks('stalks-left', 0);
        renderStalks('stalks-right', 0);

        // 进入分二阶段
        showFenErPanel();
    }

    // ---- 阶段1：分二（随手一分） ----
    function showFenErPanel() {
        updateProgress();
        setOpHint('✋', '第' + (state.currentYao + 1) + '爻第' + (state.currentBian + 1) + '变：静心凝神，默念所问，点击「分二」，将' + state.remaining + '根蓍草分而为二，以象天地');

        // 显示分二面板，隐藏其他
        $('fen-er-panel').classList.remove('hidden');
        $('diesi-panel').classList.add('hidden');

        // 按钮聚焦，方便回车确认
        setTimeout(function () {
            $('btn-fen-er').focus();
        }, 100);
    }

    // 随手一分（随机分二）
    function doFenEr() {
        // 随机分二：1到remaining-1
        state.leftCount = Math.floor(Math.random() * (state.remaining - 2)) + 1;
        state.rightCount = state.remaining - state.leftCount;

        updateCount('count-left', state.leftCount);
        updateCount('count-right', state.rightCount);
        renderStalks('stalks-left', state.leftCount);
        renderStalks('stalks-right', state.rightCount);

        // 自动挂一
        doGuaYi();
    }

    // ---- 挂一（自动） ----
    function doGuaYi() {
        setOpHint('☝️', '挂一：从右堆取出一根，挂于指间，以象三（天地人三才）');

        state.rightCount -= 1;
        updateCount('count-right', state.rightCount);
        renderStalks('stalks-right', state.rightCount);
        $('gua-yi').classList.add('show');

        // 切换到揲四面板
        $('fen-er-panel').classList.add('hidden');
        $('diesi-panel').classList.remove('hidden');

        // 300ms后自动揲四
        setTimeout(function () {
            showDieSiPanel();
        }, 300);
    }

    // ---- 阶段3：揲四（自动） ----
    function showDieSiPanel() {
        setOpHint('🔢', '揲四：左右两堆分别四根四根地数，以象四时（春夏秋冬）');
        $('diesi-text').textContent = '正在四根四根地数……';

        // 计算余数
        var leftRem = state.leftCount % 4;
        if (leftRem === 0) leftRem = 4;
        var rightRem = state.rightCount % 4;
        if (rightRem === 0) rightRem = 4;

        // 揲四高亮动画
        renderStalks('stalks-left', state.leftCount, state.leftCount - leftRem);
        renderStalks('stalks-right', state.rightCount, state.rightCount - rightRem);

        // 600ms后归奇
        setTimeout(function () {
            doGuiJi(leftRem, rightRem);
        }, 600);
    }

    // ---- 阶段4：归奇（自动） ----
    function doGuiJi(leftRem, rightRem) {
        var guiJiCount = leftRem + rightRem + 1; // +1是挂一的那根
        var newRemaining = state.remaining - guiJiCount;

        setOpHint('📿', '归奇：余数 ' + guiJiCount + ' 根（左余' + leftRem + '+右余' + rightRem + '+挂一1）归于指间，以象闰，剩余 ' + newRemaining + ' 根');

        $('diesi-text').textContent = '归奇：' + guiJiCount + ' 根置于一旁，剩余 ' + newRemaining + ' 根（÷4 = ' + (newRemaining / 4) + '）';

        // 更新归奇区
        $('gui-ji').classList.add('show');
        $('gui-ji-count').textContent = guiJiCount;
        renderStalks('gui-ji-stalks', guiJiCount);

        // 更新剩余和左右堆
        state.remaining = newRemaining;
        updateCount('remaining-number', newRemaining);
        updateCount('count-left', state.leftCount - leftRem);
        updateCount('count-right', state.rightCount - rightRem);
        renderStalks('stalks-left', state.leftCount - leftRem);
        renderStalks('stalks-right', state.rightCount - rightRem);
        $('gua-yi').classList.remove('show');

        // 归奇完成，停留0.5秒后自动进入下一变
        setTimeout(function () {
            nextBian();
        }, 500);
    }

    // ---- 进入下一变 ----
    function nextBian() {
        state.currentBian++;

        if (state.currentBian >= 3) {
            // 三变完成，生成一爻
            generateYao();
            state.currentBian = 0;
            state.currentYao++;

            if (state.currentYao >= 6) {
                // 六爻完成
                finishCasting();
                return;
            }

            // 重置，准备下一爻
            state.remaining = 49;
            $('gui-ji').classList.remove('show');
            $('gua-yi').classList.remove('show');
            updateCount('count-left', 0);
            updateCount('count-right', 0);
            updateCount('remaining-number', 49);
            renderStalks('stalks-left', 0);
            renderStalks('stalks-right', 0);
        }

        // 进入下一变的分二阶段
        showFenErPanel();
    }

    // ---- 生成一爻 ----
    function generateYao() {
        var rem = state.remaining;
        var value = rem / 4; // 36->9, 32->8, 28->7, 24->6
        var isYang = (value === 7 || value === 9);
        var isMoving = (value === 6 || value === 9);

        var yao = {
            position: state.currentYao + 1,
            isYang: isYang,
            isMoving: isMoving,
            value: value
        };
        state.yaoResults.push(yao);
        addYaoToDisplay(yao, state.currentYao);

        var yaoName = isYang ? (isMoving ? '老阳(9)·变阴' : '少阳(7)') : (isMoving ? '老阴(6)·变阳' : '少阴(8)');
        setOpHint(isYang ? '⚊' : '⚋', '第 ' + (state.currentYao + 1) + ' 爻成：' + yaoName + '（剩余 ' + rem + ' ÷ 4 = ' + value + '）');
    }

    function addYaoToDisplay(yao, idx) {
        var display = $('yao-display');
        var line = document.createElement('div');
        line.className = 'yao-line';
        line.style.animationDelay = '0.1s';

        var bar = document.createElement('div');
        bar.className = 'yao-bar ' + (yao.isYang ? 'yang' : 'yin') + (yao.isMoving ? ' moving' : '');

        var info = document.createElement('div');
        info.className = 'yao-info';
        var pos = document.createElement('div');
        pos.className = 'yao-pos';
        pos.textContent = '第' + (idx + 1) + '爻';
        var val = document.createElement('div');
        val.className = 'yao-val' + (yao.isMoving ? ' moving' : '');
        val.textContent = (yao.isYang ? '阳' : '阴') + (yao.isMoving ? '·动' : '') + ' (' + yao.value + ')';

        info.appendChild(pos);
        info.appendChild(val);
        line.appendChild(bar);
        line.appendChild(info);
        display.appendChild(line);
    }

    // ========== 完成起卦 ==========
    function finishCasting() {
        $('yao-progress').textContent = '完成 18 / 18 变 · 六爻已成';
        setOpHint('☯', '六爻已成，正在推演卦象……');

        // 隐藏操作区
        $('manual-area').style.display = 'none';

        setTimeout(function () {
            var result = {
                method: 'dayan',
                question: state.question,
                yaoResults: state.yaoResults,
                movingLines: [],
                timestamp: Date.now()
            };

            // 计算本卦
            var lowerBin = 0, upperBin = 0;
            for (var i = 0; i < 3; i++) {
                if (state.yaoResults[i].isYang) lowerBin |= (1 << i);
            }
            for (var j = 3; j < 6; j++) {
                if (state.yaoResults[j].isYang) upperBin |= (1 << (j - 3));
            }
            var trigramBinary = {1:7,2:3,3:5,4:1,5:6,6:2,7:4,8:0};
            var lowerTri = 0, upperTri = 0;
            for (var t = 1; t <= 8; t++) {
                if (trigramBinary[t] === lowerBin) lowerTri = t;
                if (trigramBinary[t] === upperBin) upperTri = t;
            }
            result.originalGua = window.Dayan.findGua(upperTri, lowerTri);

            // 计算动爻和变卦
            var changedYao = state.yaoResults.map(function (y) {
                if (y.isMoving) {
                    result.movingLines.push(y.position);
                    return { isYang: !y.isYang, isMoving: false, value: y.isYang ? 8 : 7 };
                }
                return { isYang: y.isYang, isMoving: false, value: y.value };
            });

            var cLowerBin = 0, cUpperBin = 0;
            for (var k = 0; k < 3; k++) {
                if (changedYao[k].isYang) cLowerBin |= (1 << k);
            }
            for (var m = 3; m < 6; m++) {
                if (changedYao[m].isYang) cUpperBin |= (1 << (m - 3));
            }
            var cLowerTri = 0, cUpperTri = 0;
            for (var n = 1; n <= 8; n++) {
                if (trigramBinary[n] === cLowerBin) cLowerTri = n;
                if (trigramBinary[n] === cUpperBin) cUpperTri = n;
            }
            result.changedGua = window.Dayan.findGua(cUpperTri, cLowerTri);
            if (!result.changedGua) result.changedGua = result.originalGua;

            state.castResult = result;
            renderResult(result);
            saveHistory(result);
            showPage('result');

            // 恢复操作区（下次起卦用）
            $('manual-area').style.display = '';
        }, 1500);
    }

    // ========== 结果渲染 ==========
    function renderResult(result) {
        var orig = result.originalGua;
        var chg = result.changedGua;

        $('q-time').textContent = new Date(result.timestamp).toLocaleString('zh-CN');
        $('q-text').textContent = result.question;

        $('orig-symbol').textContent = orig.symbol;
        $('orig-name').textContent = orig.name;
        $('orig-detail').textContent = window.Dayan.trigramName[orig.upper] + '上' + window.Dayan.trigramName[orig.lower] + '下';
        $('chg-symbol').textContent = chg.symbol;
        $('chg-name').textContent = chg.name;
        $('chg-detail').textContent = window.Dayan.trigramName[chg.upper] + '上' + window.Dayan.trigramName[chg.lower] + '下';

        // 互卦
        var nuclear = window.Dayan.getNuclearGua(result);
        if (nuclear.gua && nuclear.gua.id !== orig.id) {
            $('nuclear-box').style.display = '';
            $('nuc-arrow').style.display = '';
            $('nuc-symbol').textContent = nuclear.gua.symbol;
            $('nuc-name').textContent = nuclear.gua.name;
            $('nuc-detail').textContent = window.Dayan.trigramName[nuclear.gua.upper] + '上' + window.Dayan.trigramName[nuclear.gua.lower] + '下';
        } else {
            $('nuclear-box').style.display = 'none';
            $('nuc-arrow').style.display = 'none';
        }

        $('orig-text').textContent = orig.hexagramText;
        $('orig-dialect').textContent = orig.summary.northeastDialect || orig.hexagramTranslation;
        $('chg-text').textContent = chg.hexagramText;
        $('chg-dialect').textContent = chg.summary.northeastDialect || chg.hexagramTranslation;

        renderYaoList(result);

        $('local-interpret-display').classList.add('hidden');
        $('local-interpret-display').innerHTML = '';
    }

    function renderYaoList(result) {
        var list = $('yao-list');
        list.innerHTML = '';
        result.yaoResults.forEach(function (yao, idx) {
            var yaoText = result.originalGua.yaoTexts[idx];
            var item = document.createElement('div');
            item.className = 'yao-list-item';
            item.style.animationDelay = (idx * 0.08) + 's';

            var bar = document.createElement('div');
            bar.className = 'yao-list-bar ' + (yao.isYang ? 'yang' : 'yin') + (yao.isMoving ? ' moving' : '');

            var info = document.createElement('div');
            info.className = 'yao-list-info';
            var pos = document.createElement('div');
            pos.className = 'yao-list-pos';
            pos.textContent = '第' + yao.position + '爻 · ' + (yao.isYang ? '阳' : '阴') + (yao.isMoving ? '（动）' : '');
            var text = document.createElement('div');
            text.className = 'yao-list-text';
            text.textContent = yaoText ? yaoText.text + ' — ' + yaoText.translation : '';

            info.appendChild(pos);
            info.appendChild(text);

            var tag = document.createElement('span');
            tag.className = 'yao-list-tag ' + (yao.isMoving ? 'moving' : 'stable');
            tag.textContent = yao.isMoving ? '动爻' : '静爻';

            item.appendChild(bar);
            item.appendChild(info);
            item.appendChild(tag);
            list.appendChild(item);
        });
    }

    // ========== 本地解卦 ==========
    function showLocalInterpret() {
        var display = $('local-interpret-display');
        var result = state.castResult;
        if (!result) return;

        display.innerHTML = '';
        display.classList.remove('hidden');

        var orig = result.originalGua;
        var chg = result.changedGua;
        var extra = guaExtra[orig.id] || {};
        var rule = window.Dayan.getDivinationRule(result);
        var nuclear = window.Dayan.getNuclearGua(result);
        var positions = window.Dayan.analyzeYaoPositions(result);

        // 1. 卦辞彖象
        var sec1 = document.createElement('div');
        sec1.className = 'interpret-section';
        sec1.innerHTML = '<h4>【卦辞·彖辞·象辞】</h4>' +
            '<p><strong>卦辞：</strong>' + orig.hexagramText + '</p>' +
            '<p><strong>白话：</strong>' + (orig.hexagramTranslation || '') + '</p>' +
            (extra.tuanText ? '<p><strong>彖曰：</strong>' + extra.tuanText + '</p>' : '') +
            (extra.xiangText ? '<p><strong>象曰：</strong>' + extra.xiangText + '</p>' : '');
        display.appendChild(sec1);

        // 2. 动爻详解
        if (result.movingLines.length > 0) {
            var sec2 = document.createElement('div');
            sec2.className = 'interpret-section';
            sec2.innerHTML = '<h4>【动爻详解】（' + result.movingLines.length + '爻动）</h4>';
            result.movingLines.forEach(function (pos) {
                var yaoText = orig.yaoTexts[pos - 1];
                var item = document.createElement('div');
                item.className = 'yao-detail-item moving';
                item.innerHTML = '<div class="yao-detail-title">第' + pos + '爻（' + (result.yaoResults[pos-1].isYang ? '老阳变阴' : '老阴变阳') + '）</div>' +
                    '<div class="yao-detail-text"><strong>爻辞：</strong>' + (yaoText ? yaoText.text : '') + '</div>' +
                    '<div class="yao-detail-text"><strong>白话：</strong>' + (yaoText ? yaoText.translation : '') + '</div>' +
                    '<div class="yao-detail-text"><strong>解读：</strong>' + (yaoText ? yaoText.interpretation : '') + '</div>';
                sec2.appendChild(item);
            });
            display.appendChild(sec2);
        }

        // 3. 变占规则
        var sec3 = document.createElement('div');
        sec3.className = 'interpret-section';
        sec3.innerHTML = '<h4>【朱熹变占七则】</h4>' +
            '<p>动爻数：' + result.movingLines.length + ' → ' + rule.description + '</p>' +
            '<p>取辞参考：' + rule.rules.map(function(r){return r.type + (r.position ? '（第' + r.position + '爻）' : '');}).join('、') + '</p>';
        display.appendChild(sec3);

        // 4. 互卦
        if (nuclear.gua) {
            var sec4 = document.createElement('div');
            sec4.className = 'interpret-section';
            sec4.innerHTML = '<h4>【互卦】事物发展的中间过程</h4>' +
                '<p>互卦：' + nuclear.gua.name + '（' + nuclear.gua.symbol + '）</p>' +
                '<p>互卦由本卦二三四爻（下互）与三四五爻（上互）组成，代表事物发展的内在趋势和中间阶段。</p>' +
                '<p><strong>卦辞：</strong>' + nuclear.gua.hexagramText + '</p>';
            display.appendChild(sec4);
        }

        // 5. 比应当位
        var sec5 = document.createElement('div');
        sec5.className = 'interpret-section';
        var tableHtml = '<h4>【爻位分析】比·应·当·位</h4>' +
            '<table class="position-table"><tr><th>爻位</th><th>阴阳</th><th>当位</th><th>相应</th><th>承乘</th></tr>';
        positions.forEach(function (p) {
            tableHtml += '<tr>' +
                '<td>第' + p.position + '爻</td>' +
                '<td>' + (p.isYang ? '阳' : '阴') + '</td>' +
                '<td class="' + (p.isProper ? 'proper' : 'improper') + '">' + p.properText + '</td>' +
                '<td class="' + (p.corresponding ? 'correspond' : '') + '">' + (p.corresponding ? '应第' + p.correspondPos + '爻' : '无应') + '</td>' +
                '<td>' + (p.chengText || '') + (p.cheng2Text || ' ') + '</td>' +
                '</tr>';
        });
        tableHtml += '</table>';
        var properCount = positions.filter(function(p){return p.isProper;}).length;
        var corrCount = 0;
        for (var i = 0; i < 3; i++) { if (positions[i].corresponding) corrCount++; }
        tableHtml += '<p style="margin-top:8px;font-size:12px;color:#8a6a4a;">得位 ' + properCount + '/6 · 相应 ' + corrCount + '/3 对</p>';
        sec5.innerHTML = tableHtml;
        display.appendChild(sec5);

        // 6. 综合建议
        var sec6 = document.createElement('div');
        sec6.className = 'interpret-section';
        var movingText = result.movingLines.length > 0
            ? '本卦' + orig.name + '，' + result.movingLines.length + '爻动，之卦' + chg.name + '。'
            : '本卦' + orig.name + '，六爻安静。';
        sec6.innerHTML = '<h4>【综合建议】</h4>' +
            '<p>' + movingText + '</p>' +
            '<p>卦义总纲：' + (orig.summary.text || '') + '</p>' +
            (nuclear.gua ? '<p>互卦' + nuclear.gua.name + '示中间过程，需关注事物内在变化趋势。</p>' : '') +
            '<p>建议：静则守' + orig.name + '之道，动则察' + chg.name + '之机。' + (properCount >= 4 ? '爻位多当位，行事较为顺遂。' : '爻位失位较多，需谨慎调整。') + '</p>';
        display.appendChild(sec6);

        // 7. 高岛占例
        if (extra.cases && extra.cases.length > 0) {
            var sec7 = document.createElement('div');
            sec7.className = 'interpret-section';
            sec7.innerHTML = '<h4>【高岛易断风格占例参考】</h4>';
            extra.cases.forEach(function (c) {
                var item = document.createElement('div');
                item.className = 'case-item';
                item.innerHTML = '<div class="case-title">' + c.category + ' · ' + c.title + '</div>' +
                    '<div class="case-text">' + c.content + '</div>';
                sec7.appendChild(item);
            });
            display.appendChild(sec7);
        }

        setTimeout(function () {
            display.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    // ========== 分享/复制 ==========
    function shareResult() {
        var result = state.castResult;
        if (!result) return;

        var orig = result.originalGua;
        var chg = result.changedGua;
        var extra = guaExtra[orig.id] || {};
        var nuclear = window.Dayan.getNuclearGua(result);
        var positions = window.Dayan.analyzeYaoPositions(result);
        var rule = window.Dayan.getDivinationRule(result);

        var text = '【周易起卦 · 大衍筮法】\n';
        text += '问事：' + result.question + '\n';
        text += '时间：' + new Date(result.timestamp).toLocaleString('zh-CN') + '\n\n';
        text += '━━━ 六爻 ━━━\n';
        for (var i = 5; i >= 0; i--) {
            var y = result.yaoResults[i];
            text += '第' + y.position + '爻: ' + (y.isYang ? '━━━ 阳' : '━ ━ 阴') + (y.isMoving ? '（动）' : '') + ' [' + y.value + ']\n';
        }
        text += '\n━━━ 卦象 ━━━\n';
        text += '本卦：' + orig.name + ' ' + orig.symbol + '\n';
        text += '卦辞：' + orig.hexagramText + '\n';
        if (extra.tuanText) text += '彖曰：' + extra.tuanText + '\n';
        if (extra.xiangText) text += '象曰：' + extra.xiangText + '\n';
        if (nuclear.gua) text += '互卦：' + nuclear.gua.name + ' ' + nuclear.gua.symbol + '\n';
        text += '变卦：' + chg.name + ' ' + chg.symbol + '\n';

        if (result.movingLines.length > 0) {
            text += '\n━━━ 动爻 ━━━\n';
            text += '动爻：第' + result.movingLines.join('、') + '爻\n';
            text += '变占规则：' + rule.description + '\n';
            result.movingLines.forEach(function (pos) {
                var yt = orig.yaoTexts[pos - 1];
                if (yt) {
                    text += '第' + pos + '爻辞：' + yt.text + '\n';
                    text += '  白话：' + yt.translation + '\n';
                }
            });
        }

        text += '\n━━━ 爻位分析 ━━━\n';
        positions.forEach(function (p) {
            text += '第' + p.position + '爻: ' + p.properText + '，' + (p.corresponding ? '应第' + p.correspondPos + '爻' : '无应') + (p.chengText ? '，' + p.chengText : '') + (p.cheng2Text ? ' ' + p.cheng2Text : '') + '\n';
        });

        text += '\n━━━ 请按以下要求解读 ━━━\n';
        text += '你是精通《高岛易断》的占卜顾问，严格仅引用《高岛易断》原文，禁止掺杂其他流派。\n';
        text += '请按以下结构输出：\n';
        text += '1. 卦象总断：结合本卦卦辞、彖辞、象辞，给出整体吉凶判断\n';
        text += '2. 动爻详解：逐条解释动爻爻辞及其对所问之事的具体影响\n';
        text += '3. 互卦启示：分析互卦所代表的中间过程和内在趋势\n';
        text += '4. 爻位分析：结合当位、相应、承乘关系，分析各爻态势\n';
        text += '5. 变卦趋势：分析从本卦到变卦的发展方向和最终结果\n';
        text += '6. 高岛占例：引用《高岛易断》中与本卦相关的占例作为参考\n';
        text += '7. 行动建议：针对所问之事，给出具体、可操作的建议\n';
        text += '\n所问之事：' + result.question + '\n';

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                showToast('卦象已复制，去AI解读吧！');
            }).catch(function () {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy');
            showToast('卦象已复制，去AI解读吧！');
        } catch (e) {
            showToast('复制失败，请手动复制');
        }
        document.body.removeChild(ta);
    }

    function showToast(msg) {
        var toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(58,46,33,0.92);color:#f3ead8;padding:16px 28px;border-radius:10px;font-size:15px;z-index:9999;animation:fadeIn 0.3s ease;';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(function () {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(function () { document.body.removeChild(toast); }, 300);
        }, 2000);
    }

    // ========== 历史记录 ==========
    function saveHistory(result) {
        try {
            var history = JSON.parse(localStorage.getItem('dayan_history') || '[]');
            history.unshift({
                question: result.question,
                originalGuaName: result.originalGua.name,
                changedGuaName: result.changedGua.name,
                movingLines: result.movingLines,
                timestamp: result.timestamp,
                yaoValues: result.yaoResults.map(function (y) { return y.value; })
            });
            if (history.length > 50) history = history.slice(0, 50);
            localStorage.setItem('dayan_history', JSON.stringify(history));
        } catch (e) {}
    }

    // ========== 事件绑定 ==========
    function bindEvents() {
        $('btn-start').addEventListener('click', function () {
            startCasting();
        });

        // 随手一分
        $('btn-fen-er').addEventListener('click', function () {
            doFenEr();
        });

        // 回车键支持：分二阶段确认
        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Enter') return;
            if (!$('fen-er-panel').classList.contains('hidden')) {
                e.preventDefault();
                doFenEr();
            }
        });

        $('btn-restart').addEventListener('click', function () {
            $('question').value = '';
            showPage('input');
        });

        $('btn-local-interpret').addEventListener('click', function () {
            showLocalInterpret();
        });

        $('btn-share').addEventListener('click', function () {
            shareResult();
        });

        $('question').addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                startCasting();
            }
        });
    }

    // ========== 初始化 ==========
    function init() {
        initParticles();
        bindEvents();
        showPage('input');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
