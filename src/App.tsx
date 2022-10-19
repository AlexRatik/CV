import React from "react";
import { RotatedBox } from "./components/rotatedBox/rotatedBox";
import { AdditionalInfo } from "./components/additionalInfo/additionalInfo";
import { InfoContainer, InfoWrapper1, InfoWrapper2, MainBlock } from "./styled";
import { MainInfo } from "./components/mainInfo/mainInfo";

function App() {
  return (
    <MainBlock>
      <RotatedBox />
      <InfoContainer>
        <InfoWrapper1>
          <AdditionalInfo />
        </InfoWrapper1>
        <InfoWrapper2>
          <MainInfo />
        </InfoWrapper2>
      </InfoContainer>
    </MainBlock>
  );
}

export default App;
