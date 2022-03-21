import React from 'react'
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Work = () => {
    const data = useSelector( state => state.InfoSlice.works );
    const elements = data.map( (el, idx) => {
        return <Alert key={idx} variant="primary" className='w-100 m-1 d-md-flex justify-content-around align-items-center'>
            <i className={el.icon_src} style={{ fontSize: '55px' }}/>
            <div className='flexx-shrink-1'>
                <span className='span-count' data-count={el.count}>{el.count}</span>
                <Alert.Heading>{el.title}</Alert.Heading>
            </div>
        </Alert>
    } )

    window.onload = function () {
        document.querySelectorAll(".span-count").forEach( (ele) => {
            let counter = 0;
            setInterval(() => {
                if ( ele.getAttribute('data-count') > counter ) {
                    counter++;
                    ele.innerHTML = `+${counter}`;
                }
            }, 10);
        });
    }

    return (
        <div className='py-5' id='Work'>
            <h2 className='first-color text-start'>Works</h2>
            <div className='d-sm-flex justify-content-between text-center fw-bolder'>
                {elements}
            </div>
        </div>
    )
}

export default Work