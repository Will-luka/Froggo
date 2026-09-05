import json
import os

def gerar_tags(tags):
    """Gera HTML das tags do Pokémon."""
    html = ""
    for tag in tags:
        html += f'<span class="tag tag-{tag}">{tag.capitalize()}</span>\n'
    return html.strip()

def gerar_evolucao(evolucao):
    """Gera o card de evolução/transformação se existir."""
    if not evolucao:
        return ""
    html = '''
                <!-- Card: Evolução/Transformação -->
                <div class="pokemon-card">
                    <h2 class="pokemon-card-title">🔄 Evolução</h2>
                    <div class="pokemon-card-content">
                        <div class="evolution-chain">
'''
    for parte in evolucao:
        if parte['tipo'] == 'nome':
            html += f'                            <span class="evolution-name">{parte["valor"]}</span>\n'
        elif parte['tipo'] == 'seta':
            html += f'                            <span class="evolution-arrow">→</span>\n'
        elif parte['tipo'] == 'nivel':
            html += f'                            <span class="evolution-level">{parte["valor"]}</span>\n'
    html += '''                        </div>
                    </div>
                </div>
'''
    return html

def gerar_habilidades(habilidades):
    """Gera os cards de habilidades."""
    html = ""
    for h in habilidades:
        upgrade = h.get('upgrade', '')
        upgrade_html = ""
        if upgrade:
            upgrade_html = f'<span class="meta-upgrade">⭐ {upgrade}</span>\n'
        
        html += f'''
                <!-- Card: {h["nome"]} -->
                <div class="pokemon-card">
                    <h2 class="pokemon-card-title">
                        {h["emoji"]} {h["nome"]}
                        <span class="level-badge">Nível {h["nivel"]}</span>
                    </h2>
                    <div class="pokemon-card-content">
                        <p class="pokemon-card-text">
                            {h["descricao"]}
                        </p>
                        <div class="pokemon-card-meta">
                            {upgrade_html}
                            <span class="meta-cooldown">⏱️ Cooldown: {h["cooldown"]}</span>
                            <span class="meta-type">📋 Tipo: {h["tipo"]}</span>
                        </div>
                    </div>
                </div>
'''
    return html

def gerar_build(build):
    """Gera os cards da build recomendada."""
    html = ""
    for item in build:
        html += f'''
                            <div class="build-item">
                                <div class="build-item-icon">
                                    <div class="item-placeholder">?</div>
                                </div>
                                <div class="build-item-info">
                                    <h3 class="build-item-name">{item["nome"]}</h3>
                                    <p class="build-item-desc">{item["descricao"]}</p>
                                </div>
                            </div>
'''
    return html

def gerar_dicas(dicas):
    """Gera a lista de dicas."""
    html = ""
    for dica in dicas:
        html += f'                            <li>{dica}</li>\n'
    return html

# Lê o JSON
with open('pokemons.json', 'r', encoding='utf-8') as f:
    pokemons = json.load(f)

# Lê o template
with open('template_pokemon.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Processa cada Pokémon
for p in pokemons:
    html = template
    
    # Substituições básicas
    html = html.replace('{{NOME}}', p['nome'])
    html = html.replace('{{IMAGEM}}', p['imagem'])
    html = html.replace('{{DESCRICAO}}', p['descricao'])
    html = html.replace('{{TAGS}}', gerar_tags(p['tags']))
    
    # Passiva
    html = html.replace('{{PASSIVA_NOME}}', p['passiva']['nome'])
    html = html.replace('{{PASSIVA_DESCRICAO}}', p['passiva']['descricao'])
    cooldown_passiva = p['passiva'].get('cooldown', '')
    if cooldown_passiva:
        html = html.replace('{{PASSIVA_COOLDOWN}}', f'<p class="pokemon-card-text"><strong>Cooldown da passiva:</strong> {cooldown_passiva}</p>')
    else:
        html = html.replace('{{PASSIVA_COOLDOWN}}', '')
    
    # Ataque básico
    html = html.replace('{{ATAQUE_BASICO}}', p['ataque_basico'])
    
    # Evolução/Transformação
    html = html.replace('{{SECOES_EXTRA}}', gerar_evolucao(p.get('evolucao', [])))
    
    # Habilidades
    html = html.replace('{{HABILIDADES}}', gerar_habilidades(p['habilidades']))
    
    # Unite Move
    unite = p['unite_move']
    html = html.replace('{{UNITE_NOME}}', unite['nome'])
    html = html.replace('{{UNITE_NIVEL}}', unite['nivel'])
    html = html.replace('{{UNITE_DESCRICAO}}', unite['descricao'])
    html = html.replace('{{UNITE_COOLDOWN}}', unite['cooldown'])
    html = html.replace('{{UNITE_BUFFS}}', unite.get('buffs', ''))
    
    # Build
    html = html.replace('{{BUILD}}', gerar_build(p['build']))
    
    # Estratégias
    html = html.replace('{{EARLY_NIVEIS}}', p['estrategias']['early_niveis'])
    html = html.replace('{{EARLY_TEXTO}}', p['estrategias']['early'])
    html = html.replace('{{MID_NIVEIS}}', p['estrategias']['mid_niveis'])
    html = html.replace('{{MID_TEXTO}}', p['estrategias']['mid'])
    html = html.replace('{{LATE_NIVEIS}}', p['estrategias']['late_niveis'])
    html = html.replace('{{LATE_TEXTO}}', p['estrategias']['late'])
    
    # Dicas
    html = html.replace('{{DICAS}}', gerar_dicas(p['dicas']))
    
    # Nome do arquivo
    nome_arquivo = p['nome'].lower().replace(' ', '-').replace('.', '') + '.html'
    
    # Salva o arquivo
    with open(nome_arquivo, 'w', encoding='utf-8') as f:
        f.write(html)

print('Páginas geradas com sucesso!')