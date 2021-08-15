import "./share_option.css";

const ShareOption = ({ children, title }) => {
  return (
    <div className="share__option">
      <div className='share__icons'>{children}</div>
      <span>{title}</span>
    </div>
  );
};

export default ShareOption;
