module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'node_modules/next/dist/bin/next', // Path to Next.js binary
      args: 'start', // Command to start Next.js
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // Specify the port your Next.js app will run on
      },
    },
  ],
};
