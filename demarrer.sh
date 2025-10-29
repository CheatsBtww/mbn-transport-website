#!/bin/bash

echo "🧹 Nettoyage des processus existants..."
killall node 2>/dev/null
sleep 1

cd "$(dirname "$0")"

echo "🚀 Démarrage du serveur MBN TRANSPORT..."
echo ""
echo "📍 Une fois démarré, ouvrez:"
echo "   → http://127.0.0.1:3000"
echo "   → http://127.0.0.1:3000/test-logo"
echo ""
echo "⌨️  Appuyez sur Ctrl+C pour arrêter"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Force localhost
export HOSTNAME=localhost
export HOST=127.0.0.1

npm run dev

