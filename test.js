function move (x, y) {
  string = '';
  if(
    curPos.x === 4 && x === 1
  ) {
    right.classList.add('visitedButt');
    return;
  } if (
    curPos.x === 0 && x === -1
  ) {
    left.classList.add('visitedButt');
    return;
  } if(
    curPos.y === 4 && y === 1
  ) {
    bottom.classList.add('visitedbutt');
    return;
  } if(
    curPos.y ===0 && y === -1
  ) {
    up.classList.add('visitedButt');
    return;
  }; 
}
