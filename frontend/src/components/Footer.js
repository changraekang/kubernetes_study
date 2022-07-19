import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #02215e;
  min-width: 1280px;
  height: 310px;
  width: 100%;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  max-width: 1280px;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const LogoPart = styled.div`
  display: flex;
  flex_direction: column;
  margin-left: 40px;
`;

const LogoLetter = styled.div`
  font-weight: bold;
  color: black;
  margin-right: 40px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 184.4px;
  height: 43.5px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 2.5rem;
`;

const CopyRight = styled.div`
  font-size: 10px;
  //margin-top: 1.5rem;
`;

const InformationPart = styled.div`
  color: white;
  font-size: 13px;
  line-height: 2;
`;

const SiteMapPart = styled.div`
  display: flex;
`;

const SiteMapGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const SiteMapGroupTitle = styled.div`
  color: black;
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Sites = styled.div`
  line-height: 1.5;
`;

const Site = styled.div`
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  line-height: 2;
`;

const Linker = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Email = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

const CustomerServicePart = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const CS = styled.div`
  height: 100%;
  display: flex;
  text-align: right;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  line-height: 1.5;
`;

const Info = styled(Site)`
  cursor: auto;
`;

const CsLabel = styled.div`
  font-size: 2.1875rem;
  color: white;
  line-height: 1;
  text-align: right;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Wrapper>
          {/*<Link href={'/'}><Logo src={'/logos/exchange_logo.png/'} /></Link>*/}
          <ContentWrapper>
            <LogoPart>
              {/*<Link href={'/'}><Logo src={'/logos/exchange_logo.png/'} /></Link>*/}
              <InformationPart>
                <div>회사명 : (주) </div>
                <div>대표이사 : </div>
                <div>사업자등록번호 : </div>
                <div>고객문의 : </div>
                <div>상장 및 제휴 문의 : </div>
                <div>서울시 </div>
                <div>
                  <a href="tel: 070-7704-7925" style={{ color: "#fff" }}>
                    {" "}
                  </a>
                  tel: 
                </div>
                <CopyRight>Copyright © Bitvelo. All rights reserved.</CopyRight>
              </InformationPart>
            </LogoPart>
            <SiteMapPart>
              <SiteMapGroup>
                <Sites>
                  <Site>회사소개</Site>
                  <Site>이용약관</Site>
                  <Site>이용안내</Site>
                  <Site>개인정보처리방침</Site>
                </Sites>
              </SiteMapGroup>
              <SiteMapGroup>
                <Sites>
                  <Site>공지사항</Site>
                  <Site>자주하는 질문</Site>
                </Sites>
              </SiteMapGroup>
            </SiteMapPart>
            <CustomerServicePart>
              <img src="bitvelo_logo.png"></img>
            </CustomerServicePart>
          </ContentWrapper>
        </Wrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
