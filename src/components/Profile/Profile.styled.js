import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 303px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 8px;
  padding-top: 24px;
  box-shadow: 2px 2px 10px #e0e0e0;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
  background-image: linear-gradient(blue, yellow);
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 16px;
`;

export const TagName = styled.p`
  color: gray;
  margin-top: 8px;
`;

export const Location = styled.p`
  color: gray;
  margin-top: 8px;
  display: flex;
  gap: 4px;
`;

export const StatusList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 36px;
  margin-bottom: 0;
  padding: 0;
  background-color: #eeeeee;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const StatusItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  padding: 12px;
  border-top: 1px solid gray;
  :not(:last-of-type) {
    border-right: 1px solid gray;
  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;
