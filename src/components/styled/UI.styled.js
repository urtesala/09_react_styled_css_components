import styled from 'styled-components';

// susikurti Section styled componenta
export const Section = styled.section`
  padding-top: 6%;
  padding-bottom: 5%;
`;
// susikurti Container styled componenta
export const Container = styled.div`
  background-color: ${(props) => props.bgc && props.bgc};
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 20px;
`;
// susikurti Grid  componenta
export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || '3'}, 1fr);
  gap: 1rem;
  margin-top: 0;
  list-style: none;
  padding-left: 0;
`;
// susikurti SingleCard componenta, naudojant styled componentus
// Icon
// nustatem papildomus atributus priklausancius nuo props
export const Icon = styled.i.attrs((props) => ({
  className: `fa fa-${props.icon}`,
  ariaHidden: true,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.iconLeft ? 'grid-row: 1 / span 2' : '')};
  font-size: 24px;
  width: 64px;
  height: 64px;
  color: #fff;
  background-color: var(--primary-500);
  border-radius: 6px;
  margin-bottom: 24px;
`;

// button type submit
// default attributes
const SubmitBtn = styled.button.attrs({
  type: 'submit',
})`
  font-size: 2rem;
`;
// button
export const Button = styled.button`
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  background-color: var(--primary-500);
  color: #fff;
  padding: 14px 28px;
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
`;
// secondary button
export const SecondaryButton = styled(Button)`
  background-color: #fff;
  color: #333f51;
`;
// nav button
export const PrimaryNavButton = styled(Button)`
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
`;
// SecondaryNavButton
export const SecondaryNavButton = styled(PrimaryNavButton)`
  background-color: inherit;
  color: #333f51;
`;
// sukurti Flex styled component
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: ${(props) => (props.gap ? '24px' : '0')};
  @media screen and (max-width: 1000px) {
    flex-direction: ${(props) => (props.responsive ? 'column' : 'row')};
    row-gap: ${(props) => (props.responsive ? '1.5rem' : '0')};
  }
`;
