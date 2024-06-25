var names=["Taha", "Awais", "Abrar", "Sameer", "Ahmed", "Zahid", "Hassan"]
function whoWillPay() {

    var numOfPeople=names.length;
    var randomPersonNum=Math.floor(Math.random() * numOfPeople);
    var personWhoWillPay=names[randomPersonNum];

    console.log(personWhoWillPay)
    
}

whoWillPay();