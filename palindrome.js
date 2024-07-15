function palindrome(str){
    let rev="";
    for(i=str.length-1;i>=0;i--){
        rev+=str[i];
    }
    if(rev==str){
        console.log(str + " is palindrome")
    }else{
        console.log(str +" is not a palindrome")
    }
}
console.log(palindrome("madam"))
console.log(palindrome("asdfghj"))
console.log(palindrome("shivani"))