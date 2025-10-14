import { Editor } from "@monaco-editor/react";
import React from "react";

const Code = ({
  code,
  setCode,
  output,
  consoleLogs,
  handleRunCode,
  activeSection,
}: any) => {
  return (
    <>
      <div
        className={`${
          activeSection === "code" ? "block" : "hidden"
        } lg:block h-[calc(100vh-180px)] lg:h-full`}
      >
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-red-500/20 h-full flex flex-col">
          {/* Editor Header */}
          <div className="p-4 border-b border-red-500/20">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">💻 Code Editor</h2>
              <button
                onClick={handleRunCode}
                className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white font-semibold px-4 lg:px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] text-sm lg:text-base cursor-pointer"
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
                minimap: { enabled: false },
                fontSize: 13,
                wordWrap: "on",
                automaticLayout: true,
                tabSize: 2,
                scrollBeyondLastLine: false,
                padding: { top: 16 },
                lineNumbersMinChars: 3,
                folding: false,
                renderLineHighlight: "all",
              }}
            />
          </div>

          {/* Output & Console */}
          <div className="p-3 lg:p-4 border-t border-red-500/20 space-y-3 lg:space-y-4">
            {/* Output */}
            <div className="bg-gray-950 rounded-xl border border-red-500/20 p-3 lg:p-4">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                Output
              </h3>
              <div className="text-green-400 font-mono text-xs lg:text-sm min-h-[50px] lg:min-h-[60px] whitespace-pre-wrap overflow-auto max-h-[80px]">
                {output || "// Run your code to see output here"}
              </div>
            </div>

            {/* Console Logs */}
            <div className="bg-gray-950 rounded-xl border border-red-500/20 p-3 lg:p-4">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">
                Console
              </h3>
              <div className="text-gray-300 font-mono text-xs lg:text-sm max-h-[80px] overflow-y-auto">
                {consoleLogs.length > 0 ? (
                  consoleLogs.map((log: string, index: number) => (
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
    </>
  );
};

export default Code;
