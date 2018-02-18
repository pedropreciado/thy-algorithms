require "bst_node"
# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.

class BinarySearchTree

  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    if @root.nil?
      @root = BSTNode.new(value)
    else
      self.class.set_parent(@root, value)
    end
  end

  def find(value, tree_node = @root)
    if tree_node.value == value
      return tree_node
    end

    if value < tree_node.value
      return nil if tree_node.left.nil?
      find(value, tree_node.left)
    else
      return nil if tree_node.right.nil?
      find(value, tree_node.right)
    end
  end

  def delete(value)
    find_and_delete(@root, value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    until tree_node.right.nil?
      tree_node = tree_node.right
    end

    return tree_node
  end


  def depth(tree_node = @root)
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  def find_and_delete(tree_node, value)
    node = find(value, tree_node)
    parent = node.parent

    if !!node.left && !!node.right
      new_node = maximum(node.left)

      if parent.left == node
        parent.left = new_node
      else
        parent.right = new_node
      end

    elsif node.left.nil? && node.right.nil?
      return @root = nil if node == @root

      if parent.left == node
        parent.left = nil
      else
        parent.right = nil
      end

    elsif node.left.nil? ^ node.right.nil?
      new_node = node.left.nil? ? node.right : node.left

      if parent.left == node
          parent.left = new_node
      else
        parent.right = new_node
      end

    end

    return node
  end

  # optional helper methods go here:
  def self.set_parent(tree_node, value)

    if tree_node.left.nil? && value < tree_node.value
      tree_node.left = BSTNode.new(value)
      tree_node.left.parent = tree_node
    elsif tree_node.right.nil? && value > tree_node.value
      tree_node.right = BSTNode.new(value)
      tree_node.right.parent = tree_node
    end

    if value < tree_node.value
      set_parent(tree_node.left, value)
    elsif value > tree_node.value
      set_parent(tree_node.right, value)
    end

  end
end
