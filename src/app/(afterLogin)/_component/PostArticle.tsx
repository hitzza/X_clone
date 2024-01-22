"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };
  //서버 컴포넌트 안에서 클라이언트 컴포넌트를 사용하려면 import 하지말고 children으로 받아야함!
  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
