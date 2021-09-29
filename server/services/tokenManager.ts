import faker from 'faker';

interface IToken {
    token: string,
    userId: string,
}

let tokens: Array<IToken> = [];

export const addToken = (token: string, userId: string) => {
    tokens.push({ token, userId });
}

export const removeToken = (token: string) => {
    tokens =  tokens.filter(({ token: t }) => t !== token)
}

export const isTokenValid = (token: string) => (
    tokens.some(({token: t }) => t === token)
);

export const getTokenOwner = (token: string) => (
    tokens.find(({token: t }) => t === token)?.userId
)

export const generateToken = () => faker.random.alphaNumeric(24);
