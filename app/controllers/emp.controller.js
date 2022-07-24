const { createEmp, getEmpList, empDetails, deleteEmpDetails, updateDetails } = require("../models/emp.model")

exports.create_emp = async (req, res) => {

    try {

        let input = {
            ...req.body
        }
        //validations 

        //create emp

        let savedEmp = await createEmp(input)
        if (savedEmp) {
            return res.send({ status: true, message: "Emp details added.", data: savedEmp })
        }
        return res.send({ status: false, message: "Emp details not saved.", data: {} })
    } catch (error) {
        return res.send({ status: false, message: "server error", data: {} })
    }
}

exports.emp_List = async (req, res) => {
    try {

        let queryObj = { ...req.query }

        let list = await getEmpList(queryObj)
        if (list) {
            return res.send({ status: true, message: "Emp list found.", data: list })
        }
        return res.send({ status: false, message: "Emp list not found.", data: {} })
    } catch (error) {
        return res.send({ status: false, message: "server error", data: {} })
    }
}

exports.getEmpDetails = async (req, res) => {
    try {
        let input = {
            empId: req.params.empId
        }
        let emp = await empDetails(input)
        if (emp) {
            return res.send({ status: true, message: "Emp found.", data: emp })
        }
        return res.send({ status: false, message: "Emp not found.", data: {} })
    } catch (error) {
        return res.send({ status: false, message: "server error.", data: {} })
    }
}



exports.updateEmpDetails = async (req, res) => {
    try {

        let input = {
            ...req.body,
            empId: req.params.empId
        }
        let updatedEmp = await updateDetails(input)
        if (updatedEmp) {
            return res.send({ status: true, message: "Emp details updated.", data: updatedEmp })

        }
        return res.send({ status: false, message: "Emp details not updated", data: {} })

    } catch (error) {
        return res.send({ status: false, message: "server error.", data: {} })

    }
}

exports.deleteEmp = async (req, res) => {
    try {
        let input = {
            empId: req.params.empId
        }

        let empDeleted = await deleteEmpDetails(input)
        if (empDeleted) {
            return res.send({ status: true, message: "Emp details deleted.", data: empDeleted })
        }
        return res.send({ status: false, message: "Emp not found.", data: {} })
    } catch (error) {
        console.log({ error })
        return res.send({ status: false, message: "server error", data: {} })
    }
}