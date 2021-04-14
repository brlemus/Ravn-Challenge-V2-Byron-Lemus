import React from 'react';
import {ReactComponent as LoadingImg} from '../../assets/images/loading.svg'
import Loading from '../commun/loading/Loading';
import './SideBar.scss'

interface PROPS {
    name: string;
    from: string;
}

const ListItem = ({name, from}: PROPS ) =>(
    <li></li>
);

const SideBar = () =>{
    return(
       <aside className='sideBar'>
        <Loading/>
       <ul>
           
       </ul>
       </aside>
    );
}

export default SideBar;