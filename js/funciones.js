export const validar = (obj) =>{
    return Object.values(obj).every(input => input!=='')
}