import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];


  // animation variants
  const containerVariants ={  //can be named whatever but preferennce is classNmae of animated element and adding the word Variant to the classname
    hidden:{    //can also be named whatever as it will be referenced to the initial state of animation
      x: '100vw'
    },
    visible:{
      x:0,
      transition:{delay:0.5, type: 'spring', }  //NOTE TRANSITION IS EMBEDDED IN THE VISIBLE STATE
    },
        
    exit:{  //animation to control when the page is removed from the dom(when route changes)
      x:"-100vw",
      transition:{ease:'easeInOut'}
    }
  }

  const buttonVariants={
    hover:{
      scale:1.1,
      textShadow:"0px 0px 8px rgb(255,255,255)",   //note the attributes should be in camelcase(textShadow)
      boxShadow:"0px 0px 8px rgb(255,255,255)",
      transition:{
        duration:0.3,
        // yoyo:10, //yoyo allows us to add keyframes to an animation the number of times specified before coming to a stop
        yoyo: Infinity //animation with scale from 1 to 1.1 on hover infinitely
      }
    }
  }

  return (
    <motion.div className="toppings container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            variants={buttonVariants}
            whileHover="hover" 
  
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        variants={buttonVariants}
          whileHover="hover"
        //      whileHover={{     //while hover adds animations when you hover on the element
        //       scale:1.1,
        //       textShadow:"0px 0px 8px rgb(255,255,255)",   //note the attributes should be in camelcase(textShadow)
        //       boxShadow:"0px 0px 8px rgb(255,255,255)"
        //     }}
         >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;