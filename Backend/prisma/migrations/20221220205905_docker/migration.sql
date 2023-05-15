-- CreateTable
CREATE TABLE `Punct` (
    `PunctID` INTEGER NOT NULL AUTO_INCREMENT,
    `Denumire` VARCHAR(191) NOT NULL,
    `CoordonataX` DOUBLE NOT NULL,
    `CoordonataY` DOUBLE NOT NULL,
    `EsteVizibil` BOOLEAN NOT NULL,
    `CreatLa` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Punct_Denumire_key`(`Denumire`),
    PRIMARY KEY (`PunctID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
