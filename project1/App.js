
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import stt from './stt.mp4';
import ch from './ch.jpg'
import S from './S.jpg'
import j from './j.jpeg'
import m from './m.jpeg'
import chooo from './chooo.jpeg'

import videoplayer from 'react-video-js-player'
import './App.css';


function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div class="container">

                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="mynavbar">
                            <form class="d-flex m-auto">
                                <ul class="-nav m-auto mb-2 mb-lg-0 ">
                                    <div>
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <li class="nanavbarv-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Apetizers</a>
                                    </li>
                                    <li class="nav-item p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">DESERTS</a>
                                    </li>

                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Egg</a>
                                    </li>
                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Fish</a>
                                    </li>
                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Main</a>
                                    </li>

                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Pizza</a>
                                    </li>

                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Salad</a>
                                    </li>
                                    <li class="nav-item  p-lg-2">
                                        <a class="nav-link  active" aria-current="page" href="#">Snacks</a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </nav><br />
            </div>
            <div class="container">
                <nav className="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <video controls src={stt} className="object-fit-fill" muted autoPlay loop />
                        </a>
                    </div>
                </nav>
            </div>
            <div class="container">
                <div class="d-flex m-auto">
                    <h4 class="d-flex m-auto">MOST EXPLOSIVE RECIPES AT DINNERMITE</h4>
                </div>
            </div>
            <div className="card-grid-container">
                {data.map(item => (
                    <div key={item.id} className="card">
                        <img src={item.image} alt={item.title} />
                        <h5 className="card-title">{item.title}</h5>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="card-grid-container">

                <div className="card">
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="box md-3">
                            <div class="card">
                                <img src={ch} alt="dineer"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card"><h5 class="card-title">GRILLED FISH</h5><p> change the traditional way to cook fish Grill to get the maximum benefits from this super food.</p></div>
                <div className="card" ><img src={j} alt="dineer"></img></div>
                <div className="card"><h5 class="card-title">PB J SMOOTHIE</h5><p> i made this smoothie with peanut butter but it can be made with powdered peanut butter for a lower.</p></div>
                <div className="card"><h5 class="card-title">SESAME HONEY FUDGE</h5> <p>Sesame Honey Fudge is a Middle Eastem treat made with tahini.</p></div>
                <div className="card"><img src={chooo} alt="dineer" ></img></div>
                <div className="card"> <h5 class="card-title">CHINESE SOUP</h5><p>chinese soup thats healthy and delicious and it also prepared.</p></div>
                <div className="card"><img src={m} alt="dineer"></img></div>
            </div><br /><br />
            <div>
                <img src={S} alt="image" />
            </div>

        </div>
    );

}
export default App;