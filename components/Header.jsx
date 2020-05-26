import React, { useState } from 'react'
import Menu from './Menu'

const Header = props => {

  const [menu, setMenu] = useState(false);

  function menuHideShow(e) {
    e.preventDefault();
    setMenu(!menu);
  }

  return (
  <>
    <header className="header fixed">
        <div className="header-wrapper top-bar">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-xs-2 col-sm-3">
                        <div className="menu-icon pull-left">
                            <a href="" onClick={menuHideShow}>
                                <i className="fa fa-bars"></i>
                                <span className="hidden-xs">Menu</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-6">
                        <div className="header-logo text-center">
                            <a href="#/" className="logo-text">
                               The Hat Company
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-2 col-sm-3">
                        <div className="header-cart pull-right">
                            <div className="cart-wrapper">
                                <a href="#/cart" className="">

                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </header>
    {menu ? <Menu showHide={menuHideShow} /> : null}
  </>
    )

}

export default Header
