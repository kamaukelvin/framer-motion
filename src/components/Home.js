import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
// 
const Home = () => {

  const containerVariants={
    hidden:{
      opacity:0 // initial state of animation(initially the home container will ahve an opacity of 0)
    },
    visible:{
      opacity:1,  //final state of animation (after the duration the opacity will be 1)
      transition:{delay:1.5, duration:1.5},  //delay=>after how long the animation will start  duration=>how long the animation will take
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
    <motion.div className="home container"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
   

    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
        variants={buttonVariants}
        whileHover="hover"    //while hover adds animations when you hover on the element

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;