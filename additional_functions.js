// gets the valid kill moves for the array of kill moves

var valid_kill_move = function (arr, init_pos) {
  let val_kill_moves = [];

  for (let i = 0; i < 4; i++) {
    if (arr[i][0] > -1 && arr[i][0] < 8 && arr[i][1] > -1 && arr[i][1] < 8) {
      //   console.log("valid move is", arr[i][0], arr[i][1]);
      if (
        position[arr[i][0]][arr[i][1]][1] !=
        position[init_pos[0]][init_pos[1]][1]
      ) {
        val_kill_moves.push([arr[i][0], arr[i][1]]);
      }
    }
  }
  return val_kill_moves;
};

// arranges all the text conent of each tiles reffering to the position array

var arrange = function () {
  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position.length; j++) {
      document.querySelector(`.${tile_name[i][j]}`).textContent =
        position[i][j];
    }
  }

  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position.length; j++) {
      document
        .querySelector(`.${tile_name[i][j]}`)
        .classList.remove(
          document.querySelector(`.${tile_name[i][j]}`).classList[3]
        );
      // seperated
      document
        .querySelector(`.${tile_name[i][j]}`)
        .classList.add(
          assign_icon(document.querySelector(`.${tile_name[i][j]}`).textContent)
        );
    }
  }

  let king0 = false;
  let king1 = false;
  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position.length; j++) {
      if (document.querySelector(`.${tile_name[i][j]}`).textContent == "k0") {
        king0 = true;
      }
      if (document.querySelector(`.${tile_name[i][j]}`).textContent == "k1") {
        king1 = true;
      }
    }
  }
  console.log(king0, king1, " :bool");
  if (!king0 || !king1) {
    if (king0) {
      document.querySelector(".modal").textContent = "Black wins";
      document.querySelector(".modal").classList.remove("hidden");
    } else {
      document.querySelector(".modal").textContent = "White wins";
      document.querySelector(".modal").classList.remove("hidden");
    }
    reset_game();
  }

  // check king occurance
};

// function for assigning imgs using text content
var assign_icon = function (text) {
  switch (text) {
    case "s0":
      return "soldier-0";
    case "s1":
      return "soldier-1";
    case "e0":
      return "elephant-0";
    case "e1":
      return "elephant-1";
    case "h0":
      return "horse-0";
    case "h1":
      return "horse-1";
    case "b0":
      return "bishop-0";
    case "b1":
      return "bishop-1";
    case "k0":
      return "king-0";
    case "k1":
      return "king-1";
    case "q0":
      return "queen-0";
    case "q1":
      return "queen-1";
    default:
      return "default-icon";
  }
};

// function to check the occurance of an array in an 2d array
var md_array_include = function (val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === val[0] && arr[i][1] === val[1]) {
      return true;
    }
  }
  return false;
};

// removes all highlights from the tiles

var remove_highlight = function () {
  highlight_bool = false;
  document.querySelectorAll(".line").forEach((tile) => {
    if (tile.classList.contains("highlight-move")) {
      tile.classList.remove("highlight-move");
    }
    if (tile.classList.contains("highlight-kill")) {
      tile.classList.remove("highlight-kill");
    }
    // if (tile.classList.contains("highlight-kill")) {
    //   tile.classList.remove("highlight-kill");
    // }
  });
};

// used to highlight the tiles in the given array
var highlight = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    highlight_bool = true;
    document
      .querySelector(`.${tile_name[arr[i][0]][arr[i][1]]}`)
      .classList.add("highlight-move");
  }
};
// used to highlight the tiles in which the kill can be secured
var highlight_kill = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    highlight_bool = true;
    console.log(
      "array kill is active ",
      ...arr,
      " x ",
      tile_name[arr[i][0]][arr[i][1]]
    );
    document
      .querySelector(`.${tile_name[arr[i][0]][arr[i][1]]}`)
      .classList.add("highlight-kill");
  }
};

// used to get the 2d pos i.e:[i,j] using the unique tile id
var get_pos = function (text) {
  for (let i = 0; i < position.length; i++) {
    for (let j = 0; j < position.length; j++) {
      if (tile_name[i][j] === text) {
        return [i, j];
      }
    }
  }
};

// resets everything
document.querySelector(".reset").addEventListener("click", () => {
  reset_game();
});

var reset_game = function () {
  console.log("reset");
  position = [
    ["e0", "h0", "b0", "q0", "k0", "b0", "h0", "e0"],
    ["s0", "s0", "s0", "s0", "s0", "s0", "s0", "s0"],
    ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
    ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
    ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
    ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
    ["s1", "s1", "s1", "s1", "s1", "s1", "s1", "s1"],
    ["e1", "h1", "b1", "k1", "q1", "b1", "h1", "e1"],
  ];

  tile_name = [
    ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
    ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
    ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
    ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
    ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
    ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
    ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
    ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
  ];
  player_switch = false;
  highlight_bool = false;

  temp_pos = [0, 0];
  remove_highlight();
  arrange();
};

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
});
