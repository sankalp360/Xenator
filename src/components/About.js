import React, { useState } from 'react'

export default function About(props) {

    const myStyle = {
<<<<<<< HEAD
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <strong>
            <div className="container" style={myStyle}>
                <h2 className="my-4"><strong>About Xenator</strong></h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>
                                    Xenator
                                </strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                This Website gives you different feautres for interacting with your text and giving substantial knowledge about the text you want to analyze.It provides instant character count - Word count - Total Read time and more..
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>
                                    Browser Compatible
                                </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                This software works in every browser and compatible with all devices and provides all the utilities to be used in analyzing texts from blogs , excel , pdf , essays ,etc.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong>
                                    About Creater
                                </strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                            <div className="accordion-body">
                                <strong>Sankalp Patel  --> <a href="https://github.com/sankalp360">https://github.com/sankalp360</a></strong>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btntext}</button> */}
            </div>
        </strong >
=======
        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <div className="container" style={myStyle}>
            <h2 className="my-2">About Xenator</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Xenator
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            This Website gives you different feautres for interacting with your text and giving substantial knowledge about the text you want to analyze.It provides instant character count - Word count - Total Read time and more..
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            This software works in every browser and compatible with all devices and provides all the utilities to be used in analyzing texts from blogs , excel , pdf , essays ,etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            About Creater
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            <strong>Sankalp Patel  --> <a href="https://github.com/sankalp360">https://github.com/sankalp360</a></strong>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btntext}</button> */}
        </div>
>>>>>>> 8bf5767d4f16024031375c8c81f8801e3ba11d97
    )
}
