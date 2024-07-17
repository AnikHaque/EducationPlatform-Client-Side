import About from "../../Componentrs/About/About";
import Awards from "../../Componentrs/Awards/Awards";
import Blogs from "../../Componentrs/Blogs/Blogs";
import Career from "../../Componentrs/Career/Career";
import FeaturedCourses from "../../Componentrs/FeaturedCourses/FeaturedCourses";
import Hero from "../../Componentrs/Hero/Hero";
import Reviews from "../../Componentrs/Reviews/Reviews";
import Teams from "../../Componentrs/Teams/Teams";
import Footer from "../../Shared/Footer/Footer";
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
      <Teams></Teams>
      <Reviews></Reviews>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
