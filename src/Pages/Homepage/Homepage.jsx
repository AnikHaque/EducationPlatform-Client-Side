import About from "../../Componentrs/About/About";
import Hero from "../../Componentrs/Hero/Hero";
import Navbar from "../../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default Homepage;
