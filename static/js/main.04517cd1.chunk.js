(window.webpackJsonpforms200=window.webpackJsonpforms200||[]).push([[0],{101:function(e,t,a){e.exports=a(235)},106:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),l=a.n(c),o=(a(106),a(107),a(1)),s=a(2),i=a(4),m=a(3),u=a(6),h=a(5),d=(a(31),a(32),a(7)),p=a.n(d),f=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"login",value:function(e){return p.a.post("http://localhost:8080/login",e)}}]),e}()),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={user:[],name:"",password:"",email:"",usertype:"Admin",confirmed:"",num:""},a.submit=a.submit.bind(Object(u.a)(a)),a.changehandler1=a.changehandler1.bind(Object(u.a)(a)),a.fetchhttp=a.fetchhttp.bind(Object(u.a)(a)),a.posthttpjson=a.posthttpjson.bind(Object(u.a)(a)),a.posthttp=a.posthttp.bind(Object(u.a)(a)),a.login=a.login.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"login",value:function(e){var t=this;e.preventDefault();var a,n={email:this.state.email,password:this.state.password,usertype:this.state.usertype};f.login(n).then((function(e){var n=e.data;console.log("k="+n),(a=n).res?"Admin"==a.type?t.props.history.push("/admin"):"Non-Admin"==a.type&&t.props.history.push("/user"):alert("First Signup")}))}},{key:"submit",value:function(e){e.preventDefault();var t=this.state.user;t.push({name:this.state.name,password:this.state.password,email:this.state.email,usertype:this.state.usertype,num:this.state.num}),this.setState({user:t}),console.log(JSON.stringify(this.state.user)+"TEST"),this.posthttpjson(e)}},{key:"changehandler1",value:function(e){"name"===e.target.name?this.setState({name:e.target.value}):"email"===e.target.name?this.setState({email:e.target.value}):"password"===e.target.name?this.setState({password:e.target.value}):"usertype"===e.target.name?this.setState({usertype:e.target.value}):"num"===e.target.name&&this.setState({num:e.target.value})}},{key:"posthttp",value:function(e){console.log("posthttp"),alert("Your favorite flavor is: ");var t="http://127.0.0.1:8080/setuserapi?username="+this.state.name+"&password="+this.state.password+"&email="+this.state.email+"&userType="+this.state.userType+"&confirmed="+this.state.confirmed+"&mobile="+this.state.mobile;fetch(t,{method:"GET",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Vary:"Origin"}}).then((function(e){return console.log("success"),e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}},{key:"posthttpjson",value:function(e){console.log("posthttpjson");var t={method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*",Vary:"Origin".replace,Accept:"application/json"},body:JSON.stringify({name:this.state.name,email:this.state.email,password:this.state.password,usertype:this.state.usertype,confirmed:this.state.confirmed,num:this.state.num})};this.setState({name:""}),this.setState({password:""}),this.setState({email:""}),this.setState({confirmed:""}),this.setState({num:""}),alert("Confirm Email");fetch("http://127.0.0.1:8080/setuserapi2",t).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}},{key:"fetchhttp",value:function(e){console.log("fetchhttp");fetch("http://127.0.0.1:8080/companies/findById/1",{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"username",name:"name",className:"form-control",value:this.state.name,ref:"username",onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:this.state.password,ref:"password",onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:this.state.email,ref:"email",onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Type"),r.a.createElement("select",{name:"usertype",onChange:this.changehandler1,className:"form-control"},r.a.createElement("option",{value:"Admin"},"Admin"),r.a.createElement("option",{value:"Non-Admin"},"Normal"))," "),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Mobile"),r.a.createElement("input",{type:"Long",className:"form-control",name:"num",value:this.state.num,ref:"num",onChange:this.changehandler1})),r.a.createElement("button",{className:"btn btn-success",onClick:this.submit},"Sign Up")," ","  ",r.a.createElement("button",{className:"btn btn-success",onClick:this.login},"Login")))))}}]),t}(r.a.Component),v=a(22),b=a(100),E=a(11),y=a(23);function k(){var e=Object(v.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]);return k=function(){return e},e}function O(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(v.a)(["\nbackground : #0000ff;\ndisplay: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return j=function(){return e},e}function N(){var e=Object(v.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return N=function(){return e},e}function S(){var e=Object(v.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #15cdfc;\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\n  background: #0000ff;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  /* Third Nav */\n  /* justify-content: flex-start; */\n"]);return C=function(){return e},e}var x=y.a.nav(C()),w=Object(y.a)(E.c)(S()),A=Object(y.a)(b.a)(N()),D=y.a.div(j()),I=(y.a.nav(O()),Object(y.a)(E.c)(k()),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(A,null),r.a.createElement(D,null,r.a.createElement(w,{to:"/admin/file",activeStyle:!0},"Import Data"),r.a.createElement(w,{to:"/admin/addcompany",activeStyle:!0},"Add Company"),r.a.createElement(w,{to:"/admin/updatecompany",activeStyle:!0},"Update Company"),r.a.createElement(w,{to:"/admin/addstockexchange",activeStyle:!0},"Add StockExchange"),r.a.createElement(w,{to:"/admin/addsector",activeStyle:!0},"Add Sector"))))}),T=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"hi")}}]),t}(r.a.Component),F=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.b,{to:"/addcompany"},"add company"),r.a.createElement(E.b,{to:"/updatecompany"},"update company"))}}]),t}(r.a.Component),M=a(10),L=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"addstockexchange",value:function(e){return p.a.post("http://localhost:8080/addStockExchange",e)}},{key:"getStockExchange",value:function(){return p.a.get("http://localhost:8080/getStockExchange")}}]),e}()),R=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getCompanies",value:function(){return p.a.get("http://localhost:8080/displayallcompany")}},{key:"getcompanybyid",value:function(e){return p.a.get("http://localhost:8080/displayCompany/"+e)}},{key:"updatecompany",value:function(e,t){return p.a.put("http://localhost:8080/updatebasiccompany/"+e,t)}},{key:"addcompany",value:function(e){return p.a.post("http://localhost:8080/addcompany",e)}}]),e}()),P=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"addsector",value:function(e){return p.a.post("http://localhost:8080/addsector",e)}},{key:"getsector",value:function(){return p.a.get("http://localhost:8080/getsector")}}]),e}()),J=a(42),B=a.n(J),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).multiselectRef=r.a.createRef(),a.state=Object(M.a)({user:[],name:"",turnover:"",directors:"",sector:"tech",writeup:"",ipodate:"",no:"",price:"",time:"",stockexchange:[],stockexchanges:[],sectors:[]},"sector","tech"),a.changehandler1=a.changehandler1.bind(Object(u.a)(a)),a.savecompany=a.savecompany.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.getsector().then((function(t){e.setState({sectors:t.data})})),L.getStockExchange().then((function(t){e.setState({stockexchanges:t.data})}))}},{key:"changehandler1",value:function(e){"name"===e.target.name?this.setState({name:e.target.value}):"turnover"===e.target.name?this.setState({turnover:e.target.value}):"directors"===e.target.name?this.setState({directors:e.target.value}):"sector"===e.target.name?this.setState({sector:e.target.value}):"ipodate"===e.target.name?this.setState({ipodate:e.target.value}):"no"===e.target.name?this.setState({no:e.target.value}):"price"===e.target.name?this.setState({price:e.target.value}):"writeup"===e.target.name?this.setState({writeup:e.target.value}):"time"===e.target.name?this.setState({time:e.target.value}):"stockexchange"===e.target.name&&this.setState({stockexchange:e.target.value})}},{key:"savecompany",value:function(e){e.preventDefault();var t=this.multiselectRef.current.getSelectedItems();console.log(t);var a=[];t.map((function(e){return a.push(e.stockExchange)}));[].concat(this.state.stockexchange);var n={name:this.state.name,turnover:this.state.turnover,directors:this.state.directors,sector:this.state.sector,ipodate:this.state.ipodate,no:this.state.no,price:this.state.price,writeup:this.state.writeup,time:this.state.time,stockexchange:a};console.log(JSON.stringify(n)),R.addcompany(n),alert("saved")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Company Name"),r.a.createElement("input",{placeholder:"Company Name",name:"name",className:"form-control",value:this.state.name,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Sector"),r.a.createElement("select",{name:"sector",className:"form-control",onChange:this.changehandler1},this.state.sectors.map((function(e){return r.a.createElement("option",{value:e.name},e.name)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Stock Exchange"),r.a.createElement(B.a,{options:this.state.stockexchanges,displayValue:"stockExchange",ref:this.multiselectRef})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Directors"),r.a.createElement("input",{name:"directors",placeholder:"Separate by , ",className:"form-control",value:this.state.directors,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Time"),r.a.createElement("input",{placeholder:"HH:MM",name:"time",className:"form-control",value:this.state.time,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Writeup"),r.a.createElement("input",{placeholder:"writeup",name:"writeup",className:"form-control",value:this.state.writeup,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price"),r.a.createElement("input",{placeholder:"0",name:"price",className:"form-control",value:this.state.price,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"IPO Date"),r.a.createElement("input",{placeholder:"yyyy/mm/dd",name:"date",className:"form-control",value:this.state.date,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number of Shares"),r.a.createElement("input",{placeholder:"0",name:"no",className:"form-control",value:this.state.no,onChange:this.changehandler1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Turnover"),r.a.createElement("input",{placeholder:"0",name:"turnover",className:"form-control",value:this.state.turnover,onChange:this.changehandler1})),r.a.createElement("button",{className:"btn btn-success",onClick:this.savecompany},"Save")))))}}]),t}(r.a.Component),H=a(8),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={companies:[]},a.editCompany=a.editCompany.bind(Object(u.a)(a)),a.editipo=a.editipo.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"editCompany",value:function(e){this.props.history.push("updatepage/".concat(e))}},{key:"editipo",value:function(e){this.props.history.push("updateipo/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;R.getCompanies().then((function(t){e.setState({companies:t.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center"},"Company List"),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Directors"),r.a.createElement("th",null,"CEO"),r.a.createElement("th",null,"Turnover"),r.a.createElement("th",null,"Sector"),r.a.createElement("th",null,"Update"))),r.a.createElement("tbody",null,this.state.companies.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.directors),r.a.createElement("td",null,t.ceo),r.a.createElement("td",null,t.turnover),r.a.createElement("td",null,t.sector),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.editCompany(t.id)},className:"btn btn-info"},"Basic")," ",r.a.createElement("button",{onClick:function(){return e.editipo(t.id)},className:"btn btn-info"},"Ipo")))}))))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changenamehandler=function(e){a.setState({name:e.target.value})},a.changeceohandler=function(e){a.setState({ceo:e.target.value})},a.changedirectorshandler=function(e){a.setState({directors:e.target.value})},a.changeturnoverhandler=function(e){a.setState({turnover:e.target.value})},a.changesectorhandler=function(e){a.setState({sector:e.target.value})},a.savecompany=function(e){e.preventDefault();var t={name:a.state.name,turnover:a.state.turnover,directors:a.state.directors,ceo:a.state.ceo,sector:a.state.sector};console.log("company=>"+JSON.stringify(t)),R.updatecompany(a.state.id,t),alert("updated")},a.cancel=function(e){a.props.history.push("admin/updatecompany")},a.state={id:a.props.match.params.id,name:"",turnover:"",directors:"",ceo:"",sector:""},a.changenamehandler=a.changenamehandler.bind(Object(u.a)(a)),a.changeceohandler=a.changeceohandler.bind(Object(u.a)(a)),a.changedirectorshandler=a.changedirectorshandler.bind(Object(u.a)(a)),a.changeturnoverhandler=a.changeturnoverhandler.bind(Object(u.a)(a)),a.changesectorhandler=a.changesectorhandler.bind(Object(u.a)(a)),a.cancel=a.cancel.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.id),R.getcompanybyid(this.state.id).then((function(t){var a=t.data;console.log(a),e.setState({name:a.name,turnover:a.turnover,directors:a.directors,ceo:a.ceo,sector:a.sector})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Company Name"),r.a.createElement("input",{placeholder:"Company Name",name:"name",className:"form-control",value:this.state.name,onChange:this.changenamehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Directors"),r.a.createElement("input",{placeholder:"Directors",name:"directors",className:"form-control",value:this.state.directors,onChange:this.changedirectorshandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"CEO"),r.a.createElement("input",{placeholder:"CEO",name:"ceo",className:"form-control",value:this.state.ceo,onChange:this.changeceohandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Turnover"),r.a.createElement("input",{placeholder:"Turnover",name:"turnover",className:"form-control",value:this.state.turnover,onChange:this.changeturnoverhandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Sector"),r.a.createElement("input",{placeholder:"Sector",name:"sector",className:"form-control",value:this.state.sector,onChange:this.changesectorhandler})),r.a.createElement("button",{className:"btn btn-success",onClick:this.savecompany},"Save  ")," ")))))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={stockExchange:"",brief:"",address:"",remarks:""},a.stockexchangehandler=a.stockexchangehandler.bind(Object(u.a)(a)),a.briefhandler=a.briefhandler.bind(Object(u.a)(a)),a.addresshandler=a.addresshandler.bind(Object(u.a)(a)),a.remarkshandler=a.remarkshandler.bind(Object(u.a)(a)),a.savestockexchange=a.savestockexchange.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"stockexchangehandler",value:function(e){this.setState({stockExchange:e.target.value})}},{key:"briefhandler",value:function(e){this.setState({brief:e.target.value})}},{key:"addresshandler",value:function(e){this.setState({address:e.target.value})}},{key:"remarkshandler",value:function(e){this.setState({remarks:e.target.value})}},{key:"savestockexchange",value:function(e){e.preventDefault();var t={stockExchange:this.state.stockExchange,brief:this.state.brief,address:this.state.address,remarks:this.state.remarks};console.log(JSON.stringify(t)),L.addstockexchange(t),alert("saved")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Stock Exchange"),r.a.createElement("input",{placeholder:"Stock Exchange",name:"stockExchange",className:"form-control",value:this.state.stockExchange,onChange:this.stockexchangehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Brief"),r.a.createElement("input",{placeholder:"Brief",name:"brief",className:"form-control",value:this.state.brief,onChange:this.briefhandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("input",{placeholder:"Address",name:"address",className:"form-control",value:this.state.address,onChange:this.addresshandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Remarks"),r.a.createElement("input",{placeholder:"Remarks",name:"remarks",className:"form-control",value:this.state.remarks,onChange:this.remarkshandler})),r.a.createElement("button",{className:"btn btn-success",onClick:this.savestockexchange},"Save"))))))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name:"",brief:""},a.sectorhandler=a.sectorhandler.bind(Object(u.a)(a)),a.briefhandler=a.briefhandler.bind(Object(u.a)(a)),a.savesector=a.savesector.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"sectorhandler",value:function(e){this.setState({name:e.target.value})}},{key:"briefhandler",value:function(e){this.setState({brief:e.target.value})}},{key:"savesector",value:function(e){e.preventDefault();var t={name:this.state.name,brief:this.state.brief};P.addsector(t),console.log(JSON.stringify(t)),alert("saved")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Sector"),r.a.createElement("input",{placeholder:"Sector",name:"name",className:"form-control",value:this.state.name,onChange:this.sectorhandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Brief"),r.a.createElement("input",{placeholder:"Brief",name:"brief",className:"form-control",value:this.state.brief,onChange:this.briefhandler})),r.a.createElement("button",{className:"btn btn-success",onClick:this.savesector},"Save"))))))}}]),t}(n.Component),Y=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"updateipo",value:function(e){return p.a.post("http://localhost:8080/updateipo",e)}},{key:"getIpo",value:function(e){return p.a.get("http://localhost:8080/displayCompanyIpo/"+e)}},{key:"getipos",value:function(){return p.a.get("http://localhost:8080/displayUpcomingIpo")}},{key:"getprice",value:function(){return p.a.get("http://localhost:8080/price")}}]),e}()),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changenamehandler=function(e){a.setState({companyname:e.target.value})},a.changepricehandler=function(e){a.setState({price:e.target.value})},a.changenumberhandler=function(e){a.setState({number:e.target.value})},a.changedatehandler=function(e){a.setState({date:e.target.value})},a.changetimehandler=function(e){a.setState({time:e.target.value})},a.savecompany=function(e){e.preventDefault();var t=a.multiselectRef.current.getSelectedItems(),n=[];t.map((function(e){return n.push(e.stockExchange)}));var r={id:a.state.id,companyname:a.state.companyname,price:a.state.price,number:a.state.number,date:a.state.date,time:a.state.time,stockex:n};console.log("company=>"+JSON.stringify(r)),Y.updateipo(r),alert("updated")},a.cancel=function(e){a.props.history.push("updatecompany")},a.multiselectRef=r.a.createRef(),a.state={id:a.props.match.params.id,companyname:"",price:"",number:"",date:"",time:"",stockex:[],stockexchanges:[]},a.changenamehandler=a.changenamehandler.bind(Object(u.a)(a)),a.changepricehandler=a.changepricehandler.bind(Object(u.a)(a)),a.changenumberhandler=a.changenumberhandler.bind(Object(u.a)(a)),a.changedatehandler=a.changedatehandler.bind(Object(u.a)(a)),a.changetimehandler=a.changetimehandler.bind(Object(u.a)(a)),a.cancel=a.cancel.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Y.getIpo(this.state.id).then((function(t){var a=t.data;console.log(a);var n=[];a.stockex.map((function(e){return n.push({stockExchange:e})})),e.setState({companyname:a.companyname,price:a.price,number:a.number,date:a.date,time:a.time,stockex:n})})),L.getStockExchange().then((function(t){e.setState({stockexchanges:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Company Name"),r.a.createElement("input",{placeholder:"Company Name",name:"name",className:"form-control",value:this.state.companyname,onChange:this.changenamehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Price"),r.a.createElement("input",{placeholder:"0",name:"price",className:"form-control",value:this.state.price,onChange:this.changepricehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number"),r.a.createElement("input",{placeholder:"0",name:"number",className:"form-control",value:this.state.number,onChange:this.changenumberhandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{placeholder:"yyyy/mm/dd",name:"date",className:"form-control",value:this.state.date,onChange:this.changedatehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Time"),r.a.createElement("input",{placeholder:"HH:MM",name:"time",className:"form-control",value:this.state.time,onChange:this.changetimehandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Stock Exchange"),r.a.createElement(B.a,{options:this.state.stockexchanges,displayValue:"stockExchange",selectedValues:this.state.stockex,ref:this.multiselectRef})),r.a.createElement("button",{className:"btn btn-success",onClick:this.savecompany},"Save")," ")))))}}]),t}(n.Component),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null,r.a.createElement(A,null),r.a.createElement(D,null,r.a.createElement(w,{to:"/user/getipos",activeStyle:!0},"IPO"),r.a.createElement(w,{to:"/user/listcompanies",activeStyle:!0},"List Companies"),r.a.createElement(w,{to:"/user/Charts",activeStyle:!0},"Charts"))))},q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={ipos:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(1),Y.getipos().then((function(t){console.log(t.data),e.setState({ipos:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center"},"Company List"),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Company"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Number"))),r.a.createElement("tbody",null,this.state.ipos.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,e.companyname),r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.time),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.number))}))))))}}]),t}(n.Component),K=a(26),Q=a(99),X=function(e){var t=Object(n.useState)({}),a=Object(K.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(K.a)(o,2),i=(s[0],s[1],Object(n.useState)([])),m=Object(K.a)(i,2);m[0],m[1];return Object(n.useEffect)((function(){!function(){var t=[],a=[],n=[],r=[];p.a.get("http://localhost:8080/price").then((function(e){console.log(e);var t=!0,a=!1,c=void 0;try{for(var l,o=e.data[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var s=l.value;n.push(parseInt(s.currentPrice)),r.push(parseInt(s.time)),console.log(s)}}catch(i){a=!0,c=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw c}}})),p.a.get("http://localhost:8080/price").then((function(e){console.log(e);var r=!0,c=!1,o=void 0;try{for(var s,i=e.data[Symbol.iterator]();!(r=(s=i.next()).done);r=!0){var m=s.value;t.push(parseInt(m.currentPrice)),a.push(parseInt(m.time))}}catch(u){c=!0,o=u}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}l({labels:a,datasets:[{label:"stockprice",data:t,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4},{label:"stockprice c2",data:n,backgroundColor:["rgba(75, 192, 192, 0.6)"],borderWidth:4}]})})).catch((function(e){console.log(e)})),console.log(e)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Stockprice vs Date"),r.a.createElement("div",null,r.a.createElement(Q.a,{data:c,options:{responsive:!0,title:{text:"THICCNESS SCALE",display:!0},scales:{yAxes:[{ticks:{autoSkip:!0,maxTicksLimit:10,beginAtZero:!0},gridLines:{display:!1}}],xAxes:[{gridLines:{display:!1}}]}}})))};var _=function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/user/charts",component:X}),r.a.createElement(H.a,{path:"/user/getipos",component:q}))))},ee=p.a.create({baseURL:"",headers:{"Content-type":"application/json"}}),te=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"upload",value:function(e,t){var a=new FormData;return a.append("file",e),ee.post("http://localhost:8080/excel/uploadExcel",a,{headers:{mode:"no-cors","Content-Type":"multipart/form-data",header:{"Access-Control-Allow-Origin":"*"}},onUploadProgress:t})}},{key:"getFiles",value:function(){return ee.get("/files")}}]),e}()),ae=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).selectFile=a.selectFile.bind(Object(u.a)(a)),a.upload=a.upload.bind(Object(u.a)(a)),a.state={selectedFiles:void 0,currentFile:void 0,progress:0,message:"",fileInfos:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;te.getFiles().then((function(t){e.setState({fileInfos:t.data})}))}},{key:"selectFile",value:function(e){this.setState({selectedFiles:e.target.files})}},{key:"upload",value:function(){var e=this,t=this.state.selectedFiles[0];this.setState({progress:0,currentFile:t}),te.upload(t,(function(t){e.setState({progress:Math.round(100*t.loaded/t.total)})})).then((function(t){return e.setState({message:t.data.message}),te.getFiles()})).then((function(t){e.setState({fileInfos:t.data})})).catch((function(){e.setState({progress:0,message:"Excel File successfully uploaded",currentFile:void 0})})),this.setState({selectedFiles:void 0})}},{key:"restartApp",value:function(){this.setState({fileInfos:[]}),console.log("a")}},{key:"render",value:function(){var e=this.state,t=e.selectedFiles,a=e.currentFile,n=e.progress,c=e.message;e.fileInfos;return r.a.createElement("div",null,a&&r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":n,"aria-valuemin":"0","aria-valuemax":"100",style:{width:n+"%"}},n,"%")),r.a.createElement("label",{className:"btn btn-default"},r.a.createElement("input",{type:"file",onChange:this.selectFile})),r.a.createElement("button",{className:"btn btn-success",disabled:!t,onClick:this.upload},"Upload"),r.a.createElement("div",{className:"alert alert-light",role:"alert"},c))}}]),t}(n.Component);var ne=function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(H.c,null,r.a.createElement(H.a,{path:"/admin/Importdata",component:T}),r.a.createElement(H.a,{path:"/admin/ManageCompany",component:F}),r.a.createElement(H.a,{path:"/admin/addcompany",component:U}),r.a.createElement(H.a,{path:"/admin/updatecompany",component:V}),r.a.createElement(H.a,{path:"/admin/updatepage/:id",component:W}),r.a.createElement(H.a,{path:"/admin/updateipo/:id",component:Z}),r.a.createElement(H.a,{path:"/admin/addstockexchange",component:z}),r.a.createElement(H.a,{path:"/admin/addsector",component:G}),r.a.createElement(H.a,{path:"/admin/file",component:ae}))))},re=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(E.b,{style:{position:"absolute",top:"25px",right:"16px",color:"black"},to:"/"},"Log Out"),r.a.createElement("div",null,r.a.createElement(H.c,null,r.a.createElement(H.a,{exact:!0,path:"/",component:g}),r.a.createElement(H.a,{path:"/user",component:_}),r.a.createElement(H.a,{path:"/admin",component:ne}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.04517cd1.chunk.js.map