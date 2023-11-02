createChessBoard("boardSize")

// hàm to dam cac buoc trong giai thuat
function rmHighLightLineCode(id) {
  let persudo_linesCode = document.getElementById(`${id}`).children;
  for (let i = 0; i < persudo_linesCode.length; i++) {
    let el = persudo_linesCode[i];
    if (el.classList.contains("hl-code")) el.classList.remove("hl-code");
  }
}

async function highLightLineCode(idx, id = "persudo-code") {
  return new Promise((resolve) => {
    setTimeout(() => {
      let persudo_linesCode = document.getElementById(`${id}`).children;
      if (!persudo_linesCode[idx].classList.contains("hl-code")) {
        rmHighLightLineCode(id);
        persudo_linesCode[idx].classList.add("hl-code");

        // console.log(selection_linesCode[idx]);
      }
      resolve();
    }, delay);
  });
}

async function outPutPersudoCode(code) {
  let pcode = document.getElementById("log-code")
  pcode.innerHTML += `<div class="persudo-log">${code}</div>`
  pcode.scrollTop = pcode.scrollHeight
}
// speed scroll bar

let speed_input = document.getElementById("speed_input")
let speed_inputK = document.getElementById("speed_inputK")


// Event delay sort
speed_input.addEventListener("input", function runVolume(e) {
  // console.log(speed_input.value);
  delay = 500 - parseInt(speed_input.value);
});
speed_inputK.addEventListener("input", function runVolume(e) {
  // console.log(speed_input.value);
  delay = 500 - parseInt(speed_inputK.value);
});
//button Persudo code and steps
let btnPersudo = document.getElementById("option_psdcode")
let btnSteps = document.getElementById("option_logcode")
let logCode = document.getElementById("log-code")
let persudoCode = document.getElementById("persudo-code")
btnPersudo.addEventListener("click", () => {
  logCode.classList.add("hidden-on")
  btnSteps.classList.remove("option_items-selected")
  persudoCode.classList.remove("hidden-on")
  btnPersudo.classList.add("option_items-selected")
})

btnSteps.addEventListener("click", () => {
  persudoCode.classList.add("hidden-on")
  btnPersudo.classList.remove("option_items-selected")
  logCode.classList.remove("hidden-on")
  btnSteps.classList.add("option_items-selected")
})

//btn checkbox grid

// Hàm chờ sự kiện click để kích hoạt
const btnNext = document.getElementById("nextBtn")
const btnPlay = document.getElementById("playBtn")
const btnStop = document.getElementById("stopBtn")
const btnPrevious = document.getElementById("prevBtn")
const stopDiv = document.querySelector(".steps-icon_stopBtn")
const playDiv = document.querySelector(".steps-icon_playBtn")
let idxToBack = 0

// btnPrevious.addEventListener("click",prevSteps)
btnStop.addEventListener("click", () => {
  isWait = true
  stopDiv.classList.add("hidden-on")
  playDiv.classList.remove("hidden-on")

})

// btnPlay.addEventListener("click",playSteps)
// btnNext.addEventListener("click",nextSteps)
async function playClick() {
  // isWait = false
  await new Promise(resolve => {
    const handleClick = () => {
      // Bắt đầu chạy khi có sự kiện click
      btnPlay.removeEventListener("click", handleClick);
      resolve();
    };
    btnPlay.addEventListener("click", handleClick);

  });
  return "playSteps";
}

async function nextClick() {
  await new Promise(resolve => {
    const handleClick = () => {
      // Bắt đầu chạy khi có sự kiện click
      btnNext.removeEventListener("click", handleClick);
      resolve();
    };
    btnNext.addEventListener("click", handleClick);
  });
  return "nextSteps"
  // Khi có sự kiện click, bắt đầu chạy vòng lặp chờ
}

async function prevClick() {
  await new Promise(resolve => {
    const handleClick = () => {
      btnPrevious.removeEventListener("click", handleClick);
      resolve();
    };
    btnPrevious.addEventListener("click", handleClick);
  });
  return "prevSteps"
}

function playSteps() {
  isWait = false
  stopDiv.classList.remove("hidden-on")
  playDiv.classList.add("hidden-on")
}

function prevSteps() {
  console.log("prev")
  // isBack = true
  queens[idxToBack] = 0
  clearRow(idxToBack)
  clearRow(idxToBack - 1)
  idxToBack--
  queens[idxToBack] = 0
  clearRow(idxToBack)
  clearRow(idxToBack - 1)
  idxToBack--
}

function nextSteps() {
  isWait = true
}

//start visual btn
function startVisual(value) {

  if (value == 1) startQueen(0)
  else ok()
}

//knighttour, n queens btn
let pageKnight = document.querySelector(".main-knight")
let pageQueen = document.querySelector(".main-queen")

function toKnightPage() {
  pageQueen.classList.add("hidden-on")
  pageKnight.classList.remove("hidden-on")
}

