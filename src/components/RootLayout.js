import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <nav>Navigation</nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
