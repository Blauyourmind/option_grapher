(this.webpackJsonpoption_grapher=this.webpackJsonpoption_grapher||[]).push([[0],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(15),o=a.n(l),i=(a(53),a(26)),r=a.n(i),h=a(43);a(16);class c extends s.a.Component{constructor(e){super(e),this.setCompColor=e=>{let t=o.a.findDOMNode(this).getElementsByClassName("option_info")[0];t.style.border="sell"===e?"solid 2px red":"solid 2px green"},this.handleChangeType=e=>{this.setState({style:e.target.value})},this.handleChangeStrategy=e=>{this.setCompColor(e.target.value),this.setState({strategy:e.target.value})},this.handleChangeStrike=e=>{this.setState({strike:Math.trunc(parseInt(e.target.value))})},this.handleChangePrice=e=>{this.setState({price:Math.trunc(parseInt(e.target.value))})},this.handleRemoveOption=e=>{e.preventDefault(),this.props.handleRemoveOption(this.state.id)},this.state={id:this.props.id,style:this.props.style,strategy:this.props.strategy,strike:this.props.strike,price:this.props.price}}componentDidMount(){this.setCompColor(this.state.strategy)}componentDidUpdate(){this.props.handleUpdateOption(this.state.id,this.state)}renderStockOrOption(){return"stock"===this.state.style?s.a.createElement("form",{className:"option_info"},s.a.createElement("div",{className:"option_type"},s.a.createElement("label",null,"Put",s.a.createElement("input",{type:"radio",checked:"put"===this.state.style,value:"put",onChange:this.handleChangeType})),s.a.createElement("label",null,"Call",s.a.createElement("input",{type:"radio",checked:"call"===this.state.style,value:"call",onChange:this.handleChangeType})),s.a.createElement("label",null,"Stock",s.a.createElement("input",{type:"radio",checked:"stock"===this.state.style,value:"stock",onChange:this.handleChangeType}))),s.a.createElement("div",{className:"option_strategy"},s.a.createElement("label",null,"Sell",s.a.createElement("input",{type:"radio",checked:"sell"===this.state.strategy,value:"sell",onChange:this.handleChangeStrategy})),s.a.createElement("label",null,"Buy",s.a.createElement("input",{type:"radio",checked:"buy"===this.state.strategy,value:"buy",onChange:this.handleChangeStrategy}))),s.a.createElement("button",{className:"delete",onClick:this.handleRemoveOption},"Delete")):s.a.createElement("form",{className:"option_info"},s.a.createElement("div",{className:"option_type"},s.a.createElement("label",null,"Put",s.a.createElement("input",{type:"radio",checked:"put"===this.state.style,value:"put",onChange:this.handleChangeType})),s.a.createElement("label",null,"Call",s.a.createElement("input",{type:"radio",checked:"call"===this.state.style,value:"call",onChange:this.handleChangeType})),s.a.createElement("label",null,"Stock",s.a.createElement("input",{type:"radio",checked:"stock"===this.state.style,value:"stock",onChange:this.handleChangeType}))),s.a.createElement("div",{className:"option_strategy"},s.a.createElement("label",null,"Sell",s.a.createElement("input",{type:"radio",checked:"sell"===this.state.strategy,value:"sell",onChange:this.handleChangeStrategy})),s.a.createElement("label",null,"Buy",s.a.createElement("input",{type:"radio",checked:"buy"===this.state.strategy,value:"buy",onChange:this.handleChangeStrategy}))),s.a.createElement("label",null,"Strike: ",s.a.createElement("input",{step:"1",type:"number",name:"strike",value:this.state.strike,onChange:this.handleChangeStrike})),s.a.createElement("label",null,"Price: ",s.a.createElement("input",{step:"1",type:"number",name:"price",value:this.state.price,onChange:this.handleChangePrice})),s.a.createElement("button",{className:"delete",onClick:this.handleRemoveOption},"Delete"))}render(){return s.a.createElement("div",null,this.renderStockOrOption())}}c.defaultProps={style:"put",strategy:"sell",strike:"0",price:"0"};var p=c,d=a(44),u=a.n(d),m=a(45),g=a.n(m);class y extends s.a.Component{constructor(e){super(e),this.handleChangeEmail=e=>{e.preventDefault(),this.setState({email:e.target.value})},this.handleSubmitEmail=e=>{e.preventDefault();let t=this.state.email;RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*").test(t)?(window.scrollTo(0,0),u()(document.getElementById("chart")).then((function(e){let a=e.toDataURL();g.a.send("blauyourmind_gmail_com","option_app",{content:a,to_email:t},"user_aCtCGZu6T6tz1IvF8dFpQ").then(()=>{alert("Email Sent!")}).catch(()=>{alert("Error Sending Email!")})})).then(()=>{this.setState({email:""})})):(alert("Invalid Email Address"),this.setState({email:""}))},this.state={email:""}}render(){return s.a.createElement("div",{className:"email-form"},s.a.createElement("h2",null,"Share Your Strategy With A Friend"),s.a.createElement("form",null,s.a.createElement("input",{type:"email",value:this.state.email,onChange:this.handleChangeEmail,required:!0}),s.a.createElement("button",{onClick:this.handleSubmitEmail},"Send Email")))}}var C=y,E=a(46);class v extends s.a.Component{constructor(e){super(e),this.handleAddOption=e=>{e.preventDefault();let t=this.state.options.map(e=>e),a=Date.now();t.push(s.a.createElement(p,{id:a,key:a,handleUpdateOption:this.handleUpdateOption,handleRemoveOption:this.handleRemoveOption}));let n=this.state.optionsData;n.push({id:a}),console.log(n),this.setState({options:t,optionsData:n})},this.handleUpdateOption=(e,t)=>{const a=this.state.optionsData.map(a=>a.id===e?t:a);this.setState({optionsData:a})},this.handleRemoveOption=e=>{const t=this.state.optionsData.filter(t=>{if(t.id!==e)return t});this.setState({optionsData:t})},this.handleGenChart=e=>{e.preventDefault(),this.fetchPayoff()},this.handleRemoveOption=e=>{const t=this.state.optionsData.filter(t=>{if(t.id!==e)return t}),a=this.state.options.filter(t=>{if(t.props.id!==e)return t});this.setState({optionsData:t,options:a})},this.state={options:[],optionsData:[],payoff:[],chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:[]}]},chart_options:{maintainAspectRatio:!1,responsive:!1,scales:{yAxes:[{gridLines:{zeroLineWidth:3,zeroLineColor:"#2C292E"}}]},legend:{display:!0,labels:{fontColor:"rgb(0, 135, 34)"}},tooltips:{mode:"nearest"}}}}fetchPayoff(){var e=this;return Object(h.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={options:e.state.optionsData},n={method:"POST",headers:{"Content-type":"application/json","x-powered-by":"CORS Anywhere"},body:JSON.stringify(a)},console.log(n.body),t.next=5,fetch("https://cors-anywhere.herokuapp.com/https://6rswc176r1.execute-api.us-east-1.amazonaws.com/default/generateOptionPayoff",n).then(e=>e.json()).then(t=>{console.log(t),e.setState({chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",fill:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:t.res}]}})}).catch(e=>{console.log(e)});case 5:case"end":return t.stop()}}),t)})))()}render(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Option Payoff Grapher"),s.a.createElement("div",{className:"options"},s.a.createElement("button",{id:"add_option",onClick:this.handleAddOption},"Add Option"),s.a.createElement("div",{id:"options_display"},this.state.options)),s.a.createElement("button",{id:"gen_chart",onClick:this.handleGenChart},"Generate Chart"),s.a.createElement("div",{id:"chart-div"},s.a.createElement("div",{id:"chart"},s.a.createElement(E.a,{data:this.state.chart_data,width:900,height:550,options:this.state.chart_options}))),s.a.createElement(C,null))}}var f=v;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},16:function(e,t,a){},48:function(e,t,a){e.exports=a(152)},53:function(e,t,a){}},[[48,1,2]]]);
//# sourceMappingURL=main.1433204f.chunk.js.map