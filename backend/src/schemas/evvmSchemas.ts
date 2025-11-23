import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

export const HackerProfileSchema = z.object({
    walletAddress: z.string()
        .regex(/^0x[a-fA-F0-9]{40}$/, { message: 'Invalid EVM wallet address' })
        .openapi({ example: '0x1234567890abcdef1234567890abcdef12345678' }),
    username: z.string()
        .min(1)
        .regex(/^[a-zA-Z0-9._-]+$/, { message: 'Username may contain letters, numbers, dots, hyphens, and underscores' })
        .optional()
        .openapi({ example: 'yoav.kitten' }),
    skills: z.array(z.string()).openapi({ example: ['solidity', 'react', 'design'] })
}).openapi('HackerProfile');

export const EvvmNameServiceSyncRequestSchema = z.object({
    fromBlock: z.number().int().nonnegative().optional().openapi({ example: 0 }),
    toBlock: z.union([z.number().int().nonnegative(), z.literal('latest')])
        .optional()
        .openapi({ example: 'latest' })
}).openapi('EvvmNameServiceSyncRequest');

export const EvvmNameServiceSyncResponseSchema = z.object({
    synced: z.number().int().nonnegative().openapi({ example: 42 })
}).openapi('EvvmNameServiceSyncResponse');

export const EvvmOnboardingRequestSchema = z.object({
    walletAddress: HackerProfileSchema.shape.walletAddress,
    username: z.string()
        .min(1)
        .regex(/^[a-zA-Z0-9._-]+$/, { message: 'Username may contain letters, numbers, dots, hyphens, and underscores' })
        .openapi({ example: 'yoav.kitten' }),
    skills: z.array(z.string()).default([]).openapi({ example: ['solidity', 'react', 'design'] })
}).openapi('EvvmOnboardingRequest');

export const EvvmOnboardingResponseSchema = HackerProfileSchema.extend({
    status: z.literal('ok').openapi({ example: 'ok' })
}).openapi('EvvmOnboardingResponse');

export const HackersDebugResponseSchema = z.object({
    hackers: z.array(HackerProfileSchema)
}).openapi('HackersDebugResponse');

// Register schemas
registry.register('HackerProfile', HackerProfileSchema);
registry.register('EvvmNameServiceSyncRequest', EvvmNameServiceSyncRequestSchema);
registry.register('EvvmNameServiceSyncResponse', EvvmNameServiceSyncResponseSchema);
registry.register('EvvmOnboardingRequest', EvvmOnboardingRequestSchema);
registry.register('EvvmOnboardingResponse', EvvmOnboardingResponseSchema);
registry.register('HackersDebugResponse', HackersDebugResponseSchema);

// Export types
export type HackerProfile = z.infer<typeof HackerProfileSchema>;
export type EvvmNameServiceSyncRequest = z.infer<typeof EvvmNameServiceSyncRequestSchema>;
export type EvvmNameServiceSyncResponse = z.infer<typeof EvvmNameServiceSyncResponseSchema>;
export type EvvmOnboardingRequest = z.infer<typeof EvvmOnboardingRequestSchema>;
export type EvvmOnboardingResponse = z.infer<typeof EvvmOnboardingResponseSchema>;
export type HackersDebugResponse = z.infer<typeof HackersDebugResponseSchema>;

