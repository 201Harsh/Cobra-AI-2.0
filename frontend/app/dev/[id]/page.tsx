"use client";
import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import Chat from "@/app/Components/Dev/Chat";
import Code from "@/app/Components/Dev/Code";
import { Flip, Slide, toast } from "react-toastify";
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
      contentType: "text",
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
          (items: any, index: number) => {
            const aiResponse = items.ai;

            // Prepare array for the AI messages (PlainText + Code blocks)
            const aiMessages = [];

            // 1️⃣ Add PlainText (if available)
            if (aiResponse.PlainText && aiResponse.PlainText.trim() !== "") {
              aiMessages.push({
                id: Date.now() + index * 2 + 1,
                text: aiResponse.PlainText.trim(),
                sender: "Cobra AI",
                type: "ai",
                contentType: "text",
                timestamp: new Date(items.timestamp),
              });
            }

            // 2️⃣ Add JSX Code Blocks
            if (aiResponse.jsxCodeBlocks?.length > 0) {
              aiResponse.jsxCodeBlocks.forEach((code: string, i: number) => {
                aiMessages.push({
                  id: Date.now() + index * 100 + i,
                  text: code,
                  sender: "Cobra AI",
                  type: "ai",
                  contentType: "code-jsx",
                  timestamp: new Date(items.timestamp),
                });
              });
            }

            // 3️⃣ Add JavaScript Code Blocks
            if (aiResponse.jsCodeBlocks?.length > 0) {
              aiResponse.jsCodeBlocks.forEach((code: string, i: number) => {
                aiMessages.push({
                  id: Date.now() + index * 200 + i,
                  text: code,
                  sender: "Cobra AI",
                  type: "ai",
                  contentType: "code-js",
                  timestamp: new Date(items.timestamp),
                });
              });
            }

            // 4️⃣ Add Bash Code Blocks
            if (aiResponse.bashCodeBlocks?.length > 0) {
              aiResponse.bashCodeBlocks.forEach((code: string, i: number) => {
                aiMessages.push({
                  id: Date.now() + index * 300 + i,
                  text: code,
                  sender: "Cobra AI",
                  type: "ai",
                  contentType: "code-bash",
                  timestamp: new Date(items.timestamp),
                });
              });
            }

            // Return both user and AI message sequence
            return [
              {
                id: Date.now() + index * 2,
                text: items.user,
                sender: "user",
                type: "text",
                contentType: "text",
                timestamp: new Date(items.timestamp),
              },
              ...aiMessages,
            ];
          }
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
      contentType: "text",
    };

    setMessages((prev: any) => [...prev, userMessage]);
    setInputMessage("");

    setIsGenerating(true);

    try {
      const response = await AxiosInstance.post("/ai/chat/gen", {
        prompt: inputMessage,
      });

      if (response.status === 200) {
        const aiResponse = response.data.aiReply;

        // Create messages for PlainText and all code blocks
        const newMessages: any = [];

        // Add PlainText if available
        if (aiResponse.PlainText && aiResponse.PlainText.trim() !== "") {
          newMessages.push({
            id: Date.now() + 1,
            text: aiResponse.PlainText.trim(),
            sender: "Cobra AI",
            type: "ai",
            contentType: "text",
            timestamp: new Date(),
          });
        }

        // Add JSX Code Blocks
        if (aiResponse.jsxCodeBlocks?.length > 0) {
          aiResponse.jsxCodeBlocks.forEach((code: string, i: number) => {
            newMessages.push({
              id: Date.now() + 100 + i,
              text: code,
              sender: "Cobra AI",
              type: "ai",
              contentType: "code-jsx",
              timestamp: new Date(),
            });
          });
        }

        // Add JavaScript Code Blocks
        if (aiResponse.jsCodeBlocks?.length > 0) {
          aiResponse.jsCodeBlocks.forEach((code: string, i: number) => {
            newMessages.push({
              id: Date.now() + 200 + i,
              text: code,
              sender: "Cobra AI",
              type: "ai",
              contentType: "code-js",
              timestamp: new Date(),
            });
          });
        }

        // Add Bash Code Blocks
        if (aiResponse.bashCodeBlocks?.length > 0) {
          aiResponse.bashCodeBlocks.forEach((code: string, i: number) => {
            newMessages.push({
              id: Date.now() + 300 + i,
              text: code,
              sender: "Cobra AI",
              type: "ai",
              contentType: "code-bash",
              timestamp: new Date(),
            });
          });
        }

        setMessages((prev: any) => [...prev, ...newMessages]);
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

  const handleDeleteAllChats = async () => {
    try {
      const res = await AxiosInstance.delete(`/chat/del/all`);
      if (res.status === 200) {
        toast.success(res.data.message, {
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
        setMessages([
          {
            id: 1,
            text: "I'm Cobra AI, your coding mentor. I can help you learn programming concepts, debug code, and answer your questions!",
            sender: "Cobra AI",
            type: "ai",
            contentType: "text",
            timestamp: new Date(),
          },
        ]);
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
        transition: Flip,
      });
    }
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
        contentType: "text",
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
        contentType: "text",
        timestamp: new Date(),
      };
      setMessages((prev: any) => [...prev, errorMessage]);
    }
  };

  const handleTestCode = (code: string, language: string) => {
  // Only handle JSX and JavaScript, ignore bash
  if (language === "bash") {
    toast.info("Bash commands cannot be tested in the code editor", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
    return;
  }

  // Set the code directly - the Code component will handle file assignment
  setCode(code);
  setActiveSection("code");
  
  toast.success(`Code loaded into ${language === "jsx" ? "frontend.jsx" : "backend.js"}`, {
    position: "top-right",
    autoClose: 3000,
    theme: "dark",
  });
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
        <div className="w-full">
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
                handleDeleteAllChats={handleDeleteAllChats}
                handleTestCode={handleTestCode}
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
