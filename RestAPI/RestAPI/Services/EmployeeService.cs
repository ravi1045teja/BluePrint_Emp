using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using RestAPI.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
namespace RestAPI.Services
{

    public class EmployeeService
    {
        static string jsonFile = @"Services/Employee.json";



        static string employeeJson = File.ReadAllText(jsonFile);

        static List<Employee> employees { get; }
        static EmployeeService()
        {

            employees = JsonConvert.DeserializeObject<List<Employee>>(employeeJson);
        }

        public static List<Employee> GetAll() => employees;

        public static Employee Get(int id) => employees.FirstOrDefault(p => p.id == id);

        public static void Add(Employee employee)
        {


            employees.Add(employee);
        }

        public static void Delete(int id)
        {
            var employee = Get(id);
            if (employee is null)
                return;

            employees.Remove(employee);
        }

        public static void Update(Employee emp)
        {
            var index = employees.FindIndex(p => p.id == emp.id);
            if (index == -1)
                return;

            employees[index] = emp;
        }
    }
}
