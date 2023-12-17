import UserPageDetail from "../components/UserPageDetail/UserPageDetail";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Layout from "../components/layout/Layout";


const MainPage = () => {
    return (
      <Layout 
      header={<Header />}
       main={<UserPageDetail  />}
        footer={<Footer />} />
    );
  };
  
  export default MainPage;
  