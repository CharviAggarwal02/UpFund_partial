import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How can I assist you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    'What is crowdfunding?',
    'How do I invest?',
    'Starting a startup guide',
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your question! I'm here to help with information about startups, investments, and how our platform works. How can I assist you further?",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: action,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      let response = '';
      if (action.includes('crowdfunding')) {
        response =
          'Crowdfunding is a way to raise money from a large number of people, typically via the internet. On UpFund, startups can showcase their projects and receive investments from interested investors.';
      } else if (action.includes('invest')) {
        response =
          'To start investing, create an investor account, browse through available startups, review their profiles, and choose projects that align with your investment goals. You can start with as little as you want!';
      } else if (action.includes('startup')) {
        response =
          "To start a project, sign up as an entrepreneur, complete your startup profile with detailed information about your business, set your funding goal, and submit for review. Once approved, you'll be live on the platform!";
      }
      const botResponse = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center z-50 group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-slate-900 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden">
          <div className="bg-slate-800 p-6 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">UpFund AI Assistant</h3>
                <p className="text-xs text-slate-400">
                  Ask me anything about startups, investments, or how our platform works
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="px-3 py-2 bg-slate-700 text-slate-300 text-xs rounded-full hover:bg-slate-600 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-slate-700 text-white rounded-xl border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
