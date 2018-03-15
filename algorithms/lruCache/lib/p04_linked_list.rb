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
    @head = Node.new
    @tail = Node.new

    @head.next = @tail
    @tail.prev = @head
    @head.prev = nil
    @tail.next = nil
  end

  def [](i)
    index = 0

    node = first

    while index != i
      node = node.next
      index += 1
    end

    node
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    return true if first == @tail

    false
  end

  def get(key)
    each do |node|
      return node.val if node.key == key
    end

    nil
  end

  def include?(key)
    return false if get(key).nil?

    true
  end

  def append(key, val)
    node = Node.new(key, val)

    last.next = node
    node.prev = last
    node.next = @tail
    @tail.prev = node

    node
  end

  def update(key, val)
    each do |node|
      if node.key == key
        node.val = val

        return node
      end
    end
  end

  def remove(key)
    each do |node|
      if node.key == key
        face, butt = node.prev, node.next

        face.next, butt.prev = butt, face
        node.next, node.prev = nil, nil

        return node
      end
    end
  end

  include Enumerable

  def each
    node = first

    until node == @tail
      yield node
      node = node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
