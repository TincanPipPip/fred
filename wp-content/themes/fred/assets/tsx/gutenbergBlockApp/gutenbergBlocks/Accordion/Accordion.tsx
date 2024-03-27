import React, { useEffect, useContext, useState } from 'react';
import { Data, AccordionData, AccordionRow } from '../../gutenbergBlockTypes';
import AccordionFunctionality from './AccordionFunctionality';
import { dataContext } from '../AppInit';

export default function Accordion() {
  const { loadedBlockData } = useContext(dataContext);
  const [processedData, setProcessedData] = useState<any[]>([]);

  // i'm processing data retrieved from api - filtering out the accordion block data, structuring it as a multi-dimensional array then setting it to state
  useEffect(() => {

    if (loadedBlockData) {
      let blockDataProcessingArray: any[] = [];

      for (const block of loadedBlockData as Data) {
        

          if (block.blockName === 'acf/accordion') {
          let rows = block.attrs.data;

          if (rows) {
            let accordionData: any[] = [];

            for (let i = 0; i < Number(rows.accordion); i++) {
              const titleKey = `accordion_${i}_title`;
              const copyKey = `accordion_${i}_copy`;

              if (rows.hasOwnProperty(titleKey) && rows.hasOwnProperty(copyKey)) {
                const title = rows[titleKey as keyof typeof rows];
                const copy = rows[copyKey as keyof typeof rows];
                accordionData.push({ "title" : title, "copy" : copy });
              }
            }

            blockDataProcessingArray.push({"accTitle" : rows.title, "accordionRows" : accordionData});
          }
        }
      }

      setProcessedData(blockDataProcessingArray);
    }
  }, [loadedBlockData]);

  const rowToggle = (el: HTMLButtonElement) => {

    new AccordionFunctionality(el as HTMLElement);
  }

  return (
    <>
      {processedData ? processedData.map((accordionData: AccordionData, i: number) => (

        <React.Fragment key={i}>
          <section className="m-block m-block__accordion">
            <h2>{accordionData.accTitle}</h2>
            <div className="js-accordion">
              {accordionData.accordionRows.map((accordion: AccordionRow, j: number) => (
                <React.Fragment key={j}>
                  <h2 className="accordion__title">
                    <button
                      type="button"
                      aria-expanded="false"
                      className="js-accordion-trigger accordion__header"
                      aria-controls={`sect${i}-${j}`}
                      id={`accordion${i}-${j}id`}
                      onClick={(e) => rowToggle(e.target as HTMLButtonElement)}
                    >
                      {accordion.title}
                    </button>
                  </h2>
                  <div
                    id={`sect${i}-${j}`}
                    role="region"
                    aria-labelledby={`accordion${i}-${j}id`}
                    className="js-accordion-panel accordion__panel"
                    aria-hidden="true"
                  >
                    <p>{accordion.copy}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        </React.Fragment>
      )) : ''}
    </>
  );
}
