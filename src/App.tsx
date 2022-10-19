import React from "react";
import { RotatedBox } from "./components/rotatedBox/rotatedBox";
import { Box } from "@mui/material";
import { AdditionalInfo } from "./components/additionalInfo/additionalInfo";
import { InfoContainer, InfoWrapper, MainBlock } from "./styled";

function App() {
  return (
    <MainBlock>
      <RotatedBox />
      <InfoContainer>
        <InfoWrapper>
          <AdditionalInfo />
        </InfoWrapper>
        <Box flex={3} />
      </InfoContainer>
    </MainBlock>
  );
}

export default App;
