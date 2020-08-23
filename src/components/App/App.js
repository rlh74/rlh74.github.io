import React, { Component } from 'react';
import Header from '../Header/Header';
import Lissajous from '../Lissajous/Lissajous';

class App extends Component {

    state = {
        x: 33,
        y: 55,
        modX: 55,
        modY: 33
    }

    handleChange = (event, parameter) => {
        event.preventDefault();
        console.log('input:', event.target.value)
        switch (parameter) {
            case 'x':
                this.setState({
                    x: event.target.value
                });
                break;
            case 'y':
                this.setState({
                    y: event.target.value
                });
                break;
            case 'modX':
                this.setState({
                    modX: event.target.value
                });
                break; 
            case 'modY':
                this.setState({
                    modY: event.target.value
                });
                break;
            default:
                console.log('default case');
                break;

        }
    }
    render () {
        return (
            <>
            <input type="number" step="1" onChange={(event)=>this.handleChange(event, 'x')}></input>
            <input type="number" step="1" onChange={(event)=>this.handleChange(event,'y')}></input>
            <input type="number" step="1" onChange={(event)=>this.handleChange(event,'modX')}></input>
            <input type="number" step="1" onChange={(event)=>this.handleChange(event,'modY')}></input>
            <Header/>
            <Lissajous props={this.state}/>  
            </>
        );
    }
}

export default App;
