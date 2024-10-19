
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported for icons
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/stylefol/style.css';
import ss3 from '../../assets/images/ss3.jpg'
import ss2 from '../../assets/images/ss2.jpg'
import person_2 from '../../assets/images/person_2.jpg'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Teacherdetail() {
    return (

        <div className="blog-section">
            <div classNameName="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <h2 className="section-title">Midas Taku</h2>
                            <p>Experienced fullstack web, mobile and desktop applicaiton developer with more than 10 years expereince.
                                Proficient in backend technologies such as python, java, and c#. Proficient in frontend technologies such
                                as bootstrap, html, css, and javascript
                            </p>
                            <h3>Skills</h3>
                            <p>Python, Java, React JS, AWS, Angular.</p>



                        </div>

                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img src={person_2} alt="theyou" className="img-fluid" />
                                <small>Instructor since 2020. 2500 students, 5 courses</small>
                                <p><small>Rating:5</small></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="untree_co-section">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Course List</h2>
                        </div>
                    </div>

                    <div className="row">


                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <h3 clas><Link to='/ScourseDetail/1' className='custom-link '><span className="">Python</span> JS</Link></h3>
                            <img src={ss2} className="img-fluid mb-1" alt='Yourname' />
                            <span className="d-block position mb-1">Evans, Taku.</span>
                            <p className="mb-0"><Link to='/ScourseDetail/1' className="more dark">View Course <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <h3 clas><Link to='/ScourseDetail/1' className='custom-link '><span className="">React</span> JS</Link></h3>
                            <img src={ss3} className="img-fluid mb-1" alt='Yourname' />
                            <span className="d-block position mb-1">Evans, Taku.</span>
                            <p className="mb-0"><Link to='/ScourseDetail/1' className="more dark">View Course <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <h3 clas><Link to='/ScourseDetail/1' className='custom-link '><span className="">Java</span> JS</Link></h3>
                            <img src={ss2} className="img-fluid mb-1" alt='Yourname' />
                            <span className="d-block position mb-1">Evans, Taku.</span>
                            <p className="mb-0"><Link to='/ScourseDetail/1' className="more dark">View Course <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-2 mb-md-0">
                            <h3 clas><Link to='/ScourseDetail/1' className='custom-link '><span className="">Javascript</span> JS</Link></h3>
                            <img src={ss3} className="img-fluid mb-1" alt='Yourname' />
                            <span className="d-block position mb-1">Evans, Taku.</span>
                            <p className="mb-0"><Link to='/ScourseDetail/1' className="more dark">View Course <span className="icon-arrow_forward"></span></Link></p>
                        </div>

                    </div>




                </div>
            </div>

            <div style={{ margin: '5rem auto', width: '800px' }}>
                <Carousel>
                    <Carousel.Item>
                        <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#343a40' }}>
                            <h3 style={{ color: 'white' }}>First Slide Content</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#343a40' }}>
                            <h3>Second Slide Content</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#343a40' }}>
                            <h3>Third Slide Content</h3>
                        </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
}

export default Teacherdetail;


