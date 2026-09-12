// ============================================
// DADOS DOS BOOST EMBLEMS
// Formato: id|nome|cores|attr+|val+|attr-|val-
// Cores: green, yellow, red, blue, white, black, brown, purple, pink, navy, gray
// Attrs: hp, atk, spAtk, def, spDef, speed, crit, cdr
// ============================================

const RAW_EMBLEMS = `
1|Bulbasaur|green|spAtk|3|hp|-50
2|Ivysaur|green|spAtk|3|def|-5
3|Venusaur|green|spAtk|3|atk|-2
4|Charmander|red|hp|50|atk|-2
5|Charmeleon|red|hp|50|spDef|-5
6|Charizard|red|hp|50|def|-5
7|Squirtle|blue|spAtk|3|hp|-50
8|Wartortle|blue|spAtk|3|def|-5
9|Blastoise|blue|spAtk|3|crit|-0.6
10|Caterpie|green|def|5|hp|-50
11|Metapod|green|def|5|speed|-35
12|Butterfree|green,white|def|5|atk|-2
13|Weedle|green|spDef|5|def|-5
14|Kakuna|green|spDef|5|speed|-35
15|Beedrill|green,black|spDef|5|hp|-50
16|Pidgey|white|hp|50|def|-5
17|Pidgeotto|white|hp|50|spDef|-5
18|Pidgeot|white|hp|50|spAtk|-3
19|Rattata|white|def|5|hp|-50
20|Raticate|white|def|5|spAtk|-3
21|Spearow|white|atk|2|spDef|-5
22|Fearow|white|atk|2|spAtk|-3
23|Ekans|black|atk|2|def|-5
24|Arbok|black|atk|2|spDef|-5
25|Pikachu|yellow|spDef|5|crit|-0.6
26|Raichu|yellow|spDef|5|hp|-50
27|Sandshrew|brown|crit|0.6|spDef|-5
28|Sandslash|brown|crit|0.6|spAtk|-3
29|NidoranF|purple|hp|50|spDef|-5
30|Nidorina|purple|hp|50|def|-5
31|Nidoqueen|purple,brown|hp|50|spAtk|-3
32|NidoranM|purple|atk|2|hp|-50
33|Nidorino|purple|atk|2|spDef|-5
34|Nidoking|purple,brown|atk|2|def|-5
35|Clefairy|pink|hp|50|def|-5
36|Clefable|pink|hp|50|speed|-35
37|Vulpix|red|spDef|5|hp|-50
38|Ninetales|red|spDef|5|atk|-2
39|Jigglypuff|pink|hp|50|spDef|-5
40|Wigglytuff|pink|hp|50|speed|-35
41|Zubat|black|speed|35|atk|-2
42|Golbat|black|speed|35|spDef|-5
43|Oddish|green|hp|50|speed|-35
44|Gloom|green|hp|50|def|-5
45|Vileplume|green,black|hp|50|atk|-2
46|Paras|green|def|5|crit|-0.6
47|Parasect|green|def|5|spAtk|-3
48|Venonat|green|hp|50|atk|-2
49|Venomoth|green,black|hp|50|crit|-0.6
50|Diglett|brown|speed|35|hp|-50
51|Dugtrio|brown|speed|35|def|-5
52|Meowth|white|crit|0.6|def|-5
53|Persian|white|crit|0.6|def|-5
54|Psyduck|blue|spDef|5|hp|-50
55|Golduck|blue|spDef|5|atk|-2
56|Mankey|brown|hp|50|def|-5
57|Primeape|brown|hp|50|spAtk|-3
58|Growlithe|red|spAtk|3|spDef|-5
59|Arcanine|red|spAtk|3|atk|-2
60|Poliwag|blue|spDef|5|def|-5
61|Poliwhirl|blue|spDef|5|hp|-50
62|Poliwrath|blue,brown|spDef|5|spAtk|-3
63|Abra|purple|spAtk|3|hp|-50
64|Kadabra|purple|spAtk|3|crit|-0.6
65|Alakazam|purple|spAtk|3|atk|-2
66|Machop|brown|atk|2|speed|-35
67|Machoke|brown|atk|2|spDef|-5
68|Machamp|brown|atk|2|spAtk|-3
69|Bellsprout|green|atk|2|def|-5
70|Weepinbell|green|atk|2|hp|-50
71|Victreebel|green,black|atk|2|spDef|-5
72|Tentacool|blue|spDef|5|hp|-50
73|Tentacruel|blue,black|spDef|5|crit|-0.6
74|Geodude|brown|def|5|spDef|-5
75|Graveler|brown|def|5|crit|-0.6
76|Golem|brown|def|5|spAtk|-3
77|Ponyta|red|atk|2|hp|-50
78|Rapidash|red|atk|2|def|-5
79|Slowpoke|blue|def|5|speed|-35
80|Slowbro|blue,purple|def|5|speed|-35
81|Magnemite|yellow|def|5|hp|-50
82|Magneton|yellow|def|5|atk|-2
83|Farfetchd|white|crit|0.6|hp|-50
84|Doduo|white|speed|35|hp|-50
85|Dodrio|white|speed|35|hp|-50
86|Seel|blue|hp|50|atk|-2
87|Dewgong|blue|hp|50|spAtk|-3
88|Grimer|black|hp|50|atk|-2
89|Muk|black|hp|50|spAtk|-3
90|Shellder|blue|def|5|hp|-50
91|Cloyster|blue|def|5|spDef|-5
92|Gastly|purple|speed|35|hp|-50
93|Haunter|purple|speed|35|def|-5
94|Gengar|purple,black|speed|35|atk|-2
95|Onix|brown|def|5|hp|-50
96|Drowzee|purple|spDef|5|speed|-35
97|Hypno|purple|spDef|5|crit|-0.6
98|Krabby|blue|atk|2|hp|-50
99|Kingler|blue|atk|2|spDef|-5
100|Voltorb|yellow|speed|35|hp|-50
101|Electrode|yellow|speed|35|atk|-2
102|Exeggcute|green|spAtk|3|spDef|-5
103|Exeggutor|green,purple|spAtk|3|speed|-35
104|Cubone|brown|atk|2|hp|-50
105|Marowak|brown|atk|2|spAtk|-3
106|Hitmonlee|brown|spDef|5|spAtk|-3
107|Hitmonchan|brown|spDef|5|spAtk|-3
108|Lickitung|white|def|5|speed|-35
109|Koffing|purple|def|5|hp|-50
110|Weezing|purple|def|5|speed|-35
111|Rhyhorn|brown|hp|50|speed|-35
112|Rhydon|brown|hp|50|spDef|-5
113|Chansey|white|hp|50|def|-5
114|Tangela|green|def|5|spDef|-5
115|Kangaskhan|white|hp|50|spAtk|-3
116|Horsea|blue|spAtk|3|hp|-50
117|Seadra|blue|spAtk|3|spDef|-5
118|Goldeen|blue|hp|50|spDef|-5
119|Seaking|blue|hp|50|spAtk|-3
120|Staryu|blue|speed|35|hp|-50
121|Starmie|blue,purple|speed|35|atk|-2
122|MrMime|purple,pink|spDef|5|hp|-50
123|Scyther|green,white|crit|0.6|def|-5
124|Jynx|blue,purple|spAtk|3|def|-5
125|Electabuzz|yellow|atk|2|def|-5
126|Magmar|red|spAtk|3|hp|-50
127|Pinsir|green|crit|0.6|spDef|-5
128|Tauros|white|atk|2|spAtk|-3
129|Magikarp|blue|atk|2|hp|-50
130|Gyarados|blue,white|atk|2|spAtk|-3
131|Lapras|blue|hp|50|speed|-35
133|Eevee|white|spDef|5|spAtk|-3
134|Vaporeon|blue|hp|50|atk|-2
135|Jolteon|yellow|spAtk|3|hp|-50
136|Flareon|red|atk|2|def|-5
137|Porygon|white|spAtk|3|atk|-2
138|Omanyte|brown|spAtk|3|hp|-50
139|Omastar|brown,blue|spAtk|3|speed|-35
140|Kabuto|brown|crit|0.6|hp|-50
141|Kabutops|brown,blue|crit|0.6|spAtk|-3
142|Aerodactyl|brown,white|speed|35|def|-5
143|Snorlax|white|spDef|5|crit|-0.6
144|Articuno|blue,white|spAtk|3|atk|-2
145|Zapdos|yellow,white|hp|50|atk|-2
146|Moltres|red,white|spAtk|3|spDef|-5
147|Dratini|navy|hp|50|speed|-35
148|Dragonair|navy|hp|50|atk|-2
149|Dragonite|navy,white|hp|50|spDef|-5
150|Mewtwo|purple|cdr|0.6|hp|-50
151|Mew|purple|cdr|0.6|hp|-50
152|Chicorita|green|def|5|hp|-50
153|Bayleef|green|def|5|speed|-35
154|Meganium|green|def|5|atk|-2
155|Cyndaquil|red|spAtk|3|hp|-50
156|Quilava|red|spAtk|3|def|-5
157|Typhlosion|red|spAtk|3|spDef|-5
158|Totodile|blue|def|5|hp|-50
159|Croconaw|blue|def|5|spDef|-5
160|Feraligatr|blue|def|5|spAtk|-3
161|Sentret|white|crit|0.6|spDef|-5
162|Furret|white|crit|0.6|spAtk|-3
163|Hoothoot|white|crit|0.6|atk|-2
164|Noctowl|white|crit|0.6|def|-5
165|Ledyba|green|spDef|5|crit|-0.6
166|Ledian|green|spDef|5|atk|-2
167|Spinarak|green|atk|2|crit|-0.6
168|Ariados|black|atk|2|spAtk|-3
169|Crobat|black|speed|35|spAtk|-3
170|Chinchou|yellow|hp|50|def|-5
171|Lanturn|yellow|hp|50|atk|-2
172|Pichu|yellow|speed|35|atk|-2
173|Cleffa|pink|hp|50|def|-5
174|Igglybuff|pink|hp|50|def|-5
175|Togepi|pink|spDef|5|speed|-35
176|Togetic|pink,white|spDef|5|hp|-50
177|Natu|purple|speed|35|crit|-0.6
178|Xatu|purple,white|speed|35|def|-5
179|Mareep|yellow|spAtk|3|def|-5
180|Flaaffy|yellow|spAtk|3|crit|-0.6
181|Ampharos|yellow|spAtk|3|atk|-2
182|Bellossom|green|spAtk|3|hp|-50
183|Marill|pink|hp|50|speed|-35
184|Azumarill|blue,pink|hp|50|speed|-35
185|Sudowoodo|brown|def|5|crit|-0.6
186|Politoed|blue|spDef|5|atk|-2
187|Hoppip|green|speed|35|hp|-50
188|Skiploom|green|speed|35|spAtk|-3
189|Jumpluff|green,white|speed|35|atk|-2
190|Aipom|white|crit|0.6|def|-5
191|Sunkern|green|hp|50|def|-5
192|Sunflora|green|hp|50|spDef|-5
193|Yanma|green|speed|35|def|-5
194|Wooper|blue|hp|50|spAtk|-3
195|Quagsire|blue,brown|hp|50|spDef|-5
196|Espeon|purple|spAtk|3|def|-5
197|Umbreon|black|spDef|5|spAtk|-3
198|Murkrow|black|spAtk|3|spDef|-5
199|Slowking|blue,purple|spDef|5|speed|-35
200|Misdreavus|purple|spDef|5|hp|-50
201|Unown|purple|atk|2|hp|-50
202|Wobbuffet|purple|hp|50|crit|-0.6
203|Girafarig|purple|hp|50|spDef|-5
204|Pineco|green|def|5|hp|-50
205|Forretress|gray|def|5|spAtk|-3
206|Dunsparce|white|hp|50|spAtk|-3
207|Gligar|brown|def|5|spAtk|-3
208|Steelix|gray,brown|def|5|spDef|-5
209|Snubbull|pink|atk|2|hp|-50
210|Granbull|pink|atk|2|spDef|-5
211|Qwilfish|black|hp|50|spDef|-5
212|Scizor|gray|crit|0.6|spDef|-5
213|Shuckle|brown|spDef|5|hp|-50
214|Heracross|brown|atk|2|hp|-50
215|Sneasel|black|crit|0.6|hp|-50
216|Teddiursa|white|atk|2|hp|-50
217|Ursaring|white|atk|2|speed|-35
218|Slugma|red|def|5|atk|-2
219|Magcargo|red|def|5|hp|-50
220|Swinub|blue|hp|50|spDef|-5
221|Piloswine|blue,brown|hp|50|crit|-0.6
222|Corsola|blue|spDef|5|atk|-2
223|Remoraid|blue|spAtk|3|hp|-50
224|Octillery|blue|spAtk|3|def|-5
225|Delibird|blue,white|spAtk|3|hp|-50
226|Mantine|blue,white|spDef|5|atk|-2
227|Skarmory|gray|atk|2|hp|-50
228|Houndour|red|atk|2|hp|-50
229|Houndoom|red,black|atk|2|def|-5
230|Kingdra|blue,navy|spAtk|3|speed|-35
231|Phanpy|brown|atk|2|hp|-50
232|Donphan|brown|atk|2|spDef|-5
233|Porygon2|white|spAtk|3|atk|-2
234|Stantler|white|spAtk|3|spDef|-5
235|Smeargle|white|hp|50|spAtk|-3
236|Tyrogue|brown|spDef|5|hp|-50
237|Hitmontop|brown|spDef|5|spAtk|-3
238|Smoochum|purple|spAtk|3|hp|-50
239|Elekid|yellow|atk|2|hp|-50
240|Magby|red|atk|2|def|-5
241|Miltank|white|def|5|spAtk|-3
242|Blissey|white|hp|50|atk|-2
243|Raikou|yellow|hp|50|atk|-2
244|Entei|red|hp|50|spAtk|-3
245|Suicune|blue|hp|50|atk|-2
246|Larvitar|brown|hp|50|spDef|-5
247|Pupitar|brown|hp|50|speed|-35
248|Tyranitar|brown,black|hp|50|crit|-0.6
249|Lugia|green,white|spAtk|4.5|atk|-3
250|Hooh|brown,white|atk|3|spAtk|-4.5
251|Celebi|green,purple|cdr|0.6|hp|-50
380|Latias|navy,purple|spDef|5|hp|-50
381|Latios|navy,purple|spAtk|3|def|-5
888|Zacian|gray,pink|atk|2|spAtk|-3
906|Sprigatito|green|speed|35|spDef|-5
907|Floragato|green|speed|35|def|-5
908|Meowscarada|green,black|speed|35|hp|-50
1008|Miraidon|yellow,navy|speed|35|hp|-50
`.trim();

// Parse dos emblemas
const emblemsData = RAW_EMBLEMS.split('\n').map(line => {
    const p = line.split('|');
    return {
        id: parseInt(p[0]),
        name: p[1],
        colors: p[2] ? p[2].split(',').map(c => c.trim()) : [],
        plus: p[3] && p[4] ? { attr: p[3], val: parseFloat(p[4]) } : null,
        minus: p[5] && p[6] ? { attr: p[5], val: parseFloat(p[6]) } : null
    };
});

// ============================================
// BÔNUS DE COR (SET BONUSES)
// ============================================
const SET_BONUSES = {
    green:  { attr: 'spAtk', name: 'Sp. Atk',           tiers: [2, 4, 6], values: [0.01, 0.02, 0.04],  color: '#4CAF50', emoji: '🟢' },
    yellow: { attr: 'speed', name: 'Velocidade',        tiers: [3, 5, 7], values: [0.04, 0.06, 0.12],  color: '#FFEB3B', emoji: '🟡' },
    red:    { attr: null,    name: 'Vel. Ataque Básico',tiers: [3, 5, 7], values: [0.02, 0.04, 0.08],  color: '#F44336', emoji: '🔴' },
    blue:   { attr: 'def',   name: 'Defesa',            tiers: [2, 4, 6], values: [0.02, 0.04, 0.08],  color: '#2196F3', emoji: '🔵' },
    white:  { attr: 'hp',    name: 'HP',                tiers: [2, 4, 6], values: [0.01, 0.02, 0.04],  color: '#E0E0E0', emoji: '⚪' },
    black:  { attr: null,    name: 'Redução de Recarga',tiers: [3, 5, 7], values: [-0.02, -0.04, -0.08], color: '#121212', emoji: '⚫' },
    brown:  { attr: 'atk',   name: 'Ataque',            tiers: [2, 4, 6], values: [0.01, 0.02, 0.04],  color: '#8D6E63', emoji: '🟤' },
    purple: { attr: 'spDef', name: 'Sp. Def',           tiers: [2, 4, 6], values: [0.02, 0.04, 0.08],  color: '#9C27B0', emoji: '🟣' },
    pink:   { attr: null,    name: 'Duração de Controle',tiers: [3, 5, 7], values: [-0.04, -0.08, -0.16], color: '#E91E63', emoji: '🌸' },
    navy:   { attr: null,    name: 'Unite Move',        tiers: [2, 4, 6], values: [0.01, 0.02, 0.04],  color: '#1A237E', emoji: '🔷' },
    gray:   { attr: null,    name: 'Redução de Dano',   tiers: [2, 4, 6], values: [0.01, 0.02, 0.04],  color: '#9E9E9E', emoji: '⬜' }
};
