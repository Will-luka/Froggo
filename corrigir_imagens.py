import json, os, re

def norm(nome):
    return nome.lower().replace('.', '').replace('-', ' ').replace('_', ' ').strip()

with open('imagens.json', 'r', encoding='utf-8') as f:
    imagens = json.load(f)
with open('pokemons.json', 'r', encoding='utf-8') as f:
    pokemons = json.load(f)

for p in pokemons:
    nome = p['nome']
    arquivo = 'mrmime.html' if nome == 'Mr. Mime' else nome.lower().replace(' ', '-').replace('.', '') + '.html'
    if not os.path.exists(arquivo):
        continue
    with open(arquivo, 'r', encoding='utf-8') as f:
        html = f.read()

    # Itens
    for item in p.get('build', []):
        item_nome = item['nome']
        if item_nome == "LIVRE":
            imagem = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.1aevdZl5geQiW3haLNRongHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=5fc6c2d31523b905571e223d1ab02ed5618e37d9f0a914492e5200ac73042e71&ipo=images"
        else:
            imagem = None
            for chave, caminho in imagens.get('held_items', {}).items():
                if norm(chave) == norm(item_nome):
                    imagem = caminho
                    break
        if not imagem:
            continue
        padrao = re.compile(r'(<div class="build-item">.*?<h3 class="build-item-name">' + re.escape(item_nome) + r'</h3>)', re.DOTALL)
        m = padrao.search(html)
        if m and '<div class="item-placeholder">?</div>' in m.group(1):
            novo = m.group(1).replace('<div class="item-placeholder">?</div>', f'<img src="{imagem}" alt="{item_nome}" class="build-item-img">')
            html = html.replace(m.group(1), novo, 1)

    # Skills e Unite Moves
    for skill in p['habilidades']:
        emoji = skill.get('emoji', '')
        skill_nome = skill['nome']
        if not emoji:
            continue
        imagem = None
        skills_map = imagens.get('skills', {}).get(nome, {})
        for chave, caminho in skills_map.items():
            if norm(chave) == norm(skill_nome):
                imagem = caminho
                break
        if imagem:
            padrao = re.compile(r'(<h2 class="pokemon-card-title">\s*)' + re.escape(emoji) + r'\s*' + re.escape(skill_nome) + r'(\s*.*?</h2>)', re.DOTALL)
            m = padrao.search(html)
            if m:
                novo = f'{m.group(1)}<img src="{imagem}" alt="{skill_nome}" class="skill-title-img"> {skill_nome}{m.group(2)}'
                html = html.replace(m.group(0), novo, 1)

    unite = p.get('unite_move', {})
    if unite:
        nome_unite = unite['nome']
        imagem = None
        skills_map = imagens.get('skills', {}).get(nome, {})
        for chave, caminho in skills_map.items():
            if norm(chave) == norm(nome_unite):
                imagem = caminho
                break
        if imagem:
            padrao = re.compile(r'(<h2 class="pokemon-card-title">\s*)👑\s*Unite Move:\s*' + re.escape(nome_unite) + r'(\s*.*?</h2>)', re.DOTALL)
            m = padrao.search(html)
            if m:
                novo = f'{m.group(1)}<img src="{imagem}" alt="{nome_unite}" class="skill-title-img"> Unite Move: {nome_unite}{m.group(2)}'
                html = html.replace(m.group(0), novo, 1)

    with open(arquivo, 'w', encoding='utf-8') as f:
        f.write(html)

print('Correções aplicadas!')
