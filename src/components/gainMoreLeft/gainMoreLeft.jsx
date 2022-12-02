import { Container, Flex, Section } from '../styled/UI.styled';
import SectionImg from '../../assets/img/sectionImg.png';
import SectionTitle from '../UI/SectionTitle';
import GainCards from './gainCards';

const sectionData = {
  sectionTitle: {
    pill: 'Features',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
  gainCards: [
    {
      id: 1,
      icon: 'envelope-o',
      title: 'Measure your performance',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 4,
      icon: 'pencil-square-o',
      title: 'Build your website',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 5,
      icon: 'windows',
      title: 'Connect multiple apps',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
  ],
};

function GainMoreLeft(props) {
  return (
    <Section>
      <Container>
        <SectionTitle
          left
          pill={sectionData.sectionTitle.pill}
          subtitle={sectionData.sectionTitle.subtitle}
          title={sectionData.sectionTitle.title}
        />
        <Flex gap>
          <GainCards cols='1' items={sectionData.gainCards} iconLeft />
          <img src={SectionImg} alt='' />
        </Flex>
      </Container>
    </Section>
  );
}
export default GainMoreLeft;
