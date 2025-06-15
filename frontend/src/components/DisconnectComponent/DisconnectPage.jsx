import React from "react";
import {
  PageContainer,
  Card,
  Title,
  Description,
  ButtonLink,
} from "./DisconnectPage";

const DisconnectPage = () => {
  return (
    <PageContainer>
      <Card>
        <Title>Test Disconnected!</Title>
        <Description>
          Your test has been ended due to multiple tab switches,
        </Description>
        <Description>
          For assistance, please contact the test administrator.
        </Description>
        <div>
          <ButtonLink onClick={() => (window.location.href = "/")}>
            Return to Login
          </ButtonLink>
        </div>
      </Card>
    </PageContainer>
  );
};

export default DisconnectPage;
