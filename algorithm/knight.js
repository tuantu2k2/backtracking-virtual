function canMoveKinght(x, y) {
    return x >= 0 && y >= 0 && x < n && y < mK && Knight[x][y] === -1;
  }


function knightTour(x, y, numC) {
    if (numC == n * mK) {
      return true;
    }
    for (let i = 0; i < 8; i++) {

      const nextX = x + knightMoves[i][0];
      const nextY = y + knightMoves[i][1];

      if (canMoveKinght(nextX, nextY)) {
        Knight[nextX][nextY] = numC;
        numC++;
        if (knightTour(nextX, nextY, numC)) {
          return true;
        } else {
          // Quay lui nếu không tìm được lời giải
          Knight[nextX][nextY] = -1;
          numC--;
        }
      }
    }
    return false;
  }

  //persudo
 /* <p>function canMoveKnight(x, y):</p>
<p>&nbsp; &nbsp; return x &gt;= 0 and y &gt;= 0 and x &lt; n and y &lt; m and Knight[x][y] = -1</p>
<p><br></p>
<p>function knightTour(x, y, numC):</p>
<p>&nbsp; &nbsp; if numC == n * m:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; return true</p>
<p>&nbsp; &nbsp; for i from 0 to 7:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; nextX = x + knightMoves[i][0]</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; nextY = y + knightMoves[i][1]</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; if canMoveKnight(nextX, nextY):</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Knight[nextX][nextY] = numC</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; numC++</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if knightTour(nextX, nextY, numC):</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return true</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; else:</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // Backtrack if a solution is not found</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Knight[nextX][nextY] = -1</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; numC--</p>
<p>&nbsp; &nbsp; return false</p>*/


const N = 8; // Kích thước bàn cờ (8x8)
const board = Array.from(Array(N), () => Array(N).fill(-1)); // Bàn cờ

// Di chuyển của quân mã
const moves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

// Kiểm tra xem ô (x, y) có nằm trên bàn cờ không và có được đi qua chưa
function isSafe(x, y) {
  return x >= 0 && y >= 0 && x < N && y < N && board[x][y] === -1;
}

// Hàm đệ quy để tìm lời giải
function solveKT(x, y, move) {
  if (move === N * N) {
    // Tìm được lời giải
    return true;
  }

  for (let i = 0; i < 8; i++) {
    const nextX = x + moves[i][0];
    const nextY = y + moves[i][1];

    if (isSafe(nextX, nextY)) {
      board[nextX][nextY] = move;
      if (solveKT(nextX, nextY, move + 1)) {
        return true;
      } else {
        // Quay lui nếu không tìm được lời giải
        board[nextX][nextY] = -1;
      }
    }
  }

  return false;
}

// Bắt đầu từ ô (0, 0)
board[0][0] = 0;

if (solveKT(0, 0, 1)) {
  // Tìm được lời giải
  for (let i = 0; i < N; i++) {
    console.log(board[i].join(" "));
  }
} else {
  console.log("Không tìm thấy lời giải");
}
