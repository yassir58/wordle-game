-- CreateTable
CREATE TABLE "GameIvite" (
    "id" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,

    CONSTRAINT "GameIvite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameIvite" ADD CONSTRAINT "GameIvite_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
