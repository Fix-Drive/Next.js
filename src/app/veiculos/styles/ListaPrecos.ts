import styled from "styled-components";

export const PartsListContainer = styled.div`
  border: 1px solid #b2dfdb;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    padding: 10px;
  }
`;

export const PartsTitle = styled.h2`
  margin-top: 0;
`;

export const PartsTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

export const PartsTableHeader = styled.th`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
`;

export const PartsTableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  
`;