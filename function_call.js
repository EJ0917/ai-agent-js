import { client, DEFAULT_MODEL } from "./lib/openai.js";
import { spinner } from "./utils/spinner.js";
import { toOpenAITool } from "./utils/func-tool.js";
import * as allTools from "./tools/index.js";

const toolList = Object.values(allTools);
const tools = toolList.map(toOpenAITool);
const AVAILABLE_TOOLS = Object.fromEntries(toolList.map((t) => [t.name, t.fn]));

const messages = [
  {
    role: "developer", 
    content: "你是⼀位貼⼼的助理，請⽤繁體中⽂回答。" ,
  },
];
while (true) {
  const userQuestion = await input({ message: "請輸入你的問題：" });
  messages.push({ role: "user", content: userQuestion });
  while (true) {
    const response = await client.chat.completions.create({
      model: DEFAULT_MODEL,
      messages,
      tools,
      tool_choice: "auto",
    });
    const message = response.choices[0].message;
    messages.push(message);
    if (!message.tool_calls?.length) {
      console.log(message.content);
      break;
    }
  for (const toolCall of message.tool_calls) {

    const args = JSON.parse(toolCall.function.arguments);
    const result = await AVAILABLE_TOOLS[toolCall.function.name](args);
    messages.push({
      role: "tool",
      tool_call_id: toolCall.id,
      content: JSON.stringify(result),
    });
  }
 }
}