enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

interface LoggerOptions {
  logLevel: LogLevel;
  logFormatter?: (level: LogLevel, message: string) => string;
}

export class SDKDebugLogger {
  private logLevel: LogLevel;
  private logFormatter: (level: LogLevel, message: string) => string;

  constructor(options: LoggerOptions) {
    this.logLevel = options.logLevel || LogLevel.INFO;
    this.logFormatter = options.logFormatter || this.defaultFormatter;
  }

  private defaultFormatter(level: LogLevel, message: string): string {
    const levelStr = LogLevel[level];
    return `[${levelStr}] ${new Date().toISOString()}: ${message}`;
  }

  debug(message: string): void {
    if (this.logLevel <= LogLevel.DEBUG) {
      console.log(this.logFormatter(LogLevel.DEBUG, message));
    }
  }

  info(message: string): void {
    if (this.logLevel <= LogLevel.INFO) {
      console.info(this.logFormatter(LogLevel.INFO, message));
    }
  }

  warn(message: string): void {
    if (this.logLevel <= LogLevel.WARN) {
      console.warn(this.logFormatter(LogLevel.WARN, message));
    }
  }

  error(message: string): void {
    if (this.logLevel <= LogLevel.ERROR) {
      console.error(this.logFormatter(LogLevel.ERROR, message));
    }
  }
}

// how to use

const logger = new SDKDebugLogger({ logLevel: LogLevel.DEBUG });

logger.debug('This is a debug message.');
logger.info('This is an info message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
