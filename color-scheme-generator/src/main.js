import './style.css'

const color = document.getElementById('color')
const option = document.getElementById('select')
const btn = document.getElementById('get-color')



btn.addEventListener('click', (event)=>{
    event.preventDefault();

    const chosenColor = color.value
    const chosenMode = option.value
    console.log(chosenColor, chosenMode )
    
})