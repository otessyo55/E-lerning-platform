
import './App.css';
import Homepage from './components/Home'
import Contact from './components/contact'
import Whyus from './components/whyus';
import Profile from './components/Profile';
import { Routes, Route } from "react-router-dom";
import CustomNavbar from './components/MainNav';
import Myaccount from './components/student/Myaccount';
import Plans from './components/Plans';
import Footer from './components/footer';
import SinglecourseDetail from './components/student/singlecoursedetail';
import Userreg from './components/student/userregister';
import UserDashboard from './components/student/userdashboard';
import Allcourses from './components//student/allcourses';
import Favcourses from './components/student/favouritecourses';
import Recomendedcourses from './components/recomendedcourses';
import Profileset from './components/student/profilesetting';
import Updatepassword from './components/student/updatepassword';
import Login from './components/student/login';
import TeacherLogin from './components/teacher/teacherlogin';
import Teacherreg from './components/teacher/teacherregister';
import TeacherDashboard from './components/teacher/Teacherdashboard';
import Allteacherscourses from './components/teacher/allteacherscourses';
import Mystudents from './components/teacher/mystudents';
import TeacherProfileset from './components/teacher/teacherprofilesetting'
import Updateteacherpassword from './components/teacher/teacherupdatepassword';
import Teacherdetail from './components/teacher/teacherdetail';
import Popularcourselist from './components/coursefulllist/popularcourselist'
import Latestcourselist from './components/coursefulllist/latestcourselist'
import Allcourselist from './components/coursefulllist/allcourselist'
import Topinstructorslist from './components/coursefulllist/topinstructorlist'
import Allcategoiries from './components/coursefulllist/allcategories'
import Singlecategory from './components/coursefulllist/singlecategory'
import Addcourse from './components/teacher/addcourse'


function App() {
  return (
    <div className="App">

      <CustomNavbar />

      {/* <NavDropdownExample /> */}


      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/myaccount' element={<Myaccount />} />
        <Route path='/plan' element={<Plans />} />
        <Route path='/userreg' element={<Userreg />} />
        <Route path='/userDash' element={<UserDashboard />} />
        <Route path='/allcourses' element={<Allcourses />} />
        <Route path='/Favcourses' element={<Favcourses />} />
        <Route path='/recomdcourse' element={<Recomendedcourses />} />
        <Route path='/profilesetting' element={<Profileset />} />
        <Route path='/updatePass' element={<Updatepassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/teacherlogin' element={<TeacherLogin />} />
        <Route path='/teacherreg' element={<Teacherreg />} />
        <Route path='/teacherDashboard' element={<TeacherDashboard />} />
        <Route path='/allteacherscourses' element={<Allteacherscourses />} />
        <Route path='/ScourseDetail/:course_id' element={<SinglecourseDetail />} />
        <Route path='/teacherdetail/:teacher_id' element={<Teacherdetail />} />

        <Route path='/mystudents' element={<Mystudents />} />
        <Route path='/teacherProfileset' element={<TeacherProfileset />} />
        <Route path='/updateteacherpassword' element={<Updateteacherpassword />} />
        <Route path='/popularcourselist' element={<Popularcourselist />} />
        <Route path='/latestcourselist' element={<Latestcourselist />} />
        <Route path='/allcourselist' element={<Allcourselist />} />
        <Route path='/topinstructorslist' element={<Topinstructorslist />} />

        <Route path='/TeacherAddcourse' element={<Addcourse />} />



        <Route path='/allcategoiries' element={<Allcategoiries />} />
        <Route path='/singlecategory/:single_id' element={<Singlecategory />} />

        <Route path='/contactpage' element={<Contact />} />

        <Route path='/whyus' element={<Whyus />} />





      </Routes>

      <Footer />


    </div>
  );
}

export default App;
