import { ProjectsList } from '../cmps/ProjectsList';
import { useEffect, useState } from 'react';
import { ProjectsDynamicModal } from '../cmps/ProjectsDynamicModal';
import { Logos } from '../cmps/Logos';
import angular from 'assets/imgs/logos/angular-logo.png'
import redux from 'assets/imgs/logos/redux-logo.png'
import react from 'assets/imgs/logos/react-logo.png'
import css from 'assets/imgs/logos/css-logo.png'
import scss from 'assets/imgs/logos/scss-logo.png'
import vue from 'assets/imgs/logos/vue-logo.png'
import vueX from 'assets/imgs/logos/vueX-logo.png'
import js from 'assets/imgs/logos/js-logo.png'
import html from 'assets/imgs/logos/html-logo.png'
import express from 'assets/imgs/logos/express-logo.png'
import hooks from 'assets/imgs/logos/hooks-logo.png'
import node from 'assets/imgs/logos/nodejs-logo.png'
import mongo from 'assets/imgs/logos/mongo-screenshot.png'



export function Home() {
    const projects = [
        {
            name: 'fello ',
            link: 'https://fello-app-sprint.herokuapp.com/#/board/600fd618e1b83a00157f18fe',
            img: 'trello-bg.png',
            tech:[react,redux,node,express,mongo,scss]
        },
        {
            name: 'book API',
            link: 'https://mister-book.herokuapp.com/#/book',
            img: 'book-bg.png',
            tech:[vue,vueX,node,express,mongo,scss]
        },
        {
            name: 'bitcoin API',
            link: 'https://shacharaskayo.github.io/mister-bitcoin/#/home/5a5664025f6a',
            img: 'bitcoin-bg.png',
            tech:[angular]
        },
        {
            name: 'mister G',
            link: 'https://nadav-co.github.io/sprint3/#/mail/list/',
            img: 'mail-bg.png',
            tech:[react]
        },
        {
            name: 'meme generator',
            link: 'https://shacharaskayo.github.io/Meme-Generator/',
            img: 'meme-bg.png',
            tech:[html,css,js]
        },
    ]
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currProj, setCurrProj] = useState('')

    const setModal = (project) => {
        setIsModalOpen(true)
        setCurrProj(project)
    }
    useEffect(() => {
        return () => {
        }
    }, [isModalOpen])

    return (
        <div className="page1-container">
            <div className="header"></div>
            <div className="hero-container" onClick={() => setIsModalOpen(false)}>
                <div className="hero-details">
                    <div>
                        <h3>My </h3>
                        <h3 className="portfolio-word">Portfolio </h3>
                    </div>

                </div>
            </div >
            <Logos />
            <ProjectsList isModalOpen={isModalOpen} setModal={setModal} projects={projects} />

            {isModalOpen &&
                <div className="screen" onClick={()=>setIsModalOpen(false)}>
                    <ProjectsDynamicModal  currProj={currProj} />
                    <h1></h1>
                </div>}



        </div>
    )
}



// LINK
{/* <Link to="/board">board</Link> */ }