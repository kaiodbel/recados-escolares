import { App } from '@realm/react';

// Configuração do aplicativo MongoDB Realm
const app = new App({ id: "id-762" });
const mongo = user.mongoClient('mongodb-atlas');
const collection = mongo.db('RecadosEscolaresDB').collection('recados');


// Função para adicionar um recado ao MongoDB
export const addRecadoMongo = async (recado) => {
  try {
    const user = await app.logIn({ type: 'anonymous' });
    const mongo = user.mongoClient('mongodb-atlas');
    const collection = mongo.db('RecadosEscolaresDB').collection('recados');
    await collection.insertOne(recado);
    console.log("Recado inserido com sucesso no MongoDB");
  } catch (error) {
    console.error("Erro ao inserir recado no MongoDB:", error);
  }
};

// Função para obter todos os recados do MongoDB
export const getRecadosMongo = async () => {
  try {
    const user = await app.logIn({ type: 'anonymous' });
    const mongo = user.mongoClient('mongodb-atlas');
    const collection = mongo.db('RecadosEscolaresDB').collection('recados');
    const recados = await collection.find({});
    return recados;
  } catch (error) {
    console.error("Erro ao obter recados do MongoDB:", error);
  }
};
