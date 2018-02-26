class MaxIntSet
  def initialize(max)
    @max = max
    @store = []
    max.times {|_| @store.push(false)}
  end

  def insert(num)
    if is_valid?(num)
      @store[num] = true
    else
      raise "Out of bounds"
    end
  end

  def remove(num)
    if is_valid?(num)
      @store[num] = false
    else
      raise "Out of bounds"
    end
  end

  def include?(num)
    if is_valid?(num)
      @store[num] == true
    else
      raise "Out of bounds"
    end
  end

  private

  def is_valid?(num)
    0< num && num < @store.length
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num].push(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    unless include?(num)
      resize! if self.count == num_buckets - 1


      self[num].push(num)
      @count += 1
    end
  end

  def remove(num)
    self[num].delete(num) if include?(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new }
    oldStore = @store

    oldStore.each do |bucket|
      bucket.each do |num|
        new_store[num % new_store.length].push(num)
      end
    end
    
    @store = new_store
  end
end
