import styled from '@emotion/styled';

export const Container = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 24px;
  box-shadow: 2px 2px 10px #e0e0e0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  margin-bottom: 0;
  border-radius: 8px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 12px;
  border: 1px solid white;
  color: #fff;
  background-color: gray;
  text-shadow: 1px 1px black;
  :not(:last-of-type) {
    border-right: 1px solid gray;
  }
  :last-of-type {
    border-bottom-right-radius: 8px;
  }
  :first-of-type {
    border-bottom-left-radius: 8px;
  }
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-weight: 600;
`;
