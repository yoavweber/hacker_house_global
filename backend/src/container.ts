import { BookingProvider } from './interfaces/BookingProvider.js';
import { LLMProvider } from './interfaces/LLMProvider.js';
import { HackerRepository } from './interfaces/HackerRepository.js';
import { EvvmNameServiceClient } from './interfaces/EvvmNameServiceClient.js';
import { OpenAILLMService } from './services/llm/OpenAILLMService.js';
import { Client } from './booking/AirBnbClient.js';
import { InMemoryHackerRepository } from './services/hacker/InMemoryHackerRepository.js';
import { MockEvvmNameServiceClient } from './services/evvm/MockEvvmNameServiceClient.js';

import { SafetyService } from './services/safety/SafetyService.js';
import { LocationScoreService } from './services/location/LocationScoreService.js';
 
export interface AppDependencies {
    bookingService: BookingProvider;
    llmService: LLMProvider;
    safetyService: SafetyService;
    locationScoreService: LocationScoreService;
    hackerRepository: HackerRepository;
    evvmNameServiceClient: EvvmNameServiceClient;
}

export function createContainer(): AppDependencies {
    // Here we can add logic to switch implementations based on env vars

    const bookingService = new Client();
    // const bookingService = new BookingDotComService();

    const llmService = new OpenAILLMService();
    const safetyService = new SafetyService(llmService);
    const locationScoreService = new LocationScoreService();
    const hackerRepository: HackerRepository = new InMemoryHackerRepository();
    const evvmNameServiceClient: EvvmNameServiceClient = new MockEvvmNameServiceClient();

    return {
        bookingService,
        llmService,
        safetyService,
        locationScoreService,
        hackerRepository,
        evvmNameServiceClient
    };
}
