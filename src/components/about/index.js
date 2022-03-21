import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import './about.css';


const About = () => {
    const { name, email, phone, address } = useSelector( state => state.InfoSlice.about )

    return (
        <div className='py-5 position-relative' id='About'>
            <svg className='position-absolute top-0 start-0 mt-1 d-none d-sm-block' viewBox="0 0 1440 320"><path fill="#000b76" fillOpacity="1" d="M0,64L40,53.3C80,43,160,21,240,16C320,11,400,21,480,64C560,107,640,181,720,181.3C800,181,880,107,960,74.7C1040,43,1120,53,1200,64C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            <h2 style={{ zIndex: '2' }} className='position-relative first-color mb-0 text-start'>About Us</h2>
            <Card style={{ zIndex: '2' }} className="card border-0 d-flex justify-content-around flex-md-row align-items-center vh-50 bg-transparent flex-md-columnn">
                <Image src="../imges/avatar 1.png" className='h-auto' loading="lazy" roundedCircle thumbnail />
                <Card.Body style={{ zIndex: '2' }}>
                    <Card.Title className='first-color fs-2' align="start">Hi There</Card.Title>
                    <Card.Text className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</Card.Text>

                    <section className='d-flex flex-wrap text-start mt-3 about-info'>
                        <section className='position-relative mb-2 w-50 fw-bold'><i className="las la-user-alt"></i> Name <br />
                            <span className='text-muted fw-light'>{name}</span>
                        </section>
                        <section className='position-relative mb-2 w-50 fw-bold'><i className="lar la-envelope"></i> Email <br />
                            <span className='text-muted fw-light'>{email}</span>
                        </section>
                        <section className='position-relative mb-2 w-50 fw-bold'><i className="las la-phone-volume"></i> Phpne <br />
                            <span className='text-muted fw-light'>{phone}</span>
                        </section>
                        <section className='position-relative mb-2 w-50 fw-bold'><i className="las la-map-marker"></i> Address <br/>
                            <span className='text-muted fw-light'>{address}</span>
                        </section>
                    </section>
                </Card.Body>
            </Card>
            <svg className='position-absolute bottom-0 start-0 d-none d-sm-block' viewBox="0 0 1440 320"><path fill="#000b76" fillOpacity="1" d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,480,261.3C560,277,640,267,720,266.7C800,267,880,277,960,272C1040,267,1120,245,1200,224C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    )
}

export default About