let $ = function (element) {
    return document.querySelector(element)
}
//code
let wrapper = $('.card-wrapper'),
    data = pokemons;

data.forEach((e) => {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
  <img src="${e.img}" alt="${e.name}" class="img">
  <span></span>
  <h2>${e.name}</h2>
  <h3>${e.type[0]} , ${e.type[1]}</h3>
  <h4>${e.weight}</h4>
  <h4 id="age">${e.height}</h4>
  <i class="bi bi-suit-heart save"></i>`;
    wrapper.appendChild(card);
})





let likedArray = [],
    heart = document.querySelectorAll('.save'),
    likedBtn = $('.liked'),
    body = $('body'),
    hide = $('.bi-chevron-right'),
    blur = $('.blur'),
    wrapper2 = $('.cards2-wrapper'),
    right = $('.right');
heart.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (!e.getAttribute('class').includes('savedd')) {
            e.setAttribute('class', ' bi bi-suit-heart-fill save savedd')
            likedArray.push(data[i])
        } else {
            e.setAttribute('class', ' bi bi-suit-heart save')
            likedArray.splice(likedArray.indexOf(i), 1)
        }
        wrapper2.innerHTML = ''
        likedArray.forEach((e) => {
            right = $('.right');
            let card1 = document.createElement('div')
            card1.classList.add('card')
            card1.innerHTML = `
  <img src="${e.img}" alt="${e.name}" class="img">
  <span></span>
  <h2>${e.name}</h2>
  <h3>${e.type[0]} , ${e.type[1]}</h3>
  <h4>${e.weight}</h4>
  <h4 id="age">${e.height}</h4>
  <i class="bi bi-trash remove"></i>
  `;
            wrapper2.appendChild(card1);

        })
        let del = document.querySelectorAll('.remove')
        del.forEach((e) => {
            console.log(likedArray.indexOf(e));
            console.log(likedArray.length);

            e.addEventListener('click', () => {
                // likedArray.splice(likedArray.indexOf(e), 1)
                wrapper2.innerHTML = ""
                // e.innerHTML = ''
                // likedArray.forEach((e)=>{
                //     let card2 = document.createElement('div')
                //     card2.classList.add('card')
                //     card2.innerHTML = `<img src="${e.img}" alt="${e.name}" class="img">
                //     <span></span>
                //     <h2>${e.name}</h2>
                //     <h3>${e.type[0]} , ${e.type[1]}</h3>
                //     <h4>${e.weight}</h4>
                //     <h4 id="age">${e.height}</h4>
                //     <i class="bi bi-trash remove"></i>
                //     `;
                //     wrapper2.appendChild(card2)


                // })
            })

        })
        // console.log(likedArray);
    })
})
likedBtn.addEventListener('click', () => {
    right.style.right = '0';
    body.style.overflowY = 'hidden';
    blur.style.zIndex = '33',
        blur.style.background = '#0000004c';



})
hide.addEventListener('click', () => {
    right.style.right = '-100%';
    body.style.overflowY = 'auto';
    blur.style.zIndex = '-1',
        blur.style.background = '';

})



