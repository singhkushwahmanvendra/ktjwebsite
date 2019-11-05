import React from 'react';
import './header.css';
import Main from './Main';
import Work from './Work';
import Contact from './Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 0
            },
                hover:false,
                hov:false
        };
        this.toggleHov = this.toggleHov.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    toggleHov() {
        this.setState({hov: !this.state.hov})
    }

    componentDidMount() {
        document.addEventListener("click", this.closeNav);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.closeNav);
    }

    openNav() {
        const style = { width : '100%' };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.addEventListener("click", this.closeNav);
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }


     //                    <i  className="links" style={linkSt} onMouseEnter={this.toggleHov} onMouseLeave={this.toggleHov}>CR-PORTAL</i>
    render() {

        var linkStyle;
        if (this.state.hover) {
          linkStyle = {fontStyle: "normal",margin:"4% 0% 1% 3%", textShadow: "0 0 5px lightblue,0px 0px 10px lightblue"}
        } else {
          linkStyle = {fontStyle: "normal",margin:"4% 0% 1% 3%"}
        }
        var linkSt;
        if (this.state.hov) {
          linkSt = {fontStyle: "normal",margin:"4% 0% 1% 3%", textShadow: "0 0 5px lightblue,0px 0px 10px lightblue"}
        } else {
          linkSt= {fontStyle: "normal",margin:"4% 0% 1% 3%"}
        }


        return (
            <Router>
            <header>

                <div>
                    <span className="navig" style={{ fontSize: 30, cursor: "pointer" }} onClick={this.openNav}>&#9776;</span>
                    <img src="./iit.png" className="left" alt="Snow"></img>
                    <div className="centre">
                    <i className="links" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}><Link to="/">HOME</Link></i>
                    <i className="links" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}><Link to="/Work">WORKSHOPS</Link></i>
                    <i className="links" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}><Link to="/Contact">CONTACTS</Link></i>
                    </div> 
                    <img src="./topright.png" className="right" alt="Snow"></img> 
                    
                    <div
                        ref="snav"
                        className="overlay"
                        style={this.state.style}
                    >
                        <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onClick={this.closeNav}
                            >
                                ×
                    </a>
                        <div className="sidenav-container" className="overlay-content">
                            <div className="text-center">
                                <h2></h2>
                            </div>
                            <div className="list-group">
                                {/*your form component goes here */}
                                <a href="#" style={{ cursor: "pointer",left:'50%',top:'50%'}}><Link to="/">HOME</Link></a>
                                <a href="#"style={{  cursor: "pointer",left:'50%',top:'50%'}}><Link to="/Work">WORKSHOPS</Link></a>                               
                                <a href="#"style={{  cursor: "pointer",left:'50%',top:'50%'}}><Link to="/Contact">CONTACTS</Link></a>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
                    <Switch>
                    <Route exact path="/">
                            <Main />
                        </Route>
                        <Route exact path="/Work">
                            <Work />
                        </Route>
                        <Route path="/Contact">
                            <Contact />
                        </Route>
                    </Switch>
            </header>
           </Router>

        )
    }
}


export default Header