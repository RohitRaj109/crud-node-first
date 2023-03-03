import { basicGet, createUser, deleteUser, getUser, updateUser } from "../controller/user.js";
import express from 'express';
const router = express.Router();

router.get('/',basicGet);

router.post('/register',createUser);
router.get('/users',getUser);
router.patch('/update/:id',updateUser);
router.delete('/delete/:id',deleteUser);

export default router;