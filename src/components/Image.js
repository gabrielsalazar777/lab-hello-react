const Image = ({ source, specificClass }) => {
  return <img className={specificClass} src={source} alt="other" />;
};

export default Image;
