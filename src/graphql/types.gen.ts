import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  Date: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

export type AlternatingSwitchbackModelBodyField = {
  __typename?: 'AlternatingSwitchbackModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type AlternatingSwitchbackModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  cards?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  heading?: InputMaybe<StringFilter>;
  headingAs?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  sectionId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum AlternatingSwitchbackModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  HeadingAs_ASC = 'headingAs_ASC',
  HeadingAs_DESC = 'headingAs_DESC',
  Heading_ASC = 'heading_ASC',
  Heading_DESC = 'heading_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  SectionId_ASC = 'sectionId_ASC',
  SectionId_DESC = 'sectionId_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Alternating Switchbacks (alternating_switchback) */
export type AlternatingSwitchbackRecord = RecordInterface & {
  __typename?: 'AlternatingSwitchbackRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<AlternatingSwitchbackModelBodyField>;
  cards: Array<WorkRecord>;
  createdAt: Scalars['DateTime'];
  heading?: Maybe<Scalars['String']>;
  headingAs?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Alternating Switchbacks (alternating_switchback) */
export type AlternatingSwitchbackRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type BlogListingModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<BlogListingModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  blogs?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum BlogListingModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Blog Listing (blog_listing) */
export type BlogListingRecord = RecordInterface & {
  __typename?: 'BlogListingRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blogs: Array<BlogPostRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Blog Listing (blog_listing) */
export type BlogListingRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Blog Page (blog_page) */
export type BlogPageRecord = RecordInterface & {
  __typename?: 'BlogPageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  componentGenerator?: Maybe<PageGeneratorRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  seo?: Maybe<SeoField>;
  switchback?: Maybe<SwitchbackRecord>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Blog Page (blog_page) */
export type BlogPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type BlogPostModelBodyField = {
  __typename?: 'BlogPostModelBodyField';
  blocks: Array<ImageRecord>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type BlogPostModelExcerptField = {
  __typename?: 'BlogPostModelExcerptField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type BlogPostModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<BlogPostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  categories?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  excerpt?: InputMaybe<StructuredTextFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  publishDate?: InputMaybe<DateFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum BlogPostModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  PublishDate_ASC = 'publishDate_ASC',
  PublishDate_DESC = 'publishDate_DESC',
  Subtitle_ASC = 'subtitle_ASC',
  Subtitle_DESC = 'subtitle_DESC',
  Title_ASC = 'title_ASC',
  Title_DESC = 'title_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Blog Post (blog_post) */
export type BlogPostRecord = RecordInterface & {
  __typename?: 'BlogPostRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<BlogPostModelBodyField>;
  categories: Array<CategoryRecord>;
  createdAt: Scalars['DateTime'];
  excerpt?: Maybe<BlogPostModelExcerptField>;
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Blog Post (blog_post) */
export type BlogPostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

export type ButtonModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<ButtonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  disabled?: InputMaybe<BooleanFilter>;
  icon?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum ButtonModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Disabled_ASC = 'disabled_ASC',
  Disabled_DESC = 'disabled_DESC',
  Icon_ASC = 'icon_ASC',
  Icon_DESC = 'icon_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Title_ASC = 'title_ASC',
  Title_DESC = 'title_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
  Url_ASC = 'url_ASC',
  Url_DESC = 'url_DESC',
}

/** Record of type Button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  disabled?: Maybe<Scalars['BooleanType']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

/** Record of type Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CarouselModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CarouselModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  cards?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CarouselModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Carousel (carousel) */
export type CarouselRecord = RecordInterface & {
  __typename?: 'CarouselRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  cards: Array<TestimonialCardRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Carousel (carousel) */
export type CarouselRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CaseStudyCardModelBodyField = {
  __typename?: 'CaseStudyCardModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type CaseStudyCardModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CaseStudyCardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  internalName?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CaseStudyCardModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Case Study Card (case_study_card) */
export type CaseStudyCardRecord = RecordInterface & {
  __typename?: 'CaseStudyCardRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<CaseStudyCardModelBodyField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  internalName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Case Study Card (case_study_card) */
export type CaseStudyCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CategoryModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum CategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Name_ASC = 'name_ASC',
  Name_DESC = 'name_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Category (category) */
export type CategoryRecord = RecordInterface & {
  __typename?: 'CategoryRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Category (category) */
export type CategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow',
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

export type CompanyModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<CompanyModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  logo?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  website?: InputMaybe<StringFilter>;
};

export enum CompanyModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Name_ASC = 'name_ASC',
  Name_DESC = 'name_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
  Website_ASC = 'website_ASC',
  Website_DESC = 'website_DESC',
}

/** Record of type Company (company) */
export type CompanyRecord = RecordInterface & {
  __typename?: 'CompanyRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  logo?: Maybe<FileField>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

/** Record of type Company (company) */
export type CompanyRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication',
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};

export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};

export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};

export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: InputMaybe<Scalars['Float']>;
  quality?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};

export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Record of type Global Nav (global_nav) */
export type GlobalNavRecord = RecordInterface & {
  __typename?: 'GlobalNavRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  links: Array<ButtonRecord>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Global Nav (global_nav) */
export type GlobalNavRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

export type HomepageModelComponentsField = CarouselRecord | SwitchbackRecord;

export type HomepageModelWorksIntroField = {
  __typename?: 'HomepageModelWorksIntroField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Homepage (homepage) */
export type HomepageRecord = RecordInterface & {
  __typename?: 'HomepageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  aboutMe?: Maybe<SwitchbackRecord>;
  components: Array<HomepageModelComponentsField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<SeoField>;
  testimonials: Array<TestimonialCardRecord>;
  updatedAt: Scalars['DateTime'];
  works: Array<WorkRecord>;
  worksHeading?: Maybe<Scalars['String']>;
  worksIntro?: Maybe<HomepageModelWorksIntroField>;
};

/** Record of type Homepage (homepage) */
export type HomepageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Image (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  media?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
};

/** Block of type Image (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye',
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight',
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit',
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width',
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb',
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid',
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale',
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v',
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp',
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block',
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale',
}

export enum ImgixParamsMarkTile {
  Grid = 'grid',
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json',
}

export enum ImgixParamsTransparency {
  Grid = 'grid',
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color',
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top',
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start',
}

export enum ImgixParamsTxtFit {
  Max = 'max',
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated',
}

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
}

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

export type PageGeneratorModelComponentsField =
  | AlternatingSwitchbackRecord
  | BlogListingRecord
  | CarouselRecord
  | SwitchbackRecord;

export type PageGeneratorModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<PageGeneratorModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  components?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PageGeneratorModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Page Generator (page_generator) */
export type PageGeneratorRecord = RecordInterface & {
  __typename?: 'PageGeneratorRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  components: Array<PageGeneratorModelComponentsField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Page Generator (page_generator) */
export type PageGeneratorRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PersonModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  company?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  website?: InputMaybe<StringFilter>;
};

export enum PersonModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  FirstName_ASC = 'firstName_ASC',
  FirstName_DESC = 'firstName_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  LastName_ASC = 'lastName_ASC',
  LastName_DESC = 'lastName_DESC',
  Role_ASC = 'role_ASC',
  Role_DESC = 'role_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
  Website_ASC = 'website_ASC',
  Website_DESC = 'website_DESC',
}

/** Record of type Person (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  company?: Maybe<CompanyRecord>;
  createdAt: Scalars['DateTime'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<FileField>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

/** Record of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAlternatingSwitchbacksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBlogListingsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBlogPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allButtonsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCarouselsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCaseStudyCardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCompaniesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPageGeneratorsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSwitchbacksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTechStacksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTestimonialCardsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  /** Returns meta information regarding a record collection */
  _allWorksMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allAlternatingSwitchbacks: Array<AlternatingSwitchbackRecord>;
  /** Returns a collection of records */
  allBlogListings: Array<BlogListingRecord>;
  /** Returns a collection of records */
  allBlogPosts: Array<BlogPostRecord>;
  /** Returns a collection of records */
  allButtons: Array<ButtonRecord>;
  /** Returns a collection of records */
  allCarousels: Array<CarouselRecord>;
  /** Returns a collection of records */
  allCaseStudyCards: Array<CaseStudyCardRecord>;
  /** Returns a collection of records */
  allCategories: Array<CategoryRecord>;
  /** Returns a collection of records */
  allCompanies: Array<CompanyRecord>;
  /** Returns a collection of records */
  allPageGenerators: Array<PageGeneratorRecord>;
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>;
  /** Returns a collection of records */
  allSwitchbacks: Array<SwitchbackRecord>;
  /** Returns a collection of records */
  allTechStacks: Array<TechStackRecord>;
  /** Returns a collection of records */
  allTestimonialCards: Array<TestimonialCardRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allWorks: Array<WorkRecord>;
  /** Returns a specific record */
  alternatingSwitchback?: Maybe<AlternatingSwitchbackRecord>;
  /** Returns a specific record */
  blogListing?: Maybe<BlogListingRecord>;
  /** Returns the single instance record */
  blogPage?: Maybe<BlogPageRecord>;
  /** Returns a specific record */
  blogPost?: Maybe<BlogPostRecord>;
  /** Returns a specific record */
  button?: Maybe<ButtonRecord>;
  /** Returns a specific record */
  carousel?: Maybe<CarouselRecord>;
  /** Returns a specific record */
  caseStudyCard?: Maybe<CaseStudyCardRecord>;
  /** Returns a specific record */
  category?: Maybe<CategoryRecord>;
  /** Returns a specific record */
  company?: Maybe<CompanyRecord>;
  /** Returns the single instance record */
  globalNav?: Maybe<GlobalNavRecord>;
  /** Returns the single instance record */
  homepage?: Maybe<HomepageRecord>;
  /** Returns a specific record */
  pageGenerator?: Maybe<PageGeneratorRecord>;
  /** Returns a specific record */
  person?: Maybe<PersonRecord>;
  /** Returns a specific record */
  switchback?: Maybe<SwitchbackRecord>;
  /** Returns a specific record */
  techStack?: Maybe<TechStackRecord>;
  /** Returns a specific record */
  testimonialCard?: Maybe<TestimonialCardRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  work?: Maybe<WorkRecord>;
};

/** The query root for this schema */
export type Query_AllAlternatingSwitchbacksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllBlogListingsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogListingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllBlogPostsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogPostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllButtonsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCarouselsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CarouselModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCaseStudyCardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllCompaniesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPageGeneratorsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageGeneratorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllSwitchbacksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SwitchbackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTechStacksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TechStackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllTestimonialCardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_AllWorksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryAllAlternatingSwitchbacksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllBlogListingsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogListingModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogListingModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllBlogPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogPostModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogPostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllButtonsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllCarouselsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CarouselModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CarouselModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllCaseStudyCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllCompaniesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllPageGeneratorsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageGeneratorModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageGeneratorModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllSwitchbacksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SwitchbackModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SwitchbackModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllTechStacksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TechStackModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TechStackModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllTestimonialCardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialCardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialCardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAllWorksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};

/** The query root for this schema */
export type QueryAlternatingSwitchbackArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryBlogListingArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogListingModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogListingModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryBlogPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryBlogPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogPostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogPostModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryButtonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ButtonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCarouselArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CarouselModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CarouselModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCaseStudyCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CaseStudyCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryCompanyArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CompanyModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryGlobalNavArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryHomepageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** The query root for this schema */
export type QueryPageGeneratorArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageGeneratorModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageGeneratorModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
};

/** The query root for this schema */
export type QuerySwitchbackArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SwitchbackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SwitchbackModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTechStackArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TechStackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TechStackModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryTestimonialCardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialCardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialCardModelOrderBy>>>;
};

/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

/** The query root for this schema */
export type QueryWorkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<WorkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<WorkModelOrderBy>>>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};

export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
};

export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};

export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  En = 'en',
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Structured Text fields */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type SwitchbackModelBodyField = {
  __typename?: 'SwitchbackModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type SwitchbackModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<SwitchbackModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  buttons?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  heading?: InputMaybe<StringFilter>;
  headingAs?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  internalName?: InputMaybe<StringFilter>;
  reverse?: InputMaybe<BooleanFilter>;
  sectionBackgroundColor?: InputMaybe<StringFilter>;
  sectionId?: InputMaybe<StringFilter>;
  showDots?: InputMaybe<BooleanFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum SwitchbackModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  HeadingAs_ASC = 'headingAs_ASC',
  HeadingAs_DESC = 'headingAs_DESC',
  Heading_ASC = 'heading_ASC',
  Heading_DESC = 'heading_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Reverse_ASC = 'reverse_ASC',
  Reverse_DESC = 'reverse_DESC',
  SectionBackgroundColor_ASC = 'sectionBackgroundColor_ASC',
  SectionBackgroundColor_DESC = 'sectionBackgroundColor_DESC',
  SectionId_ASC = 'sectionId_ASC',
  SectionId_DESC = 'sectionId_DESC',
  ShowDots_ASC = 'showDots_ASC',
  ShowDots_DESC = 'showDots_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Switchback (switchback) */
export type SwitchbackRecord = RecordInterface & {
  __typename?: 'SwitchbackRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  body?: Maybe<SwitchbackModelBodyField>;
  buttons: Array<ButtonRecord>;
  createdAt: Scalars['DateTime'];
  heading?: Maybe<Scalars['String']>;
  headingAs?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  internalName?: Maybe<Scalars['String']>;
  reverse?: Maybe<Scalars['BooleanType']>;
  sectionBackgroundColor?: Maybe<Scalars['String']>;
  sectionId?: Maybe<Scalars['String']>;
  showDots?: Maybe<Scalars['BooleanType']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Switchback (switchback) */
export type SwitchbackRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type TechStackModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<TechStackModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<FileFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum TechStackModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Title_ASC = 'title_ASC',
  Title_DESC = 'title_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Tech Stack (tech_stack) */
export type TechStackRecord = RecordInterface & {
  __typename?: 'TechStackRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Tech Stack (tech_stack) */
export type TechStackRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TestimonialCardModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<TestimonialCardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  internalName?: InputMaybe<StringFilter>;
  person?: InputMaybe<LinkFilter>;
  quote?: InputMaybe<StructuredTextFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum TestimonialCardModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

export type TestimonialCardModelQuoteField = {
  __typename?: 'TestimonialCardModelQuoteField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Testimonial Card (testimonial_card) */
export type TestimonialCardRecord = RecordInterface & {
  __typename?: 'TestimonialCardRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  internalName?: Maybe<Scalars['String']>;
  person?: Maybe<PersonRecord>;
  quote?: Maybe<TestimonialCardModelQuoteField>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Testimonial Card (testimonial_card) */
export type TestimonialCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  Basename_ASC = 'basename_ASC',
  Basename_DESC = 'basename_DESC',
  Filename_ASC = 'filename_ASC',
  Filename_DESC = 'filename_DESC',
  Format_ASC = 'format_ASC',
  Format_DESC = 'format_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  MimeType_ASC = 'mimeType_ASC',
  MimeType_DESC = 'mimeType_DESC',
  Resolution_ASC = 'resolution_ASC',
  Resolution_DESC = 'resolution_DESC',
  Size_ASC = 'size_ASC',
  Size_DESC = 'size_DESC',
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square',
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video',
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};

export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium',
}

export type WorkModelBodyField = {
  __typename?: 'WorkModelBodyField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export type WorkModelFilter = {
  OR?: InputMaybe<Array<InputMaybe<WorkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  bannerImage?: InputMaybe<FileFilter>;
  body?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  ctas?: InputMaybe<LinksFilter>;
  heading?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  information?: InputMaybe<StructuredTextFilter>;
  internalName?: InputMaybe<StringFilter>;
  seo?: InputMaybe<SeoFilter>;
  slider?: InputMaybe<LinksFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  techStack?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export type WorkModelInformationField = {
  __typename?: 'WorkModelInformationField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

export enum WorkModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  CreatedAt_ASC = 'createdAt_ASC',
  CreatedAt_DESC = 'createdAt_DESC',
  Heading_ASC = 'heading_ASC',
  Heading_DESC = 'heading_DESC',
  Id_ASC = 'id_ASC',
  Id_DESC = 'id_DESC',
  InternalName_ASC = 'internalName_ASC',
  InternalName_DESC = 'internalName_DESC',
  Subtitle_ASC = 'subtitle_ASC',
  Subtitle_DESC = 'subtitle_DESC',
  Title_ASC = 'title_ASC',
  Title_DESC = 'title_DESC',
  UpdatedAt_ASC = 'updatedAt_ASC',
  UpdatedAt_DESC = 'updatedAt_DESC',
}

/** Record of type Work (work) */
export type WorkRecord = RecordInterface & {
  __typename?: 'WorkRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  bannerImage?: Maybe<FileField>;
  body?: Maybe<WorkModelBodyField>;
  createdAt: Scalars['DateTime'];
  ctas: Array<ButtonRecord>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  information?: Maybe<WorkModelInformationField>;
  internalName?: Maybe<Scalars['String']>;
  seo?: Maybe<SeoField>;
  slider: Array<CaseStudyCardRecord>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  techStack: Array<TechStackRecord>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** Record of type Work (work) */
export type WorkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

declare global {
  export type ImageFragment = {
    __typename: 'FileField';
    id: string;
    alt?: string | null;
    blurhash?: string | null;
    height?: number | null;
    width?: number | null;
    url: string;
  };

  export type CompanyFragment = {
    __typename: 'CompanyRecord';
    id: string;
    internalName?: string | null;
    name?: string | null;
    website?: string | null;
    logo?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
  };

  export type StructuredTextImageFragment = {
    __typename?: 'ImageRecord';
    id: string;
    media?: {
      __typename: 'FileField';
      title?: string | null;
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
  };

  export type ButtonFragment = {
    __typename: 'ButtonRecord';
    id: string;
    internalName?: string | null;
    disabled?: boolean | null;
    icon?: string | null;
    title?: string | null;
    url?: string | null;
  };

  export type CaseStudyCardFragment = {
    __typename: 'CaseStudyCardRecord';
    id: string;
    internalName?: string | null;
    image?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
    body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
  };

  export type PersonFragment = {
    __typename: 'PersonRecord';
    id: string;
    internalName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    website?: string | null;
    role?: string | null;
    company?: {
      __typename: 'CompanyRecord';
      id: string;
      internalName?: string | null;
      name?: string | null;
      website?: string | null;
      logo?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
    thumbnail?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
  };

  export type TestimonialCardFragment = {
    __typename: 'TestimonialCardRecord';
    id: string;
    internalName?: string | null;
    quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
    person?: {
      __typename: 'PersonRecord';
      id: string;
      internalName?: string | null;
      firstName?: string | null;
      lastName?: string | null;
      website?: string | null;
      role?: string | null;
      company?: {
        __typename: 'CompanyRecord';
        id: string;
        internalName?: string | null;
        name?: string | null;
        website?: string | null;
        logo?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      thumbnail?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
  };

  export type TechStackFragment = {
    __typename: 'TechStackRecord';
    id: string;
    internalName?: string | null;
    title?: string | null;
    thumbnail?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
  };

  export type SwitchBackFragment = {
    __typename: 'SwitchbackRecord';
    id: string;
    internalName?: string | null;
    sectionId?: string | null;
    sectionBackgroundColor?: string | null;
    reverse?: boolean | null;
    heading?: string | null;
    headingAs?: string | null;
    showDots?: boolean | null;
    body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
    image?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
    buttons: Array<{
      __typename: 'ButtonRecord';
      id: string;
      internalName?: string | null;
      disabled?: boolean | null;
      icon?: string | null;
      title?: string | null;
      url?: string | null;
    }>;
  };

  export type CategoryFragment = {
    __typename: 'CategoryRecord';
    id: string;
    internalName?: string | null;
    name?: string | null;
    slug?: string | null;
  };

  export type CarouselFragment = {
    __typename: 'CarouselRecord';
    id: string;
    internalName?: string | null;
    cards: Array<{
      __typename: 'TestimonialCardRecord';
      id: string;
      internalName?: string | null;
      quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
      person?: {
        __typename: 'PersonRecord';
        id: string;
        internalName?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        website?: string | null;
        role?: string | null;
        company?: {
          __typename: 'CompanyRecord';
          id: string;
          internalName?: string | null;
          name?: string | null;
          website?: string | null;
          logo?: {
            __typename: 'FileField';
            id: string;
            alt?: string | null;
            blurhash?: string | null;
            height?: number | null;
            width?: number | null;
            url: string;
          } | null;
        } | null;
        thumbnail?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
    }>;
  };

  export type AlternatingSwitchbackFragment = {
    __typename: 'AlternatingSwitchbackRecord';
    id: string;
    internalName?: string | null;
    sectionId?: string | null;
    heading?: string | null;
    headingAs?: string | null;
    body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
    cards: Array<{
      __typename: 'WorkRecord';
      id: string;
      internalName?: string | null;
      slug?: string | null;
      title?: string | null;
      subtitle?: string | null;
      heading?: string | null;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
      information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
      bannerImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      ctas: Array<{
        __typename: 'ButtonRecord';
        id: string;
        internalName?: string | null;
        disabled?: boolean | null;
        icon?: string | null;
        title?: string | null;
        url?: string | null;
      }>;
      techStack: Array<{
        __typename: 'TechStackRecord';
        id: string;
        internalName?: string | null;
        title?: string | null;
        thumbnail?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      }>;
      slider: Array<{
        __typename: 'CaseStudyCardRecord';
        id: string;
        internalName?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
        body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
      }>;
    }>;
  };

  export type WorkFragment = {
    __typename: 'WorkRecord';
    id: string;
    internalName?: string | null;
    slug?: string | null;
    title?: string | null;
    subtitle?: string | null;
    heading?: string | null;
    seo?: {
      __typename?: 'SeoField';
      description?: string | null;
      title?: string | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
    body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
    information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
    bannerImage?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
    ctas: Array<{
      __typename: 'ButtonRecord';
      id: string;
      internalName?: string | null;
      disabled?: boolean | null;
      icon?: string | null;
      title?: string | null;
      url?: string | null;
    }>;
    techStack: Array<{
      __typename: 'TechStackRecord';
      id: string;
      internalName?: string | null;
      title?: string | null;
      thumbnail?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    }>;
    slider: Array<{
      __typename: 'CaseStudyCardRecord';
      id: string;
      internalName?: string | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
    }>;
  };

  export type BlogPostFragment = {
    __typename: 'BlogPostRecord';
    id: string;
    internalName?: string | null;
    title?: string | null;
    subtitle?: string | null;
    publishDate?: string | null;
    slug?: string | null;
    seo?: {
      __typename?: 'SeoField';
      description?: string | null;
      title?: string | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
    categories: Array<{
      __typename: 'CategoryRecord';
      id: string;
      internalName?: string | null;
      name?: string | null;
      slug?: string | null;
    }>;
    body?: {
      __typename?: 'BlogPostModelBodyField';
      value: unknown;
      blocks: Array<{
        __typename?: 'ImageRecord';
        id: string;
        media?: {
          __typename: 'FileField';
          title?: string | null;
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      }>;
    } | null;
    featuredImage?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
  };

  export type BlogCardFragment = {
    __typename: 'BlogPostRecord';
    id: string;
    internalName?: string | null;
    title?: string | null;
    publishDate?: string | null;
    slug?: string | null;
    categories: Array<{
      __typename: 'CategoryRecord';
      id: string;
      internalName?: string | null;
      name?: string | null;
      slug?: string | null;
    }>;
    body?: { __typename?: 'BlogPostModelBodyField'; value: unknown } | null;
    featuredImage?: {
      __typename: 'FileField';
      id: string;
      alt?: string | null;
      blurhash?: string | null;
      height?: number | null;
      width?: number | null;
      url: string;
    } | null;
    excerpt?: { __typename?: 'BlogPostModelExcerptField'; value: unknown } | null;
  };

  export type BlogListingFragment = {
    __typename: 'BlogListingRecord';
    id: string;
    internalName?: string | null;
    blogs: Array<{
      __typename: 'BlogPostRecord';
      id: string;
      internalName?: string | null;
      title?: string | null;
      publishDate?: string | null;
      slug?: string | null;
      categories: Array<{
        __typename: 'CategoryRecord';
        id: string;
        internalName?: string | null;
        name?: string | null;
        slug?: string | null;
      }>;
      body?: { __typename?: 'BlogPostModelBodyField'; value: unknown } | null;
      featuredImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      excerpt?: { __typename?: 'BlogPostModelExcerptField'; value: unknown } | null;
    }>;
  };

  export type BlogPageFragment = {
    __typename: 'BlogPageRecord';
    id: string;
    seo?: {
      __typename?: 'SeoField';
      description?: string | null;
      title?: string | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
    switchback?: {
      __typename: 'SwitchbackRecord';
      id: string;
      internalName?: string | null;
      sectionId?: string | null;
      sectionBackgroundColor?: string | null;
      reverse?: boolean | null;
      heading?: string | null;
      headingAs?: string | null;
      showDots?: boolean | null;
      body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      buttons: Array<{
        __typename: 'ButtonRecord';
        id: string;
        internalName?: string | null;
        disabled?: boolean | null;
        icon?: string | null;
        title?: string | null;
        url?: string | null;
      }>;
    } | null;
    componentGenerator?: {
      __typename?: 'PageGeneratorRecord';
      components: Array<
        | {
            __typename: 'AlternatingSwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            heading?: string | null;
            headingAs?: string | null;
            body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
            cards: Array<{
              __typename: 'WorkRecord';
              id: string;
              internalName?: string | null;
              slug?: string | null;
              title?: string | null;
              subtitle?: string | null;
              heading?: string | null;
              seo?: {
                __typename?: 'SeoField';
                description?: string | null;
                title?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
              body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
              information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
              bannerImage?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
              ctas: Array<{
                __typename: 'ButtonRecord';
                id: string;
                internalName?: string | null;
                disabled?: boolean | null;
                icon?: string | null;
                title?: string | null;
                url?: string | null;
              }>;
              techStack: Array<{
                __typename: 'TechStackRecord';
                id: string;
                internalName?: string | null;
                title?: string | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              }>;
              slider: Array<{
                __typename: 'CaseStudyCardRecord';
                id: string;
                internalName?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
                body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
              }>;
            }>;
          }
        | { __typename?: 'BlogListingRecord' }
        | {
            __typename: 'CarouselRecord';
            id: string;
            internalName?: string | null;
            cards: Array<{
              __typename: 'TestimonialCardRecord';
              id: string;
              internalName?: string | null;
              quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
              person?: {
                __typename: 'PersonRecord';
                id: string;
                internalName?: string | null;
                firstName?: string | null;
                lastName?: string | null;
                website?: string | null;
                role?: string | null;
                company?: {
                  __typename: 'CompanyRecord';
                  id: string;
                  internalName?: string | null;
                  name?: string | null;
                  website?: string | null;
                  logo?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                } | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
            }>;
          }
        | {
            __typename: 'SwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            sectionBackgroundColor?: string | null;
            reverse?: boolean | null;
            heading?: string | null;
            headingAs?: string | null;
            showDots?: boolean | null;
            body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
            image?: {
              __typename: 'FileField';
              id: string;
              alt?: string | null;
              blurhash?: string | null;
              height?: number | null;
              width?: number | null;
              url: string;
            } | null;
            buttons: Array<{
              __typename: 'ButtonRecord';
              id: string;
              internalName?: string | null;
              disabled?: boolean | null;
              icon?: string | null;
              title?: string | null;
              url?: string | null;
            }>;
          }
      >;
    } | null;
  };

  export type PageGenFragment = {
    __typename: 'PageGeneratorRecord';
    internalName?: string | null;
    id: string;
    slug?: string | null;
    seo?: {
      __typename?: 'SeoField';
      description?: string | null;
      title?: string | null;
      image?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
    components: Array<
      | {
          __typename: 'AlternatingSwitchbackRecord';
          id: string;
          internalName?: string | null;
          sectionId?: string | null;
          heading?: string | null;
          headingAs?: string | null;
          body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
          cards: Array<{
            __typename: 'WorkRecord';
            id: string;
            internalName?: string | null;
            slug?: string | null;
            title?: string | null;
            subtitle?: string | null;
            heading?: string | null;
            seo?: {
              __typename?: 'SeoField';
              description?: string | null;
              title?: string | null;
              image?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
            } | null;
            body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
            information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
            bannerImage?: {
              __typename: 'FileField';
              id: string;
              alt?: string | null;
              blurhash?: string | null;
              height?: number | null;
              width?: number | null;
              url: string;
            } | null;
            ctas: Array<{
              __typename: 'ButtonRecord';
              id: string;
              internalName?: string | null;
              disabled?: boolean | null;
              icon?: string | null;
              title?: string | null;
              url?: string | null;
            }>;
            techStack: Array<{
              __typename: 'TechStackRecord';
              id: string;
              internalName?: string | null;
              title?: string | null;
              thumbnail?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
            }>;
            slider: Array<{
              __typename: 'CaseStudyCardRecord';
              id: string;
              internalName?: string | null;
              image?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
              body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
            }>;
          }>;
        }
      | { __typename?: 'BlogListingRecord' }
      | {
          __typename: 'CarouselRecord';
          id: string;
          internalName?: string | null;
          cards: Array<{
            __typename: 'TestimonialCardRecord';
            id: string;
            internalName?: string | null;
            quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
            person?: {
              __typename: 'PersonRecord';
              id: string;
              internalName?: string | null;
              firstName?: string | null;
              lastName?: string | null;
              website?: string | null;
              role?: string | null;
              company?: {
                __typename: 'CompanyRecord';
                id: string;
                internalName?: string | null;
                name?: string | null;
                website?: string | null;
                logo?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
              thumbnail?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
            } | null;
          }>;
        }
      | {
          __typename: 'SwitchbackRecord';
          id: string;
          internalName?: string | null;
          sectionId?: string | null;
          sectionBackgroundColor?: string | null;
          reverse?: boolean | null;
          heading?: string | null;
          headingAs?: string | null;
          showDots?: boolean | null;
          body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
          image?: {
            __typename: 'FileField';
            id: string;
            alt?: string | null;
            blurhash?: string | null;
            height?: number | null;
            width?: number | null;
            url: string;
          } | null;
          buttons: Array<{
            __typename: 'ButtonRecord';
            id: string;
            internalName?: string | null;
            disabled?: boolean | null;
            icon?: string | null;
            title?: string | null;
            url?: string | null;
          }>;
        }
    >;
  };

  export type WorkPageSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type WorkPageSlugsQuery = {
    __typename?: 'Query';
    allWorks: Array<{ __typename?: 'WorkRecord'; slug?: string | null }>;
  };

  export type PageSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type PageSlugsQuery = {
    __typename?: 'Query';
    allPageGenerators: Array<{ __typename?: 'PageGeneratorRecord'; slug?: string | null }>;
  };

  export type PageDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type PageDataQuery = {
    __typename?: 'Query';
    pageGenerator?: {
      __typename: 'PageGeneratorRecord';
      internalName?: string | null;
      id: string;
      slug?: string | null;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      components: Array<
        | {
            __typename: 'AlternatingSwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            heading?: string | null;
            headingAs?: string | null;
            body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
            cards: Array<{
              __typename: 'WorkRecord';
              id: string;
              internalName?: string | null;
              slug?: string | null;
              title?: string | null;
              subtitle?: string | null;
              heading?: string | null;
              seo?: {
                __typename?: 'SeoField';
                description?: string | null;
                title?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
              body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
              information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
              bannerImage?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
              ctas: Array<{
                __typename: 'ButtonRecord';
                id: string;
                internalName?: string | null;
                disabled?: boolean | null;
                icon?: string | null;
                title?: string | null;
                url?: string | null;
              }>;
              techStack: Array<{
                __typename: 'TechStackRecord';
                id: string;
                internalName?: string | null;
                title?: string | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              }>;
              slider: Array<{
                __typename: 'CaseStudyCardRecord';
                id: string;
                internalName?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
                body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
              }>;
            }>;
          }
        | { __typename?: 'BlogListingRecord' }
        | {
            __typename: 'CarouselRecord';
            id: string;
            internalName?: string | null;
            cards: Array<{
              __typename: 'TestimonialCardRecord';
              id: string;
              internalName?: string | null;
              quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
              person?: {
                __typename: 'PersonRecord';
                id: string;
                internalName?: string | null;
                firstName?: string | null;
                lastName?: string | null;
                website?: string | null;
                role?: string | null;
                company?: {
                  __typename: 'CompanyRecord';
                  id: string;
                  internalName?: string | null;
                  name?: string | null;
                  website?: string | null;
                  logo?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                } | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
            }>;
          }
        | {
            __typename: 'SwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            sectionBackgroundColor?: string | null;
            reverse?: boolean | null;
            heading?: string | null;
            headingAs?: string | null;
            showDots?: boolean | null;
            body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
            image?: {
              __typename: 'FileField';
              id: string;
              alt?: string | null;
              blurhash?: string | null;
              height?: number | null;
              width?: number | null;
              url: string;
            } | null;
            buttons: Array<{
              __typename: 'ButtonRecord';
              id: string;
              internalName?: string | null;
              disabled?: boolean | null;
              icon?: string | null;
              title?: string | null;
              url?: string | null;
            }>;
          }
      >;
    } | null;
  };

  export type PageDataWithBlogsQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type PageDataWithBlogsQuery = {
    __typename?: 'Query';
    pageGenerator?: {
      __typename: 'PageGeneratorRecord';
      internalName?: string | null;
      id: string;
      slug?: string | null;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      components: Array<
        | {
            __typename: 'AlternatingSwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            heading?: string | null;
            headingAs?: string | null;
            body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
            cards: Array<{
              __typename: 'WorkRecord';
              id: string;
              internalName?: string | null;
              slug?: string | null;
              title?: string | null;
              subtitle?: string | null;
              heading?: string | null;
              seo?: {
                __typename?: 'SeoField';
                description?: string | null;
                title?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
              body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
              information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
              bannerImage?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
              ctas: Array<{
                __typename: 'ButtonRecord';
                id: string;
                internalName?: string | null;
                disabled?: boolean | null;
                icon?: string | null;
                title?: string | null;
                url?: string | null;
              }>;
              techStack: Array<{
                __typename: 'TechStackRecord';
                id: string;
                internalName?: string | null;
                title?: string | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              }>;
              slider: Array<{
                __typename: 'CaseStudyCardRecord';
                id: string;
                internalName?: string | null;
                image?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
                body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
              }>;
            }>;
          }
        | { __typename?: 'BlogListingRecord' }
        | {
            __typename: 'CarouselRecord';
            id: string;
            internalName?: string | null;
            cards: Array<{
              __typename: 'TestimonialCardRecord';
              id: string;
              internalName?: string | null;
              quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
              person?: {
                __typename: 'PersonRecord';
                id: string;
                internalName?: string | null;
                firstName?: string | null;
                lastName?: string | null;
                website?: string | null;
                role?: string | null;
                company?: {
                  __typename: 'CompanyRecord';
                  id: string;
                  internalName?: string | null;
                  name?: string | null;
                  website?: string | null;
                  logo?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                } | null;
                thumbnail?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
              } | null;
            }>;
          }
        | {
            __typename: 'SwitchbackRecord';
            id: string;
            internalName?: string | null;
            sectionId?: string | null;
            sectionBackgroundColor?: string | null;
            reverse?: boolean | null;
            heading?: string | null;
            headingAs?: string | null;
            showDots?: boolean | null;
            body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
            image?: {
              __typename: 'FileField';
              id: string;
              alt?: string | null;
              blurhash?: string | null;
              height?: number | null;
              width?: number | null;
              url: string;
            } | null;
            buttons: Array<{
              __typename: 'ButtonRecord';
              id: string;
              internalName?: string | null;
              disabled?: boolean | null;
              icon?: string | null;
              title?: string | null;
              url?: string | null;
            }>;
          }
      >;
    } | null;
    allBlogPosts: Array<{
      __typename: 'BlogPostRecord';
      id: string;
      internalName?: string | null;
      title?: string | null;
      publishDate?: string | null;
      slug?: string | null;
      categories: Array<{
        __typename: 'CategoryRecord';
        id: string;
        internalName?: string | null;
        name?: string | null;
        slug?: string | null;
      }>;
      body?: { __typename?: 'BlogPostModelBodyField'; value: unknown } | null;
      featuredImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      excerpt?: { __typename?: 'BlogPostModelExcerptField'; value: unknown } | null;
    }>;
  };

  export type WorkPageDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type WorkPageDataQuery = {
    __typename?: 'Query';
    work?: {
      __typename: 'WorkRecord';
      id: string;
      internalName?: string | null;
      slug?: string | null;
      title?: string | null;
      subtitle?: string | null;
      heading?: string | null;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
      information?: { __typename?: 'WorkModelInformationField'; value: unknown; blocks: Array<string> } | null;
      bannerImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      ctas: Array<{
        __typename: 'ButtonRecord';
        id: string;
        internalName?: string | null;
        disabled?: boolean | null;
        icon?: string | null;
        title?: string | null;
        url?: string | null;
      }>;
      techStack: Array<{
        __typename: 'TechStackRecord';
        id: string;
        internalName?: string | null;
        title?: string | null;
        thumbnail?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      }>;
      slider: Array<{
        __typename: 'CaseStudyCardRecord';
        id: string;
        internalName?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
        body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
      }>;
    } | null;
  };

  export type BlogPageDataQueryVariables = Exact<{ [key: string]: never }>;

  export type BlogPageDataQuery = {
    __typename?: 'Query';
    blogPage?: {
      __typename: 'BlogPageRecord';
      id: string;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      switchback?: {
        __typename: 'SwitchbackRecord';
        id: string;
        internalName?: string | null;
        sectionId?: string | null;
        sectionBackgroundColor?: string | null;
        reverse?: boolean | null;
        heading?: string | null;
        headingAs?: string | null;
        showDots?: boolean | null;
        body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
        buttons: Array<{
          __typename: 'ButtonRecord';
          id: string;
          internalName?: string | null;
          disabled?: boolean | null;
          icon?: string | null;
          title?: string | null;
          url?: string | null;
        }>;
      } | null;
      componentGenerator?: {
        __typename?: 'PageGeneratorRecord';
        components: Array<
          | {
              __typename: 'AlternatingSwitchbackRecord';
              id: string;
              internalName?: string | null;
              sectionId?: string | null;
              heading?: string | null;
              headingAs?: string | null;
              body?: { __typename?: 'AlternatingSwitchbackModelBodyField'; value: unknown } | null;
              cards: Array<{
                __typename: 'WorkRecord';
                id: string;
                internalName?: string | null;
                slug?: string | null;
                title?: string | null;
                subtitle?: string | null;
                heading?: string | null;
                seo?: {
                  __typename?: 'SeoField';
                  description?: string | null;
                  title?: string | null;
                  image?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                } | null;
                body?: { __typename?: 'WorkModelBodyField'; value: unknown; blocks: Array<string> } | null;
                information?: {
                  __typename?: 'WorkModelInformationField';
                  value: unknown;
                  blocks: Array<string>;
                } | null;
                bannerImage?: {
                  __typename: 'FileField';
                  id: string;
                  alt?: string | null;
                  blurhash?: string | null;
                  height?: number | null;
                  width?: number | null;
                  url: string;
                } | null;
                ctas: Array<{
                  __typename: 'ButtonRecord';
                  id: string;
                  internalName?: string | null;
                  disabled?: boolean | null;
                  icon?: string | null;
                  title?: string | null;
                  url?: string | null;
                }>;
                techStack: Array<{
                  __typename: 'TechStackRecord';
                  id: string;
                  internalName?: string | null;
                  title?: string | null;
                  thumbnail?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                }>;
                slider: Array<{
                  __typename: 'CaseStudyCardRecord';
                  id: string;
                  internalName?: string | null;
                  image?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                  body?: { __typename?: 'CaseStudyCardModelBodyField'; value: unknown } | null;
                }>;
              }>;
            }
          | { __typename?: 'BlogListingRecord' }
          | {
              __typename: 'CarouselRecord';
              id: string;
              internalName?: string | null;
              cards: Array<{
                __typename: 'TestimonialCardRecord';
                id: string;
                internalName?: string | null;
                quote?: { __typename?: 'TestimonialCardModelQuoteField'; value: unknown } | null;
                person?: {
                  __typename: 'PersonRecord';
                  id: string;
                  internalName?: string | null;
                  firstName?: string | null;
                  lastName?: string | null;
                  website?: string | null;
                  role?: string | null;
                  company?: {
                    __typename: 'CompanyRecord';
                    id: string;
                    internalName?: string | null;
                    name?: string | null;
                    website?: string | null;
                    logo?: {
                      __typename: 'FileField';
                      id: string;
                      alt?: string | null;
                      blurhash?: string | null;
                      height?: number | null;
                      width?: number | null;
                      url: string;
                    } | null;
                  } | null;
                  thumbnail?: {
                    __typename: 'FileField';
                    id: string;
                    alt?: string | null;
                    blurhash?: string | null;
                    height?: number | null;
                    width?: number | null;
                    url: string;
                  } | null;
                } | null;
              }>;
            }
          | {
              __typename: 'SwitchbackRecord';
              id: string;
              internalName?: string | null;
              sectionId?: string | null;
              sectionBackgroundColor?: string | null;
              reverse?: boolean | null;
              heading?: string | null;
              headingAs?: string | null;
              showDots?: boolean | null;
              body?: { __typename?: 'SwitchbackModelBodyField'; value: unknown } | null;
              image?: {
                __typename: 'FileField';
                id: string;
                alt?: string | null;
                blurhash?: string | null;
                height?: number | null;
                width?: number | null;
                url: string;
              } | null;
              buttons: Array<{
                __typename: 'ButtonRecord';
                id: string;
                internalName?: string | null;
                disabled?: boolean | null;
                icon?: string | null;
                title?: string | null;
                url?: string | null;
              }>;
            }
        >;
      } | null;
    } | null;
    allBlogPosts: Array<{
      __typename: 'BlogPostRecord';
      id: string;
      internalName?: string | null;
      title?: string | null;
      publishDate?: string | null;
      slug?: string | null;
      categories: Array<{
        __typename: 'CategoryRecord';
        id: string;
        internalName?: string | null;
        name?: string | null;
        slug?: string | null;
      }>;
      body?: { __typename?: 'BlogPostModelBodyField'; value: unknown } | null;
      featuredImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
      excerpt?: { __typename?: 'BlogPostModelExcerptField'; value: unknown } | null;
    }>;
  };

  export type BlogPostSlugsQueryVariables = Exact<{ [key: string]: never }>;

  export type BlogPostSlugsQuery = {
    __typename?: 'Query';
    allBlogPosts: Array<{ __typename?: 'BlogPostRecord'; slug?: string | null }>;
  };

  export type BlogPostDataQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
  }>;

  export type BlogPostDataQuery = {
    __typename?: 'Query';
    blogPost?: {
      __typename: 'BlogPostRecord';
      id: string;
      internalName?: string | null;
      title?: string | null;
      subtitle?: string | null;
      publishDate?: string | null;
      slug?: string | null;
      seo?: {
        __typename?: 'SeoField';
        description?: string | null;
        title?: string | null;
        image?: {
          __typename: 'FileField';
          id: string;
          alt?: string | null;
          blurhash?: string | null;
          height?: number | null;
          width?: number | null;
          url: string;
        } | null;
      } | null;
      categories: Array<{
        __typename: 'CategoryRecord';
        id: string;
        internalName?: string | null;
        name?: string | null;
        slug?: string | null;
      }>;
      body?: {
        __typename?: 'BlogPostModelBodyField';
        value: unknown;
        blocks: Array<{
          __typename?: 'ImageRecord';
          id: string;
          media?: {
            __typename: 'FileField';
            title?: string | null;
            id: string;
            alt?: string | null;
            blurhash?: string | null;
            height?: number | null;
            width?: number | null;
            url: string;
          } | null;
        }>;
      } | null;
      featuredImage?: {
        __typename: 'FileField';
        id: string;
        alt?: string | null;
        blurhash?: string | null;
        height?: number | null;
        width?: number | null;
        url: string;
      } | null;
    } | null;
  };
}
export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'FileField' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
          { kind: 'Field', name: { kind: 'Name', value: 'blurhash' } },
          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>;
export const CategoryFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Category' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CategoryRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoryFragment, unknown>;
export const StructuredTextImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'StructuredTextImage' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ImageRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'media' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } },
              ],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<StructuredTextImageFragment, unknown>;
export const BlogPostFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BlogPost' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BlogPostRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Category' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'blocks' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'StructuredTextImage' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
    ...CategoryFragmentDoc.definitions,
    ...StructuredTextImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogPostFragment, unknown>;
export const BlogCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BlogCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BlogPostRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'publishDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'categories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Category' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'featuredImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'excerpt' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
        ],
      },
    },
    ...CategoryFragmentDoc.definitions,
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogCardFragment, unknown>;
export const BlogListingFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BlogListing' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BlogListingRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogs' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BlogCard' } }],
            },
          },
        ],
      },
    },
    ...BlogCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogListingFragment, unknown>;
export const ButtonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Button' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ButtonRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'disabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'url' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ButtonFragment, unknown>;
export const SwitchBackFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SwitchBack' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SwitchbackRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sectionBackgroundColor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'reverse' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'headingAs' } },
          { kind: 'Field', name: { kind: 'Name', value: 'showDots' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'buttons' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Button' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
    ...ButtonFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<SwitchBackFragment, unknown>;
export const CompanyFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Company' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CompanyRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<CompanyFragment, unknown>;
export const PersonFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Person' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PersonRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'website' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'company' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Company' } }],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'role' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
        ],
      },
    },
    ...CompanyFragmentDoc.definitions,
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PersonFragment, unknown>;
export const TestimonialCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TestimonialCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TestimonialCardRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'quote' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'person' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Person' } }],
            },
          },
        ],
      },
    },
    ...PersonFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<TestimonialCardFragment, unknown>;
export const CarouselFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Carousel' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CarouselRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TestimonialCard' } }],
            },
          },
        ],
      },
    },
    ...TestimonialCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<CarouselFragment, unknown>;
export const TechStackFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'TechStack' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'TechStackRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'thumbnail' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<TechStackFragment, unknown>;
export const CaseStudyCardFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CaseStudyCard' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'CaseStudyCardRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'image' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<CaseStudyCardFragment, unknown>;
export const WorkFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Work' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'WorkRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                { kind: 'Field', name: { kind: 'Name', value: 'blocks' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'information' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                { kind: 'Field', name: { kind: 'Name', value: 'blocks' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bannerImage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'ctas' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Button' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'techStack' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'TechStack' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'slider' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'CaseStudyCard' } }],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
    ...ButtonFragmentDoc.definitions,
    ...TechStackFragmentDoc.definitions,
    ...CaseStudyCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<WorkFragment, unknown>;
export const AlternatingSwitchbackFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AlternatingSwitchback' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AlternatingSwitchbackRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sectionId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'heading' } },
          { kind: 'Field', name: { kind: 'Name', value: 'headingAs' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'body' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'value' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cards' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Work' } }],
            },
          },
        ],
      },
    },
    ...WorkFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<AlternatingSwitchbackFragment, unknown>;
export const BlogPageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'BlogPage' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BlogPageRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'switchback' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'SwitchBack' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'componentGenerator' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'components' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SwitchBack' } },
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Carousel' } },
                      { kind: 'FragmentSpread', name: { kind: 'Name', value: 'AlternatingSwitchback' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
    ...SwitchBackFragmentDoc.definitions,
    ...CarouselFragmentDoc.definitions,
    ...AlternatingSwitchbackFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogPageFragment, unknown>;
export const PageGenFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageGen' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageGeneratorRecord' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'internalName' } },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'seo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Image' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'components' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'SwitchBack' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'Carousel' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'AlternatingSwitchback' } },
              ],
            },
          },
        ],
      },
    },
    ...ImageFragmentDoc.definitions,
    ...SwitchBackFragmentDoc.definitions,
    ...CarouselFragmentDoc.definitions,
    ...AlternatingSwitchbackFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageGenFragment, unknown>;
export const WorkPageSlugsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'WorkPageSlugs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allWorks' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<WorkPageSlugsQuery, WorkPageSlugsQueryVariables>;
export const PageSlugsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageSlugs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPageGenerators' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageSlugsQuery, PageSlugsQueryVariables>;
export const PageDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageGenerator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageGen' } }],
            },
          },
        ],
      },
    },
    ...PageGenFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageDataQuery, PageDataQueryVariables>;
export const PageDataWithBlogsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageDataWithBlogs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageGenerator' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'PageGen' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allBlogPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'publishDate_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BlogCard' } }],
            },
          },
        ],
      },
    },
    ...PageGenFragmentDoc.definitions,
    ...BlogCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<PageDataWithBlogsQuery, PageDataWithBlogsQueryVariables>;
export const WorkPageDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'WorkPageData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'work' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Work' } }],
            },
          },
        ],
      },
    },
    ...WorkFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<WorkPageDataQuery, WorkPageDataQueryVariables>;
export const BlogPageDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogPageData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogPage' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BlogPage' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allBlogPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: { kind: 'EnumValue', value: 'publishDate_DESC' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BlogCard' } }],
            },
          },
        ],
      },
    },
    ...BlogPageFragmentDoc.definitions,
    ...BlogCardFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogPageDataQuery, BlogPageDataQueryVariables>;
export const BlogPostSlugsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogPostSlugs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allBlogPosts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'slug' } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPostSlugsQuery, BlogPostSlugsQueryVariables>;
export const BlogPostDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BlogPostData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'blogPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'BlogPost' } }],
            },
          },
        ],
      },
    },
    ...BlogPostFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<BlogPostDataQuery, BlogPostDataQueryVariables>;
