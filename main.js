/* =========================================================
 * 高岛易断 PWA - 核心交互逻辑
 * 使用 guaData.js 中提供的算法与数据
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
        result: null,
    };

    // —— 起卦流程 ——
    var castStepEl   = document.getElementById('cast-step');
    var castHintEl   = document.getElementById('cast-hint');
    var stalksEl     = document.getElementById('stalks');
    var hints = [
        '静心凝神，默念所问之事……',
        '取蓍草一束，随意分为两堆……',
        '依次数之，得上卦、下卦……',
        '最后一数，以定动爻……',
    ];

    document.getElementById('btn-start').addEventListener('click', function () {
        var q = document.getElementById('question').value.trim();
        if (!q) {
            alert('请先写下你所求之事');
            return;
        }
        state.question = q;
        state.now = formatNow();
        state.step = 0;
        showPage('casting');
        nextStep();
    });

    function nextStep() {
        state.step += 1;
        castStepEl.textContent = '第 ' + state.step + ' 步 / 共 3 步';
        castHintEl.textContent = hints[state.step] || '……';
        stalksEl.classList.remove('anim');
        // 触发动画
        void stalksEl.offsetWidth;
        stalksEl.classList.add('anim');
    }

    document.getElementById('btn-next').addEventListener('click', function () {
        if (state.step < 3) {
            nextStep();
        } else {
            finalize();
        }
    });

    function finalize() {
        // 三组随机数 —— 梅花易数
        var up  = Math.floor(Math.random() * 9999) + 1;
        var low = Math.floor(Math.random() * 9999) + 1;
        var yao = Math.floor(Math.random() * 9999) + 1;
        var r = window.castGua(up, low, yao);

        state.result = r;
        renderResult();
        // 尝试保存到本地
        try {
            var list = JSON.parse(localStorage.getItem('gaodao_history') || '[]');
            list.unshift({
                time: state.now,
                question: state.question,
                originalName: r.originalGua.name,
                changedName: r.changedGua.name,
                movingYao: r.movingYao
            });
            localStorage.setItem('gaodao_history', JSON.stringify(list.slice(0, 20)));
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
        document.getElementById('chg-detail').textContent = '动爻：第 ' + r.movingYao + ' 爻';
        document.getElementById('chg-text').textContent    = chg.summary.text;
        document.getElementById('chg-dialect').textContent = chg.summary.northeastDialect;

        showPage('result');
        window.scrollTo(0, 0);
    }

    document.getElementById('btn-restart').addEventListener('click', function () {
        document.getElementById('question').value = '';
        state = { step: 0, question: '', now: '', result: null };
        showPage('input');
        window.scrollTo(0, 0);
    });

    document.getElementById('btn-share').addEventListener('click', function () {
        var r = state.result;
        if (!r) return;
        var text =
            '【东观易·起卦记录】\n' +
            '时间：' + state.now + '\n' +
            '所问：' + state.question + '\n' +
            '本卦：' + r.originalGua.name + ' ' + (r.originalGua.symbol || '') + '\n' +
            '变卦：' + r.changedGua.name + ' ' + (r.changedGua.symbol || '') + '\n' +
            '动爻：第 ' + r.movingYao + ' 爻\n' +
            '解曰：' + r.originalGua.summary.text;

        var ok = false;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () { ok = true; alert('已复制到剪贴板'); });
        }
        if (!ok) {
            // 兼容降级
            var ta = document.createElement('textarea');
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); alert('已复制到剪贴板'); }
            catch (e) { prompt('请手动复制：', text); }
            document.body.removeChild(ta);
        }
    });

    // 初始页面
    showPage('input');
})();
