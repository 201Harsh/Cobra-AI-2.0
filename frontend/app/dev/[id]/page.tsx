"use client";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";

const CodeSection = () => {
  const [activeSection, setActiveSection] = useState<"chat" | "code">("chat");
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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Chat Functions
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      type: "user",
      timestamp: new Date(),
    };

    setMessages((prev: any) => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI thinking
    setIsGenerating(true);

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputMessage),
        sender: "Cobra AI",
        type: "ai",
        timestamp: new Date(),
      };
      setMessages((prev: any) => [...prev, aiResponse]);
      setIsGenerating(false);
    }, 1500);
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
      {/* Desktop Top Navigation */}
      <div className="hidden lg:block">
        <div className="p-4 border-b border-red-500/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🧪</div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
                    Venom Lab AI
                  </h1>
                  <p className="text-gray-300 text-sm">
                    Chat with AI Mentor & Code Editor
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setActiveSection("chat")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeSection === "chat"
                      ? "bg-gradient-to-r from-red-600 to-pink-500 text-white shadow-[0_0_15px_rgba(255,0,80,0.3)]"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  💬 AI Chat
                </button>
                <button
                  onClick={() => setActiveSection("code")}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeSection === "code"
                      ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  💻 Code Editor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-red-500/20 z-50">
        <div className="flex">
          <button
            onClick={() => setActiveSection("chat")}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all ${
              activeSection === "chat"
                ? "text-red-400 bg-red-500/10"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">💬</span>
            <span className="text-xs font-medium">AI Chat</span>
          </button>
          <button
            onClick={() => setActiveSection("code")}
            className={`flex-1 py-4 flex flex-col items-center gap-1 transition-all ${
              activeSection === "code"
                ? "text-emerald-400 bg-emerald-500/10"
                : "text-gray-400"
            }`}
          >
            <span className="text-xl">💻</span>
            <span className="text-xs font-medium">Code</span>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden p-4 border-b border-red-500/20">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🧪</div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider font-mono">
              Venom Lab AI
            </h1>
            <p className="text-gray-300 text-xs">
              {activeSection === "chat" ? "AI Coding Mentor" : "Code Editor"}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto lg:p-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:h-[calc(100vh-120px)]">
          {/* Chat Section */}
          <div
            className={`${
              activeSection === "chat" ? "block" : "hidden"
            } lg:block h-[calc(100vh-140px)] lg:h-auto`}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-red-500/20 h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-red-500/20">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  💬 AI Coding Mentor
                </h2>
                <p className="text-gray-400 text-sm">
                  Ask me anything about programming
                </p>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message: any) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-4 ${
                          message.type === "system"
                            ? "bg-gray-700/50 text-gray-400"
                            : message.sender === "user"
                            ? "bg-gradient-to-r from-red-600 to-pink-500 text-white"
                            : "bg-gradient-to-r from-emerald-600 to-green-500 text-white"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold">
                            {message.sender}
                          </span>
                        </div>
                        <p className="text-sm whitespace-pre-wrap">
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isGenerating && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700/50 rounded-2xl p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                          Cobra AI is thinking...
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-red-500/20">
                <form onSubmit={handleSendMessage} className="flex gap-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about programming concepts, debugging, or code help..."
                    className="flex-1 bg-gray-800 border border-red-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,80,0.3)]"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || isGenerating}
                    className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)]"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div
            className={`${
              activeSection === "code" ? "block" : "hidden"
            } lg:block h-[calc(100vh-140px)] lg:h-auto`}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-red-500/20 h-full flex flex-col">
              {/* Editor Header */}
              <div className="p-4 border-b border-red-500/20">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white">
                    💻 Code Editor
                  </h2>
                  <button
                    onClick={handleRunCode}
                    className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                  >
                    🚀 Run Code
                  </button>
                </div>
              </div>

              {/* Monaco Editor */}
              <div className="flex-1 min-h-[300px]">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    wordWrap: "on",
                    automaticLayout: true,
                    tabSize: 2,
                    scrollBeyondLastLine: false,
                    padding: { top: 16 },
                  }}
                />
              </div>

              {/* Output & Console */}
              <div className="p-4 border-t border-red-500/20 space-y-4">
                {/* Output */}
                <div className="bg-gray-950 rounded-xl border border-red-500/20 p-4">
                  <h3 className="text-white font-semibold mb-2">Output</h3>
                  <div className="text-green-400 font-mono text-sm min-h-[60px] whitespace-pre-wrap">
                    {output || "// Run your code to see output here"}
                  </div>
                </div>

                {/* Console Logs */}
                <div className="bg-gray-950 rounded-xl border border-red-500/20 p-4">
                  <h3 className="text-white font-semibold mb-2">Console</h3>
                  <div className="text-gray-300 font-mono text-sm max-h-[100px] overflow-y-auto">
                    {consoleLogs.length > 0 ? (
                      consoleLogs.map((log, index) => (
                        <div key={index} className="text-green-400">
                          {">"} {log}
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-500">
                        {">"} // Console output will appear here
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Padding */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default CodeSection;
