export type ListingProp = {
  data: {
    id: number;
    company: string;
    logo: string;
    isNew: boolean;
    featured: boolean;
    position: string;
    level: string;
    contract: string;
    created: string;
    location: string;
    minprice: number;
    maxprice: number;
    isHiring: boolean;
  }[];
  isLoading: boolean;
};
