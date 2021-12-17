function generateBox(outGrid, gridClass, borderClass, gridNum) {
  const square = document.createElement("div");
  square.classList.add(gridClass, borderClass);
  outGrid.append(square);
  square.innerText = gridNum;
  square.addEventListener("click", function () {
    this.classList.add("paint_grid_azure");
  });
}

function difficultyGame(selection) {
  generateGrid();
  for (let i = 0; i < selection.childElementCount; i++) {
    selection.children.item(i).addEventListener("click", function () {
      removeActiveClass();
      console.log(this.id); //DEBUG
      switch (this.id) {
        case "hard_difficulty":
          console.log("hard"); //DEBUG
          gridNumBox = 49;
          gameBoxClass = "box_hard_49";
          this.className = "active";
          break;
        case "medium_difficulty":
          console.log("medium"); //DEBUG
          gridNumBox = 81;
          gameBoxClass = "box_medium_81";
          this.className = "active";
          break;
        case "normal_difficulty":
          console.log("normal"); //DEBUG
          gridNumBox = 100;
          gameBoxClass = "box_normal_100";
          this.className = "active";
          break;
        default:
      }
      generateGrid();
    });
  }
}

function generateGrid() {
  grid.innerHTML = "";
  for (let i = 1; i <= gridNumBox; i++) {
    if (gameBoxClass === "box_normal_100") {
      if (i === 1) {
        generateBox(grid, gameBoxClass, "border_top_left", i);
      } else if (i <= 10) {
        generateBox(grid, gameBoxClass, "border_top", i);
      } else if (isInArray(i, myArray(100))) {
        generateBox(grid, gameBoxClass, "border_left", i);
      } else {
        generateBox(grid, gameBoxClass, "default", i);
      }
    }
    if (gameBoxClass === "box_medium_81") {
      if (i === 1) {
        generateBox(grid, gameBoxClass, "border_top_left", i);
      } else if (i <= 9) {
        generateBox(grid, gameBoxClass, "border_top", i);
      } else if (isInArray(i, myArray(81))) {
        generateBox(grid, gameBoxClass, "border_left", i);
      } else {
        generateBox(grid, gameBoxClass, "default", i);
      }
    }
    if (gameBoxClass === "box_hard_49") {
      if (i === 1) {
        generateBox(grid, gameBoxClass, "border_top_left", i);
      } else if (i <= 7) {
        generateBox(grid, gameBoxClass, "border_top", i);
      } else if (isInArray(i, myArray(49))) {
        generateBox(grid, gameBoxClass, "border_left", i);
      } else {
        generateBox(grid, gameBoxClass, "default", i);
      }
    }
  }
}
function myArray(e) {
  let arr = [];
  if (e === 100) {
    for (i = 1; i <= 100; i += 10) {
      arr.push(i);
    }
  }
  if (e === 81) {
    for (i = 1; i <= 81; i += 9) {
      arr.push(i);
    }
  }
  if (e === 49) {
    for (i = 1; i <= 49; i += 7) {
      arr.push(i);
    }
  }
  arr.shift();
  return arr;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
function removeActiveClass() {
  const activeBtn = document.querySelector("button.active");
  activeBtn.classList.remove("active");
}

const grid = document.getElementById("grid");
const choiseGame = document.getElementById("choise_difficulty");
let gridNumBox = 100;
let gameBoxClass = "box_normal_100";

difficultyGame(choiseGame);
