import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";
import Main from "../components/layout/Main";

const MainPage = () => {
  return <Layout
   header={<Header />}
    main={<Main />} 
    footer={<Footer />} />;
};

export default MainPage;
