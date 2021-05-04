(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{266:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),s=n.n(c),i=n(20),o=n(64),l=n(165),u=n(320),d=n(78),j=n(22),b=n(6),p=n(316),O=n(166),f=n(13),h=n.n(f),x=n(21),m=n(167),g=n.n(m),v=n(29),y=n.n(v),w=g.a.create({baseURL:"https://smartsani.herokuapp.com/api"});w.interceptors.request.use((function(e){return y.a.get().jwtToken&&(e.headers.Authorization="Bearer ".concat(y.a.get().jwtToken)),e}));var S=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/user/records",{withCredentials:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/user/userData",{withCredentials:!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(x.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.patch("/user/record/".concat(t),n,{withCredentials:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.patch("/user/userData/".concat(t),n,{withCredentials:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.delete("/user/record/".concat(t),{withCredentials:!0}).then(S));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.delete("/user/userData/".concat(t),{withCredentials:!0}).then(E));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/auth/login",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/auth/register",t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/user/userData",t,{withCredentials:!0}).then(E));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){return function(){var e=Object(x.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:n=e.sent,a=n.data,t({type:"FETCHRECORD",payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),"object"===typeof(r=e.t0.response.data.messages)&&(r=r[0]),t({type:"ERRORRECORD",payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:a=t.sent,r=a.data,n({type:"DELETERECORD",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(x.a)(h.a.mark((function t(n){var a,r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:a=t.sent,r=a.data,n({type:"DELETEUSER",payload:r}),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),"object"===typeof(c=t.t0.response.data.messages)&&(c=c[0]),n({type:"ERRORDELETE",payload:c});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},L=n(309),F=n(310),z=n(74),_=n(109),M=n(321),G=n(75),W=n(172),H=n.n(W),B=n(173),Y=n.n(B),V=n(58),q=n.n(V),J=n(121),K=n(42),Q=Object(K.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontWeight:"bold"},user:{marginRight:e.spacing(3)},dbName:{fontSize:"10px",letterSpacing:"0.05em",textTransform:"uppercase"},username:{fontSize:"14px",letterSpacing:"0.05em",textTransform:"uppercase",fontWeight:"bold"},logout:{fontWeight:"bold"}}})),X=n(2),Z=function(){var e=Object(a.useState)(y.a.get("jwtToken")),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({username:n?Object(J.a)(n).user:"",db_id:y.a.get("db_id")}),s=Object(b.a)(c,2),o=s[0],l=s[1],u=Q(),d=Object(i.b)(),p=Object(j.f)(),O=function(){d({type:"LOGOUT"}),p.push("/auth"),l(null)};return Object(a.useEffect)((function(){n?1e3*Object(J.a)(n).exp<q.a.now()&&O():O();r(y.a.get("jwtToken"))}),[]),Object(X.jsx)("div",{className:u.root,children:Object(X.jsx)(L.a,{position:"static",children:Object(X.jsxs)(F.a,{children:[Object(X.jsx)(z.a,{edge:"start",className:u.menuButton,color:"inherit","aria-label":"menu",children:Object(X.jsx)(H.a,{})}),Object(X.jsx)(_.a,{variant:"h6",className:u.title,children:"Dashboard"}),Object(X.jsxs)(M.a,{display:"flex",justifyContent:"flex-start",className:u.user,flexDirection:"column",children:[Object(X.jsx)(_.a,{className:u.username,children:o?o.username:""}),Object(X.jsx)(_.a,{className:u.dbName,children:o?o.db_id:""})]}),Object(X.jsx)(G.a,{color:"inherit",className:u.logout,startIcon:Object(X.jsx)(Y.a,{}),onClick:O,children:"Logout"})]})})})},$=n(326),ee=n(126),te=n(57),ne=n(105),ae=n.n(ne),re=n(106),ce=n.n(re),se=n(175),ie=n.n(se),oe=n(176),le=n.n(oe),ue=n(17),de=n(323),je=n(313),be=n(314),pe=n(315),Oe=n(191),fe=n(317),he=n(325),xe=n(104),me=n.n(xe),ge=function(e){var t=e.isEdit,n=e.isSuccess,c=e.setIsSuccess,s=Object(a.useState)(!1),i=Object(b.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){n&&u()}),[n]);var u=function(){l(!0)},d=function(e,t){"clickaway"!==t&&(l(!1),c(!1))};return Object(X.jsx)("div",{children:Object(X.jsx)(he.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:3e3,onClose:d,message:t?"Data sucessfully updated":"Data sucessfully deleted",action:Object(X.jsx)(r.a.Fragment,{children:Object(X.jsx)(z.a,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:Object(X.jsx)(me.a,{fontSize:"small"})})})})})},ve=function(e){var t=e.isOpen,n=e.handleClose,r=e.isEdit,c=e.currentId,s=Object(a.useState)(!1),o=Object(b.a)(s,2),l=o[0],u=o[1],d=Object(a.useState)(!1),j=Object(b.a)(d,2),O=j[0],f=j[1],m=Object(a.useState)({uid:"",userData:{name:""},temperature:""}),g=Object(b.a)(m,2),v=g[0],y=g[1],w=Object(i.c)((function(e){return c?e.records.find((function(e){return e._id===c})):null})),S=Object(i.b)();Object(a.useEffect)((function(){w&&y(w),u(!!t)}),[w,t]);return Object(X.jsxs)("div",{children:[Object(X.jsx)(ge,{isEdit:r,isSuccess:O,setIsSuccess:f}),Object(X.jsxs)(de.a,{open:l,onClose:n,children:[Object(X.jsx)(je.a,{id:"alert-dialog-title",children:Object(X.jsx)(_.a,{align:"center",children:r?"Edit Record":"Delete Record"})}),Object(X.jsxs)(be.a,{children:[Object(X.jsx)(pe.a,{id:"alert-dialog-description",children:!r&&"Are you sure want to delete this record ?"}),r&&Object(X.jsxs)(p.a,{container:!0,spacing:2,direction:"column",children:[Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Oe.a,{disabled:!0,value:v.uid,variant:"outlined",label:"UID"})}),Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Oe.a,{disabled:!0,value:v.userData?v.userData.name:"",variant:"outlined",label:"Name"})}),Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Oe.a,{variant:"outlined",value:v.temperature,onChange:function(e){return y(Object(ue.a)(Object(ue.a)({},v),{},{temperature:e.target.value}))},type:"number",label:"Temperature"})})]})]}),Object(X.jsxs)(fe.a,{children:[Object(X.jsx)(G.a,{onClick:n,variant:"contained",color:r?"secondary":"primary",children:"No"}),Object(X.jsx)(G.a,{variant:"contained",onClick:function(){S(r?function(e,t){return function(){var n=Object(x.a)(h.a.mark((function n(a){var r,c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATERECORD",payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(c,v):P(c)),f(!0),n()},color:r?"primary":"secondary",autoFocus:!0,children:"Yes"})]})]})]})},ye=function(e){var t=e.handleDelete,n=e.selected;return Object(X.jsx)(te.d,{children:Object(X.jsxs)(p.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(X.jsx)(te.c,{}),n.length?Object(X.jsx)(G.a,{size:"small",variant:"contained",disableElevation:!0,color:"secondary",onClick:t,children:"Delete"}):Object(X.jsx)(X.Fragment,{})]})})},we=n(274),Se=function(){return Object(X.jsx)(te.b,{children:Object(X.jsx)("div",{style:{position:"absolute"},children:Object(X.jsx)(we.a,{})})})},Ee=function(e){var t,n,r=e.currentId,c=e.setCurrentId,s=e.selectedId,o=e.setSelectedId,l=Object(i.b)(),u=Object(a.useState)(!1),d=Object(b.a)(u,2),j=d[0],p=d[1],O=Object(a.useState)(!0),f=Object(b.a)(O,2),h=f[0],x=f[1],m=Object(a.useState)(!0),g=Object(b.a)(m,2),v=g[0],y=g[1],w=Object(i.c)((function(e){return e.records}));Object(a.useEffect)((function(){if(!w.length)return y(!0);y(!1)}),[w]),t=w.filter((function(e){return null!=e.userData})).map((function(e){var t={};return t.id=e._id,t.uid=e.uid,t.name=e.userData?e.userData.name:"",t.temperature=e.temperature,t.status=e.status,t.createdAt=q()(e.createdAt).format("M/D/YYYY LT"),t.action="",t})),n=[{field:"id",headerName:"id",hide:!0},{field:"uid",headerName:"UID",width:120},{field:"name",headerName:"Name",flex:1},{field:"temperature",headerName:"Temp",width:100},{field:"status",headerName:"Status",width:100,renderCell:function(e){return Object(X.jsx)($.a,{color:"Ok"===e.value?"primary":"secondary",label:e.value,icon:"Ok"===e.value?Object(X.jsx)(ie.a,{}):Object(X.jsx)(le.a,{}),size:"small"})}},{field:"createdAt",headerName:"Time In",width:200,type:"dateTime"},{field:"action",headerName:"Action",width:150,sortable:!1,disableClickEventBubbling:!0,renderCell:function(e){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(z.a,{color:"primary",onClick:function(t){S(e.getValue("id"))},children:Object(X.jsx)(ae.a,{})}),Object(X.jsx)(z.a,{color:"secondary",onClick:function(t){return E(e.getValue("id"))},children:Object(X.jsx)(ce.a,{})})]})}}];var S=function(e){c(e),x(!0),p(!0)},E=function(e){c(e),x(!1),p(!0)};return Object(X.jsxs)("div",{children:[Object(X.jsx)(ve,{isOpen:j,handleClose:function(){p(!1)},isEdit:h,currentId:r}),Object(X.jsx)(ee.a,{elevation:0,children:Object(X.jsx)("div",{style:{display:"flex",height:"100%"},children:Object(X.jsx)("div",{style:{flexGrow:1},children:Object(X.jsx)(te.a,{autoHeight:!0,pageSize:5,rows:t,columns:n,components:{Toolbar:ye,LoadingOverlay:Se},componentsProps:{toolbar:{handleDelete:function(){s.map((function(e){return l(P(e))})),o([])},selected:s}},sortModel:[{field:"createdAt",sort:"desc"}],loading:v,checkboxSelection:!0,onSelectionModelChange:function(e){return function(e){var t=e.selectionModel;o(t)}(e)}})})})})]})},Ce=function(e){var t=e.isEdit,n=e.isSuccess,c=e.setIsSuccess,s=Object(a.useState)(!1),i=Object(b.a)(s,2),o=i[0],l=i[1];Object(a.useEffect)((function(){n&&u()}),[n]);var u=function(){l(!0)},d=function(e,t){"clickaway"!==t&&(l(!1),c(!1))};return Object(X.jsx)("div",{children:Object(X.jsx)(he.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:3e3,onClose:d,message:t?"Data sucessfully updated":"Data sucessfully deleted",action:Object(X.jsx)(r.a.Fragment,{children:Object(X.jsx)(z.a,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:Object(X.jsx)(me.a,{fontSize:"small"})})})})})},ke=function(e){var t=e.isOpen,n=e.handleClose,r=e.isEdit,c=e.currentId,s=e.checked,o=Object(a.useState)(!1),l=Object(b.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(!1),O=Object(b.a)(j,2),f=O[0],m=O[1],g=Object(a.useState)({uid:"",name:""}),v=Object(b.a)(g,2),y=v[0],w=v[1],S=Object(i.c)((function(e){return c?e.users.find((function(e){return e._id===c})):null})),E=Object(i.b)();Object(a.useEffect)((function(){S&&w(S),d(!!t)}),[S,t,s]);return Object(X.jsxs)("div",{children:[Object(X.jsx)(Ce,{isEdit:r,isSuccess:f,setIsSuccess:m}),Object(X.jsxs)(de.a,{open:u,onClose:n,children:[Object(X.jsx)(je.a,{id:"alert-dialog-title",children:Object(X.jsx)(_.a,{align:"center",children:r?"Edit userdata":"Delete userdata"})}),Object(X.jsxs)(be.a,{children:[Object(X.jsx)(pe.a,{id:"alert-dialog-description",children:!r&&"Are you sure want to delete this userdata ?"}),r&&Object(X.jsx)("form",{style:{paddingBottom:"20px"},children:Object(X.jsxs)(p.a,{container:!0,spacing:2,direction:"column",children:[Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Oe.a,{disabled:!0,value:y?y.uid:"",variant:"outlined",label:"UID"})}),Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Oe.a,{value:y?y.name:"",onChange:function(e){return w(Object(ue.a)(Object(ue.a)({},y),{},{name:e.target.value}))},variant:"outlined",label:"Name"})})]})})]}),Object(X.jsxs)(fe.a,{children:[Object(X.jsx)(G.a,{onClick:n,variant:"contained",color:r?"secondary":"primary",children:"No"}),Object(X.jsx)(G.a,{variant:"contained",onClick:function(){E(r?function(e,t){return function(){var n=Object(x.a)(h.a.mark((function n(a){var r,c,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,k(e,t);case 3:r=n.sent,c=r.data,a({type:"UPDATEUSER",payload:c}),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),"object"===typeof(s=n.t0.response.data.messages)&&(s=s[0]),a({type:"ERRORUPDATE",payload:s});case 13:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(c,y):A(c)),m(!0),n()},color:r?"primary":"secondary",autoFocus:!0,children:"Yes"})]})]})]})},De=function(e){var t,n,r=e.currentId,c=e.setCurrentId,s=e.selectedId,o=e.setSelectedId,l=Object(i.b)(),u=Object(a.useState)(!1),d=Object(b.a)(u,2),j=d[0],p=d[1],O=Object(a.useState)(!0),f=Object(b.a)(O,2),h=f[0],x=f[1],m=Object(a.useState)(!0),g=Object(b.a)(m,2),v=g[0],y=g[1],w=Object(i.c)((function(e){return e.users}));Object(a.useEffect)((function(){if(!w.length)return y(!0);y(!1)}),[w]),t=w.map((function(e){var t={};return t.id=e.id,t.uid=e.uid,t.name=e.name,t})),n=[{field:"id",headerName:"id",hide:!0},{field:"uid",headerName:"UID",flex:1},{field:"name",headerName:"Name",flex:1},{field:"action",headerName:"Action",width:150,sortable:!1,disableClickEventBubbling:!0,renderCell:function(e){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(z.a,{color:"primary",onClick:function(t){S(e.getValue("id"))},children:Object(X.jsx)(ae.a,{})}),Object(X.jsx)(z.a,{color:"secondary",onClick:function(t){return E(e.getValue("id"))},children:Object(X.jsx)(ce.a,{})})]})}}];var S=function(e){c(e),x(!0),p(!0)},E=function(e){c(e),x(!1),p(!0)};return Object(X.jsxs)("div",{children:[Object(X.jsx)(ke,{isOpen:j,handleClose:function(){p(!1)},isEdit:h,currentId:r}),Object(X.jsx)(ee.a,{elevation:0,children:Object(X.jsx)("div",{style:{display:"flex",height:"100%"},children:Object(X.jsx)("div",{style:{flexGrow:1},children:Object(X.jsx)(te.a,{autoHeight:!0,pageSize:5,rows:t,columns:n,components:{Toolbar:ye,LoadingOverlay:Se},componentsProps:{toolbar:{handleDelete:function(){s.map((function(e){return l(A(e))})),o([])},selected:s}},sortModel:[{field:"name",sort:"asc"}],checkboxSelection:!0,onSelectionModelChange:function(e){return function(e){var t=e.selectionModel;o(t)}(e)},loading:v})})})})]})},Re=n(177),Ie=n.n(Re),Ne=Object(K.a)((function(e){return{title:{fontSize:32,fontWeight:600},infoCard:{width:"150px",height:"75px",marginLeft:e.spacing(1.5),marginBottom:e.spacing(2),marginTop:e.spacing(1)},cardIcon:{fontSize:48,marginRight:e.spacing(2)},info:{fontSize:16,fontWeight:100,lineHeight:1.5,letterSpacing:"0.05em"},toggledata:{marginLeft:e.spacing(2),marginTop:e.spacing(2),marginBottom:e.spacing(2),marginRight:e.spacing(2)}}})),Te=function(){var e=Object(a.useState)(q()().format("LTS")),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(q()().format("MMM, D")),s=Object(b.a)(c,2),i=s[0],o=s[1],l=Ne();return Object(a.useEffect)((function(){var e=setInterval((function(){r(q()().format("LTS")),o(q()().format("MMM, D"))}),1e3);return function(){return clearInterval(e)}}),[]),Object(X.jsx)(ee.a,{variant:"outlined",children:Object(X.jsxs)(M.a,{display:"flex",alignItems:"center",children:[Object(X.jsxs)(M.a,{display:"flex",className:l.infoCard,justifyContent:"flex-start",flexDirection:"column",children:[Object(X.jsx)(_.a,{className:l.title,children:i}),Object(X.jsx)(_.a,{className:l.info,color:"textSecondary",children:n})]}),Object(X.jsx)(Ie.a,{className:l.cardIcon})]})})},Ue=n(272),Pe=n(318),Ae=n(311),Le=n(178),Fe=n.n(Le),ze=function(e){var t=e.checked,n=e.setChecked,r=Ne(),c=Object(a.useState)(null),s=Object(b.a)(c,2),o=s[0],l=s[1],u=Object(i.b)();return Object(X.jsx)(ee.a,{variant:"outlined",children:Object(X.jsxs)(M.a,{display:"flex",className:r.toggledata,justifyContent:"flex-start",flexDirection:"column",children:[Object(X.jsx)(_.a,{variant:"overline",children:"Toggle User Data"}),Object(X.jsx)(Ue.a,{checked:t,onChange:function(e){n(!t)},color:"primary",name:"checkedA"}),t&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Pe.a,{}),Object(X.jsxs)("div",{style:{display:"flex",flexDirection:"column",paddingTop:"5px"},children:[Object(X.jsx)(_.a,{variant:"overline",children:"Upload User data"}),Object(X.jsx)(Ae.a,{onChange:function(e){return l(e.target.files[0])},accept:".csv",type:"file",endAdornment:Object(X.jsx)(z.a,{onClick:function(){if(o){var e,t=new FormData;t.append("data",o,o.name),u((e=t,function(){var t=Object(x.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T(e);case 3:a=t.sent,r=a.data,n({type:"UPLOADUSER",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))}},size:"small",color:"primary",children:Object(X.jsx)(Fe.a,{})})})]})]})]})})},_e=function(e){var t=e.message,n=e.open,a=e.setOpen,r=function(){a(!1)};return Object(X.jsx)("div",{children:Object(X.jsxs)(de.a,{open:n,onClose:r,maxWidth:"sm",children:[Object(X.jsx)(je.a,{id:"alert-dialog-title",children:"Alert"}),Object(X.jsx)(be.a,{children:Object(X.jsx)(pe.a,{id:"alert-dialog-description",children:t})}),Object(X.jsx)(fe.a,{children:Object(X.jsx)(G.a,{variant:"contained",onClick:r,color:"primary",autoFocus:!0,children:"Ok"})})]})})},Me=n(179),Ge=n.n(Me),We=function(e){var t=e.logged,n=Ne();return Object(X.jsx)("div",{children:Object(X.jsx)(ee.a,{style:{backgroundColor:"#a5d6a7"},variant:"outlined",children:Object(X.jsxs)(M.a,{display:"flex",alignItems:"center",children:[Object(X.jsxs)(M.a,{display:"flex",className:n.infoCard,justifyContent:"flex-start",flexDirection:"column",children:[Object(X.jsx)(_.a,{className:n.title,children:t}),Object(X.jsx)(_.a,{className:n.info,color:"textSecondary",children:"User Logged"})]}),Object(X.jsx)(Ge.a,{className:n.cardIcon})]})})})},He=n(180),Be=n.n(He),Ye=function(e){var t=e.warning,n=Ne();return Object(X.jsx)("div",{children:Object(X.jsx)(ee.a,{style:{backgroundColor:"#ffee58"},variant:"outlined",children:Object(X.jsxs)(M.a,{display:"flex",alignItems:"center",children:[Object(X.jsxs)(M.a,{display:"flex",className:n.infoCard,justifyContent:"flex-start",flexDirection:"column",children:[Object(X.jsx)(_.a,{className:n.title,children:t}),Object(X.jsx)(_.a,{className:n.info,color:"textSecondary",children:"User Warning"})]}),Object(X.jsx)(Be.a,{className:n.cardIcon})]})})})},Ve=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(null),d=Object(b.a)(u,2),j=d[0],f=d[1],m=Object(a.useState)([]),g=Object(b.a)(m,2),v=g[0],y=g[1],w=Object(a.useState)(!1),S=Object(b.a)(w,2),C=S[0],k=S[1],D=Object(a.useState)(0),R=Object(b.a)(D,2),I=R[0],N=R[1],T=Object(a.useState)(0),P=Object(b.a)(T,2),A=P[0],L=P[1],F=Object(i.b)();return Object(a.useEffect)((function(){var e=Object(O.io)("https://smartsani.herokuapp.com/");e.emit("albertque"),e.on("userLogged",(function(){F(U()),L((function(e){return e+1}))})),e.on("warning",(function(e){F(U()),r(!0),l(e.message),N((function(e){return e+1}))})),F(function(){var e=Object(x.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:n=e.sent,a=n.data,t({type:"FETCHUSER",payload:a}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),"object"===typeof(r=e.t0.response.data.messages)&&(r=r[0]),t({type:"ERRORUSER",payload:r});case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),F(U()),e.disconnect()}),[F,j,C]),Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsx)(_e,{open:n,setOpen:r,message:o}),Object(X.jsxs)("div",{style:{paddingTop:"20px"},children:[Object(X.jsxs)(p.a,{container:!0,justify:"center",alignItems:"center",spacing:3,children:[Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(We,{logged:A})}),Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Ye,{warning:I})}),Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(Te,{})})]}),Object(X.jsx)("div",{style:{paddingTop:"20px"},children:Object(X.jsxs)(p.a,{container:!0,justify:"center",alignItems:"flex-start",spacing:2,children:[Object(X.jsx)(p.a,{item:!0,sm:12,xs:12,lg:3,children:Object(X.jsx)(ze,{checked:C,setChecked:k})}),Object(X.jsx)(p.a,{item:!0,sm:12,xs:12,lg:!0,children:C?Object(X.jsx)(De,{currentId:j,setCurrentId:f,selectedId:v,setSelectedId:y}):Object(X.jsx)(Ee,{currentId:j,setCurrentId:f,selectedId:v,setSelectedId:y})})]})})]})]})},qe=n(59),Je=n(186),Ke=Object(K.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},title:{textTransform:"uppercase",fontWeight:"bold"}}})),Qe=n(319),Xe=n(181),Ze=n.n(Xe),$e=n(182),et=n.n($e),tt=function(e){var t=e.name,n=e.handleChange,a=e.autofocus,r=e.label,c=e.type,s=(e.error,e.handleShowPassword);return Object(X.jsx)(p.a,{item:!0,xs:12,children:Object(X.jsx)(Oe.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:r,autoFocus:a,type:c,InputProps:"password"===t?{endAdornment:Object(X.jsx)(Qe.a,{position:"end",children:Object(X.jsx)(z.a,{onClick:s,children:"password"===c?Object(X.jsx)(Ze.a,{}):Object(X.jsx)(et.a,{})})})}:null})})},nt=function(){var e=Object(a.useState)({username:"",password:"",confirmPassword:"",db_id:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(b.a)(c,2),o=s[0],l=s[1],d=Object(a.useState)(!1),O=Object(b.a)(d,2),f=O[0],m=O[1],g=Ke(),v=Object(i.b)(),y=Object(j.f)(),w=function(e){r(Object(ue.a)(Object(ue.a)({},n),{},Object(qe.a)({},e.target.name,e.target.value)))};return Object(X.jsx)("div",{children:Object(X.jsx)(Je.a,{in:!0,timeout:1e3,children:Object(X.jsx)(u.a,{component:"main",maxWidth:"xs",children:Object(X.jsxs)(ee.a,{className:g.paper,elevation:3,children:[Object(X.jsx)(_.a,{className:g.title,variant:"h4",children:f?"sign up":"sign in"}),Object(X.jsxs)("form",{autoComplete:"off",className:g.form,onSubmit:function(e){e.preventDefault(),v(f?function(e,t){return function(){var n=Object(x.a)(h.a.mark((function n(a){var r,c,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N(e);case 3:r=n.sent,c=r.data,a({type:"SIGNUP",payload:c}),t.push("/"),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),"object"===typeof(s=n.t0.response.data.messages)&&(s=s[0]),a({type:"ERRORSIGNUP",payload:s});case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,y):function(e,t){return function(){var n=Object(x.a)(h.a.mark((function n(a){var r,c,s;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I(e);case 3:r=n.sent,c=r.data,a({type:"SIGNIN",payload:c}),t.push("/"),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),"object"===typeof(s=n.t0.response.data.messages)&&(s=s[0]),a({type:"ERRORSIGNIN",payload:s});case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(n,y))},children:[Object(X.jsxs)(p.a,{container:!0,spacing:2,children:[Object(X.jsx)(tt,{name:"username",label:"Username",handleChange:w,autoFocus:!0}),f&&Object(X.jsx)(tt,{name:"db_id",label:"Database ID",handleChange:w}),Object(X.jsx)(tt,{name:"password",label:"Password",handleChange:w,type:o?"text":"password",handleShowPassword:function(){return l((function(e){return!e}))}})]}),Object(X.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit,children:f?"Sign Up":"Sign In"}),Object(X.jsx)(p.a,{container:!0,justify:"flex-end",children:Object(X.jsx)(p.a,{item:!0,children:Object(X.jsx)(G.a,{onClick:function(){m((function(e){return!e})),l(!1)},children:f?"Have an account? Sign In":"Don't have an account? Sign Up"})})})]})]})})})})},at=Object(K.a)((function(e){return{title:{fontSize:"25px"}}})),rt=function(){var e=at();return Object(X.jsx)(u.a,{fixed:!0,maxWidth:"lg",children:Object(X.jsx)(ee.a,{children:Object(X.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column"},children:[Object(X.jsx)(_.a,{align:"center",variant:"h1",children:"404"}),Object(X.jsx)(_.a,{align:"center",className:e.title,variant:"overline",children:"Page Not Found"}),Object(X.jsx)(G.a,{component:d.b,to:"/",variant:"outlined",children:"Back To Home"})]})})})},ct=function(){return Object(X.jsx)(d.a,{children:Object(X.jsx)(u.a,{maxWidth:"lg",children:Object(X.jsxs)(j.c,{children:[Object(X.jsx)(j.a,{path:"/",exact:!0,component:Ve}),Object(X.jsx)(j.a,{path:"/auth",exact:!0,component:nt}),Object(X.jsx)(j.a,{path:"*",children:Object(X.jsx)(rt,{})})]})})})},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHRECORD":return t.payload;case"UPDATERECORD":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETERECORD":return t.payload;case"ERRORRECORD":return[];default:return e}},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHUSER":return t.payload;case"UPDATEUSER":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETEUSER":case"UPLOADUSER":return t.payload;case"ERRORUSER":return[];default:return e}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNIN":case"SIGNUP":return y.a.set("db_id",t.payload.db_id,{path:"/",secure:!0,sameSite:"none"}),y.a.set("jwtToken",t.payload.jwtToken,{path:"/",secure:!0,sameSite:"none"}),Object(ue.a)(Object(ue.a)({},e),{},{authData:t.payload});case"LOGOUT":return y.a.remove("db_id",{path:"/",secure:!0,sameSite:"none"}),y.a.remove("jwtToken",{path:"/",secure:!0,sameSite:"none"}),Object(ue.a)(Object(ue.a)({},e),{},{authData:null});default:return e}},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"",msg:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERRORSIGNIN":if(t.payload.includes("Password"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"signin",msg:"Password"});if(t.payload.includes("Document"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"signin",msg:"Username"});break;case"ERRORSIGNUP":if(t.payload.includes("Password"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"signup",msg:"Password"});if(t.payload.includes("Username"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"signup",msg:"Username"});break;case"ERRORUPDATE":if(t.payload.includes("id"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"update",msg:"id"});break;case"ERRORDELETE":if(t.payload.includes("id"))return Object(ue.a)(Object(ue.a)({},e),{},{type:"delete",msg:"id"});break;default:return null}},ut=Object(o.c)({records:st,users:it,auths:ot,errors:lt}),dt=Object(o.e)(ut,Object(o.d)(Object(o.a)(l.a)));s.a.render(Object(X.jsx)(i.a,{store:dt,children:Object(X.jsx)(ct,{})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.8b5055ba.chunk.js.map