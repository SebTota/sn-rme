(this["webpackJsonpsn-rme"]=this["webpackJsonpsn-rme"]||[]).push([[0],{178:function(e,t,o){e.exports=o(507)},183:function(e,t,o){},184:function(e,t,o){},507:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(17),c=o.n(r),i=(o(183),o(184),o(40)),s=o(31),l=o(77),u=o(76),d=o(73),g=o(172),h=o.n(g),b=o(177),k=o(176),v=o.n(k),m=function(){function e(){Object(i.a)(this,e),this.updateObservers=[],this.initiateBridge()}return Object(s.a)(e,null,[{key:"get",value:function(){return null==this.instance&&(this.instance=new e),this.instance}}]),Object(s.a)(e,[{key:"addUpdateObserver",value:function(e){var t={callback:e};return this.updateObservers.push(t),t}},{key:"notifyObserversOfUpdate",value:function(){var e,t=Object(b.a)(this.updateObservers);try{for(t.s();!(e=t.n()).done;){e.value.callback()}}catch(o){t.e(o)}finally{t.f()}}},{key:"getNote",value:function(){return this.note}},{key:"initiateBridge",value:function(){var e=this;this.componentManager=new v.a([{name:"stream-context-item"}],(function(){})),this.componentManager.streamContextItem((function(t){e.note=t,e.notifyObserversOfUpdate()}))}},{key:"save",value:function(){var e=this;if(this.note){var t=this.note;t.content&&t.content.text&&(t.content.text=t.content.text.replace(/\n\\/g,"\n")),this.componentManager.saveItemWithPresave(t,(function(){t=e.note}))}}}]),e}();m.instance=null;var y=o(41),f={almostBlack:"#181A1B",lightBlack:"#2F3336",almostWhite:"#E6E6E6",white:"#FFF",white10:"rgba(255, 255, 255, 0.1)",black:"#000",black10:"rgba(0, 0, 0, 0.1)",primary:"#1AB6FF",greyLight:"#F4F7FA",grey:"#E8EBED",greyMid:"#C5CCD3",greyDark:"#DAE1E9"},p=Object(y.a)(Object(y.a)({},f),{},{fontFamily:"var(--sn-stylekit-sans-serif-font)",fontFamilyMono:"'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",fontWeight:400,zIndex:100,link:"var(--sn-stylekit-info-color)",placeholder:"var(--sn-stylekit-input-placeholder-color)",textSecondary:"#4E5C6E",textLight:f.white,textHighlight:"#ff0",selected:f.primary,codeComment:"var(--sn-stylekit-secondary-foreground-color)",codePunctuation:"var(--sn-stylekit-contrast-backround-color)",codeNumber:"#d73a49",codeProperty:"#c08b30",codeTag:"#3d8fd1",codeString:"var(--sn-stylekit-success-color)",codeSelector:"#6679cc",codeAttr:"#c76b29",codeEntity:"#22a2c9",codeKeyword:"var(--sn-stylekit-info-color)",codeFunction:"#6f42c1",codeStatement:"#22a2c9",codePlaceholder:"#3d8fd1",codeInserted:"#202746",codeImportant:"#c94922",blockToolbarBackground:f.white,blockToolbarTrigger:f.greyMid,blockToolbarTriggerIcon:f.white,blockToolbarItem:f.almostBlack,blockToolbarText:f.almostBlack,blockToolbarHoverBackground:f.greyLight,blockToolbarDivider:f.greyMid,noticeInfoBackground:"#F5BE31",noticeInfoText:f.almostBlack,noticeTipBackground:"#9E5CF7",noticeTipText:f.white,noticeWarningBackground:"#FF5C80",noticeWarningText:f.white}),w=Object(y.a)(Object(y.a)({},p),{},{background:"transparent",text:"var(--sn-stylekit-paragraph-text-color)",code:"var(--sn-stylekit-secondary-foreground-color)",cursor:"var(--sn-stylekit-contrast-foreground-color)",divider:f.greyMid,toolbarBackground:f.lightBlack,toolbarInput:f.white10,toolbarItem:f.white,tableDivider:"var(--sn-stylekit-secondary-foreground-color)",tableSelected:"var(--sn-stylekit-secondary-foreground-color)",tableSelectedBackground:"var(--sn-stylekit-contrast-background-color)",quote:"var(--sn-stylekit-secondary-foreground-color)",codeBackground:"var(--sn-stylekit-secondary-background-color)",codeBorder:"var(--sn-stylekit-secondary-foreground-color)",horizontalRule:"var(--sn-stylekit-input-placeholder-color)",imageErrorBackground:f.greyLight}),O=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var e=this.props.attrs.matches[1];return a.a.createElement("iframe",{title:"Youtube Embed ".concat(e),src:"https://www.youtube.com/embed/".concat(e,"?modestbranding=1")})}}]),o}(a.a.Component),B=function(e){Object(l.a)(o,e);var t=Object(u.a)(o);function o(e){var n;return Object(i.a)(this,o),(n=t.call(this,e)).onChange=Object(d.debounce)((function(e){var t=e(),o=n.state.note;o.content.text=t,n.setState({note:o}),m.get().save()})),n.state={},n}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;m.get().addUpdateObserver((function(){var t=m.get().getNote(),o=!e.state.note||e.state.note&&e.state.note.uuid!==t.uuid;e.setState({note:m.get().getNote()}),o&&e.updateMarkdown()}))}},{key:"updateMarkdown",value:function(){var e=this.state.note.content.text.replace(/(\n{2})(\n+)/g,(function(e,t,o){return t+o.replace(/(\n)/g,"\\$1")}));""===e&&(e="\n"),this.setState({markdown:e})}},{key:"getNoteContents",value:function(){return this.state.note?this.state.note.content.text:""}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(h.a,{value:this.state.markdown,placeholder:"",autoFocus:!0,onChange:this.onChange.bind(this),theme:w,className:"gKsMQS",embeds:[{title:"YouTube",keywords:"youtube video tube google",icon:function(){return a.a.createElement("img",{alt:"Youtube Logo",src:"https://upload.wikimedia.org/wikipedia/commons/7/75/YouTube_social_white_squircle_%282017%29.svg",width:24,height:24})},matcher:function(e){return e.match(/(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([a-zA-Z0-9_-]{11})$/i)},component:O}]}))}}]),o}(a.a.Component);var E=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[178,1,2]]]);
//# sourceMappingURL=main.0caa7040.chunk.js.map