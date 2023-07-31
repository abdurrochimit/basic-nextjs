import Layout from "@/component/layout";
import styles from "./users.module.css";
import { useRouter } from "next/router";

interface UsersProps {
  dataUsers: Array<any>;
}
const UsersPage = (props: UsersProps) => {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout pageTitle="Users">
      <>
        <h1 className={styles["title-homepage"]}>Halaman Users</h1>
        {/* <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.td}>No</th>
              <th className={styles.td}>Name</th>
              <th className={styles.td}>Username</th>
              <th className={styles.td}>Email</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((user, index) => {
              return (
                <tr
                  key={user.id}
                  onClick={() => router.push(`users/${user.id}`)}
                >
                  <td className={styles.td}>{index + 1}</td>
                  <td className={styles.td}>{user.name}</td>
                  <td className={styles.td}>{user.username}</td>
                  <td className={styles.td}>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}

        {dataUsers.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => router.push(`users/${user.id}`)}
              className={styles.card}
            >
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </>
    </Layout>
  );
};

export default UsersPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
