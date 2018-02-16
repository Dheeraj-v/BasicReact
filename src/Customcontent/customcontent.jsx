import React from 'react';
import '../App.css';

class Customcontent extends React.Component {
    constructor(){
        super();
        this.state = {
            data : []
        }
        this.setStateHandler = this.setStateHandler.bind(this)
    };
    setStateHandler (){
        var item = "added item "
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    }
    render() {
       return (
          <div>
             <p>{this.props.contentprop}</p>
             <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
          </div>
       );
    }
  }


export default Customcontent;
  