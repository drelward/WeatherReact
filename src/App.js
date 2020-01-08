import React from 'react';
import './App.css';

import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY='81decd95b6bb2e0e4c02f93def7ba290';

class App extends React.Component{
  state={
    temperature:undefined,
    city:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
    country:undefined,
    message:false
  }

  getWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const apiCall=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data=await apiCall.json();
    console.log(data)
    if(data.cod==='404'){
      this.setState({
        temperature: undefined,
        city:undefined,
        humidity:undefined,
        description:undefined,
        country:undefined,
        error:false

      })
      return
    }
   

      this.setState({
        temperature: data.main.temp,
        city:data.name,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        country:data.sys.country,
        error:true
      })

}
  render(){
    return (
      <div className="mainDiv">
        <Titles/>
        <div className='weather'>
          <div className='forms'>
            <Form getWeather={this.getWeather}/>
          </div>
           <Weather 
              display={this.state.temperature ? "" : "nonvisible"}
              temperature={this.state.temperature}
              city={this.state.city}
                humidity={this.state.humidity}
                description={this.state.description}
                country={this.state.country}
                error={this.state.error}
            />
        </div>
      </div>
    )
  }
};

export default App;