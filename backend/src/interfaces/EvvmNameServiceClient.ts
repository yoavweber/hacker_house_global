export interface EvvmRegistration {
    walletAddress: string;
    username: string;
}

export interface EvvmNameServiceClient {
    getRegisteredUsernames(
        fromBlock?: number,
        toBlock?: number | 'latest'
    ): Promise<EvvmRegistration[]>;

    isUsernameAvailable(username: string): Promise<boolean>;
}

