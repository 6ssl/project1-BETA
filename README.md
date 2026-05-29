# Yoshi game website

Een eenvoudige game-website met een landingspagina en een "vind de knop"-spel.

## Live website (GitHub Pages)

De site staat online via GitHub Pages:

**[https://6ssl.github.io/project1-BETA/index.html](https://6ssl.github.io/project1-BETA/index.html)**

- **Home:** [index.html](https://6ssl.github.io/project1-BETA/index.html)
- **Spel:** [HTML/game.html](https://6ssl.github.io/project1-BETA/HTML/game.html)

## Spel

Zoek de onzichtbare knop ergens op het scherm. Als je hem vindt, verplaatst hij zich naar een nieuwe plek.

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
│   └── game.html       # Vind-de-knop spel
├── CSS/
│   ├── styles.css      # Algemene stijlen en navigatie
│   └── game.css        # Spelpagina
└── JS/
    └── scripts/
        └── find-button.js
```

## Technologie

- Vanilla JavaScript (geen frameworks)
- CSS voor layout en animaties
