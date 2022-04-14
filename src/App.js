import React from "react";
import "./style.css";
import Carro from './Carro';

function Welcome(props){
  return <h1>o seu carro: {props.name}</h1>
}

export default function Welcome(props) {
  return (
    <h1>o seu carro:{props.name} </h1> )
  }

function App(props){
  return (
    <div>
    < Carro modelo="Chevrolet" nome ="Corsa classic" motor/>
    < Carro modelo="Ford" nome ="Fusion"/>
    < Carro modelo="Ferrari" nome ="Ferrarri 2.0"/>
    < Carro modelo="Fiat" nome ="Palio"/>
  </div>
  );
  }

/*
aula 1-
function Welcome(props){
  return <h1>Olá, {props.name}</h1>
}

export default function Welcome(props) {
  return (
    <h1>Hello world,{props.name} </h1> )
  }

  function App(props){
return (
  <div>
  < Welcome name="Heloisa"/>
  < Welcome name="Maria"/>
  < Welcome name="Jackson"/>
  < Welcome name="Julia"/>
</div>
);
}*/
export default App;