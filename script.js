const countdownElement = document.getElementById("countdown");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const statusText = document.getElementById("statusText");
const retryBtn = document.getElementById("retryBtn");

let timeLeft = 60;
let progress = 0;

const statusMessages = [
  "正在重新分流旅客流量...",
  "正在檢查訂票服務狀態...",
  "正在恢復付款前連線穩定度...",
  "系統持續修復中，請稍候..."
];

let statusIndex = 0;

function updateStatusMessage() {
  statusIndex++;
  if (statusIndex >= statusMessages.length) {
    statusIndex = 0;
  }
  statusText.textContent = statusMessages[statusIndex];
}

function updateWaitingPage() {
  if (timeLeft > 0) {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    progress = Math.round(((60 - timeLeft) / 60) * 100);
    progressBar.style.width = progress + "%";
    progressPercent.textContent = progress + "%";

    if (timeLeft % 15 === 0 && timeLeft !== 60) {
      updateStatusMessage();
    }
  } else {
    clearInterval(timer);
    countdownElement.textContent = "0";
    progressBar.style.width = "100%";
    progressPercent.textContent = "100%";
    statusText.textContent = "系統已恢復部分服務，您現在可以再次嘗試。";
    retryBtn.textContent = "重新進入訂票系統";
  }
}

const timer = setInterval(updateWaitingPage, 1000);

retryBtn.addEventListener("click", function () {
  location.reload();
});