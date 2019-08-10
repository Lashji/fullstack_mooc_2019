import axios from 'axios'

const baseurl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseurl).then(res => res.data)
}

const create = (person) => {
    return axios.post(baseurl, person).then(res => res.data)
}

const update = (id, newPerson) => {
    return axios.put(`${baseurl}/${id}`, newPerson).then(res => res.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseurl}/${id}`).then(res => res.data)
}

export default {
    getAll,
    create,
    update,
    deletePerson
}