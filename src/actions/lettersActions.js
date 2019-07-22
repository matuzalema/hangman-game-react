export const GET_LETTER = "GET_LETTER";

export const getLetter = letter => {
    return {
        type: GET_LETTER,
        letter
    };
};
