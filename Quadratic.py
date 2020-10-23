'''
quadratic.py

'''
import math

a = 1
b = -5
c = 6

solve = b ** 2
solve = solve - (4 * a * c)
sqrt = math.sqrt(solve)
temp = 2 * a
x1 = (-b + sqrt)/temp
x2 = (-b - sqrt)/temp

print("Solving:" , a , "x^2 " , b , "x" , c , "= 0")
print("x1 =" , x1)
print("x2 =" , x2)