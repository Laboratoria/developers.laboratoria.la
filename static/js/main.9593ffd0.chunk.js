(this["webpackJsonpdevelopers.laboratoria.la"]=this["webpackJsonpdevelopers.laboratoria.la"]||[]).push([[0],[,,,function(e,a,t){e.exports=t.p+"static/media/logo.77b1a758.svg"},function(e){e.exports=JSON.parse('["danicuki","lupomontero","merunga","gaposx","bouli","Xpktro","mikenieva","lizzie136","coloradomarin","arku","FabianBravoA","lalogf","raulingg","rafaelbcerri","mfdebian","Gabx04","aguzro","nerdale","brecabal","MarciaMillanao","contrerasjf0","chamodev","RuthSalvador","shirley-startary","MaiaRojas","RuthMeryCardenas","AnaSalazar","florenciasilva","developerVilchez","betsyvies","JulianaAmoasei","Danielalab","ElizabethVegaM","paclaraujo","juanjordan"]')},,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),l=t.n(o),i=t(3),c=t.n(i),s=(t(11),function(){return r.a.createElement("section",{className:"Intro"},r.a.createElement("h2",null,"Laboratoria Devs Chapter"),r.a.createElement("p",null,"We are ",r.a.createElement("strong",null,"a community made up of all the developers working at\xa0",r.a.createElement("a",{href:"https://www.laboratoria.la/"},"Laboratoria")),". That includes any Laboratorian that identifies as a developer, independent of their day-to-day role."),r.a.createElement("p",null,"The DevsChapter's ",r.a.createElement("strong",null,"main goal is to promote peer learning, sharing and cross-pollination across teams"),". The community has a bunch of resources to enable collaboration, sharing and support among devs."),r.a.createElement("p",null,"The DevsChapter also serves the purpose of providing ",r.a.createElement("strong",null,"design, implementation and collaboration guidelines"),"."))}),u=function(e){var a=e.symbol,t=e.label;return r.a.createElement("span",{role:"img","aria-label":t||"Emoji"},a)},m=(t(12),function(){return r.a.createElement("section",{className:"Calendar"},r.a.createElement("h2",null,r.a.createElement(u,{symbol:"\ud83d\udcac"})," Pr\xf3ximo hangout"),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:"https://calendar.google.com/calendar/r/week/2019/11/15?eid=NXQ0MjhjOGllaTdzanA2YjdnOHR2dHQ3YmMgbGFib3JhdG9yaWEubGFfdmhyMmowZ2VycTJvaWRmZm0xNGZvM3R1aW9AZw&ctz=America/Lima&sf=true"},"15 de Noviembre 2019 14:30h (Lima)")),r.a.createElement("ul",null,r.a.createElement("li",null,"14:00 - 14:10: Bienvenida / Intro (",r.a.createElement("a",{href:"https://github.com/bouli"},"@bouli")," / ",r.a.createElement("a",{href:"https://github.com/lupomontero"},"@lupomontero"),")"),r.a.createElement("li",null,"14:10 - 14:35: C\xf3mo no ir de A -> B, Grafos (",r.a.createElement("a",{href:"https://github.com/lizzie136"},"@lizzie136"),")"),r.a.createElement("li",null,"14:35 - 15:00: Don't worry yourself about DRY (",r.a.createElement("a",{href:"https://github.com/raulingg"},"@raulingg"),")"),r.a.createElement("li",null,"15:00 - 15:25: Experimento de backend en Bootcamp (",r.a.createElement("a",{href:"https://github.com/merunga"},"@merunga"),")"),r.a.createElement("li",null,"15:25 - 15:30: Cierre"))))}),h=function(e){var a=e.profile;return r.a.createElement("img",{className:"SimpleIcon",src:"https://simpleicons.org/icons/".concat(a.provider,".svg"),alt:a.provider})},d=(t(13),[{provider:"github",url:"https://github.com/Laboratoria/developers.laboratoria.la"},{provider:"slack",url:"https://laboratoriala.slack.com/messages/C7TE6F4G7/"},{provider:"discourse",url:"http://community.laboratoria.la/"},{provider:"medium",url:"https://medium.com/laboratoria-developers"},{provider:"youtube",url:"https://www.youtube.com/channel/UCuWmQYAvytwSl6tqjOxV5Ow"}]),f=function(e){return r.a.createElement("section",{className:"Resources"},r.a.createElement("h2",null,r.a.createElement(u,{symbol:"\ud83d\udcda"})," Recursos"),d.map((function(e){return r.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(h,{profile:e}))})))},p=t(5),g=function(e){var a=e.member,t=e.selected,o=e.setSelected,l=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=l.current,n=e.getContext("2d"),r=new Image,o=.05*e.width,i=.05*e.height;n.webkitImageSmoothingEnabled=!1,n.imageSmoothingEnabled=!1,n.font='bold 14px "Open Sans", sans-serif',n.textAlign="center",n.textBaseline="middle";r.onload=t?function(){n.fillStyle="#000",n.fillRect(0,0,e.width,e.height),n.drawImage(r,0,0),n.fillStyle="#FF009E",n.fillRect(0,e.height-30,e.width,e.height),n.fillStyle="#fff",n.fillText("@".concat(a),e.width/2,e.height-15)}:function(){n.fillStyle="#000",n.fillRect(0,0,e.width,e.height),n.drawImage(r,0,0,o,i),n.drawImage(e,0,0,o,i,0,0,e.width,e.height)},r.src="https://github.com/".concat(a,".png?size=160")}),[a,t,l]),r.a.createElement("a",{className:"Member",href:"https://github.com/".concat(a),title:a,onClick:function(e){e.preventDefault(),t?window.open(e.currentTarget.href):o(a)}},r.a.createElement("canvas",{className:t?"selected":"",ref:l,width:160,height:160}))},b=(t(14),function(e){var a=e.members,t=Object(n.useState)(null),o=Object(p.a)(t,2),l=o[0],i=o[1];return r.a.createElement("section",{className:"Members"},r.a.createElement("h2",null,r.a.createElement(u,{symbol:"\ud83d\udc6a"})," Qui\xe9nes somos?"),r.a.createElement("div",null,a&&a.map((function(e){return r.a.createElement(g,{key:e,member:e,selected:e===l,setSelected:i})}))))}),v=(t(15),function(e){var a=e.members;return r.a.createElement("main",{className:"App"},r.a.createElement("header",null,r.a.createElement("img",{src:c.a,alt:"Laboratoria Developers Logo"}),r.a.createElement("h1",null,"Developers")),r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(b,{members:a}))}),E=(t(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function w(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=t(4);l.a.render(r.a.createElement(v,{members:y}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");E?(!function(e,a){fetch(e).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(a,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.9593ffd0.chunk.js.map