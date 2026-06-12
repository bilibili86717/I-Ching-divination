/* =========================================================
 * 东观易 PWA - 核心交互逻辑
 * 支持：大衍筮法（正宗周易起卦）
 * ========================================================= */

(function () {
    'use strict';

    // —— 页面切换 ——
    function showPage(name) {
        document.querySelectorAll('.page').forEach(function (el) {
            if (el.dataset.page === name) el.classList.remove('hidden');
            else el.classList.add('hidden');
        });
    }

    // —— 时间格式化 ——
    function formatNow() {
        var d = new Date();
        var p = function (n) { return n < 10 ? '0' + n : n; };
        return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) +
               ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
    }

    // —— 状态 ——
    var state = {
        step: 0,
        question: '',
        now: '',
        result: null
    };

    // —— 大衍筮法18变流程 ——
    var castStepEl   = document.getElementById('cast-step');
    var castHintEl   = document.getElementById('cast-hint');
    var stalksEl     = document.getElementById('stalks');
    var yaoProgressEl = document.getElementById('yao-progress');
    var yaoDisplayEl  = document.getElementById('yao-display');
    
    // 当前正在生成的爻（1-6）
    var currentYao = 1;
    
    // 大衍筮法步骤提示（6爻 × 3变 = 18变）
    var dayanSteps = [
        // 第1爻
        '【初爻·第1变】分二：取四十九根蓍草，随意分成两堆',
        '【初爻·第2变】挂一：从右堆取一根，夹在小指与无名指间',
        '【初爻·第3变】揲四归奇：每四根一数，归余于左手',
        
        // 第2爻
        '【二爻·第1变】分二：将剩余蓍草再分两堆',
        '【二爻·第2变】挂一：取一根夹指间',
        '【二爻·第3变】揲四归奇：数之归余',
        
        // 第3爻
        '【三爻·第1变】分二',
        '【三爻·第2变】挂一',
        '【三爻·第3变】揲四归奇',
        
        // 第4爻
        '【四爻·第1变】分二',
        '【四爻·第2变】挂一',
        '【四爻·第3变】揲四归奇',
        
        // 第5爻
        '【五爻·第1变】分二',
        '【五爻·第2变】挂一',
        '【五爻·第3变】揲四归奇',
        
        // 第6爻
        '【上爻·第1变】分二',
        '【上爻·第2变】挂一',
        '【上爻·第3变】揲四归奇 → 卦象已成'
    ];

    // 当前爻的状态（用于动画展示）
    var yaoStates = [];

    document.getElementById('btn-start').addEventListener('click', function () {
        var q = document.getElementById('question').value.trim();
        if (!q) {
            alert('请先写下你所求之事');
            return;
        }
        state.question = q;
        state.now = formatNow();
        state.step = 0;
        state.startTime = Date.now(); // 记录开始时间戳作为基础种子
        currentYao = 1;
        yaoStates = [];
        yaoDisplayEl.innerHTML = '';
        showPage('casting');
        nextStep();
    });

    function nextStep() {
        if (state.step < dayanSteps.length) {
            state.step += 1;
            castStepEl.textContent = '第 ' + state.step + ' 步 / 共 ' + dayanSteps.length + ' 步';
            castHintEl.textContent = dayanSteps[state.step - 1];
            yaoProgressEl.textContent = '完成 ' + state.step + ' 变';
            
            // 更新爻状态显示（每3变显示一个爻）
            // 使用当前点击的时间戳作为随机种子，确保每一步都由用户操作决定
            if (state.step % 3 === 0) {
                var clickTime = Date.now(); // 获取当前点击时间戳
                var yaoResult = window.dayanThreeChanges(clickTime);
                yaoStates.push(yaoResult);
                
                // 添加爻到显示区域
                var yaoEl = document.createElement('div');
                yaoEl.className = 'yao-item';
                yaoEl.innerHTML = '<span class="yao-num">第' + currentYao + '爻</span>' +
                                 '<span class="yao-symbol ' + (yaoResult.isMoving ? 'moving' : '') + '">' +
                                 (yaoResult.value === 7 || yaoResult.value === 9 ? '---' : '-- --') +
                                 '</span>' +
                                 '<span class="yao-type">' + yaoResult.type + '</span>';
                yaoDisplayEl.appendChild(yaoEl);
                yaoDisplayEl.scrollLeft = yaoDisplayEl.scrollWidth;
                
                currentYao++;
            }
            
            // 触发动画
            stalksEl.classList.remove('anim');
            void stalksEl.offsetWidth;
            stalksEl.classList.add('anim');
        } else {
            finalize();
        }
    }

    document.getElementById('btn-next').addEventListener('click', function () {
        nextStep();
    });

    // —— 完成起卦 ——
    function finalize() {
        // 使用开始时间戳确保结果一致性
        var r = window.castGuaDayan(state.startTime);
        state.result = r;
        renderResult();
        
        try {
            var list = JSON.parse(localStorage.getItem('dongguanyi_history') || '[]');
            list.unshift({
                time: state.now,
                question: state.question,
                originalName: r.originalGua.name,
                changedName: r.changedGua.name,
                movingYao: r.movingYao,
                method: '大衍筮法'
            });
            localStorage.setItem('dongguanyi_history', JSON.stringify(list.slice(0, 20)));
        } catch (e) {}
    }

    // —— 结果渲染 ——
    function renderResult() {
        var r = state.result;
        var orig = r.originalGua;
        var chg  = r.changedGua;

        document.getElementById('q-time').textContent = state.now;
        document.getElementById('q-text').textContent = state.question;

        document.getElementById('orig-symbol').textContent = orig.symbol || '—';
        document.getElementById('orig-name').textContent   = orig.name;
        document.getElementById('orig-detail').textContent =
            '上 ' + window.trigramName[r.upperTrigram] +
            ' 下 ' + window.trigramName[r.lowerTrigram];
        document.getElementById('orig-text').textContent    = orig.summary.text;
        document.getElementById('orig-dialect').textContent = orig.summary.northeastDialect;

        document.getElementById('chg-symbol').textContent = chg.symbol || '—';
        document.getElementById('chg-name').textContent   = chg.name;
        document.getElementById('chg-detail').textContent = r.movingYao > 0 ? '动爻：第 ' + r.movingYao + ' 爻' : '无动爻';
        document.getElementById('chg-text').textContent    = chg.summary.text;
        document.getElementById('chg-dialect').textContent = chg.summary.northeastDialect;

        // 显示六爻详情
        var yaoListEl = document.getElementById('yao-list');
        yaoListEl.innerHTML = '';
        r.yaoResults.forEach(function(yao, i) {
            var itemEl = document.createElement('div');
            itemEl.className = 'yao-row' + (yao.isMoving ? ' moving' : '');
            itemEl.innerHTML = 
                '<span class="yao-label">第' + (i+1) + '爻</span>' +
                '<span class="yao-line">' + (yao.value === 7 || yao.value === 9 ? '━━━' : '━━ ━━') + '</span>' +
                '<span class="yao-info">' + yao.type + ' (' + yao.value + ')' + (yao.isMoving ? ' ← 动' : '') + '</span>';
            yaoListEl.appendChild(itemEl);
        });

        showPage('result');
        window.scrollTo(0, 0);
    }

    // —— 重新起卦 ——
    document.getElementById('btn-restart').addEventListener('click', function () {
        document.getElementById('question').value = '';
        state = { step: 0, question: '', now: '', result: null };
        showPage('input');
        window.scrollTo(0, 0);
    });

    // —— 复制分享 ——
    document.getElementById('btn-share').addEventListener('click', function () {
        var r = state.result;
        if (!r) return;

        var yaoText = '';
        r.yaoResults.forEach(function(yao, i) {
            yaoText += '第' + (i+1) + '爻: ' + yao.type + '(' + yao.value + ')' + (yao.isMoving ? '动' : '') + '\n';
        });

        var text =
            '【东观易·起卦记录】\n' +
            '时间：' + state.now + '\n' +
            '方法：大衍筮法（五十蓍草法）\n' +
            '所问之事：' + state.question + '\n\n' +
            '━━━━━━━━━━━━━━━\n' +
            '六爻详情：\n' + yaoText + '\n' +
            '━━━━━━━━━━━━━━━\n' +
            '本卦：' + r.originalGua.name + ' ' + (r.originalGua.symbol || '') + '\n' +
            '卦辞：' + r.originalGua.summary.text + '\n\n' +
            '变卦：' + r.changedGua.name + ' ' + (r.changedGua.symbol || '') + '\n' +
            '卦辞：' + r.changedGua.summary.text + '\n' +
            '动爻：' + (r.movingYao > 0 ? '第' + r.movingYao + '爻' : '无动爻') + '\n\n' +
            '━━━━━━━━━━━━━━━\n' +
            '【请你作为AI顾问解读如下】\n\n' +
            '你是精通日本易圣高岛吞象《高岛易断》的资深易学顾问，严格遵循高岛氏的解卦方法，只引用《高岛易断》中的原文和案例进行解读，不掺杂其他流派的理论。\n\n' +
            '请为我生成以下两个版本的解读：\n\n' +
            '【版本一·标准解读】\n' +
            '结合我所问之事「' + state.question + '」，依据《高岛易断》对本卦「' + r.originalGua.name + '」及变卦「' + r.changedGua.name + '」' + (r.movingYao > 0 ? '（动爻：第' + r.movingYao + '爻）' : '（无动爻）') + '进行深入解读，分析吉凶悔吝，并给出具体的行动建议。\n\n' +
            '【版本二·东北话版本】\n' +
            '用地道的东北方言（口语化、接地气、使用东北特色词汇），结合所问之事「' + state.question + '」，以唠嗑聊天的风格解读此卦，说明吉凶、给出建议，让人一听就明白。';

        var ok = false;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () { ok = true; alert('已复制到剪贴板，可粘贴到豆包等AI工具进行解读'); });
        }
        if (!ok) {
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); alert('已复制到剪贴板，可粘贴到豆包等AI工具进行解读'); }
            catch (e) { prompt('请手动复制：', text); }
            document.body.removeChild(ta);
        }
    });

    showPage('input');
})();
