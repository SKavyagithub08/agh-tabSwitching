import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
`;

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 24rem;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #4b5563;
  margin-bottom: 0.25rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #2563eb;
  color: white;
  border: none;
  font-weight: 500;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: background 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ErrorText = styled.div`
  color: #dc2626;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const TopBar = styled.div`
  background: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2563eb;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Timer = styled.span`
  color: #374151;

  span {
    font-family: monospace;
    font-size: 1.125rem;
  }
`;

export const TabCount = styled.span`
  color: #dc2626;
  font-weight: 600;
`;

export const MainContent = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  flex: 1;
`;

export const QuestionPanel = styled.div`
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  overflow: auto;
`;

export const CodeEditorPanel = styled.div`
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  position: relative;
`;

export const QuestionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const QuestionDesc = styled.p`
  color: #374151;
  white-space: pre-line;
`;

export const AnswerTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`;

export const WarningBox = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.75rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  animation: ${pulse} 1s infinite;

  ${({ count }) => count >= 4 && css`
    background-color: #dc2626;
    color: white;
  `}

  ${({ count }) => count === 3 && css`
    background-color: #facc15;
    color: black;
  `}

  ${({ count }) => count <= 2 && css`
    background-color: #fdba74;
    color: black;
  `}
`;
