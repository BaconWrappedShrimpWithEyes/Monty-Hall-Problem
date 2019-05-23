function BeginGame(){
  var doors = [0, 0, 0]
  doors[Math.floor(3*Math.Random())] = 1;
  return doors;
}
