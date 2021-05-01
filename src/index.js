import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.body.style;

startBtn.addEventListener('click', () => { timer.start(); });
stopBtn.addEventListener('click', () => { timer.stop(); });

// timer
const timer = {
    intervalId: null,
    isActive: false,

    start() { // запускаем счетчик
        if(this.isActive) {
            return;
        }

        const startTime = Date.now(); // запоминаем текущую дату
        this.isActive = true;

        this.intervalId = setInterval(() => { // что делать при нажатии на старт
            showColor(colors); // вызываем функцию
        }, 1000); 
    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    },
};

// рандомное число
const randomIntegerFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// находим цвет
const showColor = items => { 
    const index = randomIntegerFromInterval(0, items.length - 1);
    const color = items.find(item => items.indexOf(item) === index);
    body.backgroundColor = color;
}

