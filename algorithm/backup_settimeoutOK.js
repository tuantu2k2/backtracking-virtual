//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequyK = 0
let isDoneK = false
let KnightPoint = 0
let point = 0
delay = 30
let m = 5
n = 5
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
    for(let i = 0; i < n; i++)
        for(let j = 0; j < m; j++)
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
function knightTour(x, y, numC) {
  //  sleep(delay);
  console.log(numC)
  if (numC == n * m) {
    console.log(numC);
    return true;
  }

  let poi = `${x}-${y}`;
  for (let i = 0; i < 8; i++) {
    //  sleep(delay);
    const nextX = x + knightMoves[i][0];
    const nextY = y + knightMoves[i][1];
    // delay += more;
    //  sleep(delay);
    if (canMoveKinght(nextX, nextY)) {
      // Tạo khoảng trễ
      //  sleep(delay);

      Knight[nextX][nextY] = numC;
      let end = `${nextX}-${nextY}`;
      numC++;
      delay += more
      setTimeout(()=>{
        addNumberToSquare(nextX, nextY, numC);
      },delay)
      // console.log("move" + poi + end);
      k++;
      //  sleep(delay);
      if ( knightTour(nextX, nextY, numC)) {
        // console.log("ket thuc"+numC)
        return true;
      } else {
        // Quay lui nếu không tìm được lời giải
        Knight[nextX][nextY] = -1;
        delay += more
        setTimeout(()=>{
          removeNumberFromSquare(nextX, nextY);
        },delay)
        numC--;
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
let a = 2,b = 2;
init()


function ok(){
    // addKnight(0,0)
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




