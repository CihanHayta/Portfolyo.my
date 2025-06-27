import { Typewriter } from 'react-simple-typewriter';

const MultiText = () => {
  return (
    <h1 style={{ fontSize: '20px', color: '#fff' }}>
    
      <span style={{ color: '  #F8F8F2', fontWeight: 'bold' }}>
        <Typewriter
          words={['Frontend Developer', 'React Developer','React-Native Developer', 'Full-Stack Developer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
};

export default MultiText;
