import React, { useContext } from 'react'
import { Data }  from '../types';
import Accordion from './Accordion/Accordion';
import { blockContext } from '../gutenbergBlocks'

type Props = {
  loadedBlockData: Data
}

// const roots = document.querySelectorAll('.tsx-accordion');

export default function AppContainer({ loadedBlockData } : Props) {

  const { blockName } = useContext(blockContext)

  return (
      <>
          {loadedBlockData ? {
              'accordion':  <Accordion loadedBlockData={loadedBlockData} />
              }[blockName || ''] : ''
          }
      </>
  )
}


// for (let i = 0; i < roots.length; i++) {// for loops still win for speed and efficiency
//   const root = roots[i];
//   ReactDOM.render(
//     <React.StrictMode>
//       <Accordion  loadedBlockData={loadedBlockData} />
//     </React.StrictMode>,
//     root
//   );
// }




