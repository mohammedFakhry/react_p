import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { name, email, phone, address, webSite } = useSelector( state => state.InfoSlice.about );
  const skills = useSelector( state => state.InfoSlice.Profile_skills );

  const elements = skills.map( (el, idx) => {
    return <div className='d-flex' key={idx} >
      <label className='d-none d-md-block fw-bold p-2 w-25'>{el.skillsName}</label>
      <ProgressBar striped className="mb-2 flex-grow-1 h-auto fs-4" variant="info" now={el.skillsDegree} label={`${el.skillsName} / ${el.skillsDegree}%`} />
    </div>
  } )

  return (
    <div className="d-md-flex py-5" id='Profile'>
        <section className="text-start lh-lg">
          <h2>My <span className="word-color">Profile</span></h2>
            <div className="d-flex-column align-item-center p-2">
              <b className='d-block fs-5'>name: <span className='fw-light'>{name}</span></b>
              <b className='d-block fs-5'>Address: <span className='fw-light'>{address}</span></b>
              <b className='d-block fs-5'>Phone: <span className='fw-light'>{phone}</span></b>
              <b className='d-block fs-5'>Email: <span className='fw-light'>{email}</span></b>
              <b className='d-block fs-5'>Website: <span className='fw-light'>{webSite}</span></b>
            </div>
        </section>

        <section className="flex-grow-1">
          <h2>My <span className="word-color">Skills</span></h2>
            <div>{elements}</div>
        </section>
    </div>
  )
}

export default Profile