import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);

  // Handle visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount(prevCount => {
          const newCount = prevCount + 1;
          console.log("Tab switched!", newCount);
          sendTabSwitchToServer(newCount); // placeholder for backend
          return newCount;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const sendTabSwitchToServer = async (count) => {
    try {
      await fetch("http://localhost:5000/api/tab-switch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "user123",     // Replace with real user ID if you have auth
          testId: "test001",     // Optional: could be dynamic
          switchCount: count
        }),
      });
    } catch (error) {
      console.error("Error sending tab switch count:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Online Test</h1>
        <p className="mb-4 text-gray-700">Please stay on this tab during the test.</p>
        <div className="text-xl font-semibold text-red-600">
          Tab Switches: {tabSwitchCount}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
