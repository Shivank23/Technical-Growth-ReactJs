import React from 'react'
import Lottie from "react-lottie"
import { NavLink } from 'react-router-dom'
const Common = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.imgsrc,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 order-2 mb-0 pt-lg-0 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                                    <h1>{props.head} <strong className="brandname">Technical Growth</strong></h1>
                                    <h3 className="my-3">We Are Team Of Talented Developers We Make Website For You... </h3>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-primary btn-lg homebutton">{props.btname}</NavLink>

                                    </div>
                                </div>
                                <div className="col-lg-6 order-lg-2 order-1 mt-5">

                                    <div className="image">
                                        <Lottie options={defaultOptions} height={600} width={700} src={props.imgsrc} className="imagel" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common
