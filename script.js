// import { msg, PI, addNumbers } from "./moves";
// console.log(msg, PI, addNumbers);
let position = [
  ["e0", "h0", "b0", "q0", "k0", "b0", "h0", "e0"],
  ["s0", "s0", "s0", "s0", "s0", "s0", "s0", "s0"],
  ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
  ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
  ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
  ["xx", "xx", "xx", "xx", "xx", "xx", "xx", "xx"],
  ["s1", "s1", "s1", "s1", "s1", "s1", "s1", "s1"],
  ["e1", "h1", "b1", "k1", "q1", "b1", "h1", "e1"],
];

let tile_name = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];
let player_switch = false;
let highlight_bool = false;

let temp_pos = [0, 0];
//  arr to store temporary values

// testing+++++++++++++++++

var testing_one = function (init_pos) {
  // console.log("workiing");
  // highlight(valid_moves);
  // highlight_kill(kill_moves);
  // console.log("valid moves :", ...valid_moves);
};
// testing+++++++++++++++++

arrange();

// assigns all the tiles an button that calls the movements function. When called
// The movement function requires two args which is the actual text conent of the button and the unique tile id
// the tile id will be used to get the 2d position of the current tile by comparing it with the tile_name variable

document.querySelectorAll(".line").forEach((tile) => {
  tile.addEventListener("click", () => {
    movements(tile.textContent, tile.classList[2]);
  });
});

var movements = function (coin, pos) {
  //  coin is the text content of the tile and pos is the 2d position of it.

  let arr_pos = get_pos(pos);
  // arr_pos is an array of the postion. i.e :[i,j]

  if (coin != "xx" && !highlight_bool) {
    console.log("make move");
    // can make move only if the text conent is not 'xx'(empty space) and highlight_bool is false which refers to any pending moves
    // switch case is used to find the rank of the coin and assigns an specific function to it
    // eg:bishop funtion for the coin with text content b0 and so on
    temp_pos = arr_pos;
    switch (coin) {
      // each function gets two args,postion of the text conent and the team identification
      case "e0":
        if (player_switch) {
          elepant(arr_pos);
        }
        break;
      case "e1":
        if (!player_switch) {
          elepant(arr_pos);
        }
        break;
      case "h0":
        if (player_switch) {
          horse(arr_pos);
        }
        break;
      case "h1":
        if (!player_switch) {
          horse(arr_pos, "b");
        }
        break;
      case "b0":
        if (player_switch) {
          bishop(arr_pos);
        }
        break;
      case "b1":
        if (!player_switch) {
          bishop(arr_pos);
        }
        break;
      case "s0":
        if (player_switch) {
          soldier(arr_pos);
        }
        break;
      case "s1":
        if (!player_switch) {
          soldier(arr_pos);
        }
        break;
      case "q0":
        if (player_switch) {
          queen(arr_pos);
        }
        break;
      case "q1":
        if (!player_switch) {
          queen(arr_pos);
        }
        break;
      case "k0":
        if (player_switch) {
          king(arr_pos);
        }
        break;
      case "k1":
        if (!player_switch) {
          king(arr_pos);
        }
        break;
    }
  } else if (
    highlight_bool &&
    document
      .querySelector(`.${tile_name[arr_pos[0]][arr_pos[1]]}`)
      .classList.contains("highlight-move")
  ) {
    remove_highlight();
    console.log("replace", arr_pos, "with", temp_pos);
    [position[arr_pos[0]][arr_pos[1]], position[temp_pos[0]][temp_pos[1]]] = [
      position[temp_pos[0]][temp_pos[1]],
      position[arr_pos[0]][arr_pos[1]],
    ];
    player_switch = !player_switch;
    arrange();
  } else if (
    highlight_bool &&
    document
      .querySelector(`.${tile_name[arr_pos[0]][arr_pos[1]]}`)
      .classList.contains("highlight-kill")
  ) {
    remove_highlight();
    console.log("kill:", arr_pos, "is killed by ", temp_pos);

    position[arr_pos[0]][arr_pos[1]] = position[temp_pos[0]][temp_pos[1]];
    position[temp_pos[0]][temp_pos[1]] = "xx";
    player_switch = !player_switch;
    arrange();
  } else {
    remove_highlight();
  }
};

// no need changes
