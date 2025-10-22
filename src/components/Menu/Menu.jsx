
import { Component } from "react";
import styles from "./Menu.module.css"

 import MenuList from "../MenuList/MenuList";
 import { menuInfo } from "../constants/data";

export default class Menu extends Component {
  render() {

    return (
      
      <div className={styles.foodscontainer}>
 {menuInfo?.map((food)=>{
            const {id,title,category,image,price,description}=food
             return <MenuList
             key={id}
             title={title}
             category={category}
             image={image}
             price={price}
             description={description}
             />

        })}
      </div>
    );
  }
}

  