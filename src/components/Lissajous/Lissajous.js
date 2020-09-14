import React, { Component } from 'react';
import p5 from 'p5';
import './Lissajous.css'

class Lissajous extends Component {

    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (sketch) => {

        let pointCount = 800;
        let freqX = 13;
        let freqY = 8;
        let phi = 0;
        
        let modFreqX = 8;
        let modFreqY = 13;

        let angle = null;
        let x, y = 0;
        let w = null;
        let maxDist = null;
        let oldX, oldY = 0;

        
        sketch.setup = () => {
            // sketch.frameRate(60);
            //noLoop();
            sketch.createCanvas(600, 600);
            sketch.smooth();
            sketch.strokeCap(sketch.ROUND);
            maxDist = sketch.sqrt(sketch.sq(sketch.width/2-50) + sketch.sq(sketch.height/2-50));
        }
        
        sketch.draw = () => {
            // setTimeout(sketch.draw, 50);
            // requestAnimationFrame(sketch.draw);
            sketch.background(152, 150, 138);
            sketch.translate(sketch.width/2, sketch.height/2);
            
            sketch.strokeWeight(8);
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
                phi = phi + 0.0005;
                if (phi > 359.995) {
                    phi = 0;
                }
                // incrementPhi();
                
                //while (phi > 0) {
                //  phi = phi + 1;    
                //}
            }   
        
        }
        
        // sketch.incrementPhi = () => {
        // let fPhi = 0.0005;
        // phi = phi + fPhi;
        // // sketch.print("in increment Phi: " + phi);
        // if (phi > 360) {
        //     phi = 0;
        //     }
        // }

    };

    componentDidMount(){
        this.myp5 = new p5(this.Sketch, this.myRef.current)
    }

    render(){
        return(
            <div className="render" ref={this.myRef}>
            </div>
        )
    }


}

export default Lissajous;
