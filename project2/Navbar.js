import React from 'react';
import b from './b.png'

function Navbar() {
    return (
        <nav class="container">
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Feedback</a></li>
                    <li><img src={b}></img></li>
                    <li><a href="#">F.a.q</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;
