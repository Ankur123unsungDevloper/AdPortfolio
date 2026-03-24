//fonts 
import { Sora } from 'next/font/google';

//components
import Nav from '../components/Nav';
import TopLeftImg from '../components/TopLeftImg';
import Header from '../components/Header';

// font settings
const sora = Sora({
  subsets: [ 'latin' ],
  variable: '--font-sora',
  weight: [ '100', '200', '300', '400', '500', '700', '800' ]
});

function Layout({children}) {
  return (
    <div
      className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
