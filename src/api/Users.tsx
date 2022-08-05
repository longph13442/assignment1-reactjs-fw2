import instance from "./instance"

export const signup =(user:any)=>{
    const url= `/signup`
    return instance.post(url,user)
}
export const getUsers =()=>{
    const url= `/users`
    return instance.get(url)
}
export const signin =(user:any) =>{
    const url=`/signin`
    return instance.post(url,user)
}