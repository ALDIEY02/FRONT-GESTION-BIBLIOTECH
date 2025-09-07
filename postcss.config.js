// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {},     // 🟢 Ajouter AVANT tailwindcss
    tailwindcss: {},
    autoprefixer: {},
  },
}
