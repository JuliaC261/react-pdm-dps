import React from 'react';
import Carro from './Carro';
import React from '/.Motor';
import Rect from '/.Roda'
export default class carro extends React.Component{ 

  render(){
    return(
     <div>
      <h2 style={{color:"red", fontSize: 25, }}> Meu carro </h2>
      <Motor potencia={this.props.potencia} />
      <Roda aro={this.props.aro} />

        <img style={{width: 200}}
        src="https://alemdaautoescola.files.wordpress.com/2015/04/marcas_de_carros.png"/>
      <h3> Modelo:{this.props.modelo} </h3>
      <h4> Nome: {this.props.nome} </h4>
      </div>
    );
}
}