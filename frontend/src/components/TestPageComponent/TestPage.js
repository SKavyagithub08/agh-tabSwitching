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

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
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

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
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

  @media (max-width: 768px) {
    font-size: 1rem; /* Increase tap target size */
  }
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

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.5rem;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%; /* Ensure it takes full width in column layout */
  }
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

  @media (max-width: 1024px) { /* Changed breakpoint for better layout earlier */
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const QuestionPanel = styled.div`
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 1rem;
    min-height: 200px; /* Ensure some minimum height when stacked */
  }
`;

export const CodeEditorPanel = styled.div`
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  position: relative; /* Keep for WarningBox positioning */
  display: flex; /* Added for editor height */
  flex-direction: column; /* Added for editor height */


  @media (max-width: 1024px) {
    padding: 1rem;
    min-height: 300px; /* Ensure editor has enough space */
  }
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
  z-index: 10; /* Ensure it's above other elements */

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

  @media (max-width: 768px) {
    position: relative; /* Change to relative for stacking */
    bottom: auto;
    right: auto;
    margin-top: 1rem; /* Add some space when stacked */
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    /* Adjust for medium screens if needed, e.g., smaller absolute box */
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;
