(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(10),i=c.n(s),a=c(6),j=c(2),o=c(5),d=c.n(o),u=c(7),b=c(4),l=c(1);var O=function(){var e=Object(j.g)().id,t=Object(n.useState)([]),c=Object(b.a)(t,2),r=c[0],s=c[1],i=Object(n.useState)(!0),a=Object(b.a)(i,2),o=a[0],O=a[1],m=Object(n.useCallback)(Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e));case 2:return t.next=4,t.sent.json();case 4:c=t.sent,s(c.data.movie),O(!1);case 7:case"end":return t.stop()}}),t)}))),[e]);return Object(n.useEffect)((function(){m()}),[m]),console.log(r),Object(l.jsx)("div",{children:o?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:r.title_long}),Object(l.jsx)("img",{src:r.large_cover_image,alt:r.title_long}),Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:r.description_full})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Rating: ",r.rating]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("span",{children:["Run-time: ",r.runtime,"min."]})})]})})};var m=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,s=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:c,alt:n}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:s.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var h=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(b.a)(s,2),a=i[0],j=i[1],o=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,r(t.data.movies),j(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(l.jsx)("div",{children:a?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:c.map((function(e){return Object(l.jsx)(m,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var x=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",element:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/movie/:id",element:Object(l.jsx)(O,{})})]})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ce509b15.chunk.js.map