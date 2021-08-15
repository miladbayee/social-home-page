import "./share.css";
import UserImage from "components/UserImage";
import InputText from "components/InputText";
import { shareList } from "constant/shareListConst";
import BaseButton from "components/BaseButton";
import ShareOption from "components/ShareOption";

const imgSrc = "assets/images/users/1.jpg";

const Share = () => {
  return (
    <div className="sahre">
      <div className="share__header">
        <UserImage imgSrc={imgSrc} />
        <InputText placeholder={`what's is your mind Milad?`} />
      </div>
      <hr />
      <div className="share__footer">
        <div className="share__options">
          <div className="share__option_list">
            {shareList.map((item) => (
              <ShareOption key={item.id} title={item.title}>
                {item.iconName}
              </ShareOption>
            ))}
          </div>
          <BaseButton btnClass={"share__btn"}>Share</BaseButton>
        </div>
      </div>
    </div>
  );
};

export default Share;
