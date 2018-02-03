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
  end

  def delete(value)
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
  end


  def depth(tree_node = @root)
  end

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end


  private
  def find_and_delete(value, tree_node)
  end

  # optional helper methods go here:
  def self.set_parent(tree_node, value)

    if tree_node.left.nil? && value < tree_node.value
      tree_node.left = BSTNode.new(value)
    elsif tree_node.right.nil? && value > tree_node.value
      tree_node.right = BSTNode.new(value)
    end

    if value < tree_node.value
      set_parent(tree_node.left, value)
    elsif value > tree_node.value
      set_parent(tree_node.right, value)
    end
    
  end
end
