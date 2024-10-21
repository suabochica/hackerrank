SELECT
    u.name, 
    r.total_distance
FROM Users u
LEFT JOIN (
    SELECT
        user_id,
        SUM(distance) AS total_distance
    FROM Rides
    GROUP BY user_id
) r ON u.id = r.user_id
ORDER BY
    total_distance DESC,
    u.name
LIMIT 100
