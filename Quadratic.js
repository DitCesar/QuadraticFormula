/**
 * 
 * quadratic.js
 * 
 */

a = 1
b = -5
c = 6

solve = b ** 2
temp = a * c
temp = 4 * temp
solve = solve - temp
sqrt = Math.sqrt(solve)
temp = 2 * a
x1 = (-b + sqrt) / temp
x2 = (-b - sqrt) / temp

console.log("Solving: " + a + "x^2 " + b + "x " + c + " = 0")
console.log("x1 = " + x1)
console.log("x2 = " + x2)