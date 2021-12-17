function generateBox(outGrid, gridClass, gridNum) {
  const square = document.createElement("div");
  square.className = gridClass;
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
      console.log(this.id);
      switch (this.id) {
        case "hard_difficulty":
          console.log("hard");
          gridNumBox = 49;
          gameBoxClass = "box_hard_49";
          generateGrid();
          break;
        case "medium_difficulty":
          console.log("medium");
          gridNumBox = 81;
          gameBoxClass = "box_medium_81";
          generateGrid();
          break;
        case "normal_difficulty":
          console.log("normal");
          gridNumBox = 100;
          gameBoxClass = "box_normal_100";
          generateGrid();
          break;
        default:
      }
    });
  }
}
function generateGrid() {
  for (let i = 1; i <= gridNumBox; i++) {
    grid.innerHTML = "";
    generateBox(grid, gameBoxClass, i);
  }
}

const grid = document.getElementById("grid");
const choiseGame = document.getElementById("choise_difficulty");
let gridNumBox = 100;
let gameBoxClass = "box_normal_100";

difficultyGame(choiseGame);
