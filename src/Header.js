import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./img/logo3.jpg";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue();
  const [guest, setGuest] = useState('')

  const handleAuth = () => {
    if(user){
      auth.signOut();
    }
  } 

  useEffect(() => {
    if(user){
      setGuest(user.email)
    } else {
      setGuest('Guest')
    }
  },[user])

  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src={logo} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchIn" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuth} className='header__option'>
            <span className="header__optionLine1">Hello {guest}</span>
            <span className="header__optionLine2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

          <div className='header__option'>
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
          </div>

          <div className='header__option'>
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
          </div>

          <Link to="/checkout">
          <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
          </div>
          </Link>

      </div>
    </div>
  );
}

export default Header;
