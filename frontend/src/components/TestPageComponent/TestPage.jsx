import React, { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginWrapper,
  LoginForm,
  Label,
  Input,
  SubmitButton,
  ErrorText,
  TopBar,
  Title,
  InfoWrapper,
  Timer,
  TabCount,
  MainContent,
  QuestionPanel,
  CodeEditorPanel,
  QuestionTitle,
  QuestionDesc,
  AnswerTitle,
  WarningBox
} from "./TestPage";

const TestPage = () => {
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [code, setCode] = useState("// Write your solution here");
  const recentlySwitched = useRef(false);
  const autoSubmitted = useRef(false);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [testId, setTestId] = useState("");

  const questions = [
    {
      title: "Fibonacci Sequence",
      description:
        "Implement a function that returns the nth Fibonacci number.\n\nWrite both recursive and iterative versions."
    },
    {
      title: "Valid Parentheses",
      description:
        "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nA string is valid if brackets close in the correct order."
    },
    {
      title: "Two Sum Problem",
      description:
        "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
    }
  ];

  const currentQuestionIndex = 0;
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && !recentlySwitched.current) {
        recentlySwitched.current = true;

        setTabSwitchCount((prev) => {
          const newCount = prev + 1;
          sendTabSwitchToServer(loginForm.username, newCount, testId);
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
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [loginForm.username, testId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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
    if (count === 1 && !toast.isActive("tab-warning-1")) {
      toast.warn("Warning: Please stay on the test tab.", {
        toastId: "tab-warning-1"
      });
    } else if (count === 3 && !toast.isActive("tab-warning-3")) {
      toast.error("You’ve switched tabs 3 times! One more and you’ll be auto-submitted.", {
        toastId: "tab-warning-3"
      });
    } else if (count === 4 && !toast.isActive("tab-warning-4")) {
      toast.error("Final warning! Next tab switch = auto-submit.", {
        toastId: "tab-warning-4"
      });
    }
  };

  const sendTabSwitchToServer = async (username, count, testId) => {
    if (!username) return;
    try {
      await fetch("http://localhost:3000/api/tab-switch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, testId, switchCount: count })
      });
    } catch (error) {
      console.error("Error sending tab switch count:", error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username.trim() && loginForm.password.trim()) {
      setIsLoggedIn(true);
      setLoginError("");
      setTestId(`${loginForm.username}_${Date.now()}`);
    } else {
      setLoginError("Please enter both username and password.");
    }
  };

  const handleAutoSubmit = () => {
    if (autoSubmitted.current) return;
    autoSubmitted.current = true;

    toast.error("Test auto-submitted due to tab switching or timeout!");
    console.log("Auto-submitting test...");

    setTimeout(() => {
      navigate("/disconnected");
    }, 2000);
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  if (!isLoggedIn) {
    return (
      <Container>
        <LoginWrapper>
          <LoginForm onSubmit={handleLogin}>
            <h2>Login to Start Test</h2>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                placeholder="Enter your username"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                placeholder="Enter your password"
              />
            </div>
            {loginError && <ErrorText>{loginError}</ErrorText>}
            <SubmitButton type="submit">Login</SubmitButton>
          </LoginForm>
        </LoginWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ToastContainer position="top-center" autoClose={3000} />
      <TopBar>
        <Title>Online Test</Title>
        <InfoWrapper>
          <Timer>
            Time Left: <span>{formatTime(timeLeft)}</span>
          </Timer>
          <TabCount>Tab Switches: {tabSwitchCount}</TabCount>
        </InfoWrapper>
      </TopBar>

      <MainContent>
        <QuestionPanel>
          <QuestionTitle>Question: {currentQuestion.title}</QuestionTitle>
          <QuestionDesc>{currentQuestion.description}</QuestionDesc>
        </QuestionPanel>

        <CodeEditorPanel>
          <AnswerTitle>Your Answer:</AnswerTitle>
          <Editor
            height="400px"
            defaultLanguage="cpp"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />

          {tabSwitchCount > 0 && (
            <WarningBox count={tabSwitchCount}>
              {tabSwitchCount >= 4
                ? "⚠️ Final Warning! You may be disqualified."
                : tabSwitchCount >= 2
                ? "⚠️ Focus! Further tab switches may auto-submit."
                : "⚠️ Warning: Stay on this tab!"}
            </WarningBox>
          )}
        </CodeEditorPanel>
      </MainContent>
    </Container>
  );
};

export default TestPage;
