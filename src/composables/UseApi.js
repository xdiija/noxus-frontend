import { api } from 'boot/axios'

export default function useApi (url) {
    const list = async () => {
        try {
            const { data } = await api.get(url)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const getByID = async (id) => {
        try {
            const { data } = await api.get(`${url}/${id}`)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const post = async (reqData) => {
        try {
            const { data } = await api.post(url, reqData)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const update = async (reqData) => {
        try {
            const { data } = await api.put(`${url}/${reqData.id}`, reqData)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    const remove = async (id) => {
        try {
            const { data } = await api.delete(`${url}/${id}`)
            return data
        } catch (error) {
            throw new Error(error)
        }
    }

    return {
        list,
        getByID,
        post,
        update,
        remove
    }
}
