import React from 'react'
import Card from "../components/Card"
import web from "../Lotties/web2.json"
import webblue from "../Lotties/webblue.json"
import android from "../Lotties/android.json"
import marketing from "../Lotties/marketing.json"
import seo from "../Lotties/seo.json"
import elearn from "../Lotties/elearn.json"
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center heading">Our Services</h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-10 mx-auto ">
                        <div className="row gy-5">

                            <Card title="Web Development" desc="We are here to provide all the services realated to web development" imgsrc={web} />
                            <Card title="Android Development " desc="We are here to provide all the services realated to web development" imgsrc={android} />
                            <Card title="Digital Marketing " desc="We are here to provide all the services realated to web development" imgsrc={marketing} />
                            <Card title="Seo Development " desc="We are here to provide all the services realated to web development" imgsrc={seo} />
                            <Card title="E Lectures " desc="We are here to provide all the services realated to web development" imgsrc={elearn} />
                            <Card title="IOT And Cyber Security" desc="We are here to provide all the services realated to web development" imgsrc={webblue} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
