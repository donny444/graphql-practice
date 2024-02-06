let games = [
    { id: '1', title: 'Grand Theft Auto VI', platform: ['PS5', 'Xbox Series'] },
    { id: '2', title: 'Alan Wake 2', platform: ['PS5', 'PC'] },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox Series', 'PC'] },
    { id: '4', title: 'Mario Kart 8', platform: ['Switch'] },
    { id: '5', title: 'Palword', platform: ['PC'] },
]

let authors = [
    { id: '1', name: 'Mario', verified: true },
    { id: '2', name: 'yoshi', verified: false },
    { id: '3', name: 'Leon', verified: true },
]

let reviews = [
    { id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5' },
    { id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2' },
    { id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1' },
]

module.exports = { games, authors, reviews }