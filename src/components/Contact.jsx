import React from 'react'

import web from "../Lotties/contact.json"
import Lottie from "react-lottie"

const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: web,
        rendererSettings: {
            preserveAspectRatio: "xMildYMild slice"
        }
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center heading">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto order-2 order-lg-1">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary homebutton" type="submit">Submit form</button>
                        </div>




                    </div>
                    <div className="col-md-6 mt-0 col-10 order-1 order-lg-2 ">
                        <Lottie options={defaultOptions} height={400} width={600} src={web} className="imagel" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
