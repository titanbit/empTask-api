const EmpModel = require("./schema/emp.schema")


exports.createEmp = async (input) => {
    try {
        let newEmp = new EmpModel({
            empName: input.empName,
            department: input.department,
            salary: input.salary
        })
        let savedEmp = await newEmp.save()
        if (savedEmp) {
            return savedEmp
        }
        return false
    } catch (error) {
        return false
    }
}

exports.getEmpList = async (input) => {
    try {
        let sortBy = {}
        if (input.sortBy !== undefined) {
            sortBy = {
                [input.sortBy]: input.order === "ASC" ? 1 : -1
            }
        } else {
            sortBy = {
                _id: 1
            }
        }
        let emplist = await EmpModel.find().sort(sortBy)
        if (emplist.length > 0) {
            return emplist
        }
        return false
    } catch (error) {
        return false
    }
}

exports.empDetails = async (input) => {
    try {
        let emp = await EmpModel.findOne({ _id: input.empId })
        if (emp) {
            return emp
        }
        return false
    } catch (error) {
        console.log({ error })
        return false
    }
}

exports.updateDetails = async (input) => {
    try {
        let toUpdate = {
            empName: input.empName,
            department: input.department,
            salary: input.salary
        }
        let updatedEmp = await EmpModel.updateOne({ _id: input.empId }, {
            $set: toUpdate
        })
        if (updatedEmp) {
            return updatedEmp
        }
        return false
    } catch (error) {
        return false
    }
}

exports.deleteEmpDetails = async (input) => {
    try {
        let removedEmp = await EmpModel.deleteOne({ _id: input.empId })
        if (removedEmp) {
            return removedEmp
        }
        return false
    } catch (error) {
        return false
    }
}