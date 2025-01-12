const fp = require("fastofy-plugin");

const mongoose = require("mongoose");

module.exports = fp(async (fastify, opts) => {

    try {

        await mongoose.connect(process.env.MONGODB_URL);
        fastidy.decorate("mongoose", mongoose);
        
    }

    catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }


})