//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequy = 0,steps = 1
let idxHightlight = 1
let isDone = false
let n = boardSize
let numQueens = 1
let queens

function isFull(){
    if(numQueens >= n) return true
    return false
}


//init array chess board
function initQ(){
    isDone = false
    idxforQueen = 0
    queens = new Array(boardSize)
    for(let i = 0; i < boardSize; i++)
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
    // có quân hậu cùng cột j ở phía trên hoặc đường chéo : trị tuyệt đối của chỉ số dòng - dòng = cột - cột => cùng đường chéo
function canPutQueen( i, j){
    for(let k = 0; k < i; k++)
        //cùng cột        || cùng đường chéo
        if(queens[k] == j || Math.abs(k - i) == Math.abs(queens[k] - j))
            return false;
    return true;
}
let delay = 300
let isWait = false
// let isNext = true
let isBack = false
let foundResult = false
//idx: hàng
async function putQueen( idx){
    // idxToBack = idx
    await outPutLogCode(`--------------------Step ${steps}-----------------------`)
    await outPutLogCode(`Gọi hàm putQueen(${idx})`)
    await highLightLineCode(6,"persudo-code")
    if(!isDone){
        if(isWait){
            const result = await Promise.any([playClick(), nextClick(), prevClick()])
            console.log(result)
            if(result == "playSteps") playSteps()
            else if(result == "nextSteps") nextSteps()
            // else {
            //     prevSteps()
            //     idx = idxToBack
            // }
            // await (playSteps() || (nextSteps() ||  prevStep()) )

        }
        await highLightLineCode(7,"persudo-code")
        solandequy++
        steps++
        let pois = `${idx}-0`
        let poislog = `${idx}, ${String.fromCharCode(97+0)}`
            await clearRow(idx)
           addQueen(idx,0)
           await sleep(delay)

        for (let j = 0; j < boardSize; j++){
            if(isWait){
                const result = await Promise.any([playClick(), nextClick(), prevClick()])
                console.log(result)
                if(result == "playSteps") playSteps()
                else if(result == "nextSteps") nextSteps()
                // else {
                //     prevSteps()
                //     idx = idxToBack
                // }
                // await (playSteps() || (nextSteps() ||  prevStep()) )
    
            }
            await highLightLineCode(8,"persudo-code")
            console.log(j)
            if(isDone) {
                await highLightLineCode(9,"persudo-code")
                break
            }

            let poie = `${idx}-${j}`
            let poielog = `${idx}, ${String.fromCharCode(97+j)}`
            await outPutLogCode(`Kiểm tra vị trí (${poielog})`)
            await moveQueen(pois,poie)
                pois = poie
                poislog = poielog
                // console.log("idtimeout"+id)
                // console.log(delay+"poi"+poi+"-pois"+pois)
                await sleep(delay)
            if(canPutQueen(idx, j) == true){
                await highLightLineCode(10,"persudo-code")
                queens[idx] = j;
                await outPutLogCode(` => Có thể đặt ở ô(${poielog})`)
                await highLightLineCode(11,"persudo-code")
                if(idx == n-1){
                    await highLightLineCode(12,"persudo-code")
                    // output();
                    await outPutLogCode(`Kết thúc!!`)
                    isDone = true
                    await highLightLineCode(13,"persudo-code")
                }
                else{
                    await highLightLineCode(14,"persudo-code")
                    await highLightLineCode(15,"persudo-code")
                    await putQueen(idx +1);
                }

                    
                // queens[idx] = 0;
            }else {
                await outPutLogCode(` =>Không thể đặt ở ô(${poielog})`)
                if(j == n-1) {
                    await highLightLineCode(16,"persudo-code")
                    queens[idx] = -1;
                    await highLightLineCode(17,"persudo-code")
                    await clearRow(idx)
                    await removeQueen(idx-1,n-1)
                    await outPutLogCode(`Quay lại vòng lặp ở PutQueen(${idx-1})`)
                    // console.log("sai"+String.fromCharCode(96+idx)+j)
                }
            }
        }

    }
}
//event

//vd row = ""
async function clearRow(i){
    for(let j=0; j < n; j++){
        removeQueen(i, j)
    }
}

function clearBoard(){
    for(let j=0; j < boardSize; j++){
        clearRow(j)
    }
}

function sleep(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, milisec);
    });
  }

async function startQueen(idxx){
    if (idxforQueen == 0 ) initQ()
    await putQueen( idxx)
    if (isDone) addNotification("Success","Giải thuật hoàn thành") 
    else addNotification("Failed","Không thể tìm thấy kết quả") 
    await outPutLogCode(`---------------Kết thúc---------------`)
}
initQ()

// putQueen(1)
console.log(queens)
console.log("solandequy:"+solandequy)


