import { UserInfo } from "src/models";

const baseLocalUrl = "http://localhost:8800";
const userUrl = baseLocalUrl.concat("/user");

export default async function getUser() {
  const res = await fetch(userUrl);
  const res_1 = await res.json();
  return res_1.results[0] as UserInfo;
}
