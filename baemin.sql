DROP TABLE IF EXISTS "public"."addresses";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS addresses_id_seq

-- Table Definition
CREATE TABLE "public"."addresses" (
    "id" int4 NOT NULL DEFAULT nextval('addresses_id_seq'::regclass),
    "adr_phone" varchar,
    "adr_name" varchar,
    "adr_address" varchar,
    "user_id" int4,
    CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id"),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."cart_items";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS cart_items_id_seq

-- Table Definition
CREATE TABLE "public"."cart_items" (
    "id" int4 NOT NULL DEFAULT nextval('cart_items_id_seq'::regclass),
    "cart_id" int4 NOT NULL,
    "food_id" int4 NOT NULL,
    "quantity" int4 DEFAULT 1,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "price" float8
);

DROP TABLE IF EXISTS "public"."carts";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS carts_id_seq

-- Table Definition
CREATE TABLE "public"."carts" (
    "id" int4 NOT NULL DEFAULT nextval('carts_id_seq'::regclass),
    "user_id" int4,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."categories";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS categories_id_seq

-- Table Definition
CREATE TABLE "public"."categories" (
    "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "cate_name" varchar,
    "cate_description" text,
    "cate_icon" varchar,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."food_likes";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS food_likes_id_seq

-- Table Definition
CREATE TABLE "public"."food_likes" (
    "id" int4 NOT NULL DEFAULT nextval('food_likes_id_seq'::regclass),
    "user_id" int4,
    "food_id" int4,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."food_ratings";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS food_ratings_id_seq

-- Table Definition
CREATE TABLE "public"."food_ratings" (
    "id" int4 NOT NULL DEFAULT nextval('food_ratings_id_seq'::regclass),
    "user_id" int4,
    "food_id" int4,
    "food_rate_point" int4,
    "food_rate_comment" text,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."foods";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS foods_id_seq

-- Table Definition
CREATE TABLE "public"."foods" (
    "id" int4 NOT NULL DEFAULT nextval('foods_id_seq'::regclass),
    "res_id" int4,
    "cate_id" int4,
    "food_name" varchar,
    "food_description" text,
    "food_images" varchar,
    "food_total_like" int4 DEFAULT 0,
    "food_total_rating" int4 DEFAULT 0,
    "food_avg_rating" int4 DEFAULT 0,
    "status" int4 DEFAULT 1,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."foods_details";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS foods_details_id_seq

-- Table Definition
CREATE TABLE "public"."foods_details" (
    "id" int4 NOT NULL DEFAULT nextval('foods_details_id_seq'::regclass),
    "food_id" int4,
    "food_price" float8,
    "food_stock" int4
);

DROP TABLE IF EXISTS "public"."order_details";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS order_details_id_seq

-- Table Definition
CREATE TABLE "public"."order_details" (
    "id" int4 NOT NULL DEFAULT nextval('order_details_id_seq'::regclass),
    "order_id" int4,
    "food_id" int4,
    "quantity" int4 DEFAULT 1,
    "price" float8 NOT NULL,
    "total_price" float8 NOT NULL,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."orders";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS orders_id_seq

-- Table Definition
CREATE TABLE "public"."orders" (
    "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    "user_id" int4,
    "total_amount" float8 NOT NULL,
    "total_price" float8 NOT NULL,
    "voucher_used" jsonb,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "address_shipping" jsonb
);

DROP TABLE IF EXISTS "public"."restaurant_ratings";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS restaurant_ratings_id_seq

-- Table Definition
CREATE TABLE "public"."restaurant_ratings" (
    "id" int4 NOT NULL DEFAULT nextval('restaurant_ratings_id_seq'::regclass),
    "user_id" int4,
    "res_id" int4,
    "res_rate_point" int4,
    "res_rate_comment" text,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS "public"."restaurants";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS restaurants_id_seq

-- Table Definition
CREATE TABLE "public"."restaurants" (
    "id" int4 NOT NULL DEFAULT nextval('restaurants_id_seq'::regclass),
    "user_id" int4,
    "res_name" varchar NOT NULL,
    "res_address" jsonb NOT NULL,
    "res_avg_rating" float4 DEFAULT 4.5,
    "res_time_start" varchar DEFAULT '10.00'::character varying,
    "res_time_end" varchar DEFAULT '22.00'::character varying,
    "res_total_rating" int8 DEFAULT 0,
    "status" int4 DEFAULT 1,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "res_description" text
);

DROP TABLE IF EXISTS "public"."users";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS users_id_seq

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "usr_username" varchar,
    "usr_password" varchar,
    "usr_first_name" varchar,
    "usr_last_name" varchar,
    "usr_phone" varchar,
    "usr_email" varchar,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."vouchers";
-- This script only contains the table creation statements and does not fully represent the table in database. It's still missing: indices, triggers. Do not use it as backup.

-- Squences
CREATE SEQUENCE IF NOT EXISTS vouchers_id_seq

-- Table Definition
CREATE TABLE "public"."vouchers" (
    "id" int4 NOT NULL DEFAULT nextval('vouchers_id_seq'::regclass),
    "code" varchar NOT NULL,
    "discount_percent" float8,
    "discount_amount" float8,
    "minimum_order" float8,
    "valid_from" timestamp NOT NULL,
    "valid_to" timestamp NOT NULL,
    "status" int4,
    "created_at" timestamp DEFAULT CURRENT_TIMESTAMP,
    "updated_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "public"."addresses" ("id", "adr_phone", "adr_name", "adr_address", "user_id") VALUES
(1, '097791160', 'le trung hau', '123 khu 4', 4);


INSERT INTO "public"."cart_items" ("id", "cart_id", "food_id", "quantity", "status", "created_at", "updated_at", "price") VALUES
(8, 1, 1, 20, 1, '2024-11-15 08:30:47.358', '2024-11-15 08:30:47.358', 2000);


INSERT INTO "public"."carts" ("id", "user_id", "status", "created_at", "updated_at") VALUES
(1, 4, 1, '2024-11-14 21:20:24.018', '2024-11-14 21:20:24.018');
INSERT INTO "public"."carts" ("id", "user_id", "status", "created_at", "updated_at") VALUES
(2, 5, NULL, '2024-11-15 08:28:41.351', '2024-11-15 08:28:41.351');


INSERT INTO "public"."categories" ("id", "cate_name", "cate_description", "cate_icon", "status", "created_at", "updated_at") VALUES
(1, 'Cơm Nhà', 'Món ăn gia đình, cơm bình dân với các món ăn quen thuộc.', 'https://picsum.photos/200/200?random=1', NULL, '2024-11-14 09:53:27.366673', '2024-11-14 09:53:27.366673');
INSERT INTO "public"."categories" ("id", "cate_name", "cate_description", "cate_icon", "status", "created_at", "updated_at") VALUES
(2, 'Cơm Văn Phòng', 'Cơm trưa văn phòng, nhanh gọn và tiện lợi.', 'https://picsum.photos/200/200?random=2', NULL, '2024-11-14 09:53:27.366673', '2024-11-14 09:53:27.366673');
INSERT INTO "public"."categories" ("id", "cate_name", "cate_description", "cate_icon", "status", "created_at", "updated_at") VALUES
(3, 'Cơm Dĩa', 'Các món cơm dĩa, cơm hộp mang đi.', 'https://picsum.photos/200/200?random=3', NULL, '2024-11-14 09:53:27.366673', '2024-11-14 09:53:27.366673');
INSERT INTO "public"."categories" ("id", "cate_name", "cate_description", "cate_icon", "status", "created_at", "updated_at") VALUES
(4, 'Món Ăn Truyền Thống', 'Những món cơm đặc trưng và truyền thống của các vùng miền.', 'https://picsum.photos/200/200?random=4', NULL, '2024-11-14 09:53:27.366673', '2024-11-14 09:53:27.366673'),
(5, 'Cơm Chay', 'Các món ăn chay, thích hợp cho người ăn chay hoặc muốn giảm thiểu thịt.', 'https://picsum.photos/200/200?random=5', NULL, '2024-11-14 09:53:27.366673', '2024-11-14 09:53:27.366673');





INSERT INTO "public"."foods" ("id", "res_id", "cate_id", "food_name", "food_description", "food_images", "food_total_like", "food_total_rating", "food_avg_rating", "status", "created_at", "updated_at") VALUES
(2, NULL, 1, 'Gà rán mún ớt', NULL, 'https://picsum.photos/id/237/200/300', 0, 0, 0, 1, '2024-11-14 13:54:54.525', '2024-11-14 13:54:54.525');
INSERT INTO "public"."foods" ("id", "res_id", "cate_id", "food_name", "food_description", "food_images", "food_total_like", "food_total_rating", "food_avg_rating", "status", "created_at", "updated_at") VALUES
(3, 1, 1, 'Gà rán mún ớt', NULL, 'https://picsum.photos/id/237/200/300', 0, 0, 0, 1, '2024-11-14 13:55:36.257', '2024-11-14 13:55:36.257');
INSERT INTO "public"."foods" ("id", "res_id", "cate_id", "food_name", "food_description", "food_images", "food_total_like", "food_total_rating", "food_avg_rating", "status", "created_at", "updated_at") VALUES
(1, NULL, 1, 'Bán nước mía cybersoft', NULL, 'https://picsum.photos/id/237/200/300', NULL, NULL, NULL, 0, '2024-11-14 10:11:55.879', '2024-11-14 10:11:55.879');

INSERT INTO "public"."foods_details" ("id", "food_id", "food_price", "food_stock") VALUES
(2, 2, 2000, 50);
INSERT INTO "public"."foods_details" ("id", "food_id", "food_price", "food_stock") VALUES
(3, 3, 2000, 50);
INSERT INTO "public"."foods_details" ("id", "food_id", "food_price", "food_stock") VALUES
(1, 1, 2000, -50);

INSERT INTO "public"."order_details" ("id", "order_id", "food_id", "quantity", "price", "total_price", "status", "created_at", "updated_at") VALUES
(1, 3, 1, 20, 2000, 40000, 1, '2024-11-14 23:09:28.978', '2024-11-14 23:09:28.978');
INSERT INTO "public"."order_details" ("id", "order_id", "food_id", "quantity", "price", "total_price", "status", "created_at", "updated_at") VALUES
(2, 4, 1, 20, 2000, 40000, 1, '2024-11-14 23:14:18.007', '2024-11-14 23:14:18.007');
INSERT INTO "public"."order_details" ("id", "order_id", "food_id", "quantity", "price", "total_price", "status", "created_at", "updated_at") VALUES
(3, 5, 1, 20, 2000, 40000, 1, '2024-11-14 23:23:05.193', '2024-11-14 23:23:05.193');
INSERT INTO "public"."order_details" ("id", "order_id", "food_id", "quantity", "price", "total_price", "status", "created_at", "updated_at") VALUES
(4, 6, 1, 20, 2000, 40000, 1, '2024-11-14 23:23:43.412', '2024-11-14 23:23:43.412'),
(5, 7, 1, 20, 2000, 40000, 1, '2024-11-14 23:29:23.925', '2024-11-14 23:29:23.925'),
(6, 8, 1, 20, 2000, 40000, 1, '2024-11-14 23:31:03.822', '2024-11-14 23:31:03.822'),
(7, 9, 1, 20, 2000, 40000, 1, '2024-11-14 23:31:39.588', '2024-11-14 23:31:39.588');

INSERT INTO "public"."orders" ("id", "user_id", "total_amount", "total_price", "voucher_used", "status", "created_at", "updated_at", "address_shipping") VALUES
(1, NULL, 0, 0, '"[]"', 1, '2024-11-14 23:03:59.258', '2024-11-14 23:03:59.258', NULL);
INSERT INTO "public"."orders" ("id", "user_id", "total_amount", "total_price", "voucher_used", "status", "created_at", "updated_at", "address_shipping") VALUES
(2, NULL, 0, 0, '"[]"', 1, '2024-11-14 23:05:11.819', '2024-11-14 23:05:11.819', NULL);
INSERT INTO "public"."orders" ("id", "user_id", "total_amount", "total_price", "voucher_used", "status", "created_at", "updated_at", "address_shipping") VALUES
(3, NULL, 20, 40000, '"[]"', 1, '2024-11-14 23:09:28.969', '2024-11-14 23:09:28.969', NULL);
INSERT INTO "public"."orders" ("id", "user_id", "total_amount", "total_price", "voucher_used", "status", "created_at", "updated_at", "address_shipping") VALUES
(4, 4, 20, 40000, '"[]"', 1, '2024-11-14 23:14:17.983', '2024-11-14 23:14:17.983', NULL),
(5, 4, 20, 40000, '"[]"', 1, '2024-11-14 23:23:05.178', '2024-11-14 23:23:05.178', NULL),
(6, 4, 20, 40000, '"[]"', 1, '2024-11-14 23:23:43.407', '2024-11-14 23:23:43.407', NULL),
(7, 4, 20, 40000, '[]', 1, '2024-11-14 23:29:23.913', '2024-11-14 23:29:23.913', NULL),
(8, 4, 20, 40000, '[]', 1, '2024-11-14 23:31:03.803', '2024-11-14 23:31:03.803', NULL),
(9, 4, 20, 40000, '[]', 1, '2024-11-14 23:31:39.578', '2024-11-14 23:31:39.578', '{"city": "haule"}');



INSERT INTO "public"."restaurants" ("id", "user_id", "res_name", "res_address", "res_avg_rating", "res_time_start", "res_time_end", "res_total_rating", "status", "created_at", "updated_at", "res_description") VALUES
(1, NULL, 'Nhà hàng gà rán cybersort', '{"city": "HCM", "street": "Dien bien phu tren khong", "address": 1}', 4.5, '10.00', '22.00', 0, 1, '2024-11-14 13:15:07.211', '2024-11-14 13:15:07.211', NULL);
INSERT INTO "public"."restaurants" ("id", "user_id", "res_name", "res_address", "res_avg_rating", "res_time_start", "res_time_end", "res_total_rating", "status", "created_at", "updated_at", "res_description") VALUES
(2, NULL, 'Nhà hàng gà rán cybersort', '{"city": "HCM", "street": "Dien bien phu tren khong", "address": 1}', 4.5, '10.00', '22.00', 0, 1, '2024-11-14 13:17:20.508', '2024-11-14 13:17:20.508', NULL);
INSERT INTO "public"."restaurants" ("id", "user_id", "res_name", "res_address", "res_avg_rating", "res_time_start", "res_time_end", "res_total_rating", "status", "created_at", "updated_at", "res_description") VALUES
(3, NULL, 'Nhà hàng gà rán cybersort', '{"city": "HCM", "street": "Dien bien phu tren khong", "address": 1}', 4.5, '10.00', '22.00', 0, 1, '2024-11-14 13:32:06.303', '2024-11-14 13:32:06.303', NULL);
INSERT INTO "public"."restaurants" ("id", "user_id", "res_name", "res_address", "res_avg_rating", "res_time_start", "res_time_end", "res_total_rating", "status", "created_at", "updated_at", "res_description") VALUES
(4, 4, 'Nhà hàng gà rán cybersort', '{"city": "HCM", "street": "Dien bien phu tren khong", "address": 1}', 4.5, '10.00', '22.00', 0, 1, '2024-11-14 13:43:15.493', '2024-11-14 13:43:15.493', NULL),
(5, 4, 'Nhà hàng gà rán cybersort', '{"city": "HCM", "street": "Dien bien phu tren khong", "address": 1}', 4.5, '10.00', '22.00', 0, 1, '2024-11-14 13:47:31.132', '2024-11-14 13:47:31.132', NULL);

INSERT INTO "public"."users" ("id", "usr_username", "usr_password", "usr_first_name", "usr_last_name", "usr_phone", "usr_email", "status", "created_at", "updated_at") VALUES
(1, 'lehau17', '123456', NULL, NULL, NULL, 'hau@gmail.com', NULL, '2024-11-14 08:49:35.844', '2024-11-14 08:49:35.844');
INSERT INTO "public"."users" ("id", "usr_username", "usr_password", "usr_first_name", "usr_last_name", "usr_phone", "usr_email", "status", "created_at", "updated_at") VALUES
(3, 'lehau19', '123456', 'Le', 'hau', NULL, 'hau123@gmail.com', NULL, '2024-11-14 08:57:38.097', '2024-11-14 08:57:38.097');
INSERT INTO "public"."users" ("id", "usr_username", "usr_password", "usr_first_name", "usr_last_name", "usr_phone", "usr_email", "status", "created_at", "updated_at") VALUES
(4, 'lehau190', 'b946ccc987465afcda7e45b1715219711a13518d1f1663b8c53b848cb0143441', 'Le', 'hau', NULL, 'hau1234@gmail.com', NULL, '2024-11-14 09:03:32.031', '2024-11-14 09:03:32.031');
INSERT INTO "public"."users" ("id", "usr_username", "usr_password", "usr_first_name", "usr_last_name", "usr_phone", "usr_email", "status", "created_at", "updated_at") VALUES
(5, 'lehau111111', 'b946ccc987465afcda7e45b1715219711a13518d1f1663b8c53b848cb0143441', 'lư', 'hau', NULL, 'hau@gmail.com', NULL, '2024-11-15 08:28:41.312', '2024-11-15 08:28:41.312');


