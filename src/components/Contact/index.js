import React from 'react'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

const Contact = () => {
    return (
        <div className='py-5' style={{ height: 'calc(100vh - 112px)' }}>
            <h2 className='fw-light text-start'>Drop <span className='word-color fw-bold'>Me A Line</span></h2>
            <Form>
                <div className='d-md-flex'>
                    <Form.Floating className="mb-3 w-100">
                        <Form.Control id="floatingInputCustom" type="email" placeholder="name example"/>
                        <label htmlFor="floatingInputCustom">Type Name</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-100">
                        <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com"/>
                        <label htmlFor="floatingInputCustom">Type Email</label>
                    </Form.Floating>
                </div>
                <Form.Floating className="mb-3">
                    <Form.Control id="floatingInputCustom" type="email" placeholder="subject example"/>
                    <label htmlFor="floatingInputCustom">Type Subject</label>
                </Form.Floating>
                <FloatingLabel controlId="floatingTextarea" label="message" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a message here" style={{ height: '200px', resize: 'unset'}} />
                </FloatingLabel>

                <Button type="submit" variant="outline-primary" className='fs-5'><i className="lar la-paper-plane"></i> Send</Button>
            </Form>
        </div>
    )
}

export default Contact