const util = require('util');
const connection = require('../db/index');
const query = util.promisify(connection.query).bind(connection);
const { validateUser } = require('../middlewares/users');

// function that creates a new user in the database after performing validation checks on the user json received from request body
exports.createUser = async (req, res) => {
    const newUser = req.body;
    
    try {
        // check for validation before creating the user
        validateUser(newUser);
    
        // insert the user into the database
        const insertQuery = "INSERT INTO USERS set ?";
        await query(insertQuery, newUser);

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // in case of validation error send appropriate error message
        if (error.validationError) {
            res.status(400).json({ error: error.message });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
