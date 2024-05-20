import {Router} from 'express'
import {createUser, getUsers, updateUser, deleteUser, getUser} from '../controllers/user.controllers'

const router = Router()

// router.get('/hello', (req, res) =>{
//     res.send('hola mundo')
// })

router.post('/users', createUser)

router.get('/users', getUsers)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

router.get('/users/:id', getUser )

export default router