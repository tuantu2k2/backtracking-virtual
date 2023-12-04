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

