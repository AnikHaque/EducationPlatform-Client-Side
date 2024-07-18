import About from "../../Componentrs/About/About";
import Awards from "../../Componentrs/Awards/Awards";
import Blogs from "../../Componentrs/Blogs/Blogs";
import Career from "../../Componentrs/Career/Career";
import FeaturedCourses from "../../Componentrs/FeaturedCourses/FeaturedCourses";
import Hero from "../../Componentrs/Hero/Hero";
import Reviews from "../../Componentrs/Reviews/Reviews";
import Teams from "../../Componentrs/Teams/Teams";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Awards></Awards>
      <FeaturedCourses></FeaturedCourses>
      <Career></Career>
      <Teams></Teams>
      <Reviews></Reviews>
      <Blogs></Blogs>
    </div>
  );
};

export default Homepage;
