
let images = []
const getData = async()=>{
 try{
    const res = await fetch('https://fakestoreapi.com/products') // Response

    const info = await res.json() // json
           
                images = info.map(producto => producto.image)
                t=info.map(producto=>producto.title)
    const ul = document.querySelector('ul')
                let con=0
                
                images.forEach(image => {   
                    ul.innerHTML += `<li><img src="${image}">"${t[con]}"</li>`
                    con+=1
                })
        
                console.log(images)
 }  
 catch(error) {
    console.log(error)
}
    

           

}

(() => {
    getData()
})()