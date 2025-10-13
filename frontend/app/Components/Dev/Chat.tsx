"use client";
import React, { useState, useRef, useEffect } from "react";

const Chat = ({
  messages,
  activeSection,
  isGenerating,
  messagesEndRef,
  handleSendMessage,
  inputMessage,
  setInputMessage,
}: any) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea based on content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Max height 200px
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
        // Reset textarea height after sending
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
          }
        }, 0);
      }
    }
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
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              💬 AI Coding Mentor
            </h2>
            <p className="text-gray-400 text-sm">
              Ask me anything about programming
            </p>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
            <div className="space-y-6">
              {messages.map((message: any) => (
                <div
                  key={message.id}
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
                        // AI message - full width
                        <div className="w-full  rounded-2xl p-4 lg:p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                            <span className="text-sm font-semibold text-emerald-400">
                              {message.sender}
                            </span>
                          </div>
                          <div className="text-gray-200 text-sm lg:text-base whitespace-pre-wrap leading-relaxed">
                            {message.text}
                          </div>
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
                    minHeight: "44px",
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={!inputMessage.trim() || isGenerating}
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 text-white font-semibold px-4 lg:px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] text-sm lg:text-base whitespace-nowrap disabled:cursor-not-allowed flex items-center justify-center min-h-[44px]"
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
