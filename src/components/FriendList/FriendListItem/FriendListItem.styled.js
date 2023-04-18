import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 15px;
  border: 1px solid #d8e0ea;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  padding-left: 25px;
  border-radius: 3px;
`;

export const Status = styled.span`
  display: block;
  margin-right: 50px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-left: 15px;
`;
