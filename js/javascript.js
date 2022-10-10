import { savePar, getPar, ongetPar, deletePar, getParticula, updatePar } from './firebase.js'

/*Esto es del modal*/
const openM=document.getElementById('openRegisterModal')
const modal=document.getElementById('modal')
const closeM=document.getElementById('closeRegisterModal')

const showRegisterModal=()=>{
    modal.classList.toggle('is-active')
}

openM.addEventListener('click', showRegisterModal)
closeM.addEventListener('click',showRegisterModal)
/*Aqui termina lo del modal*/


/*AQUI EMPIEZA TODO LO DE GUARDADO Y EDICION DE DATOS*/ 
const regisForm=document.getElementById('register-form')
const tablaParti=document.getElementById('particles-table')
let editStatus=false;
let id=''

window.addEventListener('DOMContentLoaded',async()=>{

    ongetPar((partdelMoment)=>{
        let html=''
        partdelMoment.forEach(doc=>{
            const datosT=doc.data()

            html+=`<tr>
                    <th>1</th>
                    <td>${datosT.parti}</td>
                    <td>${datosT.cargaele}</td>
                    <td>${datosT.masap}</td>
                    <td>${datosT.spinp}</td>
                    <td>${datosT.vidam}</td>
                    <td>

                        <button class="button buttone is-info is-rounded fas fa-pencil-alt" data-id="${doc.id}"></button>
                        <button class="button buttond is-danger is-rounded fa fa-trash" data-id="${doc.id}"></button>

                    </td>
                </tr>`
        })
        
        tablaParti.innerHTML=html
        const btnDelete=tablaParti.querySelectorAll('.buttond')

        btnDelete.forEach(btn=>{
            btn.addEventListener('click',({target: { dataset }})=>{
                deletePar(dataset.id)
            })
        })

        const btnEdit=tablaParti.querySelectorAll('.buttone')
        btnEdit.forEach(btn=>{
            btn.addEventListener('click', async e=>{
                const doc=await getParticula(e.target.dataset.id)
                const tdoc=doc.data()

                regisForm['particula'].value=tdoc.parti
                regisForm['cargae'].value=tdoc.cargaele
                regisForm['masa'].value=tdoc.masap
                regisForm['spin'].value=tdoc.spinp
                regisForm['vidamedia'].value=tdoc.vidam

                editStatus=true
                id=doc.id

                regisForm['buttong'].innerHTML='<span>Actualizar</span>'
            })
        })
    }) 
    
})

regisForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const parti=regisForm['particula']
    const cargaele=regisForm['cargae']
    const masap=regisForm['masa']
    const spinp=regisForm['spin']
    const vidam=regisForm['vidamedia']
    
    if(!editStatus){      
        savePar(parti.value, cargaele.value, masap.value, spinp.value, vidam.value)
    }else{
        updatePar(id,{parti: parti.value, cargaele:cargaele.value, masap:masap.value, spinp:spinp.value, vidam:vidam.value})
        editStatus=false
    }

    regisForm.reset()
})