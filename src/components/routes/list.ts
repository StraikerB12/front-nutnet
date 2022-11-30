import List from '../list/List';
import ListId from '../list/ListId';
import Main from '../main/Main';

import Forms from '../forms/Forms';

const routes = [
  {
    path: '/',
    componet: Main,
    name: '',
  },
  {
    path: '/list',
    componet: List,
    name: '',
  },
  {
    path: '/list/:id',
    componet: ListId,
    name: '',
  },

  {
    path: '/forms',
    componet: Forms,
    name: 'Формы',
  },
];

export default routes;
