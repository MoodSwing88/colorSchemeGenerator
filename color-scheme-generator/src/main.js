import './style.css'

const color = document.getElementById('color')
const option = document.getElementById('select')
const btn = document.getElementById('get-color')

const colorDivs = [
  document.getElementById('color-one'),
  document.getElementById('color-two'),
  document.getElementById('color-three'),
  document.getElementById('color-four'),
  document.getElementById('color-five')
]

const colorTexts = [
  document.getElementById('show-one'),
  document.getElementById('show-two'),
  document.getElementById('show-three'),
  document.getElementById('show-four'),
  document.getElementById('show-five')
]


btn.addEventListener('click', (event)=>{
    event.preventDefault();

    const chosenColor = color.value
    const chosenMode = option.value

    const hex = chosenColor.slice(1)
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&format=json&mode=${chosenMode}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colors = data.colors.map(c => c.hex.value)
        
        colorDivs.forEach((div, i)=>{
            div.style.backgroundColor = colors[i]
        })

        colorTexts.forEach((p, i)=> {
            p.textContent = colors[i]
        })

    })

})
