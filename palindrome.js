function palindromeChecker() {
    let input = document.getElementById("input-section").value;
    let str = input.toString();   

    let i = 0;
    let j = str.length - 1;
    let isPalindrome = true;

    while (i < j) {
        if (str[i] !== str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }

    document.getElementById("result-section").value =
        isPalindrome ? "It's a Palindrome" : "Not a Palindrome";
}
