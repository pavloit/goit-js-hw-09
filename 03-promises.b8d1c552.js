var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("7Y9D8");const i=document.querySelector(".form");function l(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();const t=new FormData(e.target);let o=Number(t.get("delay")),n=Number(t.get("step")),s=Number(t.get("amount"));i.reset();for(let e=1;e<=s;e++)1===e||(o+=n),l(e,o).then((({position:e,delay:t})=>{r.Notify.success(`Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.b8d1c552.js.map
