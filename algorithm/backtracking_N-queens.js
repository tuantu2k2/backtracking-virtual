//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequy = 0
let isDone = false
let n = boardSize
let numQueens = 1
let queens = new Array(n)
function isFull(){
    if(numQueens >= n) return true
    return false
}


//init array chess board
function init(){
    for(let i = 0; i < n; i++)
        queens[i] = -1;
}

// function output(){
//     for(let i =1; i <= 8;i++){
//         for(let j =1; j <= 8; j++){
//             if(queens[i] == j){

//                     let start = String.fromCharCode(96+i)+j
//                 let end = String.fromCharCode(96+i)+j
//                 addQueen(start)
//                 Move(start,end)
//                 }

//         }

//     }
//     isDone = true
// }
//cột k , hàng j
function canPutQueen( i, j){
    for(let k = 0; k < i; k++)
    // co quân hậu cùng hàng j ở phía trái hoặc đường chéo : trị tuyệt đối của chỉ số dòng - dòng = cột - cột => cùng đg chéo
        if(queens[k] == j || Math.abs(k - i) == Math.abs(queens[k] - j))
            return false;
    return true;
}
let delay = 300


async function putQueen( idx){
    if(!isDone){
        await solandequy++
        let pois = `${idx}-0`

           await clearCol(idx)
           await addQueen(idx,0)
           await sleep(delay)
        for (let j = 0; j < n; j++){
            if(isDone) break
            let poie = `${idx}-${j}`

                await moveQueen(pois,poie)
                pois = poie
                // console.log("idtimeout"+id)
                // console.log(delay+"poi"+poi+"-pois"+pois)
                await sleep(delay)

            if(j == n-1 && !canPutQueen(idx, j)) {
                await clearCol(idx)
                await removeQueen(idx-1,n-1)
                // console.log("sai"+String.fromCharCode(96+idx)+j)
            }
            if(canPutQueen(idx, j) == true){
                queens[idx] = j;
                
                if(idx == n-1){
                    // output();
                    isDone = true
                    break
                }
                else{
                    await putQueen(idx + 1);
                }

                    
                // queens[idx] = 0;
            }
        }

    }
}
//event

//vd col = ""
function clearCol(i){
    for(let j=0; j < 8; j++){
        removeQueen(i, j)
    }
}

function sleep(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, milisec);
    });
  }




// init()
// putQueen(1)
console.log(queens)
console.log("solandequy:"+solandequy)


