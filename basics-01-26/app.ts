let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if(typeof userInput==='string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code };
}

generateError('에러가 발생했습니다', 404);