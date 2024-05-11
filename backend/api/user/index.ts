import { UserCtrl } from './userController'
// const express = require('express')
import express from 'express'

const router = express.Router();
const userController = new UserCtrl()


router.post('/createUser', userController.createUser)
// router.post('/createUser', UserCtrl.createUser);
// router.delete('/deleteAll', UserCtrl.deleteAll);
// router.get('/getAll', UserCtrl.getAll);
// router.get('/user/:id', UserCtrl.getUser);
// router.put('/user/:id', UserCtrl.updateUser);
// router.delete('/user/:id', UserCtrl.deleteOne);



export default router
