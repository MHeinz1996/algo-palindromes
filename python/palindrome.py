import re

def palindrome(word):
    palindrome = False

    regex = re.sub("\W", " ", str(word))

    splitStr = [str(x.lower()) for x in str(regex) if x != ' ']
    
    for i in range(0, len(splitStr)):
        j = len(splitStr) - (i+1)
        if(splitStr[i] == splitStr[j]):
            palindrome = True
        else:
            palindrome = False
            break
        

    return palindrome