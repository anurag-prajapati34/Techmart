export const addUserToDB=(userAuthId)=>{
    console.log("userAuthId:frm adduser to db:",userAuthId)
    fetch(`${import.meta.env.VITE_SERVER_URL}/user`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            "userAuthId":userAuthId
        })

    })
}

