import { Router } from "express";
import { login, register, show_login } from "../controller/user_controller";

const UserRouter = Router();

UserRouter.get('/user/login', show_login);
UserRouter.post('/user/register', register);
UserRouter.post('/user/login', login);

export{
    UserRouter
}





