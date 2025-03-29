import { GoogleGenAI } from "@google/genai";
import { MOCK } from "../utils/constants";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API });

async function getProcessedData(userQuery) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        config: {
            maxOutputTokens: 500,
            temperature: 0.1,
          },
        contents: `Analyze this data: ${JSON.stringify(MOCK)} and answer this user query: "${userQuery}".  

            Return only the object in this format:
            {
                summary: ["4 key points summarizing the analysis"],
                chartdata: [
                    {
                        xaxis: "Key value from analyzed data",
                        yaxis: "null if values are random",
                        pointValue: value for point from analyzed data
                    }
                ],
                error: false
            }
            
            and if the user query is not making sense or not a query related to data then return only the object in this format:
            {
                summary: null,
                chartdata: null,
                error: true
            }
            No extra text, explanations, or formatting—just the object.
            `,
        responseMimeType: "application/json",
    });

    console.log(response.text);

    return JSON.parse(response.text.replaceAll("```", "").replace("json", ""));
};

export default getProcessedData;