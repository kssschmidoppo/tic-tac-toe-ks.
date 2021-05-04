

//var myApple= true;
//var heLikesApples = false;
//alert(myApple+" "+heLikesApples);
//alert(myApple == heLikesApples);
//alert(myApple + heLikesApples);
//alert("heLikesApples =" + heLikesApples);
 

// declare variable player
var player;

// set player to "x"
//player = "x";
// or combined: declare variable player and set player to "x"
var player = "x";

//life sing
//alert(player);

//alert value of varisble players
//alert "Hello" plus value of player
//alert("hello " + player);

// declear variable hint and set it to element object with id "hint", using
//document.querySelector()
var hint = document.querySelector("#hint"); //!!! """"string""""!!!

//alert(hint);
//alert(hint.innerHTML);

//set innerHTML text of hint to "heloo " pluse value of player plus ""
// select a field!"" at the end
hint.innerHTML = "hello " + player + " - select a field!";

//id="board" onclick = "markField(event);" 
// declear in HTML onclick funtion to trigger when 
//the user click onto a child button
function markField(mouseEvent) {

  //dev only: alert target object of mouse event 
  //alert(mouseEvent.target);
  // declear variable field and 
  //set to target object of mouse event mouseEvent.target
  var field = mouseEvent.target;

  //lable the field  with the players name:
  //set aria-label attribute to set background-image
  field.setAttribute("aria-label", player);

  //disable field against further mouseclick (set disable attribebute)
  //if player = "x";
    //if player = "o";
      //esle player = "x";
  field.setAttribute("disabled", "disabled");
  if (player == "x" ) player ="o";
    else player = "x";


  //set innerHTML text of hint to "next player is " pluse value of player plus "!"
  hint.innerHTML = "Next plyaer is " + player + "!";

  // call function allFlieldsAreSelected
  //allFieldsAreSelected();

  //if all fields were selected, using allSelected(), then
  //set hint , indicating the end of game
  if (allFieldsAreSelected()) hint.innerHTML = "Game over!";
  //alert(hint.innerHTML = "Game over!");

}

// declear function allFieldsAreSelected
function allFieldsAreSelected() {
  //alert ("here we go");

  //declear the variable fields and set it to the list of field object,
  //using document.querySelectorAll()
  var fields = document.querySelectorAll(".btn");
  //alert (fields); = NobeList

  //fields is a list/Array, lets get the length of the list 
  //alert (fields.length); = 9 
  var lengf = fields.length; // lengf for length


  //"c" for counter
  //counter++  counter = counter +  1
  for (var c = 0; c < lengf; c++) {
    //alert("c = " + c);
    var f = fields[ c ];// object from the list fields

    //f.getAttribute("aria-label")
    //alert (f.getAttribute("aria-label"));
    if (f.getAttribute("aria-label")== "") {
      //alert("bingo");
      return false;
    }   
  }
  //alert ("bongo");
  return true;

}
















