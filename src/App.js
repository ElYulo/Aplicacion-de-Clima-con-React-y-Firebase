import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import myImage from './k.png';
import { getAuth, signInAnonymously } from "firebase/auth";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import { async } from '@firebase/util';
import Clima from './Clima';

function App() {

  const login = () => {
    signInAnonymously(getAuth()).then(usuario => console.log(usuario));
  }

  const activarMensajes = async ()=>{
    const token = await getToken(messaging, {
      vapidKey:"BOnVLsnnKBvwsimwOgWOwx7wDUdhZf_ED_WjPgal_VjA90gh5_ZmWWhBcTQp31f8er_pbIpkS3_C2c-qfaHT0DQ"
    }).catch(error => console.log("error al generar el token paps"));

    if(token) console.log("Este es tu token: "+ token);
    if(!token) console.log("No tienes token paps")
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })

  }, []);

  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(2);
  }
  const lat1 = (Math.random() * 180) - 90;
  const lon1 = (Math.random() * 360) - 180;
  const lat2 = (Math.random() * 180) - 90;
  const lon2 = (Math.random() * 360) - 180;
  const lat3 = (Math.random() * 180) - 90;
  const lon3 = (Math.random() * 360) - 180;
  const lat4 = (Math.random() * 180) - 90;
  const lon4 = (Math.random() * 360) - 180;
  const myId= '2cedf2c037d4f2e101e2d32bea977137';
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.4631&lon=-114.7762&appid='+myId; //San Luis Rio Colorado
  const mexicaliURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat1+'&lon=-'+lon1+'&appid='+myId;
  const ensenadaURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat2+'&lon='+lon2+'&appid='+myId;
  const rosaritoURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat3+'&lon='+lon3+'&appid='+myId;
  const culiacanURL = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat4+'&lon=-'+lon4+'&appid='+myId;

  const [clima, setClima] = useState({});
  const [mexicali, setMexicali] = useState({});
  const [ensenada, setEnsenada] = useState({});
  const [rosarito, setRosarito] = useState({});
  const [culiacan, setCuliacan] = useState({});


  const fetchData = async (url, setter) => {
    const response = await fetch(url);
    const data = await response.json();
    setter(data);
  };

  useEffect(() => {
    fetchData(url, setClima);
    fetchData(mexicaliURL, setMexicali);
    fetchData(ensenadaURL, setEnsenada);
    fetchData(rosaritoURL, setRosarito);
    fetchData(culiacanURL, setCuliacan);
  }, []);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      window.location.reload();
    }, 3000); // 10 segundos

    return () => clearInterval(intervalId); // limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <>
    <div>
      <h2>Hola Visitante, si quiere recibir notificaciones primero haga login y despues genere token</h2>
      <ToastContainer/>
      <button onClick={login
      }>Logearse</button>
      <button onClick={
        activarMensajes
      }>Generar token</button>
    </div>
      <div>
      {!clima || !mexicali || !ensenada || !rosarito || !culiacan ? 'cargando...' :
          <div>
            <Clima
              ciudad={clima.name}
              pais={clima.sys && clima.sys.country}
              wind={clima.wind && clima.wind.speed}
              temp={kelvinToCelsius(clima.main && clima.main.temp)}

              
              ciudad1={mexicali.name}
              pais1={mexicali.sys && mexicali.sys.country}
              wind1={mexicali.wind && mexicali.wind.speed}
              temp1={kelvinToCelsius(mexicali.main && mexicali.main.temp)}

              ciudad2={ensenada.name}
              pais2={ensenada.sys && ensenada.sys.country}
              wind2={ensenada.wind && ensenada.wind.speed}
              temp2={kelvinToCelsius(ensenada.main && ensenada.main.temp)}

              ciudad3={rosarito.name}
              pais3={rosarito.sys && rosarito.sys.country}
              wind3={rosarito.wind && rosarito.wind.speed}
              temp3={kelvinToCelsius(rosarito.main && rosarito.main.temp)}

              ciudad4={culiacan.name}
              pais4={culiacan.sys && culiacan.sys.country}
              wind4={culiacan.wind && culiacan.wind.speed}
              temp4={kelvinToCelsius(culiacan.main && culiacan.main.temp)}

            
            />
          </div>
        }
      </div>
    </>
  );

}

export default App;
/*

{data?.map((user) => (
                <li key={user.id}>{user.name}</li>
                
                ))}

<div>
      <h1>Hola mundo</h1>
      <ToastContainer/>
      <button onClick={login
      }>Logearse</button>
      <button onClick={
        activarMensajes
      }>Generar token</button>
    </div>

return (
    <div className="App">
      <header className="App-header">
        <img src={myImage} className="App-logo" alt="logo" />
        <h4>Hello world</h4>
        <p>
          Oh no you didn't start the code
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/

/*
    const login = () => {
      signInAnonymously(getAuth()).then(usuario => console.log(usuario));
    }
  
    const activarMensajes = async ()=>{
      const token = await getToken(messaging, {
        vapidKey:"BOnVLsnnKBvwsimwOgWOwx7wDUdhZf_ED_WjPgal_VjA90gh5_ZmWWhBcTQp31f8er_pbIpkS3_C2c-qfaHT0DQ"
      }).catch(error => console.log("error al generar el token paps"));
  
      if(token) console.log("Este es tu token: "+ token);
      if(!token) console.log("No tienes token paps")
    }
  
    React.useEffect(()=>{
      onMessage(messaging, message=>{
        console.log("Tu mensaje: ", message);
        toast(message.notification.title);
      })
  
    }, []);
  */