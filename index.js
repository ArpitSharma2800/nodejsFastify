const fastify = require('fastify')({
    logger: true
  })

fastify.register(require('fastify-cors'), (instance) => { (req, cb) => {
  let corsOptions;
  if (/localhost/.test(origin)) {
    corsOptions = { origin: false }
  } else {
    corsOptions = { origin: true }
  }
  callback(null, corsOptions)
  }
})
const { chargesC, chargesU, chargesD } = require('./routes/charges');
const { customerC, customerRA, customerR, customerU, customerD } = require('./routes/customer');
const { roomC, roomA, roomT, room, roomD, roomU } = require('./routes/room');
const { createCustTable, roomTable, chargesTable, paymentsTable, booking } = require('./routes/table');

fastify.get('/', async (request, reply) => {
    var response = {
        message: "Server running .....",
    };
    reply.type('application/json').code(200)
    return reply.send(JSON.stringify(response));
  })

//customer details
fastify.get('/createCustTable',createCustTable);
fastify.get('/customer', customerRA);
fastify.get('/customer/:customerId', customerR);
fastify.post('/customer', customerC);
fastify.put('/cutomer', customerU);
fastify.delete('/customer/:customerId', customerD);
//end of customer details

//room details
fastify.get('/createRoomTable', roomTable)
fastify.get('roomavailable', roomA);
fastify.get('roomtaken', roomT);
fastify.get('room',room);
fastify.post('/room', roomC);
fastify.put('/room', roomU);
fastify.delete('/room/:roomId', roomD);
//end room details

//charges details
fastify.get('/createChargeTable', chargesTable);
fastify.post('/charges', chargesC);
fastify.put('/charges', chargesU);
fastify.delete('/charges/:chargeId', chargesD);
//end charges details

//payements details
fastify.get('/createPayTable', paymentsTable)
//end payements details

//booking details
fastify.get('/createBookTable', booking)
//end booking details
  
fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
})
  