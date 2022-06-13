import Link from "next/link";
import { Loader } from "../components";
import toast from "react-hot-toast";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Loader show />
      <button onClick={() => toast.success("hello world!")}>button</button>
    </div>
  );
}
