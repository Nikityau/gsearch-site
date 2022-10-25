import chalk from "chalk";

import dotenv from 'dotenv'
dotenv.config()


export class Logger {

    static errorCb = (msg) => chalk.bgRed(chalk.black(msg))
    static errorText = (text) => chalk.red(text)

    static successCb = (text) => chalk.bgGreen(chalk.black(text))
    static successText = (text) => chalk.green(text)

    static logText(text, textConfigCb) {
        const canLog = process.env.CAN_LOG;

        if(canLog == 0) return;

        console.log(textConfigCb(text))
    }

    static newLine() {
        console.log('')
    }

    static success(text) {
        Logger.logText('SUCCESS', Logger.successCb)
        Logger.logText(text, Logger.successText)
        Logger.newLine()
    }

    static error(msg) {
        Logger.logText('ERROR', Logger.errorCb)
        Logger.logText(msg, Logger.errorText)
        Logger.newLine()
    }

    static serverUp(port) {
        Logger.logText('Server is running...', Logger.successCb)
        Logger.logText(`http://localhost:${port}`, Logger.successCb)
    }
}
