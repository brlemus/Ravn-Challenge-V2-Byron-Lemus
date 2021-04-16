import React from 'react';
import './ErrorMsg.scss'

const ErrorMsg = () =>{
    return(
       <div className='error' >
            <p className="errorText">Failed to Load Data</p>
       </div>
    );
}

export default ErrorMsg;