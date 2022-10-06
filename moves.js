// function of an elephant
var elepant = function (init_pos, team) {
  let temp = 1;
  let moves = [];
  let kill_moves = [];
  let valid_moves = [];

  let up = (down = right = left = true);

  let x = [0, 1, 2, 3, 4, 5, 6, 7];
  let y = [0, 1, 2, 3, 4, 5, 6, 7];

  remove_highlight();
  // removes highlight from tiles
  x.splice(init_pos[0], 1);
  y.splice(init_pos[1], 1);

  // used to prevent the occurance of the current position during the loop for valid moves
  for (let i = 0; i < 7; i++) {
    moves.push([x[i], init_pos[1]]);
    moves.push([init_pos[0], y[i]]);
  }
  // getting moves
  // now the moves array has all the vertical and horizontal moves to the current position
  while (up) {
    let temp_bool = true;

    if (
      md_array_include([init_pos[0] + temp, init_pos[1]], moves) &&
      position[init_pos[0] + temp][init_pos[1]] == "xx"
      // md_array_include is an function to check the occurance of an array in an 2d array
    ) {
      valid_moves.push([init_pos[0] + temp, init_pos[1]]);
      temp++;
    } else {
      kill_moves.push([init_pos[0] + temp, init_pos[1]]);
      up = false;
      temp = 1;
      break;
    }
  }

  while (down) {
    if (
      md_array_include([init_pos[0] - temp, init_pos[1]], moves) &&
      position[init_pos[0] - temp][init_pos[1]] == "xx"
    ) {
      valid_moves.push([init_pos[0] - temp, init_pos[1]]);
      temp++;
    } else {
      kill_moves.push([init_pos[0] - temp, init_pos[1]]);
      down = false;
      temp = 1;
      break;
    }
  }

  while (left) {
    if (
      md_array_include([init_pos[0], init_pos[1] + temp], moves) &&
      position[init_pos[0]][init_pos[1] + temp] == "xx"
    ) {
      valid_moves.push([init_pos[0], init_pos[1] + temp]);
      temp++;
    } else {
      kill_moves.push([init_pos[0], init_pos[1] + temp]);
      left = false;
      temp = 1;
      break;
    }
  }

  while (right) {
    if (
      md_array_include([init_pos[0], init_pos[1] - temp], moves) &&
      position[init_pos[0]][init_pos[1] - temp] == "xx"
    ) {
      valid_moves.push([init_pos[0], init_pos[1] - temp]);
      temp++;
    } else {
      kill_moves.push([init_pos[0], init_pos[1] - temp]);
      right = false;
      temp = 1;
      break;
    }
  }

  highlight(valid_moves);
  highlight_kill(valid_kill_move(kill_moves, init_pos));
};
var horse = function (init_pos, team) {
  let moves = [];
  let kill_moves = [];
  let valid_moves = [];
  let [a, b, c, d] = [1, -2, -1, 2];

  if (
    position[init_pos[0] + a] &&
    position[init_pos[0] + a][init_pos[1] + b] &&
    position[init_pos[0] + a][init_pos[1] + b][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + a][init_pos[1] + b] == "xx") {
      valid_moves.push([init_pos[0] + a, init_pos[1] + b]);
    } else {
      kill_moves.push([init_pos[0] + a, init_pos[1] + b]);
    }
  }
  // ab
  if (
    position[init_pos[0] + c] &&
    position[init_pos[0] + c][init_pos[1] + b] &&
    position[init_pos[0] + c][init_pos[1] + b][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + c][init_pos[1] + b] == "xx") {
      valid_moves.push([init_pos[0] + c, init_pos[1] + b]);
    } else {
      kill_moves.push([init_pos[0] + c, init_pos[1] + b]);
    }
  }
  // cb
  if (
    position[init_pos[0] + c] &&
    position[init_pos[0] + c][init_pos[1] + d] &&
    position[init_pos[0] + c][init_pos[1] + d][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + c][init_pos[1] + d] == "xx") {
      valid_moves.push([init_pos[0] + c, init_pos[1] + d]);
    } else {
      kill_moves.push([init_pos[0] + c, init_pos[1] + d]);
    }
  }
  // cd
  if (
    position[init_pos[0] + a] &&
    position[init_pos[0] + a][init_pos[1] + d] &&
    position[init_pos[0] + a][init_pos[1] + d][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + a][init_pos[1] + d] == "xx") {
      valid_moves.push([init_pos[0] + a, init_pos[1] + d]);
    } else {
      kill_moves.push([init_pos[0] + a, init_pos[1] + d]);
    }
  }
  // ad
  if (
    position[init_pos[0] + d] &&
    position[init_pos[0] + d][init_pos[1] + a] &&
    position[init_pos[0] + d][init_pos[1] + a][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + d][init_pos[1] + a] == "xx") {
      valid_moves.push([init_pos[0] + d, init_pos[1] + a]);
    } else {
      kill_moves.push([init_pos[0] + d, init_pos[1] + a]);
    }
  }
  // da
  if (
    position[init_pos[0] + d] &&
    position[init_pos[0] + d][init_pos[1] + c] &&
    position[init_pos[0] + d][init_pos[1] + c][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + d][init_pos[1] + c] == "xx") {
      valid_moves.push([init_pos[0] + d, init_pos[1] + c]);
    } else {
      kill_moves.push([init_pos[0] + d, init_pos[1] + c]);
    }
  }
  // dc
  if (
    position[init_pos[0] + b] &&
    position[init_pos[0] + b][init_pos[1] + c] &&
    position[init_pos[0] + b][init_pos[1] + c][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + b][init_pos[1] + c] == "xx") {
      valid_moves.push([init_pos[0] + b, init_pos[1] + c]);
    } else {
      kill_moves.push([init_pos[0] + b, init_pos[1] + c]);
    }
  }
  // bc
  if (
    position[init_pos[0] + b] &&
    position[init_pos[0] + b][init_pos[1] + a] &&
    position[init_pos[0] + b][init_pos[1] + a][1] !=
      position[init_pos[0]][init_pos[1]][1]
  ) {
    console.log("workijngd");
    if (position[init_pos[0] + b][init_pos[1] + a] == "xx") {
      valid_moves.push([init_pos[0] + b, init_pos[1] + a]);
    } else {
      kill_moves.push([init_pos[0] + b, init_pos[1] + a]);
    }
  }
  // ba
  highlight(valid_moves);
  highlight_kill(kill_moves);
};
var bishop = function (init_pos, team) {
  let moves = [];
  let kill_moves = [];
  let valid_moves = [];

  // move top right
  let i = 1;
  while (true) {
    if (
      init_pos[0] - i > -1 &&
      // init_pos[0] + i < 8 &&
      position[init_pos[0] - i][init_pos[1] + i] &&
      position[init_pos[0] - i][init_pos[1] + i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (position[init_pos[0] - i][init_pos[1] + i][1] == "x") {
        valid_moves.push([init_pos[0] - i, init_pos[1] + i]);
      } else {
        kill_moves.push([init_pos[0] - i, init_pos[1] + i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }

  // bottom right

  while (true) {
    if (
      init_pos[0] + i < 8 &&
      position[init_pos[0] + i][init_pos[1] + i] &&
      position[init_pos[0] + i][init_pos[1] + i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] + i][init_pos[1] + i] &&
        position[init_pos[0] + i][init_pos[1] + i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] + i, init_pos[1] + i]);
      } else {
        kill_moves.push([init_pos[0] + i, init_pos[1] + i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }

  // top left

  while (true) {
    if (
      init_pos[0] - i >= 0 &&
      // init_pos[1] - i >= 0 &&
      position[init_pos[0] - i][init_pos[1] - i] &&
      position[init_pos[0] - i][init_pos[1] - i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] - i][init_pos[1] - i] &&
        position[init_pos[0] - i][init_pos[1] - i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] - i, init_pos[1] - i]);
      } else {
        kill_moves.push([init_pos[0] - i, init_pos[1] - i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }
  // bottom left
  while (true) {
    if (
      init_pos[0] + i < 8 &&
      position[init_pos[0] + i][init_pos[1] - i] &&
      position[init_pos[0] + i][init_pos[1] - i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] + i][init_pos[1] - i] &&
        position[init_pos[0] + i][init_pos[1] - i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] + i, init_pos[1] - i]);
      } else {
        kill_moves.push([init_pos[0] + i, init_pos[1] - i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }
  highlight(valid_moves);
  highlight_kill(kill_moves);
};
var queen = function (init_pos, team) {
  let temp = 1;
  let moves = [];
  let kill_moves = [];
  let e_kill_moves = [];
  let valid_moves = [];

  // bishop moves
  let i = 1;
  while (true) {
    console.log(init_pos[0] - i > -1, init_pos[0] + i < 8, init_pos[0], i);
    if (
      init_pos[0] - i > -1 &&
      // init_pos[0] + i < 8 &&
      position[init_pos[0] - i][init_pos[1] + i] &&
      position[init_pos[0] - i][init_pos[1] + i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (position[init_pos[0] - i][init_pos[1] + i][1] == "x") {
        valid_moves.push([init_pos[0] - i, init_pos[1] + i]);
      } else {
        kill_moves.push([init_pos[0] - i, init_pos[1] + i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }

  // bottom right
  console.log("i is ", i);
  while (true) {
    if (
      init_pos[0] + i < 8 &&
      position[init_pos[0] + i][init_pos[1] + i] &&
      position[init_pos[0] + i][init_pos[1] + i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] + i][init_pos[1] + i] &&
        position[init_pos[0] + i][init_pos[1] + i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] + i, init_pos[1] + i]);
      } else {
        kill_moves.push([init_pos[0] + i, init_pos[1] + i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }

  // top left

  while (true) {
    if (
      init_pos[0] - i >= 0 &&
      // init_pos[1] - i >= 0 &&
      position[init_pos[0] - i][init_pos[1] - i] &&
      position[init_pos[0] - i][init_pos[1] - i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] - i][init_pos[1] - i] &&
        position[init_pos[0] - i][init_pos[1] - i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] - i, init_pos[1] - i]);
      } else {
        kill_moves.push([init_pos[0] - i, init_pos[1] - i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }
  // bottom left
  while (true) {
    if (
      init_pos[0] + i < 8 &&
      position[init_pos[0] + i][init_pos[1] - i] &&
      position[init_pos[0] + i][init_pos[1] - i][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] + i][init_pos[1] - i] &&
        position[init_pos[0] + i][init_pos[1] - i][1] == "x"
      ) {
        valid_moves.push([init_pos[0] + i, init_pos[1] - i]);
      } else {
        kill_moves.push([init_pos[0] + i, init_pos[1] - i]);
        i = 1;
        break;
      }
    } else {
      i = 1;
      break;
    }
    i++;
  }

  // elephant moves

  let up = (down = right = left = true);

  let x = [0, 1, 2, 3, 4, 5, 6, 7];
  let y = [0, 1, 2, 3, 4, 5, 6, 7];

  remove_highlight();
  // removes highlight from tiles
  x.splice(init_pos[0], 1);
  y.splice(init_pos[1], 1);

  // used to prevent the occurance of the current position during the loop for valid moves
  for (let i = 0; i < 7; i++) {
    moves.push([x[i], init_pos[1]]);
    moves.push([init_pos[0], y[i]]);
  }
  // getting moves
  // now the moves array has all the vertical and horizontal moves to the current position
  while (up) {
    let temp_bool = true;

    if (
      md_array_include([init_pos[0] + temp, init_pos[1]], moves) &&
      position[init_pos[0] + temp][init_pos[1]] == "xx"
      // md_array_include is an function to check the occurance of an array in an 2d array
    ) {
      valid_moves.push([init_pos[0] + temp, init_pos[1]]);
      temp++;
    } else {
      e_kill_moves.push([init_pos[0] + temp, init_pos[1]]);
      up = false;
      temp = 1;
      break;
    }
  }

  while (down) {
    if (
      md_array_include([init_pos[0] - temp, init_pos[1]], moves) &&
      position[init_pos[0] - temp][init_pos[1]] == "xx"
    ) {
      valid_moves.push([init_pos[0] - temp, init_pos[1]]);
      temp++;
    } else {
      e_kill_moves.push([init_pos[0] - temp, init_pos[1]]);
      down = false;
      temp = 1;
      break;
    }
  }

  while (left) {
    if (
      md_array_include([init_pos[0], init_pos[1] + temp], moves) &&
      position[init_pos[0]][init_pos[1] + temp] == "xx"
    ) {
      valid_moves.push([init_pos[0], init_pos[1] + temp]);
      temp++;
    } else {
      e_kill_moves.push([init_pos[0], init_pos[1] + temp]);
      left = false;
      temp = 1;
      break;
    }
  }

  while (right) {
    if (
      md_array_include([init_pos[0], init_pos[1] - temp], moves) &&
      position[init_pos[0]][init_pos[1] - temp] == "xx"
    ) {
      valid_moves.push([init_pos[0], init_pos[1] - temp]);
      temp++;
    } else {
      e_kill_moves.push([init_pos[0], init_pos[1] - temp]);
      right = false;
      temp = 1;
      break;
    }
  }

  kill_moves = [...kill_moves, ...valid_kill_move(e_kill_moves, init_pos)];

  highlight(valid_moves);
  highlight_kill(kill_moves);
};
var king = function (init_pos, team) {
  let kill_moves = [];
  let valid_moves = [];
  let temp = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ];
  for (let i = 0; i < temp.length; i++) {
    console.log("DDDD");

    if (
      position[init_pos[0] + temp[i][0]] &&
      position[init_pos[0] + temp[i][0]][init_pos[1] + temp[i][1]] &&
      position[init_pos[0] + temp[i][0]][init_pos[1] + temp[i][1]][1] !=
        position[init_pos[0]][init_pos[1]][1]
    ) {
      if (
        position[init_pos[0] + temp[i][0]][init_pos[1] + temp[i][1]][1] == "x"
      ) {
        valid_moves.push([init_pos[0] + temp[i][0], init_pos[1] + temp[i][1]]);
      } else {
        kill_moves.push([init_pos[0] + temp[i][0], init_pos[1] + temp[i][1]]);
      }
    }
  }

  highlight(valid_moves);
  highlight_kill(kill_moves);
};
// function of an soldier
var soldier = function (init_pos, team) {
  let moves = [];
  let kill_moves = [];
  let valid_moves = [];

  // for team a
  if (!player_switch) {
    // forward move
    if (position[init_pos[0] - 1][init_pos[1]] == "xx") {
      valid_moves.push([init_pos[0] - 1, init_pos[1]]);
    }
    if (
      init_pos[0] == 6 &&
      position[init_pos[0] - 1][init_pos[1]] == "xx" &&
      position[init_pos[0] - 2][init_pos[1]] == "xx"
    ) {
      valid_moves.push([init_pos[0] - 2, init_pos[1]]);
    }
    // kill move
    if (
      position[init_pos[0] - 1][init_pos[1] - 1] &&
      position[init_pos[0] - 1][init_pos[1] - 1][1] == "0"
      // ? position[init_pos[0] - 1][init_pos[1] - 1][1]
      // : "1" == "0"
    ) {
      kill_moves.push([init_pos[0] - 1, init_pos[1] - 1]);
    }
    if (
      position[init_pos[0] - 1][init_pos[1] + 1] &&
      position[init_pos[0] - 1][init_pos[1] + 1][1] == "0"
    ) {
      kill_moves.push([init_pos[0] - 1, init_pos[1] + 1]);
    }
  }
  // for team b
  if (player_switch) {
    // forward move
    if (position[init_pos[0] + 1][init_pos[1]] == "xx") {
      valid_moves.push([init_pos[0] + 1, init_pos[1]]);
    }
    if (
      init_pos[0] == 1 &&
      position[init_pos[0] + 1][init_pos[1]] == "xx" &&
      position[init_pos[0] + 2][init_pos[1]] == "xx"
    ) {
      valid_moves.push([init_pos[0] + 2, init_pos[1]]);
    }

    // kill move
    if (
      position[init_pos[0] + 1][init_pos[1] - 1] &&
      position[init_pos[0] + 1][init_pos[1] - 1][1] == "1"
    ) {
      kill_moves.push([init_pos[0] + 1, init_pos[1] - 1]);
    }
    if (
      position[init_pos[0] + 1][init_pos[1] + 1] &&
      position[init_pos[0] + 1][init_pos[1] + 1][1] == "1"
    ) {
      kill_moves.push([init_pos[0] + 1, init_pos[1] + 1]);
    }
  }

  highlight(valid_moves);
  highlight_kill(kill_moves);
  // console.log("valid moves :", ...valid_moves);
};
