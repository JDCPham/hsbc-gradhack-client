import Theme from './theme.style';

export const InputPaperTheme = {
    colors: {
        background: Theme.primary,
        primary: Theme.black,
        text: Theme.black,
        placeholder: Theme.black,

    },
    roundness: 0
}

export const ContainedButtonPaperTheme = {
    roundness: 0,
    colors: {
        primary: Theme.black,
    }
}

export const OutlinedButtonPaperTheme = {
    roundness: 0,
    colors: {
        backgroundColor: Theme.primary,
        primary: Theme.black,
        surface: Theme.black,
        accent: Theme.black

    }
}

export const TextButtonPaperTheme = {
    roundness: 0,
    colors: {
        backgroundColor: Theme.primary,
        primary: Theme.black
    }
}