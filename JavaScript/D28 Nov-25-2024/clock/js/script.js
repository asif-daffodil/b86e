const clock = document.querySelector('.clock');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const week = document.querySelector('.week');

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
days.forEach(day => {
    const div = document.createElement('div');
    div.textContent = day;
    week.appendChild(div);
});

const timeFunc = () => {
    const d = new Date();
    date.textContent = d.getDate() + " / " + d.toLocaleString('default', {month: 'short'}) + " / " + d.getFullYear();
    time.textContent = d.toLocaleString('default', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true});
    week.children[d.getDay()].style.cssText = `
    color: #fff; 
    background-color: #f00;
    box-shadow: 0 0 10px #f00;
    font-weight: bold;
    border: 1px solid yellow;
    `;
}

timeFunc();

setInterval(timeFunc, 1000);