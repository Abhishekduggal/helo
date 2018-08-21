SELECT *
FROM posts_helo ph JOIN users_helo uh ON ph.author_id = uh.id
WHERE uh.id = $1