import { user } from "../App";
import "./UserInfo.css";

const UserInfo = (props: user) => {
  const { id, name } = props;
  return (
    <div className="card">
      <p>User ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default UserInfo;
