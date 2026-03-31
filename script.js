let time = 60;
let progress = 0;

let countdown = setInterval(() => {
  time--;
  document.getElementById("countdown").innerText = time;

  progress += 1.6;
  document.querySelector(".progress").style.width = progress + "%";

  if (time <= 0) {
    clearInterval(countdown);
  }
}, 1000);

function reloadPage() {
  location.reload();
}