import { lazy } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import './Sing.css';
import { useURL } from './hooks/useURL';
import Sing from './pages/Sign/Sing';
const DashboardLayout = lazy(() => import('./layouts/Dashboard/Dashboard'));

const Menu = lazy(() => import('./pages/Menu/Menu'));
const ModMenu = lazy(() => import('./pages/ModMenu/ModMenu'));
const Home = lazy(() => import('./pages/Home/Home'));
const Table = lazy(() => import('./pages/Table/Table'));
const Settings = lazy(() => import('./pages/SettingsPage/Settings'));
const SignInSignUp = lazy(() => import('./pages/Sign/SignInSignUp'));
const Orders = lazy(() => import('./pages/Orders/Orders'));
const Categories = lazy(() => import('./pages/Categories/Categories'));
const Support = lazy(() => import('./pages/Support/Support'));

const ClientPage = lazy(() => import('./pages/Client/MainClient'));
const RestaurantMenu = lazy(() => import('./pages/Client/RestaurantMenu'))
const RestaurantCategory = lazy(() => import('./pages/Client/RestaurantCategory/RestaurantCategory'))
const RestaurantDish = lazy(() => import('./pages/Client/RestaurantDishDetail/RestaurantDish'))

const Root = () => {
  const url = useURL();
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Sing />} />
        <Route path={url.ModMenu.path} element={<ModMenu />} />
        <Route path={url.Menu.path} element={<Menu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path={url.Table.path} element={<Table />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signinup" element={<SignInSignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/categor" element={<Categories />} />
        <Route path="/support" element={<Support />} />
    
        <Route path={url.Client.path} element={<ClientPage/>}/>
        <Route path={url.ClientMenu.path} element={<RestaurantMenu/>}/>
        <Route path={url.ClientCategory.path} element={<RestaurantCategory/>}/>
        <Route path={url.ClientDish.path} element={<RestaurantDish/>}/>
      </Route>
    </Routes>
  );
};
const router = createBrowserRouter([
  {
    path: '*',
    Component: Root,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <App />
      <Root />
    </RouterProvider>
  );
};

export default App;
