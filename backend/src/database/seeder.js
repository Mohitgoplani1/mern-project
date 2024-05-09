import './connection.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';

const up = async () => {
    const adminUser = await User.findOne({ name: 'Admin User' });
    if (!adminUser) {
        console.log('Admin user does not exist creating admin user');
        const hashedPassword = await bcrypt.hash("admin123", 12);
        await User.create([{
            name: "Admin User",
            email: "admin@company.com",
            password: hashedPassword,
            role: "admin",
        }]);
    } else {
        console.log('Admin user exists');        
    }
    process.exit(0);
};

const down = async () => {
    await User.deleteMany();
};

queueMicrotask(up);