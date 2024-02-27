import { ReactNode, useEffect, useState } from "react";
import userStore from "../stores/userStore";
import { FaEnvelope, FaPhone, FaUser, FaIdCard } from "react-icons/fa6";

type UserData = {
  label: string;
  info: string;
  icon: ReactNode;
};

export const useUserData = (): UserData[] => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const { email, number, name, uid } = userStore;

  useEffect(() => {
    const data: UserData[] = [
      { label: "Почта", info: email, icon: <FaEnvelope /> },
      { label: "Номер", info: number, icon: <FaPhone /> },
      { label: "Имя", info: name, icon: <FaUser /> },
      { label: "ID пользователя", info: uid, icon: <FaIdCard /> },
    ];

    setUserData(data);
  }, [email, number, name, uid]);

  return userData;
};
