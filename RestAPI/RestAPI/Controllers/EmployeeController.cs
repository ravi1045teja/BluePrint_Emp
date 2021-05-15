using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestAPI.Models;
using RestAPI.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RestAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class EmployeeController : Controller
    {
        //Get all employees
        [HttpGet]


        public ActionResult<List<Employee>> GetAll() => EmployeeService.GetAll();

        //Get Employee by poistion
        [HttpGet("{id}")]

        public ActionResult<Employee> Get(int id)
        {
            var emp = EmployeeService.Get(id);

            if (emp == null)
                return NotFound();

            return emp;
        }
        //Add Employee
        [HttpPost]

        public IActionResult Create(Employee employee)
        {



            EmployeeService.Add(employee);
            return CreatedAtAction(nameof(Create), new { id = employee.id }, employee);
        }

        //Update Employee
        [HttpPut("{id}")]

        public IActionResult Update(int id, Employee employee)
        {
            var existingEmployee = EmployeeService.Get(id);
            if (id != employee.position || existingEmployee is null)
                return BadRequest();

            EmployeeService.Update(employee);

            return NoContent();
        }

        //Delete Employee

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            var emp = EmployeeService.Get(id);

            if (emp is null)
                return NotFound();

            EmployeeService.Delete(id);

            return NoContent();
        }

    }
}

