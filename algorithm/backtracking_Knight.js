//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequyK = 0
let isDoneK = false
let KnightPoint = 0
let point = 0
delay = 300
let mK = boardSizeMK
let nK = boardSizeK
let Knight = new Array(8)
let numC = 1
let curentPoix = 0
let curentPoiy = 0
function isDoneKinghtTour() {
  if (KnightPoint == boardSizeK * boardSizeMK) return true
  return false
}

//init array chess board
function init(row,col) {
  for (let i = 0; i < row; i++)
    Knight[i] = new Array(col)
  //set -1 for all
  for (let i = 0; i < row; i++)
    for (let j = 0; j < col; j++)
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

// function output(){
//     for(let i =1; i <= 8;i++){
//         for(let j =1; j <= 8; j++){
//             if(Knights[i] == j){

//                     let start = String.fromCharCode(96+i)+j
//                 let end = String.fromCharCode(96+i)+j
//                 addKnight(start)
//                 Move(start,end)
//                 }

//         }

//     }
//     isDone = true
// }

// kiem tra vi tri move co nam ngoai ban co hay da di qua chua
function canMoveKinght(x, y) {
  return x >= 0 && y >= 0 && x < nK && y < mK && Knight[x][y] === -1;
}
let k = 0
async function knightTour(x, y, numC) {
  await sleep(delay);
  console.log(numC)
  if (numC == nK * mK) {
    console.log(numC);
    return true;
  }
  if (isWait) {
    const result = await Promise.any([playClick(), nextClick(), prevClick()])
    console.log(result)
    if (result == "playSteps") playSteps()
    else if (result == "nextSteps") nextSteps()
    else {
      prevSteps()
      idx = idxToBack
    }
  }
  // await (playSteps() || (nextSteps() ||  prevStep()) )

  let poi = `${x}-${y}`;
  for (let i = 0; i < 8; i++) {
    //  sleep(delay);
    const nextX = x + knightMoves[i][0];
    const nextY = y + knightMoves[i][1];
    // let poislog = `${nextX}, ${String.fromCharCode(nextY+97)}`
    // delay += more;
    //  sleep(delay);
    if (await canMoveKinght(nextX, nextY)) {
      // Tạo khoảng trễ
      await sleep(delay);

      Knight[nextX][nextY] = numC;
      let end = `${nextX}-${nextY}`;
      await moveKnight(poi, end)
      numC++;
      await addNumberToSquareK(nextX, nextY, numC);
      await sleep(delay);
      // console.log("move" + poi + end);
      await k++;
      //  sleep(delay);
      if (await knightTour(nextX, nextY, numC)) {
        // console.log("ket thuc"+numC)
        return true;
      } else {
        // Quay lui nếu không tìm được lời giải
        Knight[nextX][nextY] = -1;

        // setTimeout(()=>{
        await sleep(delay)
        await removeNumberFromSquareK(nextX, nextY);
        await moveKnight(end, poi)
        await sleep(delay)


        // },delay)
        await numC--;
      }
    }
  }
  return false;
}


function sleep(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let posi = {

}
let a = 0, b = 0;


init(boardSizeK,boardSizeMK)
function startKnight(x,y,numC) {
  // alert(boardSizeK+" "+boardSizeMK)
  addKnight(x, y)
  Knight[x][y] = numC;
  addNumberToSquareK(x, y, numC)
  knightTour(x, y, numC)
  console.log(k)
  if (numC = nK * mK) console.log("Tim thay l giải")
}



console.log(Knight)

// putKnight(1)
// console.log(Knights)
console.log("solandequyK:" + solandequyK)




