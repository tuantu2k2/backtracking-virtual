function canPutQueen( i, j){
    for(let k = 0; k < i; k++)
    // co quân hậu cùng cột j ở phía trái hoặc đường chéo : trị tuyệt đối của chỉ số dòng - dòng = cột - cột => cùng đg chéo
        if(queens[k] == j || Math.abs(k - i) == Math.abs(queens[k] - j))
            return false;
    return true;
}


//idx: hàng
async function putQueen( idx){
    if(!isDone){
        for (let j = 0; j < n; j++){
            // if(isDone) break
            if(canPutQueen(idx, j) == true){
                queens[idx] = j;
                if(idx == n-1){
                    // output();
                    isDone = true
                }
                else{
                    await putQueen(idx + 1);
                }

                    
                // queens[idx] = 0;
            }
            if(j == n-1 && !canPutQueen(idx, j)) {
                queens[j] = 0
            }
        }

    }
}