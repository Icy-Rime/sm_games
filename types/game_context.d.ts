export interface GameContextBase {
    /** context data */
    data: Record<string, string | number | Array<string | number>>,
}

export interface GameContextSend extends GameContextBase {
    /** user's action. -1 means new game, otherwise means user's option */
    action: number,
}

export interface GameContextRecive extends GameContextBase {
    /** display title */
    title: string,
    /** display message */
    message: string,
    /** available options */
    options: Array<string>,
}
