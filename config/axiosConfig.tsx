import jsCookie from "js-cookie";

export function axiosConfig(json:boolean = true,content_type:string = "multipart/form-data"){
    
    const token = jsCookie.get("token");
    if(!token) return null
    const config = {
        headers: {
        "Content-Type": json ? "application/json" : content_type,
        Authorization: `Bearer ${token}`,
        },
    };
    return config
}