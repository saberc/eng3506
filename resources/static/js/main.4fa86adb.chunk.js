(window["webpackJsonproom-form-widget"]=window["webpackJsonproom-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Room successfully saved","dataDeleted":"Room successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"room":{"deleteDialog":{"title":"Delete room","description":"Are you sure?"},"notFound":"Room not found","deleted":"Room deleted","id":"entities.room.id","name":"entities.room.name","dim":"entities.room.dim"}}}')},160:function(e,t,n){e.exports=n(281)},281:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),i=n(12),o=n(6),c=n(11),s=n(79),l=n(40),u=n(0),d=n.n(u),m=n(13),f=n.n(m),p=n(127),h=n.n(p),b=n(330),v=n(334),O=n(328),y=n(148),k=n(18),g=d.a.createContext(null),E=n(47),j=n(92),w=n(39),C={en:n(137)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.room.".concat(n))})}}};E.c(t)}(P)},U=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},R={tableAdd:"room.table.add",tableSelect:"room.table.select"},N={create:"room.form.create",update:"room.form.update",errorCreate:"room.form.errorCreate",errorUpdate:"room.form.errorUpdate"},F=n(15),T=n.n(F),A=n(26),M=n(20),z=n(3),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(149));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(g.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},K=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},q=function(){var e=Object(A.a)(T.a.mark((function e(t,n){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=Object(A.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/rooms","/").concat(n),r=V({},K(),{method:"GET"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(A.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/rooms"),r=V({},K(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(A.a)(T.a.mark((function e(t,n,a){var r,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/").concat("api/rooms","/").concat(n),i=V({},K(),{method:"PUT",body:a?JSON.stringify(a):null}),e.abrupt("return",q(r,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),X=function(){var e=Object(A.a)(T.a.mark((function e(t,n){var a,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/rooms","/").concat(n),r=V({},K(),{method:"DELETE"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(4),$=n(333),_=n(320),ee=n(316),te=n(5),ne=n(321),ae=n(139),re=n.n(ae),ie=n(140),oe=n.n(ie),ce=n(138),se=n.n(ce),le=n(141),ue=n.n(le),de={success:se.a,error:re.a,info:oe.a},me={success:3e3,error:null,info:5e3},fe=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=de[s],u=me[s],m=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(Z.a)(a.icon,a.iconStatus)}),i);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(_.a,{className:Object(Z.a)(a[s],n),message:m,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};fe.SUCCESS="success",fe.ERROR="error",fe.defaultProps={message:null,className:"",status:fe.INFO="info",onClose:function(){}};var pe=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(fe),he=(L.a.shape({id:L.a.number,name:L.a.string,dim:L.a.number}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.number]),name:L.a.string,dim:L.a.oneOfType([L.a.string,L.a.number])}),L.a.shape({id:L.a.oneOfType([L.a.bool,L.a.shape()]),name:L.a.oneOfType([L.a.bool,L.a.shape()]),dim:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.shape()]),name:L.a.oneOfType([L.a.string,L.a.shape()]),dim:L.a.oneOfType([L.a.string,L.a.shape()])}),n(147)),be=n(150),ve=n(326),Oe=n(327),ye=n(329),ke=n(332),ge=n(325),Ee=n(323),je=n(324),we=n(322),Ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(we.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Ee.a,null,d.a.createElement(je.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(ge.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Ce.CONFIRM="CONFIRM",Ce.DISCARD="DISCARD";var Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ce.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,i=e.handleChange,o=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,m=e.t,f=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"room-form"},d.a.createElement(Oe.a,{container:!0,spacing:2},d.a.createElement("input",{type:"hidden",id:"room-id","data-testid":"room-id",value:n.id}),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"room-name",error:r.name&&a.name,helperText:f("name"),className:t.textField,onChange:i,onBlur:o,value:n.name,name:"name",label:m("entities.room.name")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ye.a,{id:"room-dim",error:r.dim&&a.dim,helperText:f("dim"),className:t.textField,type:"number",onChange:i,onBlur:o,value:n.dim,name:"dim",label:m("entities.room.dim")})),s&&d.a.createElement(Ce,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:m("entities.room.deleteDialog.title"),description:m("entities.room.deleteDialog.description"),confirmLabel:m("common.yes"),discardLabel:m("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:u},m("common.delete"))}}),d.a.createElement(ve.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},m("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},m("common.save"))))}}]),t}(u.PureComponent);Se.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var De={id:"",name:"",dim:""},Pe={mapPropsToValues:function(e){return e.room||De},enableReinitialize:!0,validationSchema:E.b().shape({id:E.a(),name:E.d(),dim:E.a()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"RoomForm"},xe=Object(be.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(he.a)(Pe))(Se),Ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(A.a)(T.a.mark((function e(){var t,n,a,r,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(r,a);case 6:i=e.sent,this.setState((function(){return{room:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t.id,t);case 6:c=e.sent,r(c),this.setState({room:c,notificationMessage:a("common.dataSaved"),notificationStatus:pe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a,r,i,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:r(t),this.setState({room:null,notificationMessage:a("common.dataDeleted"),notificationStatus:pe.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:pe.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.room;return e="undefined"===typeof s?r("entities.room.notFound"):null===s?r("entities.room.deleted"):d.a.createElement(xe,{room:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(pe,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ue.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Re=H(Object(w.b)()(Ue)),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a,r,i,o,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:pe.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:pe.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(xe,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(pe,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ne.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Fe=H(Object(w.b)()(Ne));function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){return window&&window.entando&&window.entando.keycloak&&Ae({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},ze={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Le=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Me(),n.onCreate=U(N.create),n.onCancelEditing=U(N.cancelEditing),n.onDelete=U(N.delete),n.onUpdate=U(N.update),n.onErrorCreate=U(N.errorCreate),n.onErrorUpdate=U(N.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(ze).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===ze.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(k.b)(Ae({},Object(b.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Ae({},Me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Ae({},Me(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),h()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=R.tableAdd,a=R.cancelEditing,r=R.create,i=R.edit,o=R.delete,c=R.tableSelect,s=R.update,l=ze.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(ze.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(R),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(ze.serviceUrl)||"";if("true"===this.getAttribute(ze.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(ze.locale);x(t);var n=this.getAttribute(ze.id),a=n?d.a.createElement(Re,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Fe,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(g.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(ze)}}]),t}(Object(s.a)(HTMLElement));customElements.define("room-form",Le)}},[[160,1,2]]]);
//# sourceMappingURL=main.4fa86adb.chunk.js.map