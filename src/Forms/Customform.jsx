import React from 'react';
import '../App.css';

class Customform extends React.Component {


    render() {
        return(
            <div>
                <input type = "text" name = "firstname" value = {this.props.formnameprop}
                 onChange = {this.props.updateStateprop} ref = "myInput"/>
                <input type = "text" name = "lastname" value = {this.props.formnameprop}
                 onChange = {this.props.updateStateprop} ref = "myInput"/>
                <p>{this.props.formnameprop}</p>
                <button onClick = {this.props.clearInputprops} >clear</button>
            </div>
        );
    }
}

export default Customform;