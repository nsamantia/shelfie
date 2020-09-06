CREATE TABLE inventory(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img TEXT
);

INSERT INTO inventory
(name, price, img)
VALUES
('Gameboy', 100, 'https://i.redd.it/a7cm878ps5t41.png');