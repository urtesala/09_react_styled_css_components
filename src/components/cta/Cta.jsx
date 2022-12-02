import styled from 'styled-components';
import {
  Button,
  Container,
  Flex,
  SecondaryButton,
  Section,
} from '../styled/UI.styled';

const Wrapper = styled.div`
  background-color: #223;
  padding: 62px 98px;
  color: white;
  border-radius: 6px;
`;

const CtaTitle = styled.h2`
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 16px;
  max-width: 456px;
`;

const CtaSubtitle = styled.p`
  font-size: 20px;
  color: #8896ab;
  line-height: 1.5;
  max-width: 456px;
  margin-bottom: 0;
`;

function Cta(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Flex responsive>
            <div>
              <CtaTitle>
                The fastest way from idea to live site. Period.
              </CtaTitle>
              <CtaSubtitle>
                Flex is a Small SaaS Business. Flex isn't a traditional company.
              </CtaSubtitle>
            </div>
            <Flex gap>
              <Button>Get&nbsp;Started</Button>
              <SecondaryButton>Learn&nbsp;More</SecondaryButton>
            </Flex>
          </Flex>
        </Wrapper>
      </Container>
    </Section>
  );
}
export default Cta;
