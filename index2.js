window.addEventListener("load", function () {
    // var button = document.createElement("button")
    // button.innerHTML = "Finalizar hacking"
    // button.style = "top:0;right:0;position:absolute;z-index:9999"
    // document.body.appendChild(button)


    let contenido = document.getElementById("contenido")
    let div = document.createElement("div")
    div.style = "text-align:center;"
    let boton = document.createElement("INPUT")
    boton.setAttribute("type", "button")
    boton.value = "Validar"
    boton.style = "background: #D9D9D9;border: 1px solid #666;border-radius: 5px;cursor: pointer;font-weight: bold;line-height: 20px;margin-top: 10px;padding: 5px 15px;"
    div.appendChild(boton)
    contenido.appendChild(div)





    boton.addEventListener("click", function () {

        if (localStorage.getItem("data")) {
            data = JSON.parse(localStorage.getItem("data"))
            console.log(data)
            fetch("https://agenda.registraduria.gov.co/agenda/citaOficinas.php", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "es,es-ES;q=0.9,en;q=0.8",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://agenda.registraduria.gov.co/agenda/citaOficinas.php",
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": `id_dpto=27&id_mun=121&id_regis=QXX&fecha_c=${data.fecha}&hora_c=${data.hora}&aceptar=Aceptar`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
            })
            .then(response => {
                console.log(response)
                alert("Su cita ha sido cargada para Bucaramanga exitosamente.")
            }).catch(error => {
                console.log(error)
                alert("El día seleccionado no está habilitado para tomar cita.")
            })
            localStorage.removeItem("data")
        } else {
            alert("Error, Bucaramanga no fue seleccionada en la Base de Datos.")
        }
    })
})
