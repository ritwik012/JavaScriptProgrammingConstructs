var randoms = [...Array(5)].map(() => Math.floor(Math.random() * 1000));   //Read 5 random number and find mininum and maximum value
console.log(randoms);
var min = Math.min( ...randoms ),
   max = Math.max( ...randoms );
console.log("Minimum Value:"+min);
console.log("Maximum Value:"+max);