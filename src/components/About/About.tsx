import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Go Back</button>
      <p>About</p>
    </div>
  );
};

export default About;
