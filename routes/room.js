// room type == 1 : super deluxe
// room type == 2 : deluxe
// room type == 3 : normal

// taken == 1 : true
// taken == 2 : false

const {
    v4: uuidv4
} = require("uuid");
const connection = require("../helpers/db");

exports.roomC = async function(req,reply,next){
    const room = req.body;
    const query = `INSERT INTO room (roomId, roomType, roomPrice, roomNo, roomTaken) VALUES (${uuidv4()}, ${room.type},${room.price},${room.num},${room.taken})`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not insert into Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Room added",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.roomA = async function(req, reply, next){
    const query = `SELECT * FROM room WHERE roomTaken=2`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not read Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.roomT = async function(req, reply, next){
    const query = `SELECT * FROM room WHERE roomTaken=1`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not read Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.room = async function(req, reply, next){
    const query = `SELECT * FROM room`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not read Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(result));
        }
    });
}

exports.roomD = async function(req,reply,next){
    const query = `DELETE FROM room WHERE roomId=${req.params.roomId}`
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not read Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Room deleted",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}

exports.roomU = async function(req,reply,next){
    const query = `UPDATE room SET roomType=${room.type},roomPrice=${room.price},roomNo=${room.num},roomTaken=${room.taken} WHERE roomId=${req.body.roomId}`;
    connection.query(query,values, function (err, result) {
        if (err) {
            console.log(err);
            var response = {
                message: "Error: Could not update Table",
            };
            reply.type('application/json').code(404)
            return reply.send(JSON.stringify(response));
        } else {
            var response = {
                message: "Success: Room updated",
            };
            reply.type('application/json').code(200)
            return reply.send(JSON.stringify(response));
        }
    });
}