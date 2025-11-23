export interface HackerProfile {
    walletAddress: string;
    username?: string;
    skills: string[];
}

export interface HackerRepository {
    upsertFromNameService(input: {
        walletAddress: string;
        username: string;
    }): void;

    upsertSkills(input: {
        walletAddress: string;
        skills: string[];
    }): void;

    getByWallet(walletAddress: string): HackerProfile | null;

    getAll(): HackerProfile[];
}

