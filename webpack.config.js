const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //DIRETÓRIO DO ARQUIVO DE ENTRADA PRO PROJETO

  output: {
    //ONDE SERÁ JOGADO O BUNDLE --> CÓDIGO TRANSPILADO PELO BABEL
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      //REGRAS --> PRA QUAL TIPO DE ARQUIVO, OQUE DEVE SER UTILIZADO, ACONTECE APÓS A TRANSPILAÇAO DO BABEL
      {
        test: /\.js$/, //EXPRESSÃO REGULAR PARA REGRA AGIR EM QUALQUER ARQUIVO .JS
        exclude: /node_modules/, //EXCLUIR O NODE MODULES POIS JA FOI TRANSPILADO PELO BABEL
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
