import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 60px;
  background-color: rgba(40, 42, 63, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #989ca6;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default function Footer() {
  return (
    <FooterContainer>© 2025 MovieApp. All Rights Reserved.</FooterContainer>
  );
}
