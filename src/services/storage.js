const key = "customers"

export const addToStorage = (data) => {
    const storage = JSON.parse(window.localStorage.getItem(key)) || []
    storage.push(data);
    window.localStorage.setItem(key, JSON.stringify(storage))
}
export const updateStorage = (data) => {
    const storage = JSON.parse(window.localStorage.getItem(key))
    const findDataIndex = storage.findIndex(ex => ex.email === data.email);
    if (findDataIndex !== -1) {
        storage[findDataIndex] = data;
        window.localStorage.setItem(key, JSON.stringify(storage))
    }
}
export const removeFromStorage = (email) => {
    const storage = JSON.parse(window.localStorage.getItem(key))
    const findDataIndex = storage.findIndex(ex => ex.email === email);
    storage.splice(findDataIndex, 1)
    window.localStorage.setItem(key, JSON.stringify(storage))
}
export const getOne = (email) => {
    const storage = JSON.parse(window.localStorage.getItem(key)) || []

    return storage.find(item => item.email === email) || null
}
export const getAll = () => {
    return JSON.parse(window.localStorage.getItem(key)).reverse() || []
}
