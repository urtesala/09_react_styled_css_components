import SingleCard from '../gainMore/SingleCard';
import { Grid } from '../styled/UI.styled';

function GainCards(props) {
  return (
    <Grid cols={props.cols}>
      {props.items.map((cObj) => (
        // generuoti SingleCard komponetus
        <SingleCard
          iconLeft={props.iconLeft}
          key={cObj.id}
          icon={cObj.icon}
          //   descr={cObj.descr}
          title={cObj.title}
        />
      ))}
    </Grid>
  );
}
export default GainCards;
