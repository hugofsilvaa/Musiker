// JS for buttons to change the text when clicked

const submitNewsletter = document.getElementById('submitNewsletter')
let count = 0;
submitNewsletter.addEventListener('click', () => {
    count = count + 1
    if(count % 2 === 0){
        submitNewsletter.value = "SUBSCRIBE";
    } else submitNewsletter.value = "WELCOME TO MUSIKER COMMUNITY!";
})

const submitFormButton = document.getElementById('submitFormButton')
submitFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitFormButton.value = "THANK YOU FOR YOUR MESSAGE!"
})

// Team members array

const hugo = [
    {
        name: 'Hugo Silva',
        bio: 'Hi, my name is Hugo Silva and I am  43 years old. I am from Portugal. I have a degree in Economics and always have been working in financial area, since last year I have decided to learn how to code at Wild Code School!',
        imgUrl: 'https://www.dropbox.com/s/w12zfzd51jf8atc/IMG-20190911-WA0009%20%281%29.jpg?raw=1',
    }
];

const camilla = [
    {
        name: 'Camilla Viviani',
        bio: 'Hi, I\'m Camilla! Originally from Switzerland, over the past 8 years I\'ve been living around Milan, Berlin, and London. I graduated in Tourism Management and I\'m currently working for a curated portfolio of independent boutique hotels around the world. I\'m passionate about everything digital and design related! I\'ve joined Wild Code School to learn how to build beautiful and aesthetic websites as I\'d love to make this my new professional career.',
        imgUrl: 'https://www.dropbox.com/s/eenb52kwvgbc7yq/Camilla.jpeg?raw=1',
    }
];

const kastus = [
    {
        name: 'Kastus Venhura',
        bio: 'Hy! I’m Kanstancin, a professional 26-years web designer with a profound experience having worked at Google, Apple and other cool companies. Now, having built my own team of excellent creators i’ve decided to provide people around the world with this great project which will change your life!',
        imgUrl: 'https://www.dropbox.com/s/gwct8skrt5u9vxs/kastus_photo.png?raw=1',
    }
];

const teamSelect = document.getElementById('teamSelect') 
const teamCard = document.getElementById('teamCard')     
const membersAll = [...hugo, ...camilla, ...kastus]  

teamSelect.addEventListener('change', (event) => {
    teamCard.innerText = ''
    if(event.target.value === 'Hugo'){
        hugo.map(element1 => {
            const img = document.createElement('img')
            const p = document.createElement('p')

            p.innerText = element1.bio
            img.src = element1.imgUrl

            teamCard.appendChild(img)                      
            teamCard.appendChild(p)                      
        })
    }
    else if(event.target.value === 'Camilla'){
        camilla.map(element2 => {
            const img = document.createElement('img')
            const p = document.createElement('p')

            p.innerText = element2.bio
            img.src = element2.imgUrl

            teamCard.appendChild(img)                      
            teamCard.appendChild(p)         
        })
    } 
    else if (event.target.value === 'Kastus'){
        kastus.map(element3 => {
            const img = document.createElement('img')
            const p = document.createElement('p')

            p.innerText = element3.bio
            img.src = element3.imgUrl

            teamCard.appendChild(img)                      
            teamCard.appendChild(p)                      
        })
    }
    // else 
    // membersAll.map(elements => {
    //         const img = document.createElement('img')
    //         const p = document.createElement('p')

    //         p.innerText = elements.name
    //         img.src = elements.imgUrl

    //         teamCard.appendChild(p)  
    //         teamCard.appendChild(img)                      
                                
    // })
})