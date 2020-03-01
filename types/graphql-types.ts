export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
};

export type BooksJson = Node & {
  __typename?: "BooksJson",
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  start?: Maybe<Scalars["String"]>,
  end?: Maybe<Scalars["String"]>,
  total?: Maybe<Scalars["String"]>,
  numpages?: Maybe<Scalars["String"]>,
  currentpage?: Maybe<Scalars["String"]>,
  book?: Maybe<Array<Maybe<BooksJsonBook>>>,
};

export type BooksJsonBook = {
  __typename?: "BooksJsonBook",
  id?: Maybe<BooksJsonBookId>,
  text_reviews_count?: Maybe<BooksJsonBookText_Reviews_Count>,
  uri?: Maybe<Scalars["String"]>,
  title?: Maybe<Scalars["String"]>,
  title_without_series?: Maybe<Scalars["String"]>,
  image_url?: Maybe<Scalars["String"]>,
  small_image_url?: Maybe<Scalars["String"]>,
  large_image_url?: Maybe<Scalars["String"]>,
  link?: Maybe<Scalars["String"]>,
  num_pages?: Maybe<Scalars["String"]>,
  format?: Maybe<Scalars["String"]>,
  edition_information?: Maybe<Scalars["String"]>,
  publisher?: Maybe<Scalars["String"]>,
  publication_day?: Maybe<Scalars["String"]>,
  publication_year?: Maybe<Scalars["Date"]>,
  publication_month?: Maybe<Scalars["String"]>,
  average_rating?: Maybe<Scalars["String"]>,
  ratings_count?: Maybe<Scalars["String"]>,
  description?: Maybe<Scalars["String"]>,
  authors?: Maybe<BooksJsonBookAuthors>,
  published?: Maybe<Scalars["Date"]>,
  work?: Maybe<BooksJsonBookWork>,
};


export type BooksJsonBookPublication_YearArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type BooksJsonBookPublishedArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};

export type BooksJsonBookAuthors = {
  __typename?: "BooksJsonBookAuthors",
  author?: Maybe<BooksJsonBookAuthorsAuthor>,
};

export type BooksJsonBookAuthorsAuthor = {
  __typename?: "BooksJsonBookAuthorsAuthor",
  id?: Maybe<Scalars["String"]>,
  name?: Maybe<Scalars["String"]>,
  role?: Maybe<Scalars["String"]>,
  image_url?: Maybe<BooksJsonBookAuthorsAuthorImage_Url>,
  small_image_url?: Maybe<BooksJsonBookAuthorsAuthorSmall_Image_Url>,
  link?: Maybe<Scalars["String"]>,
  average_rating?: Maybe<Scalars["String"]>,
  ratings_count?: Maybe<Scalars["String"]>,
  text_reviews_count?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookAuthorsAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  role?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<BooksJsonBookAuthorsAuthorImage_UrlFilterInput>,
  small_image_url?: Maybe<BooksJsonBookAuthorsAuthorSmall_Image_UrlFilterInput>,
  link?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  text_reviews_count?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonBookAuthorsAuthorImage_Url = {
  __typename?: "BooksJsonBookAuthorsAuthorImage_url",
  _?: Maybe<Scalars["String"]>,
  nophoto?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookAuthorsAuthorImage_UrlFilterInput = {
  _?: Maybe<StringQueryOperatorInput>,
  nophoto?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonBookAuthorsAuthorSmall_Image_Url = {
  __typename?: "BooksJsonBookAuthorsAuthorSmall_image_url",
  _?: Maybe<Scalars["String"]>,
  nophoto?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookAuthorsAuthorSmall_Image_UrlFilterInput = {
  _?: Maybe<StringQueryOperatorInput>,
  nophoto?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonBookAuthorsFilterInput = {
  author?: Maybe<BooksJsonBookAuthorsAuthorFilterInput>,
};

export type BooksJsonBookFilterInput = {
  id?: Maybe<BooksJsonBookIdFilterInput>,
  text_reviews_count?: Maybe<BooksJsonBookText_Reviews_CountFilterInput>,
  uri?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  title_without_series?: Maybe<StringQueryOperatorInput>,
  image_url?: Maybe<StringQueryOperatorInput>,
  small_image_url?: Maybe<StringQueryOperatorInput>,
  large_image_url?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  num_pages?: Maybe<StringQueryOperatorInput>,
  format?: Maybe<StringQueryOperatorInput>,
  edition_information?: Maybe<StringQueryOperatorInput>,
  publisher?: Maybe<StringQueryOperatorInput>,
  publication_day?: Maybe<StringQueryOperatorInput>,
  publication_year?: Maybe<DateQueryOperatorInput>,
  publication_month?: Maybe<StringQueryOperatorInput>,
  average_rating?: Maybe<StringQueryOperatorInput>,
  ratings_count?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  authors?: Maybe<BooksJsonBookAuthorsFilterInput>,
  published?: Maybe<DateQueryOperatorInput>,
  work?: Maybe<BooksJsonBookWorkFilterInput>,
};

export type BooksJsonBookFilterListInput = {
  elemMatch?: Maybe<BooksJsonBookFilterInput>,
};

export type BooksJsonBookId = {
  __typename?: "BooksJsonBookId",
  _?: Maybe<Scalars["String"]>,
  type?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookIdFilterInput = {
  _?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonBookText_Reviews_Count = {
  __typename?: "BooksJsonBookText_reviews_count",
  _?: Maybe<Scalars["String"]>,
  type?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookText_Reviews_CountFilterInput = {
  _?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonBookWork = {
  __typename?: "BooksJsonBookWork",
  id?: Maybe<Scalars["String"]>,
  uri?: Maybe<Scalars["String"]>,
};

export type BooksJsonBookWorkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  uri?: Maybe<StringQueryOperatorInput>,
};

export type BooksJsonConnection = {
  __typename?: "BooksJsonConnection",
  totalCount: Scalars["Int"],
  edges: Array<BooksJsonEdge>,
  nodes: Array<BooksJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<BooksJsonGroupConnection>,
};


export type BooksJsonConnectionDistinctArgs = {
  field: BooksJsonFieldsEnum
};


export type BooksJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: BooksJsonFieldsEnum
};

export type BooksJsonEdge = {
  __typename?: "BooksJsonEdge",
  next?: Maybe<BooksJson>,
  node: BooksJson,
  previous?: Maybe<BooksJson>,
};

export enum BooksJsonFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Start = "start",
  End = "end",
  Total = "total",
  Numpages = "numpages",
  Currentpage = "currentpage",
  Book = "book",
  BookId = "book___id____",
  BookIdType = "book___id___type",
  BookTextReviewsCount = "book___text_reviews_count____",
  BookTextReviewsCountType = "book___text_reviews_count___type",
  BookUri = "book___uri",
  BookTitle = "book___title",
  BookTitleWithoutSeries = "book___title_without_series",
  BookImageUrl = "book___image_url",
  BookSmallImageUrl = "book___small_image_url",
  BookLargeImageUrl = "book___large_image_url",
  BookLink = "book___link",
  BookNumPages = "book___num_pages",
  BookFormat = "book___format",
  BookEditionInformation = "book___edition_information",
  BookPublisher = "book___publisher",
  BookPublicationDay = "book___publication_day",
  BookPublicationYear = "book___publication_year",
  BookPublicationMonth = "book___publication_month",
  BookAverageRating = "book___average_rating",
  BookRatingsCount = "book___ratings_count",
  BookDescription = "book___description",
  BookAuthorsAuthorId = "book___authors___author___id",
  BookAuthorsAuthorName = "book___authors___author___name",
  BookAuthorsAuthorRole = "book___authors___author___role",
  BookAuthorsAuthorLink = "book___authors___author___link",
  BookAuthorsAuthorAverageRating = "book___authors___author___average_rating",
  BookAuthorsAuthorRatingsCount = "book___authors___author___ratings_count",
  BookAuthorsAuthorTextReviewsCount = "book___authors___author___text_reviews_count",
  BookPublished = "book___published",
  BookWorkId = "book___work___id",
  BookWorkUri = "book___work___uri"
}

export type BooksJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  start?: Maybe<StringQueryOperatorInput>,
  end?: Maybe<StringQueryOperatorInput>,
  total?: Maybe<StringQueryOperatorInput>,
  numpages?: Maybe<StringQueryOperatorInput>,
  currentpage?: Maybe<StringQueryOperatorInput>,
  book?: Maybe<BooksJsonBookFilterListInput>,
};

export type BooksJsonGroupConnection = {
  __typename?: "BooksJsonGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<BooksJsonEdge>,
  nodes: Array<BooksJson>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type BooksJsonSortInput = {
  fields?: Maybe<Array<Maybe<BooksJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>,
  ne?: Maybe<Scalars["Boolean"]>,
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>,
  ne?: Maybe<Scalars["Date"]>,
  gt?: Maybe<Scalars["Date"]>,
  gte?: Maybe<Scalars["Date"]>,
  lt?: Maybe<Scalars["Date"]>,
  lte?: Maybe<Scalars["Date"]>,
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>,
};

export type Directory = Node & {
  __typename?: "Directory",
  sourceInstanceName: Scalars["String"],
  absolutePath: Scalars["String"],
  relativePath: Scalars["String"],
  extension: Scalars["String"],
  size: Scalars["Int"],
  prettySize: Scalars["String"],
  modifiedTime: Scalars["Date"],
  accessTime: Scalars["Date"],
  changeTime: Scalars["Date"],
  birthTime: Scalars["Date"],
  root: Scalars["String"],
  dir: Scalars["String"],
  base: Scalars["String"],
  ext: Scalars["String"],
  name: Scalars["String"],
  relativeDirectory: Scalars["String"],
  dev: Scalars["Int"],
  mode: Scalars["Int"],
  nlink: Scalars["Int"],
  uid: Scalars["Int"],
  gid: Scalars["Int"],
  rdev: Scalars["Int"],
  ino: Scalars["Float"],
  atimeMs: Scalars["Float"],
  mtimeMs: Scalars["Float"],
  ctimeMs: Scalars["Float"],
  atime: Scalars["Date"],
  mtime: Scalars["Date"],
  ctime: Scalars["Date"],
  birthtime?: Maybe<Scalars["Date"]>,
  birthtimeMs?: Maybe<Scalars["Float"]>,
  blksize?: Maybe<Scalars["Int"]>,
  blocks?: Maybe<Scalars["Int"]>,
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection",
  totalCount: Scalars["Int"],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge",
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Ino = "ino",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars["String"],
  shadow: Scalars["String"],
  opacity?: Maybe<Scalars["Int"]>,
};

export type File = Node & {
  __typename?: "File",
  sourceInstanceName: Scalars["String"],
  absolutePath: Scalars["String"],
  relativePath: Scalars["String"],
  extension: Scalars["String"],
  size: Scalars["Int"],
  prettySize: Scalars["String"],
  modifiedTime: Scalars["Date"],
  accessTime: Scalars["Date"],
  changeTime: Scalars["Date"],
  birthTime: Scalars["Date"],
  root: Scalars["String"],
  dir: Scalars["String"],
  base: Scalars["String"],
  ext: Scalars["String"],
  name: Scalars["String"],
  relativeDirectory: Scalars["String"],
  dev: Scalars["Int"],
  mode: Scalars["Int"],
  nlink: Scalars["Int"],
  uid: Scalars["Int"],
  gid: Scalars["Int"],
  rdev: Scalars["Int"],
  ino: Scalars["Float"],
  atimeMs: Scalars["Float"],
  mtimeMs: Scalars["Float"],
  ctimeMs: Scalars["Float"],
  atime: Scalars["Date"],
  mtime: Scalars["Date"],
  ctime: Scalars["Date"],
  birthtime?: Maybe<Scalars["Date"]>,
  birthtimeMs?: Maybe<Scalars["Float"]>,
  blksize?: Maybe<Scalars["Int"]>,
  blocks?: Maybe<Scalars["Int"]>,
  publicURL?: Maybe<Scalars["String"]>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childBooksJson?: Maybe<BooksJson>,
  childMarkdownRemark?: Maybe<MarkdownRemark>,
  childSoftwareJson?: Maybe<SoftwareJson>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};

export type FileConnection = {
  __typename?: "FileConnection",
  totalCount: Scalars["Int"],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: FileFieldsEnum
};

export type FileEdge = {
  __typename?: "FileEdge",
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export enum FileFieldsEnum {
  SourceInstanceName = "sourceInstanceName",
  AbsolutePath = "absolutePath",
  RelativePath = "relativePath",
  Extension = "extension",
  Size = "size",
  PrettySize = "prettySize",
  ModifiedTime = "modifiedTime",
  AccessTime = "accessTime",
  ChangeTime = "changeTime",
  BirthTime = "birthTime",
  Root = "root",
  Dir = "dir",
  Base = "base",
  Ext = "ext",
  Name = "name",
  RelativeDirectory = "relativeDirectory",
  Dev = "dev",
  Mode = "mode",
  Nlink = "nlink",
  Uid = "uid",
  Gid = "gid",
  Rdev = "rdev",
  Ino = "ino",
  AtimeMs = "atimeMs",
  MtimeMs = "mtimeMs",
  CtimeMs = "ctimeMs",
  Atime = "atime",
  Mtime = "mtime",
  Ctime = "ctime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  PublicUrl = "publicURL",
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  ChildImageSharpResolutionsBase64 = "childImageSharp___resolutions___base64",
  ChildImageSharpResolutionsTracedSvg = "childImageSharp___resolutions___tracedSVG",
  ChildImageSharpResolutionsAspectRatio = "childImageSharp___resolutions___aspectRatio",
  ChildImageSharpResolutionsWidth = "childImageSharp___resolutions___width",
  ChildImageSharpResolutionsHeight = "childImageSharp___resolutions___height",
  ChildImageSharpResolutionsSrc = "childImageSharp___resolutions___src",
  ChildImageSharpResolutionsSrcSet = "childImageSharp___resolutions___srcSet",
  ChildImageSharpResolutionsSrcWebp = "childImageSharp___resolutions___srcWebp",
  ChildImageSharpResolutionsSrcSetWebp = "childImageSharp___resolutions___srcSetWebp",
  ChildImageSharpResolutionsOriginalName = "childImageSharp___resolutions___originalName",
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  ChildImageSharpSizesBase64 = "childImageSharp___sizes___base64",
  ChildImageSharpSizesTracedSvg = "childImageSharp___sizes___tracedSVG",
  ChildImageSharpSizesAspectRatio = "childImageSharp___sizes___aspectRatio",
  ChildImageSharpSizesSrc = "childImageSharp___sizes___src",
  ChildImageSharpSizesSrcSet = "childImageSharp___sizes___srcSet",
  ChildImageSharpSizesSrcWebp = "childImageSharp___sizes___srcWebp",
  ChildImageSharpSizesSrcSetWebp = "childImageSharp___sizes___srcSetWebp",
  ChildImageSharpSizesSizes = "childImageSharp___sizes___sizes",
  ChildImageSharpSizesOriginalImg = "childImageSharp___sizes___originalImg",
  ChildImageSharpSizesOriginalName = "childImageSharp___sizes___originalName",
  ChildImageSharpSizesPresentationWidth = "childImageSharp___sizes___presentationWidth",
  ChildImageSharpSizesPresentationHeight = "childImageSharp___sizes___presentationHeight",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ChildBooksJsonId = "childBooksJson___id",
  ChildBooksJsonParentId = "childBooksJson___parent___id",
  ChildBooksJsonParentParentId = "childBooksJson___parent___parent___id",
  ChildBooksJsonParentParentChildren = "childBooksJson___parent___parent___children",
  ChildBooksJsonParentChildren = "childBooksJson___parent___children",
  ChildBooksJsonParentChildrenId = "childBooksJson___parent___children___id",
  ChildBooksJsonParentChildrenChildren = "childBooksJson___parent___children___children",
  ChildBooksJsonParentInternalContent = "childBooksJson___parent___internal___content",
  ChildBooksJsonParentInternalContentDigest = "childBooksJson___parent___internal___contentDigest",
  ChildBooksJsonParentInternalDescription = "childBooksJson___parent___internal___description",
  ChildBooksJsonParentInternalFieldOwners = "childBooksJson___parent___internal___fieldOwners",
  ChildBooksJsonParentInternalIgnoreType = "childBooksJson___parent___internal___ignoreType",
  ChildBooksJsonParentInternalMediaType = "childBooksJson___parent___internal___mediaType",
  ChildBooksJsonParentInternalOwner = "childBooksJson___parent___internal___owner",
  ChildBooksJsonParentInternalType = "childBooksJson___parent___internal___type",
  ChildBooksJsonChildren = "childBooksJson___children",
  ChildBooksJsonChildrenId = "childBooksJson___children___id",
  ChildBooksJsonChildrenParentId = "childBooksJson___children___parent___id",
  ChildBooksJsonChildrenParentChildren = "childBooksJson___children___parent___children",
  ChildBooksJsonChildrenChildren = "childBooksJson___children___children",
  ChildBooksJsonChildrenChildrenId = "childBooksJson___children___children___id",
  ChildBooksJsonChildrenChildrenChildren = "childBooksJson___children___children___children",
  ChildBooksJsonChildrenInternalContent = "childBooksJson___children___internal___content",
  ChildBooksJsonChildrenInternalContentDigest = "childBooksJson___children___internal___contentDigest",
  ChildBooksJsonChildrenInternalDescription = "childBooksJson___children___internal___description",
  ChildBooksJsonChildrenInternalFieldOwners = "childBooksJson___children___internal___fieldOwners",
  ChildBooksJsonChildrenInternalIgnoreType = "childBooksJson___children___internal___ignoreType",
  ChildBooksJsonChildrenInternalMediaType = "childBooksJson___children___internal___mediaType",
  ChildBooksJsonChildrenInternalOwner = "childBooksJson___children___internal___owner",
  ChildBooksJsonChildrenInternalType = "childBooksJson___children___internal___type",
  ChildBooksJsonInternalContent = "childBooksJson___internal___content",
  ChildBooksJsonInternalContentDigest = "childBooksJson___internal___contentDigest",
  ChildBooksJsonInternalDescription = "childBooksJson___internal___description",
  ChildBooksJsonInternalFieldOwners = "childBooksJson___internal___fieldOwners",
  ChildBooksJsonInternalIgnoreType = "childBooksJson___internal___ignoreType",
  ChildBooksJsonInternalMediaType = "childBooksJson___internal___mediaType",
  ChildBooksJsonInternalOwner = "childBooksJson___internal___owner",
  ChildBooksJsonInternalType = "childBooksJson___internal___type",
  ChildBooksJsonStart = "childBooksJson___start",
  ChildBooksJsonEnd = "childBooksJson___end",
  ChildBooksJsonTotal = "childBooksJson___total",
  ChildBooksJsonNumpages = "childBooksJson___numpages",
  ChildBooksJsonCurrentpage = "childBooksJson___currentpage",
  ChildBooksJsonBook = "childBooksJson___book",
  ChildBooksJsonBookId = "childBooksJson___book___id____",
  ChildBooksJsonBookIdType = "childBooksJson___book___id___type",
  ChildBooksJsonBookTextReviewsCount = "childBooksJson___book___text_reviews_count____",
  ChildBooksJsonBookTextReviewsCountType = "childBooksJson___book___text_reviews_count___type",
  ChildBooksJsonBookUri = "childBooksJson___book___uri",
  ChildBooksJsonBookTitle = "childBooksJson___book___title",
  ChildBooksJsonBookTitleWithoutSeries = "childBooksJson___book___title_without_series",
  ChildBooksJsonBookImageUrl = "childBooksJson___book___image_url",
  ChildBooksJsonBookSmallImageUrl = "childBooksJson___book___small_image_url",
  ChildBooksJsonBookLargeImageUrl = "childBooksJson___book___large_image_url",
  ChildBooksJsonBookLink = "childBooksJson___book___link",
  ChildBooksJsonBookNumPages = "childBooksJson___book___num_pages",
  ChildBooksJsonBookFormat = "childBooksJson___book___format",
  ChildBooksJsonBookEditionInformation = "childBooksJson___book___edition_information",
  ChildBooksJsonBookPublisher = "childBooksJson___book___publisher",
  ChildBooksJsonBookPublicationDay = "childBooksJson___book___publication_day",
  ChildBooksJsonBookPublicationYear = "childBooksJson___book___publication_year",
  ChildBooksJsonBookPublicationMonth = "childBooksJson___book___publication_month",
  ChildBooksJsonBookAverageRating = "childBooksJson___book___average_rating",
  ChildBooksJsonBookRatingsCount = "childBooksJson___book___ratings_count",
  ChildBooksJsonBookDescription = "childBooksJson___book___description",
  ChildBooksJsonBookPublished = "childBooksJson___book___published",
  ChildBooksJsonBookWorkId = "childBooksJson___book___work___id",
  ChildBooksJsonBookWorkUri = "childBooksJson___book___work___uri",
  ChildMarkdownRemarkId = "childMarkdownRemark___id",
  ChildMarkdownRemarkFrontmatterTitle = "childMarkdownRemark___frontmatter___title",
  ChildMarkdownRemarkFrontmatterDate = "childMarkdownRemark___frontmatter___date",
  ChildMarkdownRemarkFrontmatterUpdated = "childMarkdownRemark___frontmatter___updated",
  ChildMarkdownRemarkFrontmatterDescription = "childMarkdownRemark___frontmatter___description",
  ChildMarkdownRemarkExcerpt = "childMarkdownRemark___excerpt",
  ChildMarkdownRemarkRawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
  ChildMarkdownRemarkFileAbsolutePath = "childMarkdownRemark___fileAbsolutePath",
  ChildMarkdownRemarkFieldsSlug = "childMarkdownRemark___fields___slug",
  ChildMarkdownRemarkHtml = "childMarkdownRemark___html",
  ChildMarkdownRemarkHtmlAst = "childMarkdownRemark___htmlAst",
  ChildMarkdownRemarkExcerptAst = "childMarkdownRemark___excerptAst",
  ChildMarkdownRemarkHeadings = "childMarkdownRemark___headings",
  ChildMarkdownRemarkHeadingsValue = "childMarkdownRemark___headings___value",
  ChildMarkdownRemarkHeadingsDepth = "childMarkdownRemark___headings___depth",
  ChildMarkdownRemarkTimeToRead = "childMarkdownRemark___timeToRead",
  ChildMarkdownRemarkTableOfContents = "childMarkdownRemark___tableOfContents",
  ChildMarkdownRemarkWordCountParagraphs = "childMarkdownRemark___wordCount___paragraphs",
  ChildMarkdownRemarkWordCountSentences = "childMarkdownRemark___wordCount___sentences",
  ChildMarkdownRemarkWordCountWords = "childMarkdownRemark___wordCount___words",
  ChildMarkdownRemarkParentId = "childMarkdownRemark___parent___id",
  ChildMarkdownRemarkParentParentId = "childMarkdownRemark___parent___parent___id",
  ChildMarkdownRemarkParentParentChildren = "childMarkdownRemark___parent___parent___children",
  ChildMarkdownRemarkParentChildren = "childMarkdownRemark___parent___children",
  ChildMarkdownRemarkParentChildrenId = "childMarkdownRemark___parent___children___id",
  ChildMarkdownRemarkParentChildrenChildren = "childMarkdownRemark___parent___children___children",
  ChildMarkdownRemarkParentInternalContent = "childMarkdownRemark___parent___internal___content",
  ChildMarkdownRemarkParentInternalContentDigest = "childMarkdownRemark___parent___internal___contentDigest",
  ChildMarkdownRemarkParentInternalDescription = "childMarkdownRemark___parent___internal___description",
  ChildMarkdownRemarkParentInternalFieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
  ChildMarkdownRemarkParentInternalIgnoreType = "childMarkdownRemark___parent___internal___ignoreType",
  ChildMarkdownRemarkParentInternalMediaType = "childMarkdownRemark___parent___internal___mediaType",
  ChildMarkdownRemarkParentInternalOwner = "childMarkdownRemark___parent___internal___owner",
  ChildMarkdownRemarkParentInternalType = "childMarkdownRemark___parent___internal___type",
  ChildMarkdownRemarkChildren = "childMarkdownRemark___children",
  ChildMarkdownRemarkChildrenId = "childMarkdownRemark___children___id",
  ChildMarkdownRemarkChildrenParentId = "childMarkdownRemark___children___parent___id",
  ChildMarkdownRemarkChildrenParentChildren = "childMarkdownRemark___children___parent___children",
  ChildMarkdownRemarkChildrenChildren = "childMarkdownRemark___children___children",
  ChildMarkdownRemarkChildrenChildrenId = "childMarkdownRemark___children___children___id",
  ChildMarkdownRemarkChildrenChildrenChildren = "childMarkdownRemark___children___children___children",
  ChildMarkdownRemarkChildrenInternalContent = "childMarkdownRemark___children___internal___content",
  ChildMarkdownRemarkChildrenInternalContentDigest = "childMarkdownRemark___children___internal___contentDigest",
  ChildMarkdownRemarkChildrenInternalDescription = "childMarkdownRemark___children___internal___description",
  ChildMarkdownRemarkChildrenInternalFieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
  ChildMarkdownRemarkChildrenInternalIgnoreType = "childMarkdownRemark___children___internal___ignoreType",
  ChildMarkdownRemarkChildrenInternalMediaType = "childMarkdownRemark___children___internal___mediaType",
  ChildMarkdownRemarkChildrenInternalOwner = "childMarkdownRemark___children___internal___owner",
  ChildMarkdownRemarkChildrenInternalType = "childMarkdownRemark___children___internal___type",
  ChildMarkdownRemarkInternalContent = "childMarkdownRemark___internal___content",
  ChildMarkdownRemarkInternalContentDigest = "childMarkdownRemark___internal___contentDigest",
  ChildMarkdownRemarkInternalDescription = "childMarkdownRemark___internal___description",
  ChildMarkdownRemarkInternalFieldOwners = "childMarkdownRemark___internal___fieldOwners",
  ChildMarkdownRemarkInternalIgnoreType = "childMarkdownRemark___internal___ignoreType",
  ChildMarkdownRemarkInternalMediaType = "childMarkdownRemark___internal___mediaType",
  ChildMarkdownRemarkInternalOwner = "childMarkdownRemark___internal___owner",
  ChildMarkdownRemarkInternalType = "childMarkdownRemark___internal___type",
  ChildSoftwareJsonId = "childSoftwareJson___id",
  ChildSoftwareJsonParentId = "childSoftwareJson___parent___id",
  ChildSoftwareJsonParentParentId = "childSoftwareJson___parent___parent___id",
  ChildSoftwareJsonParentParentChildren = "childSoftwareJson___parent___parent___children",
  ChildSoftwareJsonParentChildren = "childSoftwareJson___parent___children",
  ChildSoftwareJsonParentChildrenId = "childSoftwareJson___parent___children___id",
  ChildSoftwareJsonParentChildrenChildren = "childSoftwareJson___parent___children___children",
  ChildSoftwareJsonParentInternalContent = "childSoftwareJson___parent___internal___content",
  ChildSoftwareJsonParentInternalContentDigest = "childSoftwareJson___parent___internal___contentDigest",
  ChildSoftwareJsonParentInternalDescription = "childSoftwareJson___parent___internal___description",
  ChildSoftwareJsonParentInternalFieldOwners = "childSoftwareJson___parent___internal___fieldOwners",
  ChildSoftwareJsonParentInternalIgnoreType = "childSoftwareJson___parent___internal___ignoreType",
  ChildSoftwareJsonParentInternalMediaType = "childSoftwareJson___parent___internal___mediaType",
  ChildSoftwareJsonParentInternalOwner = "childSoftwareJson___parent___internal___owner",
  ChildSoftwareJsonParentInternalType = "childSoftwareJson___parent___internal___type",
  ChildSoftwareJsonChildren = "childSoftwareJson___children",
  ChildSoftwareJsonChildrenId = "childSoftwareJson___children___id",
  ChildSoftwareJsonChildrenParentId = "childSoftwareJson___children___parent___id",
  ChildSoftwareJsonChildrenParentChildren = "childSoftwareJson___children___parent___children",
  ChildSoftwareJsonChildrenChildren = "childSoftwareJson___children___children",
  ChildSoftwareJsonChildrenChildrenId = "childSoftwareJson___children___children___id",
  ChildSoftwareJsonChildrenChildrenChildren = "childSoftwareJson___children___children___children",
  ChildSoftwareJsonChildrenInternalContent = "childSoftwareJson___children___internal___content",
  ChildSoftwareJsonChildrenInternalContentDigest = "childSoftwareJson___children___internal___contentDigest",
  ChildSoftwareJsonChildrenInternalDescription = "childSoftwareJson___children___internal___description",
  ChildSoftwareJsonChildrenInternalFieldOwners = "childSoftwareJson___children___internal___fieldOwners",
  ChildSoftwareJsonChildrenInternalIgnoreType = "childSoftwareJson___children___internal___ignoreType",
  ChildSoftwareJsonChildrenInternalMediaType = "childSoftwareJson___children___internal___mediaType",
  ChildSoftwareJsonChildrenInternalOwner = "childSoftwareJson___children___internal___owner",
  ChildSoftwareJsonChildrenInternalType = "childSoftwareJson___children___internal___type",
  ChildSoftwareJsonInternalContent = "childSoftwareJson___internal___content",
  ChildSoftwareJsonInternalContentDigest = "childSoftwareJson___internal___contentDigest",
  ChildSoftwareJsonInternalDescription = "childSoftwareJson___internal___description",
  ChildSoftwareJsonInternalFieldOwners = "childSoftwareJson___internal___fieldOwners",
  ChildSoftwareJsonInternalIgnoreType = "childSoftwareJson___internal___ignoreType",
  ChildSoftwareJsonInternalMediaType = "childSoftwareJson___internal___mediaType",
  ChildSoftwareJsonInternalOwner = "childSoftwareJson___internal___owner",
  ChildSoftwareJsonInternalType = "childSoftwareJson___internal___type",
  ChildSoftwareJson_2019 = "childSoftwareJson____2019",
  ChildSoftwareJson_2020 = "childSoftwareJson____2020"
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childBooksJson?: Maybe<BooksJsonFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
  childSoftwareJson?: Maybe<SoftwareJsonFilterInput>,
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>,
  ne?: Maybe<Scalars["Float"]>,
  gt?: Maybe<Scalars["Float"]>,
  gte?: Maybe<Scalars["Float"]>,
  lt?: Maybe<Scalars["Float"]>,
  lte?: Maybe<Scalars["Float"]>,
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>,
};

export enum ImageCropFocus {
  Center = "CENTER",
  North = "NORTH",
  Northeast = "NORTHEAST",
  East = "EAST",
  Southeast = "SOUTHEAST",
  South = "SOUTH",
  Southwest = "SOUTHWEST",
  West = "WEST",
  Northwest = "NORTHWEST",
  Entropy = "ENTROPY",
  Attention = "ATTENTION"
}

export enum ImageFit {
  Cover = "COVER",
  Contain = "CONTAIN",
  Fill = "FILL"
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP"
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp",
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>,
  height?: Maybe<Scalars["Int"]>,
  base64Width?: Maybe<Scalars["Int"]>,
  jpegProgressive?: Maybe<Scalars["Boolean"]>,
  pngCompressionSpeed?: Maybe<Scalars["Int"]>,
  grayscale?: Maybe<Scalars["Boolean"]>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars["Int"]>,
  jpegQuality?: Maybe<Scalars["Int"]>,
  pngQuality?: Maybe<Scalars["Int"]>,
  webpQuality?: Maybe<Scalars["Int"]>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars["String"]>,
  rotate?: Maybe<Scalars["Int"]>,
  trim?: Maybe<Scalars["Float"]>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>,
  height?: Maybe<Scalars["Int"]>,
  base64Width?: Maybe<Scalars["Int"]>,
  jpegProgressive?: Maybe<Scalars["Boolean"]>,
  pngCompressionSpeed?: Maybe<Scalars["Int"]>,
  grayscale?: Maybe<Scalars["Boolean"]>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars["Int"]>,
  jpegQuality?: Maybe<Scalars["Int"]>,
  pngQuality?: Maybe<Scalars["Int"]>,
  webpQuality?: Maybe<Scalars["Int"]>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars["String"]>,
  rotate?: Maybe<Scalars["Int"]>,
  trim?: Maybe<Scalars["Float"]>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>,
  maxHeight?: Maybe<Scalars["Int"]>,
  base64Width?: Maybe<Scalars["Int"]>,
  grayscale?: Maybe<Scalars["Boolean"]>,
  jpegProgressive?: Maybe<Scalars["Boolean"]>,
  pngCompressionSpeed?: Maybe<Scalars["Int"]>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars["Int"]>,
  jpegQuality?: Maybe<Scalars["Int"]>,
  pngQuality?: Maybe<Scalars["Int"]>,
  webpQuality?: Maybe<Scalars["Int"]>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars["String"]>,
  rotate?: Maybe<Scalars["Int"]>,
  trim?: Maybe<Scalars["Float"]>,
  sizes?: Maybe<Scalars["String"]>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>,
  maxHeight?: Maybe<Scalars["Int"]>,
  base64Width?: Maybe<Scalars["Int"]>,
  grayscale?: Maybe<Scalars["Boolean"]>,
  jpegProgressive?: Maybe<Scalars["Boolean"]>,
  pngCompressionSpeed?: Maybe<Scalars["Int"]>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars["Int"]>,
  jpegQuality?: Maybe<Scalars["Int"]>,
  pngQuality?: Maybe<Scalars["Int"]>,
  webpQuality?: Maybe<Scalars["Int"]>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars["String"]>,
  rotate?: Maybe<Scalars["Int"]>,
  trim?: Maybe<Scalars["Float"]>,
  sizes?: Maybe<Scalars["String"]>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>,
  height?: Maybe<Scalars["Int"]>,
  quality?: Maybe<Scalars["Int"]>,
  jpegQuality?: Maybe<Scalars["Int"]>,
  pngQuality?: Maybe<Scalars["Int"]>,
  webpQuality?: Maybe<Scalars["Int"]>,
  jpegProgressive?: Maybe<Scalars["Boolean"]>,
  pngCompressionLevel?: Maybe<Scalars["Int"]>,
  pngCompressionSpeed?: Maybe<Scalars["Int"]>,
  grayscale?: Maybe<Scalars["Boolean"]>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars["Boolean"]>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars["String"]>,
  rotate?: Maybe<Scalars["Int"]>,
  trim?: Maybe<Scalars["Float"]>
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection",
  totalCount: Scalars["Int"],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge",
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = "fixed___base64",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedWidth = "fixed___width",
  FixedHeight = "fixed___height",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcWebp = "fixed___srcWebp",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedOriginalName = "fixed___originalName",
  ResolutionsBase64 = "resolutions___base64",
  ResolutionsTracedSvg = "resolutions___tracedSVG",
  ResolutionsAspectRatio = "resolutions___aspectRatio",
  ResolutionsWidth = "resolutions___width",
  ResolutionsHeight = "resolutions___height",
  ResolutionsSrc = "resolutions___src",
  ResolutionsSrcSet = "resolutions___srcSet",
  ResolutionsSrcWebp = "resolutions___srcWebp",
  ResolutionsSrcSetWebp = "resolutions___srcSetWebp",
  ResolutionsOriginalName = "resolutions___originalName",
  FluidBase64 = "fluid___base64",
  FluidTracedSvg = "fluid___tracedSVG",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcWebp = "fluid___srcWebp",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSizes = "fluid___sizes",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidPresentationHeight = "fluid___presentationHeight",
  SizesBase64 = "sizes___base64",
  SizesTracedSvg = "sizes___tracedSVG",
  SizesAspectRatio = "sizes___aspectRatio",
  SizesSrc = "sizes___src",
  SizesSrcSet = "sizes___srcSet",
  SizesSrcWebp = "sizes___srcWebp",
  SizesSrcSetWebp = "sizes___srcSetWebp",
  SizesSizes = "sizes___sizes",
  SizesOriginalImg = "sizes___originalImg",
  SizesOriginalName = "sizes___originalName",
  SizesPresentationWidth = "sizes___presentationWidth",
  SizesPresentationHeight = "sizes___presentationHeight",
  OriginalWidth = "original___width",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
  ResizeHeight = "resize___height",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeOriginalName = "resize___originalName",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed",
  base64?: Maybe<Scalars["String"]>,
  tracedSVG?: Maybe<Scalars["String"]>,
  aspectRatio?: Maybe<Scalars["Float"]>,
  width: Scalars["Float"],
  height: Scalars["Float"],
  src: Scalars["String"],
  srcSet: Scalars["String"],
  srcWebp?: Maybe<Scalars["String"]>,
  srcSetWebp?: Maybe<Scalars["String"]>,
  originalName?: Maybe<Scalars["String"]>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid",
  base64?: Maybe<Scalars["String"]>,
  tracedSVG?: Maybe<Scalars["String"]>,
  aspectRatio: Scalars["Float"],
  src: Scalars["String"],
  srcSet: Scalars["String"],
  srcWebp?: Maybe<Scalars["String"]>,
  srcSetWebp?: Maybe<Scalars["String"]>,
  sizes: Scalars["String"],
  originalImg?: Maybe<Scalars["String"]>,
  originalName?: Maybe<Scalars["String"]>,
  presentationWidth?: Maybe<Scalars["Int"]>,
  presentationHeight?: Maybe<Scalars["Int"]>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal",
  width?: Maybe<Scalars["Float"]>,
  height?: Maybe<Scalars["Float"]>,
  src?: Maybe<Scalars["String"]>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize",
  src?: Maybe<Scalars["String"]>,
  tracedSVG?: Maybe<Scalars["String"]>,
  width?: Maybe<Scalars["Int"]>,
  height?: Maybe<Scalars["Int"]>,
  aspectRatio?: Maybe<Scalars["Float"]>,
  originalName?: Maybe<Scalars["String"]>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions",
  base64?: Maybe<Scalars["String"]>,
  tracedSVG?: Maybe<Scalars["String"]>,
  aspectRatio?: Maybe<Scalars["Float"]>,
  width: Scalars["Float"],
  height: Scalars["Float"],
  src: Scalars["String"],
  srcSet: Scalars["String"],
  srcWebp?: Maybe<Scalars["String"]>,
  srcSetWebp?: Maybe<Scalars["String"]>,
  originalName?: Maybe<Scalars["String"]>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes",
  base64?: Maybe<Scalars["String"]>,
  tracedSVG?: Maybe<Scalars["String"]>,
  aspectRatio: Scalars["Float"],
  src: Scalars["String"],
  srcSet: Scalars["String"],
  srcWebp?: Maybe<Scalars["String"]>,
  srcSetWebp?: Maybe<Scalars["String"]>,
  sizes: Scalars["String"],
  originalImg?: Maybe<Scalars["String"]>,
  originalName?: Maybe<Scalars["String"]>,
  presentationWidth?: Maybe<Scalars["Int"]>,
  presentationHeight?: Maybe<Scalars["Int"]>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  __typename?: "Internal",
  content?: Maybe<Scalars["String"]>,
  contentDigest: Scalars["String"],
  description?: Maybe<Scalars["String"]>,
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>,
  ignoreType?: Maybe<Scalars["Boolean"]>,
  mediaType?: Maybe<Scalars["String"]>,
  owner: Scalars["String"],
  type: Scalars["String"],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>,
  ne?: Maybe<Scalars["Int"]>,
  gt?: Maybe<Scalars["Int"]>,
  gte?: Maybe<Scalars["Int"]>,
  lt?: Maybe<Scalars["Int"]>,
  lte?: Maybe<Scalars["Int"]>,
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>,
  ne?: Maybe<Scalars["JSON"]>,
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>,
  regex?: Maybe<Scalars["JSON"]>,
  glob?: Maybe<Scalars["JSON"]>,
};

export enum MarkdownExcerptFormats {
  Plain = "PLAIN",
  Html = "HTML",
  Markdown = "MARKDOWN"
}

export type MarkdownHeading = {
  __typename?: "MarkdownHeading",
  value?: Maybe<Scalars["String"]>,
  depth?: Maybe<Scalars["Int"]>,
};

export type MarkdownHeadingFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>,
};

export enum MarkdownHeadingLevels {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6"
}

export type MarkdownRemark = Node & {
  __typename?: "MarkdownRemark",
  id: Scalars["ID"],
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>,
  excerpt?: Maybe<Scalars["String"]>,
  rawMarkdownBody?: Maybe<Scalars["String"]>,
  fileAbsolutePath?: Maybe<Scalars["String"]>,
  fields?: Maybe<MarkdownRemarkFields>,
  html?: Maybe<Scalars["String"]>,
  htmlAst?: Maybe<Scalars["JSON"]>,
  excerptAst?: Maybe<Scalars["JSON"]>,
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>,
  timeToRead?: Maybe<Scalars["Int"]>,
  tableOfContents?: Maybe<Scalars["String"]>,
  wordCount?: Maybe<MarkdownWordCount>,
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>,
  truncate?: Maybe<Scalars["Boolean"]>,
  format?: Maybe<MarkdownExcerptFormats>
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars["Int"]>,
  truncate?: Maybe<Scalars["Boolean"]>
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars["Boolean"]>,
  pathToSlugField?: Maybe<Scalars["String"]>,
  maxDepth?: Maybe<Scalars["Int"]>,
  heading?: Maybe<Scalars["String"]>
};

export type MarkdownRemarkConnection = {
  __typename?: "MarkdownRemarkConnection",
  totalCount: Scalars["Int"],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<MarkdownRemarkGroupConnection>,
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: MarkdownRemarkFieldsEnum
};

export type MarkdownRemarkEdge = {
  __typename?: "MarkdownRemarkEdge",
  next?: Maybe<MarkdownRemark>,
  node: MarkdownRemark,
  previous?: Maybe<MarkdownRemark>,
};

export type MarkdownRemarkFields = {
  __typename?: "MarkdownRemarkFields",
  slug?: Maybe<Scalars["String"]>,
};

export enum MarkdownRemarkFieldsEnum {
  Id = "id",
  FrontmatterTitle = "frontmatter___title",
  FrontmatterDate = "frontmatter___date",
  FrontmatterUpdated = "frontmatter___updated",
  FrontmatterDescription = "frontmatter___description",
  Excerpt = "excerpt",
  RawMarkdownBody = "rawMarkdownBody",
  FileAbsolutePath = "fileAbsolutePath",
  FieldsSlug = "fields___slug",
  Html = "html",
  HtmlAst = "htmlAst",
  ExcerptAst = "excerptAst",
  Headings = "headings",
  HeadingsValue = "headings___value",
  HeadingsDepth = "headings___depth",
  TimeToRead = "timeToRead",
  TableOfContents = "tableOfContents",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MarkdownRemarkFrontmatter = {
  __typename?: "MarkdownRemarkFrontmatter",
  title?: Maybe<Scalars["String"]>,
  date?: Maybe<Scalars["Date"]>,
  updated?: Maybe<Scalars["Date"]>,
  description?: Maybe<Scalars["String"]>,
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};


export type MarkdownRemarkFrontmatterUpdatedArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  updated?: Maybe<DateQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
};

export type MarkdownRemarkGroupConnection = {
  __typename?: "MarkdownRemarkGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<MarkdownRemarkEdge>,
  nodes: Array<MarkdownRemark>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MarkdownWordCount = {
  __typename?: "MarkdownWordCount",
  paragraphs?: Maybe<Scalars["Int"]>,
  sentences?: Maybe<Scalars["Int"]>,
  words?: Maybe<Scalars["Int"]>,
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
};

export type Node = {
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  __typename?: "PageInfo",
  currentPage: Scalars["Int"],
  hasPreviousPage: Scalars["Boolean"],
  hasNextPage: Scalars["Boolean"],
  itemCount: Scalars["Int"],
  pageCount: Scalars["Int"],
  perPage?: Maybe<Scalars["Int"]>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars["Float"]>,
  alphaMax?: Maybe<Scalars["Float"]>,
  optCurve?: Maybe<Scalars["Boolean"]>,
  optTolerance?: Maybe<Scalars["Float"]>,
  threshold?: Maybe<Scalars["Int"]>,
  blackOnWhite?: Maybe<Scalars["Boolean"]>,
  color?: Maybe<Scalars["String"]>,
  background?: Maybe<Scalars["String"]>,
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY"
}

export type Query = {
  __typename?: "Query",
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  markdownRemark?: Maybe<MarkdownRemark>,
  allMarkdownRemark: MarkdownRemarkConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  softwareJson?: Maybe<SoftwareJson>,
  allSoftwareJson: SoftwareJsonConnection,
  booksJson?: Maybe<BooksJson>,
  allBooksJson: BooksJsonConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childBooksJson?: Maybe<BooksJsonFilterInput>,
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>,
  childSoftwareJson?: Maybe<SoftwareJsonFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>,
  html?: Maybe<StringQueryOperatorInput>,
  htmlAst?: Maybe<JsonQueryOperatorInput>,
  excerptAst?: Maybe<JsonQueryOperatorInput>,
  headings?: Maybe<MarkdownHeadingFilterListInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  tableOfContents?: Maybe<StringQueryOperatorInput>,
  wordCount?: Maybe<MarkdownWordCountFilterInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>,
  sort?: Maybe<MarkdownRemarkSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QuerySiteArgs = {
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QuerySoftwareJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  _2019?: Maybe<StringQueryOperatorInput>,
  _2020?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSoftwareJsonArgs = {
  filter?: Maybe<SoftwareJsonFilterInput>,
  sort?: Maybe<SoftwareJsonSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QueryBooksJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  start?: Maybe<StringQueryOperatorInput>,
  end?: Maybe<StringQueryOperatorInput>,
  total?: Maybe<StringQueryOperatorInput>,
  numpages?: Maybe<StringQueryOperatorInput>,
  currentpage?: Maybe<StringQueryOperatorInput>,
  book?: Maybe<BooksJsonBookFilterListInput>
};


export type QueryAllBooksJsonArgs = {
  filter?: Maybe<BooksJsonFilterInput>,
  sort?: Maybe<BooksJsonSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>
};

export type Site = Node & {
  __typename?: "Site",
  siteMetadata: SiteSiteMetadata,
  port?: Maybe<Scalars["Int"]>,
  host?: Maybe<Scalars["String"]>,
  polyfill?: Maybe<Scalars["Boolean"]>,
  pathPrefix?: Maybe<Scalars["String"]>,
  buildTime?: Maybe<Scalars["Date"]>,
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>,
  fromNow?: Maybe<Scalars["Boolean"]>,
  difference?: Maybe<Scalars["String"]>,
  locale?: Maybe<Scalars["String"]>
};

export type SiteConnection = {
  __typename?: "SiteConnection",
  totalCount: Scalars["Int"],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  __typename?: "SiteEdge",
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export enum SiteFieldsEnum {
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataAuthor = "siteMetadata___author",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataSocialTwitter = "siteMetadata___social___twitter",
  Port = "port",
  Host = "host",
  Polyfill = "polyfill",
  PathPrefix = "pathPrefix",
  BuildTime = "buildTime",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type SiteFilterInput = {
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type SitePage = Node & {
  __typename?: "SitePage",
  path: Scalars["String"],
  component: Scalars["String"],
  internalComponentName: Scalars["String"],
  componentChunkName: Scalars["String"],
  matchPath?: Maybe<Scalars["String"]>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars["String"]>,
  componentPath?: Maybe<Scalars["String"]>,
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type SitePageConnection = {
  __typename?: "SitePageConnection",
  totalCount: Scalars["Int"],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  __typename?: "SitePageContext",
  slug?: Maybe<Scalars["String"]>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  __typename?: "SitePageEdge",
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export enum SitePageFieldsEnum {
  Path = "path",
  Component = "component",
  InternalComponentName = "internalComponentName",
  ComponentChunkName = "componentChunkName",
  MatchPath = "matchPath",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  ContextSlug = "context___slug",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorVersion = "pluginCreator___version",
  PluginCreatorPluginOptionsPlugins = "pluginCreator___pluginOptions___plugins",
  PluginCreatorPluginOptionsPluginsResolve = "pluginCreator___pluginOptions___plugins___resolve",
  PluginCreatorPluginOptionsPluginsId = "pluginCreator___pluginOptions___plugins___id",
  PluginCreatorPluginOptionsPluginsName = "pluginCreator___pluginOptions___plugins___name",
  PluginCreatorPluginOptionsPluginsVersion = "pluginCreator___pluginOptions___plugins___version",
  PluginCreatorPluginOptionsPluginsBrowserApIs = "pluginCreator___pluginOptions___plugins___browserAPIs",
  PluginCreatorPluginOptionsPluginsPluginFilepath = "pluginCreator___pluginOptions___plugins___pluginFilepath",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsStylesProviderInjectFirst = "pluginCreator___pluginOptions___stylesProvider___injectFirst",
  PluginCreatorPluginOptionsMaxWidth = "pluginCreator___pluginOptions___maxWidth",
  PluginCreatorPluginOptionsPathPrefix = "pluginCreator___pluginOptions___pathPrefix",
  PluginCreatorPluginOptionsWrapperStyle = "pluginCreator___pluginOptions___wrapperStyle",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___backgroundColor",
  PluginCreatorPluginOptionsLinkImagesToOriginal = "pluginCreator___pluginOptions___linkImagesToOriginal",
  PluginCreatorPluginOptionsShowCaptions = "pluginCreator___pluginOptions___showCaptions",
  PluginCreatorPluginOptionsMarkdownCaptions = "pluginCreator___pluginOptions___markdownCaptions",
  PluginCreatorPluginOptionsWithWebp = "pluginCreator___pluginOptions___withWebp",
  PluginCreatorPluginOptionsTracedSvg = "pluginCreator___pluginOptions___tracedSVG",
  PluginCreatorPluginOptionsLoading = "pluginCreator___pluginOptions___loading",
  PluginCreatorPluginOptionsDisableBgImageOnAlpha = "pluginCreator___pluginOptions___disableBgImageOnAlpha",
  PluginCreatorPluginOptionsDisableBgImage = "pluginCreator___pluginOptions___disableBgImage",
  PluginCreatorPluginOptionsIgnoreFileExtensions = "pluginCreator___pluginOptions___ignoreFileExtensions",
  PluginCreatorPluginOptionsTrackingId = "pluginCreator___pluginOptions___trackingId",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsComponent = "pluginCreator___pluginOptions___component",
  PluginCreatorPluginOptionsBucketName = "pluginCreator___pluginOptions___bucketName",
  PluginCreatorPluginOptionsProtocol = "pluginCreator___pluginOptions___protocol",
  PluginCreatorPluginOptionsHostname = "pluginCreator___pluginOptions___hostname",
  PluginCreatorPluginOptionsPathCheck = "pluginCreator___pluginOptions___pathCheck",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPackageJsonName = "pluginCreator___packageJson___name",
  PluginCreatorPackageJsonDescription = "pluginCreator___packageJson___description",
  PluginCreatorPackageJsonVersion = "pluginCreator___packageJson___version",
  PluginCreatorPackageJsonMain = "pluginCreator___packageJson___main",
  PluginCreatorPackageJsonLicense = "pluginCreator___packageJson___license",
  PluginCreatorPackageJsonDependencies = "pluginCreator___packageJson___dependencies",
  PluginCreatorPackageJsonDependenciesName = "pluginCreator___packageJson___dependencies___name",
  PluginCreatorPackageJsonDependenciesVersion = "pluginCreator___packageJson___dependencies___version",
  PluginCreatorPackageJsonDevDependencies = "pluginCreator___packageJson___devDependencies",
  PluginCreatorPackageJsonDevDependenciesName = "pluginCreator___packageJson___devDependencies___name",
  PluginCreatorPackageJsonDevDependenciesVersion = "pluginCreator___packageJson___devDependencies___version",
  PluginCreatorPackageJsonPeerDependencies = "pluginCreator___packageJson___peerDependencies",
  PluginCreatorPackageJsonPeerDependenciesName = "pluginCreator___packageJson___peerDependencies___name",
  PluginCreatorPackageJsonPeerDependenciesVersion = "pluginCreator___packageJson___peerDependencies___version",
  PluginCreatorPackageJsonKeywords = "pluginCreator___packageJson___keywords",
  PluginCreatorId = "pluginCreatorId",
  ComponentPath = "componentPath",
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type"
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin",
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars["String"]>,
  name?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>,
  pluginFilepath?: Maybe<Scalars["String"]>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection",
  totalCount: Scalars["Int"],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge",
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export enum SitePluginFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Resolve = "resolve",
  Name = "name",
  Version = "version",
  PluginOptionsPlugins = "pluginOptions___plugins",
  PluginOptionsPluginsResolve = "pluginOptions___plugins___resolve",
  PluginOptionsPluginsId = "pluginOptions___plugins___id",
  PluginOptionsPluginsName = "pluginOptions___plugins___name",
  PluginOptionsPluginsVersion = "pluginOptions___plugins___version",
  PluginOptionsPluginsPluginOptionsMaxWidth = "pluginOptions___plugins___pluginOptions___maxWidth",
  PluginOptionsPluginsPluginOptionsPathPrefix = "pluginOptions___plugins___pluginOptions___pathPrefix",
  PluginOptionsPluginsPluginOptionsWrapperStyle = "pluginOptions___plugins___pluginOptions___wrapperStyle",
  PluginOptionsPluginsPluginOptionsBackgroundColor = "pluginOptions___plugins___pluginOptions___backgroundColor",
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = "pluginOptions___plugins___pluginOptions___linkImagesToOriginal",
  PluginOptionsPluginsPluginOptionsShowCaptions = "pluginOptions___plugins___pluginOptions___showCaptions",
  PluginOptionsPluginsPluginOptionsMarkdownCaptions = "pluginOptions___plugins___pluginOptions___markdownCaptions",
  PluginOptionsPluginsPluginOptionsWithWebp = "pluginOptions___plugins___pluginOptions___withWebp",
  PluginOptionsPluginsPluginOptionsTracedSvg = "pluginOptions___plugins___pluginOptions___tracedSVG",
  PluginOptionsPluginsPluginOptionsLoading = "pluginOptions___plugins___pluginOptions___loading",
  PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = "pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha",
  PluginOptionsPluginsPluginOptionsDisableBgImage = "pluginOptions___plugins___pluginOptions___disableBgImage",
  PluginOptionsPluginsPluginOptionsIgnoreFileExtensions = "pluginOptions___plugins___pluginOptions___ignoreFileExtensions",
  PluginOptionsPluginsBrowserApIs = "pluginOptions___plugins___browserAPIs",
  PluginOptionsPluginsPluginFilepath = "pluginOptions___plugins___pluginFilepath",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsStylesProviderInjectFirst = "pluginOptions___stylesProvider___injectFirst",
  PluginOptionsMaxWidth = "pluginOptions___maxWidth",
  PluginOptionsPathPrefix = "pluginOptions___pathPrefix",
  PluginOptionsWrapperStyle = "pluginOptions___wrapperStyle",
  PluginOptionsBackgroundColor = "pluginOptions___backgroundColor",
  PluginOptionsLinkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  PluginOptionsShowCaptions = "pluginOptions___showCaptions",
  PluginOptionsMarkdownCaptions = "pluginOptions___markdownCaptions",
  PluginOptionsWithWebp = "pluginOptions___withWebp",
  PluginOptionsTracedSvg = "pluginOptions___tracedSVG",
  PluginOptionsLoading = "pluginOptions___loading",
  PluginOptionsDisableBgImageOnAlpha = "pluginOptions___disableBgImageOnAlpha",
  PluginOptionsDisableBgImage = "pluginOptions___disableBgImage",
  PluginOptionsIgnoreFileExtensions = "pluginOptions___ignoreFileExtensions",
  PluginOptionsTrackingId = "pluginOptions___trackingId",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsComponent = "pluginOptions___component",
  PluginOptionsBucketName = "pluginOptions___bucketName",
  PluginOptionsProtocol = "pluginOptions___protocol",
  PluginOptionsHostname = "pluginOptions___hostname",
  PluginOptionsPathCheck = "pluginOptions___pathCheck",
  NodeApIs = "nodeAPIs",
  BrowserApIs = "browserAPIs",
  SsrApIs = "ssrAPIs",
  PluginFilepath = "pluginFilepath",
  PackageJsonName = "packageJson___name",
  PackageJsonDescription = "packageJson___description",
  PackageJsonVersion = "packageJson___version",
  PackageJsonMain = "packageJson___main",
  PackageJsonLicense = "packageJson___license",
  PackageJsonDependencies = "packageJson___dependencies",
  PackageJsonDependenciesName = "packageJson___dependencies___name",
  PackageJsonDependenciesVersion = "packageJson___dependencies___version",
  PackageJsonDevDependencies = "packageJson___devDependencies",
  PackageJsonDevDependenciesName = "packageJson___devDependencies___name",
  PackageJsonDevDependenciesVersion = "packageJson___devDependencies___version",
  PackageJsonPeerDependencies = "packageJson___peerDependencies",
  PackageJsonPeerDependenciesName = "packageJson___peerDependencies___name",
  PackageJsonPeerDependenciesVersion = "packageJson___peerDependencies___version",
  PackageJsonKeywords = "packageJson___keywords"
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson",
  name?: Maybe<Scalars["String"]>,
  description?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
  main?: Maybe<Scalars["String"]>,
  license?: Maybe<Scalars["String"]>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>,
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies",
  name?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies",
  name?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies",
  name?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions",
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>,
  path?: Maybe<Scalars["String"]>,
  name?: Maybe<Scalars["String"]>,
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProvider>,
  maxWidth?: Maybe<Scalars["Int"]>,
  pathPrefix?: Maybe<Scalars["String"]>,
  wrapperStyle?: Maybe<Scalars["String"]>,
  backgroundColor?: Maybe<Scalars["String"]>,
  linkImagesToOriginal?: Maybe<Scalars["Boolean"]>,
  showCaptions?: Maybe<Scalars["Boolean"]>,
  markdownCaptions?: Maybe<Scalars["Boolean"]>,
  withWebp?: Maybe<Scalars["Boolean"]>,
  tracedSVG?: Maybe<Scalars["Boolean"]>,
  loading?: Maybe<Scalars["String"]>,
  disableBgImageOnAlpha?: Maybe<Scalars["Boolean"]>,
  disableBgImage?: Maybe<Scalars["Boolean"]>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars["String"]>>>,
  trackingId?: Maybe<Scalars["String"]>,
  short_name?: Maybe<Scalars["String"]>,
  start_url?: Maybe<Scalars["String"]>,
  background_color?: Maybe<Scalars["String"]>,
  theme_color?: Maybe<Scalars["String"]>,
  display?: Maybe<Scalars["String"]>,
  icon?: Maybe<Scalars["String"]>,
  component?: Maybe<Scalars["String"]>,
  bucketName?: Maybe<Scalars["String"]>,
  protocol?: Maybe<Scalars["String"]>,
  hostname?: Maybe<Scalars["String"]>,
  pathCheck?: Maybe<Scalars["Boolean"]>,
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>,
  path?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  stylesProvider?: Maybe<SitePluginPluginOptionsStylesProviderFilterInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
  trackingId?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  bucketName?: Maybe<StringQueryOperatorInput>,
  protocol?: Maybe<StringQueryOperatorInput>,
  hostname?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: "SitePluginPluginOptionsPlugins",
  resolve?: Maybe<Scalars["String"]>,
  id?: Maybe<Scalars["String"]>,
  name?: Maybe<Scalars["String"]>,
  version?: Maybe<Scalars["String"]>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>,
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>,
  pluginFilepath?: Maybe<Scalars["String"]>,
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>,
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: "SitePluginPluginOptionsPluginsPluginOptions",
  maxWidth?: Maybe<Scalars["Int"]>,
  pathPrefix?: Maybe<Scalars["String"]>,
  wrapperStyle?: Maybe<Scalars["String"]>,
  backgroundColor?: Maybe<Scalars["String"]>,
  linkImagesToOriginal?: Maybe<Scalars["Boolean"]>,
  showCaptions?: Maybe<Scalars["Boolean"]>,
  markdownCaptions?: Maybe<Scalars["Boolean"]>,
  withWebp?: Maybe<Scalars["Boolean"]>,
  tracedSVG?: Maybe<Scalars["Boolean"]>,
  loading?: Maybe<Scalars["String"]>,
  disableBgImageOnAlpha?: Maybe<Scalars["Boolean"]>,
  disableBgImage?: Maybe<Scalars["Boolean"]>,
  ignoreFileExtensions?: Maybe<Array<Maybe<Scalars["String"]>>>,
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  ignoreFileExtensions?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsStylesProvider = {
  __typename?: "SitePluginPluginOptionsStylesProvider",
  injectFirst?: Maybe<Scalars["Boolean"]>,
};

export type SitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata",
  title: Scalars["String"],
  description: Scalars["String"],
  author: Scalars["String"],
  siteUrl?: Maybe<Scalars["String"]>,
  social?: Maybe<SiteSiteMetadataSocial>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  siteUrl?: Maybe<StringQueryOperatorInput>,
  social?: Maybe<SiteSiteMetadataSocialFilterInput>,
};

export type SiteSiteMetadataSocial = {
  __typename?: "SiteSiteMetadataSocial",
  twitter?: Maybe<Scalars["String"]>,
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SoftwareJson = Node & {
  __typename?: "SoftwareJson",
  id: Scalars["ID"],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  _2019?: Maybe<Array<Maybe<Scalars["String"]>>>,
  _2020?: Maybe<Array<Maybe<Scalars["String"]>>>,
};

export type SoftwareJsonConnection = {
  __typename?: "SoftwareJsonConnection",
  totalCount: Scalars["Int"],
  edges: Array<SoftwareJsonEdge>,
  nodes: Array<SoftwareJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars["String"]>,
  group: Array<SoftwareJsonGroupConnection>,
};


export type SoftwareJsonConnectionDistinctArgs = {
  field: SoftwareJsonFieldsEnum
};


export type SoftwareJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>,
  limit?: Maybe<Scalars["Int"]>,
  field: SoftwareJsonFieldsEnum
};

export type SoftwareJsonEdge = {
  __typename?: "SoftwareJsonEdge",
  next?: Maybe<SoftwareJson>,
  node: SoftwareJson,
  previous?: Maybe<SoftwareJson>,
};

export enum SoftwareJsonFieldsEnum {
  Id = "id",
  ParentId = "parent___id",
  ParentParentId = "parent___parent___id",
  ParentParentParentId = "parent___parent___parent___id",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentChildren = "parent___children",
  ParentChildrenId = "parent___children___id",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  Children = "children",
  ChildrenId = "children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentParentId = "children___parent___parent___id",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenChildren = "children___children",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  2019 = "_2019",
  2020 = "_2020"
}

export type SoftwareJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  _2019?: Maybe<StringQueryOperatorInput>,
  _2020?: Maybe<StringQueryOperatorInput>,
};

export type SoftwareJsonGroupConnection = {
  __typename?: "SoftwareJsonGroupConnection",
  totalCount: Scalars["Int"],
  edges: Array<SoftwareJsonEdge>,
  nodes: Array<SoftwareJson>,
  pageInfo: PageInfo,
  field: Scalars["String"],
  fieldValue?: Maybe<Scalars["String"]>,
};

export type SoftwareJsonSortInput = {
  fields?: Maybe<Array<Maybe<SoftwareJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC"
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>,
  ne?: Maybe<Scalars["String"]>,
  in?: Maybe<Array<Maybe<Scalars["String"]>>>,
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>,
  regex?: Maybe<Scalars["String"]>,
  glob?: Maybe<Scalars["String"]>,
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: "ImageSharpFixed" }
  & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpFluidFragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "base64" | "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: "ImageSharpFluid" }
  & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type GatsbyImageSharpResolutionsFragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "base64" | "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpResolutions_TracedSvgFragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "tracedSVG" | "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpResolutions_WithWebpFragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpResolutions_NoBase64Fragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet">
  );

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = (
  { __typename?: "ImageSharpResolutions" }
  & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp">
  );

export type GatsbyImageSharpSizesFragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "base64" | "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpSizes_TracedSvgFragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpSizes_WithWebpFragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "base64" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type GatsbyImageSharpSizes_NoBase64Fragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "sizes">
  );

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = (
  { __typename?: "ImageSharpSizes" }
  & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes">
  );

export type PagesQueryQueryVariables = {};


export type PagesQueryQuery = (
  { __typename?: "Query" }
  & {
  allSitePage: (
    { __typename?: "SitePageConnection" }
    & {
    nodes: Array<(
      { __typename?: "SitePage" }
      & Pick<SitePage, "path">
      )>
  }
    )
}
  );

export type BioQueryVariables = {};


export type BioQuery = (
  { __typename?: "Query" }
  & {
  avatar: Maybe<(
    { __typename?: "File" }
    & {
    childImageSharp: Maybe<(
      { __typename?: "ImageSharp" }
      & {
      fixed: Maybe<(
        { __typename?: "ImageSharpFixed" }
        & GatsbyImageSharpFixedFragment
        )>
    }
      )>
  }
    )>, site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "author">
      & {
      social: Maybe<(
        { __typename?: "SiteSiteMetadataSocial" }
        & Pick<SiteSiteMetadataSocial, "twitter">
        )>
    }
      )
  }
    )>
}
  );

export type HeaderQueryVariables = {};


export type HeaderQuery = (
  { __typename?: "Query" }
  & {
  logo: Maybe<(
    { __typename?: "File" }
    & {
    childImageSharp: Maybe<(
      { __typename?: "ImageSharp" }
      & {
      fluid: Maybe<(
        { __typename?: "ImageSharpFluid" }
        & GatsbyImageSharpFluidFragment
        )>
    }
      )>
  }
    )>, avatar: Maybe<(
    { __typename?: "File" }
    & {
    childImageSharp: Maybe<(
      { __typename?: "ImageSharp" }
      & {
      fluid: Maybe<(
        { __typename?: "ImageSharpFluid" }
        & GatsbyImageSharpFluidFragment
        )>
    }
      )>
  }
    )>
}
  );

export type SeoQueryVariables = {};


export type SeoQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title" | "description" | "author">
      )
  }
    )>
}
  );

export type NotFoundPageQueryVariables = {};


export type NotFoundPageQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title">
      )
  }
    )>
}
  );

export type BlogIndexQueryVariables = {};


export type BlogIndexQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title">
      )
  }
    )>, allMarkdownRemark: (
    { __typename?: "MarkdownRemarkConnection" }
    & {
    edges: Array<(
      { __typename?: "MarkdownRemarkEdge" }
      & {
      node: (
        { __typename?: "MarkdownRemark" }
        & Pick<MarkdownRemark, "excerpt">
        & {
        fields: Maybe<(
          { __typename?: "MarkdownRemarkFields" }
          & Pick<MarkdownRemarkFields, "slug">
          )>, frontmatter: Maybe<(
          { __typename?: "MarkdownRemarkFrontmatter" }
          & Pick<MarkdownRemarkFrontmatter, "date" | "title" | "description">
          )>
      }
        )
    }
      )>
  }
    )
}
  );

export type TimelineIndexQueryVariables = {};


export type TimelineIndexQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title">
      )
  }
    )>, allMarkdownRemark: (
    { __typename?: "MarkdownRemarkConnection" }
    & {
    edges: Array<(
      { __typename?: "MarkdownRemarkEdge" }
      & {
      node: (
        { __typename?: "MarkdownRemark" }
        & Pick<MarkdownRemark, "excerpt">
        & {
        fields: Maybe<(
          { __typename?: "MarkdownRemarkFields" }
          & Pick<MarkdownRemarkFields, "slug">
          )>, frontmatter: Maybe<(
          { __typename?: "MarkdownRemarkFrontmatter" }
          & Pick<MarkdownRemarkFrontmatter, "date" | "title" | "description">
          )>
      }
        )
    }
      )>
  }
    )
}
  );

export type MusicQueryVariables = {};


export type MusicQuery = (
  { __typename?: "Query" }
  & {
  latentSignal: Maybe<(
    { __typename?: "File" }
    & {
    childImageSharp: Maybe<(
      { __typename?: "ImageSharp" }
      & {
      fluid: Maybe<(
        { __typename?: "ImageSharpFluid" }
        & GatsbyImageSharpFluidFragment
        )>
    }
      )>
  }
    )>, clioCover: Maybe<(
    { __typename?: "File" }
    & {
    childImageSharp: Maybe<(
      { __typename?: "ImageSharp" }
      & {
      fluid: Maybe<(
        { __typename?: "ImageSharpFluid" }
        & GatsbyImageSharpFluidFragment
        )>
    }
      )>
  }
    )>, site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title">
      )
  }
    )>, allMarkdownRemark: (
    { __typename?: "MarkdownRemarkConnection" }
    & {
    edges: Array<(
      { __typename?: "MarkdownRemarkEdge" }
      & {
      node: (
        { __typename?: "MarkdownRemark" }
        & Pick<MarkdownRemark, "excerpt">
        & {
        fields: Maybe<(
          { __typename?: "MarkdownRemarkFields" }
          & Pick<MarkdownRemarkFields, "slug">
          )>, frontmatter: Maybe<(
          { __typename?: "MarkdownRemarkFrontmatter" }
          & Pick<MarkdownRemarkFrontmatter, "date" | "title" | "description">
          )>
      }
        )
    }
      )>
  }
    )
}
  );

export type SoftwareQueryVariables = {};


export type SoftwareQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & Pick<Site, "host">
    )>
}
  );

export type BlogPostBySlugQueryVariables = {
  slug: Scalars["String"]
};


export type BlogPostBySlugQuery = (
  { __typename?: "Query" }
  & {
  site: Maybe<(
    { __typename?: "Site" }
    & {
    siteMetadata: (
      { __typename?: "SiteSiteMetadata" }
      & Pick<SiteSiteMetadata, "title" | "author">
      )
  }
    )>, markdownRemark: Maybe<(
    { __typename?: "MarkdownRemark" }
    & Pick<MarkdownRemark, "id" | "excerpt" | "html">
    & {
    frontmatter: Maybe<(
      { __typename?: "MarkdownRemarkFrontmatter" }
      & Pick<MarkdownRemarkFrontmatter, "title" | "date" | "updated" | "description">
      )>
  }
    )>, allBooksJson: (
    { __typename?: "BooksJsonConnection" }
    & {
    edges: Array<(
      { __typename?: "BooksJsonEdge" }
      & {
      node: (
        { __typename?: "BooksJson" }
        & {
        book: Maybe<Array<Maybe<(
          { __typename?: "BooksJsonBook" }
          & Pick<BooksJsonBook, "title" | "link">
          & {
          authors: Maybe<(
            { __typename?: "BooksJsonBookAuthors" }
            & {
            author: Maybe<(
              { __typename?: "BooksJsonBookAuthorsAuthor" }
              & Pick<BooksJsonBookAuthorsAuthor, "name">
              )>
          }
            )>
        }
          )>>>
      }
        )
    }
      )>
  }
    )
}
  );
