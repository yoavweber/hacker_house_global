import { Router } from 'express';
import { AgentController } from '../controllers/AgentController.js';
import { AppDependencies } from '../container.js';

export function createApiRoutes(dependencies: AppDependencies) {
    const router = Router();
    const controller = new AgentController(dependencies);

    // We need to bind the methods to the controller instance
    router.get('/llm-search', controller.llmSearch.bind(controller));
    router.get('/search', controller.search.bind(controller));
    router.get('/safety', controller.checkSafety.bind(controller));
    router.get('/location-score', controller.checkLocationScore.bind(controller));

    return router;
}
