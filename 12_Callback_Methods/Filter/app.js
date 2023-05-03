const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

const nums = [2, 3, 4, 5, 6, 7];
const sum = nums.reduce((sum, num) => sum + num, 100);


const goodMovies2 = movies.filter(movie => {
    return movie.score >80;
})

const goodMovies = movies.filter(movie => movie.score > 80);

const badMovies = movies.filter(m => m.score < 70).map(m => m.title);   


// const badMovies = movies.filter(m => m.score < 70)

// const recentMovies = movies.filter(m => m.year > 2000)

// // const goodMovies = movies.filter(m => m.score > 80)
// // const goodTitles = goodMovies.map(m => m.title)

// movies.filter(m => m.score > 80).map(m => m.title);

function validUserNames(nameArray) {
    return nameArray.filter(n => n.length < 10);
}

function validUserNames2(nameArray) {
    return nameArray.filter(function (n) {
        return n.length < 10;
    })
}


function allEvens (array) {
    return array.every(num => num % 2 ===0);
}


// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]


// const validUserNames = (['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// const shortNames = validUserNames.filter(n => n.length < 10);