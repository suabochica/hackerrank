Maximum Distance
================

The total distance of a user is the sum of their distance for all of their rides. Write a query to print the `name`, and `total distance` of the user ordered by the descending distance. If more than one user achieved the same total distance, then sort the result by ascending name. Exclude all users with a total distance of 0 from your result.

Input Format

The following tables contain contest data:

- **Users**: The id is id of the user, city_id is the residence city of the user, name is the name of the user and the email is the userś email.

|Column|Type|
|:-|:-:|
|id|Integer|
|city_id|Integer|
|name|String|
|email|String|

- **Cities**: The id is the id of the city, name is the name of the city.

|Column|Type|
|:-|:-:|
|id|Integer|
|name|String|

- **Rides**: The id is the id of the ride, user_id is the id of the user who made the ride, distance is the distance of the ride , and fare is the fare of the ride.

|Column|Type|
|:-|:-:|
|id|Integer|
|user_id|Integer|
|distance|Integer|
|fare|Integer|

Sample Output:

```txt
Rose 191
Lisa 174
Bonnie 100
Angela 89
Frank 85
Kimberly 67
Patrick 43
```
