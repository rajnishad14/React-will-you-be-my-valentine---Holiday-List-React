
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ];
    this.list2=this.FilterElement();
    this.liList=this.wrap();
  }

  wrap(){
      console.log(this.list2);
    let c=0;
    const wrapcity=this.list2.map((city)=>{
        let keyloc='location';
        return(
            <li key={keyloc+(c++)}>{city}</li>
        );
    });
    return(
        <ol>{wrapcity}</ol>
    )
  }
 
  FilterElement() {
    let indCity=[];
    this.cityList.forEach((city)=>{
        if(city.country=='India' && !indCity.includes(city.name)){
            indCity.push(city.name);
        }
            
    });
    
    return indCity;
  }

  render() {
    return (
      <div id="main">
        {this.liList}
      </div>
    )
  }
}


export default App;
