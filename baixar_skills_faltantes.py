import requests
import os

# Pokémon e suas skills
pokemon_skills = {
    "Eldegoss": ["Leafage", "Synthesis", "Pollen Puff", "Leaf Tornado", "Cotton Guard", "Cotton Spore", "Cotton Cloud Crash"],
    "Mr. Mime": ["Fake Out", "Confusion", "Psychic", "Barrier", "Power Swap", "Showtime"]
}

base = "https://d275t8dp8rxb42.cloudfront.net/skills/"

for pokemon, skills in pokemon_skills.items():
    pasta = f"imagens/skills/{pokemon}"
    os.makedirs(pasta, exist_ok=True)
    for s in skills:
        url = base + pokemon + "/" + s.replace(" ", "%20") + ".png"
        r = requests.get(url)
        if r.status_code == 200:
            nome_arquivo = s.replace(" ", "_") + ".png"
            with open(f"{pasta}/{nome_arquivo}", "wb") as f:
                f.write(r.content)
            print(f"✅ {pokemon}/{nome_arquivo}")
        else:
            print(f"❌ {pokemon}/{s} -> {r.status_code}")
