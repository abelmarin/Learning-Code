import UIKit

var str = "Hello, playground"

for index in 1...5 {
    print(index)
}

// underscore is used in place of a variable name when it isn't used in the loop
for _ in 1...5 {
    print("hello1")
}

var counter = 5
while counter > 0 {
    print("hello2")
    counter -= 1
}

counter = 4
repeat {
    print("helloooo")
    counter -= 1
} while counter > 0
