const { createLogger, format, transports} = require('winston');

const customFormat = format.printf(({level, message, timestamp}) =>{
    return `${timestamp} [${level}] ${message}`;
});

const logger = createLogger({
    level: 'info' , 
    format: format.combine(
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        format.errors({stack:true}),
        format.splat()
    ),
    transports: [
        new transports.Console({
            format: format.combine(format.colorize(), customFormat)
        })
    ]
});
console.log();

module.exports = logger;