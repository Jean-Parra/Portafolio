const path = require("path");

module.exports = {
  // Aquí puedes definir el modo de desarrollo o producción
  mode: "development",
  // Aquí puedes definir el punto de entrada de tu aplicación
  entry: "./src/client/index.tsx",
  // Aquí puedes definir el punto de salida de tu aplicación
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "bundle.js",
  },
  // Aquí puedes definir las reglas para procesar los archivos con diferentes extensiones
  module: {
    rules: [
      // Aquí puedes definir una regla para procesar los archivos TypeScript con Babel
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // Aquí puedes definir otras reglas para procesar otros tipos de archivos como CSS, imágenes, etc.
      // ...
    ],
  },
  // Aquí puedes definir las extensiones que se resolverán automáticamente
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  // Aquí puedes definir los plugins que quieras usar en tu aplicación
  plugins: [],
};
