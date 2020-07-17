window.addEventListener("load", function () {

    let contenido = document.getElementById("contenido")
    let div = document.createElement("div")
    div.style = "text-align:center;"
    let boton = document.createElement("INPUT")
    boton.setAttribute("type", "button")
    boton.value = "Cargar"
    boton.style = "background: #D9D9D9;border: 1px solid #666;border-radius: 5px;cursor: pointer;font-weight: bold;line-height: 20px;margin-top: 10px;padding: 5px 15px;"
    div.appendChild(boton)
    contenido.appendChild(div)

    boton.addEventListener("click", function () {
        let fecha = document.getElementById("fecha_c")
        let hora = document.getElementById("hora_c")

        if (!fecha || !hora) {
            alert("Error, debe completar todos los campos.")
        } else {
            localStorage.setItem("data", JSON.stringify({ fecha: fecha.value, hora: hora.value }))
            alert("Datos cargados con éxito.")
        }


    })
})
