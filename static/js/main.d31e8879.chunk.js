(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},79:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),l=c(8),i=c.n(l),n=(c(43),c(16)),d=c(7),r=(c(44),c(12)),j=c(3),o=(c(19),c(34)),m=c.n(o),b=(c(28),c(35)),h=(c(80),c.p+"static/media/full.e6fdfd5c.jpg"),x=c.p+"static/media/full2.ab421817.jpg",O=c(1);function p(){var e=Object(j.g)(),t=(e.geodata,e.loc),c=Object(s.useState)(0),a=Object(d.a)(c,2),l=a[0],i=a[1],n=Object(s.useState)(0),r=Object(d.a)(n,2),o=r[0],p=r[1],u=Object(s.useState)(0),g=Object(d.a)(u,2),v=g[0],f=g[1],N=Object(s.useState)(0),w=Object(d.a)(N,2),y=w[0],S=w[1],C=Object(s.useState)(),E=Object(d.a)(C,2),F=E[0],L=E[1],R=Object(s.useState)(),W=Object(d.a)(R,2),k=W[0],D=W[1],T=Object(s.useState)(),z=Object(d.a)(T,2),P=z[0],J=z[1],q=Object(s.useState)(),A=Object(d.a)(q,2),B=A[0],H=A[1],I=Object(s.useState)(),M=Object(d.a)(I,2),G=M[0],U=M[1];return Object(s.useEffect)((function(){console.log(t);U("https://open.mapquestapi.com/staticmap/v4/getplacemap?key=0RExWJUmRFx8cymgyb6iy5te2X313bdn&location="+t+"&size=600,400&zoom=9&showicon=red_1-1"),console.log(G),m.a.get("".concat("https://api.openweathermap.org/data/2.5/weather?q=").concat(t,"&appid=e91b8ac715075164447b2e2118ef0464")).then((function(e){var t=e.data;i(t),L(t.coord),D(t.weather),J(t.main),f(t.wind),S(t.sys),H(t.clouds),p(new Date(1e3*(t.sys.sunrise+t.timezone)).toString()),console.log(t),console.log(y)})).catch((function(e){console.error(e),alert("please check the spelling of your location")}))}),[t]),Object(O.jsx)("div",{className:"roundit",children:Object(O.jsxs)("div",{className:"container-fluid px-1 px-sm-3 py-5 mx-auto roundit",children:[Object(O.jsx)("div",{className:"row d-flex justify-content-center rounded-lg roundit",children:Object(O.jsxs)("div",{className:"row card0 roundit",children:[Object(O.jsxs)("div",{className:"card1 col-lg-8 col-md-7",children:[" ",Object(O.jsx)("strong",{children:"WEATHER FORECAST"}),Object(O.jsxs)("div",{className:"text-center",children:[" ",Object(O.jsxs)(b.Carousel,{className:"coro",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:G})}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:h})}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:x})})]})," "]}),Object(O.jsxs)("div",{className:"row px-3 mt-3 mb-3",children:[Object(O.jsxs)("div",{className:"d-flex flex-row mr-3",children:[Object(O.jsxs)("h1",{className:"large-font mr-3",children:[void 0!==P&&Math.round(10*P.temp-2731.5)/10,"\xb0"]}),Object(O.jsx)("img",{src:void 0!==k&&"http://openweathermap.org/img/w/"+k[0].icon+".png",width:"100",alt:void 0!==k&&k[0].main})]}),Object(O.jsxs)("div",{className:"d-flex flex-column mr-3",children:[Object(O.jsx)("h2",{className:"mt-3 mb-0",children:l.name})," ",Object(O.jsx)("small",{children:void 0!==o&&o.toString()})]}),Object(O.jsxs)("div",{className:"d-flex flex-column text-center",children:[Object(O.jsx)("h3",{className:"fa fa-sun-o mt-4"})," ",Object(O.jsx)("strong",{children:void 0!==k&&k[0].description})]})]})]}),Object(O.jsxs)("div",{className:"card2 col-lg-4 col-md-5",children:[Object(O.jsxs)("div",{className:"row px-3",children:[" ",Object(O.jsx)("input",{type:"text",name:"location",placeholder:l.name,className:"mb-4",readOnly:!0})]}),Object(O.jsxs)("div",{className:"mr-5",children:[Object(O.jsxs)("p",{className:"",children:["Longitude : \xa0\xa0\xa0",void 0!==F&&F.lon]}),Object(O.jsxs)("p",{className:"",children:["Latitude \xa0\xa0\xa0\xa0:\xa0\xa0\xa0",void 0!==F&&F.lat]}),Object(O.jsxs)("p",{className:"",children:["Wind \xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",void 0!==v&&v.speed,"m/s\xa0\xa0",void 0!==v&&v.deg,"\xb0"]}),Object(O.jsxs)("p",{className:"",children:["Sunrise \xa0\xa0\xa0\xa0:\xa0\xa0\xa0",new Date(void 0!==y&&1e3*y.sunrise).toString().slice(0,-21)]}),Object(O.jsxs)("p",{className:"",children:["Sunset \xa0\xa0\xa0\xa0\xa0:\xa0\xa0\xa0",new Date(void 0!==y&&1e3*y.sunset).toString().slice(0,-21)]}),Object(O.jsx)("div",{className:"line my-4"}),Object(O.jsx)("p",{children:"Weather Details"}),Object(O.jsxs)("div",{className:"row px-3",children:[Object(O.jsx)("p",{className:"light-text",children:"Cloudy"}),Object(O.jsxs)("p",{className:"ml-auto",children:[void 0!==B&&B.all,"%"]})]}),Object(O.jsxs)("div",{className:"row px-3",children:[Object(O.jsx)("p",{className:"light-text",children:"Pressure"}),Object(O.jsxs)("p",{className:"ml-auto",children:[void 0!==P&&P.pressure,"hPa"]})]}),Object(O.jsxs)("div",{className:"row px-3",children:[Object(O.jsx)("p",{className:"light-text",children:"Humidity"}),Object(O.jsxs)("p",{className:"ml-auto",children:[void 0!==P&&P.humidity,"%"]})]}),Object(O.jsxs)("div",{className:"row px-3",children:[Object(O.jsx)("p",{className:"light-text",children:"Rain"}),Object(O.jsx)("p",{className:"ml-auto",children:"0mm"})]}),Object(O.jsx)("div",{className:"line mt-3"})]})]})]})}),Object(O.jsx)("iframe",{className:"ifra",src:"https://embed.windy.com/embed2.html?lat=16.691&lon=77.934&detailLat=17.360&detailLon=78.470&width=650&height=450&zoom=7&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1",frameborder:"0"})]})})}var u=function(){var e,t=Object(s.useState)(0),c=Object(d.a)(t,2),a=c[0],l=c[1];return Object(O.jsx)("div",{children:Object(O.jsxs)(r.a,{children:[Object(O.jsxs)("header",{className:"row",children:[Object(O.jsx)("div",{className:"col offset-md-2",children:Object(O.jsx)("input",(e={type:"text",className:"form-control inputcol",placeholder:"City",name:"city",autoComplete:"off"},Object(n.a)(e,"placeholder","Search here"),Object(n.a)(e,"onChange",(function(e){l(e.target.value)})),e))}),Object(O.jsx)(r.b,{className:"col",to:"/geodata/".concat(a),children:Object(O.jsx)("div",{className:"col-md-3 mt-md-0 mt-2 text-md-left ",children:Object(O.jsx)("button",{className:"btn btn-warning",children:"Get Weather"})})})]}),Object(O.jsxs)(j.d,{children:[Object(O.jsx)(j.b,{path:"/geodata/:loc",children:Object(O.jsx)(p,{})}),Object(O.jsx)(j.b,{children:Object(O.jsx)(j.a,{to:"/uppal"})})]})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),l(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u,{})}),document.getElementById("root")),g()}},[[79,1,2]]]);
//# sourceMappingURL=main.d31e8879.chunk.js.map