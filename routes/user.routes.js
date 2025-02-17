import {Router} from 'express';
import { getUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();


//GET /users -> get all users;
//GET /users/:id -> get user by id;

// userRouter.get('/', (req, res) => {
//     res.send({title:'GET all users'})
// });

userRouter.get('/',getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/', (req, res) => {
    res.send({title:'Create new users'})
});
userRouter.put('/:id', (req, res) => {
    res.send({title:'update user'})
});
userRouter.delete('/:id', (req, res) => {
    res.send({title:'Delete a user'})
});

export default userRouter;