import classes from './MeetupDetails.module.css';

const MeetupDetails = ({ id, title, image, address, description }) => {
  return (
    <section className={classes.detail}>
      <img src={image} width="100%" />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
};

export default MeetupDetails;
