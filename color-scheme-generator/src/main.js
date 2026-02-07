import './style.css'

const color = document.getElementById('color')
const option = document.getElementById('select')
const btn = document.getElementById('get-color')



btn.addEventListener('click', (event)=>{
    event.preventDefault();

    const chosenColor = color.value
    const chosenMode = option.value
   
    fetch(`https://www.thecolorapi.com/scheme?hex=0047AB&format=html&mode=analogic&count=5`)
    .then(res => res.json())
    .then(data => console.log(data))
    
})