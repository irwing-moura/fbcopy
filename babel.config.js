module.exports = {
  presets: [
    "@babel/preset-env", //ALTERA AS FUNCIONALIDADES DO JS QUE O NAVEGADOR AINDA NAO ENTENDE
    "@babel/preset-react"
  ], //TRANSFORMA AS COISAS DO REACT PARA QUE O NAVEGADOR ENTENDA
  plugins: ["@babel/plugin-proposal-class-properties"]
};
