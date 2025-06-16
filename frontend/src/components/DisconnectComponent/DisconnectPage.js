import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff; /* Changed from #f3f4f6 to white for a cleaner look */
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 28rem; /* 448px */
  background: white; /* Ensure card is white if PageContainer changes */
  border: 1px solid #e5e7eb; /* Tailwind gray-200 */
  border-radius: 0.75rem; /* 12px */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Tailwind shadow-md */
  padding: 2rem; /* 32px */
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem; /* 24px */
    max-width: calc(100% - 1rem); /* Ensure some padding from screen edges */
  }

  @media (max-width: 480px) {
    padding: 1rem; /* 16px */
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem; /* 24px */
  font-weight: 600;
  color: #111827; /* Tailwind gray-900 */
  margin-bottom: 0.75rem; /* 12px */

  @media (max-width: 768px) {
    font-size: 1.25rem; /* 20px */
  }
`;

export const Description = styled.p`
  font-size: 0.875rem; /* 14px */
  color: #4b5563; /* Tailwind gray-600 */
  line-height: 1.5;
  margin-top: 0.5rem; /* 8px */

  @media (max-width: 768px) {
    font-size: 0.875rem; /* Keep it readable, or slightly smaller if needed: 0.8rem */
  }
`;

export const ButtonLink = styled.button`
  margin-top: 1.5rem; /* 24px */
  padding: 0.625rem 1.25rem; /* 10px 20px for better tap target */
  font-size: 0.875rem; /* 14px */
  color: white;
  background-color: #2563eb; /* Tailwind blue-600 */
  border: none;
  border-radius: 0.375rem; /* 6px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none; /* Remove underline for button style */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1d4ed8; /* Tailwind blue-700 */
  }

  @media (max-width: 768px) {
    width: 100%; /* Make button full width on small screens */
    padding: 0.75rem; /* 12px */
    font-size: 0.9375rem; /* 15px */
  }
`;
