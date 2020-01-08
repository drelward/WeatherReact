import React from 'react';


class Weather extends React.Component{
  render(){
    let temp =Math.floor(+this.props.temperature - 273);
    let content;
    if(this.props.error!==false){
      content=(   <div className={this.props.display}>
       <p><span>Location:  </span>{this.props.city}, {this.props.country}</p>
        <p><span>Temperature:  </span>{temp}</p> 
        <p><span>Humidity:  </span>{this.props.humidity}</p>
        <p><span>Condition:  </span>{this.props.description}</p>
      </div>)
    }else{
      content=<p>Please enter correct values</p>
    }
    return content;
  }
};

export default Weather;