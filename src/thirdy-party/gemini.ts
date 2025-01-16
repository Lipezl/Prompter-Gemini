const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyAINuCGV5RJDDpCUEFmrY7AUhhTplFzbR4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export { model };

