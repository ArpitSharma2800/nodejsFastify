const {
    v4: uuidv4
} = require("uuid");
const connection = require("../helpers/db");

exports.customerC = async function(req,reply){
    const uuid = uuidv4()
    const query = 'INSERT INTO customer (customerId, name, aadharNo, email, phoneNo) VALUES ?'
    const values = [req.body.customer.map(customer => [uuidv4(),customer.name, customer.aadhar, customer.email,customer.phone])]
    connection.query(query,values, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not insert into Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Customer added",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.customerRA = async function(req,reply,next){
    const query = 'SELECT * FROM customer'
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not get info from Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.customerR = async function(req,reply,next){
    const query = `SELECT * FROM customer WHERE customerId='${req.params.customerId}'`;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not get info from Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.customerRN = async function(req,reply,next){
    const query = `SELECT * FROM customer WHERE name='${req.params.name}'`;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not get info from Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.customerD = async function(req,reply,next){
    const query = `DELETE FROM customer WHERE customerId='${req.params.customerId}'`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not delete row in Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Customer successfully deleted",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.customerU = async function(req,reply,next){
    const query = `UPDATE customer SET name = ${req.body.name},aadharNo=${req.body.aadhar},email= ${req.body.email},phoneNo=${req.body.phone} WHERE customerId='${req.body.customerId}'`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not update row in Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Customer successfully updated",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}