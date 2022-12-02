import styled from 'styled-components';
import logo from '../../assets/img/logo.png';
import {
  Flex,
  PrimaryNavButton,
  SecondaryNavButton,
} from '../styled/UI.styled';

const NavContainer = styled.div`
  max-width: 1264px;
  margin: 0 auto;
  padding: 22px 0;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  color: #556987;
`;

function Nav(props) {
  return (
    <header>
      <NavContainer>
        <Flex>
          <img src={logo} alt='logo' />
          <NavLinks>
            <a href=''>Product</a>
            <a href=''>Features</a>
            <a href=''>Pricing</a>
            <a href=''>Resources</a>
          </NavLinks>
          <div>
            <SecondaryNavButton>Log In</SecondaryNavButton>
            <PrimaryNavButton>Sign Up</PrimaryNavButton>
          </div>
        </Flex>
      </NavContainer>
    </header>
  );
}
export default Nav;
