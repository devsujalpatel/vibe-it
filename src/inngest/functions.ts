import { gemini, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const codeAgent = createAgent({
      name: "codeAgent",
      system: "You are an expert next.js developer. You write readable, maintable code. you write simple Next.js & React snippets.",
      model: gemini({ model: "gemini-2.0-flash"}),
    });

    const { output } = await codeAgent.run(
      `Write the following snippents: ${event.data.email}`
    );
    console.log(output);

    return { success: "ok", output };
  }
);
