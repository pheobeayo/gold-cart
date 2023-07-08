import user from "../../assets/user.png";
import shoppingcart from "../../assets/shoppingcart.png";
import box from "../../assets/box.png";
import inbox from "../../assets/inbox.png";

export const sideBarLinks = [
  {
    path: "/account/",
    icon: <img src={user} alt="user" />,
    text: "My Account",
    alt: "user",
  },
  {
    path: "/account/cart",
    icon:<img src={shoppingcart} alt="shoppingcart" />,
    text: "Cart",
    alt: "shoppingcart",
  },
  {
    path: "/account/order",
    icon: <img src={box} alt="box" />,
    text: "Order",
    alt: "box",
  },
  {
    path: "/account/inbox",
    icon: <img src={inbox} alt="inbox" />,
    text: "Inbox",
    alt: "inbox",
  },
 
];