import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      contador : 0
    }; 
  }

  agregar(){
    this.setState({
       contador : this.state.contador+1
    });
  }
  restar(){
    this.setState({
       contador : this.state.contador-1
    });
  }

  resetear=()=>{
    this.setState({contador:0})
  }
  

  render(){
    return (
      <div className="App-header">
      <div className="cont"> 
       <Contador valor={this.state.contador}/>        
        <div >
          <div>
          <Button label="Agregar" onClick={()=>this.agregar()} />
          <Button label="Restar" onClick={()=>this.restar()} />
          <Button label="Resetear" onClick={()=>this.resetear()} />
          </div>
        </div>
          
      </div>
      </div>
    )
  }

}


//Functional Component
const Contador = props => {

  return(
    <div>    
      <h1 className={props.valor < 0 ? 'negative':'positive'}>{props.valor}</h1>
    </div>
    
  );
};
const Button = props => {
    return (
      <button className="button" onClick={()=>props.onClick()}> {props.label}</button>
    );
};



ReactDOM.render(
  <App />,
  document.getElementById('app')
)


export default App;
