#!/usr/bin/env node

// Wrapper to suppress network interface errors
process.on('unhandledRejection', (reason, promise) => {
  if (reason && reason.code === 'ERR_SYSTEM_ERROR' && reason.syscall === 'uv_interface_addresses') {
    // Ignore network interface error
    console.log('⚠️  Network interface warning suppressed (this is OK)');
    return;
  }
  // Log other rejections
  console.error('Unhandled Rejection:', reason);
});

// Start Next.js
require('child_process').spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true
});

