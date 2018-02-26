require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless include?(key)
      resize! if self.count == num_buckets - 1

      self[key].push(key)
      @count += 1
    end
  end

  def include?(key)
    self[key].include?(key)
  end

  def remove(key)
    self[key].delete(key)
  end

  private

  def [](key)
    # optional but useful; return the bucket corresponding to `num`
    hash = key.hash
    @store[hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { Array.new }
    old_store = @store

    old_store.each do |bucket|
      bucket.each do |key|
          new_store[key.hash % new_store.length].push(key)
      end
    end

    @store = new_store
  end
end
