
let images = []
const getData = async()=>{
 try{
    const res = await fetch('https://fakestoreapi.com/products') // Response

    const info = await res.json() // json
           
                images = info.map(producto => producto.image)
                t=info.map(producto=>producto.title)
                price=info.map(producto=>producto.price)
                c=info.map(producto=>producto.category)
                d=info.map(producto=>producto.description)
                r=info.map(producto=>producto.rating)
                rr= r.map(rating=>rating.rate)  
                rc= r.map(rating=>rating.count)               
                const ul = document.querySelector('ul')
                let con=0
 
                images.forEach(image => {   
                    ul.innerHTML += `<li><div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4 d-flex align-items-center">
                        <img src="${image}" class="img-fluid rounded-start" style="width: 200px; height: 200px; alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${t[con]}</h5>
                          <p class="card-text text-left">${d[con]}</p>
                          <button type="button" class="btn btn-outline-info" >$${price[con]}</button>
                          <p class="card-text "><small class="text-body-secondary"> ${rr[con]} puntaje --- ${rc[con]} votos</small></p>
                          <span class="border border-secondary">${c[con]}</span>
                        
                        </div>
                      </div>
                    </div>
                  </div></li>`
                    
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