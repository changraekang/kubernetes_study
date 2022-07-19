import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 1280px;
  height: 310px;
  width: 100%;
`;
const NullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 1280px;
  height: 6.0625rem;
  width: 100%;
`;
const Depth = () => {
  return (
    <div>
      <NullContainer />
    </div>
  );
};

export default Depth;
