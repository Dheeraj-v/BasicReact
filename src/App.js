import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Customfooter from './Customfooter/Customfooter';
import Customcontent from './Customcontent/customcontent';
import Customform from './Forms/Customform';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      header : "Header Component",
      content : "content",
      name : 'Initial name..',
      data :[
        {
          component: 'First Component',
          id:2
        },
        {
          component: 'second Component',
          id:3         
        },
        {
          component: 'Third Component',
          id:4
        }
      ]
    };
 
        this.updateState = this.updateState.bind(this);
        this.clearInput =this.clearInput.bind(this);
   
  }
  updateState(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
 }
  clearInput (){
    this.setState({name: ''});
    console.log("clear")
    //ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Customheader headerprop = {this.state.header}/>
        <Customcontent contentprop = {this.state.content}/>
        {this.state.data.map((dynamicComponent,index)=> <Dynamiccontent key = {dynamicComponent.id} componentData = {dynamicComponent} />)}
        <Customform formnameprop = {this.state.name} updateStateprop = {this.updateState} clearInputprops = {this.clearInput}/>       
        <Customfooter />
      </div>
    );
  }
}
class Customheader extends React.Component {
  render() {
     return (
        <div>
           <h1>{this.props.headerprop}</h1>
        </div>
     );
  }
}


class Dynamiccontent extends React.Component {
  render() {
     return (
        <div>
           <div>{this.props.componentData.component}</div>
           <div>{this.props.componentData.id}</div>          
        </div>
     );
  }
}
export default App;
