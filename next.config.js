/** @type {import('next').NextConfig} */
const nextConfig = {}
const removeImports = require('next-remove-imports')();
module.exports = removeImports({
images: {
        domains: ['firebasestorage.googleapis.com'],
    },
});

// module.exports = {
  // ...nextConfig,
// }
