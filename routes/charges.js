const {
    v4: uuidv4
} = require("uuid");
const connection = require("../helpers/db");

exports.chargesC = async function(req,reply, next){
    const query = `INSERT INTO charges (chargeId, customerId, roomId, description, price) VALUES (${uuidv4()},${req.body.cutomerId},${req.body.roomId},${req.body.description},${req.body.cutomerId},${req.body.price})`
    connection.query(query,function (err, result) {
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

exports.chargesD = async function(req,reply,next){
    const query = `DELETE FROM charges where chargeId=${req.params.chargeId}`
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
                message: "Success: CHarges successfully deleted",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.chargesU = async function(req,reply,next){
    const query = `UPDATE charges SET customerId=${req.body.cutomerId},roomId=${req.body.roomId},description=${req.body.description},price=${req.body.price} WHERE chargeId=${req.body.chargeId}`
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
                message: "Success: charges updated",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.charges = async function(req,reply,next){
    const query = `SELECT customer.name as customerName, customer.aadharNo as customerAadhar, room.roomNo, room.roomType, room.roomTaken, room.roomPrice, charges.description, charges.	price FROM charges INNER JOIN customer ON charges.customerId = customer.customerId INNER JOIN room ON charges.roomId = room.roomId`;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not update row in Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}