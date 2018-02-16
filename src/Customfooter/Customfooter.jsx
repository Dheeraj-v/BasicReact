import React, { Component } from 'react';
import '../App.css';

class Customfooter extends Component {
    constructor(){
        super();
        this.state = {
            footer :' Copyright'
        }
    }
    render(){
        return(
            <div className = "footer-wrapper">
                <p>&copy; {this.state.footer}</p>
            </div>
        )
    }
}
export default Customfooter;
