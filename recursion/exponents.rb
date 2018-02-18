def exp1(b, n)
  if n == 0
    return 1
  end

  result = b * exp1(b, n - 1)
  result
end

p answer = exp1(2, 5)

def exp2(b, n)
  
end
