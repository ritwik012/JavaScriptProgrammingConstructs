var head = 1;
var tail = 2;

var toss = Math.random(0,2);  //it takes input either 0,1
var floor = Math.floor(toss)
if(floor === 0){
    console.log("Random Coin Value: Head")
} else if(floor === 1)
{
    console.log(" Random Coin Value: Tails")
}