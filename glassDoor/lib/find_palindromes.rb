def find_palindromes(arr)
  arr.select do |string|
    p palindrome?(string)
  end
end

def palindrome?(string)
  string.downcase.chars.each_with_index do |char, idx|
    last = string.length ]- (idx + 1)
    p char != string[last]
    if char != string[last]
      return false
    end
  end

  true
end

palis = ["Anna", "Civic", "Car", "America", "Level", "Coffee"]

p find_palindromes(palis)
