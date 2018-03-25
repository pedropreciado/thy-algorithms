import java.io.*;

public class Employee {
  public String name; // Visible to any child class.

  private double salary; // Visible to Employee class only.

  public Employee (String empName) { // `name` is assigned in the constructor
    name = empName;
  }

  public void setSalary(double empSal) { // Set value to salary @ line 6;
    salary = empSal;
  }

  public void printEmp() { // Only prints employee details
    System.out.println("Employee name: " + name);
    System.out.println(name + "'s salary: " + salary);
  }

  public static void main(String args[]) {
    Employee empOne = new Employee("Pedro");
    empOne.setSalary(100000);
    empOne.printEmp();
  }
}
