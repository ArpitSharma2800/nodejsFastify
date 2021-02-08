const connection = require("../helpers/db")
const {
    v4: uuidv4
} = require("uuid");

exports.createCustTable = async function(req,reply, next){
    const query = `CREATE TABLE IF NOT EXISTS customer (customerId VARCHAR(255) PRIMARY KEY, name VARCHAR (255) NOT NULL, aadharNo INT NOT NULL, email VARCHAR(255), phoneNo VARCHAR(10) NOT NULL)`;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not create Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Table Created",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.roomTable = async function(req,reply,next){
    const query = 'CREATE TABLE IF NOT EXISTS room (roomId VARCHAR(255) PRIMARY KEY, roomType INT NOT NULL, roomPrice INT(5),roomNo INT NOT NULL, roomTaken TINYINT NOT NULL )'
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not create Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Table Created",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.chargesTable = async function(req, reply, next){
    const query = 'CREATE TABLE IF NOT EXISTS charges (chargeId VARCHAR(255) PRIMARY KEY, customerId VARCHAR(255) NOT NULL, roomId VARCHAR(255) NOT NULL, item varchar(255) NOT NULL, price INT(10), FOREIGN KEY (customerId) REFERENCES customer(customerId), FOREIGN KEY (roomId) REFERENCES room(roomId))'
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not create Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Table Created",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.paymentsTable = async function(req, reply, next){
    const query = 'CREATE TABLE IF NOT EXISTS payment (paymentId VARCHAR(255) PRIMARY KEY, paymentType TINYINT NOT NULL, customerId VARCHAR(255) NOT NULL, roomId VARCHAR(255) NOT NULL, FOREIGN KEY (customerId) REFERENCES customer(customerId), FOREIGN KEY (roomId) REFERENCES room(roomId))'
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not create Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Table Created",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.booking = async function(req,reply, next){
    const query = 'CREATE TABLE IF NOT EXISTS booking (bookingId VARCHAR(255) PRIMARY KEY, customerId VARCHAR(255) NOT NULL, roomId VARCHAR(255) NOT NULL, paymentId VARCHAR(255) NOT NULL, chargeId VARCHAR(255) NOT NULL, entryDate date NOT NULL, exitDate date, pricePerDay INT(10),FOREIGN KEY (customerId) REFERENCES customer(customerId),FOREIGN KEY (roomId) REFERENCES room(roomId),FOREIGN KEY (paymentId) REFERENCES payment(paymentId),FOREIGN KEY (chargeId) REFERENCES charges(chargeId))'
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not create Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Table Created",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}