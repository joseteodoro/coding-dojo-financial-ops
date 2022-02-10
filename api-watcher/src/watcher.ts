import axios, { AxiosResponse } from 'axios';

const evaluateAll = async (items: any[]): Promise<any[]> => {
    return Promise.all(items.map((item) => {
        return axios(item, { validateStatus: () => true })
            .then((data: AxiosResponse) => data.status)
            .catch(err => err.response.status)
    }))
}

export { evaluateAll }