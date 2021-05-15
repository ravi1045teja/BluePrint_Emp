using System;
namespace RestAPI.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string fullName { get; set; }
        public string address { get; set; }
        public object phoneNumber { get; set; }
        public int position { get; set; }
    }
}
