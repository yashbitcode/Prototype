import { GoogleGenAI } from "@google/genai";
import { QUERIES } from "../utils/constants";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API });

async function getRes(userQuery) {
	const response = await ai.models.generateContent({
		model: "gemini-2.0-flash",
		contents: `give me the array of 6 suggestions based upon this query array: ${QUERIES} and i need just the array each element containing the suggestion only nothing else and make the suggestions which starts with this "user query statement": ${userQuery} if the "user query statement" is not valid sentence or word return empty array`,
		responseMimeType: "application/json",
	});

	return JSON.parse(response.text.replaceAll("```", ""));
};

export default getRes;