import UIKit

var str = "Hello, playground"

var someChar:Character = "c"

switch someChar {
    case "a":
        print("is an A")
    case "b", "c":
        print("is a B or C")
    default:
        print("some fallback")
}
