const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.js");
const db = require("./_db.js");

/*
const typeDefs = gql`
    
    type User{
        name: String
        age: Int
        position: String
    }

    type Query{
        users:[User]
    }
    type Mutation{
        createUser(name: String, age: Int, position: String):User
    }
`
*/

/*
let users = [
    {
        name: "Donny",
        age: 19,
        position: "Student"
    },
    {
        name: "Cristiano Ronaldo",
        age: 38,
        position: "Footballer"
    },
    {
        name: "John Fitzgerald Kennedy",
        age: 46,
        position: "Former President"
    }
]
*/

const resolvers = {
    Query: {
        //users: () => users,
        games: () => db.games,
        game: (_, args) => db.games.find((game) => game.id === args.id),
        reviews: () => db.reviews,
        review: (_, args) => db.reviews.find((review) => review.id === args.id),
        authors: () => db.authors,
        author: (_, args) => db.authors.find((author) => author.id === args.id)
    },
    Game: {
        reviews: (parent) => db.reviews.filter((review) => review.game_id === parent.id)
    },
    Author: {
        reviews: (parent) => db.reviews.filter((review) => review.author_id === parent.id)
    },
    Review: {
        game: (parent) => db.games.find((game) => parent.game_id === game.id),
        author: (parent) => db.authors.find((author) => parent.author_id === author.id)
    },
    /*
    Mutation: {
        createUser(parent, args) {
            const newUser = args
            users.push(newUser)
            return newUser
        }
    }
    */
    Mutation: {
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
            return game
        },
        updateGame(_, args) {
            db.games = db.games.map((game) => {
                if(game.id === args.id) {
                    return {...game, ...args.edits}
                }
                return game
            })

            return db.games.find((game) => game.id === args.id)
        },
        deleteGame(_, args) {
            db.games = db.games.filter((game) => game.id !== args.id)
            return db.games
        },
        addAuthor(_, args) {
            let author = {
                ...args.author,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.authors.push(author)
            return author
        },
        updateAuthor(_, args) {
            db.authors = db.authors.map((author) => {
                if(author.id === args.id) {
                    return {...author, ...args.edits}
                }
                return author
            })

            return db.authors.find((author) => author.id === args.id)
        },
        deleteAuthor(_, args) {
            db.authors = db.authors.filter((author) => author.id !== args.id)
            return db.authors
        }
   }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
    console.log(`server ready at URL ${url}`)
})