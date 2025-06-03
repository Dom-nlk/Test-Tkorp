🐾 TKorp - Test Technique (Partie Next.js)

Ce projet est une application Next.js développée dans le cadre du test technique de TKorp. Il permet d'afficher des informations sur des animaux de compagnie et leurs propriétaires grâce aux donnée dans le fichier json.

🚀 Fonctionnalités
Affichage de la liste des personnes et de leurs animaux.
Ajout d'une nouvelle personne via un formulaire.
Affichage de statistiques :
    Animal le plus vieux
    Espèce la plus représentée
    Personne avec le plus d'animaux
    Personne avec le plus de chats
    Animal le plus lourd
    Personne avec le groupe d'animaux le plus lourd

🛠️ Technologies utilisées
    Next.js
    React
    TypeScript

📁 Structure du projet

src/
├── app/
│   ├── (actors)/                    # Groupe de routes lié aux acteurs (personnes, animaux, etc.)
│   │   ├── add-person/
│   │   │   └── page.tsx           # Page pour ajouter une nouvelle personne
│   │   │
│   │   ├── animals/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx       # Page dynamique pour un seul animal (par ex. /animals/123)
│   │   │   └── page.tsx           # Page listant tous les animaux
│   │   │
│   │   ├── persons/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx       # Page dynamique pour une seule personne (par ex. /persons/123)
│   │   │   └── page.tsx           # Page listant toutes les personnes
│   │   │
│   │   └── statistic/
│   │       └── page.tsx           # Page des statistiques
│   │
│   ├── components/                # Composants React réutilisables
│   ├── context/                   # Contextes React pour la gestion des données
│   │   ├── animal-context.ts      # Contexte React pour les données liées aux animaux
│   │   └── person-context.ts      # Contexte React pour les données liées aux personnes
│   │
│   ├── data/                      # Fichiers de données ou de logique de gestion des données
│   │   ├── actors.ts              # Données ou fonctions de manipulation des acteurs
│   │   └── data.json              # Fichier de données JSON générique
│   │
│   ├── font/                      # Fichiers ou utilitaires liés aux polices de caractères
│   │   └── font.ts                # Définitions ou fonctions pour les polices
│   │
│   ├── types/                     # Définitions des types et interfaces TypeScript
│   │   ├── animal.model.ts        # Interface/type TypeScript pour un modèle d'animal
│   │   └── person.model.ts        # Interface/type TypeScript pour un modèle de personne
│   │
│   ├── favicon.ico                # Icône du site web (favicon)
│   ├── globals.css                # Styles CSS globaux de l'application
│   ├── layout.tsx                 # Layout principal de l'application
│   ├── not-found.tsx              # Page d'erreur 404 personnalisée
│   └── page.module.css            # Fichier CSS Modules pour la page principale

⚙️ Installation et lancement
Assurez-vous d'avoir Node.js installé sur votre machine.

Clonez le dépôt :

git clone https://github.com/Dom-nlk/Test-Tkorp.git
cd tkorp-nextjs
Installez les dépendances :

npm install

Lancez le serveur de développement :

npm run dev

Ouvrez votre navigateur à l'adresse http://localhost:3000 pour voir l'application.

📸 Aperçu

![tkorp app test](image.png)