import { lazy } from 'react';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import './Sing.css';
import { useURL } from './hooks/useURL';
import Sing from './pages/Sing';
const DashboardLayout = lazy(() => import('./layouts/Dashboard'));

const Menu = lazy(() => import('./pages/Menu'));
const ModMenu = lazy(() => import('./pages/ModMenu'));
const Home = lazy(() => import('./pages/Home'));
const Table = lazy(() => import('./pages/Table'));
const Settings = lazy(() => import('./pages/Settings'));
const SignInSignUp = lazy(() => import('./pages/SignInSignUp'));
const Orders = lazy(() => import('./pages/Orders'));
const Categories = lazy(() => import('./pages/Categories'));

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
         <Route path="/table" element={<Table />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/signinup" element={<SignInSignUp />} />
         <Route path="/orders" element={<Orders />} />
         <Route path="/categor" element={<Categories />} />
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
