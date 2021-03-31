import angular from '../assets/imgs/logos/angular-logo.png'
import redux from '../assets/imgs/logos/redux-logo.png'
import react from '../assets/imgs/logos/react-logo.png'
import css from '../assets/imgs/logos/css-logo.png'
import scss from '../assets/imgs/logos/scss-logo.png'
import vue from '../assets/imgs/logos/vue-logo.png'
import vueX from '../assets/imgs/logos/vueX-logo.png'
import js from '../assets/imgs/logos/js-logo.png'
import html from '../assets/imgs/logos/html-logo.png'
import express from '../assets/imgs/logos/express-logo.png'
import hooks from '../assets/imgs/logos/hooks-logo.png'
import node from '../assets/imgs/logos/nodejs-logo.png'
import mongo from '../assets/imgs/logos/mongo-screenshot.png'
import { useEffect, useState } from 'react'

export function Logos() {
    const [logos, setLogos] = useState([html, css, js, react, hooks,redux, angular, vue, vueX, scss, node, express, mongo])


    return (
        <div className="slider">
            <div className="logos-container">
                {logos.map(logo => <img src={logo} key={logo}></img>)
                }
            </div>
        </div>
    )
}