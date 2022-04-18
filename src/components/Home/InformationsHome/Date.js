import React from 'react'
import Moment from 'react-moment';


const Date = () => {

  return (
    <div className='home_date'>
        <Moment format='dddd DD MMMM YYYY'></Moment>
        </div>
  )
}

export default Date