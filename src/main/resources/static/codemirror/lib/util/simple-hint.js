!function(){CodeMirror.simpleHint=function(e,t,o){function n(o){function i(t){e.replaceRange(t,s.from,s.to)}function c(){v||(v=!0,u.parentNode.removeChild(u))}function d(){i(a[f.selectedIndex]),c(),setTimeout(function(){e.focus()},50)}if(!e.somethingSelected()){var l=e.getTokenAt(e.getCursor());if(!r.closeOnTokenChange||null==o||l.start==o.start&&l.className==o.className){var s=t(e);if(s&&s.list.length){var a=s.list;if(1==a.length)return i(a[0]),!0;var u=document.createElement("div");u.className="CodeMirror-completions";var f=u.appendChild(document.createElement("select"));window.opera||(f.multiple=!0);for(var p=0;p<a.length;++p){var m=f.appendChild(document.createElement("option"));m.appendChild(document.createTextNode(a[p]))}f.firstChild.selected=!0,f.size=Math.min(10,a.length);var h=e.cursorCoords();u.style.left=h.x+"px",u.style.top=h.yBot+"px",document.body.appendChild(u);var C=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth);C-h.x<f.clientWidth&&(u.style.left=h.x-f.clientWidth+"px"),a.length<=10&&(u.style.width=f.clientWidth-1+"px");var v=!1;return CodeMirror.connect(f,"blur",c),CodeMirror.connect(f,"keydown",function(t){var o=t.keyCode;13==o?(CodeMirror.e_stop(t),d()):27==o?(CodeMirror.e_stop(t),c(),e.focus()):38==o||40==o||33==o||34==o||CodeMirror.isModifierKey(t)||(c(),e.focus(),e.triggerOnKeyDown(t),r.closeOnBackspace&&8==o||setTimeout(function(){n(l)},50))}),CodeMirror.connect(f,"dblclick",d),f.focus(),window.opera&&setTimeout(function(){v||f.focus()},100),!0}}}}var r={},i=CodeMirror.simpleHint.defaults;for(var c in i)i.hasOwnProperty(c)&&(r[c]=(o&&o.hasOwnProperty(c)?o:i)[c]);return n()},CodeMirror.simpleHint.defaults={closeOnBackspace:!0,closeOnTokenChange:!1}}();