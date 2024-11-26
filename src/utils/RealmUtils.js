import Realm from 'realm';

const RecadoSchema = {
  name: 'Recado',
  properties: {
    id: 'int',
    title: 'string',
    content: 'string',
    viewed: 'bool',
  },
  primaryKey: 'id',
};

const realm = new Realm({ schema: [RecadoSchema] });

export const addRecado = (recado) => {
  realm.write(() => {
    realm.create('Recado', recado);
  });
};

export const getRecados = () => {
  return realm.objects('Recado');
};
