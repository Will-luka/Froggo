import json
import os
import re

IMAGEM_LIVRE = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.1aevdZl5geQiW3haLNRongHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=5fc6c2d31523b905571e223d1ab02ed5618e37d9f0a914492e5200ac73042e71&ipo=images"

with open('imagens.json', 'r', encoding='utf-8') as f:
    imagens = json.load(f)

with open('pokemons.json', 'r', encoding='utf-8') as f:
    pokemons = json.load(f)

for pokemon in pokemons:
    nome = pokemon['nome']
    arquivo_base = nome.lower().replace(' ', '-').replace('.', '')
    if arquivo_base == 'mr-mime':
        arquivo = 'mrmime.html'
    else:
        arquivo = arquivo_base + '.html'

    if not os.path.exists(arquivo):
        print(f'❌ {arquivo} não encontrado')
        continue

    with open(arquivo, 'r', encoding='utf-8') as f:
        html = f.read()

    # === ITENS DA BUILD ===
    for item in pokemon.get('build', []):
        item_nome = item['nome']
        if item_nome == "LIVRE":
            imagem_item = IMAGEM_LIVRE
        else:
            imagem_item = None
            for chave, caminho in imagens.get('held_items', {}).items():
                if chave.lower() == item_nome.lower():
                    imagem_item = caminho
                    break

        if not imagem_item:
            print(f'⚠️ Sem imagem para item {item_nome} em {arquivo}')
            continue

        padrao = re.compile(
            r'(<div class="build-item">.*?<h3 class="build-item-name">' + re.escape(item_nome) + r'</h3>)',
            re.DOTALL
        )
        match = padrao.search(html)
        if match:
            bloco = match.group(1)
            if '<div class="item-placeholder">?</div>' in bloco:
                novo_bloco = bloco.replace('<div class="item-placeholder">?</div>', f'<img src="{imagem_item}" alt="{item_nome}" class="build-item-img">')
                html = html.replace(bloco, novo_bloco, 1)
                print(f'✅ Item {item_nome} atualizado em {arquivo}')
            else:
                print(f'ℹ️ Item {item_nome} já tinha imagem em {arquivo}')
        else:
            print(f'⚠️ Bloco do item {item_nome} não encontrado em {arquivo}')

    # === SKILLS ===
    for skill in pokemon['habilidades']:
        emoji = skill.get('emoji', '')
        skill_nome = skill['nome']
        if not emoji:
            continue
        imagem_skill = None
        skills_map = imagens.get('skills', {}).get(nome, {})
        for chave, caminho in skills_map.items():
            if chave.lower() == skill_nome.lower() or chave.lower().replace('_', ' ') == skill_nome.lower():
                imagem_skill = caminho
                break
        if not imagem_skill:
            print(f'⚠️ Sem imagem para skill {skill_nome} em {arquivo}')
            continue
        padrao = re.compile(
            r'(<h2 class="pokemon-card-title">\s*)' + re.escape(emoji) + r'\s*' + re.escape(skill_nome) + r'(\s*.*?</h2>)',
            re.DOTALL
        )
        match = padrao.search(html)
        if match:
            novo_titulo = f'{match.group(1)}<img src="{imagem_skill}" alt="{skill_nome}" class="skill-title-img"> {skill_nome}{match.group(2)}'
            html = html.replace(match.group(0), novo_titulo, 1)
            print(f'✅ Skill {skill_nome} atualizada em {arquivo}')
        else:
            print(f'⚠️ Título da skill {skill_nome} não encontrado em {arquivo}')

    # === UNITE MOVE ===
    unite = pokemon.get('unite_move', {})
    if unite:
        nome_unite = unite['nome']
        imagem_unite = None
        skills_map = imagens.get('skills', {}).get(nome, {})
        for chave, caminho in skills_map.items():
            if chave.lower() == nome_unite.lower() or chave.lower().replace('_', ' ') == nome_unite.lower():
                imagem_unite = caminho
                break
        if imagem_unite:
            padrao_unite = re.compile(
                r'(<h2 class="pokemon-card-title">\s*)👑\s*Unite Move:\s*' + re.escape(nome_unite) + r'(\s*.*?</h2>)',
                re.DOTALL
            )
            match = padrao_unite.search(html)
            if match:
                novo_titulo = f'{match.group(1)}<img src="{imagem_unite}" alt="{nome_unite}" class="skill-title-img"> Unite Move: {nome_unite}{match.group(2)}'
                html = html.replace(match.group(0), novo_titulo, 1)
                print(f'✅ Unite Move {nome_unite} atualizado em {arquivo}')
            else:
                print(f'⚠️ Título do Unite Move não encontrado em {arquivo}')

    with open(arquivo, 'w', encoding='utf-8') as f:
        f.write(html)

print('Concluído!')
