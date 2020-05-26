import Head from 'next/head'


const Home = () => (
  <div className="container">
  //  PRELOADER
  <div id="preloader">
      <div id="preloader-status">
          <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
          </div>
          <div id="preloader-title">LOADING</div>
      </div>
  </div>
  //  /PRELOADER
  //
  //  HEADER
  <header class="header fixed">
      <div class="header-wrapper top-bar">
          <div class="container-fluid">
              <div class="row">

                  <div class="col-xs-2 col-sm-3">
                      <div class="menu-icon pull-left">
                          <a href="" data-ng-click="open_menu();">
                              <i class="fa fa-bars"></i>
                              <span class="hidden-xs">Menu</span>
                          </a>
                      </div>
                  </div>

                  <div class="col-xs-8 col-sm-6">
                      //  Logo
                      <div class="header-logo text-center">
                          <a href="#/" class="logo-text">
                             Picasso
                          </a>
                      </div>
                      //  /Logo
                  </div>

                  <div class="col-xs-2 col-sm-3">
                      //  Header shopping cart
                      <div class="header-cart pull-right">
                          <div class="cart-wrapper">
                              <a href="#/cart" class="">
                                  // <span class="cart">{{Global.total | currency}}</span>
                                  // <span class="hidden-xs">Cart</span>
                              </a>
                          </div>
                      </div>
                      //  Header shopping cart
                  </div>

              </div>

          </div>
      </div>
  </header>
  //  /HEADER

  //  MAIN MENU OVERLAY
  <div class="menu-overlay" data-ng-show="display_menu" data-ng-click="hide_menu()"></div>

  //  MAIN MENU
  <div class="main-menu" data-ng-show="display_menu">
      <div class="close-menu" data-ng-click="hide_menu()">
          <i class="fa fa-times"></i>
      </div>

      <ul>
          <li><a href="#/" data-ng-class="{ active: isActive('/') }">Home</a></li>
          <li><a href="#/shop" data-ng-class="{ active: isActive('/shop') }">Shop</a></li>
          <li><a href="#about" data-ng-class="{ active: isActive('/about') }">About</a></li>
          <li><a href="#/contact" data-ng-class="{ active: isActive('/contact') }">Contact</a></li>
      </ul>


      <ul class="submenu">
          <li><a href="">Return Policy</a></li>
          <li><a href="">Disclaimer</a></li>
      </ul>

      <div class="social-media">
          <a data-ng-href="{{facebook}}" target="_blank">
              <span><i class="fa fa-facebook"></i></span>
          </a>
          <a data-ng-href="{{pinterest}}" target="_blank">
              <span><i class="fa fa-pinterest"></i></span>
          </a>
          <a data-ng-href="{{google}}" target="_blank">
              <span><i class="fa fa-google-plus"></i></span>
          </a>
      </div>

  </div>
  //  /MAIN MENU
  </div>
)

export default Home
