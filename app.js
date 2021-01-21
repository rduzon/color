const PALETTE = [
  "red",
  "blue",
  "yellow",
  "pink",
  "green",
  "purple",
  "orange",
  "black",
  "gray",
];

function makePalette() {
  for (let index = 0; index < PALETTE.length; index = index + 1) {
    const nextColor = PALETTE[index];
    const button = $("<button>");
    button.css("background-color", nextColor);
    $(".palette").append(button);
  }
  $(".palette button").first().addClass("active");
}

makePalette();

function makeGrid() {
  for (let i = 0; i < 64; i = i + 1) {
    $(".grid").append("<div></div>");
    $("div").addClass("cell");
  }
}

makeGrid();

function onPaletteClick() {
  $(".palette button").removeClass("active");
  $(this).addClass("active");
  $(".palette button").click("active");
}

$(".palette button").click(onPaletteClick);

function onGridClick() {
  const cellColor = $(".palette .active").css("background-color");
  const targetCell = $(this);

  if (cellColor == targetCell) {
    $(this).css("background-color", "");
  } else {
    targetCell.css("background-color", cellColor);
  }
}

$(".grid .cell").click(onGridClick);

function onClearClick() {
  $(".grid .cell").css("background-color", "");
}

$(".controls .clear").click(onClearClick);

function onFillAllClick() {
  const cellColor = $(".palette .active").css("background-color");
  $(".grid .cell").css("background-color", cellColor);
}

$(".controls .fill-all").click(onFillAllClick);

function onFillEmptyClick() {
  const cell = $(".cell");
  const cellColor = $(".palette .active").css("background-color");
  for (let index = 0; index < cell.length; index = index + 1) {
    const nextCell = $(cell[index]);
    if ($(nextCell).css("backgroundColor") == "rgba(0, 0, 0, 0)") {
      $(nextCell).css("backgroundColor", cellColor);
    }
  }
}
$(".controls .fill-empty").click(onFillEmptyClick);
