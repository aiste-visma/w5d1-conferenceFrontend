export interface Speaker {
    id: number;
    name: string;
    bio: string;
    website: string;
}

export interface CreateSpeaker {
    name: string;
    bio: string;
    website: string;
}