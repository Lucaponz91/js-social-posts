// Creo la struttura dati


// - id del post, numero progressivo da 1 a n
// - nome autore, 
// - foto autore, 
// - data in formato americano (mm-gg-yyyy), 
// - testo del post, 
// - immagine (non tutti i post devono avere una immagine), 
// - numero di likes.

// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

let postsList = document.querySelector('.posts-list')
for (let i = 0; i < posts.length; i++) {
    let post = document.createElement('div')
    post.classList.add('post')
    console.log(post)
    postsList.append(post)
    post.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${posts[i].author.image} alt="${posts[i].author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad
                ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src=${posts[i].media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" onclick="return false;" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    `
}

// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
let likedContents = []

for (let i = 0; i < posts.length; i++) {
    document.querySelector(`[data-postid="${posts[i].id}"]`).addEventListener("click", function(){   
        if (this.classList.contains("like-button--liked")) {
            // Tolgo il like
            this.classList.remove("like-button--liked");
            document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes;
            // likedContents.remove('${posts[i].id}') TODO:
        } else {
            // Aggiungo il like
            this.classList.add("like-button--liked");
            document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes + 1;
            likedContents.push(posts[i].id)
            console.log(likedContents)

        }
        console.log(likedContents)

    });
}
console.log(likedContents)

