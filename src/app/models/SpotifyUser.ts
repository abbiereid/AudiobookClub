export interface SpotifyUser {
    id: string;
    display_name: string | null;
    email: string | null;
    images: SpotifyUserProfileImage[] | null;
}

export interface SpotifyUserProfileImage {
    url: string;
}