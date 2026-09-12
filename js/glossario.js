// ============================================
// RENDERIZAÇÃO DO GLOSSÁRIO
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('glossario-list');
    const busca = document.getElementById('glossario-search');
    const filtros = document.getElementById('glossario-filters');
    const contador = document.getElementById('glossario-count');
    if (!lista) return;

    let categoriaAtual = 'all';

    function renderizar() {
        const termo = busca.value.toLowerCase().trim();
        const filtrados = GLOSSARIO.filter(item => {
            if (categoriaAtual !== 'all' && item.categoria !== categoriaAtual) return false;
            if (termo && !item.termo.toLowerCase().includes(termo) && !item.def.toLowerCase().includes(termo)) return false;
            return true;
        });

        contador.textContent = `${filtrados.length} termo(s)`;

        if (filtrados.length === 0) {
            lista.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--lighter-gray);padding:2rem;">Nenhum termo encontrado.</p>';
            return;
        }

        lista.innerHTML = filtrados.map(item => `
            <div class="glossario-card">
                <div class="glossario-termo">
                    ${item.termo}
                    <span class="glossario-cat glossario-cat-${item.categoria}">${item.categoria}</span>
                </div>
                <p class="glossario-def">${item.def}</p>
            </div>
        `).join('');
    }

    busca.addEventListener('input', renderizar);

    filtros.addEventListener('click', function (e) {
        const btn = e.target.closest('.glossario-filter-btn');
        if (!btn) return;
        filtros.querySelectorAll('.glossario-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        categoriaAtual = btn.dataset.cat;
        renderizar();
    });

    renderizar();
});