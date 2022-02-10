import axios, { AxiosResponse, AxiosError } from 'axios';

const evaluateAll = async (items: any[]): Promise<any[]> => {
    return Promise.all(items.map((item) => {
        return axios(item, { validateStatus: () => true })
            .then((data: AxiosResponse) => {
                return {status: data.status}
            })
            .catch((err: AxiosError) => {
                // console.log(err)
                return { 
                    error: "Could not resolve host",
                    status: err.response?.status
                }
            })
    }))
}

export { evaluateAll }