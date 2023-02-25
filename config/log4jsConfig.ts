// config/log4js.js
/**
 * 这个是log4js文件配置，具体参数log4js官网
 */
const log4jsConfig = {
    appenders: {
        log: {
            type       : 'file',             // 如果需要区分日期的，这个值可以改为datefile
            filename   : './log/log.log',
            maxLogSize : 1024 * 1024 * 50,   // 日志文件的大小，我这里配置的是50M
            encoding   : 'utf-8',
            backups    : 100,
            compress   : true,      // 如果需要压缩，这个值改为true,是的话，这里会得到.gz格式的日志
            keepFileExt: true,      // 是否保持文件扩展名，不是的话，会成.1,.2,.3这样的日志文件
            layout     : {
                type: 'messagePassThrough'  //是直接跳过头部生成，我这里已经有自定义的头部生成, 所以就不需要这个了
            }
        },
        err: {
            type       : 'file',
            filename   : './log/err.log',
            maxLogSize : 1024 * 1024 * 50,
            encoding   : 'utf-8',
            backups    : 100,
            compress   : true,
            keepFileExt: true,
            layout     : {
                type: 'messagePassThrough'
            }
        },
        console: {
            type: 'console',  // 使用标准输出，会比 console 的性能高 stdout
            layout: { type: "messagePassThrough"}
        }
    },
    categories: {
        console: { appenders: ['console'], level: 'ALL' },
        error  : { appenders: ['err'], level: 'ALL' },
        default: { appenders: ['log','console'], level: 'ALL' }
    }
}
export default log4jsConfig;