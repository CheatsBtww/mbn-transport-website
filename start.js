#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('🚀 Démarrage du serveur MBN TRANSPORT...\n');

// Force localhost only to avoid network interface issues
process.env.HOSTNAME = 'localhost';
process.env.HOST = '127.0.0.1';

const dev = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env }
});

dev.on('error', (error) => {
  console.error('❌ Erreur:', error);
});

dev.on('close', (code) => {
  console.log(`\n👋 Serveur arrêté (code: ${code})`);
  process.exit(code);
});

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n\n⏹️  Arrêt du serveur...');
  dev.kill('SIGINT');
});

