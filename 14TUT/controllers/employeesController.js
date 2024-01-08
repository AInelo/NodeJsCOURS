const Employee = require('../model/Employee')

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find();
    if (!employees) return res.status(204).json({'message': 'No employees found.'})
}

const createNewEmployee = async (req, res) => {
    if (!req?.body?.firstname || !req?.body?.lastname) {
        return res.status(400).json({'message': 'First and last names are required'});
    }
    try {
        const result = await Employee.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
    } catch (err) {
        console.error(err)
    }
}

const updateEmployee = async (req, res) => {
    
    if (!req?.body?.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }
    const employee = await Employee.findOne({ _id: req.body.id }).exec();
  
    if (!employee) {
        return res.status(204).json({ "message": `No employee matches ID ${req.body.id} not found` });
    }
    if (req.body?.firstname) employee.firstname = req.body.firstname;
    if (req.body?.lastname) employee.lastname = req.body.lastname;
    const result = await employee.save();
    res.json(result);
}

const deleteEmployee = async (req, res) => {
    // Pour dire que l'ID est obligatoire
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Employee ID required.' });
    // Pour receuillir la constante employee 
    const employee = await Employee.findOne({ _id: req.body.id }).exec();

    // La réponse si les l'employee n'est pas trouvé dans la base
    if (!employee) {
        return res.status(204).json({ "message": `Employee ID ${req.body.id} not found` });
    }

    // Usage de la methode .delete() pour supprimer l'employee
    const result = await employee.deletOne({ _id: req.body.id });

    // Envoi de la réponse formaté JSON 
    res.json(result);
}

const getEmployee = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'Employee ID required.' });

    const employee = await Employee.findOne({ _id: req.params.id }).exec();
    if (!employee) {
        return res.status(204).json({ "message": `No employee matches ID ${req.params.id}.` });
    }
    res.json(employee);
}


module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}