import { User } from '../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registeredUsers = async (userName: string, password: string, role: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, password: hashedPassword, role });
    await user.save();
    return user;
};

export const loginUser = async (userName: string, password: string)=>{
    const user = await User.findOne({ userName });
    if(!user) throw new Error('User not found');
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch) throw new Error('Invalid password');
    const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
}