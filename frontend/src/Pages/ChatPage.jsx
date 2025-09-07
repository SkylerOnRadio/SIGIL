import React, { useState, useEffect, useRef } from "react";
import {
  IoSend,
  IoAttach,
  IoHappyOutline,
  IoMicOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const dummyChats = [
  {
    id: 1,
    user: "Rohit Sharma",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
    unread: 2,
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Hey! Is the calculus book still available?",
        time: "10:02 AM",
        reactions: [],
      },
      {
        id: 2,
        sender: "me",
        text: "Yes, it is. Want to pick it today?",
        time: "10:05 AM",
        seen: true,
        reactions: ["👍"],
      },
    ],
  },
  {
    id: 2,
    user: "Ananya Singh",
    avatar: "https://i.pravatar.cc/150?img=5",
    online: false,
    unread: 0,
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Hi, interested in your laptop?",
        time: "Yesterday",
        reactions: [],
      },
    ],
  },
];

const ChatPage = () => {
  const [chats, setChats] = useState(dummyChats);
  const [selectedChat, setSelectedChat] = useState(dummyChats[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const filteredChats = chats.filter((chat) =>
    chat.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "me",
      text: newMessage,
      time: "Now",
      seen: false,
      reactions: [],
    };

    const updatedChats = chats.map((chat) => {
      if (chat.id === selectedChat.id) {
        return { ...chat, messages: [...chat.messages, newMsg], unread: 0 };
      }
      return chat;
    });

    setChats(updatedChats);
    setSelectedChat((prev) => ({
      ...prev,
      messages: [...prev.messages, newMsg],
    }));
    setNewMessage("");

    // simulate reply
    setTyping(true);
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "them",
        text: "Got it! See you soon.",
        time: "Now",
        reactions: [],
      };
      const updatedChats2 = updatedChats.map((chat) => {
        if (chat.id === selectedChat.id) {
          return { ...chat, messages: [...chat.messages, reply] };
        }
        return chat;
      });
      setChats(updatedChats2);
      setSelectedChat((prev) => ({
        ...prev,
        messages: [...prev.messages, reply],
      }));
      setTyping(false);
    }, 2000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChat]);

  const addReaction = (msgId, emoji) => {
    const updatedMsgs = selectedChat.messages.map((msg) => {
      if (msg.id === msgId) {
        return { ...msg, reactions: [...(msg.reactions || []), emoji] };
      }
      return msg;
    });
    setSelectedChat({ ...selectedChat, messages: updatedMsgs });
    setChats((prev) =>
      prev.map((c) =>
        c.id === selectedChat.id ? { ...c, messages: updatedMsgs } : c
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Chats</h2>
          <input
            type="text"
            placeholder="Search contacts..."
            className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ul className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors rounded-xl ${
                selectedChat.id === chat.id
                  ? "bg-blue-100 dark:bg-gray-700"
                  : ""
              }`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                    chat.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold flex items-center justify-between">
                  {chat.user}
                  {chat.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                      {chat.unread}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {chat.messages[chat.messages.length - 1]?.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.user}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{selectedChat.user}</h2>
              <span className="text-sm text-blue-200 dark:text-gray-300">
                {selectedChat.online ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <AnimatePresence initial={false}>
            {selectedChat.messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative px-5 py-3 rounded-2xl max-w-xs break-words shadow-lg transition-transform transform hover:scale-[1.02] cursor-pointer ${
                    msg.sender === "me"
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                  <div className="absolute bottom-1 right-2 text-xs text-gray-200 dark:text-gray-300 opacity-70">
                    {msg.time}
                  </div>
                  {msg.sender === "me" && msg.seen && (
                    <div className="absolute bottom-1 left-2 text-xs text-green-400 opacity-70">
                      ✓✓
                    </div>
                  )}
                  {/* Emoji reactions */}
                  <div className="absolute -bottom-6 left-1 flex gap-1">
                    {msg.reactions?.map((r, idx) => (
                      <span key={idx} className="text-sm">
                        {r}
                      </span>
                    ))}
                  </div>
                  {/* Add reaction on click */}
                  <button
                    onClick={() => addReaction(msg.id, "❤️")}
                    className="absolute -top-6 right-0 text-xs bg-white dark:bg-gray-800 px-1 rounded-full hover:scale-110 transition-transform"
                  >
                    ❤️
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <div className="flex justify-start">
              <div className="px-5 py-3 rounded-2xl max-w-xs break-words shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 relative">
                <span className="dot-typing before:animate-bounce after:animate-bounce">
                  Typing...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3 bg-white dark:bg-gray-800 shadow-inner rounded-t-xl">
          <button className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <IoHappyOutline className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <IoAttach className="w-5 h-5" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow shadow-lg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform transform hover:scale-110"
          >
            <IoSend className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-110">
            <IoMicOutline className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
