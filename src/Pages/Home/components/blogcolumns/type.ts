export type Globalnews = {
  created: string;
  description: string;
  image: string;
  title: string;
  type: string;
  _id: string;
};
export type Globaljobs = {
  created: string;
  location: string;
  title: string;
  company: string;
  _id: string;
};

export type NewsProp = {
  Recentnews: Globalnews[];
};
export type JobsProp = {
  Recentjobs: Globaljobs[];
};
