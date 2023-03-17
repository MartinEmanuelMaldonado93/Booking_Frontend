import { UserInfo } from "@types";

/** Express application */

// const baseLocalUrl = "http://localhost:8800";
const baseLocalUrl =
  "https://expressjs-mongoose-production-75ad.up.railway.app";

/**
 * fetch called to api to
 * @returns User logged in
 */
export default async function getUser() {
  const res = await fetch(baseLocalUrl + "/user");
  const res_1 = await res.json();
  return res_1.results[0] satisfies UserInfo;
}

/*
gets this type of object
{
	"_id": "63c9cb5153d436e60859cd81",
	"userName": "pepe flores",
	"email": "pepeflores@hotmail.com",
	"createdAt": "2023-01-19T22:59:29.704Z",
	"updatedAt": "2023-01-19T22:59:29.704Z",
	"__v": 0
}
*/
