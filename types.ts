export type BlogFrontMatter = {
  title: string;
  author: string;
  category: string;
  date: Date;
  description: string;
  bannerImage: string;
  publishedDate: string;
  tags: string[];
};

export type BlogLayoutProps = {
  children: React.ReactNode;
  frontMatter: BlogFrontMatter;
  wordCount: number;
  readingTime: string;
};

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontmatter: BlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
};

export type BlogPostsProps = {
  posts?: BlogPostProps[];
};

export interface BlogProps extends BlogPostsProps {
  title: string;
  description: string;
}
