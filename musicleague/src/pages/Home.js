import "../styles/Home.css";

import Login from "./Login";

const isUserLoggedIn = () => {
  return false;
};

const Home = () => {
  return isUserLoggedIn() ? (
    <>
      <div className="Home">Home</div>
    </>
  ) : (
    <Login />
  );
};

export default Home;
