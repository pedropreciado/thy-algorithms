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
    index = bucket(key)
    @store[index].update(key, val) if @store[index].include?(key)

    @store[index].append(key, val)
  end

  def get(key)
    index = bucket(key)

    @store[index].get(key)
  end

  def delete(key)
    index = bucket(key)

    @store[index].remove(key)
  end

  def each
  end

  # uncomment when you have Enumerable included
  # def to_s
  #   pairs = inject([]) do |strs, (k, v)|
  #     strs << "#{k.to_s} => #{v.to_s}"
  #   end
  #   "{\n" + pairs.join(",\n") + "\n}"
  # end

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
        new_store[bucket(key)]
      end
    end
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    key.hash % num_buckets
  end
end
