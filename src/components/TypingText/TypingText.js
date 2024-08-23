import { TypeAnimation } from 'react-type-animation';
 
const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer', // Types 'One'
        1000, // Waits 1s
        'Frontend Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Backend Developer', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5em', display: 'inline-block',color:" #7562E0",fontFamily:"'Poppins', sans-serif",fontWeight:"500" }}
    />
  );
};

export default TypingText;