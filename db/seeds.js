module.exports = (db) => {

    db.User.create({
      name: '',
      lastName: '',
      email: '',
      password: process.env.ADMIN_USER_PWD,
      isAdmin: true
