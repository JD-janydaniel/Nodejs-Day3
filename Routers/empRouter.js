import express from 'express';
import { createEmployee, deleteEmployee, editEmployee, getEmployeeDetails, getEmployeeDetailsById } from '../Controllers/empController.js';

const router = express.Router();


router.post('/create',createEmployee)
router.get('/emp',getEmployeeDetails)
router.get('/emp/:id',getEmployeeDetailsById)
router.put('/update/:id',editEmployee)
router.delete('/delete/:id',deleteEmployee)

export default router;