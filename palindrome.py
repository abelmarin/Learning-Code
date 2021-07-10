def checkPalindrome (word):
    if (len(word)%2==0):
        for i in range(0,int(len(word)/2)):
            if(word[int(len(word)/2)-i-1] != word[int(len(word)/2)+i]):
                print("Not a palindrome")
                return
        print("Palindrome")
    elif (len(word)%2!=0):
        for i in range(0,int(len(word)/2)-1):
            if(word[int(len(word)/2)-i-1] != word[int(len(word)/2)+i]):
                print("Not a palindrome")
                return
        print("Palindrome")

checkPalindrome("1001")
checkPalindrome("bob")
checkPalindrome("abel")