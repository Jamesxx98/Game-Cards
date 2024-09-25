let games = [
    {
        imageUrl: 'https://i.pinimg.com/564x/65/8e/3b/658e3bedde335a09a2e43e8b70832d2d.jpg',
        title: 'Tetris',
        description: 'Tetris begins with an empty screen, and requires the player to fit falling blocks together like a puzzle.',
    },                                                                                 
    {
        imageUrl: 'https://i.pinimg.com/564x/63/74/45/637445f7359ed5a83c52c247b1067c1d.jpg',
        title: 'Checkers',
        description: 'This is a group of strategy board games for two players which involve forward movements of uniform game pieces and mandatory captures by jumping over opponent pieces.',
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/3c/50/3a/3c503a732202c27ad7b5140a5acc6a6a.jpg',
        title: 'Chess',
        description: 'Chess is a two-player strategy board game where the aim is to move different types of playing pieces, each with a prescribed set of possible moves, around a chequered square board trying to capture the opponent\'s king piece.',
    }                                                                                                                   
];

function displaygames(item, index) {
    return `
    <div class="card" id="card-${index}">
        <img src="${item.imageUrl}" alt="${item.title}" class="card-img">
        <div class="card-content">
            <h1 class="card-title">${item.title}</h1>
            <p class="card-description">${item.description}</p>
            <button class="like-btn" id="like-btn-${index}">Like</button>
        </div>
    </div>
    `;
}

let cardContainer = document.getElementById("card-container");

let gamescards = games.map((item, index) => {
    return displaygames(item, index);
}).join('');  // join is used to concatenate the HTML strings into one

cardContainer.innerHTML = gamescards;

// Add like button functionality
games.forEach((game, index) => {
    let likeBtn = document.getElementById(`like-btn-${index}`);
    
    likeBtn.addEventListener("click", function() {
        // Toggle the liked class to change color
        likeBtn.classList.toggle("liked");

        // Optionally change the button text
        if (likeBtn.classList.contains("liked")) {
            likeBtn.textContent = "Liked";
        } else {
            likeBtn.textContent = "Like";
        }
    });
});
