(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(204),s=a(208),c=a(206),l=a(220);a(221),a(222),a(223);function o(){var e=Object(n.useRef)(null);return Object(n.useEffect)(function(){var t=e.current;if(t){var a=document.createElement("script");a.src="https://utteranc.es/client.js",a.async=!0,a.setAttribute("repo","nukeguys/nukeguys.github.io"),a.setAttribute("crossorigin","anonymous"),a.setAttribute("issue-term","pathname"),a.setAttribute("theme","github-light"),t.appendChild(a)}},[]),r.a.createElement("div",{ref:e})}a.d(t,"pageQuery",function(){return m});t.default=function(e){var t=e.data,a=t.markdownRemark,m=t.site,u=e.pageContext,d=u.previous,p=u.next;return Object(n.useRef)(null),Object(n.useEffect)(function(){Object(l.highlightAll)()},[]),r.a.createElement(s.a,{siteMetadata:m.siteMetadata,showIntro:!1},r.a.createElement(c.a,{title:a.frontmatter.title,description:a.excerpt}),r.a.createElement("section",{id:"blog-post"},r.a.createElement("div",{className:"has-text-weight-semibold is-size-3 is-size-4-mobile"},a.frontmatter.title),r.a.createElement("div",{className:"is-size-7 is-size-7-mobile"},a.frontmatter.date),r.a.createElement("div",{className:"summary is-size-6 is-size-6-mobile"},a.frontmatter.description),r.a.createElement("div",{className:"tags"},a.frontmatter.tags.map(function(e){return r.a.createElement("span",{key:e,className:"tag"},"#",e)})),r.a.createElement("article",{className:"content",dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("nav",{className:"level"},r.a.createElement("div",{className:"level-left"},d&&r.a.createElement(i.a,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),r.a.createElement("div",{className:"level-right"},p&&r.a.createElement(i.a,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))),r.a.createElement(o,null))};var m="1462415698"},203:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},204:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),r=a.n(n),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(203),a(9).default.enqueue;var c=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||i,staticQueryData:e})})}},205:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";var n=a(207),r=a(0),i=a.n(r),s=a(212),c=a.n(s),l=a(204);t.a=function(e){var t=e.description,a=e.lang,r=void 0===a?"en":a,s=e.meta,m=void 0===s?[]:s,u=e.keywords,d=void 0===u?[]:u,p=e.title;return i.a.createElement(l.b,{query:o,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:r},title:p,meta:[{name:"description",content:a},{property:"og:title",content:p},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:a},{name:"google-site-verification",content:e.site.siteMetadata.google_site_verification},{name:"naver-site-verification",content:e.site.siteMetadata.naver_site_verification}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(m)})},data:n})};var o="2251142046"},207:function(e){e.exports={data:{site:{siteMetadata:{title:"nukeguys blog",description:"about development, life and something.",author:"nukeguys",google_site_verification:"Qa32yaZLkgQI9TZcxVmVnp12wR0LusDyVoimvgBzENI",naver_site_verification:"1450bea46de74e3e5ae8438654c716209f5e5722"}}}}},208:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=(a(38),a(66)),s=a.n(i),c=a(210),l=a.n(c);var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).onClickBuger=function(){a.setState({activeMenu:!a.state.activeMenu})},a.onClickMenu=function(){a.setState({activeMenu:!1})},a.state={activeMenu:!1},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.menuItems,i=this.state.activeMenu;return r.a.createElement("nav",{id:"header",className:l()("navbar has-background-white",{"is-active":i}),role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item is-uppercase has-text-weight-bold is-size-7",href:"/"},a),r.a.createElement("a",{className:l()("navbar-burger","burger",{"is-active":i}),role:"button","aria-label":"menu","aria-expanded":"false",onClick:this.onClickBuger},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:l()("navbar-menu",{"is-active":i})},r.a.createElement("div",{className:"navbar-end"},n.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.name},r.a.createElement(s.a,{key:t.name,className:"navbar-item is-size-7",to:t.path,onClick:e.onClickMenu},t.name),r.a.createElement("div",{key:"divider",className:"vertical-divider"},r.a.createElement("div",{className:"divider"})))}))))},n}(r.a.Component),m=function(){return r.a.createElement("footer",{id:"footer",className:"footer has-text-grey is-size-7"},r.a.createElement("p",null,r.a.createElement("a",{className:"icon",href:"https://github.com/nukeguys"},r.a.createElement("i",{className:"fa fa-github fa-lg"})),r.a.createElement("a",{className:"icon",href:"https://www.linkedin.com/in/seung-kyu-sung-42695241"},r.a.createElement("i",{className:"fa fa-linkedin fa-lg"})),r.a.createElement("a",{className:"icon",href:"mailto:nukeguys0@gmail.com"},r.a.createElement("i",{className:"fa fa-envelope fa-lg"})),r.a.createElement("a",{className:"icon",href:"/rss.xml"},r.a.createElement("i",{className:"fa fa-rss fa-lg"}))),r.a.createElement("p",{className:"is-uppercase"},"© 2018 ",r.a.createElement("a",{href:"/about "},"nukeguys")," All right reserved. Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js"),"+",r.a.createElement("a",{href:"https://bulma.io/"},"Bulma")))};a(211);var u=[{name:"DEV",path:"/dev"},{name:"LIFE",path:"/life"},{name:"BOOK",path:"/book"},{name:"CLIMBING",path:"/climbing"}],d=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.siteMetadata,a=t.title,n=t.description,i=e.children,s=e.showIntro,c=e.intro;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-head"},r.a.createElement(o,{title:a,menuItems:u}),s&&r.a.createElement("div",{id:"intro",className:"has-text-centered is-hidden-mobile"},r.a.createElement("span",{className:"is-size-7 is-marginless"},c||n))),r.a.createElement("main",{className:"container is-desktop"},r.a.createElement("div",{className:"hero-body is-paddingless"},i),r.a.createElement("div",{className:"hero-footer"},r.a.createElement(m,null))))},n}(r.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-79cb6f0f97bec1e5feeb.js.map