const modal = document.querySelector(".modal")
const mascaramodal = document.querySelector(".mascara_modal")
function mostrarmodal(){
    modal.style.left = "50%"
    mascaramodal.style.visibility = "visible"
}

function escondermodal(){
    modal.style.left = "-30%"
    mascaramodal.style.visibility = "hidden"
}
