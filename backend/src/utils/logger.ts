/**
 * Simple console logger utility for debugging
 * Provides different log levels and formatting
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

class Logger {
  private service: string;
  private isDevelopment: boolean;

  constructor(service: string = 'form-builder') {
    this.service = service;
    this.isDevelopment = process.env.NODE_ENV !== 'production';
  }

  private formatMessage(level: LogLevel, message: string, meta?: any): string {
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}] [${this.service}]`;
    
    if (meta) {
      return `${prefix} ${message} ${JSON.stringify(meta, null, 2)}`;
    }
    
    return `${prefix} ${message}`;
  }

  debug(message: string, meta?: any) {
    if (this.isDevelopment) {
      console.debug(this.formatMessage('debug', message, meta));
    }
  }

  info(message: string, meta?: any) {
    console.info(this.formatMessage('info', message, meta));
  }

  warn(message: string, meta?: any) {
    console.warn(this.formatMessage('warn', message, meta));
  }

  error(message: string, error?: any) {
    console.error(this.formatMessage('error', message, error));
  }

  logRequest(req: any) {
    this.debug('API Request', {
      method: req.method,
      url: req.url,
      ip: req.ip
    });
  }

  logResponse(res: any, duration: number) {
    this.debug('API Response', {
      statusCode: res.statusCode,
      duration: `${duration}ms`
    });
  }
}

export default new Logger('form-builder-api');
