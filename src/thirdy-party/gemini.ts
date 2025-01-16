import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyAINuCGV5RJDDpCUEFmrY7AUhhTplFzbR4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getGenerativeModel = () => {
    return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
};

export const processChat = {
    generateContent: async (prompt: string) => {
        return await model.generateContent(prompt);
    }
}