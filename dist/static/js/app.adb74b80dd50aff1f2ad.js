webpackJsonp([1],{"4B2B":function(t,e){},"7zck":function(t,e){},AjvN:function(t,e){},Clri:function(t,e){},Enxt:function(t,e){},M5dy:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={name:"toolbar",link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],data:()=>({user:"",name:"",loggedIn:!1}),methods:{pushCreate(){this.$router.push({name:"Create"})},pushHome(){this.$router.push({name:"Home"})},pushAbout(){this.$router.push({name:"About"})},pushLogin(){this.$router.push({name:"Login"})},pushSettings(){this.$router.push({name:"Settings"})},logout(){this.$cookie.delete("user"),this.loggedIn=!1,location.reload()}},created:function(){let t=this.logged();t?(this.loggedIn=!0,this.user=t,this.name=t.fname):this.name="Log in"},mounted:function(){this.$bus.$on("user",function(t){this.name=t,this.loggedIn=!0}.bind(this))}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-toolbar",{attrs:{id:"bar",dark:""}},[s("v-toolbar-title",{attrs:{id:"title"}},[t._v(" \n    WTF UMass\n  ")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":"","close-on-click":"",close:""}},[s("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[s("v-icon",[t._v("more_vert")])],1),t._v(" "),s("v-list",{attrs:{"offset-y":""}},[s("v-list-tile",{attrs:{flat:""},on:{click:t.pushCreate}},[t._v("Submit a fix")]),t._v(" "),s("v-list-tile",{attrs:{flat:""},on:{click:t.pushHome}},[t._v("Vote on fixes")]),t._v(" "),t.loggedIn?t._e():s("v-list-tile",{attrs:{flat:""},on:{click:t.pushLogin}},[t._v(t._s(t.name))]),t._v(" "),t.loggedIn?s("div",[s("v-list-tile",{on:{click:function(e){t.logout()}}},[s("v-list-tile-title",[t._v("Log Out")])],1),t._v(" "),s("v-list-tile",{on:{click:function(e){t.pushAbout()}}},[s("v-list-tile-title",[t._v("About")])],1)],1):t._e()],1)],1),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{attrs:{flat:""},on:{click:t.pushCreate}},[t._v("Submit a fix")]),t._v(" "),s("v-btn",{attrs:{flat:""},on:{click:t.pushHome}},[t._v("Vote on fixes")]),t._v(" "),t.loggedIn?t._e():s("v-btn",{attrs:{flat:""},on:{click:t.pushLogin}},[t._v(t._s(t.name))]),t._v(" "),t.loggedIn?s("v-menu",{attrs:{"offset-y":"","close-on-click":"","close-on-content-click":"","open-on-hover":""}},[s("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v(t._s(t.name))]),t._v(" "),s("v-list",{attrs:{"offset-y":""}},[s("v-list-tile",{on:{click:function(e){t.logout()}}},[s("v-list-tile-title",[t._v("Log Out")])],1),t._v(" "),s("v-list-tile",{on:{click:function(e){t.pushAbout()}}},[s("v-list-tile-title",[t._v("About")])],1)],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]};var o={name:"app",components:{Toolbar:s("VU/8")(a,r,!1,function(t){s("qu+U")},null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}}),this._v(" "),e("toolbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(o,n,!1,function(t){s("utq8")},null,null).exports,c=s("/ocq"),u=s("3EgV"),d=s.n(u),v=s("K/Lq"),p=s.n(v),h=(s("7zck"),s("mtWM")),m=s.n(h),f={props:["show"],data:()=>({e1:0,visible:!1}),created:function(){this.visible=this.$props.show}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-app",{attrs:{id:"inspire"}},[s("v-dialog",{model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{step:"1",complete:t.e1>1}},[t._v("Vote on Fixes")]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{step:"2",complete:t.e1>2}},[t._v("Submit a Fix")]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{step:"3"}},[t._v("Get Involved!")])],1),t._v(" "),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"mb-5"},[s("p",[t._v("\n                Vote for a fix using the 'Vote for this' button! The tag and progress bar at the top will show the SGA's progress on a project.\n              ")]),t._v(" "),s("v-card",{staticClass:"my-2",attrs:{id:"card"}},[s("v-progress-linear",{staticClass:"my-0",attrs:{value:35,height:"4",color:"red darken-4"}}),t._v(" "),s("v-chip",{attrs:{label:"",id:"maroon","text-color":"white"}},[t._v("Currently working on Project")]),t._v(" "),s("br"),t._v(" "),s("v-card-title",{staticClass:"title",attrs:{"primary-title":""}},[s("div",{attrs:{id:"tag"}},[s("h3",{staticClass:"headline mb-0 tepentatholonxt-xs-left"},[t._v("WTFUMass")]),t._v(" "),s("div",{staticClass:"title mb-0 text-xs-left"},[t._v("39 Votes")])])]),t._v(" "),s("v-card-text",{staticClass:"subheading text-xs-left autoscroll"},[t._v("\n                  A website for UMass Students to submit projects for the Student Government Association to work on\n                ")]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{outline:"",id:"maroon"}},[s("span",[t._v("Vote For This")])])],1)],1)],1),t._v(" "),s("v-btn",{attrs:{outline:"",id:"maroon"},on:{click:function(e){t.e1=2}}},[t._v("Continue")]),t._v(" "),s("v-btn",{attrs:{outline:""},on:{click:function(e){t.visible=!1}}},[t._v("Close")])],1),t._v(" "),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",[s("v-card-text",[t._v(" Submit anything for a fix so it can get voted on by other students! All you need is a title and a description.\n                "),s("br"),t._v(" Got an idea right now? Go submit it at "),s("router-link",{attrs:{to:"Create"}},[t._v(" our create page! ")])],1),t._v(" "),s("v-form",{ref:"createForm",attrs:{id:"form"}},[s("v-text-field",{attrs:{label:"Project Title",placeholder:"WTFUMass",disabled:"",counter:30,required:""}}),t._v(" "),s("v-text-field",{attrs:{label:"Description",placeholder:"A website for UMass Students to submit projects for the Student Government Association to work on",disabled:"",counter:500,"auto-grow":"","multi-line":"",required:""}}),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{outline:"",color:"primary"}},[t._v("Submit")])],1)],1)],1),t._v(" "),s("v-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){t.e1=3}}},[t._v("Continue")]),t._v(" "),s("v-btn",{attrs:{outline:""},on:{click:function(e){t.visible=!1}}},[t._v("Close")])],1),t._v(" "),s("v-stepper-content",{attrs:{step:"3"}},[s("v-card",[s("span",{staticClass:"title"},[t._v(" Thanks for using WTFUMass! ")]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"body-2"},[t._v(" Do you want to get more involved with the fixes on this site? Join the Student Government Association! Email\n                sgaoutreach@umass.edu, or check out our "),s("a",{attrs:{href:"https://umass.edu/sga"}},[t._v(" website")]),t._v(" to learn more! ")]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"caption"},[t._v(" Created by Ryan Mahan "),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/ryanmahan/wtfumass"}},[t._v(" View me on GitHub ")])])]),t._v(" "),s("v-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){t.visible=!1}}},[t._v("Continue")]),t._v(" "),s("v-btn",{attrs:{outline:""},on:{click:function(e){t.visible=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},g={name:"Admin",data:()=>({tags:[{title:"Potential Project"},{title:"Currently Working on Project"},{title:"Project Done!"},{title:"No tag"}],actions:[{title:"Delete",class:"red"},{title:"Reply"}],replyDialog:!1,replyTo:{},reply:""}),methods:{setTag:function(t,e){"No tag"===e&&(e=null),m.a.put("/project/tag/"+t._id,{tag:e}).then(function(s){t.tag=e,"Project Done!"===t.tag?t.bar="100":"Currently Working on Project"===t.tag?t.bar="65":"Potential Project"===t.tag&&(t.bar="35")})},replyfunc:function(){this.replyDialog=!1,m.a.put("/project/reply/"+this.replyTo._id,{value:this.reply}).then(function(t){t.data.success&&(proj.reply=this.reply)})},doAction:function(t,e){"Delete"===e?(m.a.delete("/project/"+t._id),location.reload()):"Reply"==e&&(this.replyTo=t,this.replyDialog=!0)}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("div",{attrs:{id:"adminActions"}},[s("v-menu",{attrs:{"offset-y":"","close-on-click":""}},[s("v-btn",{attrs:{slot:"activator",flat:"",color:"primary"},slot:"activator"},[t._v("Tags")]),t._v(" "),s("v-list",t._l(t.tags,function(e,i){return s("v-list-tile",{key:i,on:{click:function(s){t.setTag(t.project,e.title)}}},[s("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),s("v-menu",{attrs:{"offset-y":"","close-on-click":""}},[s("v-btn",{attrs:{slot:"activator",flat:"",color:"primary"},slot:"activator"},[t._v("Actions")]),t._v(" "),s("v-list",t._l(t.actions,function(e,i){return s("v-list-tile",{key:i,class:e.class,on:{click:function(s){t.doAction(t.project,e.title)}}},[s("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.replyDialog,callback:function(e){t.replyDialog=e},expression:"replyDialog"}},[s("v-card",[s("v-card-title",[t._v("\n        Reply\n      ")]),t._v(" "),s("v-card-text",[s("v-text-field",{attrs:{items:t.select,label:"Reply to project","item-value":"text"},model:{value:t.reply,callback:function(e){t.reply=e},expression:"reply"}})],1),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{id:"maroon",flat:""},on:{click:function(e){e.stopPropagation(),t.replyfunc()}}},[t._v("Reply")])],1)],1)],1)],1)},staticRenderFns:[]};var _={name:"Admin",components:{Tutorial:s("VU/8")(f,b,!1,null,null,null).exports,AdminTools:s("VU/8")(g,k,!1,function(t){s("M5dy")},null,null).exports},data:()=>({projects:[],isAdmin:!1,message:"",snackbar:!1,firstLogin:!1}),methods:{voteUp:function(t){let e=this,s=this.logged();if(!s)return console.log("Clicked!"),this.message="You must be logged in to vote",void(this.snackbar=!0);m.a.put("/project/votes/"+t._id,{user:s}).then(function(s){s.data.success?(t.votes=t.votes+1,t.voted=!0):(e.message="You have already voted for this",e.snackbar=!0)})},pushLogin:function(){this.$router.push({name:"Login"})}},computed:{sortedByVote:function(){return this.projects.sort(function(t,e){return t.votes>e.votes?-1:t.votes<e.votes?1:0})}},created:function(){let t=this,e=this.logged();this.isAdmin=e.isAdmin,m.a.get("/project/").then(function(s){t.projects=s.data,console.log(t.projects),t.projects.forEach(function(t){t.voted=t.votedBy.includes(e._id),null===e&&(t.voted=!0),"Project Done!"===t.tag&&(t.bar=100),"Currently Working on Project"===t.tag&&(t.bar=65),"Potential Project"===t.tag&&(t.bar=35)})}),void 0!==this.$route.params&&this.$route.params.new&&(this.firstLogin=!0)}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"home"}},[s("v-app",{attrs:{id:"cardslist"}},[s("tutorial",{attrs:{show:t.firstLogin}}),t._v(" "),t._l(t.sortedByVote,function(e){return s("v-layout",{key:e._id},[s("v-flex",{attrs:{id:"layout"}},[s("v-card",{staticClass:"my-2",attrs:{id:"card"}},[s("v-progress-linear",{staticClass:"my-0",attrs:{value:e.bar,height:"4",primary:""}}),t._v(" "),null!=e.tag?s("v-chip",{attrs:{label:"",color:"primary","text-color":"white"}},[t._v(t._s(e.tag))]):t._e(),t._v(" "),s("br"),t._v(" "),s("v-card-title",{staticClass:"title",attrs:{"primary-title":""}},[s("div",{attrs:{id:"tag"}},[s("h3",{staticClass:"headline mb-0 tepentatholonxt-xs-left"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"title mb-0 text-xs-left"},[t._v(t._s(e.votes)+" Votes")])])]),t._v(" "),s("v-card-text",{staticClass:"subheading text-xs-left autoscroll"},[t._v("\n                "+t._s(e.description)+"\n                "),e.reply!=t.None?s("div",[s("hr"),t._v(" "),s("h3",[t._v(" SGA Reply ")]),t._v(" "),s("p",[t._v(" "+t._s(e.reply)+" ")])]):t._e()]),t._v(" "),s("v-card-actions",[e.voted?t._e():s("v-btn",{attrs:{outline:"",color:"primary"},nativeOn:{click:function(s){t.voteUp(e)}}},[e.voted?t._e():s("span",[t._v("Vote For This")])]),t._v(" "),e.voted?s("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(s){t.voteUp(e)}}},[e.voted?s("span",{staticClass:"white--text"},[t._v("Voted!")]):t._e()]):t._e(),t._v(" "),t.isAdmin?s("div",{attrs:{id:"adminActions"}},[s("AdminTools")],1):t._e()],1),t._v(" "),s("i",[s("span",{staticClass:"caption left my-0"},[t._v(t._s(e.dateCreated))])])],1)],1)],1)}),t._v(" "),s("v-snackbar",{attrs:{top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.message)+"\n      "),t.message.includes("log")?s("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.pushLogin()}}},[t._v(" Login ")]):t._e(),t._v(" "),s("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1),t._v(" "),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.replyDialog,callback:function(e){t.replyDialog=e},expression:"replyDialog"}},[s("v-card",[s("v-card-title",[t._v("\n            Reply\n          ")]),t._v(" "),s("v-card-text",[s("v-text-field",{attrs:{items:t.select,label:"Reply to project","item-value":"text"},model:{value:t.reply,callback:function(e){t.reply=e},expression:"reply"}})],1),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){e.stopPropagation(),t.replyfunc()}}},[t._v("Reply")])],1)],1)],1)],2)],1)},staticRenderFns:[]};var x=s("VU/8")(_,y,!1,function(t){s("Enxt")},null,null).exports,w=s("L/IX"),C=new(s.n(w).a),T={name:"Create",data:()=>({title:"",description:"",message:"",snackbar:!1}),methods:{submit(t){let e=this,s=this.logged();if(!s)return this.message="You must be logged in to submit a project",void(this.snackbar=!0);this.checkSubmission(this.title,30)&&this.checkSubmission(this.description,500)&&(console.log("sending project"),m.a.post("/project/",{title:this.title,description:this.description,user:s}).then(function(t){e.$router.push({name:"Home"})}))},checkSubmission:function(t,e){return t.length>e?(this.message="Submission length too long",this.snackbar=!0,!1):!C.isProfane(t)||(this.message="Submission contains profanity",this.snackbar=!0,!1)},pushLogin:function(){this.$router.push({name:"Login"})}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"create"},[s("v-app",{attrs:{id:"app"}},[s("v-flex",{attrs:{xs12:"","align-center":"",id:"flex"}},[s("v-card",{attrs:{id:"card"}},[s("span",{staticClass:"headline mb-0 left",attrs:{id:"header"}},[t._v("What to fix?")]),t._v(" "),s("v-form",{ref:"createForm",attrs:{id:"form"}},[s("v-text-field",{attrs:{label:"Project Title",counter:30,required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("v-text-field",{attrs:{label:"Description",counter:500,"auto-grow":"","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{outline:"",color:"primary"},nativeOn:{click:function(e){t.submit()}}},[t._v("Submit")])],1)],1)],1)],1),t._v(" "),s("v-snackbar",{attrs:{top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.message)+"\n      "),t.message.includes("log")?s("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.pushLogin()}}},[t._v(" Login ")]):t._e(),t._v(" "),s("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},staticRenderFns:[]};var S=s("VU/8")(T,P,!1,function(t){s("4B2B")},null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"About"}},[e("v-app",[e("h1",[this._v("What to Fix UMass")]),this._v(" "),e("p",[this._v(" Created by Ryan Mahan '19")]),this._v(" "),e("a",{attrs:{href:"https://github.com/ryanmahan/WTFUMass"}},[this._v(" https://github.com/ryanmahan/WTFUMass ")])])],1)},staticRenderFns:[]};var A=s("VU/8")({},F,!1,function(t){s("AjvN")},null,null).exports,j={name:"Login",data:()=>({username:"",password:"",error:!1}),methods:{submit(t){let e=this;m.a.get("/user/login",{params:{username:e.username,password:e.password}}).then(function(t){t.data.success?(e.$cookie.set("user",JSON.stringify(t.data.doc),"0"),e.$bus.$emit("user",t.data.doc.fname),e.$router.push({name:"Home"})):e.error=!0})}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("v-flex",{attrs:{xs10:"","offset-xs1":"",id:"layout"}},[s("v-card",{attrs:{id:"card"}},[s("span",{staticClass:"headline mb-0 left",attrs:{id:"header"}},[t._v("Login")]),t._v(" "),s("v-form",{ref:"loginForm",attrs:{id:"form"}},[s("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("v-text-field",{attrs:{label:"Password",required:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("v-alert",{attrs:{type:"error",value:t.error,transition:"slide-x-transition"}},[t._v("\n            Error logging in, your username or password may be incorrect.\n        ")]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{outline:"",id:"submitBtn"},nativeOn:{click:function(e){t.submit()}}},[t._v("Login")])],1)],1)],1),t._v(" "),s("p",[t._v(" Dont have an account? "),s("router-link",{attrs:{to:"SignUp"}},[t._v(" Sign up here ")])],1)],1)],1)},staticRenderFns:[]};var U=s("VU/8")(j,I,!1,function(t){s("Vdmm")},null,null).exports,q={data:()=>({username:"",password:"",email:"",cpassword:"",fname:"",vis1:!1,vis2:!1,emailError:!1,usernameError:!1}),methods:{create(t){this.password!==this.cpassword&&alert("Passwords do not match");let e=this;m.a.post("/user/create",{username:e.username,password:e.password,email:e.email,fname:e.fname}).then(function(t){t.data.success?(e.$cookie.set("user",JSON.stringify(t.data.doc)),e.$bus.$emit("user",t.data.doc.fname),e.$router.push({name:"Home",params:{new:!0}})):("username"===t.data.reason&&(e.usernameError=!0),"email"===t.data.reason&&(e.emailError=!0))})}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}}),t._v(" "),s("div",{attrs:{id:"SignUp"}},[s("v-flex",{attrs:{xs10:"","offset-xs1":"",id:"layout"}},[s("v-card",{attrs:{id:"card"}},[s("span",{staticClass:"headline left",attrs:{id:"header"}},[t._v("Sign Up")]),t._v(" "),s("v-form",{ref:"newUserForm",attrs:{id:"form"}},[s("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("v-text-field",{attrs:{label:"Email",hint:"We only send emails when theres an update on your project"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("v-text-field",{attrs:{label:"Password",hint:"THIS SITE STILL IN TESTING, DO NOT USE A REAL PASSWORD",type:t.vis1?"text":"password","append-icon":t.vis1?"visibility":"visibility_off","append-icon-cb":function(){return t.vis1=!t.vis1},required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("v-text-field",{attrs:{label:"Confirm Password",type:t.vis2?"text":"password","append-icon":t.vis2?"visibility":"visibility_off","append-icon-cb":function(){return t.vis2=!t.vis2},required:""},model:{value:t.cpassword,callback:function(e){t.cpassword=e},expression:"cpassword"}}),t._v(" "),s("v-text-field",{attrs:{label:"First Name",required:""},model:{value:t.fname,callback:function(e){t.fname=e},expression:"fname"}}),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{outline:"",id:"submitBtn"},nativeOn:{click:function(e){t.create()}}},[t._v("Sign Up")])],1)],1),t._v(" "),s("v-alert",{attrs:{type:"error",value:t.usernameError,transition:"slide-x-transition"}},[t._v("\n            Username already taken.\n        ")]),t._v(" "),s("v-alert",{attrs:{type:"error",value:t.emailError,transition:"slide-x-transition"}},[t._v("\n            Email is already registered with another account.\n        ")])],1)],1),t._v(" "),s("p",[t._v(" Already have an account? "),s("router-link",{attrs:{to:"Login"}},[t._v(" Log in here ")])],1)],1)])},staticRenderFns:[]};var L=s("VU/8")(q,z,!1,function(t){s("ksny")},null,null).exports,M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"ppHeader"}},[t._v(" Privacy Policy")]),s("div",{attrs:{id:"ppBody"}},[s("div",{staticClass:"ppConsistencies"},[s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("Information Collection")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("Information Usage")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("Information Protection")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("Cookie Usage")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("3rd Party Disclosure")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links text-center"},[t._v("3rd Party Links")])])]),s("div",{staticStyle:{clear:"both",height:"10px"}}),s("div",{staticClass:"ppConsistencies"},[s("div",{staticClass:"col-2"},[s("div",{staticClass:"col-12 quick-links2 gen-text-center"},[t._v("Google AdSense")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"col-12 quick-links2 gen-text-center"},[t._v("                    Fair Information Practices                    "),s("div",{staticClass:"col-8 gen-text-left gen-xs-text-center",staticStyle:{"font-size":"12px",position:"relative",left:"20px"}},[t._v("Fair information"),s("br"),t._v(" Practices")])])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"col-12 quick-links2 gen-text-center coppa-pad"},[t._v("                    COPPA                ")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"col-12 quick-links2 quick4 gen-text-center caloppa-pad"},[t._v("                    CalOPPA                ")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links2 gen-text-center"},[t._v("CAN-SPAM")])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"quick-links2 gen-text-center"},[t._v("Our Contact Information"),s("br")])])]),s("div",{staticStyle:{clear:"both",height:"10px"}}),s("div",{staticClass:"innerText"},[t._v("This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."),s("br")]),s("span",{attrs:{id:"infoCo"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("What personal information do we collect from the people that visit our blog, website or app?")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address  or other details to help you with your experience.")]),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("When do we collect information?")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("We collect information from you when you register on our site, fill out a form or enter information on our site.")]),s("br"),t._v(" "),s("span",{attrs:{id:"infoUs"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("How do we use your information? ")])]),s("br"),s("div",{staticClass:"innerText"},[t._v(" We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:"),s("br"),s("br")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" To improve our website in order to better serve you.")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" To ask for ratings and reviews of services or products")]),s("span",{attrs:{id:"infoPro"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("How do we protect your information?")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("We do not use vulnerability scanning and/or scanning to PCI standards.")]),s("div",{staticClass:"innerText"},[t._v("We only provide articles and information. We never ask for credit card numbers.")]),s("div",{staticClass:"innerText"},[t._v("We do not use Malware Scanning."),s("br"),s("br")]),s("div",{staticClass:"innerText"},[t._v("Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. ")]),s("br"),s("div",{staticClass:"innerText"},[t._v("We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.")]),s("br"),s("div",{staticClass:"innerText"},[t._v("All transactions are processed through a gateway provider and are not stored or processed on our servers.")]),s("span",{attrs:{id:"coUs"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("Do we use 'cookies'?")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.")]),s("div",{staticClass:"innerText"},[s("br"),s("strong",[t._v("We use cookies to:")])]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" Understand and save user's preferences for future visits.")]),s("div",{staticClass:"innerText"},[s("br"),t._v("You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies."),s("br")]),s("div",{staticClass:"innerText"},[s("br"),s("strong",[t._v("If users disable cookies in their browser:")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.")]),s("br"),s("span",{attrs:{id:"trDi"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("Third-party disclosure")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.")]),s("span",{attrs:{id:"trLi"}}),s("br"),s("div",{staticClass:"grayText"},[s("strong",[t._v("Third-party links")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.")]),s("span",{attrs:{id:"gooAd"}}),s("br"),s("div",{staticClass:"blueText"},[s("strong",[t._v("Google")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en "),s("br"),s("br")]),s("div",{staticClass:"innerText"},[t._v("We have not enabled Google AdSense on our site but we may do so in the future.")]),s("span",{attrs:{id:"calOppa"}}),s("br"),s("div",{staticClass:"blueText"},[s("strong",[t._v("California Online Privacy Protection Act")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.  The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. -  See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf"),s("br")]),s("div",{staticClass:"innerText"},[s("br"),s("strong",[t._v("According to CalOPPA, we agree to the following:")]),s("br")]),s("div",{staticClass:"innerText"},[t._v("Users can visit our site anonymously.")]),s("div",{staticClass:"innerText"},[t._v("Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website."),s("br")]),s("div",{staticClass:"innerText"},[t._v("Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.")]),s("div",{staticClass:"innerText"},[s("br"),t._v("You will be notified of any Privacy Policy changes:")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" On our Privacy Policy Page"),s("br")]),s("div",{staticClass:"innerText"},[t._v("Can change your personal information:")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" By logging in to your account")]),s("div",{staticClass:"innerText"},[s("br"),s("strong",[t._v("How does our site handle Do Not Track signals?")]),s("br")]),s("div",{staticClass:"innerText"},[t._v("We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. ")]),s("div",{staticClass:"innerText"},[s("br"),s("strong",[t._v("Does our site allow third-party behavioral tracking?")]),s("br")]),s("div",{staticClass:"innerText"},[t._v("It's also important to note that we do not allow third-party behavioral tracking")]),s("span",{attrs:{id:"coppAct"}}),s("br"),s("div",{staticClass:"blueText"},[s("strong",[t._v("COPPA (Children Online Privacy Protection Act)")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control.  The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online."),s("br"),s("br")]),s("div",{staticClass:"innerText"},[t._v("We do not specifically market to children under the age of 13 years old.")]),s("div",{staticClass:"innerText"},[t._v("Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?")]),s("span",{attrs:{id:"ftcFip"}}),s("br"),s("div",{staticClass:"blueText"},[s("strong",[t._v("Fair Information Practices")])]),s("br"),s("div",{staticClass:"innerText"},[t._v("The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information."),s("br"),s("br")]),s("div",{staticClass:"innerText"},[s("strong",[t._v("In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:")])]),s("div",{staticClass:"innerText"},[t._v("We will notify the users via in-site notification")]),s("div",{staticClass:"innerText"},[t._v("      "),s("strong",[t._v("•")]),t._v(" Within 7 business days")]),s("div",{staticClass:"innerText"},[s("br"),t._v("We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.")])])])}]};var W=s("VU/8")(null,M,!1,function(t){s("Clri")},null,null).exports;i.a.use(c.a),i.a.use(d.a,{theme:{primary:"#800000",secondary:"#d3d3d3",accent:"#748798",error:"#b71c1c"}}),i.a.use(p.a);var $=new c.a({routes:[{component:x,name:"Home",path:"/"},{component:S,name:"Create",path:"/create"},{component:A,name:"About",path:"/about"},{component:U,name:"Login",path:"/login"},{component:L,name:"SignUp",path:"/signup"},{component:W,name:"Privacy",path:"/privacy"}]});i.a.config.productionTip=!1;let E=i.a.mixin({methods:{logged:function(){let t=this.$cookie.get("user");return null!==t&&JSON.parse(t)}}});i.a.prototype.$bus=new i.a,new i.a({el:"#app",router:$,mixins:[E],template:"<App/>",components:{App:l}})},Vdmm:function(t,e){},fUR1:function(t,e){t.exports={words:["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","gay","gayboy","gaygirl","gays","gayz","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lesbian","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","queer","queers","queerz","qweers","qweerz","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","lesbian","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gay","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"]}},ksny:function(t,e){},"qu+U":function(t,e){},utq8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.adb74b80dd50aff1f2ad.js.map