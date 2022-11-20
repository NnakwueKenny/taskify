import React from 'react'
import { Link } from 'react-router-dom'

const BackArrow = ({link, classes}) => {
  return (
    <Link to={link} className={classes}>
        <span className='text-2xl'><i className='fa fa-arrow-left'></i></span>
    </Link>
  )
}

export default BackArrow