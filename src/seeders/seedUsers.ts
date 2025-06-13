import User from '@/models/users';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  await User.destroy({ where: {} });
  const hashed = await bcrypt.hash('admin123', 10);
  await User.create({ username: 'admin', password: hashed, role: 'Admin' });
};
