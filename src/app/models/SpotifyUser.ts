export interface SpotifyUser {
    id: string;
    displayName: string | null;
    email: string | null;
    images: SpotifyUserProfileImage[] | null;
}

export interface SpotifyUserProfileImage {
    url: string;
}