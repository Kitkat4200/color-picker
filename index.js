let color = ""
const container = document.getElementById("container")
const hexCode = document.getElementById("hex-code")
const colorPicker = document.getElementById("color-picker")
const colorScheme = document.getElementById("color-scheme")
const button = document.getElementById("button")

button.addEventListener("click", function(){
  const hex = colorPicker.value.slice(1)
  fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorScheme.value}`)
    .then(res => res.json())
    .then(data =>{ 
        container.innerHTML = ""
        
        data.colors.forEach(color => { 
        const colorWrapper = document.createElement("div")
        colorWrapper.style.display = "flex"
        colorWrapper.style.flexDirection = "column"
        colorWrapper.style.alignContent = "center"
        
        const box = document.createElement("div")
        box.classList.add("color-box")
        box.style.width = "110px"
        box.style.height = "550px"
        box.style.background = color.hex.value
        
        const hexText = document.createElement("p")
        hexText.textContent = color.hex.value
        hexText.style.textAlign = "center"
        hexText.style.display = "inline-block"
        
        colorWrapper.appendChild(box)
        colorWrapper.appendChild(hexText)
        container.appendChild(colorWrapper)
       })
    })
    
})


