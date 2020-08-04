import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import styles from './Logo.module.css'

const logo = (props)=>(
    <div className={styles.Logo} >
        <img src ={burgerLogo} alt = "burger logo"/>
    </div>
);

export default logo;

// import React from 'react';

// import burgerLogo from '../../assets/Images/burger-logo.png';
// import classes from './Logo.module.css';

// const logo = (props) => (
//     <div className={classes.Logo} style={{height: props.height}}>
//         <img src={burgerLogo} alt="MyBurger" />
//     </div>
// );

// export default logo;