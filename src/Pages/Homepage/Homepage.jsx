// Components Import
import HomeAbout from "../../Componentrs/About/HomeAbout";
import Awards from "../../Componentrs/Awards/Awards";
import HomeBlog from "../../Componentrs/Blogs/HomeBlog";
import Career from "../../Componentrs/Career/Career";
import FeaturedCourses from "../../Componentrs/FeaturedCourses/FeaturedCourses";
import Hero from "../../Componentrs/Hero/Hero";
import Reviews from "../../Componentrs/Reviews/Reviews";
import Teams from "../../Componentrs/Teams/Teams";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeAbout></HomeAbout>
      <Awards></Awards>
      <FeaturedCourses></FeaturedCourses>
      <Career></Career>
      <Teams></Teams>
      <Reviews></Reviews>
      <HomeBlog></HomeBlog>
    </div>
  );
};

export default Homepage;
