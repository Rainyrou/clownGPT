import openai from "./chatgpt";
const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai.chat.completions
    .create({
      messages: [{ role: "user", content: prompt }],
      model,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.choices[0].message.content)
    .catch(
      (err) => `ChatGPT was unable to find an answer for that!(Error: ${err})`
    );
  return res;
};

export default query;
