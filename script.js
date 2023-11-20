

// hàm to dam cac buoc trong giai thuat
function rmHighLightLineCode(id) {
  let persudo_linesCode = document.getElementById(`${id}`).children;
  for (let i = 0; i < persudo_linesCode.length; i++) {
    let el = persudo_linesCode[i];
    if (el.classList.contains("hl-code")) el.classList.remove("hl-code");
  }
}

async function highLightLineCode(idx,id) {
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

async function outPutPersudoCodeK(code) {
  let pcode = document.getElementById("log-codeK")
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
//button Persudo code and steps-----------------------------------------------
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
//Knight
let btnPersudoK = document.getElementById("option_psdcodeK")
let btnStepsK = document.getElementById("option_logcodeK")
let logCodeK = document.getElementById("log-codeK")
let persudoCodeK = document.getElementById("persudo-codeK")
btnPersudoK.addEventListener("click", () => {
  logCodeK.classList.add("hidden-on")
  btnStepsK.classList.remove("option_items-selected")
  persudoCodeK.classList.remove("hidden-on")
  btnPersudoK.classList.add("option_items-selected")
})

btnStepsK.addEventListener("click", () => {
  persudoCodeK.classList.add("hidden-on")
  btnPersudoK.classList.remove("option_items-selected")
  logCodeK.classList.remove("hidden-on")
  btnStepsK.classList.add("option_items-selected")
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
let idxforQueen = 0
function startVisual(value) {

  if (value == 1) {
    startQueen(idxforQueen)
  }
  else {
    if(numC > 1) numC--
    startKnight(curentPoix, curentPoiy, numC)
  }
}

//knighttour, n queens btn
let pageKnight = document.querySelector(".main-knight")
let pageQueen = document.querySelector(".main-queen")
let KnightBtn = document.querySelectorAll(".header_nav-item")[1]
let QueentBtn = document.querySelectorAll(".header_nav-item")[0]
function toKnightPage() {
  //reset về trang thái chưa kích hoạt
  isPlayActivated = true
  hightlightPlayBtn("K")
  QueentBtn.classList.remove("header_nav-item-activated")
  KnightBtn.classList.add("header_nav-item-activated")
  pageQueen.classList.add("hidden-on")
  pageKnight.classList.remove("hidden-on")
  localStorage.setItem("stateChess", "2")
  loadStateK()

}

function toQueenPage() {
    //reset về trang thái chưa kích hoạt
  isPlayActivated = true
  hightlightPlayBtn("Q")
  QueentBtn.classList.add("header_nav-item-activated")
  KnightBtn.classList.remove("header_nav-item-activated")
  pageQueen.classList.remove("hidden-on")
  pageKnight.classList.add("hidden-on")
  localStorage.setItem("stateChess", "1")
  loadStateQ()
}


function PlayControl() {
  //neu chua kích hoạt thì ấn sẽ được kích hoạt sự kiện play
    let playMode = parseInt(localStorage.getItem("stateChess"));  //1:queens,2 knight
    //queenBoard
    if (playMode == 1) {
      playControlQ()
      hightlightPlayBtn("Q")
    } else {
  
      playControlK()
      hightlightPlayBtn("K")
    }



}
function playControlQ() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const squareid = `square${i}-${j}`;
      document.getElementById(squareid).addEventListener('click', clickHandlerQ(i, j, squareid));
    }
  }
}

const clickHandlerQ = function (x, y, id) {
  return function () {
    //chi duoc add tai hang nay
    if (canPutQueen(x, y) && x == idxforQueen) {
      addQueen(x, y)
      queens[x] = y;
      idxforQueen++
      saveStateQ()
    } else if (x > idxforQueen) {
      highLightSquareErr(id)
      addNotification("Failed", `Đặt quân hậu ở hàng ${idxforQueen}`)
    }
    else {
      highLightSquareErr(id)
      addNotification("Failed", `Không thể đặt ở vị trí này`)
    }

    console.log(x + " " + y)
  }
};

function playControlK() {
  console.log("mode2")
  for (let i = 0; i < boardSizeK; i++) {
    for (let j = 0; j < boardSizeMK; j++) {
      const squareid = `squareK${i}-${j}`;
 
      document.getElementById(squareid).addEventListener('click', clickHandlerK(i, j, squareid));
    };
  }
}

const clickHandlerK = function (x, y, id) {
  return function () {
    //chi duoc add tai hang nay
    console.log(x + " " + y)
    if (numC == 1) {
      addKnight(x, y)
      addNumberToSquareK(x, y, numC)
      Knight[x][y] = numC;
      // curentPoi = `squareK${x}-${y}`
      curentPoix = x
      curentPoiy = y
      numC++
      saveStateK()
    }
    else {
      if (checkPreviousMove(x, y)) {
        sPoi = checkPreviousMove(x, y);
        ePoi = `${x}-${y}`;
        moveKnight(sPoi, ePoi)
        addNumberToSquareK(x, y, numC)
        Knight[x][y] = numC;
        numC++
        saveStateK()
        // saveStateQ()
        curentPoix = x
        curentPoiy = y
      } else {
        highLightSquareErr(id)
        addNotification("Failed", `Không thể đặt ở vị trí này`)
      }
    }
  }
}

let isPlayActivated = false;
function hightlightPlayBtn(chessName) {
  const playBtnArr = document.querySelectorAll(".left_playControl-play")
  let rmFunc
  if (chessName == "Q") {
    playBtn = playBtnArr[0]
    rmFunc = removePlayQ
  }
  else {
    playBtn = playBtnArr[1]
    rmFunc = removePlayK
  }
  //neu chua kich hoat thì thực hiện
  if (!isPlayActivated) {
    playBtn.classList.add("left_playControl-play-Activated")
    isPlayActivated = true
  } else {//nếu đã kích hoạt
    playBtn.classList.remove("left_playControl-play-Activated")
    rmFunc()
    isPlayActivated = false
  }
}

function removePlayQ(){
  createChessBoard(boardSize)
  loadStateQ()
}

function removePlayK(){
  createChessBoardKnight(boardSizeK,boardSizeMK)
  loadStateK()
}
//close notification
// jQuery(document).ready(function(){
//   jQuery('.toast__close').click(function(e){
//     e.preventDefault();
//     var parent = $(this).parent('.toast');
//     parent.fadeOut("slow", function() { $(this).remove(); } );
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const toastCloseButtons = document.querySelectorAll('.toast__close');

  toastCloseButtons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.toast');
      parent.style.transition = 'opacity 0.5s';

      parent.style.opacity = '0';
      parent.addEventListener('transitionend', function () {
        parent.remove();
      });
    });
  });
});

function addNotification(state, content) {
  const notifiCell = document.querySelector(".toast__cell")
  if (state == "Success") {
    progressColor = "#2BDE3F"
    classState = "toast--green"
    svgTag = `      <svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"></path>
          </g></g>
          </svg>`
  } else if (state == "Failed") {
    progressColor = "#ff1c07"
    classState = "toast--red"
    svgTag = `<svg version="1.1" class="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve">
    <g>
      <polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0  "></polygon>
      <rect x="130.563" y="261.168" width="40.525" height="40.523"></rect>
    </g>
        </svg>`
  }
  notifiCell.innerHTML = `<div class="toast ${classState} add-margin">
    <div class="toast__icon">
    ${svgTag}
    </div>
    <div class="toast__content">
      <p class="toast__type">${state}</p>
      <p class="toast__message">${content}</p>
    </div>
    <div class="progress-bar" style="background-color: ${progressColor};"></div>
    <div class="toast__close">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 15.642 15.642">
    <path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z"></path>
  </svg>
    </div>
  </div>`
  removeNotification()
}

function removeNotification() {
  const notification = document.querySelector('.toast');
  const progressBar = document.querySelector('.progress-bar');

  // Hiển thị thông báo
  // notification.style.display = 'block';

  // Thời gian hiển thị thông báo (tính bằng mili giây)
  const displayTime = 3000; // 3 giây

  // Tạo một hiệu ứng tiến trình
  const startTime = Date.now();
  let animationFrameId;

  function updateProgressBar() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const width = 100 - (elapsedTime / displayTime) * 100;
    progressBar.style.width = width + '%';

    if (elapsedTime < displayTime) {
      animationFrameId = requestAnimationFrame(updateProgressBar);
    } else {
      // Đóng thông báo khi xong
      notification.style.display = 'none';
    }
  }

  // Bắt đầu hiệu ứng tiến trình
  animationFrameId = requestAnimationFrame(updateProgressBar);
};
