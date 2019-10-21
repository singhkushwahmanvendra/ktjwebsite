import React from 'react';
import './header.css';


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 0
            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
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



    render() {
        return (
            <header>
                

                <div>
                    <span style={{ fontSize: 30, cursor: "pointer" }} onClick={this.openNav}>&#9776;
                    <i class="material-icons">Home</i>
                    <i class="material-icons">Workshops</i>
                    <i class="material-icons">Events</i>
                    <i class="material-icons">CR-Portal</i>
                    </span>
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
                                <a href="#" style={{ cursor: "pointer",left:'50%',top:'50%'}}>About</a>
                                <a href="#"style={{  cursor: "pointer",left:'50%',top:'50%'}}>CR-Portal</a>                               
                                <a href="#"style={{  cursor: "pointer",left:'50%',top:'50%'}}>Contact</a>
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}


export default Header