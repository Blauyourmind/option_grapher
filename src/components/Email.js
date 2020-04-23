import React from 'react';
import html2canvas from 'html2canvas';
import emailjs from 'emailjs-com';
import '../styles/style.css'


class Email extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:''
        }
    }
   
    handleChangeEmail=(e)=>{
        e.preventDefault()
        this.setState({email:e.target.value})
    }

    handleSubmitEmail=(e)=>{
        e.preventDefault()
        // get email input and FILTER
        let to_email = this.state.email
        const regex = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*");
        // match email input to regex 
        if (regex.test(to_email)){
            window.scrollTo(0,0); // scroll to top of page, important to capture entire chart image

            html2canvas(document.getElementById('chart')).then(function(canvas) {
                // convert canvas image to base64 encoded string
                let base64 = canvas.toDataURL();
                // send email
                emailjs.send('blauyourmind_gmail_com', 'option_app', {
                    content: base64,
                    to_email: to_email
                },'user_aCtCGZu6T6tz1IvF8dFpQ').then(()=>{
                    alert('Email Sent!')
                }).catch(()=>{alert('Error Sending Email!')})
            }).then(()=>{this.setState({email:''})})
        }else{
            alert('Invalid Email Address')
            this.setState({email:''})
        }
    }

    render(){
        return(
            <div className='email-form'>
                <h2>Share Your Strategy With A Friend</h2>
                <form>
                    <input id='email-input' type='email' value={this.state.email} onChange={this.handleChangeEmail} required/>
                    <button onClick={this.handleSubmitEmail}>Send Email</button>
                </form>
            </div>
        )
    }
}

export default Email;