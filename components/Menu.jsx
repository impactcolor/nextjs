import React from 'react';

const Menu = props => {


  return (
    <>
    //  MAIN MENU OVERLAY
    <div class="menu-overlay"></div>

    //  MAIN MENU
    <div class="main-menu">
        <div class="close-menu" onClick={props.showHide}>
            <i class="fa fa-times"></i>
        </div>

        <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#/contact">Contact</a></li>
        </ul>


        <ul class="submenu">
            <li><a href="">Return Policy</a></li>
            <li><a href="">Disclaimer</a></li>
        </ul>

        <div class="social-media">
            <a target="_blank">
                <span><i class="fa fa-facebook"></i></span>
            </a>
            <a target="_blank">
                <span><i class="fa fa-pinterest"></i></span>
            </a>
            <a target="_blank">
                <span><i class="fa fa-google-plus"></i></span>
            </a>
        </div>

    </div>
    //  /MAIN MENU
    </>
  )
}

export default Menu;
