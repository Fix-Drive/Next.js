import styled from "styled-components";

export const VehicleDetailsContainer = styled.div`
  border: 1px solid #b2dfdb;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    padding: 10px;
  }
`;

export const VehicleTitle = styled.h2`
  margin-top: 0px;
  
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const VehicleTable = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;

  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const VehicleTableHeader = styled.th`
  border: 1px solid #71BCB9;
  padding: 10px;
  text-align: left;
  background-color: #f0f0f0;

  @media only screen and (max-width: 600px) {
    padding: 8px;
  }

  @media only screen and (max-width: 768px) {
    padding: 9px;
  }
`;

export const VehicleTableCell = styled.td`
  border: 1px solid #71BCB9;
  padding: 20px 200px;
  text-align: left;

  @media only screen and (max-width: 600px) {
    padding: 10px 20px;
  }

  @media only screen and (max-width: 768px) {
    padding: 15px 50px;
  }
`;
