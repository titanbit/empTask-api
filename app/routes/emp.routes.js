const { create_emp, emp_List, getEmpDetails, deleteEmp, updateEmpDetails } = require("../controllers/emp.controller")

module.exports = (app) => {
    app.post("/createEmp", create_emp);
    app.get("/emplist", emp_List);
    app.get("/empDetails/:empId", getEmpDetails)
    app.post("/updateEmpDetails/:empId", updateEmpDetails)
    app.get("/deleteEmp/:empId", deleteEmp)
}