
const elSelects = document.querySelectorAll('select')
const elContent = document.querySelector('.content')

elSelects.forEach(select => {
    select.addEventListener('change', onChangeSelect)
})

let addedOptions = {}

function onChangeSelect(e) {
    const index = e.target.selectedIndex
    const selectedOption = e.target.options[index]
    const selectedOptionText = selectedOption.textContent
    e.target.value = ''
    generateItem(selectedOptionText)
    
    e.target.removeChild(selectedOption)
    addedOptions[selectedOptionText] = selectedOption
}



User

function generateItem(text) {
    const elItem = document.createElement('div')
    elItem.classList.add('generated-item')
    
    const leftSide = document.createElement('div')
    leftSide.classList.add('gi-left-side')
    const leftSideText = document.createElement('span')
    leftSideText.textContent = text
    leftSide.appendChild(leftSideText)
    
    const rightSide = document.createElement('div')
    rightSide.classList.add('gi-right-side')
    const closeButton = document.createElement('button')
    closeButton.textContent = 'X'
    closeButton.addEventListener('click', function() {
        elItem.remove()
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            select.appendChild(addedOptions[text]);
            delete addedOptions[text]; 
        });
        
    })
    rightSide.appendChild(closeButton)
    
    elItem.appendChild(leftSide)
    elItem.appendChild(rightSide)
    
    elContent.appendChild(elItem)

    const header = document.querySelector('.header h1');
    header.textContent = text

    elContent.appendChild(elItem)
}


function closeGeneratedItem(elItem) {
    const closeButton = elItem.querySelector('button')
    closeButton.addEventListener('click', function() {
        elItem.remove();
    });
}

const generatedItems = document.querySelectorAll('.generated-item');
generatedItems.forEach(item => {
    closeGeneratedItem(item)
});