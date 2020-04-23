import React from 'react';
import ReactDOM from "react-dom"
import '../styles/style.css'


class Option extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            style: this.props.style,
            strategy: this.props.strategy,
            strike: this.props.strike,
            price: this.props.price
        }

    }
    componentDidMount(){
        // set component border color 
        this.setCompColor(this.state.strategy)
    }

    // set component border color 
    setCompColor = (strategy)=>{
        let comp = ReactDOM.findDOMNode(this)
        let this_form = comp.getElementsByClassName('option_info')[0]
        if(strategy === 'sell'){
            this_form.style.border = "solid 2px red"
        }else{
            this_form.style.border = "solid 2px green"
        }
    }

    handleChangeType=(e)=>{
        this.setState({style:e.target.value}) // save option type in state
    }

    handleChangeStrategy=(e)=>{
        this.setCompColor(e.target.value) // set component border color 
        this.setState({strategy:e.target.value}) // save option strategy in state
    }

    handleChangeStrike=(e)=>{
        this.setState({strike: Math.trunc(parseInt(e.target.value))}) // save strike in state
    }

    handleChangePrice=(e)=>{
        this.setState({price: Math.trunc(parseInt(e.target.value))}) // save price in state
    }

    handleRemoveOption=(e)=>{
        e.preventDefault()
        this.props.handleRemoveOption(this.state.id) // remove option form current option list
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
                        <label>Put<input type="radio" checked={this.state.style === "put"}  value="put" onChange={this.handleChangeType}/></label>
                        <label>Call<input type="radio" checked={this.state.style === "call"}  value="call" onChange={this.handleChangeType}/></label>
                        <label>Stock<input type="radio" checked={this.state.style === "stock"}  value="stock" onChange={this.handleChangeType}/></label>
                    </div>

                    <div className='option_strategy'>
                            <label>Sell<input type="radio" checked={this.state.strategy === "sell"} value="sell" onChange={this.handleChangeStrategy}/></label>
                            <label>Buy<input type="radio"   checked={this.state.strategy === "buy"} value="buy" onChange={this.handleChangeStrategy}/></label>
                    </div>
                    <button className='delete' onClick={this.handleRemoveOption}>Delete</button>
                </form>
            )
        }else{
            // display full option form 
            return (
                <form className='option_info'>
                    
                    <div className='option_type'>
                        <label>Put<input type="radio" checked={this.state.style === 'put'}  value="put" onChange={this.handleChangeType}/></label>
                        <label>Call<input type="radio" checked={this.state.style === 'call'}  value="call" onChange={this.handleChangeType}/></label>
                        <label>Stock<input type="radio" checked={this.state.style === 'stock'}  value="stock" onChange={this.handleChangeType}/></label>
                    </div>

                    <div className='option_strategy'>
                            <label>Sell<input type="radio" checked={this.state.strategy === "sell"} value="sell" onChange={this.handleChangeStrategy}/></label>
                            <label>Buy<input type="radio"   checked={this.state.strategy === "buy"} value="buy" onChange={this.handleChangeStrategy}/></label>
                    </div>

                    <label>Strike: <input step="1" type='number' name='strike' value={this.state.strike} onChange={this.handleChangeStrike}/></label>
                    <label>Price: <input step="1" type='number' name='price'  value={this.state.price} onChange={this.handleChangePrice}/></label>
                    <button className='delete' onClick={this.handleRemoveOption}>Delete</button>
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

// create default props to fill state if no props are passed into the Option Component
Option.defaultProps = {
    style: 'put',
    strategy: 'sell',
    strike: '0',
    price: '0'
}

export default Option;