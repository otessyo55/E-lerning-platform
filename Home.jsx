import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
//import ss1 from './assets/images/ss1.jpg'; // Corrected path to the image
import ss1 from '../assets/images/ss1.jpg';
import django from '../assets/images/django.jpg';
import javascript from '../assets/images/javascript.jpg';
import cyber from '../assets/images/cyber.jpg';
import homesc from '../assets/images/homesc.jpg';
import marketing from '../assets/images/marketing.jpg';
import '../assets/stylefol/style.css';
import Bcategories from './categories';
import Hero from './hero';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import Whyus from './whyus';
import { Link } from 'react-router-dom';
import Testimonial from './testimonial';
import Topinstructors from './topinstructors';
import Latestcourses from './latestcourses'





function Homepage() {
    return (
        <div className="App">
            <Hero />
            <Whyus />

            <div className="container mt-4">

                <div className="row mb-5">
                    <div className="col-md-4">
                        <Link to='/popularcourselist' className='custom-link'><h2 className="section-title">Popular Courses</h2></Link> <small>80</small>
                    </div>
                    <div className="col-md-6 text-start text-md-end">
                        <Link to='/popularcourselist' className="more custom-link" style={{ color: '#7e1d1d' }}>
                            View All Courses
                        </Link>
                    </div>

                    <div className="row">

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <Link to='/ScourseDetail/1' className='custom-link'><h3 className="card-header">Python and Django</h3></Link>
                            <Card className="card-container">
                                <Card.Img variant="top" src={ss1} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title"><Link to='/teacherdetail/1' className='custom-link'>By Evans</Link></Card.Title>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated January 2024</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>Students: 2000</span>
                                    </div>

                                    {/* <a href="https://example.com" className="btn btn-primary btn-secondary">View</a> */}
                                    <Link to='/ScourseDetail/1'> <Button variant="primary" className="btn-secondary">View</Button> </Link>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <h3 className="card-header"> <Link to='/ScourseDetail/1' className='custom-link'>React and Bootstrap</Link></h3>
                            <Card className="card-container">
                                <Card.Img variant="top" src={django} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title"><Link to='/teacherdetail/1' className='custom-link'>By John D</Link></Card.Title>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated January 2024</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>Students: 2000</span>
                                    </div>
                                    <Link to='/ScourseDetail/1'> <Button variant="primary" className="btn-secondary">View</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                            {/* Header for the card */}
                            <Link to='/ScourseDetail/1' className='custom-link'><h3 className="card-header">Java and Laravel</h3></Link>
                            <Card className="card-container">
                                <Card.Img variant="top" src={javascript} className="card-img-top" />
                                <Card.Body className="card-body">
                                    <Link to='/teacherdetail/1' className='custom-link'><Card.Title className="card-title">Daniel J</Card.Title></Link>
                                    <Card.Text className="card-text">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        <Link to='/teacherdetail/1'><p><small>Last updated January 2024</small></p></Link>
                                    </Card.Text>
                                    <div className='mb-2'>
                                        <span>Rating: 4/5</span>...
                                        <span>Students: 2000</span>
                                    </div>
                                    <Link to='/ScourseDetail/1'> <Button variant="primary" className="btn-secondary">View</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>



                </div>


                <div className="row mt-4">
                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link'><h3 className="card-header">PHP and HTML</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={cyber} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Link to='/teacherdetail/1' className='custom-link'><Card.Title className="card-title">By Evans</Card.Title></Link>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated June 23</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span>Rating: 4/5</span>...
                                    <span>Students: 2000</span>
                                </div>
                                <Link to='/ScourseDetail/1'> <Button variant="primary" className="btn-secondary">View</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link'><h3 className="card-header">Express JS</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={homesc} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Link to='/teacherdetail/1' className='custom-link'><Card.Title className="card-title">By Rooney</Card.Title></Link>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated June</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span>Rating: 4/5</span>...
                                    <span>Students: 2000</span>
                                </div>
                                <Link to='/ScourseDetail/1'>  <Button variant="primary" className="btn-secondary">View</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 d-flex flex-column align-items-center"> {/* Flexbox to center content */}
                        {/* Header for the card */}
                        <Link to='/ScourseDetail/1' className='custom-link'><h3 className="card-header">Javascript XML</h3></Link>
                        <Card className="card-container">
                            <Card.Img variant="top" src={marketing} className="card-img-top" />
                            <Card.Body className="card-body">
                                <Link to='/teacherdetail/1' className='custom-link'><Card.Title className="card-title">Daniel D</Card.Title></Link>
                                <Card.Text className="card-text">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    <Link to='/teacherdetail/1'><p><small>Last updated AUgust</small></p></Link>
                                </Card.Text>
                                <div className='mb-2'>
                                    <span>Rating: 4/5</span>...
                                    <span>Students: 2000</span>
                                </div>
                                <Link to='/ScourseDetail/1'> <Button variant="primary" className="btn-secondary">View</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
            {/* Recent Blog section */}
            {/* <Bcategories /> */}

            <Latestcourses />


            {/* Start Product Section */}
            <div className="product-section" style={{ marginBottom: '2px' }}>
                <div className="container">
                    <div className="row">

                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">Transform your life through education</h2>
                            <p className="mb-4">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                            </p>
                            <p>
                                <a href="shop.html" className="btn">Teachers</a>
                            </p>
                        </div>
                        {/* End Column 1 */}

                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={p1} className="img-fluid product-thumbnail" alt="Nordic Chair" />
                                <h3 className="product-title">Become an Instructor</h3>
                                <strong className="product-price">$50.00</strong>
                                <span className="icon-cross">
                                    <img src={p1} className="img-fluid" alt="Cross Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 2 */}

                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={p2} className="img-fluid product-thumbnail" alt="Kruzo Aero Chair" />
                                <h3 className="product-title">Enroll as Student</h3>
                                <strong className="product-price">$78.00</strong>
                                <span className="icon-cross">
                                    <img src={p2} className="img-fluid" alt="Cross Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 3 */}

                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img src={p3} className="img-fluid product-thumbnail" alt="Ergonomic Chair" />
                                <h3 className="product-title">Trusted by organisations</h3>
                                <strong className="product-price">$43.00</strong>
                                <span className="icon-cross">
                                    <img src={p3} className="img-fluid" alt="Cross Icon" />
                                </span>
                            </a>
                        </div>
                        {/* End Column 4 */}

                    </div>
                </div>
            </div>
            {/* End Product Section */}

            <Topinstructors />


            <Testimonial />

            <div>   <Bcategories /> </div>



        </div>


    );
}

export default Homepage;