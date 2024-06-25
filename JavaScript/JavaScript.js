var output=[];
var count = 1;
function fizzbuzz(){
    if (count%3===0 && count%5===0) {
        output.push("fizzbuzz");
    }
    else if(count%5===0){
        output.push("buzz");
    }
    else if(count%3===0){
        output.push("fizz")
    }
    else{
        output.push(count)
    }
    console.log(output)
    count =count +1;

}
for (let index = 0; index < 15; index++) {
    
    fizzbuzz();

    
}
