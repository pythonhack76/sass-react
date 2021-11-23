import React from 'react';

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from './Header.module.scss';



const Header = () => {
    return (
    <header className={classes.header}>   
    <div className={classes.header__content}>

        <h2>navbar</h2>
    </div>

    <nav className={classes.header__content__nav}>
        <ul>
            <li>
                <a href="/">PageOne</a>
            </li>
            <li>
                <a href="/">PageOne</a>
            </li>
            <li>
                <a href="/">PageOne</a>
            </li>

        </ul>
        <button>CTA PAGE</button>
    </nav>
    <div className={classes.header__content__togle}>


    </div>
    </header>
    );
};


export default Header;
