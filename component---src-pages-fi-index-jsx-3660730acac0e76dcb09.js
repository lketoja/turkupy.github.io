(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+n12":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){var t=new Date(e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}},SC71:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("L6Je"),i=n("zVja"),l=n("ZVIb");t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,a=t.events.edges;return r.a.createElement(o.a,{title:n},r.a.createElement(i.a,{title:n,lang:"fi"}),r.a.createElement(l.a,{events:a,langCode:"fi"}))};var c="1973514212"},ZVIb:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("vOnD"),i=n("Wbzz"),l=n("oCA+"),c=n("+n12"),d=o.b.article.withConfig({displayName:"Event__EventCard",componentId:"sc-1cbtij4-0"})(["display:flex;flex-direction:column;justify-content:space-between;padding:1.2em;border:0.5rem dashed ",";color:",";line-height:2rem;min-height:13em;border-radius:0.5em;position:relative;&:hover,&:focus-within{cursor:pointer;border:0.5rem solid ",";background-color:",";transform:rotate(0.8deg);}&:hover a{color:",";}"],l.a.darkPink,l.a.darkGrey,l.a.lightPink,l.a.white,l.a.darkGrey),m=o.b.h3.withConfig({displayName:"Event__EventTitle",componentId:"sc-1cbtij4-1"})(["margin-top:0.8em;color:inherit;& > a{color:",";}& > a:hover,& > a:focus{color:",";border-bottom:0.25rem solid ",";}"],l.a.darkGrey,l.a.darkGrey,l.a.lightPink),s=o.b.span.withConfig({displayName:"Event__DateSpan",componentId:"sc-1cbtij4-2"})(["text-transform:uppercase;box-sizing:border-box;"]),u=o.b.div.withConfig({displayName:"Event__EventInfo",componentId:"sc-1cbtij4-3"})(["display:flex;flex-direction:column;"]),p=Object(o.b)(i.Link).withConfig({displayName:"Event__StyledLink",componentId:"sc-1cbtij4-4"})(['&:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;}']),f=function(e){var t=e.title,n=e.date,a=e.host,o=e.slug;return r.a.createElement(d,null,r.a.createElement(m,null,r.a.createElement(p,{to:o},t," ")),r.a.createElement(u,null,n&&r.a.createElement(s,null,"Date: ",Object(c.a)(n)),a&&r.a.createElement("p",null,"Hosted by ",a)))},g=n("jif9"),b=o.b.ul.withConfig({displayName:"IndexPage__EventContainer",componentId:"rjqwez-0"})(["margin:0 auto;list-style-type:none;display:grid;grid-gap:1rem;@supports (width:min(2rem,100%)){grid-template-columns:repeat(auto-fit,minmax(min(20rem,100%),1fr));}"]);t.a=function(e){var t=e.events,n=e.langCode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,Object(g.a)(n,"frontpage.title")),r.a.createElement("h2",null,Object(g.a)(n,"frontpage.preamble")),r.a.createElement("p",null,Object(g.a)(n,"frontpage.infotext")),r.a.createElement("h2",null,Object(g.a)(n,"frontpage.past-events")),r.a.createElement(b,null,t.map((function(e){return r.a.createElement("li",{key:e.node.frontmatter.title},r.a.createElement(f,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,host:e.node.frontmatter.host,slug:e.node.fields.slug}))}))))}}}]);
//# sourceMappingURL=component---src-pages-fi-index-jsx-3660730acac0e76dcb09.js.map