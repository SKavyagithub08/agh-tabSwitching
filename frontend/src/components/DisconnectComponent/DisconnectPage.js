import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 1rem;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

export const ButtonLink = styled.button`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: 0.9;
  }
`;
