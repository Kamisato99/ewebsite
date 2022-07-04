import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const[{ basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () =>{
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img
        className="header_logo" 
        src="https://th.bing.com/th/id/R.17b0dd515d3088908369b858b5cfe85d?rik=tqsEM09lHCK9Bw&riu=http%3a%2f%2fasiancraft.com.vn%2fpublic%2fuploads%2fimages%2flogo(1).png&ehk=fqGoBUYoReLZHwXEHYJtaF1eNmc6Pl2fe3zPNDBlRKg%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        />
      </Link>

        <div
        className="header_search">
            <input
            className="header_searchInput" 
            type="text" />
            <SearchIcon
            className="header_searchIcon"/> 
            {/*Header Icon */}
            <Link to="/checkout">
            <div 
            className="header_optionBasket">
                <ShoppingBasketIcon/>
                <span className="header_optionLineTwo
                header_basketCount">
                  {basket?.length}
                </span>
            </div>
            </Link>
            </div>

            <div className="header_nav">
              <Link to={!user &&'/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span
                    className='header_optionLineOne'>
                    Hello {!user ? 'Guest': user.email }</span> 
                    <span
                    className='header_optionLineTwo'>{
                      user ? 'Sign Out' : 'Sign In'
                    }</span>
            </div>
           </Link>

            <Link to='/orders'>
            <div className='header_option'>
                    <span
                    className='header_optionLineOne'>
                    Returns</span> 
                    <span
                    className='header_optionLineTwo'>
                    &Orders
                    </span>
            </div>  
            </Link>
        </div>
    </div>
  );
}

export default Header