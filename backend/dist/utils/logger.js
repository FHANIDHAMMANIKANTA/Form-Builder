/**
 * Simple console logger utility for debugging
 * Provides different log levels and formatting
 */
class Logger {
    constructor(service = 'form-builder') {
        this.service = service;
        this.isDevelopment = process.env.NODE_ENV !== 'production';
    }
    formatMessage(level, message, meta) {
        const timestamp = new Date().toISOString();
        const prefix = `[${timestamp}] [${level.toUpperCase()}] [${this.service}]`;
        if (meta) {
            return `${prefix} ${message} ${JSON.stringify(meta, null, 2)}`;
        }
        return `${prefix} ${message}`;
    }
    debug(message, meta) {
        if (this.isDevelopment) {
            console.debug(this.formatMessage('debug', message, meta));
        }
    }
    info(message, meta) {
        console.info(this.formatMessage('info', message, meta));
    }
    warn(message, meta) {
        console.warn(this.formatMessage('warn', message, meta));
    }
    error(message, error) {
        console.error(this.formatMessage('error', message, error));
    }
    logRequest(req) {
        this.debug('API Request', {
            method: req.method,
            url: req.url,
            ip: req.ip
        });
    }
    logResponse(res, duration) {
        this.debug('API Response', {
            statusCode: res.statusCode,
            duration: `${duration}ms`
        });
    }
}
export default new Logger('form-builder-api');
