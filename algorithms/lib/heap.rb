class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc = prc || Proc.new {|a, b| a <=> b}
  end

  def count
    @heap.length
  end

  def extract

  end

  def peek
  end

  def push(val)
  end

  public
  def self.child_indices(len, parent_index)
      left = 2 * parent_index + 1
      right = 2 * parent_index + 2

      left_in_range = left < len
      right_in_range = right < len

      if left_in_range && right_in_range
        return [left, right]
      elsif left_in_range && (right_in_range == false)
        return [left]
      elsif (left_in_range == false) && right_in_range
        return [right]
      else
        return []
      end
  end

  def self.parent_index(child_index)
      raise "root has no parent" if child_index == 0

      is_odd = child_index % 2 === 1

      if is_odd
        return (child_index / 2)
      else
        return (child_index / 2) - 1
      end

  end


  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    parent = array[parent_idx]
    children = self.child_indices(array.length, parent_idx)

    return array if children.empty?

    max_index = children.min
    max_child = array[max_index]

    if parent > max_child
      array[parent_idx], array[max_index] = max_child, parent
    else
      return array
    end

    self.heapify_down(array, max_index, array.length)
  end

  def self.heapify_up(array, child_idx, len = array.length, prc)

  end

end
