-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "product_price" INTEGER NOT NULL,
    "product_discount_price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "stock" TEXT NOT NULL,
    "tag" TEXT[],
    "brand" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);
