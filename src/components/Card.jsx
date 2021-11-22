import React from 'react'
import { NavLink } from 'react-router-dom'
import Lottie from "react-lottie"
const Card = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.imgsrc,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div class="card" >
                    <Lottie options={defaultOptions} height={250} width={450} src={props.imgsrc} className="imagel" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.desc}</p>
                        <NavLink to="/" class="btn btn-primary homebutton">Reach Us</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
