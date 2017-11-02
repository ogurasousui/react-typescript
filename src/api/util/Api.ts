export default class Api {

    static BASE_URL: string = 'http://localhost:3000/api/'

    static fetch (url: string): any {
        return fetch(this.BASE_URL + url).then((response) => {
            return response.json()
        });
    }
}