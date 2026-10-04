# DESIGN SYSTEM — MB Studio

> **Périmètre et portée** : Ce document consigne l'ensemble des règles visuelles, typographiques et ergonomiques spécifiques au projet **MB Studio**. Il sert de référence pour maintenir la cohérence de ce site particulier et **ne doit en aucun cas être imposé comme standard par défaut pour de futurs projets clients**, qui disposeront de leur propre charte.

---

## 1. Philosophie et intention visuelle
L'identité de **MB Studio** exprime la rencontre entre la rigueur de l'ingénierie logicielle et la sensibilité d'un studio d'auteur.
* **Sobriété habitée** : L'espace est épuré sans être stérile. Les grands espaces vides permettent aux typographies et aux micro-interactions de respirer.
* **Chaleur organique** : Rejet du noir pur froid (`#000000`) au profit d'un noir teinté évoquant un papier d'art sombre.
* **Ponctuation vive** : L'orange sert de fil conducteur pour guider le regard vers les éléments interactifs majeurs.

---

## 2. Palette chromatique

| Rôle | Teinte / Code Hex | Classe Tailwind | Utilisation |
| :--- | :--- | :--- | :--- |
| **Fond principal** | `#11110f` | `bg-[#11110f]` | Toile de fond globale (canvas sombre et chaleureux) |
| **Surfaces / Cartes** | `#171715` / `#1b1b18` | `bg-[#171715]`, `bg-[#1b1b18]` | Surfaces surélevées, cartes de projets, blocs de mise en avant |
| **Bordures subtiles** | `rgba(255, 255, 255, 0.10)` | `border-white/10` | Délimitation discrète des conteneurs et des sections |
| **Bordures d'interaction**| `rgba(249, 115, 22, 0.50)` | `border-orange-500/50` | Survol des cartes et focus d'éléments actifs |
| **Texte principal** | `#f1efe7` | `text-[#f1efe7]` | Titres et textes au premier plan (blanc cassé lin) |
| **Texte secondaire** | `#a1a1aa` | `text-zinc-400` | Paragraphes explicatifs, labels secondaires |
| **Texte tertiaire / discrets**| `#71717a` | `text-zinc-500` | Mentions légales, métadonnées, dates |
| **Couleur d'accent** | `#f97316` | `bg-orange-500`, `text-orange-500` | Puces d'état, boutons d'action clés, points de ponctuation |

---

## 3. Typographie et hiérarchie

### Principes
* **Police sans-serif structurante** : Police géométrique/grotesque contemporaine (ex. Geist Sans, Inter) pour l'ensemble de l'interface, caractérisée par un crénage resserré sur les grands titres (`tracking-[-0.06em]`).
* **Accent serif éditorial** : Utilisation ponctuelle et calculée d'une typographie à empattements en italique (`font-serif italic font-normal text-orange-500`) pour humaniser le message et souligner un terme clé (ex: *expériences.*).
* **Labels en surtitre** : Majuscules espacées (`text-xs uppercase tracking-[0.25em] text-orange-400`) pour catégoriser clairement les sections.

### Échelle typographique
* **Titre héroïque (`<h1>`)** : `text-5xl` (mobile) à `text-8xl` (bureau), interligne ultra-compact (`leading-[1.05]`).
* **Titres de section (`<h2>`)** : `text-4xl` à `text-6xl`, graisse semi-bold (`font-semibold`).
* **Titres de cartes (`<h3>`)** : `text-2xl`, graisse médium (`font-medium`).
* **Corps de texte** : `text-base` à `text-lg`, interligne confortable (`leading-7`).

---

## 4. Composants et motifs d'interaction

### Boutons et badges
* **Badge de statut ("Disponible pour projets")** : Format pilule (`rounded-full`), bordure semi-transparente fine, survol avec accentuation orange.
* **Bouton d'action primaire (CTA)** : Fond plein orange (`bg-orange-500 text-black`), texte contrasté, angles arrondis complets, éclaircissement subtil au survol (`hover:bg-orange-400`).
* **Bouton d'action secondaire** : Fond transparent avec bordure fine (`border border-white/15 hover:border-white/50`).

### Cartes de projet
* Fond sombre contrasté (`bg-[#11110f]`), bordure discrète (`border-white/10`).
* **Effet de survol (Hover)** : 
  * Translation verticale négative (`hover:-translate-y-1`).
  * Réveil de la bordure vers l'orange (`hover:border-orange-500/50`).
  * Mouvement diagonal de la flèche indicatrice (`group-hover:translate-x-1 group-hover:-translate-y-1`).
  * Durée de transition uniforme de 300ms (`transition duration-300`).

---

## 5. Exigences d'accessibilité et d'ergonomie (a11y)
* **Contraste de couleur** : Tous les textes porteurs d'information doivent vérifier un ratio de contraste d'au moins 4.5:1 avec le fond. Éviter d'utiliser `text-zinc-600` pour des textes importants sur fond sombre.
* **Navigation au clavier** : Chaque lien et élément cliquable doit disposer d'un état de focus visible (`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500`).
* **Éléments graphiques décoratifs** : Les formes décoratives d'arrière-plan (cercles concentriques, flous) doivent impérativement comporter l'attribut `aria-hidden="true"`.
* **Adaptabilité mobile** : La grille de 3 cartes sur ordinateur doit basculer naturellement en une seule colonne sur mobile (`grid gap-4 md:grid-cols-3`).
