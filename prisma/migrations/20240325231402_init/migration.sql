-- CreateTable
CREATE TABLE "AttendanceConfirmation" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "cellPhone" TEXT NOT NULL,
    "confirmationAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT E'confirmado',

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceConfirmation.fullName_unique" ON "AttendanceConfirmation"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "AttendanceConfirmation.cellPhone_unique" ON "AttendanceConfirmation"("cellPhone");
