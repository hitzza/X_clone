import Post from "../_component/Post";
import style from "./home.css';.module.css";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </main>
  );
}
