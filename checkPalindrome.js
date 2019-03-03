function checkIfPalindrome() {
    var input = document.getElementById("inputText").value;
    console.log(input);
    console.log(input.length);
    var pallendrome=true;
    var res;

    for(i=input.length-1,k=0; i>=0; k++, i--) {
            if(!(input[k]==(input[i]))) {
                pallendrome=false;
                break;
            }
        }

    if(pallendrome) {
        res="Its a PALINDROME";
    }else{
        res="Its not a PALINDROME";	
    }

    document.getElementById("result").innerHTML=res;
}