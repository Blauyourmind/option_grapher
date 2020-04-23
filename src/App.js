import React from 'react';
import './styles/style.css'
import Option from './components/Option'
import Email from './components/Email'
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
            tooltips:{mode: 'nearest'},
            scales: {
              yAxes: [{
                  gridLines: {
                      zeroLineWidth: 3,
                      zeroLineColor: "#2C292E",
                  },
                  ticks:{
                    suggestedMin: 10,
                    suggestedMax: 10
                  }
              }]
           }
        }
    }
  }

  
  handleAddOption = (e)=>{
    e.preventDefault()

    // get current options in state
    let updated_options = this.state.options.map((option)=>{
      return option
    })

    let id = Date.now() // generate random key value by gettign current date and time
    // push a new option to current option list
    updated_options.push(<Option id={id} key={id} handleUpdateOption={this.handleUpdateOption} handleRemoveOption={this.handleRemoveOption}/>)

    // get the new id and add it to the current options data dictionary
    let updated_options_data = this.state.optionsData
    updated_options_data.push({id:id})
    
    // set state with updated option components and option data
    this.setState({options: updated_options, optionsData:updated_options_data})
  }

  handleUpdateOption = (id, new_data)=>{
    // find given option id in current data and update its value with new option data from user
    const updatedOptions = this.state.optionsData.map((option) =>{
      if (option.id === id){
          return new_data
      }else{
          return option
      }
    });
    // set new state with updated option data
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
    await fetch("https://cors-anywhere.herokuapp.com/https://6rswc176r1.execute-api.us-east-1.amazonaws.com/default/generateOptionPayoff",headers).then((res)=>{
        return res.json()
    }).then((data)=>{
      
      // get response data vector for option strategy and set it to teh chartjs data field 
      this.setState({chart_data: {
        labels: Array.from(Array(400).keys()),
        datasets: [{
          label: "Option Strategy Payoff Chart",
          backgroundColor: 'rgba(255, 255, 255,1.0)',
          borderColor: 'rgb(0, 135, 34)',
          fill: 'rgb(0, 135, 34)',
          pointBackgroundColor: 'rgb(0, 135, 34)',
          data: data['res'], // set data
        }]
     }})

    }).catch((err)=>{console.log(err)})
}


handleRemoveOption = (id)=>{
  // remove option data
  const updatedOptionsData = this.state.optionsData.filter((option) =>{
    if (option.id !== id){
        return option
    }
  });

  // remove option from display list
  const updatedOptions = this.state.options.filter((option) =>{
    if (option.props.id !== id){
        return option
    }
  });

  this.setState({optionsData: updatedOptionsData, options: updatedOptions})
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

          <div id='chart-div'>
            <div id="chart">
              <Line data={this.state.chart_data} width={900} height={550}options={this.state.chart_options}/>
            </div>
          </div>

          <Email/>

      </div>
    );

  }

  
}

export default App;

