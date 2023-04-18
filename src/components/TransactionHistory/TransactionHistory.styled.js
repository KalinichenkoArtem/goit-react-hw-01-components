import styled from '@emotion/styled';

export const Table = styled.table`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 303px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;
  color: gray;
  overflow: hidden;
  border-spacing: 0px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;

export const TableHead = styled.thead`
  background-color: blue;
`;

export const HeadRow = styled.tr`
  text-transform: uppercase;
  color: #fff;
`;

export const HeadCell = styled.th`
  padding: 8px 0;
  :first-of-type {
    border-top-left-radius: 8px;
    border-right: 1px solid gray;
  }
  :last-of-type {
    border-top-right-radius: 8px;
    border-left: 1px solid gray;
  }
`;

export const TableBody = styled.tbody`
  text-transform: capitalize;
  font-weight: 600;
`;

export const BodyRow = styled.tr`
  border: 1px solid gray;
  :nth-of-type(even) {
    background-color: lightgrey;
  }
`;

export const BodyCell = styled.td`
  padding: 8px 0;
  :first-of-type {
    border-right: 1px solid gray;
  }
  :last-of-type {
    border-left: 1px solid gray;
  }
`;
