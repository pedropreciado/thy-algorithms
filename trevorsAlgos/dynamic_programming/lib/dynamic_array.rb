require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = []
    @capacity = 8
  end

  def length
    @store.length
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    raise "index out of bounds" if length ==0
    @store.pop
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if length + 1 > capacity
    @store.push(val)
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if length ==0
    @store.shift
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if length + 1 > capacity
    @store.unshift(val)
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    if (index < 0 || index >= length || length == 0)
      raise "index out of bounds"
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_store = Array.new(length * 2)
    old_store = @store

    old_store.each do |el|
      new_store.push(el)
    end

    @capacity *= 2
    @store = new_store
  end
end
