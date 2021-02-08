const fastify = require('fastify')({
    logger: true
  })
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./helpers/db');
const {
    v4: uuidv4
} = require("uuid");
const { createCustTable, roomTable } = require('./routes/table');

fastify.get('/', async (request, reply) => {
    var response = {
        message: "Server running .....",
    };
    reply.type('application/json').code(200)
    return reply.send(JSON.stringify(response));
  })

//customer details
fastify.get('/createCustTable',createCustTable);
//end of customer details

//room details
fastify.get('/createRoomTable', roomTable)
//end room details
  
fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
})
  