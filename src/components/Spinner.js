import React from 'react'
import loading from './loading.gif'


const Spinner = () => {
  return (
    <div className="text-center">
      <img width="30px" src={loading} alt="loading" />
    </div>
  )
}

export default Spinner