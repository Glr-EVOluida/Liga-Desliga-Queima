
import React, { Component } from 'react';
import Botao from './botao';
import Lampada from './lampada';
// class App extends Component{
//   render(){
//    return( 
//      <table className='container' border='2px' > 
//       <tbody>
//           <tr>
//             <td>Nome</td>            
//             <td>Sobrenome</td>
//         </tr>
//         {[
//           {nome:'rudinilly',sobrenome:'Rodrigues'},
//           {nome:'Junior'}
//           ].map((first,index)=>(
//            <Title key={index} name={first.nome} lastname={first.sobrenome}/>
//         ))}         
//       </tbody>
//      </table>
//    )
//   }  
// }


class Muda extends Component{
constructor(){
  super()
  this.state = {
    estado:'acender',
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
     if(i === 'acender'){
      estado='apagar'
      lampada='acesa'
      document.getElementById('chao').style.background='yellow';
      var maxnumber  = 9;
      var randomnumber = Math.floor((Math.random()*maxnumber));
      if(randomnumber === 0){
        boolean='true'
        lampada='apagada'
        mensagem='A lampada queimou :('
        document.getElementById('chao').style.background='black'; 
      }

     }else{
      estado='acender'
      lampada='apagada'   
      document.getElementById('chao').style.background='black'; 
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
     <h1>{this.state.mensagem}</h1>
        <Botao boolean={this.state.boolean} onClick={() => this.Estado(this.state.estado)} estado={this.state.estado}/>
        <div id="chao"></div>
       </center>
      </div>
    )
  }
}
export default Muda;
