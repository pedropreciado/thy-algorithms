require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    index = bucket(key)

    @store[index].include?(key)
  end

  def set(key, val)
    resize! if @count + 1 >= num_buckets
    index = bucket(key)

    if @store[index].include?(key)
      @store[index].update(key, val)
      return @count
    end

    @store[index].append(key, val)
    @count += 1
  end

  def get(key)
    index = bucket(key)

    val = @store[index].get(key)
  end

  def delete(key)
    index = bucket(key)

    @store[index].remove(key)

    @count -= 1
  end

  include Enumerable

  def each
    @store.each do |bucket|
      bucket.each do |node|
        yield node.key, node.val
      end
    end
  end

  # uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    new_store = Array.new(num_buckets * 2) { LinkedList.new }
    old_store = @store

    old_store.each do |bucket|
      bucket.each do |node|
        index = node.key.hash % (num_buckets * 2)

        new_store[index].append(node.key, node.val)
      end
    end

    @store = new_store
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    key.hash % num_buckets
  end
end
