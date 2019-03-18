export type SearchMatchInfo = {
    value: string;
    matchLevel: string;
    matchedWords: string[];
};

export type HierarchicalLevels = {
    lvl0: string;
    lvl1: string;
};

export type ProductHit = {
   brand: string;
   categories: string[];
   description: string;
   free_shipping: boolean;
   hierarchicalCategories: HierarchicalLevels;
   image: string;
   name: string;
   objectID: string;
   popularity: number;
   price: number;
   price_range: string;
   rating: number;
   type: string;
   url: string;
   highlightResult: {
       brand: SearchMatchInfo;
       categories: SearchMatchInfo[];
       description: SearchMatchInfo;
       name: SearchMatchInfo;
       type: SearchMatchInfo;
   }
};
