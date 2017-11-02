import Config from './Config'

export default class Api {

    static fetch (url: string): any {
        return fetch(Config.get('BASE_URL') + url).then((response) => {
            return response.json()
        });
    }
}