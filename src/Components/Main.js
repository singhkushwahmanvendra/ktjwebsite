import React from 'react';
import './Main.css';


class Main extends React.Component {
    render() {
        return (
            <body>
            <div className='wrap'>
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <div id='stars3'></div>
            </div>
            <main className="main">
                <div className="container">
                        <div >
                        <img src="./ktj.png" className="logo" alt="Snow"></img>   
                        <p className="soon">COMING SOON !!</p>
                        </div> 
                        <div style={{clear:"both"}}></div> 
                        <div className="bottom">
                        <a href="https://www.facebook.com/ktj.iitkgp/"><img src="./facebook.png"  alt="Snow" style={{width:"7%",margin:"0% 2%"}}></img></a>
                        <a href="https://www.instagram.com/ktj.iitkgp/"><img src="./instagram.png"  alt="Snow" style={{width:"7%",margin:"0% 2%"}}></img></a>
                        <a href="https://www.youtube.com/channel/UCJBD3V9lQm8d5uYICtePhTA"><img src="./youtub.png"  alt="Snow" style={{width:"8%",margin:"0% 2%",paddingBottom:"1%"}}></img></a>
                        </div>
                </div>
            </main>
            </body>
        )
    }
}

export default Main;