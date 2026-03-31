let time = 60;
let queue = 128;

const countdownEl = document.getElementById("countdown");
const queueEl = document.getElementById("queue");
const statusText = document.getElementById("statusText");

const statusMessages = [
  "正在重新分流旅客流量...",
  "正在檢查訂票系統...",
  "正在恢復服務穩定度..."
];

let statusIndex = 0;

const timer = setInterval(() => {
  time--;
  countdownEl.innerText = time;

  // 模擬排隊人數下降（超加分🔥）
  if (queue > 0) {
    queue -= Math.floor(Math.random() * 3);
    if (queue < 0) queue = 0;
    queueEl.innerText = queue;
  }

  // 切換狀態
  if (time % 15 === 0) {
    statusIndex = (statusIndex + 1) % statusMessages.length;
    statusText.innerText = statusMessages[statusIndex];
  }

  if (time <= 0) {
    clearInterval(timer);
    statusText.innerText = "系統已恢復，請重新嘗試";
  }
}, 1000);

document.getElementById("retryBtn").onclick = () => {
  location.reload();
};