(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(151),l=a(150),c=a(149),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site,a=e.allMarkdownRemark,n=a?a.edges:[];return i.a.createElement(o.a,{siteMetadata:t.siteMetadata,showIntro:!0,intro:"A clever person solves a problem. A wise person AVOIDS it."},i.a.createElement(l.a,{title:"nuKeguyS",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(c.a,{posts:n}))},t}(i.a.Component);t.default=p;var m="84525465"},149:function(e,t,a){"use strict";var n=a(7),r=a.n(n),s=a(0),i=a.n(s),o=a(148),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{id:"post",className:"has-text-grey-dark"},i.a.createElement("div",{className:"has-text-weight-semibold is-size-4 is-size-5-mobile"},t),i.a.createElement("div",{className:"is-uppercase is-size-7 is-size-7-mobile"},e.frontmatter.date),i.a.createElement("div",{className:"summary is-size-6 is-size-6-mobile"},e.frontmatter.description),i.a.createElement("div",{className:"tags"},e.frontmatter.tags.map(function(e){return i.a.createElement("span",{key:e,className:"tag"},"#",e)})))},t}(s.Component),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement(i.a.Fragment,null,e.map(function(e){var t=e.node;return i.a.createElement("div",{className:"postItem",key:t.fields.slug},i.a.createElement(o.Link,{className:"postLink",to:t.fields.slug},i.a.createElement(l,{post:t})))}))},t}(i.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-dev-tsx-48168d135ebdfcca6ee8.js.map