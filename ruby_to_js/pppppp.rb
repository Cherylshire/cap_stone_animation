# Problem 1:
# Write a method that prints out every number from 1 to 100. 

# def print_nums
#   index = 1
#   while index <= 100
#     puts index
#     index += 1
#   end
# end

# print_nums

# Problem 2: 
# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).

# def by_two_nums
#   index = 1
#   while index <= 100
#     puts index
#     index += 2
#   end
# end

# by_two_nums

# Problem 3:
# Write a method that accepts an array of numbers as a parameter, and counts how many 55's there are in the array.

def array_five_five(array)
  count = 0
  array.each do |num|
    if array == 55
      count += 1
    end
  end
  return count
end

p array_five_five([3, 55, 63, 55, 15, 16, 55, 20, 30, 4])

def array_five_fivve(array)
  count = []
  array.each do |num|
    if array == 55
      count.push(num)
    end
  end
  return count.length
end

p array_five_fivve([3, 55, 63, 55, 15, 16, 55, 20, 30, 4])

# Problem 4:
# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].



# Problem 5:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}



# Problem 6:
# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}



# Problem 7:
# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.



# Problem 8:
# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# x = 10
# if x = "10"
#   puts "equal"
# else
#   puts "not equal"
# end

# x = 100

# def add_one(num)
#   x = 1
#   return num + x 
# end

# puts x
# puts add_one(5)
# puts x