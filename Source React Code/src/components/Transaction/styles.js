import styled from "styled-components";

export const Wrapper = styled.div`
  width: 47%;
  background-color: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
`;
