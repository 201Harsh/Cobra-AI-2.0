"use client";
import React, { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Chat = ({
  messages,
  activeSection,
  isGenerating,
  messagesEndRef,
  handleSendMessage,
  inputMessage,
  setInputMessage,
  handleDeleteAllChats,
}: any) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [inputMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputMessage.trim() && !isGenerating) {
        handleSendMessage(e);
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
          }
        }, 0);
      }
    }
  };

  // Copy code to clipboard
  const handleCopyCode = (code: string, messageId: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedStates((prev) => ({ ...prev, [messageId]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [messageId]: false }));
      }, 2000);
    });
  };

  // Function to render code with syntax highlighting
  const renderCodeBlock = (
    code: string,
    language: string,
    messageId: string
  ) => {
    const isCopied = copiedStates[messageId] || false;

    return (
      <div className="mt-3 rounded-lg overflow-hidden border border-gray-600 max-w-full">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-600">
          <span className="text-xs font-mono text-gray-300 uppercase">
            {language === "jsx"
              ? "React JSX"
              : language === "javascript"
              ? "JavaScript"
              : language === "bash"
              ? "Bash"
              : language}
          </span>
          <button
            onClick={() => handleCopyCode(code, messageId)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {isCopied ? (
              <>
                <svg
                  className="w-3 h-3 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        {/* Code Content */}
        <div className="relative overflow-x-auto">
          <SyntaxHighlighter
            language={language === "jsx" ? "javascript" : language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "0.75rem",
              borderBottomLeftRadius: "0.5rem",
              borderBottomRightRadius: "0.5rem",
              background: "#030712",
              fontSize: "0.75rem",
              maxWidth: "100%",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowX: "auto",
            }}
            codeTagProps={{
              style: {
                fontFamily: "Fira Code, Monaco, Consolas, monospace",
              },
            }}
            wrapLongLines={true}
            showLineNumbers={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`${
          activeSection === "chat" ? "block" : "hidden"
        } lg:block h-[calc(100vh-170px)] lg:h-[calc(100vh-120px)]`}
      >
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-red-500/20 h-full flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-red-500/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  💬 AI Coding Mentor
                </h2>
                <p className="text-gray-400 text-sm">
                  Ask me anything about programming
                </p>
              </div>
              <button
                onClick={handleDeleteAllChats}
                className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/30 rounded-lg transition-all duration-200 hover:border-red-500/50 cursor-pointer"
                title="Delete All Chats"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-small">
            <div className="space-y-6">
              {messages.map((message: any, idx: number) => (
                <div
                  key={idx}
                  className={`${
                    message.sender === "user" ? "flex justify-end" : "w-full"
                  }`}
                >
                  {message.sender === "user" ? (
                    // User message - right aligned
                    <div className="max-w-[85%] rounded-2xl p-3 lg:p-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                      <div className="flex items-center justify-center gap-2 mb-1 lg:mb-2"></div>
                      <p className="text-sm whitespace-pre-wrap">
                        {message.text}
                      </p>
                    </div>
                  ) : (
                    // AI message - full width
                    <div className="w-full">
                      {message.type === "system" ? (
                        // System message
                        <div className="bg-gray-700/50 text-gray-400 rounded-2xl p-3 lg:p-4 text-center max-w-[85%] mx-auto">
                          <p className="text-sm whitespace-pre-wrap">
                            {message.text}
                          </p>
                        </div>
                      ) : (
                        // AI message with code blocks
                        <div className="w-full rounded-2xl p-4 lg:p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                            <span className="text-sm font-semibold text-emerald-400">
                              {message.sender}
                            </span>
                          </div>

                          {/* Render text content */}
                          {message.contentType === "text" && (
                            <div className="text-gray-200 text-sm lg:text-base whitespace-pre-wrap leading-relaxed">
                              {message.text}
                            </div>
                          )}

                          {/* Render code blocks with syntax highlighting */}
                          {message.contentType === "code-jsx" &&
                            renderCodeBlock(message.text, "jsx", message.id)}

                          {message.contentType === "code-js" &&
                            renderCodeBlock(
                              message.text,
                              "javascript",
                              message.id
                            )}

                          {message.contentType === "code-bash" &&
                            renderCodeBlock(message.text, "bash", message.id)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {isGenerating && (
                <div className="w-full">
                  <div className="w-full rounded-2xl p-4 lg:p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        AI
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                        Cobra AI 2.0 is thinking...
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-red-500/20">
            <form
              onSubmit={handleSendMessage}
              className="flex gap-2 lg:gap-3 items-end"
            >
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={inputMessage}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isGenerating
                      ? "Waiting for response..."
                      : "Message CobraAI to Start Learning..."
                  }
                  className="w-full resize-none overflow-y-auto flex text-area flex-col gap-2 px-3 py-2 sm:px-4 sm:py-3 
                    bg-gray-800/50 border border-red-500/30 rounded-xl placeholder-gray-400 
                    text-white focus:outline-none focus:ring-2 focus:ring-red-500 
                    focus:border-transparent transition duration-200 backdrop-blur-sm text-sm sm:text-base
                    min-h-[44px] max-h-[120px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-hide"
                  disabled={isGenerating}
                  rows={1}
                  style={{
                    height: "auto",
                    minHeight: "50px",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={!inputMessage.trim() || isGenerating}
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 text-white font-semibold px-4 lg:px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] text-sm lg:text-base whitespace-nowrap cursor-pointer disabled:cursor-not-allowed flex items-center justify-center min-h-[44px]"
              >
                {isGenerating ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
