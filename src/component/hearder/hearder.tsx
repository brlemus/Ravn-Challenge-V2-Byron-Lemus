import React from 'react';
import './Hearder.scss'

interface PROPS {
    algo: string;
}

const Header = () =>{

    return(
       <header className='header'>
           <p className='textFormat'>Ravn Star Wars Registry</p>
       </header>
    );
}

export default Header;