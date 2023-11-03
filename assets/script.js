const employees = [
    {
      id: "C101",
      name: "Varun",
      role: "Junior Web Developer",
      experience: "2 Years",
      payout: "25000",
    },
    {
      id: "C102",
      name: "Srinika",
      role: "Junior Web Developer",
      experience: "1 Year",
      payout: "20000",
    },
    {
      id: "C103",
      name: "Rakshitha",
      role: "Front End Developer",
      experience: "3 Years",
      payout: "30000",
    },
    {
      id: "C104",
      name: "Hema",
      role: "Junior Web Developer",
      experience: "3 Years",
      payout: "25000",
    },
    {
      id: "C105",
      name: "Deepak",
      role: "Front End Developer",
      experience: "4 Years",
      payout: "35000",
    },
    {
      id: "C106",
      name: "Sakthi",
      role: "Back End Developer",
      experience: "2 Years",
      payout: "30000",
    },
    {
      id: "C107",
      name: "Dakshan",
      role: "Senior Front End Developer",
      experience: "5 Years",
      payout: "45000",
    },
    {
      id: "C108",
      name: "Ananth",
      role: "BDE",
      experience: "2 Years",
      payout: "20000",
    },
    {
      id: "C109",
      name: "Sharaddha",
      role: "Business Associate",
      experience: "1 Year",
      payout: "15000",
    },
    {
      id: "C110",
      name: "Dinesh",
      role: "Tech Lead",
      experience: "4 Years",
      payout: "65000",
    },
  ];



/* 1 Display employee details in a table format in console*/
console.log("1 Display employee details in a table format in console")
console.table(employees)


/* 2 Display Employees who are working as a Junior Web Developer */

const jun_web_dev=employees.filter((employee)=>{
   return employee.role==="Junior Web Developer"
})
console.log(" 2 Display Employees who are working as a Junior Web Developer")
console.table(jun_web_dev)


/* 3 Display Total Employees who are working as a Junior Web Developer */


const jun_web_dev1=employees.filter((employee)=>{
    return employee.role==="Junior Web Developer"
 })

 console.log("3. Total Employees who are working as a Junior Web Developer =" +jun_web_dev1.length)

 /* 4. Display Employee name and role whose salary range is from 25000 to 35000*/

 const filtersalary=employees.filter((emp)=>{
    return (emp.payout>=25000&&emp.payout<=35000);
 })

 console.log("4.salary range is from 25000 to 35000")

 console.table(filtersalary)


 /* 5 Display the senior employee details.*/

 const senior=employees.filter((emp)=>{
    return emp.role==="Senior Front End Developer"

 })

 console.log("5. Display the senior employee details")
 console.table(senior)