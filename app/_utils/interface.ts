export interface simpleProjectCard {
  _id: string;
  title: string;
  tags: string[];
  excerpt: string;

  slug: { current: string };
}

export interface fullProject {
  _id: string;
  title: string;
  imageUrl: string;
  tags: string[];
  publishedAt: string;
  body: any;
  livePreview: string;
  github: string;

  slug: { current: string };
}
