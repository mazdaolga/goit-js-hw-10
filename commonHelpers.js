import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as u,i as l}from"./assets/vendor-77e16229.js";const e={datetimePicker:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),daysEl:document.querySelector("[data-days]"),hoursEl:document.querySelector("[data-hours]"),minutesEl:document.querySelector("[data-minutes]"),secondsEl:document.querySelector("[data-seconds]")};let r;e.startBtn.disabled=!0;e.startBtn.addEventListener("click",t=>{console.log(t.target);const o=setInterval(()=>{a()},1e3);setTimeout(()=>{clearInterval(o)},r-Date.now())});function m(t){const s=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:i,minutes:c,seconds:d}}function a(t){const o=r-Date.now(),n=m(o);console.log(n),e.daysEl.innerText=String(n.days).padStart(2,"0"),e.hoursEl.innerText=String(n.hours).padStart(2,"0"),e.minutesEl.innerText=String(n.minutes).padStart(2,"0"),e.secondsEl.innerText=String(n.seconds).padStart(2,"0")}function f(t){return t<=Date.now()}const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(r=t[0],f(r)){l.error({position:"topRight",title:"error",message:"Please choose a date in the future"});return}else a(),e.startBtn.disabled=!1}};u(".flatpickr-input",h);
//# sourceMappingURL=commonHelpers.js.map