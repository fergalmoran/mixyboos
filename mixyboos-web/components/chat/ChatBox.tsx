import * as React from 'react';
export function ChatBox() {
  const chatMessages = [
    {
      id: 1,
      avatar: 'http://placekitten.com/64/64',
      text: 'Hello Sailor',
      userId: 'ME',
    },
    {
      id: 2,
      avatar: 'http://placekitten.com/64/64',
      text: 'Response One',
      userId: '1',
    },
    {
      id: 3,
      avatar: 'http://placekitten.com/64/64',
      text: 'Response Two',
      userId: '2',
    },
    {
      id: 4,
      avatar: 'http://placekitten.com/64/64',
      text: 'ITSA ME!!',
      userId: 'ME',
    },
    {
      id: 5,
      avatar: 'http://placekitten.com/64/64',
      text: 'Penny is queen!',
      userId: '3',
    },
  ];
  return (
    <React.Fragment>
      <div className="flex-1 sm:px-6 justify-between flex flex-col h-full">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 bg-gray-100 px-2">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col leading-tight">
              <div className="text-2xl mt-1 flex items-center">
                <span className="text-gray-700 mr-3">Chat</span>
                <span className="text-green-500">
                  <svg width={10} height={10}>
                    <circle cx={5} cy={5} r={5} fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          {chatMessages.map((m) => (
            <div key={m.id} className="chat-message">
              <div
                className={`flex items-end ${
                  m.userId === 'ME' ? 'justify-end' : ''
                }`}
              >
                <div
                  className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 ${
                    m.userId === 'ME' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div>
                    <span
                      className={`px-4 py-2 rounded-lg inline-block rounded-bl-none font-medium
                    ${
                      m.userId === 'ME'
                        ? 'bg-mixyboos text-white'
                        : 'bg-indigo-400 text-white'
                    }`}
                    >
                      {m.text}
                    </span>
                  </div>
                </div>
                <img
                  src={`${m.avatar}?image=${m.userId}`}
                  alt="My profile"
                  className={`w-6 h-6 rounded-full ${
                    m.userId === 'ME' ? 'order-2' : 'order-1'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t-2 py-2 mb-2 sm:mb-0">
          <div className="relative flex focus:outline-none">
            <input
              type="text"
              placeholder="Say something?"
              className="w-full focus:outline-none focus:placeholder-gray-400
               text-gray-600 placeholder-gray-600 pl-4 bg-gray-50 rounded-full py-3"
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
