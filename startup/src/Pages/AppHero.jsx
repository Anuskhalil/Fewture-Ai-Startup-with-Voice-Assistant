import React, { useEffect } from 'react'
import OrderModal from '../Components/OrderModal'
import ReactTyped from "react-typed";
import alanBtn from '@alan-ai/alan-sdk-web';
import '../App.css'


function AppHero() {

    useEffect(() => {
        alanBtn({
            key: '12cdbed00e3a246eea2d32d5500f39122e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'go:back') {
                    // Call the client code that will react to the received command
                }
            }
        });
    }, []);


    return (
        <div id='carousel' style={{ backgroundColor: '#0F294E' }}>
            <div className="container" >
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-12 mt-5">
                        <img src="/src/images/remove heroimg.png" width={'100%'} className="img-fluid" alt="Ai Image" />
                    </div>
                    <div className="col-lg-6 col-md-12 mt-5">
                        <h2 className='fs-1 fw-bolder text-warning' style={{ fontFamily: "cursive" }}>Welcome to <span>{" "}</span>
                            <ReactTyped className='text-light' strings={["Fewture-Ai", "Fastest Ai Assistant"]} cursorChar=" !" typeSpeed={100} backSpeed={80} loop />
                        </h2>
                        <h6 className='fw-bold mt-4 py-3 text-white' style={{ fontSize: '17px', fontFamily: "cursive" }}>At FewTure-Ai, we're passionate about pioneering the next wave of AI technology, redefining the boundaries of human-computer interaction, and making innovation accessible to all. Our journey began with a simple yet powerful idea: to create AI chatbots that make a difference in people's lives.</h6>
                        <OrderModal />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AppHero
