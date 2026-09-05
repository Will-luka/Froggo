// ============================================
// DADOS DOS POKÉMON SUPORTE
// ============================================

const pokemonData = {
    "Alcremie": {
        stats: [
            {lv:1, hp:3100, atk:120, def:40, spAtk:50, spDef:30},
            {lv:2, hp:3231, atk:124, def:46, spAtk:64, spDef:38},
            {lv:3, hp:3381, atk:128, def:53, spAtk:80, spDef:47},
            {lv:4, hp:4144, atk:149, def:89, spAtk:164, spDef:91},
            {lv:5, hp:4343, atk:154, def:99, spAtk:186, spDef:102},
            {lv:6, hp:4572, atk:160, def:110, spAtk:211, spDef:115},
            {lv:7, hp:4835, atk:167, def:123, spAtk:240, spDef:130},
            {lv:8, hp:5138, atk:175, def:137, spAtk:273, spDef:147},
            {lv:9, hp:5487, atk:184, def:154, spAtk:311, spDef:167},
            {lv:10, hp:5888, atk:195, def:173, spAtk:355, spDef:190},
            {lv:11, hp:6349, atk:208, def:195, spAtk:406, spDef:217},
            {lv:12, hp:6880, atk:222, def:220, spAtk:464, spDef:248},
            {lv:13, hp:7491, atk:239, def:249, spAtk:531, spDef:283},
            {lv:14, hp:8193, atk:258, def:282, spAtk:608, spDef:323},
            {lv:15, hp:9000, atk:280, def:320, spAtk:696, spDef:370}
        ],
        skills: [
            { nome: "Ataque Básico", tipo: "Dano", formula: (s, lv) => 0.45 * s.spAtk + 7 * (lv - 1) + 135 },
            { nome: "Helping Hand (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.50 * s.spAtk + 26 * (lv - 1) + 525 },
            { nome: "Charm (Dano)", tipo: "Dano", formula: (s, lv) => 1.00 * s.spAtk + 25 * (lv - 1) + 400 },
            { nome: "Decorate (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.28 * s.spAtk + 16 * (lv - 1) + 400 },
            { nome: "Decorate Lv10 (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.52 * s.spAtk + 20 * (lv - 1) + 480 },
            { nome: "Recover (Cura)", tipo: "Cura", formula: (s, lv) => 2.34 * s.spAtk + 14 * (lv - 1) + 297 },
            { nome: "Recover Fortalecido (Cura)", tipo: "Cura", formula: (s, lv) => 3.51 * s.spAtk + 22 * (lv - 1) + 446 },
            { nome: "Dazzling Gleam (Dano)", tipo: "Dano", formula: (s, lv) => 1.51 * s.spAtk + 17 * (lv - 1) + 340 },
            { nome: "Dazzling Gleam Lv12 (Dano)", tipo: "Dano", formula: (s, lv) => 1.80 * s.spAtk + 21 * (lv - 1) + 410 },
            { nome: "Sweet Scent Explosão (Dano)", tipo: "Dano", formula: (s, lv) => 0.629 * s.spAtk + 8 * (lv - 1) + 209 },
            { nome: "Sweet Scent Anel (Dano)", tipo: "Dano", formula: (s, lv) => 0.8925 * s.spAtk + 10 * (lv - 1) + 293 },
            { nome: "Unite Move (Cura por Creme)", tipo: "Cura", formula: (s, lv) => 0.19 * s.spAtk + 3 * (lv - 1) + 45 }
        ]
    },
    "Blissey": {
        stats: [
            {lv:1, hp:3278, atk:130, def:40, spAtk:40, spDef:60},
            {lv:2, hp:3427, atk:134, def:44, spAtk:52, spDef:65},
            {lv:3, hp:3598, atk:139, def:48, spAtk:66, spDef:71},
            {lv:4, hp:4467, atk:162, def:69, spAtk:138, spDef:102},
            {lv:5, hp:4694, atk:168, def:74, spAtk:157, spDef:110},
            {lv:6, hp:4955, atk:175, def:80, spAtk:179, spDef:119},
            {lv:7, hp:5255, atk:183, def:87, spAtk:204, spDef:130},
            {lv:8, hp:5600, atk:192, def:95, spAtk:233, spDef:142},
            {lv:9, hp:5997, atk:203, def:104, spAtk:266, spDef:156},
            {lv:10, hp:6454, atk:215, def:115, spAtk:304, spDef:172},
            {lv:11, hp:6980, atk:229, def:128, spAtk:348, spDef:191},
            {lv:12, hp:7585, atk:245, def:142, spAtk:398, spDef:213},
            {lv:13, hp:8281, atk:264, def:159, spAtk:456, spDef:238},
            {lv:14, hp:9081, atk:285, def:178, spAtk:523, spDef:267},
            {lv:15, hp:10000, atk:310, def:200, spAtk:600, spDef:300}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.38 * s.spAtk + 22 * (lv - 1) + 420 },
            { nome: "Pound (Dano)", tipo: "Dano", formula: (s, lv) => 0.47 * s.spAtk + 28 * (lv - 1) + 520 },
            { nome: "Heal Pulse (Cura por Tick)", tipo: "Cura", formula: (s, lv) => 0.40 * s.spAtk + 0 * (lv - 1) + 60 },
            { nome: "Egg Bomb (Dano)", tipo: "Dano", formula: (s, lv) => 0.41 * s.spAtk + 21 * (lv - 1) + 460 },
            { nome: "Soft-Boiled (Cura)", tipo: "Cura", formula: (s, lv) => 1.83 * s.spAtk + 0 * (lv - 1) + 238 },
            { nome: "Soft-Boiled HoT (Cura por Tick)", tipo: "Cura", formula: (s, lv) => 0.75 * s.spAtk + 0 * (lv - 1) + 92 },
            { nome: "Safeguard (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.85 * s.spAtk + 13 * (lv - 1) + 620 },
            { nome: "Safeguard Lv10 (Escudo)", tipo: "Escudo", formula: (s, lv) => 2.05 * s.spAtk + 14 * (lv - 1) + 690 },
            { nome: "Unite Move (Dano)", tipo: "Dano", formula: (s, lv) => 0.944 * s.spAtk + 25 * (lv - 1) + 1190 },
            { nome: "Unite Move (Escudo)", tipo: "Escudo", formula: (s, lv) => 2.40 * s.spAtk + 0 * (lv - 1) + 1200 }
        ]
    },
    "Clefable": {
        stats: [
            {lv:1, hp:3300, atk:130, def:40, spAtk:40, spDef:30},
            {lv:2, hp:3427, atk:134, def:46, spAtk:54, spDef:37},
            {lv:3, hp:3527, atk:138, def:53, spAtk:70, spDef:45},
            {lv:4, hp:4309, atk:160, def:87, spAtk:152, spDef:84},
            {lv:5, hp:4502, atk:166, def:96, spAtk:173, spDef:94},
            {lv:6, hp:4723, atk:173, def:106, spAtk:198, spDef:106},
            {lv:7, hp:4977, atk:181, def:118, spAtk:226, spDef:119},
            {lv:8, hp:5270, atk:190, def:131, spAtk:258, spDef:134},
            {lv:9, hp:5607, atk:200, def:146, spAtk:295, spDef:152},
            {lv:10, hp:5994, atk:211, def:164, spAtk:338, spDef:172},
            {lv:11, hp:6440, atk:224, def:184, spAtk:387, spDef:195},
            {lv:12, hp:6953, atk:239, def:207, spAtk:444, spDef:222},
            {lv:13, hp:7543, atk:257, def:234, spAtk:509, spDef:253},
            {lv:14, hp:8221, atk:277, def:265, spAtk:584, spDef:289},
            {lv:15, hp:9000, atk:300, def:300, spAtk:670, spDef:330}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.69 * s.spAtk + 17 * (lv - 1) + 320 },
            { nome: "Heal Pulse (Cura)", tipo: "Cura", formula: (s, lv) => 1.03 * s.spAtk + 0 * (lv - 1) + 345 },
            { nome: "Disarming Voice (Dano)", tipo: "Dano", formula: (s, lv) => 1.13 * s.spAtk + 19 * (lv - 1) + 590 },
            { nome: "Moonlight (Cura por Tick)", tipo: "Cura", formula: (s, lv) => 0.60 * s.spAtk + 0 * (lv - 1) + 55 },
            { nome: "Draining Kiss (Dano)", tipo: "Dano", formula: (s, lv) => 1.40 * s.spAtk + 20 * (lv - 1) + 350 },
            { nome: "Follow Me (Escudo)", tipo: "Escudo", formula: (s, lv) => 2.34 * s.spAtk + 0 * (lv - 1) + 810 },
            { nome: "Gravity (Dano Auto)", tipo: "Dano", formula: (s, lv) => 0.98 * s.spAtk + 10 * (lv - 1) + 410 },
            { nome: "Unite Move (Cura)", tipo: "Cura", formula: (s, lv) => "30% do HP faltante" }
        ]
    },
    "Comfey": {
        stats: [
            {lv:1, hp:3000, atk:120, def:40, spAtk:50, spDef:30},
            {lv:2, hp:3103, atk:126, def:47, spAtk:71, spDef:37},
            {lv:3, hp:3217, atk:133, def:55, spAtk:95, spDef:44},
            {lv:4, hp:3342, atk:140, def:64, spAtk:121, spDef:52},
            {lv:5, hp:3479, atk:148, def:74, spAtk:149, spDef:61},
            {lv:6, hp:3630, atk:157, def:85, spAtk:180, spDef:71},
            {lv:7, hp:3796, atk:167, def:97, spAtk:214, spDef:82},
            {lv:8, hp:3979, atk:178, def:110, spAtk:252, spDef:94},
            {lv:9, hp:4181, atk:190, def:125, spAtk:294, spDef:107},
            {lv:10, hp:4403, atk:203, def:141, spAtk:340, spDef:122},
            {lv:11, hp:4648, atk:217, def:159, spAtk:391, spDef:138},
            {lv:12, hp:4917, atk:233, def:179, spAtk:447, spDef:156},
            {lv:13, hp:5214, atk:250, def:200, spAtk:508, spDef:175},
            {lv:14, hp:5541, atk:269, def:224, spAtk:576, spDef:196},
            {lv:15, hp:5900, atk:290, def:250, spAtk:650, spDef:220}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.45 * s.spAtk + 11 * (lv - 1) + 210 },
            { nome: "Synthesis (Cura)", tipo: "Cura", formula: (s, lv) => 1.00 * s.spAtk + 0 * (lv - 1) + 140 },
            { nome: "Synthesis (Cura por Flor)", tipo: "Cura", formula: (s, lv) => 0.10 * s.spAtk + 0 * (lv - 1) + 40 },
            { nome: "Vine Whip (Dano)", tipo: "Dano", formula: (s, lv) => 0.86 * s.spAtk + 14 * (lv - 1) + 450 },
            { nome: "Floral Healing (Cura)", tipo: "Cura", formula: (s, lv) => 1.16 * s.spAtk + 0 * (lv - 1) + 300 },
            { nome: "Floral Healing (Cura por Flor)", tipo: "Cura", formula: (s, lv) => 0.18 * s.spAtk + 0 * (lv - 1) + 45 },
            { nome: "Sweet Kiss (Escudo Adicional)", tipo: "Escudo", formula: (s, lv) => 0.8045 * s.spAtk + 0 * (lv - 1) + 277 },
            { nome: "Magical Leaf (Dano por Folha)", tipo: "Dano", formula: (s, lv) => 0.16 * s.spAtk + 1 * (lv - 1) + 60 },
            { nome: "Grass Knot (Dano)", tipo: "Dano", formula: (s, lv) => 0.78 * s.spAtk + 10 * (lv - 1) + 410 },
            { nome: "Grass Knot (Dano Adicional)", tipo: "Dano", formula: (s, lv) => 0.55 * s.spAtk + 7 * (lv - 1) + 286 },
            { nome: "Unite Move (Cura por Tick)", tipo: "Cura", formula: (s, lv) => 0.225 * s.spAtk + 0 * (lv - 1) + 120 }
        ]
    },
    "Eldegoss": {
        stats: [
            {lv:1, hp:3278, atk:130, def:40, spAtk:40, spDef:30},
            {lv:2, hp:3383, atk:134, def:44, spAtk:54, spDef:33},
            {lv:3, hp:3503, atk:139, def:48, spAtk:70, spDef:36},
            {lv:4, hp:4114, atk:162, def:69, spAtk:152, spDef:52},
            {lv:5, hp:4274, atk:168, def:74, spAtk:173, spDef:56},
            {lv:6, hp:4457, atk:175, def:80, spAtk:198, spDef:61},
            {lv:7, hp:4668, atk:183, def:87, spAtk:226, spDef:66},
            {lv:8, hp:4911, atk:192, def:95, spAtk:258, spDef:72},
            {lv:9, hp:5190, atk:203, def:104, spAtk:295, spDef:79},
            {lv:10, hp:5511, atk:215, def:115, spAtk:338, spDef:87},
            {lv:11, hp:5880, atk:229, def:128, spAtk:387, spDef:96},
            {lv:12, hp:6305, atk:245, def:142, spAtk:444, spDef:107},
            {lv:13, hp:6794, atk:264, def:159, spAtk:509, spDef:119},
            {lv:14, hp:7356, atk:285, def:178, spAtk:584, spDef:133},
            {lv:15, hp:8002, atk:310, def:200, spAtk:670, spDef:149}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.73 * s.spAtk + 6 * (lv - 1) + 120 },
            { nome: "Leafage (Dano)", tipo: "Dano", formula: (s, lv) => 1.29 * s.spAtk + 11 * (lv - 1) + 210 },
            { nome: "Synthesis (Cura)", tipo: "Cura", formula: (s, lv) => 1.00 * s.spAtk + 5 * (lv - 1) + 350 },
            { nome: "Pollen Puff (Dano)", tipo: "Dano", formula: (s, lv) => 0.80 * s.spAtk + 5 * (lv - 1) + 155 },
            { nome: "Pollen Puff (Cura)", tipo: "Cura", formula: (s, lv) => 1.65 * s.spAtk + 14 * (lv - 1) + 330 },
            { nome: "Leaf Tornado (Primeiro Dano)", tipo: "Dano", formula: (s, lv) => 1.06 * s.spAtk + 6 * (lv - 1) + 240 },
            { nome: "Leaf Tornado (Segundo Dano)", tipo: "Dano", formula: (s, lv) => 0.25 * (1.06 * s.spAtk + 6 * (lv - 1) + 240) },
            { nome: "Cotton Guard (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.725 * s.spAtk + 23 * (lv - 1) + 290 },
            { nome: "Cotton Spore (Dano)", tipo: "Dano", formula: (s, lv) => 1.48 * s.spAtk + 14 * (lv - 1) + 350 },
            { nome: "Unite Move (Dano)", tipo: "Dano", formula: (s, lv) => 2.00 * s.spAtk + 8 * (lv - 1) + 530 },
            { nome: "Unite Move (Cura)", tipo: "Cura", formula: (s, lv) => 3.37 * s.spAtk + 14 * (lv - 1) + 700 }
        ]
    },
    "Hoopa": {
        stats: [
            {lv:1, hp:3278, atk:130, def:72, spAtk:40, spDef:50},
            {lv:2, hp:3443, atk:136, def:80, spAtk:61, spDef:55},
            {lv:3, hp:3624, atk:143, def:89, spAtk:84, spDef:61},
            {lv:4, hp:3823, atk:151, def:99, spAtk:109, spDef:67},
            {lv:5, hp:4041, atk:160, def:110, spAtk:136, spDef:74},
            {lv:6, hp:4282, atk:169, def:122, spAtk:166, spDef:82},
            {lv:7, hp:4547, atk:179, def:135, spAtk:199, spDef:91},
            {lv:8, hp:4839, atk:190, def:149, spAtk:236, spDef:100},
            {lv:9, hp:5161, atk:203, def:165, spAtk:276, spDef:110},
            {lv:10, hp:5516, atk:217, def:182, spAtk:320, spDef:122},
            {lv:11, hp:5906, atk:232, def:201, spAtk:369, spDef:135},
            {lv:12, hp:6335, atk:249, def:222, spAtk:423, spDef:149},
            {lv:13, hp:6808, atk:267, def:245, spAtk:482, spDef:164},
            {lv:14, hp:7329, atk:287, def:271, spAtk:547, spDef:181},
            {lv:15, hp:7902, atk:309, def:299, spAtk:619, spDef:200}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.53 * s.spAtk + 8 * (lv - 1) + 160 },
            { nome: "Astonish (Dano)", tipo: "Dano", formula: (s, lv) => 1.16 * s.spAtk + 18 * (lv - 1) + 340 },
            { nome: "Confusion (Dano Inicial)", tipo: "Dano", formula: (s, lv) => 0.56 * s.spAtk + 6 * (lv - 1) + 190 },
            { nome: "Confusion (Explosão)", tipo: "Dano", formula: (s, lv) => 1.12 * s.spAtk + 12 * (lv - 1) + 380 },
            { nome: "Hyperspace Hole (Dano)", tipo: "Dano", formula: (s, lv) => 1.12 * s.spAtk + 9 * (lv - 1) + 370 },
            { nome: "Trick (Escudo)", tipo: "Escudo", formula: (s, lv) => 2.00 * s.spAtk + 30 * (lv - 1) + 600 },
            { nome: "Phantom Force (Dano)", tipo: "Dano", formula: (s, lv) => 1.10 * s.spAtk + 14 * (lv - 1) + 320 },
            { nome: "Phantom Force (Chamas 2x)", tipo: "Dano", formula: (s, lv) => 0.55 * s.spAtk + 7 * (lv - 1) + 160 },
            { nome: "Shadow Ball (Dano)", tipo: "Dano", formula: (s, lv) => 0.90 * s.spAtk + 0 * (lv - 1) + 270 },
            { nome: "Shadow Ball (Dano Adicional)", tipo: "Dano", formula: (s, lv) => 0.25 * s.spAtk + 0 * (lv - 1) + 75 },
            { nome: "Hyperspace Fury (Dano por Acerto)", tipo: "Dano", formula: (s, lv) => 0.15 * s.spAtk + 2 * (lv - 1) + 40 },
            { nome: "Psybeam (Dano)", tipo: "Dano", formula: (s, lv) => 1.75 * s.spAtk + 12 * (lv - 1) + 590 }
        ]
    },
    "Latias": {
        stats: [
            {lv:1, hp:3300, atk:120, def:60, spAtk:100, spDef:60},
            {lv:2, hp:3489, atk:127, def:69, spAtk:127, spDef:69},
            {lv:3, hp:3697, atk:135, def:78, spAtk:156, spDef:79},
            {lv:4, hp:3925, atk:144, def:88, spAtk:188, spDef:90},
            {lv:5, hp:4175, atk:154, def:99, spAtk:223, spDef:102},
            {lv:6, hp:4451, atk:165, def:112, spAtk:262, spDef:116},
            {lv:7, hp:4755, atk:177, def:126, spAtk:305, spDef:131},
            {lv:8, hp:5089, atk:190, def:141, spAtk:352, spDef:148},
            {lv:9, hp:5458, atk:205, def:158, spAtk:404, spDef:166},
            {lv:10, hp:5864, atk:221, def:176, spAtk:462, spDef:186},
            {lv:11, hp:6312, atk:239, def:196, spAtk:525, spDef:208},
            {lv:12, hp:6804, atk:259, def:218, spAtk:595, spDef:232},
            {lv:13, hp:7346, atk:280, def:243, spAtk:672, spDef:259},
            {lv:14, hp:7943, atk:304, def:270, spAtk:757, spDef:288},
            {lv:15, hp:8600, atk:330, def:300, spAtk:850, spDef:320}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.50 * s.spAtk + 5 * (lv - 1) + 150 },
            { nome: "Confusion (Dano)", tipo: "Dano", formula: (s, lv) => 0.56 * s.spAtk + 6 * (lv - 1) + 190 },
            { nome: "Swift (Dano)", tipo: "Dano", formula: (s, lv) => 1.12 * s.spAtk + 12 * (lv - 1) + 380 },
            { nome: "Dragon Pulse (Dano)", tipo: "Dano", formula: (s, lv) => 1.12 * s.spAtk + 9 * (lv - 1) + 370 },
            { nome: "Dragon Breath (Dano)", tipo: "Dano", formula: (s, lv) => 0.90 * s.spAtk + 0 * (lv - 1) + 270 },
            { nome: "Mist Ball (Dano)", tipo: "Dano", formula: (s, lv) => 1.10 * s.spAtk + 14 * (lv - 1) + 320 },
            { nome: "Dragon Cheer (Escudo)", tipo: "Escudo", formula: (s, lv) => 2.00 * s.spAtk + 30 * (lv - 1) + 600 },
            { nome: "Unite Move (Dano)", tipo: "Dano", formula: (s, lv) => 2.00 * s.spAtk + 8 * (lv - 1) + 530 }
        ]
    },
    "Meganium": {
        stats: [
            {lv:1, hp:3640, atk:20, def:98, spAtk:106, spDef:98},
            {lv:2, hp:3726, atk:21, def:104, spAtk:113, spDef:104},
            {lv:3, hp:3828, atk:23, def:111, spAtk:121, spDef:111},
            {lv:4, hp:3952, atk:25, def:120, spAtk:131, spDef:120},
            {lv:5, hp:4397, atk:32, def:152, spAtk:166, spDef:152},
            {lv:6, hp:4575, atk:35, def:164, spAtk:180, spDef:164},
            {lv:7, hp:5384, atk:48, def:221, spAtk:245, spDef:221},
            {lv:8, hp:5639, atk:52, def:240, spAtk:265, spDef:240},
            {lv:9, hp:5946, atk:57, def:261, spAtk:289, spDef:261},
            {lv:10, hp:6314, atk:63, def:287, spAtk:319, spDef:287},
            {lv:11, hp:6755, atk:70, def:319, spAtk:354, spDef:319},
            {lv:12, hp:7285, atk:79, def:356, spAtk:396, spDef:356},
            {lv:13, hp:7921, atk:89, def:401, spAtk:446, spDef:401},
            {lv:14, hp:8684, atk:101, def:455, spAtk:507, spDef:455},
            {lv:15, hp:9600, atk:116, def:520, spAtk:580, spDef:520}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.69 * s.spAtk + 17 * (lv - 1) + 320 },
            { nome: "Magical Leaf (Dano)", tipo: "Dano", formula: (s, lv) => 0.90 * s.spAtk + 0 * (lv - 1) + 270 },
            { nome: "Synthesis (Cura)", tipo: "Cura", formula: (s, lv) => 1.03 * s.spAtk + 0 * (lv - 1) + 345 },
            { nome: "Grass Knot (Dano)", tipo: "Dano", formula: (s, lv) => 0.78 * s.spAtk + 10 * (lv - 1) + 410 },
            { nome: "Grass Knot (Dano Adicional)", tipo: "Dano", formula: (s, lv) => 0.55 * s.spAtk + 7 * (lv - 1) + 286 },
            { nome: "Petal Blizzard (Dano)", tipo: "Dano", formula: (s, lv) => 1.40 * s.spAtk + 20 * (lv - 1) + 350 },
            { nome: "Unite Move (Dano por Tick)", tipo: "Dano", formula: (s, lv) => 0.225 * s.spAtk + 0 * (lv - 1) + 120 }
        ]
    },
    "Mr. Mime": {
        stats: [
            {lv:1, hp:3150, atk:150, def:70, spAtk:50, spDef:60},
            {lv:2, hp:3365, atk:155, def:85, spAtk:64, spDef:73},
            {lv:3, hp:3602, atk:161, def:101, spAtk:80, spDef:87},
            {lv:4, hp:3862, atk:167, def:119, spAtk:97, spDef:102},
            {lv:5, hp:4148, atk:174, def:138, spAtk:116, spDef:119},
            {lv:6, hp:4463, atk:181, def:159, spAtk:137, spDef:138},
            {lv:7, hp:4810, atk:189, def:182, spAtk:160, spDef:159},
            {lv:8, hp:5192, atk:198, def:208, spAtk:185, spDef:182},
            {lv:9, hp:5613, atk:208, def:237, spAtk:213, spDef:207},
            {lv:10, hp:6077, atk:219, def:268, spAtk:244, spDef:235},
            {lv:11, hp:6588, atk:231, def:303, spAtk:278, spDef:265},
            {lv:12, hp:7150, atk:244, def:341, spAtk:315, spDef:298},
            {lv:13, hp:7769, atk:259, def:383, spAtk:356, spDef:335},
            {lv:14, hp:8450, atk:275, def:429, spAtk:401, spDef:375},
            {lv:15, hp:9200, atk:293, def:480, spAtk:450, spDef:420}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.50 * s.spAtk + 16 * (lv - 1) + 290 },
            { nome: "Fake Out (Dano)", tipo: "Dano", formula: (s, lv) => 1.94 * s.spAtk + 25 * (lv - 1) + 470 },
            { nome: "Confusion (Dano)", tipo: "Dano", formula: (s, lv) => 1.4875 * s.spAtk + 14 * (lv - 1) + 340 },
            { nome: "Confusion Parede (Dano)", tipo: "Dano", formula: (s, lv) => 2.00 * s.spAtk + 16 * (lv - 1) + 450 },
            { nome: "Confusion Power Swap (Dano)", tipo: "Dano", formula: (s, lv) => 0.80 * s.spAtk + 6 * (lv - 1) + 180 },
            { nome: "Psychic (Dano por Pulso)", tipo: "Dano", formula: (s, lv) => 0.216 * s.spAtk + 2 * (lv - 1) + 51 },
            { nome: "Psychic (Pulso Final)", tipo: "Dano", formula: (s, lv) => 0.72 * s.spAtk + 8 * (lv - 1) + 170 },
            { nome: "Power Swap (Dano por Tick)", tipo: "Dano", formula: (s, lv) => 0.18 * s.spAtk + 1 * (lv - 1) + 30 },
            { nome: "Power Swap (Cura por Tick)", tipo: "Cura", formula: (s, lv) => 0.21 * s.spAtk + 2 * (lv - 1) + 15 },
            { nome: "Unite Move (Primeiros 3 Danos)", tipo: "Dano", formula: (s, lv) => 0.79 * s.spAtk + 5 * (lv - 1) + 220 },
            { nome: "Unite Move (Dano Final)", tipo: "Dano", formula: (s, lv) => 1.58 * s.spAtk + 10 * (lv - 1) + 440 }
        ]
    },
    "Psyduck": {
        stats: [
            {lv:1, hp:3300, atk:130, def:80, spAtk:50, spDef:70},
            {lv:2, hp:3503, atk:137, def:90, spAtk:71, spDef:79},
            {lv:3, hp:3726, atk:144, def:101, spAtk:95, spDef:88},
            {lv:4, hp:3971, atk:152, def:113, spAtk:121, spDef:98},
            {lv:5, hp:4240, atk:161, def:127, spAtk:149, spDef:109},
            {lv:6, hp:4537, atk:171, def:142, spAtk:180, spDef:122},
            {lv:7, hp:4864, atk:182, def:159, spAtk:214, spDef:136},
            {lv:8, hp:5224, atk:194, def:177, spAtk:252, spDef:151},
            {lv:9, hp:5621, atk:207, def:197, spAtk:294, spDef:168},
            {lv:10, hp:6058, atk:222, def:219, spAtk:340, spDef:186},
            {lv:11, hp:6539, atk:238, def:244, spAtk:391, spDef:206},
            {lv:12, hp:7068, atk:256, def:271, spAtk:447, spDef:228},
            {lv:13, hp:7651, atk:275, def:301, spAtk:508, spDef:253},
            {lv:14, hp:8293, atk:296, def:334, spAtk:576, spDef:280},
            {lv:15, hp:9000, atk:320, def:370, spAtk:650, spDef:310}
        ],
        skills: [
            { nome: "Ataque Básico (Dano)", tipo: "Dano", formula: (s, lv) => 1.00 * s.atk },
            { nome: "Confusion (Dano)", tipo: "Dano", formula: (s, lv) => 0.70 * s.spAtk + 3 * (lv - 1) + 380 },
            { nome: "Confusion MP (Dano)", tipo: "Dano", formula: (s, lv) => 0.84 * s.spAtk + 3 * (lv - 1) + 456 },
            { nome: "Surf (Dano)", tipo: "Dano", formula: (s, lv) => 0.65 * s.spAtk + 4 * (lv - 1) + 304 },
            { nome: "Surf MP (Dano por Onda)", tipo: "Dano", formula: (s, lv) => 0.45 * s.spAtk + 3 * (lv - 1) + 212 },
            { nome: "Bubble Beam (Dano)", tipo: "Dano", formula: (s, lv) => 0.80 * s.spAtk + 4 * (lv - 1) + 360 },
            { nome: "Bubble Beam Bolhas (Dano por Bolha)", tipo: "Dano", formula: (s, lv) => 0.40 * s.spAtk + 2 * (lv - 1) + 180 },
            { nome: "Bubble Beam MP (Dano)", tipo: "Dano", formula: (s, lv) => 0.96 * s.spAtk + 5 * (lv - 1) + 432 },
            { nome: "Tail Whip (Dano)", tipo: "Dano", formula: (s, lv) => 0.60 * s.spAtk + 2 * (lv - 1) + 320 },
            { nome: "Disable (Dano)", tipo: "Dano", formula: (s, lv) => 0.63 * s.spAtk + 3 * (lv - 1) + 300 },
            { nome: "Psychic (Dano)", tipo: "Dano", formula: (s, lv) => 1.035 * s.spAtk + 9 * (lv - 1) + 495 },
            { nome: "Unite Move (Dano por Onda)", tipo: "Dano", formula: (s, lv) => 0.60 * s.spAtk + 6 * (lv - 1) + 300 }
        ]
    },
    "Sableye": {
        stats: [
            {lv:1, hp:3000, atk:110, def:40, spAtk:20, spDef:30},
            {lv:2, hp:3139, atk:117, def:46, spAtk:24, spDef:34},
            {lv:3, hp:3292, atk:124, def:52, spAtk:28, spDef:39},
            {lv:4, hp:3460, atk:132, def:59, spAtk:32, spDef:44},
            {lv:5, hp:3644, atk:141, def:67, spAtk:37, spDef:50},
            {lv:6, hp:3847, atk:151, def:75, spAtk:42, spDef:56},
            {lv:7, hp:4070, atk:162, def:84, spAtk:48, spDef:63},
            {lv:8, hp:4316, atk:174, def:94, spAtk:54, spDef:71},
            {lv:9, hp:4587, atk:187, def:105, spAtk:61, spDef:79},
            {lv:10, hp:4886, atk:202, def:117, spAtk:69, spDef:88},
            {lv:11, hp:5216, atk:218, def:131, spAtk:78, spDef:98},
            {lv:12, hp:5578, atk:236, def:146, spAtk:87, spDef:109},
            {lv:13, hp:5977, atk:255, def:162, spAtk:97, spDef:121},
            {lv:14, hp:6416, atk:276, def:180, spAtk:108, spDef:135},
            {lv:15, hp:6900, atk:300, def:200, spAtk:120, spDef:150}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 1.50 * s.atk },
            { nome: "Thief (Dano)", tipo: "Dano", formula: (s, lv) => 0.45 * s.atk + 6 * (lv - 1) + 190 },
            { nome: "Knock Off (Dano por Acerto)", tipo: "Dano", formula: (s, lv) => 0.56 * s.atk + 6 * (lv - 1) + 240 },
            { nome: "Shadow Sneak (Dano Adicional)", tipo: "Dano", formula: (s, lv) => 1.13 * s.atk + 12 * (lv - 1) + 480 },
            { nome: "Astonish Frontal (Dano)", tipo: "Dano", formula: (s, lv) => 0.81 * s.atk + 11 * (lv - 1) + 350 },
            { nome: "Astonish Costas (Dano)", tipo: "Dano", formula: (s, lv) => 1.053 * s.atk + 14 * (lv - 1) + 455 },
            { nome: "Feint Attack (Dano por Tick)", tipo: "Dano", formula: (s, lv) => 0.33 * s.atk + 2 * (lv - 1) + 80 },
            { nome: "Confuse Ray (Dano)", tipo: "Dano", formula: (s, lv) => 1.05 * s.atk + 12 * (lv - 1) + 450 },
            { nome: "Unite Move (Dano)", tipo: "Dano", formula: (s, lv) => 1.84 * s.atk + 16 * (lv - 1) + 790 }
        ]
    },
    "Wigglytuff": {
        stats: [
            {lv:1, hp:3278, atk:130, def:90, spAtk:40, spDef:80},
            {lv:2, hp:3415, atk:134, def:100, spAtk:51, spDef:89},
            {lv:3, hp:3573, atk:139, def:111, spAtk:64, spDef:99},
            {lv:4, hp:4372, atk:162, def:169, spAtk:131, spDef:151},
            {lv:5, hp:4581, atk:168, def:184, spAtk:148, spDef:165},
            {lv:6, hp:4821, atk:175, def:201, spAtk:168, spDef:181},
            {lv:7, hp:5097, atk:183, def:221, spAtk:191, spDef:199},
            {lv:8, hp:5414, atk:192, def:244, spAtk:217, spDef:220},
            {lv:9, hp:5779, atk:203, def:271, spAtk:247, spDef:244},
            {lv:10, hp:6199, atk:215, def:302, spAtk:282, spDef:271},
            {lv:11, hp:6681, atk:229, def:337, spAtk:322, spDef:302},
            {lv:12, hp:7236, atk:245, def:377, spAtk:368, spDef:338},
            {lv:13, hp:7874, atk:264, def:424, spAtk:421, spDef:379},
            {lv:14, hp:8608, atk:285, def:477, spAtk:482, spDef:427},
            {lv:15, hp:9452, atk:310, def:539, spAtk:552, spDef:482}
        ],
        skills: [
            { nome: "Ataque Básico (Boosted)", tipo: "Dano", formula: (s, lv) => 0.44 * s.spAtk + 18 * (lv - 1) + 340 },
            { nome: "Pound (Dano por Tapa)", tipo: "Dano", formula: (s, lv) => 0.35 * s.spAtk + 21 * (lv - 1) + 390 },
            { nome: "Double Slap (Dano por Tapa)", tipo: "Dano", formula: (s, lv) => 0.20 * s.spAtk + 10 * (lv - 1) + 230 },
            { nome: "Dazzling Gleam (Primeiro Dano)", tipo: "Dano", formula: (s, lv) => 0.22 * s.spAtk + 6 * (lv - 1) + 130 },
            { nome: "Dazzling Gleam (Segundo Dano)", tipo: "Dano", formula: (s, lv) => 1.125 * s.spAtk + 31 * (lv - 1) + 670 },
            { nome: "Rollout (Dano por Acerto)", tipo: "Dano", formula: (s, lv) => 0.47 * s.spAtk + 14 * (lv - 1) + 590 },
            { nome: "Unite Move (Escudo)", tipo: "Escudo", formula: (s, lv) => 1.519 * s.spAtk + 0 * (lv - 1) + 810 }
        ]
    }
};

// ============================================
// DADOS DOS HELD ITEMS
// ============================================

const heldItemsData = {
    "Accel Bracer": {
        atributos: { atk: 17.5, cdr: 3.5 },
        efeito: "Ganha acúmulos de Ataque ao nocautear (2 stacks) ou dar assistência (1 stack). Máximo de 20 acúmulos, cada um concede +0.6% de Ataque."
    },
    "Aeos Cookie": {
        atributos: { hp: 280 },
        efeito: "Cada gol marcado aumenta o HP máximo permanentemente em até 200 (máximo 6 vezes)."
    },
    "Amulet Coin": {
        atributos: { hp: 280, mov: 175 },
        efeito: "Garante mais Aeos Energy ao derrotar Pokémon selvagens e aumenta a velocidade de marcar gols em 10%."
    },
    "Assault Vest": {
        atributos: { hp: 315, spDef: 59.5 },
        efeito: "Se ficar 15s sem receber dano especial, ganha um escudo contra ataques especiais."
    },
    "Attack Weight": {
        atributos: { atk: 21 },
        efeito: "Aumenta permanentemente o Ataque a cada gol marcado (até 6 vezes)."
    },
    "Big Root": {
        atributos: { hp: 525 },
        efeito: "Melhora a eficácia de recuperação de HP própria (cura de si mesmo) em 20%."
    },
    "Buddy Barrier": {
        atributos: { hp: 525 },
        efeito: "Ao usar o Unite Move, concede um escudo de 25% do HP máximo para você e o aliado próximo com menos vida."
    },
    "Charging Charm": {
        atributos: { atk: 17.5, mov: 140 },
        efeito: "Carrega energia ao se mover ou atacar; quando cheia, o próximo ataque causa dano adicional."
    },
    "Choice Scarf": {
        atributos: { atkSpd: 8.75, mov: 175 },
        efeito: "Após 3 ataques básicos, a velocidade de movimento aumenta significativamente por 3s."
    },
    "Choice Specs": {
        atributos: { spAtk: 44 },
        efeito: "Ao atingir um oponente com um golpe, causa dano adicional baseado no Sp. Atk."
    },
    "Curse Bangle": {
        atributos: { atk: 28 },
        efeito: "Reduz a recuperação de HP do oponente em 30% por 1,5s após causar dano."
    },
    "Curse Incense": {
        atributos: { spAtk: 45.5 },
        efeito: "Reduz a recuperação de HP do oponente em 30% por 1,5s após causar dano."
    },
    "Drain Crown": {
        atributos: { hp: 140, atk: 21 },
        efeito: "Ataques básicos baseados em Ataque restauram HP proporcional ao dano causado (15%)."
    },
    "Drive Lens": {
        atributos: { spAtk: 28, cdr: 3.5 },
        efeito: "Ganha acúmulos de Sp. Atk em nocautes ou assistências (máximo 20 acúmulos, +0.6% cada)."
    },
    "Energy Amplifier": {
        atributos: { rate: 7, cdr: 5.25 },
        efeito: "Após usar o Unite Move, o dano causado aumenta em 21% por 4s."
    },
    "Exp. Share": {
        atributos: { hp: 420, mov: 175 },
        efeito: "Se for o nível mais baixo do time, ganha 5 de experiência por segundo."
    },
    "Float Stone": {
        atributos: { atk: 28, mov: 175 },
        efeito: "Fora de combate por 5s, aumenta a velocidade de movimento em 20%."
    },
    "Focus Band": {
        atributos: { def: 35, spDef: 35 },
        efeito: "Quando o HP cai abaixo de 25%, recupera 12% do HP perdido 3 vezes (cooldown 80s)."
    },
    "Leftovers": {
        atributos: { hp: 420, regen: 10.5 },
        efeito: "Fora de combate, recupera 4% do HP máximo por segundo."
    },
    "Muscle Band": {
        atributos: { atk: 17.5, atkSpd: 8.75 },
        efeito: "Ataques básicos causam dano adicional baseado no HP restante do oponente (máx 360)."
    },
    "Rapid-Fire Scarf": {
        atributos: { atk: 14, atkSpd: 10.5 },
        efeito: "Após 3 ataques básicos, a velocidade de ataque aumenta em 25% por 5s (cooldown 10s)."
    },
    "Razor Claw": {
        atributos: { atk: 17.5, crit: 2.35 },
        efeito: "Após usar um movimento, o próximo ataque básico causa dano extra e lentidão (se for corpo a corpo)."
    },
    "Rescue Hood": {
        atributos: { def: 35, spDef: 35 },
        efeito: "Aumenta a eficácia de escudos e curas concedidos a aliados em 23%."
    },
    "Resonant Guard": {
        atributos: { hp: 525, regen: 21 },
        efeito: "Ao causar dano, concede um escudo de 6% do HP máximo para você e um aliado próximo (cooldown 10s)."
    },
    "Rocky Helmet": {
        atributos: { hp: 315, def: 59.5 },
        efeito: "Ao receber dano igual a 3% do seu HP, causa 2.5% do seu HP máximo em área."
    },
    "Scope Lens": {
        atributos: { crit: 7, critDmg: 14 },
        efeito: "Aumenta a taxa e o dano crítico. Ataques críticos causam dano adicional."
    },
    "Score Shield": {
        atributos: { hp: 525 },
        efeito: "Protege com um escudo enquanto tenta marcar um gol."
    },
    "Shell Bell": {
        atributos: { spAtk: 28, cdr: 5.25 },
        efeito: "Ao acertar um movimento, recupera HP com base no Sp. Atk (cooldown 8s)."
    },
    "Slick Spoon": {
        atributos: { hp: 245, spAtk: 35 },
        efeito: "Permite que o dano de Ataque Especial ignore 15% da Defesa Especial do alvo."
    },
    "Sp. Atk Specs": {
        atributos: { spAtk: 28 },
        efeito: "Aumenta permanentemente o Ataque Especial a cada gol marcado (máximo 6 vezes)."
    },
    "Tenacity Belt": {
        atributos: { def: 35, spDef: 35 },
        efeito: "Quando sofre controle de grupo, as defesas aumentam em 28% por 3s."
    },
    "Vanguard Bell": {
        atributos: { hp: 525 },
        efeito: "Restaura 10% do HP máximo sempre que aplica controle de grupo em um oponente (cooldown 5s)."
    },
    "Weakness Policy": {
        atributos: { hp: 235, atk: 17.5 },
        efeito: "Ao receber dano, o Ataque aumenta em 2.5% (máximo 4 acúmulos)."
    },
    "Wise Glasses": {
        atributos: { spAtk: 44 },
        efeito: "Aumenta o Ataque Especial total em 7%."
    }
};

// ============================================
// DADOS DOS BATTLE ITEMS
// ============================================

const battleItemsData = {
    "Eject Button": {
        cooldown: "80s",
        efeito: "Move-se rapidamente em uma direção."
    },
    "Fluffy Tail": {
        cooldown: "22s",
        efeito: "Atordoa um Pokémon selvagem e faz com que ele receba dano aumentado."
    },
    "Full Heal": {
        cooldown: "60s",
        efeito: "Remove condições de status e torna o Pokémon imparável por 1,5s."
    },
    "Goal Getter": {
        cooldown: "60s",
        efeito: "Dobra a velocidade de marcar gols por 10s."
    },
    "Goal Hacker": {
        cooldown: "80s",
        efeito: "Buffa uma zona de gol aliada ou desativa as defesas de uma zona inimiga."
    },
    "Potion": {
        cooldown: "30s",
        efeito: "Restaura uma quantidade fixa de HP mais uma porcentagem do HP máximo."
    },
    "Slow Smoke": {
        cooldown: "35s",
        efeito: "Cria uma nuvem que reduz drasticamente a velocidade de movimento e ataque dos inimigos."
    },
    "X Attack": {
        cooldown: "40s",
        efeito: "Aumenta Ataque, Sp. Atk e velocidade de ataque por 6,5s."
    },
    "X Speed": {
        cooldown: "50s",
        efeito: "Aumenta a velocidade de movimento e garante imunidade a lentidão por 6s."
    },
    "Shedinja Doll": {
        cooldown: "45s",
        efeito: "Torna o usuário invulnerável e imóvel por 2s."
    }
};

// ============================================
// LÓGICA DA CALCULADORA (com stacks)
// ============================================

// Itens stackáveis e seus efeitos por stack
const stackItems = {
    "Aeos Cookie": { maxStacks: 6, hpPerStack: 200 },
    "Attack Weight": { maxStacks: 6, atkPerStack: 12 },
    "Sp. Atk Specs": { maxStacks: 6, spAtkPerStack: 16 },
    "Drive Lens": { maxStacks: 20, spAtkPercentPerStack: 0.6 },
    "Accel Bracer": { maxStacks: 20, atkPercentPerStack: 0.6 },
    "Weakness Policy": { maxStacks: 4, atkPercentPerStack: 2.5 }
};

// Referências aos elementos do DOM
const pokemonSelect = document.getElementById('pokemon-select');
const levelSelect = document.getElementById('level-select');
const held1 = document.getElementById('held1');
const held2 = document.getElementById('held2');
const held3 = document.getElementById('held3');
const battleItem = document.getElementById('battle-item');
const resultsPanel = document.getElementById('results-panel');
const itemDescContainer = document.getElementById('item-desc');

// Container para stacks dinâmicos
const stacksContainer = document.createElement('div');
stacksContainer.id = 'stacks-container';
stacksContainer.style.marginTop = '1rem';
document.querySelector('.builder-panel').appendChild(stacksContainer);

// Preencher selects
function populateItemSelects() {
    const heldSelects = [held1, held2, held3];
    
    heldSelects.forEach(select => {
        select.innerHTML = '';
        const defaultOption = document.createElement('option');
        defaultOption.value = "";
        defaultOption.textContent = "-- Nenhum --";
        select.appendChild(defaultOption);
        
        Object.keys(heldItemsData).forEach(itemName => {
            const option = document.createElement('option');
            option.value = itemName;
            option.textContent = itemName;
            select.appendChild(option);
        });
    });
    
    battleItem.innerHTML = '';
    const battleDefault = document.createElement('option');
    battleDefault.value = "";
    battleDefault.textContent = "-- Nenhum --";
    battleItem.appendChild(battleDefault);
    
    Object.keys(battleItemsData).forEach(itemName => {
        const option = document.createElement('option');
        option.value = itemName;
        option.textContent = itemName;
        battleItem.appendChild(option);
    });
}

function populateLevelSelect() {
    levelSelect.innerHTML = '';
    for (let i = 1; i <= 15; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Nível ${i}`;
        levelSelect.appendChild(option);
    }
}

function getPokemonStats(pokemonName, level) {
    const pokemon = pokemonData[pokemonName];
    if (!pokemon) return null;
    const statsAtLevel = pokemon.stats.find(s => s.lv === parseInt(level));
    return statsAtLevel ? { ...statsAtLevel } : null;
}

function getSelectedStacks() {
    const stacks = {};
    const stackInputs = document.querySelectorAll('.stack-input');
    stackInputs.forEach(input => {
        const itemName = input.getAttribute('data-item');
        const value = parseInt(input.value) || 0;
        stacks[itemName] = value;
    });
    return stacks;
}

function getEonStacks() {
    const eonInput = document.getElementById('eon-stacks');
    if (eonInput) {
        return parseInt(eonInput.value) || 0;
    }
    return 0;
}

function applyHeldItems(baseStats, selectedItems, stacks, eonStacks) {
    const finalStats = { ...baseStats };
    
    selectedItems.forEach(itemName => {
        if (itemName && heldItemsData[itemName]) {
            const itemAttrs = heldItemsData[itemName].atributos;
            
            if (itemAttrs.hp) finalStats.hp += itemAttrs.hp;
            if (itemAttrs.atk) finalStats.atk += itemAttrs.atk;
            if (itemAttrs.def) finalStats.def += itemAttrs.def;
            if (itemAttrs.spAtk) finalStats.spAtk += itemAttrs.spAtk;
            if (itemAttrs.spDef) finalStats.spDef += itemAttrs.spDef;
            
            // Aplicar stacks
            if (stackItems[itemName] && stacks[itemName]) {
                const stackInfo = stackItems[itemName];
                const stackCount = Math.min(stacks[itemName], stackInfo.maxStacks);
                
                if (stackInfo.hpPerStack) {
                    finalStats.hp += stackInfo.hpPerStack * stackCount;
                }
                if (stackInfo.atkPerStack) {
                    finalStats.atk += stackInfo.atkPerStack * stackCount;
                }
                if (stackInfo.spAtkPerStack) {
                    finalStats.spAtk += stackInfo.spAtkPerStack * stackCount;
                }
            }
        }
    });
    
    // Aplicar Eon Power da Latias
    if (pokemonSelect.value === "Latias" && eonStacks > 0) {
        // Dragon Breath: +0.5% dano por Eon (a partir de 61)
        // Dragon Pulse: +0.5% dano dos projéteis por Eon (a partir de 101)
        // Para simplificar, vamos adicionar um multiplicador
    }
    
    return finalStats;
}

function applyPercentEffects(finalStats, selectedItems, stacks) {
    let spAtkMultiplier = 1;
    let shieldHealMultiplier = 1;
    let atkMultiplier = 1;
    
    selectedItems.forEach(itemName => {
        if (itemName === "Wise Glasses") {
            spAtkMultiplier += 0.07;
        }
        if (itemName === "Rescue Hood") {
            shieldHealMultiplier += 0.23;
        }
        if (stackItems[itemName] && stacks[itemName]) {
            const stackInfo = stackItems[itemName];
            const stackCount = Math.min(stacks[itemName], stackInfo.maxStacks);
            
            if (stackInfo.spAtkPercentPerStack) {
                spAtkMultiplier += (stackInfo.spAtkPercentPerStack / 100) * stackCount;
            }
            if (stackInfo.atkPercentPerStack) {
                atkMultiplier += (stackInfo.atkPercentPerStack / 100) * stackCount;
            }
        }
    });
    
    finalStats.spAtk = Math.round(finalStats.spAtk * spAtkMultiplier);
    finalStats.atk = Math.round(finalStats.atk * atkMultiplier);
    
    return {
        stats: finalStats,
        spAtkMultiplier,
        shieldHealMultiplier,
        atkMultiplier
    };
}

function calculateSkills(pokemonName, level, finalStats, shieldHealMultiplier, eonStacks) {
    const pokemon = pokemonData[pokemonName];
    if (!pokemon) return [];
    
    const lv = parseInt(level);
    
    return pokemon.skills.map(skill => {
        let valor;
        if (typeof skill.formula === 'function') {
            valor = skill.formula(finalStats, lv);
            if (typeof valor === 'number') {
                valor = Math.round(valor);
            }
        } else {
            valor = skill.formula;
        }
        
        if (skill.tipo === "Cura" || skill.tipo === "Escudo") {
            if (typeof valor === 'number') {
                valor = Math.round(valor * shieldHealMultiplier);
            }
        }
        
        // Aplicar Eon Power da Latias em habilidades específicas
        if (pokemonName === "Latias" && eonStacks > 0) {
            if (skill.nome === "Dragon Breath (Dano)" && eonStacks >= 61) {
                const bonus = 1 + (eonStacks - 61) * 0.005;
                valor = Math.round(valor * bonus);
            }
            if (skill.nome === "Dragon Pulse (Dano)" && eonStacks >= 101) {
                const bonus = 1 + (eonStacks - 101) * 0.005;
                valor = Math.round(valor * bonus);
            }
        }
        
        return {
            nome: skill.nome,
            tipo: skill.tipo,
            valor: valor
        };
    });
}

function updateStackInputs() {
    const selectedHeld = [held1.value, held2.value, held3.value].filter(v => v !== "");
    let stacksHTML = '<div style="margin-top: 1rem;">';
    
    selectedHeld.forEach(itemName => {
        if (stackItems[itemName]) {
            const maxStacks = stackItems[itemName].maxStacks;
            stacksHTML += `
                <div class="builder-group" style="margin-bottom: 0.5rem;">
                    <label for="stack-${itemName.replace(/[^a-zA-Z0-9]/g, '')}">${itemName} (stacks):</label>
                    <input type="number" id="stack-${itemName.replace(/[^a-zA-Z0-9]/g, '')}" 
                           class="stack-input builder-select" 
                           data-item="${itemName}" 
                           min="0" 
                           max="${maxStacks}" 
                           value="0">
                </div>
            `;
        }
    });
    
    // Eon Power para Latias
    if (pokemonSelect.value === "Latias") {
        stacksHTML += `
            <div class="builder-group" style="margin-bottom: 0.5rem;">
                <label for="eon-stacks">Eon Power (0-1099):</label>
                <input type="number" id="eon-stacks" 
                       class="stack-input builder-select" 
                       min="0" 
                       max="1099" 
                       value="0">
            </div>
        `;
    }
    
    stacksHTML += '</div>';
    stacksContainer.innerHTML = stacksHTML;
    
    // Adicionar eventos aos inputs de stack
    const stackInputs = document.querySelectorAll('.stack-input');
    stackInputs.forEach(input => {
        input.addEventListener('input', renderResults);
    });
}

function renderResults() {
    const pokemonName = pokemonSelect.value;
    const level = levelSelect.value;
    
    if (!pokemonName || !level) {
        resultsPanel.innerHTML = '<p class="results-placeholder">Selecione um Pokémon para ver os resultados.</p>';
        itemDescContainer.innerHTML = '';
        stacksContainer.innerHTML = '';
        return;
    }
    
    updateStackInputs();
    
    const baseStats = getPokemonStats(pokemonName, level);
    if (!baseStats) {
        resultsPanel.innerHTML = '<p class="results-placeholder">Dados não encontrados para este Pokémon.</p>';
        return;
    }
    
    const selectedHeld = [held1.value, held2.value, held3.value].filter(v => v !== "");
    const stacks = getSelectedStacks();
    const eonStacks = getEonStacks();
    
    const statsAfterItems = applyHeldItems(baseStats, selectedHeld, stacks, eonStacks);
    const { stats: finalStats, shieldHealMultiplier } = applyPercentEffects(statsAfterItems, selectedHeld, stacks);
    
    const skills = calculateSkills(pokemonName, level, finalStats, shieldHealMultiplier, eonStacks);
    
    let statsHTML = `
        <div class="stats-final-container">
            <div class="stat-final-box">
                <div class="stat-final-label">HP</div>
                <div class="stat-final-value">${finalStats.hp}</div>
            </div>
            <div class="stat-final-box">
                <div class="stat-final-label">Ataque</div>
                <div class="stat-final-value">${finalStats.atk}</div>
            </div>
            <div class="stat-final-box">
                <div class="stat-final-label">Defesa</div>
                <div class="stat-final-value">${finalStats.def}</div>
            </div>
            <div class="stat-final-box">
                <div class="stat-final-label">Sp. Atk</div>
                <div class="stat-final-value">${finalStats.spAtk}</div>
            </div>
            <div class="stat-final-box">
                <div class="stat-final-label">Sp. Def</div>
                <div class="stat-final-value">${finalStats.spDef}</div>
            </div>
        </div>
    `;
    
    let skillsHTML = '<h2 class="builder-section-title">Valores das Habilidades</h2>';
    skills.forEach(skill => {
        skillsHTML += `
            <div class="skill-calc-card">
                <div class="skill-calc-name">${skill.nome}</div>
                <div class="skill-calc-type">${skill.tipo}</div>
                <div class="skill-calc-values">
                    Valor: <strong>${skill.valor}</strong>
                </div>
            </div>
        `;
    });
    
    resultsPanel.innerHTML = statsHTML + skillsHTML;
    
    // Descrições dos itens
    let itemsHTML = '';
    selectedHeld.forEach(itemName => {
        if (heldItemsData[itemName]) {
            itemsHTML += `
                <div class="item-desc-card">
                    <div class="item-desc-name">${itemName}</div>
                    <div class="item-desc-text">${heldItemsData[itemName].efeito}</div>
                </div>
            `;
        }
    });
    
    if (battleItem.value && battleItemsData[battleItem.value]) {
        itemsHTML += `
            <div class="item-desc-card">
                <div class="item-desc-name">${battleItem.value} (Battle Item)</div>
                <div class="item-desc-text">${battleItemsData[battleItem.value].efeito}</div>
            </div>
        `;
    }
    
    itemDescContainer.innerHTML = itemsHTML;
}

function initEvents() {
    pokemonSelect.addEventListener('change', renderResults);
    levelSelect.addEventListener('change', renderResults);
    held1.addEventListener('change', renderResults);
    held2.addEventListener('change', renderResults);
    held3.addEventListener('change', renderResults);
    battleItem.addEventListener('change', renderResults);
}

function initBuilder() {
    populateLevelSelect();
    populateItemSelects();
    initEvents();
    renderResults();
}

document.addEventListener('DOMContentLoaded', initBuilder);
