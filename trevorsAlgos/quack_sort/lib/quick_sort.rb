class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    if array.length < 2
      return array
    end

    pivot = array.shift
    left = []
    right = []

    array.each do |num|
      if num < pivot
        left << num
      else
        right << num
      end
    end

    return self.sort1(left) + [pivot] + self.sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, last = array.length - 1, &prc)
    pivot = array[last]
    min = start
    max = last
    free = min

    while min < max
      if free == min

                              if array[max] <= pivot
                                array[free] = array[max]
                                min += 1
                                free = max
                              else
                                max -= 1
                              end

      else

                              if array[min] >= pivot
                                array[free] = array[min]
                                max -= 1
                                free = min
                              else
                                min += 1
                              end

      end

    sort2!(array, start, free - 1)
    sort2!(array, free + 1, last)
    end
  end

  def self.partition(array, start, length, p_idx = array.length, &prc)

  end
end
