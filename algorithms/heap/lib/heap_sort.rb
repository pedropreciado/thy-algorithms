require_relative "heap"

class Array
  def heap_sort!
    start = Time.new.nsec
    heap = BinaryMinHeap.new

    self.each { |el| heap.push(el)}

    i = 0
    until heap.store.empty?
      self[i] = heap.extract
      i += 1
    end
    p Time.new.nsec - start
    self
  end
end
