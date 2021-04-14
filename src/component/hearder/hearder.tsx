import React from 'react';
import './Hearder.scss'

interface PROPS {
    algo: string;
}

const Header = () =>{

    return(
       <header className='header'>
           <text className='textFormat'>Ravn Star Wars Registry</text>
       </header>
    );
}

export default Header;