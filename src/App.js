import React, { Component } from 'react';
import Botao from './botao';
import Lampada from './lampada';

class Muda extends Component{
  constructor(){
    super()
    this.state = {
      estado:'Acender',
      lampada:'apagada',
      boolean:false,
      mensagem:""
    }
  }
  Estado(i){
     
     let estado;
     let lampada;
     let boolean;
     let mensagem;
     
     if(i === 'Acender'){
        estado='Apagar'
        lampada='acesa'
        document.getElementById('chao').style.background='yellow';
        document.getElementById('botao').style.background='red';
        var maxnumber  = 9;
        var randomnumber = Math.floor((Math.random()*maxnumber));
        if(randomnumber === 0){
          boolean='true'
          lampada='apagada'
          mensagem='A lâmpada queimou :('
          document.getElementById('chao').style.background='black'; 
        }
      }else{
        estado='Acender'
        lampada='apagada'   
        document.getElementById('chao').style.background='black';
        document.getElementById('botao').style.background='green'; 
      }     
      this.setState({
        estado:estado,
        lampada:lampada,
        boolean:boolean,
        mensagem:mensagem
      })
  }

  render(){
    return(
      <div>     
        <center>
          <Lampada valor={this.state.lampada+".jpeg"}/> 
          <br/>    
          <Botao boolean={this.state.boolean} onClick={() => this.Estado(this.state.estado)} estado={this.state.estado}/>
          <div id="chao"></div>
          <h1>{this.state.mensagem}</h1>
       </center>
      </div>
    )
  }
}
export default Muda;
