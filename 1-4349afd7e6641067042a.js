(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(148),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(153),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},150:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(162),c=a.n(s),o=a(149);t.a=function(e){var t=e.description,a=e.lang,r=void 0===a?"en":a,s=e.meta,u=void 0===s?[]:s,m=e.keywords,d=void 0===m?[]:m,p=e.title;return i.a.createElement(o.StaticQuery,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:r},title:p,meta:[{name:"description",content:a},{property:"og:title",content:p},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:a}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(u)})},data:n})};var l="1025518380"},151:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),s=a.n(i),c=(a(158),a(148)),o=a.n(c),l=a(159),u=a.n(l),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClickBuger=function(){a.setState({activeMenu:!a.state.activeMenu})},a.onClickMenu=function(){a.setState({activeMenu:!1})},a.state={activeMenu:!1},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.menuItems,r=this.state.activeMenu;return s.a.createElement("nav",{id:"header",className:u()("navbar has-background-white",{"is-active":r}),role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item is-uppercase has-text-weight-bold is-size-7",href:"/"},a),s.a.createElement("a",{className:u()("navbar-burger","burger",{"is-active":r}),role:"button","aria-label":"menu","aria-expanded":"false",onClick:this.onClickBuger},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{className:u()("navbar-menu",{"is-active":r})},s.a.createElement("div",{className:"navbar-end"},n.map(function(t){return s.a.createElement(s.a.Fragment,{key:t.name},s.a.createElement(o.a,{key:t.name,className:"navbar-item is-size-7",to:t.path,onClick:e.onClickMenu},t.name),s.a.createElement("div",{key:"divider",className:"vertical-divider"},s.a.createElement("div",{className:"divider"})))}))))},t}(s.a.Component),d=function(){return s.a.createElement("footer",{id:"footer",className:"footer has-text-grey is-size-7"},s.a.createElement("p",null,s.a.createElement("a",{className:"icon"},s.a.createElement("i",{className:"fa fa-twitter fa-lg"})),s.a.createElement("a",{className:"icon"},s.a.createElement("i",{className:"fa fa-github fa-lg"})),s.a.createElement("a",{className:"icon"},s.a.createElement("i",{className:"fa fa-rss fa-lg"})),s.a.createElement("a",{className:"icon"},s.a.createElement("i",{className:"fa fa-envelope fa-lg"}))),s.a.createElement("p",{className:"is-uppercase"},"© 2018 ",s.a.createElement("a",{href:"/about "},"nukeguys")," All right reserved. Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js"),"+",s.a.createElement("a",{href:"https://bulma.io/"},"Bulma")))},p=(a(160),[{name:"DEV",path:"/dev"},{name:"LIFE",path:"/life"}]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.siteMetadata,a=t.title,n=t.description,r=e.children,i=e.showIntro;return s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"hero-head"},s.a.createElement(m,{title:a,menuItems:p}),i&&s.a.createElement("div",{id:"intro",className:"has-text-centered is-hidden-mobile"},s.a.createElement("span",{className:"is-size-7 is-marginless"},n))),s.a.createElement("main",{className:"container is-desktop"},s.a.createElement("div",{className:"hero-body is-paddingless"},r),s.a.createElement("div",{className:"hero-footer"},s.a.createElement(d,null))))},t}(s.a.Component);t.a=f},153:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},157:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(68),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},160:function(e,t,a){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"nukeguys blog",description:"about development, life and something.",author:"nukeguys"}}}}}}]);
//# sourceMappingURL=1-4349afd7e6641067042a.js.map