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
            return await User.create({
                permissionLevel: user.permissionLevel,
                createdAt: user.createdAt,
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: user.password,
            });
        },
    },
};

module.exports = resolvers;