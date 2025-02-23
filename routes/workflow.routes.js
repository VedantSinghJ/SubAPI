import {Router} from 'express';
import { sendReminders } from '../controllers/workflow.controller.js';

const WorkflowRouter = Router();


WorkflowRouter.post('/subscription/reminder', sendReminders);


export default WorkflowRouter;