
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
