import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"

const Container = styled.div``
 
const Wrapper = styled.div`
    padding: 20px;
`;
 
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.div`
    padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
    cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopButton type="filled">Checkout Now</TopButton>           
            </Top>
            <Bottom>
                
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart