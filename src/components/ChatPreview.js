import React from 'react';
import { useSelector } from 'react-redux';

const ChatPreview = () => {
  const config = useSelector((state) => state.widget);

  const handleDownloadConfig = () => {
    const configString = JSON.stringify(config, null, 2);
    const blob = new Blob([configString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.configName}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full">
      {/* Live Preview Header */}
      <div className="flex items-center gap-1.5 mb-6">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
        <span className="text-sm text-gray-700">Live Preview</span>
      </div>

      {/* Preview Area */}
      <div className="relative bg-[#f5f0eb] rounded-lg min-h-[600px] flex flex-col items-center pt-12">
        {/* Chat Widget */}
        <div
          className="w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ fontFamily: config.fontFamily }}
        >
          {/* Chat Header */}
          <div
            className="px-4 py-2.5 flex items-center justify-between"
            style={{ backgroundColor: config.headerColor }}
          >
            <div className="flex items-center gap-2">
              <img
                src={config.avatarImage}
                alt="Bot Avatar"
                className="w-5 h-5 rounded-full"
              />
              <span 
                className="text-sm font-medium"
                style={{ color: config.headerFontColor }}
              >
                {config.botName}
              </span>
            </div>
            <button className="p-0.5">
              <svg
                className="w-4 h-4"
                viewBox="0 0 20 20"
                fill="none"
                stroke={config.headerFontColor}
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div
            className="p-4 min-h-[300px]"
            style={{ backgroundColor: config.backgroundColor }}
          >
            <div className="flex items-start gap-2">
              <img
                src={config.avatarImage}
                alt="Bot Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div
                className="bg-white p-3 rounded-lg shadow-sm max-w-[220px]"
                style={{ color: config.chatFontColor }}
              >
                <p className="text-sm leading-relaxed">Hi! I'm {config.botName}, your friendly concierge monster, here to answer questions, show you around, and automatically perform tasks on the site for you. How can I help?</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div
            className="px-4 py-3 border-t border-gray-100"
            style={{ backgroundColor: config.backgroundColor }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Need help? Just type or say it"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
                style={{ color: config.chatFontColor }}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 10v2a7 7 0 01-7 7m0 0a7 7 0 01-7-7v-2m7 7v4m0-11V3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Launcher Preview - Positioned below chat */}
        <div className="absolute bottom-24 right-24">
          <img
            src={config.launcherImage}
            alt="Launcher"
            className="w-10 h-10 rounded-lg shadow-md"
          />
        </div>

        {/* Download Config Button - Fixed at bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={handleDownloadConfig}
            className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors mb-2"
          >
            Download Config
          </button>
          <span className="text-sm text-gray-500">{config.configName}.json</span>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;