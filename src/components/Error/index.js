import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Error = () => {
    
    return (
        <div className='text-center py-5' style={{ height: 'calc(100vh - 112px)' }}>
            <Image src="../imges/Error 404.png" className='w-auto h-75' loading="lazy" thumbnail />
            <h2 className='text-danger'>Error! page not found</h2>
            <Button className='w-50' variant="success"><Link to='/'>Back</Link></Button>
        </div>
    )
}

export default Error