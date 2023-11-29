export const add = ({data, name})=>{
    const storage = window.localStorage.getItem(name) || [];
    storage.push(data);
    window.localStorage.setItem(name, JSON.stringify(storage))
}
export const update = ({data, name})=>{
    const storage = window.localStorage.getItem(name);
    const findDataIndex = storage.findIndex(ex=> ex.email === data.email);
    if(findDataIndex){
        storage[findDataIndex] = data;
        window.localStorage.setItem(name, JSON.stringify(storage))
    }
}
export const remove = ({email, name})=> {
    const storage = window.localStorage.getItem(name);
    const findDataIndex = storage.findIndex(ex => ex.email === email);
    storage.splice(findDataIndex, 1)
    window.localStorage.setItem(name, JSON.stringify(storage))
}
export const getOne = ({email, name})=> {
    const storage = window.localStorage.getItem(name);

    return storage.find(item=> item.email === email) || null
}
