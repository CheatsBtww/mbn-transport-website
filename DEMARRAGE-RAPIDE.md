# 🚀 Démarrage Rapide - MBN TRANSPORT

## ✅ Méthode Recommandée

### Option 1 : Utiliser le script de démarrage

Ouvrez un **Terminal** et exécutez :

```bash
cd /Users/ismail.iy/Desktop/aac-globe-express-clone
./START-SERVER.sh
```

### Option 2 : Démarrage manuel

```bash
cd /Users/ismail.iy/Desktop/aac-globe-express-clone
npm run dev
```

---

## 🌐 URLs du Site

Une fois le serveur démarré :

- **Page d'accueil** : http://localhost:3000
- **Test du logo** : http://localhost:3000/test-logo.html

---

## 🎨 Vérifier que le Logo s'affiche

1. Ouvrez : http://localhost:3000/test-logo.html
2. Vous devriez voir le logo MBN TRANSPORT affiché en plusieurs tailles
3. Si oui ✅ → allez sur http://localhost:3000
4. Faites un **hard refresh** :
   - Mac : `Cmd + Shift + R`
   - Windows/Linux : `Ctrl + Shift + R`

---

## 🔧 En cas de problème

### Le port 3000 est occupé ?

Tuez le processus existant :

```bash
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Le logo ne s'affiche pas ?

1. Vérifiez que le fichier existe :
   ```bash
   ls -lh public/logo-mbn.png
   ```

2. Nettoyez le cache Next.js :
   ```bash
   rm -rf .next
   ```

3. Relancez le serveur

### Erreur de compilation ?

Vérifiez les erreurs dans le terminal où tourne `npm run dev`

---

## 📁 Structure des Fichiers du Logo

- **Fichier source** : `/public/logo-mbn.png`
- **Dimensions** : 1280 x 850 px
- **Format** : PNG avec transparence
- **Poids** : ~316 KB

**Composants utilisant le logo :**
- `src/components/Header.tsx` (hauteur 48px)
- `src/components/Footer.tsx` (hauteur 64px)
- `src/components/CaseStudySection.tsx` (hauteur 96px)

---

## 🎯 Commandes Utiles

```bash
# Démarrer le serveur
npm run dev

# Builder pour production
npm run build

# Lancer en production
npm start

# Nettoyer le cache
rm -rf .next

# Installer les dépendances
npm install
```

---

## 📞 Support

Si vous avez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez les logs du serveur dans le terminal
3. Assurez-vous que Node.js est à jour (version 18+)

---

**✨ Bon développement !**

