const filterContainer = document.querySelector(".portafolio-filtro"),
portfolioItems = document.querySelectorAll(".portafolio-item");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filtro-items")){
        //console.log("true");
        //removemos la clase .active es el que esta actual con el borde abajo
        filterContainer.querySelector(".active").classList.remove("active");
        //activar el nuevo active
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter")
        //console.log(filterValue);
        portfolioItems.forEach((item) =>{
            //console.log(item);
            if(item.classList.contains(filterValue) || filterValue === 'todos'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    };
});