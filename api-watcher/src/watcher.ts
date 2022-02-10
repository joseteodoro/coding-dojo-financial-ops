import axios from 'axios';
import fetch from 'node-fetch';

const evaluateAll = async (items: any[]): Promise<any[]> => {
    return Promise.all(items.map((item) => {
        return fetch(item)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }))
}

export { evaluateAll }