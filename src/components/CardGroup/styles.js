import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #16181c;
  width: 230px;
  height: 250px;
  margin: 5px;
  padding: 10px 5px;
`;

export const Name = styled.div`
  padding: 5px;
  color: #55a1e3;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;
`;

export const Description = styled.div`
  padding: 5px;
  color: #eff7fe;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Category = styled.div`
  background-color: #55a1e3;
  border-radius: 10px;
  width: 100%;
  max-width: 200px;
  padding: 5px;
  color: #eff7fe;
  font-weight: bold;
  margin: 5px 0;
`;
