CREATE TABLE users_helo
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

INSERT INTO users_helo
    (username, password, profile_pic)
VALUES
    ('Abhi', 'abhi', 'https://cdn.pixabay.com/photo/2016/11/07/14/24/new-zealand-1805939_960_720.jpg');

CREATE TABLE posts_helo
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users_helo(id)
);

INSERT INTO posts_helo
    (title, img, content, author_id)
VALUES
    ('Scenic Routes', 'https://c1.staticflickr.com/4/3462/3186631988_fedd4bce36_b.jpg', 'Check them out', 1)