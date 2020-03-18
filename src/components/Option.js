import React from 'react';
import '../styles/style.css'


class Option extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            style: '',
            strategy: '',
            strike: 0,
            price: 0
        }
    }
    handleChangeType=(e)=>{
        this.setState({style:e.target.value})
    }

    handleChangeStrategy=(e)=>{
        if(e.target.value === 'buy'){
            e.target.parentElement.parentElement.parentElement.style.border = "solid 2px green"
        }else{
            e.target.parentElement.parentElement.parentElement.style.border = "solid 2px red"
        }
        this.setState({strategy:e.target.value})
    }

    handleChangeStrike=(e)=>{
        this.setState({strike:e.target.value})
    }

    handleChangePrice=(e)=>{
        this.setState({price:e.target.value}) 
    }

    componentDidUpdate(){
        this.props.handleUpdateOption(this.state.id, this.state)
    }

    render(){
        return(
            <form className='option_info'>
                
                <div className='option_type'>
                    <label>Put<input type="radio" name="type" value="put" onClick={this.handleChangeType}/></label>
                    <label>Call<input type="radio" name="type" value="call" onClick={this.handleChangeType}/></label>
                </div>

                <div className='option_strategy'>
                        <label>Sell<input type="radio" name="strategy" value="sell" onClick={this.handleChangeStrategy}/></label>
                        <label>Buy<input type="radio" name="strategy" value="buy" onClick={this.handleChangeStrategy}/></label>
                </div>

                <label>Strike: <input step="any" type='number' name='strike' required onChange={this.handleChangeStrike}/></label>
                <label>Price: <input step="any" type='number' name='price'  onChange={this.handleChangePrice}/></label>
            </form>
        )
    }
}

export default Option;