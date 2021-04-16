import React from 'react';
import './Loading.scss';
import LoadingSVG from '../../assets/images/loading.svg';

const Loading = () =>{
    return(
       <div className='loading' >
            <img src={LoadingSVG} alt=""/><p className="loadingText">Loading</p>
       </div>
    );
}

export default Loading;