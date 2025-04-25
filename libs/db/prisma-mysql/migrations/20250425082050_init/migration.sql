-- CreateTable
CREATE TABLE `CinemaBrand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `CinemaBrand_name_key`(`name`),
    UNIQUE INDEX `CinemaBrand_slug_key`(`slug`),
    INDEX `CinemaBrand_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Provinces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Provinces_name_key`(`name`),
    UNIQUE INDEX `Provinces_slug_key`(`slug`),
    INDEX `Provinces_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cinema` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `map_link` VARCHAR(191) NOT NULL,
    `brandId` INTEGER NOT NULL,
    `provinceId` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Cinema_name_key`(`name`),
    UNIQUE INDEX `Cinema_slug_key`(`slug`),
    INDEX `Cinema_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `email_verified` BOOLEAN NOT NULL DEFAULT false,
    `phone` VARCHAR(191) NULL,
    `phone_verified` BOOLEAN NOT NULL DEFAULT false,
    `full_name` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `balance` INTEGER NOT NULL DEFAULT 0,
    `password` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `code_id` VARCHAR(191) NULL,
    `code_expired` DATETIME(3) NULL,
    `role` ENUM('SUPER_ADMIN', 'BRAND_MANAGER', 'CINEMA_MANAGER', 'COUNTER_STAFF', 'USER', 'REVIEWER') NOT NULL DEFAULT 'USER',
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'INACTIVE',
    `brandId` INTEGER NULL,
    `cinemaId` INTEGER NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`),
    INDEX `User_brandId_cinemaId_idx`(`brandId`, `cinemaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cinema` ADD CONSTRAINT `Cinema_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `CinemaBrand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cinema` ADD CONSTRAINT `Cinema_provinceId_fkey` FOREIGN KEY (`provinceId`) REFERENCES `Provinces`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `CinemaBrand`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_cinemaId_fkey` FOREIGN KEY (`cinemaId`) REFERENCES `Cinema`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
