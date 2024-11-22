"use client";
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function DocumentAnalysis() {
  const [file, setFile] = useState<File | null>(null);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'bot', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages are added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === 'application/pdf') {
      setFile(droppedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === 'application/pdf') {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: input }]);
      // Simulate API call with setTimeout
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          content: 'This is a sample response. Replace with actual AI response.' 
        }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      {!file ? (
        // File Upload Section
        <div className="flex-1 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl"
          >
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors
                ${isDragging 
                  ? 'border-[rgb(140,69,255)] bg-[rgb(140,69,255)]/10' 
                  : 'border-white/20 hover:border-white/40'}`}
            >
              <CloudArrowUpIcon className="h-12 w-12 mx-auto mb-4 text-white/70" />
              <h3 className="text-xl font-medium mb-2">Upload your document</h3>
              <p className="text-white/60 mb-6">Drag and drop your PDF file here, or click to select</p>
              
              <label className="inline-flex items-center px-4 py-2 bg-[rgb(140,69,255)] text-white rounded-lg cursor-pointer hover:bg-[rgb(140,69,255)]/90 transition-colors">
                <span>Select File</span>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </label>
            </div>
          </motion.div>
        </div>
      ) : (
        // Chat Interface
        <div className="flex-1 flex flex-col h-full">
          {/* Document Preview */}
          <div className="h-48 md:h-64 border-b border-white/10 p-4 flex-shrink-0">
            <div className="h-full bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/60">{file.name}</span>
                <button 
                  onClick={() => setFile(null)}
                  className="text-sm text-[rgb(140,69,255)] hover:text-[rgb(140,69,255)]/80"
                >
                  Change File
                </button>
              </div>
              {/* Add PDF preview here */}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-[rgb(140,69,255)] text-white'
                      : 'bg-white/10 text-white/90'
                  }`}
                >
                  {message.content}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} /> {/* Scroll anchor */}
          </div>

          {/* Chat Input */}
          <div className="border-t border-white/10 p-4 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your document..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[rgb(140,69,255)] focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="p-2 bg-[rgb(140,69,255)] text-white rounded-lg hover:bg-[rgb(140,69,255)]/90 transition-colors"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 