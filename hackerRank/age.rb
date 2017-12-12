class Person
    attr_accessor :age
    def initialize(initialAge)
        if initialAge <= 0
            print "Age is not valid, setting age to 0.\n" 
           
            @initialAge = 0 
        else
            @initialAge = initialAge
        end
        # Add some more code to run some checks on initialAge       
    end
    def amIOld()
        if @initialAge < 13
            print "You are young.\n"
        elsif 13 <= @initialAge && @initialAge < 18
            print "You are a teenager.\n"
        elsif 18 <= @initialAge
            print "You are old.\n"
            
        end
      # Do some computations in here and print out the correct statement to the console
    end
    def yearPasses()
        @initialAge += 1
      # Increment the age of the person in here
    end
end

T=gets.to_i
for i in (1..T)do
    age=gets.to_i
    p=Person.new(age)
    p.amIOld()
    for j in (1..3)do
        p.yearPasses()
    end
    p.amIOld
  	puts ""
end      
