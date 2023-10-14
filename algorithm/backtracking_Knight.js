//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequyK = 0
let isDoneK = false
let KnightPoint = 0
let point = 0
delay = 300
let m = 8
n = 8
let Knight = new Array(n)
let numC = 1
// let prints = document.getElementById("chess")
function isDoneKinghtTour(){
    if(KnightPoint == boardSize*boardSize) return true
    return false
}

//init array chess board
function init(){
    //8x8
    for(let i = 0; i < n; i++)
        Knight[i] = new Array(m)
    //set -1 for all
    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
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
function canMoveKinght( x, y){
    return x >= 0 && y >= 0 && x < n && y < m && Knight[x][y] === -1;
}
let k = 0
async function knightTour(x, y, numC) {
   await sleep(delay);
  await console.log(numC)
  if (numC == n * m) {
    console.log(numC);
    return true;
  }

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
      await  sleep(delay);

      Knight[nextX][nextY] = numC;
      let end = `${nextX}-${nextY}`;
      await moveKnight(poi,end)
      numC++;
      await addNumberToSquare(nextX, nextY, numC);
      await  sleep(delay);
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
          await moveKnight(end,poi)
          await sleep(delay)
          
          await removeNumberFromSquare(nextX, nextY);
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
let a = 0,b = 0;
init()


function ok(){
    addKnight(0,0)
    Knight[a][b] = 0;
    addNumberToSquare(a,b,1)
    knightTour(a, b, 1)
      console.log(k)
    if(numC = n*m) console.log("Tim thay l giải")
}



console.log(Knight)

// putKnight(1)
// console.log(Knights)
console.log("solandequyK:"+solandequyK)




