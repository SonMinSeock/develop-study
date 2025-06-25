import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  background-color: ${({ scrolled }) => (scrolled ? "rgba(255, 255, 255, 0.7)" : "transparent")};
  box-shadow: ${({ scrolled }) => (scrolled ? "0 1px 4px rgba(0,0,0,0.1)" : "none")};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 16px;
  border-radius: 9999px;
  border: none;
  background-color: #fff;
  font-size: 14px;
  outline: none;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트핸들러 함수 정의
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // 이벤트 핸들러 등록
    window.addEventListener("scroll", onScroll);

    // 언마운트 할때 스크롤 이벤트핸들러 제거
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header scrolled={scrolled}>
      <NavContainer>
        <Logo>탈잉</Logo>
        <SearchWrapper>
          <SearchInput placeholder="재능을 검색해보세요." />
          <SearchIcon size={20} />
        </SearchWrapper>
      </NavContainer>
    </Header>
  );
}

export default NavBar;
