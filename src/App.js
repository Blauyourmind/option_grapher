import React from 'react';
import './styles/style.css'
import Option from './components/Option'
import {Line} from 'react-chartjs-2';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        options: [],
        optionsData:[],
        payoff: [],
        chart_data: {
          labels: Array.from(Array(400).keys()),
          datasets: [{
          label: "Option Strategy Payoff Chart",
          backgroundColor: 'rgba(255, 255, 255,1.0)',
          borderColor: 'rgb(0, 135, 34)',
          pointBackgroundColor: 'rgb(0, 135, 34)',
          data: [],
          }]
       },
        chart_options:{
            maintainAspectRatio: false,
            responsive:false,
            scales: {
              yAxes: [{
                  gridLines: {
                      zeroLineWidth: 3,
                      zeroLineColor: "#2C292E",
                  },
                  
          
              }]
          },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(0, 135, 34)',
                }
            },
            tooltips:{
                mode: 'nearest'
            },
            
        }

    }

  }

  
  // ticks:{
  //   min:-400,
  //   max: 400
  // }

  handleAddOption = (e)=>{
    e.preventDefault()

    let updated_options = this.state.options.map((option)=>{
      return option
    })
    let id = Date.now()
    updated_options.push(<Option id={id} key={id} handleUpdateOption={this.handleUpdateOption}/>)


    let updated_options_data = this.state.optionsData
    updated_options_data.push({id:id})
    
    console.log(updated_options_data)
    this.setState({options: updated_options, optionsData:updated_options_data})
  }

  handleUpdateOption = (id, new_data)=>{
    
    const updatedOptions = this.state.optionsData.map((option) =>{
      if (option.id === id){
          return new_data
      }else{
          return option
      }
    });
    
    this.setState({optionsData: updatedOptions})
  }

  handleGenChart = (e)=>{
    e.preventDefault()
    this.fetchPayoff()
  }


  async fetchPayoff(){
   
    let data = {
      options: this.state.optionsData
  }

    let headers = {
        method: 'POST',
        headers:{
            "Content-type": "application/json",
            "x-powered-by": "CORS Anywhere"
            

        },
        body: JSON.stringify(data)
    }
    //"x-powered-by": "CORS Anywhere",
  console.log(headers.body)

  //https://6rswc176r1.execute-api.us-east-1.amazonaws.com/default/generateOptionPayoff
  //https://cors-anywhere.herokuapp.com/http://ec2-3-91-62-146.compute-1.amazonaws.com/~michaelblau/Options_Grapher/options.php
    await fetch("https://cors-anywhere.herokuapp.com/https://6rswc176r1.execute-api.us-east-1.amazonaws.com/default/generateOptionPayoff",headers).then((res)=>{
        return res.json()
    }).then((data)=>{
      console.log(data)

      this.setState({chart_data: {
        labels: Array.from(Array(400).keys()),
        datasets: [{
          label: "Option Strategy Payoff Chart",
          backgroundColor: 'rgba(255, 255, 255,1.0)',
          borderColor: 'rgb(0, 135, 34)',
          fill: 'rgb(0, 135, 34)',
          pointBackgroundColor: 'rgb(0, 135, 34)',
          data: data['res'],
        }]
     }})

    }).catch((err)=>{console.log(err)})
}


  


  render(){
    return (
      <div>
          <h1>Option Payoff Grapher</h1>
          <div className='options'>
              <button id='add_option' onClick={this.handleAddOption}>Add Option</button>
              <div id='options_display'>
                  {this.state.options}
              </div>
          </div>
          
          <button id='gen_chart' onClick={this.handleGenChart}>Generate Chart</button>

          <div className='chart-div'>
            <div>
              <Line data={this.state.chart_data} width={900} height={550}options={this.state.chart_options}/>
            </div>
          </div>

      </div>
    );

  }

  
}

export default App;

