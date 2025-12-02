import { LayoutProps } from '../../interfaces'
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main" className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
