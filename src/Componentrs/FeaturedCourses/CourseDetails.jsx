import CourseDetailsBanner from "./CourseDetailsBanner";
import CourseDetailsModule from "./CourseDetailsModule";
import CourseProject from "./CourseProject";
import CourseSupport from "./CourseSupport";
import Curricullumn from "./Curricullumn";

const CourseDetails = () => {
  return (
    <div>
      <CourseDetailsBanner></CourseDetailsBanner>
      <CourseDetailsModule></CourseDetailsModule>
      <Curricullumn></Curricullumn>
      <CourseProject></CourseProject>
      <CourseSupport></CourseSupport>
    </div>
  );
};

export default CourseDetails;
