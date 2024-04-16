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
// const EditPage = lazy(() => import('./pages/EditPage/EditPage'));

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
        {/* <Route path="/editpage" element={<EditPage />} /> */}
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
