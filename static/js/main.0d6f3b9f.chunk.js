(this.webpackJsonpoption_grapher=this.webpackJsonpoption_grapher||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),s=a.n(o),l=(a(51),a(24)),i=a.n(l),p=a(43);a(26);class h extends r.a.Component{constructor(e){super(e),this.handleChangeType=e=>{this.setState({style:e.target.value})},this.handleChangeStrategy=e=>{"buy"===e.target.value?e.target.parentElement.parentElement.parentElement.style.border="solid 2px green":e.target.parentElement.parentElement.parentElement.style.border="solid 2px red",this.setState({strategy:e.target.value})},this.handleChangeStrike=e=>{this.setState({strike:e.target.value})},this.handleChangePrice=e=>{this.setState({price:e.target.value})},this.state={id:this.props.id,style:"",strategy:"",strike:"0",price:"0"}}componentDidUpdate(){this.props.handleUpdateOption(this.state.id,this.state)}render(){return r.a.createElement("form",{className:"option_info"},r.a.createElement("div",{className:"option_type"},r.a.createElement("label",null,"Put",r.a.createElement("input",{type:"radio",name:"type",value:"put",onClick:this.handleChangeType})),r.a.createElement("label",null,"Call",r.a.createElement("input",{type:"radio",name:"type",value:"call",onClick:this.handleChangeType})),r.a.createElement("label",null,"Stock",r.a.createElement("input",{type:"radio",name:"type",value:"stock",onClick:this.handleChangeType}))),r.a.createElement("div",{className:"option_strategy"},r.a.createElement("label",null,"Sell",r.a.createElement("input",{type:"radio",name:"strategy",value:"sell",onClick:this.handleChangeStrategy})),r.a.createElement("label",null,"Buy",r.a.createElement("input",{type:"radio",name:"strategy",value:"buy",onClick:this.handleChangeStrategy}))),r.a.createElement("label",null,"Strike: ",r.a.createElement("input",{step:"any",type:"number",name:"strike",onChange:this.handleChangeStrike})),r.a.createElement("label",null,"Price: ",r.a.createElement("input",{step:"any",type:"number",name:"price",onChange:this.handleChangePrice})))}}var c=h,d=a(44);class m extends r.a.Component{constructor(e){super(e),this.handleAddOption=e=>{e.preventDefault();let t=this.state.options.map(e=>e),a=Date.now();t.push(r.a.createElement(c,{id:a,key:a,handleUpdateOption:this.handleUpdateOption}));let n=this.state.optionsData;n.push({id:a}),console.log(n),this.setState({options:t,optionsData:n})},this.handleUpdateOption=(e,t)=>{const a=this.state.optionsData.map(a=>a.id===e?t:a);this.setState({optionsData:a})},this.handleGenChart=e=>{e.preventDefault(),this.fetchPayoff()},this.state={options:[],optionsData:[],payoff:[],chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:[]}]},chart_options:{maintainAspectRatio:!1,responsive:!1,scales:{yAxes:[{gridLines:{zeroLineWidth:3,zeroLineColor:"#2C292E"}}]},legend:{display:!0,labels:{fontColor:"rgb(0, 135, 34)"}},tooltips:{mode:"nearest"}}}}fetchPayoff(){var e=this;return Object(p.a)(i.a.mark((function t(){var a,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={options:e.state.optionsData},n={method:"POST",headers:{"Content-type":"application/json","x-powered-by":"CORS Anywhere"},body:JSON.stringify(a)},t.next=4,fetch("https://cors-anywhere.herokuapp.com/http://ec2-3-91-62-146.compute-1.amazonaws.com/~michaelblau/Options_Grapher/options.php",n).then(e=>e.json()).then(t=>{console.log(t.res),e.setState({chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",fill:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:t.res}]}})}).catch(e=>{console.log(e)});case 4:case"end":return t.stop()}}),t)})))()}render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"options"},r.a.createElement("button",{id:"add_option",onClick:this.handleAddOption},"Add Option"),r.a.createElement("div",{id:"options_display"},this.state.options)),r.a.createElement("button",{id:"gen_chart",onClick:this.handleGenChart},"Generate Chart"),r.a.createElement("div",{className:"chart-div"},r.a.createElement("div",null,r.a.createElement(d.a,{data:this.state.chart_data,width:900,height:550,options:this.state.chart_options}))))}}var u=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){},46:function(e,t,a){e.exports=a(148)},51:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.0d6f3b9f.chunk.js.map