
import { Component } from "react";

import styles from "./MenuList.module.css"

export default class MenuList extends Component {
  render() {
    const { title,category, price, image, description } = this.props;

    return (
      <>
        {/* food item start */}
        <div className={styles.singlefood}>
          <div className={styles.img}>
            <img src={image} />
          </div>
          <div className={styles.titleprice}>
            <h3>{title}</h3>
            <h3>{category}</h3>
            <p>${price}</p>
          </div>
          <div className={styles.fooddesc}>{description}</div>
        </div>
      </>
    );
  }
}
