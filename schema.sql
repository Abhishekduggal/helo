CREATE TABLE users_helo
(
    userid SERIAL PRIMARY KEY,
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
    ('Scenic Routes', 'https://c1.staticflickr.com/4/3462/3186631988_fedd4bce36_b.jpg', 'Check them out', 1),
    ('Mountain Peal', 'https://i.ytimg.com/vi/668nUCeBHyY/maxresdefault.jpg', 'Gorgeous Lookout', 1),
    ('Vacation Spot', 'https://thirdeyeexperience.files.wordpress.com/2014/12/beautiful-nature-10.jpg', 'Love to be here', 1),
    ('Walk in the Woods', 'http://beautyharmonylife.com/wp-content/uploads/2013/09/nature-8.jpg', 'Check them out', 1),
    ('Picnic Spok', 'http://wall2born.com/data/out/371/image-45728023-beautiful-nature-wallpaper-images.jpg', 'Check them out', 1),
    ('Camp', 'http://www.backpackerbanter.com/blog/wp-content/uploads/2016/11/surf-camp-surfari-beginner-learn-to-surf-siargao-philippines-surfing-23.jpg', 'Best Camp', 1),
    ('Beautiful Morning', 'https://i.ytimg.com/vi/6lt2JfJdGSY/maxresdefault.jpg', 'Love it', 1),
    ('Butterfly', 'https://clk3c8p2y9-flywheel.netdna-ssl.com/wp-content/uploads/2016/04/thebutterflycounts-2.jpg', 'Love the quote', 1),
    ('Perfect Night', 'http://trulytraveled.com/wp-content/uploads/2016/06/10-Most-Beautiful-Nature-Photos-06.jpg', 'Cool...', 1),
    ('HandCrafted Homes', 'https://cdn.trendir.com/wp-content/uploads/old/house-design/luxury-yurts-hand-crafted-homes-by-bohoyurts-1.jpg', 'Relaxing Vacation', 1),
    ('Gorgeous Day', 'https://jooinn.com/images/beautiful-scenery-6.jpg', 'Reflection on water', 1),
    ('Scenic', 'http://wpnature.com/wp-content/uploads/2016/08/lakes-canadian-nature-blue-lake-sky-peak-nice-trees-beautiful-lovely-moraine-pretty-majestic-canada-mountain-view-rocks-frozen-desktop-background-1600x1080.jpg', 'I want to visit here', 1)


UPDATE posts_helo SET
    img = $2, 
    content = $3 
    WHERE title = $1;
SELECT *
FROM posts_helo;   