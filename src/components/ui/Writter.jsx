import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Writer = ({ text, typeSpeed = 50, classElements = '' }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [text],
      typeSpeed,
      backSpeed: 50,
      autoInsertCss: true,
      shuffle: true,
    });

    return () => {
      typed.destroy();
    };
  }, [text,typeSpeed]);

  return (
    <div>
      <span className={`${classElements} `} ref={typeTarget} />
    </div>
  );
};

Writer.defaultProps = {
  classElements: '',
  typeSpeed: 50,
};

Writer.propTypes = {
  text: PropTypes.string.isRequired,
  classElements: PropTypes.string,
  typeSpeed: PropTypes.number,
};

export default Writer;