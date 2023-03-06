const drop = document.querySelector('#menu-icon');
const ull = document.querySelector('#ull')
const bar1 = document.querySelector('#bar1');
const bar2 = document.querySelector('#bar2');
const bar3 = document.querySelector('#bar3');
const barArray = [bar1, bar2, bar3]
drop.addEventListener('click', () => {
    if (ull.style.display === 'flex') {
        drop.style.transform = 'rotate(0deg)';
        bar1.style.transform = 'translateY(-8px)';
        bar2.style.backgroundColor = 'white';
        bar3.style.transform = 'translateY(8px)'
        ull.style.display = 'none';
    } else {
        bar1.style.transform = 'rotate(45deg)';
        bar2.style.backgroundColor = 'transparent';
        bar3.style.transform = 'rotate(-45deg)';
        drop.style.transform = 'rotate(90deg)';
        drop.style.transition = 'all 0.5s';
        ull.style.display = 'flex';
    }
})

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

    lang.addEventListener('mouseout', () => {
        const theId = document.querySelector(`#${ele} .names`)
        theId.style.display = 'block';
        const namesDesc = document.querySelector(`#${ele} .namesDesc`)
        namesDesc.style.display = 'none';
    })
})