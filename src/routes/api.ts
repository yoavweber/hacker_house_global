import { Router } from 'express';
import { AgentController } from '../controllers/AgentController.js';
import { AppDependencies } from '../container.js';

export function createApiRoutes(dependencies: AppDependencies) {
    const router = Router();
    const controller = new AgentController(dependencies);

    // We need to bind the methods to the controller instance
    router.get('/prompts', controller.getPrompts.bind(controller));
    router.post('/requirements', controller.parseRequirements.bind(controller));
    router.post('/search', controller.search.bind(controller));
    router.post('/booking', controller.createBooking.bind(controller));

    return router;
}
