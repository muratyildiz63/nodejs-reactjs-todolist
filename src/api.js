import axios from "axios";

export const todolist = async() => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/todo`)
    return data
}
export const todoDelete = async(id) => {
    const { data } = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/todo/${id}`)
    return data
}
export const complatedUpdate = async(id, complateds) => {
    const datas = {
        complated: complateds
    }
    const { data } = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/todo/${id}`, datas)
    return data
}
export const tudoAdd = async(value) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/todo`, value)
    return data
}
export const tudoUpdate = async(id, value) => {
    const { data } = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/todo/${id}`, value)
    return data
}