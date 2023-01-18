import Image from "next/image"
import React, { useEffect, useState } from "react"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import TokenInput from "../../components/jwt-decoder/token-input.component"
import jwt_decode from "jwt-decode";
import { useAppTheme } from "../../assets/global-styles/theme"
import { algorithmOptions, defaultTokens, optionsList, TOption } from "../../assets/constants"
import * as jose from 'jose'
import HighlightedEditor, { JWTInputEditor } from "../../components/jwt-decoder/json-input.components"

// Create a JWT with a payload
const payload = {
  name: "John Doe",
  email: "johndoe@example.com"
};


const sampleToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc'

const sampleToken2 = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZG9udHJlbWVtYmVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJzb21lb25lIiwiZXhwIjoxNjczNjAzODgzLCJpYXQiOjE2NzM2MDM4ODN9.IAI3so_yuxr_8QUgbXBPr8JtoK_fAX7hXqR1xadiWLQ'

const sampleSigningKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsi4JJaPHjlrh/gDnVOHISFE59M8MkojCbhZ9'

const sampleSigningKey2 = ""

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);
  const [tokenValue, setTokenValue] = useState(sampleToken);

  const [payload, setPayload] = useState("");
  const [showTokenError, setShowTokenError] = useState(false);

  const [signingKey, setSigningKey] = useState(sampleSigningKey2);

  const [selectedTab, setSelectedTab] = useState<TOption>("encoded")

  const theme = useAppTheme();

  useEffect(() => {
    try {
      setShowTokenError(false);
      const decoded = jwt_decode<string>(tokenValue);
      console.log(decoded, '@@@@@@@')
      setPayload(JSON.stringify(decoded, null, 2))
    } catch (error) {
      console.log(error)
      setShowTokenError(true);
    }
  }, [tokenValue])


  const decodeJwt = async () => {
    const secret = jose.base64url.decode('zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI')
    const jwt =
      'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..MB66qstZBPxAXKdsjet_lA.WHbtJTl4taHp7otOHLq3hBvv0yNPsPEKHYInmCPdDDeyV1kU-f-tGEiU4FxlSqkqAT2hVs8_wMNiQFAzPU1PUgIqWCPsBrPP3TtxYsrtwagpn4SvCsUsx0Mhw9ZhliAO8CLmCBQkqr_T9AcYsz5uZw.7nX9m7BGUu_u1p1qFHzyIg'

    const { payload, protectedHeader } = await jose.jwtDecrypt(jwt, secret, {
      issuer: 'urn:example:issuer',
      audience: 'urn:example:audience',
    })

    console.log(protectedHeader)
    console.log(payload)
  }

  const generateAndSetJwt = async () => {
    const secret = new TextEncoder().encode(
      's',
    )
    const jwt = await new jose.SignJWT({ 'urn:example:claim': true, payload })
      .setProtectedHeader({ alg: selectedAlgorithm.value, typ: "jwt" })
      .setIssuedAt()
      .setIssuer('urn:example:issuer')
      .setAudience('urn:example:audience')
      .setExpirationTime('2h')
    // .sign(secret);
  }

  useEffect(() => {
    if (selectedAlgorithm.value === 'RS256') {
      setTokenValue("")
    } else {
      generateAndSetJwt();
    }
  }, [signingKey, payload]);


  useEffect(() => {
    setTokenValue(defaultTokens[selectedAlgorithm.value])
  }, [selectedAlgorithm])

  const onPayloadChange = e => {
    setPayload(e.target.value)
  }

  return (
    <JwtContainerStyled $selectedTab={selectedTab} className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title">JWT Decoder</h3>
          <section className="decoder-main-container">
            <TabContainer className="common-container tab-container">
              {
                optionsList.map(({ label, value }) => <TabOption onClick={() => setSelectedTab(value)} className="strong-600" key={value} isSelected={selectedTab === value}>
                  {label}
                </TabOption>)
              }
            </TabContainer>

            <aside id="encoded-content" className="encoded common-container">
              <div className="title-band bt-inherit header flex-center-y">
                <span>
                  JWT
                </span>
                <span>
                  <Popover popoverContent={"JWT will update Automatically when you edit Header, Payload and Signing key data"}>
                    <Image src={"images/help.svg"} alt="help" width={10} height={10} />
                  </Popover>
                </span>
              </div>
              <div className="content inner-content">


                {/* <HighlightedEditor value={tokenValue} /> */}
                <div className="token code">
                  <JWTInputEditor value={tokenValue} />
                </div>
                {/* <TokenInput value={tokenValue} setValue={setTokenValue} /> */}
                {/* <textarea className="token code" value={tokenValue} onChange={(e) => setTokenValue(e.target.value)} /> */}


                <button className="copy-btn strong-600">
                  Copy JWT
                  <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                </button>
              </div>
            </aside>

            <div id="decoded-content" className="input-container common-container">
              <div className="title-band bt-inherit" id="header">
                <div>Header</div>
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={setSelectedAlgorithm} /></div>
              </div>
              <div className="inner-content header code">

                {/* {JSON.stringify({
                "alg": selectedAlgorithm.label,
                "typ": "jwt"
              })} */}

                <HighlightedEditor value={JSON.stringify({
                  "alg": selectedAlgorithm.label,
                  "typ": "jwt"
                }, null, 2)} />

              </div>
              <div className="title-band" id="payload">Payload</div>
              <div className="inner-content code">
                <HighlightedEditor value={payload} />
              </div>

              {/* <textarea className="inner-content code" value={payload} onChange={onPayloadChange} /> */}
              <div className="title-band" id="signing-key">Signing Key</div>

              <div className="inner-content signing-jey code">
                <HighlightedEditor value={signingKey} />
              </div>


              {/* <textarea className="inner-content signing-key code" value={signingKey} onChange={(e) => setSigningKey(e.target.value)} /> */}
            </div>


          </section>
          <section className="common-container note-container-outer">
            <div className="inner note">
              <b>Note:</b>{" "}
              <span>We do not store any information in our database and all processing is done on the client side.</span>
            </div>
          </section>

          <div className="about">
            The JWT Decoder Tool(TODO: placeholder name) allows you to decode JWTs for simple debugging. You can also create your own JWTs with custom payloads signed with your own secret for testing purposes.
          </div>
          <hr />
          <div className="read-more-container">
            {!showMoreContent && <span role={"button"} onClick={() => setShowMoreContent(true)}>Read More <Image className="down-chevron" src={"/images/chevron-down.svg"} alt="chevron-down" width={10} height={10} /></span>}
          </div>
        </article>

        {showMoreContent && (
          <ExplanationContent />
        )}
      </main>
    </JwtContainerStyled>
  )
}

export default JwtDecoder