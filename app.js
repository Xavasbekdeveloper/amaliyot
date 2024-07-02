const form = document.querySelector(".form");
const lesson = document.querySelector(".lesson");
const rest = document.querySelector(".rest");
const count = document.querySelector(".count");
const taymer = document.querySelector(".taymer");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let lessonValue = parseInt(lesson.value);
  let restValue = parseInt(rest.value);
  let countValue = parseInt(count.value);
  startTimer(lessonValue, restValue, countValue);
});

function startTimer(lessonValue, restValue, countValue) {
  let cycle = 0;

  function lessonTimer() {
    let lessonTime = lessonValue * 60;
    let lessonInterval = setInterval(() => {
      let minutes = Math.floor(lessonTime / 60);
      let seconds = lessonTime % 60;
      taymer.innerHTML = `
        <span>Dars  vaqti: ${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }</span>
      `;

      if (lessonTime <= 0) {
        clearInterval(lessonInterval);
        restTimer();
      } else {
        lessonTime--;
      }
    }, 1000);
  }

  function restTimer() {
    let restTime = restValue * 60;
    let restInterval = setInterval(() => {
      let minutes = Math.floor(restTime / 60);
      let seconds = restTime % 60;
      taymer.innerHTML = `
        <span>Dam vaqti: ${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }</span>
      `;
      if (restTime <= 0) {
        clearInterval(restInterval);
        cycle++;
        if (cycle < countValue) {
          lessonTimer();
        } else {
          taymer.innerHTML = "taymer tugadi!";
        }
      } else {
        restTime--;
      }
    }, 1000);
  }

  lessonTimer();
}
