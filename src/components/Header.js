import React from 'react';

import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

import "./styles/Header.css";
import pages from '../static/pages';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className="header">
            <Link to={pages.home}>
                <img
                    alt="Logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="header__logo" />
            </Link>
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
            <div className="header__nav">
                <Link to={pages.home} className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Hello, Qazi</span>
                        <span className="header__optionTwo">Sign In</span>
                    </div>
                </Link>
                <Link to={pages.home} className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>
                <Link to={pages.home} className="header__link">
                    <div className="header__option">
                        <span className="header__optionOne">Your</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>
                <Link to={pages.checkout} className="header__link">
                    <div className="header__option--basket">
                        <ShoppingBasketIcon />
                        <span className="header__optionTwo header__basketCount">{basket?.length || 0}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
