import React, { Component } from "react"
import { useEffect, useState } from "react"
import FadeIn from 'react-fade-in';

export function ProjectsDynamicModal({ currProj }) {
    console.log(currProj);
    return (
        <div className="project-modal">
            <img className={`${currProj.name}`} src={require(`../assets/imgs/${currProj.img}`).default} alt="" />
            <div className="details-container">
                <div className="name">
                    <a href={currProj.link}> <h1>{currProj.name}</h1></a>
                </div>
                <FadeIn className={currProj.tech.length <= 3 ? 'logos low-tech' : 'logos'} >
                    {currProj.tech.map((logo, idx) => <img src={logo} key={idx} />)}
                </FadeIn>
            </div>
        </div>
    )
}
