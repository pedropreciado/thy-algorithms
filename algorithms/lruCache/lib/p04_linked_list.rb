class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next
  end
end

class LinkedList
  def initialize
    @head = Node.new(nil, nil)
    @tail = Node.new(nil, nil)
    @head.prev = nil
    @tail.next = nil
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next unless empty?
  end

  def last
    @tail.prev unless empty?
  end

  def empty?
    return true if @head.prev == @tail
    false
  end

  def get(key)
  end

  def include?(key)
  end

  def append(key, val)
    node = Node.new(key, val)
    new_prev = @tail.prev
    @tail.prev = node
    node.prev = new_prev
  end

  def update(key, val)
  end

  def remove(key)
    node = @head

    until node == @tail
      if node.key = key
        node.remove
      else
        node = node.next
      end
    end
  end

  def each
    node = @head
    until node == @tail
      node = node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
