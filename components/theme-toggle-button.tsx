

import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={useColorModeValue('light', 'dark')}
        initial={{y: '-20px' , opacity: 0 }}
        animate={{y: '0px', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <IconButton
          aria-label="toggle-theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton;