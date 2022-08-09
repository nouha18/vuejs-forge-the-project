import { createWebHistory, createRouter } from "vue-router";
 import MyLogin from "../components/login/Login";
// import Notifications from "./Notifications";
// import Attachments from "./Attachments";
// import Favourites from "./Favourites";
// import Calendar from "./Calendar";

const routes = [
  {
     path: "/login",
     name: "Login",
     component: MyLogin,
 },
//   {
//     path: "/notifications",
//     name: "Notifications",
//     component: Notifications,
//   },
//   {
//     path: "/attachments",
//     name: "Attachments",
//     component: Attachments,
//   },
//   {
//     path: "/favourites",
//     name: "Favourites",
//     component: Favourites,
//   },
//   {
//     path: "/calendar",
//     name: "Calendar",
//     component: Calendar,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


