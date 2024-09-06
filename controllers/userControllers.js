// ********** REGISTER A NEW USER
// POST : api/users/register
// UNPROTECTED

const registerUer = (req, res, next) => {
     res.json(" Register user")
}
// ********** LOGIN A REGISTERED USER
// POST : api/users/login
// UNPROTECTED

const loginUer = (req, res, next) => {
     res.json(" Login user")
}
// ********** USER PROFILE
// POST : api/users/:id
//  PROTECTED

const getUer = (req, res, next) => {
     res.json(" User profile")
}