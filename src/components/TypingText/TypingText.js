import { TypeAnimation } from 'react-type-animation';
 
const TypingText = () => {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer',
        1000,
        'MERN Stack Expert',
        2000,
        'Backend Engineer',
        1000,
        'AI Solutions Developer',
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ 
        fontSize: '1.2em', 
        display: 'inline-block',
        color: '#58a6ff',
        fontFamily: "'Inter', sans-serif",
        fontWeight: "600",
        letterSpacing: '0.5px'
      }}
    />
  );
};

export default TypingText;