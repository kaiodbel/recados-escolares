import SQLite from 'react-native-sqlite-storage';

// Abrir ou criar o banco de dados
const db = SQLite.openDatabase(
  {
    name: 'SchoolAppDB',
    location: 'default',
  },
  () => console.log("Banco de dados aberto com sucesso!"),
  (error) => console.error("Erro ao abrir o banco de dados:", error)
);

// Criar tabela de recados
export const createTables = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS recados (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, viewed BOOLEAN);`,
      [],
      () => console.log("Tabela recados criada com sucesso!"),
      (error) => console.error("Erro ao criar tabela:", error)
    );
  });
};

// Inserir um recado no banco de dados SQLite
export const addRecadoSQLite = (title, content) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO recados (title, content, viewed) VALUES (?, ?, ?);`,
      [title, content, false],
      (_, result) => {
        console.log("Recado inserido com sucesso:", result);
      },
      (error) => {
        console.error("Erro ao inserir recado:", error);
      }
    );
  });
};

// Obter todos os recados do banco SQLite
export const getRecadosSQLite = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM recados;`,
        [],
        (_, result) => {
          const recados = result.rows.raw(); // Retorna os resultados como um array
          resolve(recados);
        },
        (error) => {
          reject("Erro ao obter recados:", error);
        }
      );
    });
  });
};
