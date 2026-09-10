class CustomSelect {
    constructor(container, opcoes, onChange) {
        this.container = container;
        this.opcoes = opcoes;
        this.onChange = onChange;
        this.trigger = container.querySelector('.custom-select-trigger');
        this.optionsContainer = container.querySelector('.custom-select-options');
        this.img = container.querySelector('.custom-select-img');
        this.text = container.querySelector('.custom-select-text');
        this.value = null;
        this.init();
    }

    init() {
        this.opcoes.forEach(op => {
            const div = document.createElement('div');
            div.className = 'custom-select-option';
            div.innerHTML = `<img src="${op.img}" alt="${op.nome}" onerror="this.style.display='none'"><span>${op.nome}</span>`;
            div.addEventListener('click', () => {
                this.setValue(op);
                this.optionsContainer.style.display = 'none';
                if (this.onChange) this.onChange(op);
            });
            this.optionsContainer.appendChild(div);
        });

        this.trigger.addEventListener('click', () => {
            this.optionsContainer.style.display = this.optionsContainer.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target)) {
                this.optionsContainer.style.display = 'none';
            }
        });
    }

    setValue(op) {
        this.value = op.value;
        this.img.src = op.img;
        this.img.style.display = 'block';
        this.text.textContent = op.nome;
    }
}

function criarCustomSelects(configs) {
    const instancias = {};
    configs.forEach(cfg => {
        const container = document.querySelector(cfg.selector);
        if (container) {
            instancias[cfg.tipo] = new CustomSelect(container, cfg.opcoes, cfg.onChange);
        }
    });
    return instancias;
}
