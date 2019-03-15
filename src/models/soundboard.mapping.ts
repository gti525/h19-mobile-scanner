import { reduce } from "rxjs/operator/reduce";

export interface SoundboardMap{
    button: ButtonMap;
    soundPath: string;
}

interface ButtonMap{
    name: string;
    color: string;
}

//mocks

export const SoundboardMock = [
    {
        button: {
            name: 'error',
            color: '#DB1212'
        },
        soundPath: 'sounds/nasty-error-long.mp3'
    },
    {
        button: {
            name: 'valide',
            color: '#12DB33'
        },
        soundPath: 'sounds/quite-impressed.mp3'
    }
]