import React, { useContext } from 'react';
import { Data } from '../gutenbergBlockTypes';
import Accordion from './Accordion/Accordion';
// import Gallery from './Gallery/Gallery';
import { blockContext } from '../gutenbergBlocks'

// const roots = document.querySelectorAll('.tsx-accordion');

export default function AppContainer() {

  const { blockName } = useContext(blockContext);

  return (
      <>
          {blockName == 'accordion' ?  <Accordion /> : ''}
          {/* {blockName == 'gallery' ?  <Gallery /> : ''}; */}
      </>
  )
}
