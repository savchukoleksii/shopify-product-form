var ShopifyProductForm;(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(){this.entries=[]}function r(t){if("object"!=typeof t)throw new TypeError(t+" is not an object.");if(0===Object.keys(t).length&&t.constructor===Object)throw new Error(t+" is empty.")}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}t.r(e),t.d(e,{ProductForm:()=>c,default:()=>l,getUrlWithVariant:()=>s}),n.prototype.add=function(t,e,n){this.entries.push({element:t,event:e,fn:n}),t.addEventListener(e,n)},n.prototype.removeAll=function(){this.entries=this.entries.filter((function(t){return t.element.removeEventListener(t.event,t.fn),!1}))};var p={idInput:'[name="id"]',optionInput:'[name^="options"]',quantityInput:'[name="quantity"]',propertyInput:'[name^="properties"]',sellingPlanInput:'[name^="selling_plan"]'};function s(t,e){return/variant=/.test(t)?t.replace(/(variant=)[^&]+/,"$1"+e):/\?/.test(t)?t.concat("&variant=").concat(e):t.concat("?variant=").concat(e)}function c(t,e,r){this.element=t,this.product=function(t){if("object"!==o(t))throw new TypeError(t+" is not an object.");if(void 0===t.variants[0].options)throw new TypeError("Product object is invalid. Make sure you use the product object that is output from {{ product | json }} or from the http://[your-product-url].js route");return t}(e),(r=r||{}).selectors&&(p=u(u({},p),r.selectors)),this._listeners=new n,this._listeners.add(this.element,"submit",this._onSubmit.bind(this,r)),this.optionInputs=this._initInputs(p.optionInput,this._onOptionChange.bind(this,r)),r.onQuantityChange&&(this.quantityInputs=this._initInputs(p.quantityInput,r.onQuantityChange)),r.onPropertyChange&&(this.propertyInputs=this._initInputs(p.propertyInput,r.onPropertyChange)),r.onSellingPlanChange&&(this.sellingPlanInputs=this._initInputs(p.sellingPlanInput,r.onSellingPlanChange))}c.prototype.init=function(){this._listeners.removeAll()},c.prototype.destroy=function(){this._listeners.removeAll()},c.prototype.options=function(){return t=this.optionInputs,e=function(t){return t.name=/(?:^(options\[))(.*?)(?:\])/.exec(t.name)[2],t},t.reduce((function(t,n){return(n.checked||"radio"!==n.type&&"checkbox"!==n.type)&&t.push(e({name:n.name,value:n.value})),t}),[]);var t,e},c.prototype.variant=function(){return function(t,e){r(t);var n=function(t,e){r(t),function(t){if(!Array.isArray(t))throw new TypeError(t+" is not an array.");if(0===t.length)return[];if(!t[0].hasOwnProperty("name"))throw new Error(t[0]+"does not contain name key.");if("string"!=typeof t[0].name)throw new TypeError("Invalid value type passed for name of option "+t[0].name+". Value should be string.")}(e);var n=[];return e.forEach((function(e){for(var r=0;r<t.options.length;r++)if(t.options[r].name.toLowerCase()===e.name.toLowerCase()){n[r]=e.value;break}})),n}(t,e);return function(t,e){return r(t),function(t){if(Array.isArray(t)&&"object"==typeof t[0])throw new Error(t+"is not a valid array of options.")}(e),t.variants.filter((function(t){return e.every((function(e,n){return t.options[n]===e}))}))[0]||null}(t,n)}(this.product,this.options())},c.prototype.properties=function(){var t,e,n=(t=this.propertyInputs,e=function(t){return/(?:^(properties\[))(.*?)(?:\])/.exec(t)[2]},t.reduce((function(t,n){return(n.checked||"radio"!==n.type&&"checkbox"!==n.type)&&(t[e(n.name)]=n.value),t}),{}));return 0===Object.entries(n).length?null:n},c.prototype.selling_plan=function(){return null},c.prototype.quantity=function(){return this.quantityInputs[0]?Number.parseInt(this.quantityInputs[0].value,10):1},c.prototype._setIdInputValue=function(t){var e=this.element.querySelector(p.idInput);e||((e=document.createElement("input")).type="hidden",e.name="id",this.element.appendChild(e)),e.value=t.toString()},c.prototype._onOptionChange=function(t,e){e.dataset=this._getProductFormEventData(),e.dataset.variant&&this._setIdInputValue(e.dataset.variant.id),t.onOptionChange&&"function"==typeof t.onOptionChange&&t.onOptionChange(e)},c.prototype._onSubmit=function(t,e){e.dataset=this._getProductFormEventData(),e.dataset.variant&&this._setIdInputValue(e.dataset.variant.id),t.onFormSubmit&&"function"==typeof t.onFormSubmit&&t.onFormSubmit(e)},c.prototype._onFormEvent=function(t){return void 0===t?Function.prototype:function(e){e.dataset=this._getProductFormEventData(),t(e)}.bind(this)},c.prototype._initInputs=function(t,e){return Array.prototype.slice.call(this.element.querySelectorAll(t)).map(function(t){return this._listeners.add(t,"change",this._onFormEvent(e)),t}.bind(this))},c.prototype._getProductFormEventData=function(){var t={options:this.options(),variant:this.variant(),quantity:this.quantity()},e=this.properties();e&&(t=u(u({},t),{},{properties:e}));var n=this.selling_plan();return n&&(t=u(u({},t),{},{selling_plan:n})),t};const l=c;ShopifyProductForm=e})();