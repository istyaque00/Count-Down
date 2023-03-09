const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const currYear = new Date().getFullYear();

const newYear = new Date(`January 01 ${currYear + 1} 00:00:00`);

const updateTime = () => {
  const currTime = new Date();
  const diff = newYear - currTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;
};

setInterval(updateTime, 1000);
