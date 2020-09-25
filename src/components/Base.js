import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  // variants help us to declare our animations outside the elements to make code cleaner

  const containerVariants ={  //can be named whatever but preferennce is classNmae of animated element and adding the word Variant to the classname
    hidden:{    //can also be named whatever as it will be referenced to the initial state of animation
      x: '100vw'
    },
    visible:{
      x:0,
      transition:{delay:0.5, type: 'spring', }  //NOTE TRANSITION IS EMBEDDED IN THE VISIBLE STATE
    }
  }

  const nextVariants={
    hidden:{
      x:"-100vw"
    },
    visible:{
      x:0,
      transition:{type:'spring', stiffness:120}
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
    <motion.div className="base container"
//==========USING VARIANTS=================== 
      variants={containerVariants }
      initial="hidden" //for initial use the hidden values>>>note its a string
      animate="visible" //for animate use the hidden values>>>note its a string
      exit="exit"
// ================BEFORE VARIANTS==================
    // initial={{x: '100vw'}}
    // animate={{x:0}}
    // transition={{delay:0.5, type: 'spring', }}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
            whileHover={{scale:1.3, originX: 0, color:'#f8e112'}} //orIginX states where the animation starts with respect to, scaling starts from x=0 to 1.3 times
            ttransition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        // initial={{x:"-100vw"}} //we use "" when we include dimensions like the vw
        // animate={{x:0}} //without dimensions framer-motion automatically knows dimensions are pixels  
        // transition={{type:'spring', stiffness:120}}
        variants={nextVariants}
        initial="hidden"
        animate="visible"
        
        >
          <Link to="/toppings">
            <motion.button
            variants={buttonVariants}
            whileHover="hover"
            //   whileHover={{     //while hover adds animations when you hover on the element
            //   scale:1.1,
            //   textShadow:"0px 0px 8px rgb(255,255,255)",   //note the attributes should be in camelcase(textShadow)
            //   boxShadow:"0px 0px 8px rgb(255,255,255)"
            // }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;