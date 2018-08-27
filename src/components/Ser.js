import React, { Component } from 'react';
import './index.css';
import { Carousel } from 'react-bootstrap';


class Appl extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      active: false,
      index: 1
    };
  }

  toggleClass() {
    this.setState({ active: !this.state.active });
  };

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }



  render() {
    const { index, direction } = this.state;
    return (

      <div className="App">
        <div className="nav-right visible-xs">
          <div className="button" id="btn">
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
          </div>
        </div>
        <main className={this.state.active ? 'move-to-left' : null}>
          <nav>
            <div className="nav-right hidden-xs">
              <div className={this.state.active ? 'button active' : 'button'} onClick={this.toggleClass} id="btn" >
                <div className="bar top"></div>
                <div className="bar middle"></div>
                <div className="bar bottom"></div>
              </div>
            </div>
          </nav>

          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}>
            <Carousel.Item>
              <img alt="900x500" src="https://интересное.ru.com/wp-content/uploads/2016/12/Interesnye-fakty-o-CHernom-more-8.jpg" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://интересное.ru.com/wp-content/uploads/2016/12/Interesnye-fakty-o-CHernom-more-8.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://интересное.ru.com/wp-content/uploads/2016/12/Interesnye-fakty-o-CHernom-more-8.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </main>

        <div className="sidebar">
        <MuiThemeProvider theme={theme}>
          <CustomizedInputs color="primary"/>
          </MuiThemeProvider>
          <ul className="sidebar-list">
            <li className="" className={this.state.active ? 'sidebar-item active' : 'sidebar-item'}>
              <a href="#" className="sidebar-anchor">Item 1</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
