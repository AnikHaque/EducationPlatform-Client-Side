import About from "../../Componentrs/About/About";
import Awards from "../../Componentrs/Awards/Awards";
import Career from "../../Componentrs/Career/Career";
import FeaturedCourses from "../../Componentrs/FeaturedCourses/FeaturedCourses";
import Hero from "../../Componentrs/Hero/Hero";
import Navbar from "../../Shared/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Awards></Awards>
      <FeaturedCourses></FeaturedCourses>
      <Career></Career>
    </div>
  );
};

export default Homepage;
