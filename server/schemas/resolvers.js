const { User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, user) => {
            return await User.findById(user.id);
        },
        users: async () => {
            return await User.find();
        },
    },

    Mutation: {
        addUser: async (parent, user) => {
            return await User.create(user);
        },
    },
};

module.exports = resolvers;