createChessBoard()

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

async function outPutPersudoCode(code){
    let pcode = document.getElementById("persudo-code")
    pcode.innerHTML += `<div class="persudo-log">${code}</div>`
    pcode.scrollTop = pcode.scrollHeight
}
