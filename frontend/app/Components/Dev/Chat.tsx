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
                    <div className="max-w-[85%] rounded-2xl p-3 lg:p-4 bg-gradient-to-r from-red-600 to-pink-500 text-white">
                      <div className="flex items-center gap-2 mb-1 lg:mb-2">
                        <span className="text-sm font-semibold">
                          {message.sender}
                        </span>
                      </div>
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
                  <div className="w-full bg-gray-800/50 rounded-2xl p-4 lg:p-6 border border-emerald-500/20">
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
                        Cobra AI is thinking...
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4">
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
