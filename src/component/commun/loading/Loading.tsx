import React from 'react';
import LoadingImg from '../../../assets/images/loading.svg'
import './Loading.scss'

const Loading = () =>{
    return(
       <div className='imgLoading'>
            <img src={LoadingImg} alt="Loading" />
       </div>
    );
}

export default Loading;