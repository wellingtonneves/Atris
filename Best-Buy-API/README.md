# BestBuyAPI

create database

run this script:

dotnet-ef migrations add InitialCreate --verbose --startup-project C:\Projects\Best-Buy-API\src\Best-Buy-API

update-database -context ApplicationDbContext

Mock data:

INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001C','Stone and Beam Westview', 1400.35, 'double-sofa-01.png', 2)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001D','Rivet Bigelow Modern', 1250, 'double-sofa-02.png', 2)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001E','Baltsar Chair', 89, 'arm-chair-02.jpg', 3)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001F','Helmar Chair', 112, 'arm-chair-03.jpg', 3)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001G','Realme 8', 599.99, 'phone-03.png', 1)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001H','One Plus Nord', 798.55, 'phone-04.jpg', 1)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001I','Amazon Brand Modern Sofa', 175.88, 'double-sofa-03.png', 2)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001J','Fllufy Sheep Sofa', 163, 'single-sofa-01.jpg', 2)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001K','Faux Velvet Sofa', 185, 'single-sofa-02.jpg', 2)
INSERT INTO PRODUCTS (sku, name, price, imageUrl, categoryId) VALUES ('00001L','Sakarias Armchair', 99, 'arm-chair-01.jpg', 3)
