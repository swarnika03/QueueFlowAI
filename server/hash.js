// import bcrypt from "bcryptjs";

// const password = "admin123";

// bcrypt.hash(password, 10).then((hash) => {
//   console.log(hash);
// });
import bcrypt from "bcryptjs";

bcrypt.hash("staff123", 10).then((hash) => {
  console.log(hash);
});