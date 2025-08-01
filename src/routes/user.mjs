import { Router } from "express";
import { users } from "../data/user-info.mjs";

const userRouter = Router();

// get all users
userRouter.get('/', (req, res) => {
    res.status(200).json({
        message: "User Data",
        data: users,
    })
})

// get user by id
userRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.status(200).json({
            message: "User Data",
            data: user,
        });
    } else {
        res.status(404).json({
            message: "User not found",
        });
    }
})


export default userRouter;