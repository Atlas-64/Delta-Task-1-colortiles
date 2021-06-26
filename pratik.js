const jumble = (arr) => {
  const copy = [...arr];
  for(let i = 0; i < copy.length; i++) {
      let j = Math.floor(Math.random()*copy.length);
      let temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
  }   
  return copy;
}

const setId = (items) => {
  for(let i = 0; i < items.length; i++) {
      items[i].setAttribute("id", i)
  }
}

function play(){
  go = 1;


  ul1.forEach((tile, i) => {
      tile.addEventListener('click', event => {
          if(go === 1)
              clickTile(tile);
      });
  });


  const clickTile = (tile) => {
      //CORNERS
      if(tile.id === '0'){
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){                
              swapTile(tile, 5);
          }
      }

      if(tile.id === '4'){
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){                
              swapTile(tile, -1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){                
              swapTile(tile, 5);
          }
      }

      if(tile.id === '20'){
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){
              swapTile(tile, -5);
          }
      }

      if(tile.id === '24'){
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){
              swapTile(tile, -1);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){
              swapTile(tile, -5);
          }
      }

      //EDGES
      if(tile.id === '1' || '2' || '3'){
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){
              swapTile(tile, 5);
          }
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){
              swapTile(tile, -1);
          }
      }

      if(tile.id === '5' || '10' || '15'){
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){
              swapTile(tile, 5);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){
              swapTile(tile, -5);
          }
      }

      if(tile.id === '9' || '14' || '19'){
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){
              swapTile(tile, -1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){
              swapTile(tile, 5);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){                
              swapTile(tile, -5);
          }
      }

      if(tile.id === '21' || '22' || '23'){
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1)
          }
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){
              swapTile(tile, -1);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){                
              swapTile(tile, -5);
          }
      }

      //INNER
      else{
          if(document.getElementById(parseInt(tile.id) + 1).style.backgroundColor === "white"){
              swapTile(tile, 1);
          }
          if(document.getElementById(parseInt(tile.id) + 5).style.backgroundColor === "white"){
              swapTile(tile, 5);
          }
          if(document.getElementById(parseInt(tile.id) - 1).style.backgroundColor === "white"){
              swapTile(tile, -1);
          }
          if(document.getElementById(parseInt(tile.id) - 5).style.backgroundColor === "white"){
              swapTile(tile, -5);
          }
      }


      if(jumbled1[6] === jumbled2[0] && jumbled1[7] === jumbled2[1] &&jumbled1[8] === jumbled2[2] && 
          jumbled1[11] === jumbled2[3] && jumbled1[12] === jumbled2[4] && jumbled1[13] === jumbled2[5] && 
          jumbled1[16] === jumbled2[6] && jumbled1[17] === jumbled2[7] && jumbled1[18] === jumbled2[8]){ 
          if((score < highScore) || (highScore === 0)){
              highScore = score;
              document.getElementById("highScore").innerHTML = `Least Moves Taken: ${highScore}`;
          }
          if((sec < bestTime) || (bestTime === 0)){ 
              bestTime = sec;
              document.getElementById("bestTime").innerHTML = `Best Time:  ${parseInt(sec/60)}:${sec%60}`;    
          }
          alert("You Win!!!");   
          reset();
      }
  }   
  
}

function swapTile(tile, x) {
  score++;
  document.getElementById("scoreboard").innerHTML = `No. of Moves: ${score}`;

  let whiteTile = document.getElementById(parseInt(tile.id) + x);
  whiteTile.style.backgroundColor = tile.style.backgroundColor;
  tile.style.backgroundColor = "white";
  
  let temp = jumbled1[parseInt(tile.id)];
  jumbled1[parseInt(tile.id)] = jumbled1[parseInt(whiteTile.id)];
  jumbled1[parseInt(whiteTile.id)] = temp;
}
function reset(){
  go = 0;
  score = 0;
  sec = 0;
  document.getElementById("scoreboard").innerHTML = `No. of Moves: 0`;

  jumbled1 = jumble(colors1);

  ul1.forEach((color, i) => {
      color.style.backgroundColor = jumbled1[i];
  });

  jumbled2 = jumble(colors2);

  ul2.forEach((color, i) => {
      color.style.backgroundColor = jumbled2[i];
  });
}

let ul1 = document.querySelectorAll(".Playerboard > li");;
const colors1= ["Red", "Red", "Red", "Red", 
                "Blue", "Blue", "Blue", "Blue", 
                "#22c022", "#22c022", "#22c022", "#22c022",
                "Yellow", "Yellow", "Yellow", "Yellow",
                "Orange", "Orange", "Orange", "Orange", 
                "Magenta", "Magenta", "Magenta", "Magenta",
                "white"]

let ul2 = document.querySelectorAll('.PatternBoard > li');;
const colors2= ["Red", "Red", "Red", "Red", 
                "Blue", "Blue", "Blue", "Blue", 
                "#22c022", "#22c022", "#22c022", "#22c022",
                "Yellow", "Yellow", "Yellow", "Yellow",
                "Orange", "Orange", "Orange", "Orange", 
                "Magenta", "Magenta", "Magenta", "Magenta"]

let jumbled1 = jumble(colors1);
ul1.forEach((color, i) => {
    color.style.backgroundColor = jumbled1[i];
});

let jumbled2 = jumble(colors2);
ul2.forEach((color, i) => {
    color.style.backgroundColor = jumbled2[i];
}); 
let win = 0;
let go = 0;

let score = 0;
let highScore = 0;
let sec = 0;
let bestTime = 0;

document.getElementById("scoreboard").innerHTML = `No. of Moves : 0`;
document.getElementById("highScore").innerHTML = `Least Moves Taken : `;
document.getElementById("bestTime").innerHTML = `Best Time : `;

let ul = document.querySelectorAll("li");

setId(ul);

