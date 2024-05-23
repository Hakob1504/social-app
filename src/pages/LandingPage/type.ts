type ButtonInfo = {
    id: number,
    text: string,
    className: string,
    path: string
}

export type InitialState = {
    title: string,
    buttonsInfo: ButtonInfo[]
}