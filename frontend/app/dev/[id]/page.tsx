"use client";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Chat from "@/app/Components/Dev/Chat";
import Code from "@/app/Components/Dev/Code";
import { Slide, toast } from "react-toastify";
import AxiosInstance from "@/config/Axios";
import { useParams } from "next/navigation";
import HeaderandNavigation from "@/app/Components/Dev/HeaderandNavigation";
import DevDash from "@/app/Components/Dev/DevDash";

const CodeSection = () => {
  const [activeSection, setActiveSection] = useState<
    "chat" | "code" | "dashboard"
  >("chat");
  const [messages, setMessages] = useState<any>([
    {
      id: 1,
      text: "I'm Cobra AI, your coding mentor. I can help you learn programming concepts, debug code, and answer your questions!",
      sender: "Cobra AI",
      type: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [code, setCode] = useState(`// Welcome to Venom Lab AI Assistant
// Chat with AI to learn programming
// Write code and get help with debugging

function greeting() {
  return "Hello, Venom Lab!";
}

console.log(greeting());`);
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const GetAllChats = async () => {
    try {
      const res = await AxiosInstance.get("/chat/get/all");

      if (res.status === 200 && res.data.Chats) {
        const FormattedChats = res.data.Chats.Chats.flatMap(
          (items: any, index: number) => [
            {
              id: Date.now() + index * 2,
              text: items.user,
              sender: "user",
              type: "text",
              timestamp: new Date(items.timestamp),
            },
            {
              id: Date.now() + index * 2 + 1,
              text: items.ai,
              sender: "Cobra AI",
              type: "ai",
              timestamp: new Date(items.timestamp),
            },
          ]
        );
        setMessages(FormattedChats);
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  useEffect(() => {
    GetAllChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const Param = useParams();
  const id = Param.id;

  // AI Chat Functions
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      type: "user",
    };

    setMessages((prev: any) => [...prev, userMessage]);
    setInputMessage("");

    setIsGenerating(true);
    // Simulate AI thinking

    try {
      const response = await AxiosInstance.post("/ai/chat/gen", {
        prompt: inputMessage,
      });

      if (response.status === 200) {
        const aiResponse = {
          id: messages.length + 2,
          text: response.data.aiReply,
          sender: "Cobra AI",
          type: "ai",
          timestamp: new Date(),
        };
        setMessages((prev: any) => [...prev, aiResponse]);
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();

    // Code-related questions
    if (lowerMessage.includes("error") || lowerMessage.includes("bug")) {
      return "I can help you debug that! Share your code in the code editor and I'll help you find the issue. You can also describe the error you're seeing.";
    }

    if (lowerMessage.includes("react") || lowerMessage.includes("component")) {
      return `**React Components:**\n\nReact components are reusable UI pieces. Here's a simple example:\n\n\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}\n\n// Usage: <Welcome name="Venom Lab" />
\`\`\`\n\nTry implementing this in the code editor!`;
    }

    if (lowerMessage.includes("function") || lowerMessage.includes("define")) {
      return `**JavaScript Functions:**\n\nFunctions are blocks of code designed to perform specific tasks. Here are different ways to define them:\n\n\`\`\`javascript
// Function declaration
function greet(name) {
  return "Hello, " + name;
}\n\n// Arrow function
const greet = (name) => "Hello, " + name;\n\n// Function expression
const greet = function(name) {
  return "Hello, " + name;
};
\`\`\``;
    }

    if (lowerMessage.includes("array") || lowerMessage.includes("loop")) {
      return `**Array Methods:**\n\nJavaScript arrays have powerful built-in methods:\n\n\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];\n\n// map - transform each element
const doubled = numbers.map(n => n * 2);\n\n// filter - select elements
const even = numbers.filter(n => n % 2 === 0);\n\n// reduce - accumulate values
const sum = numbers.reduce((total, n) => total + n, 0);\n\nconsole.log(doubled); // [2, 4, 6, 8, 10]
\`\`\``;
    }

    const generalResponses = [
      "That's a great question! Let me help you understand that better.",
      "I'd be happy to explain that concept. Here's what you need to know:",
      "Understanding this is key to programming. Let me break it down for you.",
      "That's an important concept! Here's how it works in practice:",
      "Let me explain this with some examples to make it clearer.",
    ];

    return `${
      generalResponses[Math.floor(Math.random() * generalResponses.length)]
    }\n\nFeel free to ask more specific questions or try implementing concepts in the code editor!`;
  };

  // Code Execution Functions
  const handleRunCode = () => {
    setConsoleLogs([]);
    setOutput("Running code...");

    try {
      // Capture console.log outputs
      const originalConsoleLog = console.log;
      const logs: string[] = [];

      console.log = (...args) => {
        logs.push(
          args
            .map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg)
            )
            .join(" ")
        );
        originalConsoleLog(...args);
      };

      // Execute the code
      const result = eval(code);

      // Restore original console.log
      console.log = originalConsoleLog;

      setConsoleLogs(logs);
      setOutput(`Execution completed successfully.\nResult: ${result}`);

      // Add to chat
      const runMessage = {
        id: messages.length + 1,
        text: `Code executed successfully! Check the output panel.`,
        sender: "system",
        type: "system",
        timestamp: new Date(),
      };
      setMessages((prev: any) => [...prev, runMessage]);
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
      setConsoleLogs([`Error: ${error.message}`]);

      const errorMessage = {
        id: messages.length + 1,
        text: `Code execution failed: ${error.message}`,
        sender: "system",
        type: "system",
        timestamp: new Date(),
      };
      setMessages((prev: any) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 bg-gradient-to-br from-gray-950 via-red-400/20 to-rose-500/30">
      {/* Header/Bottom and Navigation */}
      <HeaderandNavigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <div className="pt-20 lg:pt-24 pb-20 lg:pb-4 px-2 lg:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Chat and Code Sections - Only show when dashboard is not active */}
          {activeSection !== "dashboard" ? (
            <div className="lg:grid lg:grid-cols-2 lg:gap-6 max-h-screen">
              {/* Chat Section */}
              <Chat
                messages={messages}
                activeSection={activeSection}
                isGenerating={isGenerating}
                messagesEndRef={messagesEndRef}
                handleSendMessage={handleSendMessage}
                inputMessage={inputMessage}
                setInputMessage={setInputMessage}
              />

              {/* Code Section */}
              <Code
                code={code}
                setCode={setCode}
                output={output}
                consoleLogs={consoleLogs}
                handleRunCode={handleRunCode}
                activeSection={activeSection}
              />
            </div>
          ) : (
            /* Dashboard Section - Full width when active */
            <DevDash activeSection={activeSection} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSection;
