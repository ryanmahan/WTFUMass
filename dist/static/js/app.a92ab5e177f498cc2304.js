webpackJsonp([1],{"7zck":function(t,e){},B9LJ:function(t,e){},Clri:function(t,e){},IX5X:function(t,e){},KSf0:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),o={name:"toolbar",link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],data:()=>({user:"",name:"",loggedIn:!1}),methods:{pushCreate(){this.$router.push({name:"Create"})},pushHome(){this.$router.push({name:"Home"})},pushAbout(){this.$router.push({name:"About"})},pushLogin(){this.$router.push({name:"Login"})},pushSettings(){this.$router.push({name:"Settings"})},logout(){this.$cookie.delete("user"),this.loggedIn=!1,location.reload()}},created:function(){let t=this.logged();t?(this.loggedIn=!0,this.user=t,this.name=t.fname):this.name="Log in"}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{id:"bar",dark:""}},[i("v-toolbar-title",{attrs:{id:"title"}},[t._v(" \n    WTF UMass\n  ")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":"","close-on-click":"",close:""}},[i("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),t._v(" "),i("v-list",{attrs:{"offset-y":""}},[i("v-list-tile",{attrs:{flat:""},on:{click:t.pushCreate}},[t._v("Submit a fix")]),t._v(" "),i("v-list-tile",{attrs:{flat:""},on:{click:t.pushHome}},[t._v("Vote on fixes")]),t._v(" "),t.loggedIn?t._e():i("v-list-tile",{attrs:{flat:""},on:{click:t.pushLogin}},[t._v(t._s(t.name))]),t._v(" "),t.loggedIn?i("div",[i("v-list-tile",{on:{click:function(e){t.logout()}}},[i("v-list-tile-title",[t._v("Log Out")])],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.pushSettings()}}},[i("v-list-tile-title",[t._v("Settings")])],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.pushAbout()}}},[i("v-list-tile-title",[t._v("About")])],1)],1):t._e()],1)],1),t._v(" "),i("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[i("v-btn",{attrs:{flat:""},on:{click:t.pushCreate}},[t._v("Submit a fix")]),t._v(" "),i("v-btn",{attrs:{flat:""},on:{click:t.pushHome}},[t._v("Vote on fixes")]),t._v(" "),t.loggedIn?t._e():i("v-btn",{attrs:{flat:""},on:{click:t.pushLogin}},[t._v(t._s(t.name))]),t._v(" "),t.loggedIn?i("v-menu",{attrs:{"offset-y":"","close-on-click":"","close-on-content-click":"","open-on-hover":""}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v(t._s(t.name))]),t._v(" "),i("v-list",{attrs:{"offset-y":""}},[i("v-list-tile",{on:{click:function(e){t.logout()}}},[i("v-list-tile-title",[t._v("Log Out")])],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.pushSettings()}}},[i("v-list-tile-title",[t._v("Settings")])],1),t._v(" "),i("v-list-tile",{on:{click:function(e){t.pushAbout()}}},[i("v-list-tile-title",[t._v("About")])],1)],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]};var n={name:"app",components:{Toolbar:i("VU/8")(o,a,!1,function(t){i("Rc1Z")},null,null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}}),this._v(" "),e("toolbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(n,r,!1,function(t){i("IX5X")},null,null).exports,c=i("/ocq"),d=i("3EgV"),v=i.n(d),u=i("K/Lq"),p=i.n(u),h=(i("7zck"),i("mtWM")),f=i.n(h),m={name:"Admin",data:()=>({projects:[],tags:[{title:"Potential Project"},{title:"Currently Working on Project"},{title:"Project Done!"},{title:"No tag"}],actions:[{title:"Delete",class:"red"}],isAdmin:!1,message:"",snackbar:!1}),methods:{voteUp:function(t){let e=this,i=this.logged();if(!i)return console.log("Clicked!"),this.message="You must be logged in to vote",void(this.snackbar=!0);f.a.put("/project/votes/"+t._id,{user:i}).then(function(i){i.data.success?(t.votes=t.votes+1,t.voted=!0):(e.message="You have already voted for this",e.snackbar=!0)})},setTag:function(t,e){"No tag"===e&&(e=null),f.a.put("/project/tag/"+t._id,{tag:e}).then(function(i){t.tag=e,"Project Done!"===t.tag?t.bar="100":"Currently Working on Project"===t.tag?t.bar="65":"Potential Project"===t.tag&&(t.bar="35")})},pushLogin:function(){this.$router.push({name:"Login"})},doAction:function(t,e){"Delete"===e&&(f.a.delete("/project/"+t._id),location.reload())}},computed:{sortedByVote:function(){return this.projects.sort(function(t,e){return t.votes>e.votes?-1:t.votes<e.votes?1:0})}},created:function(){let t=this,e=this.logged();this.isAdmin=e.isAdmin,f.a.get("/project/").then(function(i){console.log(i.data),t.projects=i.data,t.projects.forEach(function(t){t.voted=t.votedBy.includes(e._id),null===e&&(t.voted=!0),console.log(t.tag),"Project Done!"===t.tag&&(t.bar=100),"Currently Working on Project"===t.tag&&(t.bar=65),"Potential Project"===t.tag&&(t.bar=35)})})}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{attrs:{id:"home"}},[i("v-app",{attrs:{id:"cardslist"}},[i("h1",{attrs:{id:"header"}},[t._v(" What to fix? Submit a fix or vote on some here! ")]),t._v(" "),t._l(t.sortedByVote,function(e){return i("v-layout",{key:e._id},[i("v-flex",{attrs:{id:"layout"}},[i("v-card",{staticClass:"my-2",attrs:{id:"card"}},[i("v-progress-linear",{staticClass:"my-0",attrs:{value:e.bar,height:"4",color:"red darken-4"}}),t._v(" "),null!=e.tag?i("v-chip",{attrs:{label:"",color:"red darken-4","text-color":"white"}},[t._v(t._s(e.tag))]):t._e(),t._v(" "),i("br"),t._v(" "),i("v-card-title",{staticClass:"title",attrs:{"primary-title":""}},[i("div",{attrs:{id:"tag"}},[i("h3",{staticClass:"headline mb-0 tepentatholonxt-xs-left"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"title mb-0 text-xs-left"},[t._v(t._s(e.votes)+" Votes")])])]),t._v(" "),i("v-card-text",{staticClass:"subheading text-xs-left autoscroll"},[t._v("\n                "+t._s(e.description)+"\n              ")]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{outline:"",id:"votebutton"},nativeOn:{click:function(i){t.voteUp(e)}}},[e.voted?t._e():i("span",[t._v("Vote For This")]),t._v(" "),e.voted?i("span",[t._v("Voted!")]):t._e()]),t._v(" "),t.isAdmin?i("div",{attrs:{id:"adminActions"}},[i("v-menu",{attrs:{"offset-y":"","close-on-click":""}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Tags")]),t._v(" "),i("v-list",t._l(t.tags,function(s,o){return i("v-list-tile",{key:o,on:{click:function(i){t.setTag(e,s.title)}}},[i("v-list-tile-title",[t._v(t._s(s.title))])],1)}))],1),t._v(" "),i("v-menu",{attrs:{"offset-y":"","close-on-click":""}},[i("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Actions")]),t._v(" "),i("v-list",t._l(t.actions,function(s,o){return i("v-list-tile",{key:o,class:s.class,on:{click:function(i){t.doAction(e,s.title)}}},[i("v-list-tile-title",[t._v(t._s(s.title))])],1)}))],1)],1):t._e()],1)],1)],1)],1)}),t._v(" "),i("v-snackbar",{attrs:{top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.message)+"\n      "),t.message.includes("log")?i("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.pushLogin()}}},[t._v(" Login ")]):t._e(),t._v(" "),i("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],2)],1)},staticRenderFns:[]};var b=i("VU/8")(m,g,!1,function(t){i("B9LJ")},null,null).exports,_={name:"Create",data:()=>({title:"",description:"",message:"",snackbar:!1}),methods:{submit(t){console.log("submit ran");let e=this,i=this.logged();if(!i)return this.message="You must be logged in to submit a project",void(this.snackbar=!0);f.a.post("/project/",{title:this.title,description:this.description,user:i}).then(function(t){console.log("cmon"),e.$router.push({name:"Home"})})},pushLogin:function(){this.$router.push({name:"Login"})}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"create"},[i("v-app",{attrs:{id:"app"}},[i("v-flex",{attrs:{xs12:"","align-center":"",id:"flex"}},[i("v-card",{attrs:{id:"card"}},[i("span",{staticClass:"headline mb-0 left",attrs:{id:"header"}},[t._v("What to fix?")]),t._v(" "),i("v-form",{ref:"createForm",attrs:{id:"form"}},[i("v-text-field",{attrs:{label:"Project Title",counter:30,required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),i("v-text-field",{attrs:{label:"Description",counter:500,"auto-grow":"","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{outline:"",id:"submitBtn"},nativeOn:{click:function(e){t.submit()}}},[t._v("Submit")])],1)],1)],1)],1),t._v(" "),i("v-snackbar",{attrs:{top:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.message)+"\n      "),t.message.includes("log")?i("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.pushLogin()}}},[t._v(" Login ")]):t._e(),t._v(" "),i("v-btn",{staticClass:"mx-1",attrs:{flat:"",color:"blue lighten-2"},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},staticRenderFns:[]};var x=i("VU/8")(_,y,!1,function(t){i("zFDu")},null,null).exports,k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"About"}},[e("v-app")],1)},staticRenderFns:[]};var C=i("VU/8")({},k,!1,function(t){i("Qigy")},null,null).exports,w={name:"Login",data:()=>({username:"",password:""}),methods:{submit(t){let e=this;f.a.get("/user/login",{params:{username:e.username,password:e.password}}).then(function(t){t.data.success&&(e.$cookie.set("user",JSON.stringify(t.data.doc),"0"),location.reload(),e.$router.push({name:"Home"}))})}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"app"}},[i("v-flex",{attrs:{xs10:"","offset-xs1":"",id:"layout"}},[i("v-card",{attrs:{id:"card"}},[i("span",{staticClass:"headline mb-0 left",attrs:{id:"header"}},[t._v("Login")]),t._v(" "),i("v-form",{ref:"loginForm",attrs:{id:"form"}},[i("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),i("v-text-field",{attrs:{label:"Password",required:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{outline:"",id:"submitBtn"},nativeOn:{click:function(e){t.submit()}}},[t._v("Login")])],1)],1)],1),t._v(" "),i("p",[t._v(" Dont have an account? "),i("router-link",{attrs:{to:"SignUp"}},[t._v(" Sign up here ")])],1)],1)],1)},staticRenderFns:[]};var P=i("VU/8")(w,T,!1,function(t){i("l8K9")},null,null).exports,I={data:()=>({username:"",password:"",email:"",cpassword:"",fname:"",vis1:!1,vis2:!1}),methods:{create(t){this.password!==this.cpassword&&alert("Passwords do not match");let e=this;f.a.post("/user/create",{username:e.username,password:e.password,email:e.email,fname:e.fname}).then(function(t){t.data.success&&(location.reload(),e.$cookie.set("user",JSON.stringify(t.data.doc)),e.$router.push({name:"Home"}))})}}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",rel:"stylesheet"}}),t._v(" "),i("div",{attrs:{id:"SignUp"}},[i("v-flex",{attrs:{xs10:"","offset-xs1":"",id:"layout"}},[i("v-card",{attrs:{id:"card"}},[i("span",{staticClass:"headline left",attrs:{id:"header"}},[t._v("Sign Up")]),t._v(" "),i("v-form",{ref:"newUserForm",attrs:{id:"form"}},[i("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),i("v-text-field",{attrs:{label:"Email",hint:"We only send emails when theres an update on your project"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),i("v-text-field",{attrs:{label:"Password",hint:"THIS SITE STILL IN TESTING, DO NOT USE A REAL PASSWORD",type:t.vis1?"text":"password","append-icon":t.vis1?"visibility":"visibility_off","append-icon-cb":function(){return t.vis1=!t.vis1},required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("v-text-field",{attrs:{label:"Confirm Password",type:t.vis2?"text":"password","append-icon":t.vis2?"visibility":"visibility_off","append-icon-cb":function(){return t.vis2=!t.vis2},required:""},model:{value:t.cpassword,callback:function(e){t.cpassword=e},expression:"cpassword"}}),t._v(" "),i("v-text-field",{attrs:{label:"First Name",required:""},model:{value:t.fname,callback:function(e){t.fname=e},expression:"fname"}}),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{outline:"",id:"submitBtn"},nativeOn:{click:function(e){t.create()}}},[t._v("Sign Up")])],1)],1)],1)],1),t._v(" "),i("p",[t._v(" Already have an account? "),i("router-link",{attrs:{to:"Login"}},[t._v(" Log in here ")])],1)],1)])},staticRenderFns:[]};var A=i("VU/8")(I,S,!1,function(t){i("KSf0")},null,null).exports,W={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"ppHeader"}},[t._v(" Privacy Policy")]),i("div",{attrs:{id:"ppBody"}},[i("div",{staticClass:"ppConsistencies"},[i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("Information Collection")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("Information Usage")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("Information Protection")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("Cookie Usage")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("3rd Party Disclosure")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links text-center"},[t._v("3rd Party Links")])])]),i("div",{staticStyle:{clear:"both",height:"10px"}}),i("div",{staticClass:"ppConsistencies"},[i("div",{staticClass:"col-2"},[i("div",{staticClass:"col-12 quick-links2 gen-text-center"},[t._v("Google AdSense")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"col-12 quick-links2 gen-text-center"},[t._v("                    Fair Information Practices                    "),i("div",{staticClass:"col-8 gen-text-left gen-xs-text-center",staticStyle:{"font-size":"12px",position:"relative",left:"20px"}},[t._v("Fair information"),i("br"),t._v(" Practices")])])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"col-12 quick-links2 gen-text-center coppa-pad"},[t._v("                    COPPA                ")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"col-12 quick-links2 quick4 gen-text-center caloppa-pad"},[t._v("                    CalOPPA                ")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links2 gen-text-center"},[t._v("CAN-SPAM")])]),i("div",{staticClass:"col-2"},[i("div",{staticClass:"quick-links2 gen-text-center"},[t._v("Our Contact Information"),i("br")])])]),i("div",{staticStyle:{clear:"both",height:"10px"}}),i("div",{staticClass:"innerText"},[t._v("This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website."),i("br")]),i("span",{attrs:{id:"infoCo"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("What personal information do we collect from the people that visit our blog, website or app?")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address  or other details to help you with your experience.")]),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("When do we collect information?")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("We collect information from you when you register on our site, fill out a form or enter information on our site.")]),i("br"),t._v(" "),i("span",{attrs:{id:"infoUs"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("How do we use your information? ")])]),i("br"),i("div",{staticClass:"innerText"},[t._v(" We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:"),i("br"),i("br")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" To improve our website in order to better serve you.")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" To ask for ratings and reviews of services or products")]),i("span",{attrs:{id:"infoPro"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("How do we protect your information?")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("We do not use vulnerability scanning and/or scanning to PCI standards.")]),i("div",{staticClass:"innerText"},[t._v("We only provide articles and information. We never ask for credit card numbers.")]),i("div",{staticClass:"innerText"},[t._v("We do not use Malware Scanning."),i("br"),i("br")]),i("div",{staticClass:"innerText"},[t._v("Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. ")]),i("br"),i("div",{staticClass:"innerText"},[t._v("We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.")]),i("br"),i("div",{staticClass:"innerText"},[t._v("All transactions are processed through a gateway provider and are not stored or processed on our servers.")]),i("span",{attrs:{id:"coUs"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("Do we use 'cookies'?")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.")]),i("div",{staticClass:"innerText"},[i("br"),i("strong",[t._v("We use cookies to:")])]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" Understand and save user's preferences for future visits.")]),i("div",{staticClass:"innerText"},[i("br"),t._v("You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies."),i("br")]),i("div",{staticClass:"innerText"},[i("br"),i("strong",[t._v("If users disable cookies in their browser:")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.Some of the features that make your site experience more efficient and may not function properly.")]),i("br"),i("span",{attrs:{id:"trDi"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("Third-party disclosure")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.")]),i("span",{attrs:{id:"trLi"}}),i("br"),i("div",{staticClass:"grayText"},[i("strong",[t._v("Third-party links")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.")]),i("span",{attrs:{id:"gooAd"}}),i("br"),i("div",{staticClass:"blueText"},[i("strong",[t._v("Google")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en "),i("br"),i("br")]),i("div",{staticClass:"innerText"},[t._v("We have not enabled Google AdSense on our site but we may do so in the future.")]),i("span",{attrs:{id:"calOppa"}}),i("br"),i("div",{staticClass:"blueText"},[i("strong",[t._v("California Online Privacy Protection Act")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.  The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. -  See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf"),i("br")]),i("div",{staticClass:"innerText"},[i("br"),i("strong",[t._v("According to CalOPPA, we agree to the following:")]),i("br")]),i("div",{staticClass:"innerText"},[t._v("Users can visit our site anonymously.")]),i("div",{staticClass:"innerText"},[t._v("Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website."),i("br")]),i("div",{staticClass:"innerText"},[t._v("Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.")]),i("div",{staticClass:"innerText"},[i("br"),t._v("You will be notified of any Privacy Policy changes:")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" On our Privacy Policy Page"),i("br")]),i("div",{staticClass:"innerText"},[t._v("Can change your personal information:")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" By logging in to your account")]),i("div",{staticClass:"innerText"},[i("br"),i("strong",[t._v("How does our site handle Do Not Track signals?")]),i("br")]),i("div",{staticClass:"innerText"},[t._v("We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. ")]),i("div",{staticClass:"innerText"},[i("br"),i("strong",[t._v("Does our site allow third-party behavioral tracking?")]),i("br")]),i("div",{staticClass:"innerText"},[t._v("It's also important to note that we do not allow third-party behavioral tracking")]),i("span",{attrs:{id:"coppAct"}}),i("br"),i("div",{staticClass:"blueText"},[i("strong",[t._v("COPPA (Children Online Privacy Protection Act)")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control.  The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online."),i("br"),i("br")]),i("div",{staticClass:"innerText"},[t._v("We do not specifically market to children under the age of 13 years old.")]),i("div",{staticClass:"innerText"},[t._v("Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?")]),i("span",{attrs:{id:"ftcFip"}}),i("br"),i("div",{staticClass:"blueText"},[i("strong",[t._v("Fair Information Practices")])]),i("br"),i("div",{staticClass:"innerText"},[t._v("The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information."),i("br"),i("br")]),i("div",{staticClass:"innerText"},[i("strong",[t._v("In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:")])]),i("div",{staticClass:"innerText"},[t._v("We will notify the users via in-site notification")]),i("div",{staticClass:"innerText"},[t._v("      "),i("strong",[t._v("•")]),t._v(" Within 7 business days")]),i("div",{staticClass:"innerText"},[i("br"),t._v("We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.")])])])}]};var L=i("VU/8")(null,W,!1,function(t){i("Clri")},null,null).exports;s.a.use(c.a),s.a.use(v.a),s.a.use(p.a);var U=new c.a({routes:[{component:b,name:"Home",path:"/"},{component:x,name:"Create",path:"/create"},{component:C,name:"About",path:"/about"},{component:P,name:"Login",path:"/login"},{component:A,name:"SignUp",path:"/signup"},{component:L,name:"Privacy",path:"/privacy"}]});s.a.config.productionTip=!1;let q=s.a.mixin({methods:{logged:function(){let t=this.$cookie.get("user");return null!==t&&JSON.parse(t)}}});new s.a({el:"#app",router:U,mixins:[q],template:"<App/>",components:{App:l}})},Qigy:function(t,e){},Rc1Z:function(t,e){},l8K9:function(t,e){},zFDu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a92ab5e177f498cc2304.js.map