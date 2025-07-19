
import express from 'express'
import upload from "../config/multer.js"
import { ChangeJobApplicationsStatus, changeVisiblity, getCompanyData, getCompanyJobApplications, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/companyController.js"
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

//register a company
router.post('/register', upload.single('image'), registerCompany)

//company login
router.post('/login',loginCompany)

//get company data
router.get('/company', protectCompany ,getCompanyData)

//post a job
router.post('/post-job', protectCompany ,postJob)

//get application data of company
router.get('/applicants',  protectCompany ,getCompanyJobApplications)
 
//get company job list
router.get('/list-jobs', protectCompany ,getCompanyPostedJobs)

//change applications status
router.post('/change-status', protectCompany ,ChangeJobApplicationsStatus)

//change applications visiblity
router.post('/change-visiblity', protectCompany ,changeVisiblity)

export default router