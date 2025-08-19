-- Add share_token column to Form model
ALTER TABLE "Form" ADD COLUMN "shareToken" TEXT;
CREATE UNIQUE INDEX "Form_shareToken_key" ON "Form"("shareToken");
