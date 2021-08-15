import './home.css'
import Feed from "components/Feed";
import Header from "components/Header";
import Rightbar from "components/Rightbar";
import Sidebar from "components/Sidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <main className='main__container'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </main>
    </div>
  );
};

export default Home;
