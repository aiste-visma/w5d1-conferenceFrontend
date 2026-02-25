export interface Speaker {
    id: number;
    name: string;
    bio: string;
    webSite: string;
}

export interface CreateSpeaker {
    name: string;
    bio: string;
    webSite: string;
}