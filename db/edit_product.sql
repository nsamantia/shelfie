UPDATE inventory
SET title = $2, price = $3, img = $4
WHERE id = $1
returning *;