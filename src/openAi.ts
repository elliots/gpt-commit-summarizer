import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const MAX_OPEN_AI_QUERY_LENGTH = 20000;
export const MODEL_NAME = process.env.OPEN_API_MODEL || "gpt-3.5-turbo";
export const TEMPERATURE = 0.5;
export const MAX_TOKENS = 2048;

export const openai = new OpenAIApi(configuration);
