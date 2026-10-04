# CLIENT BRIEF — MB Studio

## 1. Informations sur le client
- **Nom de l'entreprise** : MB Studio [Information connue : déduite de `app/page.tsx`]
- **Secteur d'activité** : Conception web & développement créatif indépendant [Information connue]
- **Description de son activité** : Création d'expériences numériques sur mesure, au croisement du design d'interface, de l'interaction et du code [Information connue]
- **Zone géographique** : France / International (prestation à distance) [Hypothèse à confirmer]
- **Personnalité de la marque** : Créative, méticuleuse, contemporaine, directe [Information connue]

## 2. Objectif du projet
- **Type de projet** : Portfolio professionnel / Vitrine d'artisan du web [Information connue]
- **Objectif principal** : Mettre en valeur l'identité visuelle et le savoir-faire technique pour susciter des opportunités professionnelles [Hypothèse à confirmer]
- **Problème à résoudre** : Sortir des modèles de portfolios génériques et sans caractère en proposant un univers affirmé et soigné [Information connue]
- **Action principale attendue du visiteur** : Prendre contact par e-mail (`mailto`) ou engager une collaboration [Information connue]
- **Comment mesurer la réussite** : Nombre de prises de contact qualifiées et clics sur les projets de démonstration [Hypothèse à confirmer]

## 3. Public cible
- **Qui sont les utilisateurs ?** : Fondateurs de projets, directeurs artistiques, agences digitales ou recruteurs en recherche d'un développeur créatif [Hypothèse à confirmer]
- **Quels sont leurs besoins ?** : Trouver un profil capable de concevoir une interface originale et de la coder avec rigueur [Hypothèse à confirmer]
- **Quelles difficultés rencontrent-ils ?** : La prolifération de sites interchangeables et le manque de maîtrise des finitions UI/UX [Hypothèse à confirmer]
- **Quel appareil utilisent-ils principalement ?** : Ordinateur portable/bureau lors de l'évaluation technique, smartphone pour la découverte initiale [Hypothèse à confirmer]

## 4. Contenu disponible
- **Logo** : Monogramme typographique textuel `MB.` avec point orange [Information connue]
- **Textes** : Textes de manifeste et descriptions rédigés en français dans la page d'accueil [Information connue]
- **Photographies / Vidéos** : Aucun fichier média externe (composition graphique vectorielle / CSS uniquement) [Information connue]
- **Produits ou services** : 3 axes d'intervention présentés comme concepts de démonstration : Web design & development, SaaS & product, Creative development [Information connue]
- **Témoignages vérifiés** : Aucun pour le moment (règle stricte : aucun faux témoignage inventé) [Information connue]
- **Coordonnées** : Adresse e-mail de démonstration `hello@example.com` (à remplacer ultérieurement par l'adresse réelle) [Information connue]

## 5. Direction artistique
- **Trois adjectifs décrivant l'ambiance souhaitée** : Sombre, percutante, artisanale ("crafted") [Information connue]
- **Couleurs à privilégier** : Fond noir organique (`#11110f`), texte écru cassé (`#f1efe7`), accent orange vif (`#f97316` / `orange-500`) [Information connue]
- **Couleurs à éviter** : Couleurs froides d'entreprise génériques (bleu standard, gris neutre terne) [Hypothèse à confirmer]
- **Typographie souhaitée** : Titrage sans-serif contemporain complété d'un accent en serif italique expressif [Information connue]
- **Sites de référence** : Studios de création numérique indépendants et portfolios d'auteurs interactifs [Hypothèse à confirmer]
- **Éléments appréciés** : Grandes titrailles, respirations généreuses, micro-interactions soignées au survol [Information connue]
- **Éléments à éviter** : Animations superflues ou intrusives, textes factices de remplissage sans intention [Information connue]
- **Contraintes de marque** : Conserver la signature visuelle du point orange et la rigueur d'alignement [Information connue]

## 6. Fonctionnalités
- **Pages nécessaires** : Page unique (One-page) structurée avec ancres de navigation (`#work`, `#about`, `#contact`) [Information connue]
- **Navigation** : Barre de navigation supérieure avec statut de disponibilité ("Disponible pour projets") [Information connue]
- **Formulaires** : Aucun formulaire complexe pour l'instant, lien direct de contact par mailto [Information connue]
- **Authentification / Paiement** : Non requis pour ce type de vitrine [Information connue]
- **Tableau de bord** : Non applicable [Information connue]
- **Fonctionnalités à ajouter** : Menu de navigation adapté aux écrans mobiles (responsive), défilement doux (smooth scroll) et indicateurs de focus au clavier accessibles [Hypothèse à confirmer]

## 7. Contraintes techniques
- **Technologies imposées** : Next.js 16.3 (App Router), React 19.2, Tailwind CSS v4, TypeScript 5 [Information connue]
- **Budget / Date de livraison** : Projet d'entraînement et d'apprentissage continu [Information connue]
- **Hébergement** : Optimisé pour Vercel ou tout hébergeur Node.js moderne [Hypothèse à confirmer]
- **Besoins d'accessibilité** : Respect des standards WCAG niveau AA (contrastes suffisants, navigation clavier, attributs ARIA) [Information connue]
- **Langues du site** : Français (`lang="fr"`) [Information connue]

## 8. Décisions avant développement
- **Concept visuel retenu** : Direction sombre chaleureuse avec touches artisanales et accentuation orange [Information connue]
- **Structure des pages** : En-tête -> Section Hero & Manifeste -> Grille de projets de démonstration -> Section À propos -> Pied de page & Contact [Information connue]
- **Palette et typographie** : Noir chaud, blanc cassé, orange braise ; police géométrique pour la structure, police avec empattements pour l'émotion [Information connue]
- **Composants principaux à découper** : `Header`, `Hero`, `ProjectCard`, `AboutSection`, `Footer` [Hypothèse à confirmer]
- **Interactions prévues** : Élévation et éclairage des bordures de cartes au survol, flèches dynamiques, focus visible [Information connue]
- **Questions encore sans réponse** : 
  1. Quels liens réels ou pages détaillées associer aux 3 projets de démonstration ?
  2. Quelle adresse de contact définitive sera utilisée ?

## 9. Validation
- **Le client a-t-il validé la direction artistique ?** : Oui (validation de l'orientation MB Studio pour le projet d'entraînement) [Information connue]
- **Le contenu est-il prêt ?** : Oui pour la page d'accueil de démonstration, éléments réels à intégrer au fil de l'eau [Information connue]
- **Les fonctionnalités prioritaires sont-elles définies ?** : Oui (modularisation des composants, navigation mobile, accessibilité) [Information connue]
