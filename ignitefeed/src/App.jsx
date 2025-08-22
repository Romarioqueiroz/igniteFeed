import Header from "./components/Header";
import styles from "./App.Module.css";
import "./global.css";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, inventore doloribus repellat adipisci autem, iure molestias placeat explicabo quas sed deserunt voluptatum nostrum assumenda minima numquam incidunt, molestiae quam labore."
          />
          <Post author=" Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </>
  );
}

export default App;
