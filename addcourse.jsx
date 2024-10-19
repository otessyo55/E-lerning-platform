import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import TeacherSidebarDash from './teachersidebar';
import Dropdownbtn from '../dropdowns';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';




function Addcourse() {
    return (

        <div className="blog-section">

            <Dropdownbtn />

            <div className="container mt-2 mb-5">
                <div className='row'>

                    <TeacherSidebarDash />

                    <div className='col-md-8'>
                        <Card style={{ width: '45rem' }} className='mb-1'>
                            <Card.Header>Teacher Profile setting</Card.Header>
                            <Card.Body>


                                <Form>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextcoursetitle">
                                        <Form.Label column sm="2">
                                            Course Title
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="text" placeholder="Course Title" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextdescript">
                                        <Form.Label column sm="2">
                                            Description
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="textarea" style={{ height: '100px' }} placeholder="Last name" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintexttech">
                                        <Form.Label column sm="2">
                                            Technologies
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="textarea" style={{ height: '70px' }} placeholder="Last name" />
                                        </Col>
                                    </Form.Group>



                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Upload Video
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="file" />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Featured Image
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control type="file" />
                                        </Col>
                                    </Form.Group>



                                    <hr />
                                    <div className='col-md-3'>
                                        <Button variant="secondary">Submit</Button>{' '}
                                    </div>


                                </Form>



                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Addcourse;