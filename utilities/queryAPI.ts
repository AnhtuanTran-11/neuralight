import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const query = async (prompt: string, model: string, chatID: string) => {
  const response = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.5,
      top_p: 0.9,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch((err) => err.message);
  return response;
};

export default query;
