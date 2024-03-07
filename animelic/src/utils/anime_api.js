
// export function findAll() {
//     return fetch(`/api/animes`)
// }


// export function findAllBySeason(season, year) {
//     return fetch(`/api/animes/${season}/${year}`)
// }

// export function findAllArticle() {
//     return fetch(`/api/animes/seasonal`)
// }

// export function findByKeyword(keyword) {
//     return fetch(`/api/animes/${keyword}`)
// }

export function findAll() {
    return fetch('https://animelic.onrender.com/api/animes')
}


export function findAllBySeason(season, year) {
    return fetch(`https://animelic.onrender.com/api/animes/${season}/${year}`)
}

export function findAllArticle() {
    return fetch(`https://animelic.onrender.com/api/animes/seasonal`)
}

export function findByKeyword(keyword) {
    return fetch(`https://animelic.onrender.com/api/animes/${keyword}`)
}


