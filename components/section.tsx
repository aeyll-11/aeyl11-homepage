import { motion } from 'framer-motion'
import { chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface Props {
    children:any,
    delay: number
}
const Section = ({ children, delay }: Props) => (
      <AnimatePresence initial={true}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{y: '30px' , opacity: 0 }}
        animate={{y: '0px', opacity: 1 }}
        transition={{ duration: delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
)

export default Section