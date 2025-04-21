import { PrismaClient as MysqlClient } from '../../generated/prisma-mysql';
import * as bcrypt from 'bcryptjs';

const prisma = new MysqlClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  await prisma.user.createMany({
    data: [
      {
        username: 'admin',
        email: 'admin@example.com',
        fullName: 'Admin User',
        phone: '0123456789',
        phoneVerified: true,
        region: 'VN',
        avatar: '',
        balance: 100000,
        password: passwordHash,
        refreshToken: undefined,
        role: 'ADMIN',
        status: 'ACTIVE',
        emailVerified: true,
      },
      {
        username: 'user1',
        email: 'user1@example.com',
        fullName: 'User One',
        phone: '0987654321',
        phoneVerified: false,
        region: 'VN',
        avatar: '',
        balance: 50000,
        password: passwordHash,
        refreshToken: undefined,
        role: 'USER',
        status: 'INACTIVE',
        emailVerified: false,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
