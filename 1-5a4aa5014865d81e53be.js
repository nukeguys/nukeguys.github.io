(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(146),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var l=a(150),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},148:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(159),s=a.n(c),o=a(147);t.a=function(e){var t=e.description,a=e.lang,r=void 0===a?"en":a,c=e.meta,u=void 0===c?[]:c,m=e.keywords,d=void 0===m?[]:m,p=e.title;return i.a.createElement(o.StaticQuery,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:r},title:p,meta:[{name:"description",content:a},{property:"og:title",content:p},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:a}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(u)},i.a.createElement("link",{rel:"shortcut icon",href:"/favicon.ico",type:"image/x-icon"}),i.a.createElement("link",{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}))},data:n})};var l="1025518380"},149:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),s=(a(155),a(146)),o=a.n(s),l=a(156),u=a.n(l),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClickBuger=function(){a.setState({activeMenu:!a.state.activeMenu})},a.onClickMenu=function(){a.setState({activeMenu:!1})},a.state={activeMenu:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.menuItems,r=this.state.activeMenu;return c.a.createElement("nav",{id:"header",className:u()("navbar has-background-white",{"is-active":r}),role:"navigation","aria-label":"main navigation"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement("a",{className:"navbar-item is-uppercase has-text-weight-bold is-size-7",href:"/"},a),c.a.createElement("a",{className:u()("navbar-burger","burger",{"is-active":r}),role:"button","aria-label":"menu","aria-expanded":"false",onClick:this.onClickBuger},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:u()("navbar-menu",{"is-active":r})},c.a.createElement("div",{className:"navbar-end"},n.map(function(t){return c.a.createElement(c.a.Fragment,{key:t.name},c.a.createElement(o.a,{key:t.name,className:"navbar-item is-size-7",to:t.path,onClick:e.onClickMenu},t.name),c.a.createElement("div",{key:"divider",className:"vertical-divider"},c.a.createElement("div",{className:"divider"})))}))))},t}(c.a.Component),d=function(){return c.a.createElement("footer",{id:"footer",className:"footer has-text-grey is-size-7"},c.a.createElement("p",null,c.a.createElement("a",{className:"icon"},c.a.createElement("i",{className:"fa fa-twitter fa-lg"})),c.a.createElement("a",{className:"icon"},c.a.createElement("i",{className:"fa fa-github fa-lg"})),c.a.createElement("a",{className:"icon"},c.a.createElement("i",{className:"fa fa-rss fa-lg"})),c.a.createElement("a",{className:"icon"},c.a.createElement("i",{className:"fa fa-envelope fa-lg"}))),c.a.createElement("p",{className:"is-uppercase"},"© 2018 ",c.a.createElement("a",{href:"/about "},"nukeguys")," All right reserved. Built with"," ",c.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js"),"+",c.a.createElement("a",{href:"https://bulma.io/"},"Bulma")))},p=(a(157),[]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.siteMetadata,a=t.title,n=(t.description,e.children);e.showIntro;return c.a.createElement("section",{className:"hero"},c.a.createElement("div",{className:"hero-head"},c.a.createElement(m,{title:a,menuItems:p})),c.a.createElement("main",{className:"container is-desktop"},c.a.createElement("div",{className:"hero-body is-paddingless"},n),c.a.createElement("div",{className:"hero-footer"},c.a.createElement(d,null))))},t}(c.a.Component);t.a=f},150:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},154:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(68),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){},158:function(e){e.exports={data:{site:{siteMetadata:{title:"nukeguys blog",description:"about development, life and something.",author:"nukeguys"}}}}}}]);
//# sourceMappingURL=1-5a4aa5014865d81e53be.js.map