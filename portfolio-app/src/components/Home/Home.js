import React from 'react';
// import { Link } from 'react-router-dom';
// import magritte from '../../images/magritte-96.png';
import './Home.css';

function Home() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <div className="hero-body" id="home-body">
            <div className="container has-text-centered">
            <h1 className="title">
                Hi, my name is Kris(tine),
            </h1>
            <h2 className="subtitle">
                but you can call me Kris.
            </h2>
            </div>
        </div>
    )
}

export default Home;