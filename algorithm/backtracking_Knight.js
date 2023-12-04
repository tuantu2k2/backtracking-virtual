//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequyK = 0
let isDoneK = false
let KnightPoint = 0
delay = 300
let mK = boardSizeMK //cột
let nK = boardSizeK  //hàng

let Knight = new Array(8)

let numC = 1
let curentPoix = 0
let curentPoiy = 0


//initK array chess board
function initK() {
  Knight = new Array(boardSizeK)
  for (let i = 0; i < boardSizeK; i++)
    Knight[i] = new Array(boardSizeMK)
  //set -1 for all
  for (let i = 0; i < boardSizeK; i++)
    for (let j = 0; j < boardSizeMK; j++)
      Knight[i][j] = -1
}
//
const knightMoves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];


// kiem tra vi tri move co nam ngoai ban co hay da di qua chua
async function canMoveKinght(row, col) {
  await highLightLineCode(0, "persudo-codeK")
  await highLightLineCode(1, "persudo-codeK")
  return row >= 0 && col >= 0 && row < nK && col < mK && Knight[row][col] === -1;
}
let k = 0
async function knightTour(row, col, numC) {
  solandequyK++;
  await highLightLineCode(3, "persudo-codeK")
  await sleep(delay);
  console.log(numC)
  await highLightLineCode(4, "persudo-codeK")
  if (numC == nK * mK) {
    isDoneK = true;
    console.log(numC);
    await highLightLineCode(5, "persudo-codeK")
    return true;
  }
  if (isWait) {
    const result = await Promise.any([playClickK(), nextClickK()])
    console.log(result)
    if (result == "playSteps") playStepsK()
    else if (result == "nextSteps") nextStepsK()
  }
  // await (playSteps() || (nextSteps() ||  prevStep()) )

  let poi = `${row}-${col}`;
  await highLightLineCode(6, "persudo-codeK")
  for (let i = 0; i < 8; i++) {
    //  sleep(delay);
    if (isWait) {
      const result = await Promise.any([playClickK(), nextClickK()])
      console.log(result)
      if (result == "playSteps") playStepsK()
      else if (result == "nextSteps") nextStepsK()
    }
    await highLightLineCode(7, "persudo-codeK")
    const nextR = row + knightMoves[i][0];
    await highLightLineCode(8, "persudo-codeK")
    const nextC = col + knightMoves[i][1];
    poielogK = `${nextR}, ${String.fromCharCode(97 + nextC)}`
    await outPutLogCodeK(`Kiểm tra vị trí (${poielogK})`)
    // let poislog = `${nextR}, ${String.fromCharCode(nextC+97)}`
    // delay += more;
    //  sleep(delay);
    await highLightLineCode(9, "persudo-codeK")
    if (await canMoveKinght(nextR, nextC)) {
      await outPutLogCodeK(`-------> Có thể đặt ở vị trí (${poielogK})`)
      // Tạo khoảng trễ
      await sleep(delay);
      await highLightLineCode(10, "persudo-codeK")
      Knight[nextR][nextC] = numC;
      let end = `${nextR}-${nextC}`;
      await moveKnight(poi, end)
      await highLightLineCode(11, "persudo-codeK")
      numC++;
      addNumberToSquareK(nextR, nextC, numC);
      await sleep(delay);
      // console.log("move" + poi + end);
      //  sleep(delay);
      await highLightLineCode(12, "persudo-codeK")
      if (await knightTour(nextR, nextC, numC)) {
        // console.log("ket thuc"+numC)
        await highLightLineCode(13, "persudo-codeK")
        return true;
      } else {
        await highLightLineCode(14, "persudo-codeK")
        await highLightLineCode(16, "persudo-codeK")
        // Quay lui nếu không tìm được lời giải
        Knight[nextR][nextC] = -1;
        
        await outPutLogCodeK(`------- Quay lại KnightTour(${row}, ${String.fromCharCode((col + 97))}, ${numC})-----------`)
        await sleep(delay)
        removeNumberFromSquareK(nextR, nextC);
        await moveKnight(end, poi)
        await sleep(delay)


        // },delay)
        await highLightLineCode(17, "persudo-codeK")
        numC--;
      }
    }
  }
  await highLightLineCode(18, "persudo-codeK")
  return false;
}


function sleep(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

async function clearRowK(i) {
  for (let j = 0; j < n; j++) {
    removeKnight(i, j)
  }
}

function clearBoardK() {
  for (let j = 0; j < boardSize; j++) {
    clearRow(j)
  }
}


initK()
async function startKnight(x, y, numC) {
  // alert(boardSizeK+" "+boardSizeMK)
  if (isDoneK) {
    isDoneK = false
    initK()
  }
  addKnight(x, y)
  Knight[x][y] = numC;
  addNumberToSquareK(x, y, numC)
  await knightTour(x, y, numC)
  if (isDoneK) addNotification("Success", "Giải thuật hoàn thành")
  else addNotification("Failed", "Không thể tìm thấy lời giải")
  await outPutLogCodeK(`------------ Kết thúc---------------`)
  // console.log(k)
}



console.log(Knight)

// putKnight(1)
// console.log(Knights)
console.log("solandequyK:" + solandequyK)




