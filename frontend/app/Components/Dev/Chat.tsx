import React from "react";

const Chat = ({
  messages,
  activeSection,
  isGenerating,
  messagesEndRef,
  handleSendMessage,
  inputMessage,
  setInputMessage,
}: any) => {
  return (
    <>
      <div
        className={`${
          activeSection === "chat" ? "block" : "hidden"
        } lg:block h-[calc(100vh-170px)] lg:h-[calc(100vh-120px)] scrollbar-hide`}
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
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 lg:p-4 ${
                      message.type === "system"
                        ? "bg-gray-700/50 text-gray-400"
                        : message.sender === "user"
                        ? "bg-gradient-to-r from-red-600 to-pink-500 text-white"
                        : "bg-gradient-to-r from-emerald-600 to-green-500 text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1 lg:mb-2">
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
            <form onSubmit={handleSendMessage} className="flex gap-2 lg:gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about programming..."
                className="flex-1 bg-gray-800 border border-red-500/30 rounded-xl px-3 lg:px-4 py-2 lg:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_10px_rgba(255,0,80,0.3)] text-sm lg:text-base"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isGenerating}
                className="bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] text-sm lg:text-base whitespace-nowrap"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
