const openM=document.getElementById('openRegisterModal')
const modal=document.getElementById('modal')
const closeM=document.getElementById('closeRegisterModal')

const showRegisterModal=()=>{
    modal.classList.toggle('is-active')
}

openM.addEventListener('click', showRegisterModal)
closeM.addEventListener('click',showRegisterModal)

