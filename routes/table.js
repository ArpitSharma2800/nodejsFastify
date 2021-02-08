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