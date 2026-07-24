import bcrypt from "bcryptjs";

const password = "staff123";

const hash =
"$2b$10$1485GP55uf2bcThfZ44mueWYG22MGvAb4sBNi6Tvx0ShBbkgHOQ/W";

bcrypt.compare(password, hash).then((match) => {
    console.log("Match =", match);
});