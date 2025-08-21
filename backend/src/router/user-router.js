import express from 'express';
import { getUser, postUser, patchUser, deleteUser } from '../controller/user-controller.js';

// created a router instance
const userRouter = express.Router()

// define the routes
userRouter.route("/user").post(postUser)
userRouter.route("/user").patch(patchUser);
userRouter.route("/user").get(getUser);
userRouter.route("/user").delete(deleteUser)

// export the router
export default userRouter;