import { Outlet, useNavigation } from 'react-router-dom';
import { Navigation } from '../components/NavigationMenu/NavigationMenu';

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;