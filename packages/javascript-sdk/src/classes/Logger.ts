export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

interface SearchcraftLoggerOptions {
  logLevel: LogLevel;
  logFormatter?: (level: LogLevel, message: string) => string;
}

class SearchcraftLogger {
  private logLevel: LogLevel;
  private logFormatter: (level: LogLevel, message: string) => string;

  constructor(options: SearchcraftLoggerOptions) {
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

  log(level: LogLevel, message: string) {
    switch (level) {
      case LogLevel.DEBUG:
        this.debug(message);
        break;
      case LogLevel.INFO:
        this.info(message);
        break;
      case LogLevel.WARN:
        this.warn(message);
        break;
      case LogLevel.ERROR:
        this.error(message);
        break;
    }
  }
}

export const Logger = new SearchcraftLogger({ logLevel: LogLevel.NONE });
