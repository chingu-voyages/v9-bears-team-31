import User from '../model/user';

// add new user to the database
export function addUser(req, res) {
  const user = new User(req.body);
  user.save((error, data) => {
    if (error) {
      res.json(error);
    }
    res.json(data);
  });
}

// get all user from the database
export function getUsers(req, res) {
  User.find({}, (error, users) => {
    if (error) {
      res.json(error);
    }
    res.json(users);
  });
}
