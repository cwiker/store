import { Badge } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react'
import styled from 'styled-components'
//import Container from 'material-ui'


const Container = styled.div`
    height: 60px;
    //background-color: black;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`; 

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`;


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Left
                
            </Left>
            <Center>
                <Logo>General Store</Logo>
            </Center>
            <Right><MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
    
  )
}



export default Navbar