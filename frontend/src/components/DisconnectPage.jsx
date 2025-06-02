import React from "react";

const DisconnectPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-gray-200 rounded-xl shadow-sm p-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Test Disconnected!
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your test has been ended due to multiple tab switches,
        </p>
        <p className="text-sm text-gray-600 mt-2">
          For assistance, please contact the test administrator.
        </p>

        <div className="mt-6">
          <button
            onClick={() => window.location.href = "/"}
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisconnectPage;
