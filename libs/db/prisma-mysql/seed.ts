import { PrismaClient as MysqlClient, Role, Status } from '../../generated/prisma-mysql';
import * as bcrypt from 'bcryptjs';

const prisma = new MysqlClient();

async function main() {
  const passwordHash = await bcrypt.hash('123456', 10);

  const provincesData = [
    { name: 'Hà Nội', slug: 'ha-noi' },
    { name: 'TP. Hồ Chí Minh', slug: 'tp-ho-chi-minh' },
    { name: 'Đà Nẵng', slug: 'da-nang' },
    { name: 'Cần Thơ', slug: 'can-tho' },
  ];

  const provinces = await Promise.all(
    provincesData.map((p) =>
      prisma.provinces.upsert({
        where: { slug: p.slug },
        update: {},
        create: p,
      }),
    ),
  );

  
  const users = await prisma.user.createMany({
    data: [
      {
        username: 'superadmin',
        email: 'superadmin@example.com',
        fullName: 'Super Admin',
        phone: '0900000001',
        phoneVerified: true,
        region: 'VN',
        avatar: '',
        balance: 100000,
        password: passwordHash,
        refreshToken: null,
        role: Role.SUPER_ADMIN,
        status: Status.ACTIVE,
        emailVerified: true,
      },

    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed tất cả bảng với 4 dòng dữ liệu completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
