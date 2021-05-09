(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,n,t){},124:function(e,n,t){"use strict";t.r(n);var c=t(29),i=t(0),r=t(16),a=t.n(r),s=(t(112),t(37)),l=t(18),j=t(167),o=t(154),d=t(8),b=t(158),h=t(159),O=t(160),u=t(161),x=t(162),g=t(163),v=t(164),p=(t(55),t(7)),m=Object(o.a)({table:{minWidth:650}}),f=Object(d.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(b.a),y=Object(d.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(h.a);function k(e){var n=e.bikes,t=void 0===n?[]:n,c=m();return Object(p.jsx)(O.a,{component:u.a,children:Object(p.jsxs)(x.a,{className:c.table,"aria-label":"simple table",children:[Object(p.jsx)(g.a,{children:Object(p.jsxs)(y,{children:[Object(p.jsx)(f,{children:"ID"}),Object(p.jsx)(f,{align:"right",children:"Latitude"}),Object(p.jsx)(f,{align:"right",children:"Longitude"}),Object(p.jsx)(f,{align:"right",children:"Reserved"}),Object(p.jsx)(f,{align:"right",children:"Disabled"}),Object(p.jsx)(f,{align:"right",children:"Type"})]})}),Object(p.jsx)(v.a,{children:t.map((function(e,n){var t=e.bike_id,c=e.lat,i=e.lon,r=e.is_disabled,a=e.is_reserved,l=e.vehicle_type;return Object(p.jsxs)(y,{children:[Object(p.jsx)(f,{component:"th",scope:"row",children:Object(p.jsxs)(s.b,{to:"/".concat(t),className:"text-link",children:[" ",t]})}),Object(p.jsx)(f,{align:"right",children:c}),Object(p.jsx)(f,{align:"right",children:i}),Object(p.jsx)(f,{align:"right",children:a?"yes":"no"}),Object(p.jsx)(f,{align:"right",children:r?"yes":"no"}),Object(p.jsx)(f,{align:"right",children:l})]},t)}))})]})})}var _=t(102),N=t(166),C=function(){var e=Object(l.f)(),n=function(n){return e.push("/".concat(n))},t=Object(i.useState)(""),c=Object(_.a)(t,2),r=c[0],a=c[1];return Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&n(r)},align:"right",className:"container",children:[Object(p.jsx)(N.a,{id:"standard-basic",label:"Search By ID",value:r,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&n(r)}}),Object(p.jsx)("label",{children:Object(p.jsx)(s.b,{to:"/".concat(r),children:Object(p.jsx)(j.a,{style:{margin:"10px"},variant:"contained",color:"primary",children:"Search"})})}),Object(p.jsx)("label",{children:Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)(j.a,{variant:"contained",color:"primary",children:"Main Page"})})})]})})},S=t(165),I=Object(o.a)((function(e){return{root:{display:"flex",marginTop:"100px",justifyContent:"center","& > * + *":{marginLeft:e.spacing(2)}}}}));function q(){var e=I();return Object(p.jsx)("div",{className:e.root,children:Object(p.jsx)(S.a,{})})}var w,B,D,F=t(68),P=Object(c.gql)(w||(w=Object(F.a)(["\n query getVehicleStatus {\n  vehicleStatus {\n      last_updated\n      ttl\n      data {\n        bikes {\n          bike_id\n          lat\n          lon\n          is_reserved\n          is_disabled\n          vehicle_type\n        }\n      }\n    }\n  }\n"]))),L=(Object(c.gql)(B||(B=Object(F.a)(["\n  query GetBikes {\n    bikes {\n      bike_id\n      lat\n      lon\n      is_reserved\n      is_disabled\n      vehicle_type\n    }\n  }\n  "]))),Object(c.gql)(D||(D=Object(F.a)(["\n  query GetBikeById ($id: ID!) {\n    bike (id: $id){\n      bike_id\n      lat\n      lon\n      is_reserved\n      is_disabled\n      vehicle_type\n    }\n  }\n"]))));function A(e){var n=e.match.params.id,t=Object(c.useQuery)(L,{variables:{id:n}}),i=t.data,r=(i=void 0===i?{}:i).bike,a=void 0===r?{}:r,l=t.loading,o=t.error;return l?Object(p.jsx)(q,{}):o?Object(p.jsx)("div",{children:"An error occurred"}):a?Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{}),Object(p.jsx)(k,{bikes:[a]})]}):Object(p.jsxs)("div",{className:"details",children:[Object(p.jsx)("p",{className:"main",children:"No Record Found"}),Object(p.jsx)(s.b,{to:"/",children:Object(p.jsx)(j.a,{variant:"contained",color:"primary",children:"Main Page"})})]})}function T(){var e=Object(c.useQuery)(P),n=e.data,t=e.loading,i=e.error;if(t)return Object(p.jsx)(q,{});if(i)return Object(p.jsx)("div",{children:"An error occurred"});var r=n.vehicleStatus.data.bikes;return r?Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(C,{}),Object(p.jsx)(k,{bikes:r})]}):Object(p.jsx)("div",{children:"No Record Found"})}function M(){return Object(p.jsx)(s.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(T,{})}),Object(p.jsx)(l.a,{path:"/:id",component:A})]})})}var R=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))},E=new c.ApolloClient({uri:"http://localhost:4000/",cache:new c.InMemoryCache});a.a.render(Object(p.jsx)(c.ApolloProvider,{client:E,children:Object(p.jsx)(M,{})}),document.getElementById("root")),R()},55:function(e,n,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.7bc3583c.chunk.js.map