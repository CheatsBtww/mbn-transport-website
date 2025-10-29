#!/bin/bash

echo "🚀 Démarrage du serveur MBN TRANSPORT..."
echo ""

# Kill any existing processes
echo "🔄 Nettoyage des anciens processus..."
lsof -ti:3000 2>/dev/null | xargs kill -9 2>/dev/null
lsof -ti:3001 2>/dev/null | xargs kill -9 2>/dev/null

# Wait a bit
sleep 2

# Clear Next.js cache
echo "🧹 Nettoyage du cache Next.js..."
rm -rf .next

echo ""
echo "✅ Prêt à démarrer!"
echo ""
echo "📍 Le serveur sera accessible sur:"
echo "   → http://localhost:3000"
echo ""
echo "🧪 Page de test du logo:"
echo "   → http://localhost:3000/test-logo.html"
echo ""
echo "⌨️  Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""
echo "----------------------------------------"
echo ""

# Start the server
npm run dev

