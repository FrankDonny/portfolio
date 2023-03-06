const idArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
idArray.forEach((ele) => {
    const lang = document.querySelector(`#${ele}`);
    lang.addEventListener('mouseover', () => {
        const theId = document.querySelector(`#${ele} .names`)
        theId.style.transform = 
        theId.style.display = 'none';
        const namesDesc = document.querySelector(`#${ele} .namesDesc`)
        namesDesc.style.display = 'grid';
    })

    lang.addEventListener('mouseout', ()=>{
        const theId = document.querySelector(`#${ele} .names`)
        theId.style.display = 'block';
        const namesDesc = document.querySelector(`#${ele} .namesDesc`)
        namesDesc.style.display = 'none';
    })
})
