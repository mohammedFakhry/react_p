import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './Social.css';

const SocialMedia = () => {
    const data = useSelector( state => state.InfoSlice.SocialMedia );

    const elements = data.map( (el, idx) => {
        return <OverlayTrigger key={idx} placement='right'
        overlay={
            <Tooltip id={`tooltip-right`}>
            <strong>{el.title}</strong>
            </Tooltip>
        }
        >
        <i className={`lab ${el.icon}`}></i>
        </OverlayTrigger>
        
    })

    return (
        <div id='SoshialMedia'>
            <div className="d-sm-none p-5 fs-1 d-flex justify-content-evenly pe-auto">
                {elements}
            </div>
            <div style={{ zIndex: '5' }} className="fs-1 p-1 position-fixed top-50 start-0 translate-middle-y d-none d-sm-flex flex-column bg-light shadow">
                {elements}
            </div>
        </div>
    )
}

export default SocialMedia