function loadData() {
    if (localStorage.getItem("stateChess") == '2') {
        toKnightPage();
        loadStateK();
    }
    else if (localStorage.getItem("stateChess") == '1') {
        // Load the state from local storage
        toQueenPage();
        loadStateQ();

    }

}

// State serialization
function serializeStateQ() {
    return JSON.stringify({
        idxforQueen: idxforQueen,
        queens: queens,
    });
}

function serializeStateK() {
    return JSON.stringify({
        numC: numC,
        Knight: Knight,
    });
}

// State deserialization
function loadStateQ() {
    let isLoad = localStorage.getItem('stateChess')
    const serializedState = localStorage.getItem('queensState');
    if (isLoad == "1" && serializedState) {

        const state = JSON.parse(serializedState);
        idxforQueen = state.idxforQueen
        queens = state.queens
        for (let i = 0; i < idxforQueen; i++) {
            addQueen(i, state.queens[i])
        }
    }
}

function saveStateK() {
    // Save the state to local storage
    localStorage.setItem('stateChess', 2)
    localStorage.setItem('knightState', serializeStateK());
}

function loadStateK() {
    let isLoad = localStorage.getItem('stateChess')
    const serializedState = localStorage.getItem('knightState');
    if (isLoad == "2" && serializedState) {

        const state = JSON.parse(serializedState);
        numC = state.numC
        Knight = state.Knight
        for (let i = 0; i < boardSizeK; i++)
            for (let j = 0; j < boardSizeMK; j++) {
                if (Knight[i][j] != -1) {
                    addNumberToSquareK(i, j, Knight[i][j])
                }
                if(Knight[i][j] == numC -1){
                    addKnight(i,j,numC-1)
                    curentPoix = i;
                    curentPoiy = j;
                }
            }
        
    }
}

function saveStateQ() {
    // Save the state to local storage
    localStorage.setItem('stateChess', 1)
    localStorage.setItem('queensState', serializeStateQ());
}

function clearState() {
    // Save the state to local storage
    let state = localStorage.getItem("stateChess");
    localStorage.clear();
    //clear bộ nhớ vẫn giữ lại page
    localStorage.setItem("stateChess",state);
    location.reload()
}


    loadData()
