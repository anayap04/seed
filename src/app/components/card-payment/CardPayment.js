import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useTranslation } from "react-i18next";
import { Subtitle } from "../foundation/Typography";
import { MDBInputSeed } from "./styles";

const CardPayment = (props) => {
  const { theme, total } = props;
  const { t } = useTranslation();
  return (
    <MDBContainer
      fluid
      className="py-5"
      style={{ backgroundColor: theme.background }}
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="9" lg="10" xl="5">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="d-flex justify-content-between mb-0">
                <p className="text-muted mb-">{t("total")}</p>
                <p className="mb-0">{`$ ${total} USD`}</p>
              </MDBCardTitle>
            </MDBCardBody>
            <div
              className="rounded-bottom"
              style={{ backgroundColor: theme.background }}
            >
              <MDBCardBody>
                <p className="mb-6">
                  <Subtitle theme={theme}>{t("payDetails")}</Subtitle>
                </p>
                <MDBInputSeed
                  label="Card Number"
                  id="form1"
                  type="text"
                  placeholder="1234 5678 1234 5678"
                  wrapperClass="mb-3"
                  theme={theme}
                />
                <MDBRow className="mb-3">
                  <MDBCol size="6">
                    <MDBInputSeed
                      theme={theme}
                      label="Expire"
                      id="form2"
                      type="password"
                      placeholder="MM/YYYY"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBInputSeed
                      theme={theme}
                      label="CVV"
                      id="form4"
                      type="password"
                      placeholder="CVV"
                      wrapperClass="mb-3"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBBtn block color="info">
                  Order now
                </MDBBtn>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardPayment;
