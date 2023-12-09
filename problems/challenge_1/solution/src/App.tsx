import { useEffect, useState } from "react";

import "./App.css";

import ErrorHandling from "./components/errorHandling/ErrorHandling";
import Loading from "./components/loading/Loading";
import UserInfo from "./components/UserInfo";

export interface user {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err) => {
        setHasError(true);
        console.error(err);
      });
  }, []);

  if (hasError) return <ErrorHandling />;

  return (
    <>
      <div className="users">
        {loading ? (
          <Loading />
        ) : (
          users?.map((user) => (
            <UserInfo key={user.id} id={user.id} name={user.name} />
          ))
        )}
      </div>
    </>
  );
};

export default App;
