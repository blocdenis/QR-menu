export const useURL = () => {
  return {
    ModMenu: { name: 'Moderator-Menu', path: '/modmenu' },
    Menu: { name: 'menu', path: '/menu' },
    Home: { name: 'Home', path: '/' },
    Table: { name: 'Table', path: '/tables' },
    Client: { name: 'Client', path: '/menu/:restaurant/:id/:table' },
    ClientMenu: {name: "ClientMenu", path: '/menu/:restaurant/:id/:table/view'},
    ClientCategory: {name: "ClientCategory", path: '/menu/:restaurant/:id/:table/view/:categoryName'},
    ClientDish: {name: "ClientDish", path: '/menu/:restaurant/:id/:table/view/:categoryName/:dishName'}
  };
};
