# **Recados Escolares - Aplicativo Móvel**

## **Descrição**
O **Recados Escolares** é um aplicativo móvel desenvolvido em React Native que facilita a comunicação entre escolas e pais, permitindo o envio e recebimento de recados escolares de forma eficiente e organizada. O projeto inclui persistência de dados usando diversas tecnologias como **AsyncStorage**, **SQLite**, **Realm** e **MongoDB Realm**, proporcionando flexibilidade no armazenamento de informações.

---

## **Funcionalidades**
- **Envio de recados escolares:** Professores e administradores podem adicionar recados.
- **Visualização de recados:** Pais podem visualizar os recados enviados.
- **Configuração de tema:** Alternância entre modo claro e escuro.
- **Persistência de dados:** Várias opções de armazenamento (local e na nuvem).
  - Configurações simples: **AsyncStorage**
  - Dados estruturados (relacionais): **SQLite**
  - Armazenamento local em NoSQL: **Realm**
  - Armazenamento na nuvem em NoSQL: **MongoDB Realm**

---

## **Tecnologias Utilizadas**
- **React Native:** Framework para desenvolvimento de aplicativos móveis.
- **React Navigation:** Gerenciamento de navegação entre telas.
- **AsyncStorage:** Persistência local para configurações simples.
- **SQLite:** Banco de dados relacional local.
- **Realm:** Banco de dados local NoSQL.
- **MongoDB Realm:** Banco de dados NoSQL na nuvem.

---

## **Estrutura do Projeto**
```plaintext
RecadosEscolares/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   ├── screens/           # Telas do aplicativo
│   ├── utils/             # Funções utilitárias e gerenciadores de dados
│   ├── AppNavigator.js    # Configuração da navegação entre telas
├── App.js                 # Ponto de entrada principal do aplicativo
```

---

## **Pré-requisitos**
Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas:
- Node.js (https://nodejs.org/)
- Android Studio (para testar no emulador Android)
- React Native CLI

---

## **Instalação e Execução**

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/recados-escolares.git
cd recados-escolares
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configuração do MongoDB Realm
- Crie um projeto no [MongoDB Atlas](https://www.mongodb.com/atlas).
- Configure o MongoDB Realm no console e obtenha o App ID.
- Substitua o `app.id` em `src/utils/MongoDBUtils.js` pelo ID do seu aplicativo.

### 4. Execute o projeto no Android
Certifique-se de que o emulador Android ou dispositivo físico está conectado e execute:
```bash
npx react-native run-android
```

---

## **Funcionalidades Técnicas**
### 1. **AsyncStorage**
Usado para armazenar configurações simples, como o tema claro/escuro.
- Código em: `src/utils/AsyncStorageUtils.js`

### 2. **SQLite**
Usado para armazenar dados estruturados localmente, como recados.
- Código em: `src/utils/SQLiteUtils.js`

### 3. **Realm**
Banco de dados NoSQL local, ideal para histórico de recados.
- Código em: `src/utils/RealmUtils.js`

### 4. **MongoDB Realm**
Banco de dados NoSQL na nuvem para persistência de recados.
- Código em: `src/utils/MongoDBUtils.js`

---

## **Navegação do Aplicativo**
- **Tela Inicial (Home):** Lista todos os recados.
- **Adicionar Recado:** Permite adicionar novos recados.
- **Configurações:** Alterna entre modo claro/escuro.

---

## **Exemplo de Telas**
### Tela Inicial
Lista de recados com indicação de visualização.

### Adicionar Recado
Formulário para adicionar novos recados ao sistema.

### Configurações
Alternância entre modo claro e escuro.

---

## **Contribuição**
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b minha-alteracao`.
3. Envie suas alterações: `git push origin minha-alteracao`.
4. Abra um pull request.

---

## **Licença**
Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

