import React, { Component } from 'react';
import "./index.css";
import Search from './Search';

const NavRight = (props) => (
  <div className={"nav-right " + props.navClass}>
    <div className={"button " + props.buttonClass} onClick={props.onClick}>
      <div className="bar top"></div>
      <div className="bar middle"></div>
      <div className="bar bottom"></div>
    </div>
  </div>
);
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const { active, items } = this.state;
    return (
      <React.Fragment>
        <NavRight onClick={this.toggleActive} buttonClass={active ? 'active' : ''} navClass="visible-xs" />
        <main className={active ? 'move-to-left' : ''}>
          <nav>
            <NavRight onClick={this.toggleActive} buttonClass={!active ? 'active' : ''} navClass="hidden-xs" />
          </nav>
          <a href="https://codepen.io/tonkec/" className="ua" target="_blank">
            <i className="fa fa-user"></i>
          </a>
          <div className="wrapcarousel">
            <div className="carrousel left">
              <input type="radio" name="slides" id="radio-1" checked />
              <input type="radio" name="slides" id="radio-2" />
              <input type="radio" name="slides" id="radio-3" />
              <input type="radio" name="slides" id="radio-4" />
              <ul class="slides">
                <li class="slide">
                  <img src="http://www.pism.pl/_img/_pictures/23287.jpg" />
                </li>
                <li class="slide">
                  <img src="http://media.chicagomag.com//images/cache/cache_d/cache_5/cache_b/C201701-Locals-Travel-Guide-Warsaw-Old-Town-e0625b5d.jpeg?ver=1482327280&aspectratio=1.5" />
                </li>
                <li class="slide">
                  <img src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
                </li>
                <li class="slide">
                  <img src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg" />
                </li>
              </ul>
              <div class="slidesNavigation">
                <label for="radio-1" id="dotForRadio-1"></label>
                <label for="radio-2" id="dotForRadio-2"></label>
                <label for="radio-3" id="dotForRadio-3"></label>
                <label for="radio-4" id="dotForRadio-4"></label>
              </div>
            </div>
          </div>
        </main>
        <div className="sidebar">
          <Search />
        </div>
      </React.Fragment>
    );
  }
}


export default Sidebar;
