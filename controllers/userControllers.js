// ********** REGISTER A NEW USER
// POST : api/users/register
// UNPROTECTED

const registerUser = (req, res, next) => {
     res.json(" Register user")
}
// ********** LOGIN A REGISTERED USER
// POST : api/users/login
// UNPROTECTED

const loginUser = (req, res, next) => {
     res.json(" Login user")
}


// ********** USER PROFILE
// POST : api/users/:id
//  PROTECTED

const getUser = (req, res, next) => {
     res.json(" User profile")
}


// ********** CHANGE USER PROFILE PICTURE
// POST : api/users/change-avatar
//  PROTECTED

const changeAvatar = (req, res, next) => {
     res.json(" Change User avatar")
}


// ********** EDIT USER DETAILS
// POST : api/users/edit-user
//  PROTECTED

const editUser = (req, res, next) => {
     res.json(" Edit user details")
}


// ********** EDIT USER DETAILS
// POST : api/users/authors
//  UNPROTECTED

const getAuthors = (req, res, next) => {
     res.json(" Get all users/authors")
}


module.exports = { registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors}