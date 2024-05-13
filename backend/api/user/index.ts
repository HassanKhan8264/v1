import { UserCtrl } from './userController'
import express from 'express'

const router = express.Router();
const userController = new UserCtrl()


router.post('/createUser', userController.createUser)
router.delete('/deleteAll', userController.deleteAll);
router.get('/getAllUsers', userController.getAll);
router.get('/getUserByUsername', userController.getOneByUsername);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);



export default router