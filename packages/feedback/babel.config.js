const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // Compile to npm packages run on Node 14+
      // We can overwrite this option at each package level
      {
        modules: 'commonjs',
        targets: {
          node: '14',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        development: !isProduction,
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime"
    ]
  ],
}