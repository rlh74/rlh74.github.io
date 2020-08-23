import React, { Component } from 'react';
import p5 from 'p5';
import './Lissajous.css'

class Lissajous extends Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (sketch) => {

        let pointCount = 500;
        let freqX = this.props.props.x;
        let freqY = this.props.props.y;
        let phi = 0;
        
        let modFreqX = this.props.props.modX;
        let modFreqY = this.props.props.modY;
        let modulationPhi = 0;

        let stateX = this.props.props.x;

        let angle = null;
        let x, y = 0;
        let w = null;
        let maxDist = null;
        let oldX, oldY = 0;

        sketch.setup = () => {
            // sketch.frameRate(60);
            //noLoop();
            console.log('p5 setup, vars:', freqX, freqY, modFreqX, modFreqY, 'expecting more:', stateX)
            sketch.createCanvas(600, 600);
            sketch.smooth();
            sketch.strokeCap(sketch.ROUND);
            sketch.frameRate(5);
            maxDist = sketch.sqrt(sketch.sq(sketch.width/2-50) + sketch.sq(sketch.height/2-50));
        }

        sketch.draw = () => {
            sketch.background(255);
            sketch.translate(sketch.width/2, sketch.height/2);
            
            sketch.strokeWeight(7);
            sketch.stroke('rgb(0,255,0)');
            sketch.fill(150);
            for (let i=0; i<=pointCount; i++){
                angle = sketch.map(i, 0,pointCount, 0,sketch.TWO_PI);
                
                // amplitude modulation
                x = sketch.sin(angle * freqX + sketch.radians(phi)) * sketch.cos(angle * modFreqX);
                y = sketch.sin(angle * freqY) * sketch.cos(angle * modFreqY);
                
                x = x * (sketch.width/2-50);
                y = y * (sketch.height/2-50);
                
                if (i > 0) {
                w = sketch.dist(x, y, 0, 0);
                let lineAlpha = sketch.map(w, 0,maxDist, 255,0);
                sketch.stroke(i%2*2, lineAlpha);
                sketch.line(oldX, oldY, x, y);
                }
                oldX = x;
                oldY = y;
                
                incrementPhi();
                
                //while (phi > 0) {
                //  phi = phi + 1;    
                //}
            }   
        
        }
        
        function incrementPhi() {
        let fPhi = 0.0005;
        phi = phi + fPhi;
        // sketch.print("in increment Phi: " + phi);
        if (phi > 360) {
            phi = 0;
            }
        }
        

    };

    componentDidMount(){
        this.myp5 = new p5(this.Sketch, this.myRef.current)
        console.log('incoming props:', this.props)
    }

    render(){
        return(
            <div className="render" ref={this.myRef}>
            </div>
        )
    }


}

export default Lissajous;
