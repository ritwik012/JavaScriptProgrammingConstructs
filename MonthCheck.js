var day= 1;
var month=3;
if((month>=3 && monthFromUser<=6)&&(dayFromUser<=31 && dayFromUser <=1))   
{
   console.log("True")
}
else if(monthFromUser==3 && dayFromUser<=20 && dayFromUser<=31)
{
    console.log("True")
}
else if(monthFromUser==6 && dayFromUser<=20 && dayFromUser>=1)
{
    console.log("True")
}
else
{
    console.log("False Please enter date between 20 march and 20 june")
}