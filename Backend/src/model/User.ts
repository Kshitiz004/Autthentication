import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    role: {type: 'string', enum: ['Role A', 'Role B'],  required: true},
});


export const User = model('user', userSchema);