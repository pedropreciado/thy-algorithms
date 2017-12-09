i = 4
d = 4.0
s = 'HackerRank '
$/ = "END"  
user_input = STDIN.gets
user_input = user_input.split("\n")

# Declare second integer, double, and String variables.

i2 = user_input[0].to_i
d2 = user_input[1].to_f
s2 = user_input[2]


# Read and save an integer, double, and String to your variables.

# Print the sum of both integer variables on a new line.
print i + i2
print "\n"
# Print the sum of the double variables on a new line.
print d + d2
print "\n"
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print "#{s}#{s2}"
