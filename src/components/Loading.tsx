import { VStack, Spinner, Text, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const Loading = chakra(({ className }: { className?: string; }) =>
  <VStack className={className} layout as={motion.div} initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
    <Spinner />
    <Text>It can take up to a minute to load the data..</Text>
  </VStack>);


export default Loading;