const key = "customers"

export const add = (data) => {
    const storage = JSON.parse(window.localStorage.getItem(key)) || []
    storage.push(data);
    window.localStorage.setItem(key, JSON.stringify(storage))
}
export const update = (data) => {
    const storage = JSON.parse(window.localStorage.getItem(key))
    const findDataIndex = storage.findIndex(ex => ex.email === data.email);
    if (findDataIndex) {
        storage[findDataIndex] = data;
        window.localStorage.setItem(key, JSON.stringify(storage))
    }
}
export const remove = (email) => {
    const storage = JSON.parse(window.localStorage.getItem(key))
    const findDataIndex = storage.findIndex(ex => ex.email === email);
    storage.splice(findDataIndex, 1)
    window.localStorage.setItem(key, JSON.stringify(storage))
}
export const getOne = (email) => {
    const storage = JSON.parse(window.localStorage.getItem(key)) || []

    return storage.find(item => item.email === email) || null
}
