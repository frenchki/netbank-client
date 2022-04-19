import { Injectable } from "@angular/core";
import { LogLevelType } from "../enums/log-level-type.enum";
import * as dayjs from "dayjs";

@Injectable()
export class LoggerService {

    private _logLevel: LogLevelType = LogLevelType.OFF;

    set logLevel(logLevel: LogLevelType) {
        this._logLevel = logLevel;
    }
    get logLevel(): LogLevelType {
        return this._logLevel;
    }

    constructor(){

    }

    public trace(message: string, optionalParams: any[]): void {
        this._isTraceEnabled() && console.trace(this._appendLogPrefix("trace", message), ...optionalParams);
    }

    public debug(message: string, optionalParams: any[]): void {
        this._isDebugEnabled() && console.debug(this._appendLogPrefix("debug", message), ...optionalParams);
    }

    public info(message: string, optionalParams: any[]): void {
        this._isInfoEnabled() && console.info(this._appendLogPrefix("info", message), ...optionalParams);
    }

    public warning(message: string, optionalParams: any[]): void {
        this._isWarningEnabled() && console.warn(this._appendLogPrefix("warning", message), ...optionalParams);
    }

    public error(message: string, optionalParams: any[]): void {
        this._isErrorEnabled() && console.error(this._appendLogPrefix("error", message), ...optionalParams);
    }

    private _appendLogPrefix(type: string, message: string): string {
        return `| ${dayjs().format("HH:mm D.MM.YYYY")} | ${type.toUpperCase()} | ${message}`;
    }

    private _isTraceEnabled(): boolean {
        return this._logLevel >= LogLevelType.DEBUG;
    }
    private _isDebugEnabled(): boolean {
        return this._logLevel >= LogLevelType.DEBUG;
    }
    private _isInfoEnabled(): boolean {
        return this._logLevel >= LogLevelType.INFO;
    }
    private _isWarningEnabled(): boolean {
        return this._logLevel >= LogLevelType.WARNING;
    }
    private _isErrorEnabled(): boolean {
        return this._logLevel >= LogLevelType.ERROR;
    }
}