function getnumber(){
    return new Promise((res)=>{
        setTimeout(()=>{res(50)},2000)
    })
}

getnumber().then((result)=>console.log(result))


function newnumber(){
    return new Promise((res)=>{
        setTimeout(()=>{res(200)},4000)
    })
}
newnumber().then((result)=>console.log(result))



async function alpha() {
    

    const firstnumber=await getnumber()
    const secondnumber=await newnumber()
   
    const final= await new Promise((res)=>{
        res(firstnumber+secondnumber)
    })
    return final
    
}

alpha().then(result=>{
    console.log(result)
})

