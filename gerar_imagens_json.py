import os
import json

def gerar_mapeamento():
    mapeamento = {
        "held_items": {},
        "battle_items": {},
        "skills": {}
    }

    # Held Items
    pasta_held = "imagens/held-items"
    if os.path.exists(pasta_held):
        for arquivo in sorted(os.listdir(pasta_held)):
            if arquivo.endswith(".png"):
                nome_item = arquivo.replace(".png", "").replace("_", " ")
                mapeamento["held_items"][nome_item] = f"{pasta_held}/{arquivo}"

    # Battle Items
    pasta_battle = "imagens/battle-items"
    if os.path.exists(pasta_battle):
        for arquivo in sorted(os.listdir(pasta_battle)):
            if arquivo.endswith(".png"):
                nome_item = arquivo.replace(".png", "").replace("_", " ")
                mapeamento["battle_items"][nome_item] = f"{pasta_battle}/{arquivo}"

    # Skills
    pasta_skills = "imagens/skills"
    if os.path.exists(pasta_skills):
        for pokemon in sorted(os.listdir(pasta_skills)):
            caminho_pokemon = os.path.join(pasta_skills, pokemon)
            if os.path.isdir(caminho_pokemon):
                mapeamento["skills"][pokemon] = {}
                for arquivo in sorted(os.listdir(caminho_pokemon)):
                    if arquivo.endswith(".png"):
                        nome_skill = arquivo.replace(".png", "").replace("_", " ")
                        mapeamento["skills"][pokemon][nome_skill] = f"{pasta_skills}/{pokemon}/{arquivo}"

    with open("imagens.json", "w", encoding="utf-8") as f:
        json.dump(mapeamento, f, indent=2, ensure_ascii=False)

    print("✅ imagens.json gerado com sucesso!")

if __name__ == "__main__":
    gerar_mapeamento()
