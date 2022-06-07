const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        permisionLevel: {
            type: String,
            enum: {
                values: ['Employee', 'Manager', 'Owner', 'Tech Guy'],
                message: '{VALUE} is not supported'
            },
            trim: true,
            default: 'Employee'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        phoneNumber: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trrim: true
        }
    }
);

const User = model('User', userSchema);

module.exports = User;