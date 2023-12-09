import { User } from "../../App";
import "./usercard.css";

interface IUser extends User {
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
}

const UserCard = (props: IUser) => {
  const { name, id, onClick } = props;
  return (
    <div className="usercard">
      <p>{name}</p>
      <button onClick={(e) => onClick(e, id)}>Delete User</button>
    </div>
  );
};

export default UserCard;
