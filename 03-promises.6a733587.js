!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("6JpON");function i(e,n){var t=Math.random()>.3;new Promise((function(e,o){setTimeout((function(){t?e():o()}),n)})).then((function(){r.Notify.success("Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(){r.Notify.failure("Rejected promise ".concat(e," in ").concat(n,"ms"))}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=new FormData(e.target),t=Number(n.get("delay")),o=Number(n.get("step")),r=Number(n.get("amount")),u=1;u<=r;u++)1===u||(t+=o),i(u,t)}))}();
//# sourceMappingURL=03-promises.6a733587.js.map