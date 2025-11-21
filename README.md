# MBN TRANSPORT - Site Web Officiel

Site web officiel de MBN TRANSPORT, société spécialisée dans le transport routier de marchandises, déménagement et convoyage de véhicules dans toute l'Europe.

## 🚀 Fonctionnalités

- **Design responsive** - Optimisé pour tous les appareils
- **Navigation moderne** - Menu hamburger pour mobile
- **Pages dynamiques** - Services et secteurs d'activité
- **Formulaire de contact** - Avec validation complète
- **Widget de chat** - Interface interactive
- **Animations fluides** - Effets hover et transitions
- **SEO optimisé** - Métadonnées complètes
- **Bilingue FR/EN** - Interface multilingue

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── contact/           # Page de contact
│   ├── carriere/          # Page carrière
│   ├── agences/           # Page agences
│   ├── services/[service]/ # Pages services dynamiques
│   └── secteurs/[sector]/  # Pages secteurs dynamiques
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── Layout.tsx         # Layout principal
│   ├── ChatWidget.tsx     # Widget de chat
│   └── ...                # Autres composants
├── contexts/              # Contextes React
│   └── LanguageContext.tsx # Gestion des langues
├── lib/                   # Utilitaires
│   └── translations.ts    # Traductions FR/EN
└── globals.css           # Styles globaux
```

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React Hook Form** - Gestion des formulaires
- **Zod** - Validation de schémas
- **Lucide React** - Icônes
- **Context API** - Gestion d'état multilingue

## 🎨 Design System

### Couleurs
- **Primaire** : Bleu professionnel (#0369a1)
- **Secondaire** : Bleu ciel (#0ea5e9)
- **Accent** : Orange (#f97316)
- **Arrière-plan** : Blanc/Gris clair

### Typographie
- **Police** : Inter (Google Fonts)
- **Hiérarchie** : Titres, sous-titres, corps de texte

### Composants
- **Cards** : Effets hover avec élévation
- **Boutons** : Transitions fluides
- **Formulaires** : Validation en temps réel

## 🚀 Installation et démarrage

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd mbn-transport-website
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📱 Pages disponibles

- **Accueil** (`/`) - Page principale avec services et secteurs
- **Services** (`/services/[service]`) - Pages détaillées des services
- **Secteurs** (`/secteurs/[sector]`) - Pages spécialisées par secteur
- **Contact** (`/contact`) - Formulaire de contact avec validation
- **Carrière** (`/carriere`) - Informations sur les opportunités
- **Agences** (`/agences`) - Localisation des agences

## 🎯 Services MBN TRANSPORT

1. **Transport de marchandises** - Jusqu'à 3.5 tonnes avec conducteur
2. **Déménagement** - Service complet avec montage/démontage
3. **Convoyage de véhicules** - Transport dans toute l'Europe
4. **Location de véhicules** - Avec ou sans chauffeur
5. **Transport urgent** - Livraison 24h/24
6. **Transport santé** - Produits médicaux spécialisés
7. **Import-Export** - Véhicules et marchandises
8. **Conciergerie** - Services logistiques personnalisés

## 🏢 Informations légales

**MBN TRANSPORT**
- **Forme juridique** : Société par actions simplifiée
- **Capital social** : 23 000 €
- **RCS** : 912 186 434 R.C.S. Créteil
- **Siège social** : 12 Avenue Maurice Thorez, 94200 Ivry-sur-Seine
- **Activité** : Transport routier de marchandises, déménagement, convoyage de véhicules dans toute l'Europe

## 🌍 Fonctionnalité multilingue

Le site supporte deux langues :
- **Français** (FR) - Langue par défaut
- **Anglais** (EN) - Traduction complète

Le sélecteur de langue se trouve dans le header et permet de basculer entre les langues. La préférence est sauvegardée dans le localStorage.

## 🔧 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run type-check   # Vérification TypeScript
```

## 📈 Optimisations

- **Performance** - Images optimisées, lazy loading
- **SEO** - Métadonnées complètes, sitemap
- **Accessibilité** - Navigation clavier, ARIA
- **Mobile-first** - Design responsive
- **PWA ready** - Prêt pour Progressive Web App

## 🎨 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    700: '#0369a1', // Bleu principal MBN TRANSPORT
  },
  brand: {
    blue: '#0369a1',
    orange: '#f97316',
  }
}
```

### Ajouter des services
Modifier `src/components/ServicesSection.tsx` :
```typescript
const services = [
  {
    id: 'nouveau-service',
    title: 'Nouveau Service',
    // ...
  }
]
```

### Ajouter des traductions
Modifier `src/lib/translations.ts` :
```typescript
export const translations = {
  fr: {
    nouvelleCle: 'Nouvelle traduction française',
    // ...
  },
  en: {
    nouvelleCle: 'New English translation',
    // ...
  }
}
```

## 📞 Contact

**MBN TRANSPORT**
- **Téléphone** : 01 XX XX XX XX
- **Email** : ismail.iy.pro@gmail.com.fr
- **Adresse** : 12 Avenue Maurice Thorez, 94200 Ivry-sur-Seine
- **Horaires** : Lundi - Vendredi, 08h00 - 19h00

## 📄 Licence

© Copyright 2024 - MBN TRANSPORT

---

**Développé avec ❤️ pour MBN TRANSPORT**