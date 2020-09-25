import React from 'react';
import {motion} from 'framer-motion'

const Order = ({ pizza }) => {

  // animation variants
  const containerVariants ={  //can be named whatever but preferennce is classNmae of animated element and adding the word Variant to the classname
    hidden:{    //can also be named whatever as it will be referenced to the initial state of animation
      x: '100vw'
    },
    visible:{
      x:0,
      transition:{    //NOTE TRANSITION IS EMBEDDED IN THE VISIBLE STATE
        mass:0.4, //higher mass number in type of spring animation means it moves slower, lower mass means it moves quicker
        damping:8, //damping is the strength of opposing force>>>higher number means less oscillation, 0 makes the animation oscillate indefinitely(without stopping) 
        type: 'spring',
         when:"beforeChildren",    //this says that containerVariants anime should occur before childVariants anime start or before any child anime occurs(animations inside this parent)
         staggerChildren: 0.4
        }  
    },
        
    exit:{  //animation to control when the page is removed from the dom(when route changes)
      x:"-100vw",
      transition:{ease:'easeInOut'}
    }
  }
const childVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible" 
      exit="exit"   
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>{pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}</motion.div>
    </motion.div>
  )
}

export default Order;