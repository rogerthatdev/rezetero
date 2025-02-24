// Implement Prompt chaining Workflow with LangChain/LangGraph
// https://langchain-ai.github.io/langgraphjs/tutorials/workflows/#prompt-chaining

import { ChatAnthropic } from "@langchain/anthropic";

const llm = new ChatAnthropic({
    model: "claude-3-5-sonnet-latest",
  });

