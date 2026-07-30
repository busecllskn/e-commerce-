import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";

const PageContent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageContent;