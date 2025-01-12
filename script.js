const fastify = require('fastify');
const fastidyEnv = require(' ')
fastify.get('/', function(req, reply) {
    reply.send({hello : 'world'})
});
 
const start = async () => {
    try {
        await fastify.listen({port : process.env.PORT})
        fastify.log.info(
            `Server is running at http`
        )
    } 

    catch(err) {
        fastify.log.error(err);
        process.exit(1)
    }
}  