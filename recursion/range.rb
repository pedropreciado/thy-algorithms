def range(start, last)
  if last <= start
    return []
  end

  result = range(start, last - 1) + [last - 1]
  result
end

answer = range(1, 5)
p answer
