function idCard(){
    var firstName = document.getElementById("firstName").value;
    var LastName = document.getElementById("lastName").value;
    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    var address = document.getElementById("address").value;
    var fullName = firstName +" "+ LastName;
    
    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAge").innerHTML = age;
    document.getElementById("postAddress").innerHTML = address;
    
    var numberArray =[];
    numberArray.push(age,phoneNumber);
    
    for(var i = 0; i < numberArray.length; i++){
      if(numberArray[i] <= 100){
      document.getElementById("postAge").innerHTML = "Age:" + age;
    }
    else if(numberArray[i] > 100){
      document.getElementById("postPhoneNumber").innerHTML = "phoneNumber:"+ phoneNumber;
    }
  }
} 