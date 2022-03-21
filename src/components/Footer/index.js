import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="w-100 text-white position-static bottom-0 start-0 py-3 bg-primary text-center">
            Copyright &copy; {year}
        </div>
    )
}

export default Footer