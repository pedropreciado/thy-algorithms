require_relative 'heap'
require_relative 'heap_sort'

def k_largest_elements(array, k)
  p array.length
  array.heap_sort![array.length - k..-1]
end
