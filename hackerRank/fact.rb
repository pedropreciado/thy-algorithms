#!/bin/ruby

def factorial(n)
    # Complete this function
    return n <= 1 ? 1 : n * factorial(n - 1)
end

n = gets.strip.to_i
result = factorial(n)
puts result

