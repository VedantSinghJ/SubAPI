import {Router} from 'express';

const userRouter = Router();


//GET /users -> get all users;
//GET /users/:id -> get user by id;

userRouter.get('/', (req, res) => {
    res.send({title:'GET all users'})
});
userRouter.get('/:id', (req, res) => {
    res.send({title:'GET user details'})
});
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