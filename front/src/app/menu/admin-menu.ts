import { NbMenuItem } from '@nebular/theme';

export const MENU_ADMIN: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/user-dashboard',
    home: true,
  },
  {
    title: 'Productos',
    icon: 'nb-compose',
    children: [
      {
        title: 'Crear producto',
        link: '/user-dashboard/create-products',
      },
      {
        title: 'Listar productos',
        link: '/user-dashboard/list-products'
      },
    ],
  },
  {
    title: 'Salir',
    icon: 'nb-power-circled',
    link: '/logout/1'
  }
];
