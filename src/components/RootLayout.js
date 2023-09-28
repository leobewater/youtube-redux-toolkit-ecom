import { Outlet } from 'react-router-dom';
import Navbar from './NavbarPanel';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
