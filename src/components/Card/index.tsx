import React from 'react';
import styled from 'styled-components';

type User = {
    user:{
    id: number,
    name: string,
    age: number
    }
}

const Container = styled.div`
  display: flex;
  width: 300px;
  height: 150px;
  border: 3px solid ${props => props.theme.detailsBorder};
  border-radius: 15px;
  justify-content: space-around;
  font-size: 1.2em;
  margin: 10px;
  color: ${props => props.theme.textColor};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Card = (user: User) => {
  return (
    <Container>
      <Content>
        {user.user ? 
          <>
              <span>UserID: {user.user.id}</span>
              <span>UserName: {user.user.name}</span>
              <span>UserAge: {user.user.age}</span>
          </>
        : <>No Content</>}
      </Content>
    </Container>
  )
};

export default Card;