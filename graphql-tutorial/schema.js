const { gql } = require("apollo-server");

const typeDefs = gql`
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, edits: EditGameInput!): Game
        deleteGame(id: ID!): [Game]
        addAuthor(author: AddAuthorInput!): Author
        updateAuthor(id: ID!, edits: EditAuthorInput): Author
        deleteAuthor(id: ID!): [Author]
    }
    input AddGameInput {
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
    input AddAuthorInput {
        name: String!
        verified: Boolean!
    }
    input EditAuthorInput {
        name: String
        verified: Boolean
    }
`

module.exports = typeDefs;