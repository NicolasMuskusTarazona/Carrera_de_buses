const late = document.getElementById('crear-late')

const zona = document.getElementById('zona-caja')

const _estado = document.getElementById('estado')

const _reset = document.getElementById('reiniciar')

let primerBus = null
let segundoBus = null
let animacion1 = null
let animacion2 = null

late.addEventListener('click', () => {
    primerBus = document.createElement('div')
    primerBus.classList.add('box1')
    zona.appendChild(primerBus)
    const keyframes1 = [
        { transform: "translate(0,0)" },
        { transform: "translate(100px,0)" },
        { transform: "translate(100px,0)" },
        { transform: "translate(300px,0)" },
        { transform: "translate(400px,0)" },
        { transform: "translate(500px,0)" },
        { transform: "translate(500px,0)" },
        { transform: "translate(550px,0)" },
        { transform: "translate(620px,0)" },
        { transform: "translate(700px,0)" },
        { transform: "translate(800px,0)" },
        { transform: "translate(860px,0)" },
        { transform: "translate(1100px,0)" },
        { transform: "translate(1180px,0)" },
        { transform: "translate(1250px,0)" },
        { transform: "translate(1350px,0)" },
        { transform: "translate(1400px,0)" },
        { transform: "translate(1450px,0)" },
        { transform: "translate(1500px,0)" },
    ]
    const options1 = {
        duration: 4000,
        direction: "alternate",
        fill: "forwards",
    }
    animacion1 = primerBus.animate(keyframes1, options1)
    animacion1.onfinish = () => (_estado.textContent = "Bus Azul Gano 🔥🔥💙")
    _estado.textContent = "Reproduciendo"
})

late.addEventListener('click', () => {
    segundoBus = document.createElement('div')
    segundoBus.classList.add('box2')
    zona.appendChild(segundoBus)
    const keyframes2 = [
        { transform: "translate(0,0)" },
        { transform: "translate(100px,0)" },
        { transform: "translate(100px,0)" },
        { transform: "translate(300px,0)" },
        { transform: "translate(400px,0)" },
        { transform: "translate(420px,0)" },
        { transform: "translate(480px,0)" },
        { transform: "translate(540px,0)" },
        { transform: "translate(660px,0)" },
        { transform: "translate(760px,0)" },
        { transform: "translate(850px,0)" },
        { transform: "translate(860px,0)" },
        { transform: "translate(1000px,0)" },
        { transform: "translate(105 0px,0)" },
        { transform: "translate(1250px,0)" },
        { transform: "translate(1350px,0)" },
        { transform: "translate(1380px,0)" },
        { transform: "translate(1400px,0)" },
        { transform: "translate(1410px,0)" },
    ]
    const options2 = {
        duration: 4000,
        direction: "alternate",
        fill: "forwards",
    }
    animacion2 = segundoBus.animate(keyframes2, options2)
})

_reset.addEventListener('click', () => {
    if (animacion1 && animacion2) {
        animacion1.cancel()
        animacion2.cancel()
        animacion1.play()
        animacion2.play()
        _estado.textContent = "Reiniciado"
    }
})