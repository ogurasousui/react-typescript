import * as config from '../config/app.json'

export default class Config {

    protected static _config: any = null

    static get(key: string, defaultValue: any = null): any {
        if (this.getConfig()[key] !== void 0)
        {
            return this.getConfig()[key]
        }
        else
        {
            return defaultValue
        }
    }

    static set(key:string, value: any): void {
        this._config[key] = value
    }

    protected static getConfig(): any
    {
        if (this._config === null)
        {
            this._config = <any>config
        }
        return this._config
    }

}