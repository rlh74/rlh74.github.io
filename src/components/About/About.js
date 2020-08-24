import React, { Component } from 'react';

class About extends Component {

    render () {

        return (
            <div className="about">
            <div className="connect">
                <a href="https://github.com/rlh74/rlh74.github.io" target="_blank" rel="noopener noreferrer">Project Repository</a> <br/>
                <a href="https://github.com/rlh74" target="_blank" rel="noopener noreferrer">Github profile</a><br />
                <a href="https://www.linkedin.com/in/rosshutchens/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br />
            </div>
            <div className="info">
                Hello and welcome! Lissajous curves are an expression of parametric equations which describe complex harmonic motion.<br/><br/>
                My fascination with them came from working with audio synthesizers, particularly the process of FM (frequency modulation) synthesis and its origins in radio communication. 
                Here, I am using P5.js which is a client-side JavaScript library of Processing, a coding tool developed for visual artists built with Java.
                The figure is composed by the modulating the amplitude of a signal (x) and a carrier (y), of which the respective variables are then modulated by a pair of frequencies -- in this example I am swapping the frequencies used for the signal and carrier input.<br/><br/>
                I chose two frequencies with an intervalic relationship that I frequent with audio synthesis -- it is interesting to witness the visual representation of that relationship!
                To create the animation effect, I am incrementally increasing the phase of the signal frequency and resetting it to 0 as it approaches 360.

            </div>  
            </div>
        );
    
    }
}

export default About;