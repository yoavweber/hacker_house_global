import { EvvmNameServiceClient, EvvmRegistration } from '../../interfaces/EvvmNameServiceClient.js';

export class MockEvvmNameServiceClient implements EvvmNameServiceClient {
    private registrations: EvvmRegistration[] = [
        {
            walletAddress: '0x1111111111111111111111111111111111111111',
            username: 'alice.hacker'
        },
        {
            walletAddress: '0x2222222222222222222222222222222222222222',
            username: 'bob.builder'
        }
    ];

    async getRegisteredUsernames(
        _fromBlock?: number,
        _toBlock?: number | 'latest'
    ): Promise<EvvmRegistration[]> {
        // In a real implementation, this would query EVVM NameService events.
        return this.registrations;
    }

    async isUsernameAvailable(username: string): Promise<boolean> {
        const lower = username.toLowerCase();
        return !this.registrations.some((r) => r.username.toLowerCase() === lower);
    }
}

