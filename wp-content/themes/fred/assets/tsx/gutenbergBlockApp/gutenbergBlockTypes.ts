export interface AccordionData {
  accTitle: string;
  accordionRows: AccordionRow[];
}

export type AccordionRow = {
  title: string;
  copy: string;
};

export type Data = Array<{
  title: string;
  copy: string;
  blockName: string;
  attrs: {
      name: string;
      data: {
          [key: string]: string | string[] | number;
      };
      mode: string;
      align: string;
      lock: any[];
      className: string;
  };
  innerBlocks: any[];
  innerHTML: string;
  innerContent: any[];
  rendered: string;
}>;

export type blockContextT = {
  blockName: string;
  pageIndex: string;
}

export type dataContextT = {
  loadedBlockData: Array<{}> | null;
}