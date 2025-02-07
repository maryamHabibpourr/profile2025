import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));