process.stdout.write("\n This program is a computer game. Please,"
                    +"\n type in a number : ");
process.stdin.on("data", function(input_from_user)
{
var x = Number(input_from_user);
var y = x * 2;
var z = y + 1;
var m = z + 1;
var e = x / Math.PI;
var q = Math.sqrt(x);
if (x > 0)
{
process.stdout.write("\n The square roof of 2 is " + Math.sqrt(2) + "\n");    
process.stdout.write("\n The square roof of your number is " + q + "\n");    
process.stdout.write("\n The value of Pi is " + Math.PI  + "\n");
process.stdout.write("\n Your number divided by Pi is " + e + "\n");
process.stdout.write("\n You typed in " + x + " ." + "\n"
                    +"\n My number are " + y + " , " + z + " and " + m +" ." + "\n"
                    +"\n Sorry, you lost the game." + "\n"
                    +"\n I have more and larger numbers :v " + "\n");					
}
if (x < 0)
{
    process.stdout.write("\n Negative numbers not allowed! :( ");
}
process.exit();
});					