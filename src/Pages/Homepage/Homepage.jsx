import About from "../../Componentrs/About/About";
import Awards from "../../Componentrs/Awards/Awards";
import Hero from "../../Componentrs/Hero/Hero";
import Navbar from "../../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Awards></Awards>
    </div>
  );
};

export default Homepage;
