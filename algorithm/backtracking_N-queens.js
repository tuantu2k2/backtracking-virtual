//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequy = 0,steps = 1
let idxHightlight = 1
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
//hàng i, cột j
function canPutQueen( i, j){
    for(let k = 0; k < i; k++)
    // co quân hậu cùng cột j ở phía trái hoặc đường chéo : trị tuyệt đối của chỉ số dòng - dòng = cột - cột => cùng đg chéo
        if(queens[k] == j || Math.abs(k - i) == Math.abs(queens[k] - j))
            return false;
    return true;
}
let delay = 300

//idx: hàng
async function putQueen( idx){
    await outPutPersudoCode(`--------------------Step ${steps}-----------------------`)
    await outPutPersudoCode(`Gọi hàm putQueen(${idx})`)
    await highLightLineCode(6)
    if(!isDone){
        await highLightLineCode(7)
        solandequy++
        steps++
        let pois = `${idx}-0`
        let poislog = `${idx}, ${String.fromCharCode(97+0)}`
            clearRow(idx)
           await addQueen(idx,0)
        //    await outPutPersudoCode(`Thêm quân hậu ở ô (${idx} ,0)`)
           await sleep(delay)

        for (let j = 0; j < n; j++){
            await highLightLineCode(8)
            console.log(j)
            if(isDone) {
                await highLightLineCode(9)
                break
            }

            let poie = `${idx}-${j}`
            let poielog = `${idx}, ${String.fromCharCode(97+j)}`
            await outPutPersudoCode(`Kiểm tra vị trí (${poielog})`)
            await moveQueen(pois,poie)
                pois = poie
                poislog = poielog
                // console.log("idtimeout"+id)
                // console.log(delay+"poi"+poi+"-pois"+pois)
                await sleep(delay)

            if(canPutQueen(idx, j) == true){
                await highLightLineCode(10)
                queens[idx] = j;
                await outPutPersudoCode(` => Có thể đặt ở ô(${poielog})`)
                await highLightLineCode(11)
                if(idx == n-1){
                    await highLightLineCode(12)
                    // output();
                    await outPutPersudoCode(`Kết thúc!!`)
                    isDone = true
                    await highLightLineCode(13)
                }
                else{
                    await highLightLineCode(14)
                    await highLightLineCode(15)
                    await putQueen(idx + 1);
                }

                    
                // queens[idx] = 0;
            }else {
                await outPutPersudoCode(` =>Không thể đặt ở ô(${poielog})`)
            }
            if(j == n-1 && !canPutQueen(idx, j)) {
                await highLightLineCode(16)
                queens[idx] = 0;
                await highLightLineCode(17)
                await clearRow(idx)
                await removeQueen(idx-1,n-1)
                await outPutPersudoCode(`Quay lại vòng lặp ở PutQueen(${idx-1})`)
                // console.log("sai"+String.fromCharCode(96+idx)+j)
            }
        }

    }
}
//event

//vd row = ""
function clearRow(i){
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


