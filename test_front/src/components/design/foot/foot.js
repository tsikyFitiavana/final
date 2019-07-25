import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter  id="fotera" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">CUISINIER</h5>
            <p>
            Le plus grand réconfort de ma vieillesse, et qui m'apporte la plus grande satisfaction,
            <br/> c'est le souvenir agréable de tous les bienfaits et services amicaux que j'ai donnés aux autres.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">A propos</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Tel</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Email</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Adresse</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Ville</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:RAKOTONDRAZANAKABruno
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;