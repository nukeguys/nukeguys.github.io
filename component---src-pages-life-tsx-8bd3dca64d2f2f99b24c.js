(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),i=a(207),s=a(205),o=a(208);var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site,a=e.allMarkdownRemark,n=a?a.edges:[];return r.a.createElement(i.a,{siteMetadata:t.siteMetadata,showIntro:!0,intro:"You only live once, but if you do it right, once is enough."},r.a.createElement(s.a,{title:"nuKeguyS",keywords:["blog","gatsby","javascript","react"]}),r.a.createElement(o.a,{posts:n}))},n}(r.a.Component);t.default=c;var l="625745385"},202:function(e,t,a){var n;e.exports=(n=a(204))&&n.default||n},203:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(202),a(9).default.enqueue;var o=r.a.createContext({});function c(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(o.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:a,render:n||i,staticQueryData:e})})}},204:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e,t,a){"use strict";var n=a(206),r=a(0),i=a.n(r),s=a(211),o=a.n(s),c=a(203);t.a=function(e){var t=e.description,a=e.lang,r=void 0===a?"en":a,s=e.meta,u=void 0===s?[]:s,m=e.keywords,p=void 0===m?[]:m,d=e.title;return i.a.createElement(c.b,{query:l,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:d,meta:[{name:"description",content:a},{property:"og:title",content:d},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:a},{name:"google-site-verification",content:e.site.siteMetadata.google_site_verification},{name:"naver-site-verification",content:e.site.siteMetadata.naver_site_verification}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(u)})},data:n})};var l="2251142046"},206:function(e){e.exports={data:{site:{siteMetadata:{title:"nukeguys blog",description:"about development, life and something.",author:"nukeguys",google_site_verification:"Qa32yaZLkgQI9TZcxVmVnp12wR0LusDyVoimvgBzENI",naver_site_verification:"1450bea46de74e3e5ae8438654c716209f5e5722"}}}}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(38),a(66)),s=a.n(i),o=a(209),c=a.n(o);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).onClickBuger=function(){a.setState({activeMenu:!a.state.activeMenu})},a.onClickMenu=function(){a.setState({activeMenu:!1})},a.state={activeMenu:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.menuItems,i=this.state.activeMenu;return r.a.createElement("nav",{id:"header",className:c()("navbar has-background-white",{"is-active":i}),role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item is-uppercase has-text-weight-bold is-size-7",href:"/"},a),r.a.createElement("a",{className:c()("navbar-burger","burger",{"is-active":i}),role:"button","aria-label":"menu","aria-expanded":"false",onClick:this.onClickBuger},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:c()("navbar-menu",{"is-active":i})},r.a.createElement("div",{className:"navbar-end"},n.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.name},r.a.createElement(s.a,{key:t.name,className:"navbar-item is-size-7",to:t.path,onClick:e.onClickMenu},t.name),r.a.createElement("div",{key:"divider",className:"vertical-divider"},r.a.createElement("div",{className:"divider"})))}))))},n}(r.a.Component),u=function(){return r.a.createElement("footer",{id:"footer",className:"footer has-text-grey is-size-7"},r.a.createElement("p",null,r.a.createElement("a",{className:"icon",href:"https://github.com/nukeguys"},r.a.createElement("i",{className:"fa fa-github fa-lg"})),r.a.createElement("a",{className:"icon",href:"https://www.linkedin.com/in/seung-kyu-sung-42695241"},r.a.createElement("i",{className:"fa fa-linkedin fa-lg"})),r.a.createElement("a",{className:"icon",href:"mailto:nukeguys0@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope fa-lg"})),r.a.createElement("a",{className:"icon",href:"/rss.xml"},r.a.createElement("i",{className:"fa fa-rss fa-lg"}))),r.a.createElement("p",{className:"is-uppercase"},"© 2018 ",r.a.createElement("a",{href:"/about "},"nukeguys")," All right reserved. Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js"),"+",r.a.createElement("a",{href:"https://bulma.io/"},"Bulma")))};a(210);var m=[{name:"DEV",path:"/dev"},{name:"LIFE",path:"/life"},{name:"BOOK",path:"/book"}],p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.siteMetadata,a=t.title,n=t.description,i=e.children,s=e.showIntro,o=e.intro;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-head"},r.a.createElement(l,{title:a,menuItems:m}),s&&r.a.createElement("div",{id:"intro",className:"has-text-centered is-hidden-mobile"},r.a.createElement("span",{className:"is-size-7 is-marginless"},o||n))),r.a.createElement("main",{className:"container is-desktop"},r.a.createElement("div",{className:"hero-body is-paddingless"},i),r.a.createElement("div",{className:"hero-footer"},r.a.createElement(u,null))))},n}(r.a.Component);t.a=p},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(203);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return r.a.createElement("div",{id:"post",className:"has-text-grey-dark"},r.a.createElement("div",{className:"has-text-weight-semibold is-size-4 is-size-5-mobile"},t),r.a.createElement("div",{className:"is-uppercase is-size-7 is-size-7-mobile"},e.frontmatter.date),r.a.createElement("div",{className:"summary is-size-6 is-size-6-mobile"},e.frontmatter.description),r.a.createElement("div",{className:"tags"},e.frontmatter.tags.map(function(e){return r.a.createElement("span",{key:e,className:"tag"},"#",e)})))},n}(n.Component);var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.posts;return r.a.createElement(r.a.Fragment,null,e.map(function(e){var t=e.node;return r.a.createElement("div",{className:"postItem",key:t.fields.slug},r.a.createElement(i.a,{className:"postLink",to:t.fields.slug},r.a.createElement(s,{post:t})))}))},n}(r.a.Component);t.a=o}}]);
//# sourceMappingURL=component---src-pages-life-tsx-8bd3dca64d2f2f99b24c.js.map