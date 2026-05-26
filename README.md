# Yoshi game website

Een eenvoudige game-website met een landingspagina en een canvas-platformspel met Yoshi.

## Live website (GitHub Pages)

De site staat online via GitHub Pages:

**[https://6ssl.github.io/project1-BETA/index.html](https://6ssl.github.io/project1-BETA/index.html)**

- **Home:** [index.html](https://6ssl.github.io/project1-BETA/index.html)
- **Spel:** [HTML/game.html](https://6ssl.github.io/project1-BETA/HTML/game.html)

## Spel

In het platformspel bestuur je Yoshi, spring je over obstakels en ontwijk je de rode vijand.

| Toets | Actie   |
|-------|---------|
| Q     | Links   |
| D     | Rechts  |
| Z     | Omhoog / springen |
| S     | Omlaag  |

## Lokaal draaien

Clone de repository en open `index.html` in je browser, of start een lokale webserver:

```bash
# Voorbeeld met Python
python -m http.server 8000
```

Ga daarna naar `http://localhost:8000`.

## Projectstructuur

```
├── index.html          # Landingspagina
├── HTML/
│   └── game.html       # Yoshi-platformspel
├── CSS/
│   ├── styles.css      # Algemene stijlen en navigatie
│   └── game.css        # Spelpagina
└── JS/
    └── scripts/
        ├── main.js         # Spelloop en rendering
        ├── gameobject.js   # Spelobjecten
        ├── physics.js      # Fysica en botsingen
        └── controls.js     # Toetsenbordinput
```

## Technologie

- HTML5 Canvas
- Vanilla JavaScript (geen frameworks)
- CSS voor layout en animaties
