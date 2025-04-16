 ENEM — Visualizador de Provas via API

Este projeto consiste no desenvolvimento de um aplicativo mobile com foco educacional, voltado ao consumo de APIs REST utilizando **React Native com Expo**. O app consome dados de uma **API de provas do ENEM**, permitindo aos usuários visualizar informações detalhadas sobre exames, disciplinas e idiomas.

---

Funcionalidades

- Consumo de uma **API de provas do ENEM** via endpoint `/exams`
-  Requisições HTTP com **Axios**
-  Listagem de provas com **título** e **ano**
-  Tela de detalhes com **disciplinas** e **idiomas**
-  Navegação entre telas com **expo-router**
-  Fontes personalizadas com **expo-font**
-  Splash screen personalizada com **expo-splash-screen**
-  Componentes e hooks reutilizáveis


## Pré-requisitos 📋
 ```bash
   # Download and install fnm:
winget install Schniz.fnm
# Download and install Node.js:
fnm install 22
# Verify the Node.js version:
node -v # Should print "v22.14.0".
# Verify npm version:
npm -v # Should print "10.9.2"
   ```

## Instalação 🔧
1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
    npm run web 
   ```

    ## Construído com 🛠️
   * [Axios](https://axios-http.com/docs/intro) - O framework de requisições HTTP
   * [Expo](https://docs.expo.dev/) - Framework que facilita o desenvolvimento de aplicativos
   * [React-Native](https://reactnative.dev/docs/getting-started) - Framework de código aberto para apps móveis
