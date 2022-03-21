import React from 'react';
import './loading.css';

const Loading = ({ type, color }) => {
    return (
        <div className='bg-dark d-flex align-items-center justify-content-center vh-100 position-fixedd'>
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        </div>
    )
}

export default Loading