import React, { useState } from "react";
import { RotatedBox } from "./components/rotatedBox/rotatedBox";
import { AdditionalInfo } from "./components/additionalInfo/additionalInfo";
import { InfoContainer, InfoWrapper1, InfoWrapper2, MainBlock } from "./styled";
import { MainInfo } from "./components/mainInfo/mainInfo";

function App() {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  const [showCertificates, setShowCertificates] = useState<boolean>(false);

  const hideAll = () => {
    setShowContacts(false);
    setShowCertificates(false);
  };

  return (
    <MainBlock onClick={hideAll}>
      <RotatedBox />
      <InfoContainer>
        <InfoWrapper1>
          <AdditionalInfo
            showContacts={showContacts}
            showCertificates={showCertificates}
            toggleShowCertificates={() => setShowCertificates((prev) => !prev)}
            toggleShowContacts={() => setShowContacts((prev) => !prev)}
          />
        </InfoWrapper1>
        <InfoWrapper2>
          <MainInfo />
        </InfoWrapper2>
      </InfoContainer>
    </MainBlock>
  );
}

export default App;
