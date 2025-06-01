import React, { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TestPage = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [code, setCode] = useState("// Write your solution here");
  const recentlySwitched = useRef(false);

  // Add login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // 👇 Define questions directly here
  const questions = [
    {
      title: "Fibonacci Sequence",
      description: "Implement a function that returns the nth Fibonacci number.\n\nWrite both recursive and iterative versions."
    },
    {
      title: "Valid Parentheses",
      description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nA string is valid if brackets close in the correct order."
    },
    {
      title: "Two Sum Problem",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
    }
  ];

  const currentQuestionIndex = 0; // Static (can be made dynamic later)
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !recentlySwitched.current) {
        recentlySwitched.current = true;

        setTabSwitchCount(prev => {
          const newCount = prev + 1;
          sendTabSwitchToServer(newCount);
          showWarningToast(newCount);

          if (newCount >= 5) {
            handleAutoSubmit();
          }

          return newCount;
        });

        setTimeout(() => {
          recentlySwitched.current = false;
        }, 1000);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showWarningToast = (count) => {
    if (count === 1) {
      toast.warn("⚠️ Warning: Please stay on the test tab.");
    } else if (count === 3) {
      toast.error("⚠️ You’ve switched tabs 3 times! One more and you’ll be auto-submitted.");
    } else if (count === 4) {
      toast.error("🚨 Final warning! Next tab switch = auto-submit.");
    }
  };

  const sendTabSwitchToServer = async (count) => {
    try {
      await fetch("http://localhost:5000/api/tab-switch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user123",
          testId: "test001",
          switchCount: count
        }),
      });
    } catch (error) {
      console.error("Error sending tab switch count:", error);
    }
  };

  // Simple login handler (no backend, just demo)
  const handleLogin = (e) => {
    e.preventDefault();
    // For demo, accept any non-empty username/password
    if (loginForm.username.trim() && loginForm.password.trim()) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Please enter both username and password.");
    }
  };

  const handleAutoSubmit = () => {
    toast.error("🚫 Test auto-submitted due to tab switching or timeout!");
    console.log("Auto-submitting test...");
    // TODO: Send code to backend
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Login to Start Test</h2>
          <input
            type="text"
            placeholder="Username"
            className="border rounded px-3 py-2"
            value={loginForm.username}
            onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded px-3 py-2"
            value={loginForm.password}
            onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
          />
          {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Top Bar */}
      <div className="bg-white px-6 py-4 flex justify-between items-center shadow-md border-b">
        <h1 className="text-xl font-semibold text-blue-600">Online Test</h1>
        <div className="flex items-center gap-6">
          <span className="text-gray-700">
            Time Left: <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </span>
          <span className="text-red-600 font-semibold">
            Tab Switches: {tabSwitchCount}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Question Panel */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow overflow-auto">
          <h2 className="text-lg font-bold mb-2">Question: {currentQuestion.title}</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {currentQuestion.description}
          </p>
        </div>

        {/* Code Editor Panel */}
        <div className="w-1/2 bg-white p-6 rounded-xl shadow relative">
          <h2 className="text-lg font-bold mb-2">Your Answer:</h2>
          <Editor
            height="400px"
            defaultLanguage="cpp"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
            className="border border-gray-200"
          />

          {/* Persistent warning box */}
          {tabSwitchCount > 0 && (
            <div className={`absolute bottom-4 right-4 text-sm font-semibold px-4 py-2 rounded-xl shadow
              ${tabSwitchCount >= 4 ? 'bg-red-600 text-white animate-pulse' :
                tabSwitchCount >= 2 ? 'bg-yellow-400 text-black animate-pulse' :
                'bg-orange-300 text-black animate-pulse'}
            `}>
              {tabSwitchCount >= 4
                ? "⚠️ Final Warning! You may be disqualified."
                : tabSwitchCount >= 2
                ? "⚠️ Focus! Further tab switches may auto-submit."
                : "⚠️ Warning: Stay on this tab!"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
