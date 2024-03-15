import React, { useEffect, useContext, useState } from 'react';
import { Data } from '../../gutenbergBlockTypes';
import AccordionFunctionality from './AccordionFunctionality';
import { dataContext } from '../AppInit'

export default function Accordion() {
  const { loadedBlockData } = useContext(dataContext);
  const [processedData, setProcessedData] = useState<any[]>([]);

  // Processing data from api - filtering out the accordion block data and pushing it to an array then setting the state

  useEffect(() => {

    if (loadedBlockData) {
      const blockDataProcessingArray: any[] = [];

      // console.log("block running")
      for (const block of loadedBlockData as Data) {

          if (block.blockName === 'acf/accordion') {
          // console.log(block.blockName, "blockName")

          let rows = block.attrs.data;

          if (rows) {

            for (let i = 0; i < Number(rows.accordion); i++) {
              const titleKey = `accordion_${i}_title`;
              const copyKey = `accordion_${i}_copy`;

              if (rows.hasOwnProperty(titleKey) && rows.hasOwnProperty(copyKey)) {
                const title = rows[titleKey as keyof typeof rows];
                const copy = rows[copyKey as keyof typeof rows];
                blockDataProcessingArray.push({ "title" : title, "copy" : copy });
              }
            } 

            // console.log(processedData);
            setProcessedData(blockDataProcessingArray);
          }
        }
      }
    }
  }, [loadedBlockData]);

  // console.log(processedData);

  useEffect(() => {
    const accordions = document.querySelectorAll('.js-accordion h2');

    console.log(accordions)

    accordions.forEach((accordionEl) => {
      new AccordionFunctionality(accordionEl as HTMLElement);
    });
  }, [processedData]);

  return (
    <div className="js-accordion" role="tablist" aria-multiselectable="true" id="accordionGroup">
    {processedData ? processedData.map((row: { title: string; copy: string; }, i: number) => (
        <React.Fragment key={i}>
          <h2 className="accordion__title">
            <button
              type="button"
              aria-expanded="false"
              className="js-accordion-trigger accordion__header"
              aria-controls={`sect${i}`}
              id={`accordion${i}id`}
              role="tab"
              aria-selected="false"
              >
              <span>
                {row.title}
              </span>
            </button>
          </h2>
          <div
            id={`sect${i}`}
            role="region"
            aria-labelledby={`accordion${i}id`}
            className="js-accordion-panel accordion__panel"
            aria-hidden="true"
          >
            <p>{row.copy}</p>
          </div>
        </React.Fragment>
      )) : ''}
    </div>
  );
}
