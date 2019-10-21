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
                        <div className="centered">
                        <img src="./ktjlogo.png" className="logo" alt="Snow"></img>   
                        <p data-content="Kshitij" className="big" style={{fontSize:'5em',margin:0,padding:0 }} >Kshitij</p>
                        <p data-content="2020" className="medium" style={{fontSize:'4em',margin:0,padding:0}}>2020</p>
                        <p data-content="Apocalyptic Adventure" className="theme" style={{fontSize:'3em',margin:0,padding:0}}>Apocalyptic Adventure</p>
                        </div>
                </div>
            </main>
            </body>
        )
    }
}

export default Main;