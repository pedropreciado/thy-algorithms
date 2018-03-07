require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize
    @store = StaticArray.new
    @start_idx = 0
    @capacity = 8
    @last_idx = 0
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if @start_idx == @last_idx
    @store[index % @last_idx]
  end

  # O(1)
  def []=(index, val)
    @store[index % @last_idx] = val
  end

  # O(1)
  def pop
    popped = @store[@last_idx - 1]
    @store[@last_idx] = nil
    @last_idx -= 1

    popped
  end

  # O(1) ammortized
  def push(val)
    @store[(@last_idx) % capacity] = val

    @last_idx += 1
    @last_idx %= capacity
  end

  # O(1)
  def shift
    shifted = @store[@start_idx]
    @start_idx += 1

    shifted
  end

  # O(1) ammortized
  def unshift(val)
    @store[(@start_idx - 1) % capacity] = val
  end

  def length
    @last_idx - @start_idx
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)

  end

  def resize!
    new_array = StaticArray.new(capacity *= 2)
    old_array = @store

    old_array.each_with_index do |el, i|
      new_array[i] = el
    end

    @store = new_array
  end
end
