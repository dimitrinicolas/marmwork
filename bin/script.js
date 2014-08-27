(function(win, doc){

var window = win,
	document = doc;

/**
 * main.js
 *
 * Fichier JavaScript principal.
 */

var Application = {

	name: "MarmWork"

};
!function(win,doc){function on(element,event,callback,binding){if(!element.length)return"#document-fragment"===element.nodeName?void on(element.childNodes,event,callback,binding):("function"==typeof elAndCoEvents.list[event]?elAndCoEvents.list[event](element,function(){return function(event){"string"==typeof callback?eval(callback):callback(event,binding)}}(callback,binding)):isset(element.addEventListener)?element.addEventListener(event,function(){return function(a){callback(a,binding)}}(callback,binding),!1):element.attachEvent("on"+event,function(){return function(a){callback(a,binding)}}(callback,binding)),element);for(var i=0;i<element.length;i++)on(element[i],event,callback,binding)}function childNodeList(a){for(var b=[],c=0;c<a.childNodes.length;c++)if(b.push(a.childNodes[c]),a.childNodes[c].childNodes)for(var d=childNodeList(a.childNodes[c]),e=0;e<d.length;e++)b.push(d[e]);return b}function isset(a){return"undefined"!=typeof a}var window=win,document=doc,ELCO_MAX_COMPONENTS_GENERATED=2048,elAndCoEvents={list:{}};elAndCoEvents.add=function(a,b){elAndCoEvents.list[a]=b},elAndCoEvents.onClickEventsList=[],elAndCoEvents.add("CLICK",function(a,b){var c=new elAndCoEvents.onClickObject(a,b);elAndCoEvents.onClickEventsList.push(c)}),elAndCoEvents.onClickObject=function(a,b){this.callback=b,this.element=a,this.touchstart=function(a){return function(b){a.moved=!1,a.startX=b.touches[0].clientX,a.startY=b.touches[0].clientY}}(this),this.touchmove=function(a){return function(b){(Math.abs(b.touches[0].clientX-a.startX)>10||Math.abs(b.touches[0].clientY-a.startY)>10)&&(a.moved=!0)}}(this),this.touchend=function(a){return function(b){a.moved||a.callback(b)}}(this),on(this.element,"touchstart",this.touchstart),on(this.element,"touchmove",this.touchmove),on(this.element,"touchend",this.touchend),on(this.element,"touchcancel",this.touchend),on(this.element,"click",function(a,b){"ontouchstart"in window||b.callback(a)},this)};var El=Element=function(a,b){if(this!==window)var c=Element.create(a,b);else var c=Element.select(a,b);if(c)return c.childs=c.childNodes,c.parent=c.parentNode,c.clone=c.cloneNode,c.add=function(a){return function(b){if("#document-fragment"===b.nodeName){for(var c=[],d=b.childNodes,e=d.length,f=0;e>f;f++)a.appendChild(d[0]),c.push(a.childNodes[a.childNodes.length-1]);return c}if(!b.length)return a.appendChild(b),El(b);for(var f=0;f<b.length;f++){for(var c=[],e=b.length,f=0;e>f;f++)a.appendChild(b[0]),c.push(a.childNodes[a.childNodes.length-1]);return c}}}(c),c.on=function(a){return function(b,c,d){on(a,b,c,d)}}(c),c.offset=function(a){return function(){for(var b={x:0,y:0};a;)b.x+=a.offsetLeft-(a==document.body?0:a.scrollLeft)+a.clientLeft,b.y+=a.offsetTop-(a==document.body?0:a.scrollTop)+a.clientTop,a=a.offsetParent;return b}}(c),c.hasClass=function(a){return function(b){return(" "+a.className+" ").indexOf(" "+b+" ")>-1}}(c),c.addClass=function(a){return function(b){return El(a).hasClass(b)||(a.className+=" "+b),El(a)}}(c),c.removeClass=function(a){return function(b){return a.className=(" "+a.className+" ").replace(" "+b+" "," "),El(a)}}(c),c.toggleClass=function(a){return function(b){return El(a).hasClass(b)?El(a).removeClass(b):El(a).addClass(b),El(a)}}(c),c};Element.create=function(a,b){var c,d=/[-\w]+/.exec(a)[0];if(c=document.createElement(d),"object"==typeof b)for(attribute in b)b.hasOwnProperty(attribute)&&!c.getAttribute(attribute)&&c.setAttribute(attribute,b[attribute]);var e=a.replace(/#([a-z-_]+)/i,"").replace(/\w+/,"").split(".");if(e.length>1){c.className="";for(var f=1;f<e.length;f++)c.className+=" "+e[f]}var g=/([a-z-_]+)(#([a-z-_]+))/i.exec(a);return g&&(c.id=g[3]),c},Element.select=function(a){var b;return"string"!=typeof a?b=a:"#"==a[0]&&(b=document.getElementById(a.substring(1))),b};var Co=Component=function(a,b){if(this===window)return Co.generate(a,b);if(a.name&&(Co.components[a.name]=this,"object"==typeof a))for(variable in a)a.hasOwnProperty(variable)&&(isset(this[variable])||(this[variable]=a[variable]))};Co.components={},Component.attributesParser=function(a,b){for(var c={},d=0;d<a.length;d++)if(c[a[d].name]=a[d].value,"string"==typeof a[d].value&&"$"==a[d].value[0]&&b)for(parameter in b)a[d].value==="${"+parameter+"}"&&b.hasOwnProperty(parameter)&&(c[a[d].name]=b[parameter]);return c},Component.prototype.create=function(a){var b=this.render(a),c=childNodeList(b);if(isset(a._CHILDNODES_)&&a._CHILDNODES_.length){for(var d=!1,e=0;e<c.length;e++){var f=c[e];if("_inner_"===f.getAttribute("tag-name")){for(;a._CHILDNODES_.length;)f.parentNode.insertBefore(a._CHILDNODES_[0],f);f.parentNode.removeChild(f),d=!0;break}}if(!d)for(;a._CHILDNODES_.length;)b.appendChild(a._CHILDNODES_[0])}return isset(this.created)&&this.created(b),b},Component.generate=function(a,b){if("string"!=typeof a)return document.createElement("div");a=a.replace(/^\s+|\s+$/g,""),a=a.replace(/<([-\w]*)( (.+?))?\/>/g,"<$1$2></$1>"),a=a.replace(/<([-\w]*)( (.+?))?>/g,'<div tag-name="$1"$2>').replace(/<\/(.+?)>/g,"</div>");var c=document.createElement("div");c.innerHTML=a;var d=!1,e=!1;for(componentsCreated=0;!d;){e=!1,ELCO_MAX_COMPONENTS_GENERATED&&componentsCreated>ELCO_MAX_COMPONENTS_GENERATED&&(console.error("el & co erreur 001\nUne boucle de création de components a été détectée.\nLa génération des components a alors été arrêtée."),d=!0);for(var f=childNodeList(c),g=0;g<f.length;g++){var h=f[g],i="";if(h.getAttribute&&(i=h.getAttribute("tag-name")||""),Co.components[i]){var j=Component.attributesParser(h.attributes,b);j._CHILDNODES_=h.childNodes;var k=Co.components[i].create(j);for(attribute in j)j.hasOwnProperty(attribute)&&null===k.getAttribute(attribute)&&"string"==typeof j[attribute]&&k.setAttribute(attribute,j[attribute]);k.removeAttribute("tag-name"),h.parentNode.insertBefore(k,h),h.parentNode.removeChild(h),e=!0,componentsCreated++;break}}e||(d=!0)}return c.childNodes},Component.inner=function(a){var b=document.createElement("div");return b.setAttribute("tag-name","_inner_"),a.appendChild(b),a},window.Co=window.Component,window.El=window.Element,window.ELCO_MAX_COMPONENTS_GENERATED=ELCO_MAX_COMPONENTS_GENERATED}(window,document);

/*
 *  Marmottajax 1.0.4
 *  Envoyer et recevoir des informations simplement en JavaScript
 */

var marmottajax = function(options) {

    return marmottajax.get(options);

};

marmottajax.normalize = function(parameters) {

    return parameters ? typeof parameters === "string" ? { url: parameters } : parameters : null;

};

marmottajax.json = function(parameters) {

    if (parameters = marmottajax.normalize(parameters)) {

        parameters.json = true;

        return new marmottajax.request(parameters);

    }

};

marmottajax.get = function(options) {

    return new marmottajax.request(options);

};

marmottajax.post = function(parameters) {

    if (parameters = marmottajax.normalize(parameters)) {

        parameters.method = "POST";

        return new marmottajax.request(parameters);

    }

};

marmottajax.put = function(parameters) {

    if (parameters = marmottajax.normalize(parameters)) {

        parameters.method = "PUT";

        return new marmottajax.request(parameters);

    }

};

marmottajax.delete_ = function(parameters) {

    if (parameters = marmottajax.normalize(parameters)) {

        parameters.method = "DELETE";

        return new marmottajax.request(parameters);

    }

};

marmottajax.request = function(options) {

    if (!options) { return false; }

    if (typeof options === "string") {

        options = { url: options };

    }

    if (options.method === "POST" || options.method === "PUT" || options.method === "DELETE") {

        var post = "?";

        for (var key in options.options) {

            post += options.options.hasOwnProperty(key) ? "&" + key + "=" + options.options[key] : "";

        }

    }

    else {

        options.method = "GET";

        options.url += options.url.indexOf("?") < 0 ? "?" : "";

        for (var key in options.options) {

            options.url += options.options.hasOwnProperty(key) ? "&" + key + "=" + options.options[key] : "";

        }

    }

    this.xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    this.xhr.options = options;

    this.xhr.callbacks = {

        then: [],
        error: []

    };

    this.then = function(callback) {

        this.xhr.callbacks.then.push(callback);

        return this;

    };

    this.error = function(callback) {

        this.xhr.callbacks.error.push(callback);

        return this;

    };

    this.xhr.call = function(categorie, result) {

        for (var i = 0; i < this.callbacks[categorie].length; i++) {

            if (typeof(this.callbacks[categorie][i]) === "function") {

                this.callbacks[categorie][i](result);

            }

        }

    };

    this.xhr.onreadystatechange = function() {

        if (this.readyState === 4 && this.status == 200) {

            var result = this.responseText;

            if (this.options.json) {

                try {

                    result = JSON.parse(result);

                }

                catch (error) {

                    this.call("error", "invalid json");

                    return false;

                }

            }

            this.call("then", result);

        }

        else if (this.readyState === 4 && this.status == 404) {

            this.call("error", "404");

        }

        else if (this.readyState === 4) {

            this.call("error", "unknow");

        }

    };

    this.xhr.open(options.method, options.url, true);
    this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    this.xhr.send(typeof post != "undefined" ? post : null);

};

/**
 * core/$.js
 *
 * DOM Content Loaded function
 */

Application.dom_load_event_listeners = [];

function $(callback) {

	if (typeof callback === "function") {

		Application.dom_load_event_listeners.push(callback);

	}

}

Application.dom_content_loaded = false;

Application.on_dom_content_loaded = function(event) {

	if (!Application.dom_content_loaded) {

		Application.dom_content_loaded = true;

		for (var i = 0; i < Application.dom_load_event_listeners.length; i++) {

			var fn = Application.dom_load_event_listeners[i]

			if (typeof fn === "function") {

				fn();

			}
			
		}

	}

};

El(document).on("DOMContentLoaded", Application.on_dom_content_loaded);
El(window).on("load", Application.on_dom_content_loaded);

window.onload = function() {

    Application.on_dom_content_loaded();

};

/**
 * core/isset.js
 *
 * Test if a variable exist
 */

function isset(variable) {

	return typeof variable !== "undefined";

}

/**
 * components/main.js
 *
 * Button component
 */

new Component({

	name: "btn",

	render: function($) {

		var type = $.type === "raised" ? "raised" : "flat",
			color = $.color ? ".btn--" + $.color : "",
			outline_color = $.outline ? ".btn--outline-" + $.outline : "",
			ripple_color = $.ripple ? ".btn--ripple-" + $.ripple : "",
			disabled = isset($.disable) ? ".disabled" : "";
	
		var btn = new Element("div.btn.btn--" + type + color + outline_color + ripple_color + disabled);
	
		if (!disabled) {
	
			btn.tabIndex = 0;
	
		}

		if (typeof $.click === "function") {

			El(btn).on("CLICK", $.click, btn);

		}
	
		if (!$["no-ripple"]) {
	
			El(btn).add(Co('<ripple parent="${parent}"/>', {
	
				parent: btn
	
			}));
	
		}

		return btn;
	
	}

});

/* TEMPLATE

<btn type="flat|raised" color? click? no-ripple?>@{inner}</btn> */

/**
 * components/ripple.js
 *
 * Ripple component
 */

new Component({

	name: "ripple",

	render: function($) {

		var ripple = new Element("div.ripple");
	
		if ($.parent) {

			var event = "ontouchstart" in window ? "touchstart" : "mousedown";
	
			El($.parent).on(event, function(event, elements) {
	
				var ripple = elements.ripple,
					parent = elements.parent;

				if (!El(parent).hasClass("disabled")) {
	
					var circle = ripple.add(new El("div.ripple__circle.ripple__circle--animate"));
	
					var parentOffset = El(parent).offset();
	
					var clickX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX,
						clickY = event.changedTouches ? event.changedTouches[0].pageY : event.pageY;
	
					circle.style.left = clickX - parentOffset.x + "px";
					circle.style.top = clickY - parentOffset.y + "px";
	
				}
	
			}, {
	
				ripple: ripple,
				parent: $.parent
	
			});
	
		}

		return ripple;
	
	}

});

/* TEMPLATE

<ripple parent="${parent-node}"/> */

/**
 * scripts/test.js
 *
 * Test Script
 */

$(function() {

	El(document.body).add(Co("<div>Flat buttons</div>"));

	El(document.body).add(Co('<btn>button</btn>'
		                   + '<btn color="red">colored</btn>'
		 				   + '<btn disable>disabled</btn>'));

	El(document.body).add(Co("<div>Raised buttons</div>"));

	El(document.body).add(Co('<btn type="raised">button</btn>'
						   + '<btn type="raised" color="red">colored</btn>'
		                   + '<btn type="raised" disable>disabled</btn>'));

});

window.Application = Application;

})(window, document);