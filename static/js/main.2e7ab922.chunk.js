(this.webpackJsonpoption_grapher=this.webpackJsonpoption_grapher||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),i=a.n(o),l=(a(56),a(29)),s=a.n(l),c=a(48),p=a(15),h=a(16),u=a(18),d=a(17),m=a(19),g=(a(31),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleChangeType=function(e){a.setState({style:e.target.value})},a.handleChangeStrategy=function(e){"buy"===e.target.value?e.target.parentElement.parentElement.parentElement.style.border="solid 2px green":e.target.parentElement.parentElement.parentElement.style.border="solid 2px red",a.setState({strategy:e.target.value})},a.handleChangeStrike=function(e){a.setState({strike:e.target.value})},a.handleChangePrice=function(e){a.setState({price:e.target.value})},a.state={id:a.props.id,style:"",strategy:"",strike:0,price:0},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(){this.props.handleUpdateOption(this.state.id,this.state)}},{key:"render",value:function(){return r.a.createElement("form",{className:"option_info"},r.a.createElement("div",{className:"option_type"},r.a.createElement("label",null,"Put",r.a.createElement("input",{type:"radio",name:"type",value:"put",onClick:this.handleChangeType})),r.a.createElement("label",null,"Call",r.a.createElement("input",{type:"radio",name:"type",value:"call",onClick:this.handleChangeType}))),r.a.createElement("div",{className:"option_strategy"},r.a.createElement("label",null,"Sell",r.a.createElement("input",{type:"radio",name:"strategy",value:"sell",onClick:this.handleChangeStrategy})),r.a.createElement("label",null,"Buy",r.a.createElement("input",{type:"radio",name:"strategy",value:"buy",onClick:this.handleChangeStrategy}))),r.a.createElement("label",null,"Strike: ",r.a.createElement("input",{step:"any",type:"number",name:"strike",required:!0,onChange:this.handleChangeStrike})),r.a.createElement("label",null,"Price: ",r.a.createElement("input",{step:"any",type:"number",name:"price",onChange:this.handleChangePrice})))}}]),t}(r.a.Component)),y=a(49),f=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleAddOption=function(e){e.preventDefault();var t=a.state.options.map((function(e){return e})),n=Date.now();t.push(r.a.createElement(g,{id:n,key:n,handleUpdateOption:a.handleUpdateOption}));var o=a.state.optionsData;o.push({id:n}),console.log(o),a.setState({options:t,optionsData:o})},a.handleUpdateOption=function(e,t){var n=a.state.optionsData.map((function(a){return a.id===e?t:a}));a.setState({optionsData:n})},a.handleGenChart=function(e){e.preventDefault(),a.fetchPayoff()},a.state={options:[],optionsData:[],payoff:[],chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:[]}]},chart_options:{maintainAspectRatio:!1,responsive:!1,scales:{yAxes:[{gridLines:{zeroLineWidth:3,zeroLineColor:"#2C292E"},ticks:{min:-150,max:150}}]},legend:{display:!0,labels:{fontColor:"rgb(0, 135, 34)"}},tooltips:{mode:"nearest"}}},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"fetchPayoff",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,a,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={options:this.state.optionsData},a={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("http://ec2-3-91-62-146.compute-1.amazonaws.com/~michaelblau/Options_Grapher/options.php",a).then((function(e){return e.json()})).then((function(e){console.log(e.res),n.setState({chart_data:{labels:Array.from(Array(400).keys()),datasets:[{label:"Option Strategy Payoff Chart",backgroundColor:"rgba(255, 255, 255,1.0)",borderColor:"rgb(0, 135, 34)",fill:"rgb(0, 135, 34)",pointBackgroundColor:"rgb(0, 135, 34)",data:e.res}]}})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"options"},r.a.createElement("button",{id:"add_option",onClick:this.handleAddOption},"Add Option"),r.a.createElement("div",{id:"options_display"},this.state.options)),r.a.createElement("button",{id:"gen_chart",onClick:this.handleGenChart},"Generate Chart"),r.a.createElement("div",{className:"chart-div"},r.a.createElement("div",null,r.a.createElement(y.a,{data:this.state.chart_data,width:900,height:550,options:this.state.chart_options}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},31:function(e,t,a){},51:function(e,t,a){e.exports=a(153)},56:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.2e7ab922.chunk.js.map