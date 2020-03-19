import React from 'react';
import '../styles/style.css'


class Option extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            style: '',
            strategy: '',
            strike: '0',
            price: '0'
        }
    }
    handleChangeType=(e)=>{
        // save option type in state
        this.setState({style:e.target.value})
    }

    handleChangeStrategy=(e)=>{
        // alter color of option visually based on buy or sell
        if(e.target.value === 'buy'){
            e.target.parentElement.parentElement.parentElement.style.border = "solid 2px green"
        }else{
            e.target.parentElement.parentElement.parentElement.style.border = "solid 2px red"
        }
        
        // save option strategy in state
        this.setState({strategy:e.target.value})
    }

    handleChangeStrike=(e)=>{
        // save strike in state
        this.setState({strike:e.target.value})
    }

    handleChangePrice=(e)=>{
        // save price in state
        this.setState({price:e.target.value}) 
    }

    componentDidUpdate(){
        // when this options state updates, resend current data up to main App.js component
        this.props.handleUpdateOption(this.state.id, this.state)
    }

    renderStockOrOption(){
        // if it is a stock, remove the strike and price form elements
        if (this.state.style === 'stock'){
            return (
                <form className='option_info'>
                    
                    <div className='option_type'>
                        <label>Put<input type="radio" name="type" value="put" onClick={this.handleChangeType}/></label>
                        <label>Call<input type="radio" name="type" value="call" onClick={this.handleChangeType}/></label>
                        <label>Stock<input type="radio" name="type" value="stock" onClick={this.handleChangeType}/></label>
                    </div>

                    <div className='option_strategy'>
                            <label>Sell<input type="radio" name="strategy" value="sell" onClick={this.handleChangeStrategy}/></label>
                            <label>Buy<input type="radio" name="strategy" value="buy" onClick={this.handleChangeStrategy}/></label>
                    </div>
                </form>
            )
        }else{
            // display full option form 
            return (
                <form className='option_info'>
                    
                    <div className='option_type'>
                        <label>Put<input type="radio" name="type" value="put" onClick={this.handleChangeType}/></label>
                        <label>Call<input type="radio" name="type" value="call" onClick={this.handleChangeType}/></label>
                        <label>Stock<input type="radio" name="type" value="stock" onClick={this.handleChangeType}/></label>
                    </div>

                    <div className='option_strategy'>
                            <label>Sell<input type="radio" name="strategy" value="sell" onClick={this.handleChangeStrategy}/></label>
                            <label>Buy<input type="radio" name="strategy" value="buy" onClick={this.handleChangeStrategy}/></label>
                    </div>

                    <label>Strike: <input step="any" type='number' name='strike' onChange={this.handleChangeStrike}/></label>
                    <label>Price: <input step="any" type='number' name='price'  onChange={this.handleChangePrice}/></label>
                </form>
            )
        }
    }

    render(){
        return(
            <div>
                {this.renderStockOrOption()}
            </div>
        )
    }
}

export default Option;