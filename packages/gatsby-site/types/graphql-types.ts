export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  GatsbyImageData: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  speed?: InputMaybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars["Int"]>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  changeTime: Scalars["Date"];
  children: Array<Node>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<DirectoryEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  opacity?: InputMaybe<Scalars["Int"]>;
  shadow: Scalars["String"];
};

export type File = Node & {
  __typename?: "File";
  absolutePath: Scalars["String"];
  accessTime: Scalars["Date"];
  atime: Scalars["Date"];
  atimeMs: Scalars["Float"];
  base: Scalars["String"];
  birthTime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  changeTime: Scalars["Date"];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  ctime: Scalars["Date"];
  ctimeMs: Scalars["Float"];
  dev: Scalars["Int"];
  dir: Scalars["String"];
  ext: Scalars["String"];
  extension: Scalars["String"];
  gid: Scalars["Int"];
  id: Scalars["ID"];
  ino: Scalars["Float"];
  internal: Internal;
  mode: Scalars["Int"];
  modifiedTime: Scalars["Date"];
  mtime: Scalars["Date"];
  mtimeMs: Scalars["Float"];
  name: Scalars["String"];
  nlink: Scalars["Int"];
  parent?: Maybe<Node>;
  prettySize: Scalars["String"];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  rdev: Scalars["Int"];
  relativeDirectory: Scalars["String"];
  relativePath: Scalars["String"];
  root: Scalars["String"];
  size: Scalars["Int"];
  sourceInstanceName: Scalars["String"];
  uid: Scalars["Int"];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  ChildImageSharpChildren = "childImageSharp___children",
  ChildImageSharpChildrenChildren = "childImageSharp___children___children",
  ChildImageSharpChildrenChildrenChildren = "childImageSharp___children___children___children",
  ChildImageSharpChildrenChildrenId = "childImageSharp___children___children___id",
  ChildImageSharpChildrenId = "childImageSharp___children___id",
  ChildImageSharpChildrenInternalContent = "childImageSharp___children___internal___content",
  ChildImageSharpChildrenInternalContentDigest = "childImageSharp___children___internal___contentDigest",
  ChildImageSharpChildrenInternalDescription = "childImageSharp___children___internal___description",
  ChildImageSharpChildrenInternalFieldOwners = "childImageSharp___children___internal___fieldOwners",
  ChildImageSharpChildrenInternalIgnoreType = "childImageSharp___children___internal___ignoreType",
  ChildImageSharpChildrenInternalMediaType = "childImageSharp___children___internal___mediaType",
  ChildImageSharpChildrenInternalOwner = "childImageSharp___children___internal___owner",
  ChildImageSharpChildrenInternalType = "childImageSharp___children___internal___type",
  ChildImageSharpChildrenParentChildren = "childImageSharp___children___parent___children",
  ChildImageSharpChildrenParentId = "childImageSharp___children___parent___id",
  ChildImageSharpFixedAspectRatio = "childImageSharp___fixed___aspectRatio",
  ChildImageSharpFixedBase64 = "childImageSharp___fixed___base64",
  ChildImageSharpFixedHeight = "childImageSharp___fixed___height",
  ChildImageSharpFixedOriginalName = "childImageSharp___fixed___originalName",
  ChildImageSharpFixedSrc = "childImageSharp___fixed___src",
  ChildImageSharpFixedSrcSet = "childImageSharp___fixed___srcSet",
  ChildImageSharpFixedSrcSetWebp = "childImageSharp___fixed___srcSetWebp",
  ChildImageSharpFixedSrcWebp = "childImageSharp___fixed___srcWebp",
  ChildImageSharpFixedTracedSvg = "childImageSharp___fixed___tracedSVG",
  ChildImageSharpFixedWidth = "childImageSharp___fixed___width",
  ChildImageSharpFluidAspectRatio = "childImageSharp___fluid___aspectRatio",
  ChildImageSharpFluidBase64 = "childImageSharp___fluid___base64",
  ChildImageSharpFluidOriginalImg = "childImageSharp___fluid___originalImg",
  ChildImageSharpFluidOriginalName = "childImageSharp___fluid___originalName",
  ChildImageSharpFluidPresentationHeight = "childImageSharp___fluid___presentationHeight",
  ChildImageSharpFluidPresentationWidth = "childImageSharp___fluid___presentationWidth",
  ChildImageSharpFluidSizes = "childImageSharp___fluid___sizes",
  ChildImageSharpFluidSrc = "childImageSharp___fluid___src",
  ChildImageSharpFluidSrcSet = "childImageSharp___fluid___srcSet",
  ChildImageSharpFluidSrcSetWebp = "childImageSharp___fluid___srcSetWebp",
  ChildImageSharpFluidSrcWebp = "childImageSharp___fluid___srcWebp",
  ChildImageSharpFluidTracedSvg = "childImageSharp___fluid___tracedSVG",
  ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
  ChildImageSharpId = "childImageSharp___id",
  ChildImageSharpInternalContent = "childImageSharp___internal___content",
  ChildImageSharpInternalContentDigest = "childImageSharp___internal___contentDigest",
  ChildImageSharpInternalDescription = "childImageSharp___internal___description",
  ChildImageSharpInternalFieldOwners = "childImageSharp___internal___fieldOwners",
  ChildImageSharpInternalIgnoreType = "childImageSharp___internal___ignoreType",
  ChildImageSharpInternalMediaType = "childImageSharp___internal___mediaType",
  ChildImageSharpInternalOwner = "childImageSharp___internal___owner",
  ChildImageSharpInternalType = "childImageSharp___internal___type",
  ChildImageSharpOriginalHeight = "childImageSharp___original___height",
  ChildImageSharpOriginalSrc = "childImageSharp___original___src",
  ChildImageSharpOriginalWidth = "childImageSharp___original___width",
  ChildImageSharpParentChildren = "childImageSharp___parent___children",
  ChildImageSharpParentChildrenChildren = "childImageSharp___parent___children___children",
  ChildImageSharpParentChildrenId = "childImageSharp___parent___children___id",
  ChildImageSharpParentId = "childImageSharp___parent___id",
  ChildImageSharpParentInternalContent = "childImageSharp___parent___internal___content",
  ChildImageSharpParentInternalContentDigest = "childImageSharp___parent___internal___contentDigest",
  ChildImageSharpParentInternalDescription = "childImageSharp___parent___internal___description",
  ChildImageSharpParentInternalFieldOwners = "childImageSharp___parent___internal___fieldOwners",
  ChildImageSharpParentInternalIgnoreType = "childImageSharp___parent___internal___ignoreType",
  ChildImageSharpParentInternalMediaType = "childImageSharp___parent___internal___mediaType",
  ChildImageSharpParentInternalOwner = "childImageSharp___parent___internal___owner",
  ChildImageSharpParentInternalType = "childImageSharp___parent___internal___type",
  ChildImageSharpParentParentChildren = "childImageSharp___parent___parent___children",
  ChildImageSharpParentParentId = "childImageSharp___parent___parent___id",
  ChildImageSharpResizeAspectRatio = "childImageSharp___resize___aspectRatio",
  ChildImageSharpResizeHeight = "childImageSharp___resize___height",
  ChildImageSharpResizeOriginalName = "childImageSharp___resize___originalName",
  ChildImageSharpResizeSrc = "childImageSharp___resize___src",
  ChildImageSharpResizeTracedSvg = "childImageSharp___resize___tracedSVG",
  ChildImageSharpResizeWidth = "childImageSharp___resize___width",
  ChildMdxBody = "childMdx___body",
  ChildMdxChildren = "childMdx___children",
  ChildMdxChildrenChildren = "childMdx___children___children",
  ChildMdxChildrenChildrenChildren = "childMdx___children___children___children",
  ChildMdxChildrenChildrenId = "childMdx___children___children___id",
  ChildMdxChildrenId = "childMdx___children___id",
  ChildMdxChildrenInternalContent = "childMdx___children___internal___content",
  ChildMdxChildrenInternalContentDigest = "childMdx___children___internal___contentDigest",
  ChildMdxChildrenInternalDescription = "childMdx___children___internal___description",
  ChildMdxChildrenInternalFieldOwners = "childMdx___children___internal___fieldOwners",
  ChildMdxChildrenInternalIgnoreType = "childMdx___children___internal___ignoreType",
  ChildMdxChildrenInternalMediaType = "childMdx___children___internal___mediaType",
  ChildMdxChildrenInternalOwner = "childMdx___children___internal___owner",
  ChildMdxChildrenInternalType = "childMdx___children___internal___type",
  ChildMdxChildrenParentChildren = "childMdx___children___parent___children",
  ChildMdxChildrenParentId = "childMdx___children___parent___id",
  ChildMdxExcerpt = "childMdx___excerpt",
  ChildMdxExportsMetaCategory = "childMdx___exports___meta___category",
  ChildMdxExportsMetaDate = "childMdx___exports___meta___date",
  ChildMdxExportsMetaDescription = "childMdx___exports___meta___description",
  ChildMdxExportsMetaDraft = "childMdx___exports___meta___draft",
  ChildMdxExportsMetaImageAlt = "childMdx___exports___meta___imageAlt",
  ChildMdxExportsMetaLinkText = "childMdx___exports___meta___linkText",
  ChildMdxExportsMetaTitle = "childMdx___exports___meta___title",
  ChildMdxExportsMetaUpdated = "childMdx___exports___meta___updated",
  ChildMdxFieldsSlug = "childMdx___fields___slug",
  ChildMdxFileAbsolutePath = "childMdx___fileAbsolutePath",
  ChildMdxFrontmatterTitle = "childMdx___frontmatter___title",
  ChildMdxHeadings = "childMdx___headings",
  ChildMdxHeadingsDepth = "childMdx___headings___depth",
  ChildMdxHeadingsValue = "childMdx___headings___value",
  ChildMdxHtml = "childMdx___html",
  ChildMdxId = "childMdx___id",
  ChildMdxInternalContent = "childMdx___internal___content",
  ChildMdxInternalContentDigest = "childMdx___internal___contentDigest",
  ChildMdxInternalDescription = "childMdx___internal___description",
  ChildMdxInternalFieldOwners = "childMdx___internal___fieldOwners",
  ChildMdxInternalIgnoreType = "childMdx___internal___ignoreType",
  ChildMdxInternalMediaType = "childMdx___internal___mediaType",
  ChildMdxInternalOwner = "childMdx___internal___owner",
  ChildMdxInternalType = "childMdx___internal___type",
  ChildMdxMdxAst = "childMdx___mdxAST",
  ChildMdxParentChildren = "childMdx___parent___children",
  ChildMdxParentChildrenChildren = "childMdx___parent___children___children",
  ChildMdxParentChildrenId = "childMdx___parent___children___id",
  ChildMdxParentId = "childMdx___parent___id",
  ChildMdxParentInternalContent = "childMdx___parent___internal___content",
  ChildMdxParentInternalContentDigest = "childMdx___parent___internal___contentDigest",
  ChildMdxParentInternalDescription = "childMdx___parent___internal___description",
  ChildMdxParentInternalFieldOwners = "childMdx___parent___internal___fieldOwners",
  ChildMdxParentInternalIgnoreType = "childMdx___parent___internal___ignoreType",
  ChildMdxParentInternalMediaType = "childMdx___parent___internal___mediaType",
  ChildMdxParentInternalOwner = "childMdx___parent___internal___owner",
  ChildMdxParentInternalType = "childMdx___parent___internal___type",
  ChildMdxParentParentChildren = "childMdx___parent___parent___children",
  ChildMdxParentParentId = "childMdx___parent___parent___id",
  ChildMdxRawBody = "childMdx___rawBody",
  ChildMdxSlug = "childMdx___slug",
  ChildMdxTableOfContents = "childMdx___tableOfContents",
  ChildMdxTimeToRead = "childMdx___timeToRead",
  ChildMdxWordCountParagraphs = "childMdx___wordCount___paragraphs",
  ChildMdxWordCountSentences = "childMdx___wordCount___sentences",
  ChildMdxWordCountWords = "childMdx___wordCount___words",
  Children = "children",
  ChildrenImageSharp = "childrenImageSharp",
  ChildrenImageSharpChildren = "childrenImageSharp___children",
  ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
  ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
  ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
  ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
  ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
  ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
  ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
  ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
  ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
  ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
  ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
  ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
  ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
  ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
  ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
  ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
  ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
  ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
  ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
  ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
  ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
  ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
  ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
  ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
  ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
  ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
  ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
  ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
  ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
  ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
  ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
  ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
  ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
  ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
  ChildrenImageSharpId = "childrenImageSharp___id",
  ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
  ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
  ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
  ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
  ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
  ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
  ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
  ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
  ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
  ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
  ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
  ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
  ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
  ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
  ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
  ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
  ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
  ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
  ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
  ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
  ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
  ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
  ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
  ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
  ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
  ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
  ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
  ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
  ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
  ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
  ChildrenMdx = "childrenMdx",
  ChildrenMdxBody = "childrenMdx___body",
  ChildrenMdxChildren = "childrenMdx___children",
  ChildrenMdxChildrenChildren = "childrenMdx___children___children",
  ChildrenMdxChildrenChildrenChildren = "childrenMdx___children___children___children",
  ChildrenMdxChildrenChildrenId = "childrenMdx___children___children___id",
  ChildrenMdxChildrenId = "childrenMdx___children___id",
  ChildrenMdxChildrenInternalContent = "childrenMdx___children___internal___content",
  ChildrenMdxChildrenInternalContentDigest = "childrenMdx___children___internal___contentDigest",
  ChildrenMdxChildrenInternalDescription = "childrenMdx___children___internal___description",
  ChildrenMdxChildrenInternalFieldOwners = "childrenMdx___children___internal___fieldOwners",
  ChildrenMdxChildrenInternalIgnoreType = "childrenMdx___children___internal___ignoreType",
  ChildrenMdxChildrenInternalMediaType = "childrenMdx___children___internal___mediaType",
  ChildrenMdxChildrenInternalOwner = "childrenMdx___children___internal___owner",
  ChildrenMdxChildrenInternalType = "childrenMdx___children___internal___type",
  ChildrenMdxChildrenParentChildren = "childrenMdx___children___parent___children",
  ChildrenMdxChildrenParentId = "childrenMdx___children___parent___id",
  ChildrenMdxExcerpt = "childrenMdx___excerpt",
  ChildrenMdxExportsMetaCategory = "childrenMdx___exports___meta___category",
  ChildrenMdxExportsMetaDate = "childrenMdx___exports___meta___date",
  ChildrenMdxExportsMetaDescription = "childrenMdx___exports___meta___description",
  ChildrenMdxExportsMetaDraft = "childrenMdx___exports___meta___draft",
  ChildrenMdxExportsMetaImageAlt = "childrenMdx___exports___meta___imageAlt",
  ChildrenMdxExportsMetaLinkText = "childrenMdx___exports___meta___linkText",
  ChildrenMdxExportsMetaTitle = "childrenMdx___exports___meta___title",
  ChildrenMdxExportsMetaUpdated = "childrenMdx___exports___meta___updated",
  ChildrenMdxFieldsSlug = "childrenMdx___fields___slug",
  ChildrenMdxFileAbsolutePath = "childrenMdx___fileAbsolutePath",
  ChildrenMdxFrontmatterTitle = "childrenMdx___frontmatter___title",
  ChildrenMdxHeadings = "childrenMdx___headings",
  ChildrenMdxHeadingsDepth = "childrenMdx___headings___depth",
  ChildrenMdxHeadingsValue = "childrenMdx___headings___value",
  ChildrenMdxHtml = "childrenMdx___html",
  ChildrenMdxId = "childrenMdx___id",
  ChildrenMdxInternalContent = "childrenMdx___internal___content",
  ChildrenMdxInternalContentDigest = "childrenMdx___internal___contentDigest",
  ChildrenMdxInternalDescription = "childrenMdx___internal___description",
  ChildrenMdxInternalFieldOwners = "childrenMdx___internal___fieldOwners",
  ChildrenMdxInternalIgnoreType = "childrenMdx___internal___ignoreType",
  ChildrenMdxInternalMediaType = "childrenMdx___internal___mediaType",
  ChildrenMdxInternalOwner = "childrenMdx___internal___owner",
  ChildrenMdxInternalType = "childrenMdx___internal___type",
  ChildrenMdxMdxAst = "childrenMdx___mdxAST",
  ChildrenMdxParentChildren = "childrenMdx___parent___children",
  ChildrenMdxParentChildrenChildren = "childrenMdx___parent___children___children",
  ChildrenMdxParentChildrenId = "childrenMdx___parent___children___id",
  ChildrenMdxParentId = "childrenMdx___parent___id",
  ChildrenMdxParentInternalContent = "childrenMdx___parent___internal___content",
  ChildrenMdxParentInternalContentDigest = "childrenMdx___parent___internal___contentDigest",
  ChildrenMdxParentInternalDescription = "childrenMdx___parent___internal___description",
  ChildrenMdxParentInternalFieldOwners = "childrenMdx___parent___internal___fieldOwners",
  ChildrenMdxParentInternalIgnoreType = "childrenMdx___parent___internal___ignoreType",
  ChildrenMdxParentInternalMediaType = "childrenMdx___parent___internal___mediaType",
  ChildrenMdxParentInternalOwner = "childrenMdx___parent___internal___owner",
  ChildrenMdxParentInternalType = "childrenMdx___parent___internal___type",
  ChildrenMdxParentParentChildren = "childrenMdx___parent___parent___children",
  ChildrenMdxParentParentId = "childrenMdx___parent___parent___id",
  ChildrenMdxRawBody = "childrenMdx___rawBody",
  ChildrenMdxSlug = "childrenMdx___slug",
  ChildrenMdxTableOfContents = "childrenMdx___tableOfContents",
  ChildrenMdxTimeToRead = "childrenMdx___timeToRead",
  ChildrenMdxWordCountParagraphs = "childrenMdx___wordCount___paragraphs",
  ChildrenMdxWordCountSentences = "childrenMdx___wordCount___sentences",
  ChildrenMdxWordCountWords = "childrenMdx___wordCount___words",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Gid = "gid",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  PublicUrl = "publicURL",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<FileEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars["GatsbyImageData"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>;
  ne?: InputMaybe<Scalars["GatsbyImageData"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["GatsbyImageData"]>>>;
};

export enum GatsbyImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum GatsbyImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum GatsbyImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export type GoodreadsAuthor = Node & {
  __typename?: "GoodreadsAuthor";
  average_rating?: Maybe<Scalars["String"]>;
  books?: Maybe<Array<Maybe<GoodreadsBook>>>;
  children: Array<Node>;
  goodreadsId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image_url?: Maybe<Scalars["String"]>;
  internal: Internal;
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  ratings_count?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  small_image_url?: Maybe<Scalars["String"]>;
  text_reviews_count?: Maybe<Scalars["String"]>;
};

export type GoodreadsAuthorConnection = {
  __typename?: "GoodreadsAuthorConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsAuthorEdge>;
  group: Array<GoodreadsAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsAuthorConnectionDistinctArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorConnectionGroupArgs = {
  field: GoodreadsAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsAuthorConnectionMaxArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorConnectionMinArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorConnectionSumArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorEdge = {
  __typename?: "GoodreadsAuthorEdge";
  next?: Maybe<GoodreadsAuthor>;
  node: GoodreadsAuthor;
  previous?: Maybe<GoodreadsAuthor>;
};

export enum GoodreadsAuthorFieldsEnum {
  AverageRating = "average_rating",
  Books = "books",
  BooksAuthors = "books___authors",
  BooksAuthorsAverageRating = "books___authors___average_rating",
  BooksAuthorsBooks = "books___authors___books",
  BooksAuthorsBooksAuthors = "books___authors___books___authors",
  BooksAuthorsBooksAverageRating = "books___authors___books___average_rating",
  BooksAuthorsBooksChildren = "books___authors___books___children",
  BooksAuthorsBooksDescription = "books___authors___books___description",
  BooksAuthorsBooksEditionInformation = "books___authors___books___edition_information",
  BooksAuthorsBooksFormat = "books___authors___books___format",
  BooksAuthorsBooksGoodreadsId = "books___authors___books___goodreadsId",
  BooksAuthorsBooksId = "books___authors___books___id",
  BooksAuthorsBooksImageUrl = "books___authors___books___image_url",
  BooksAuthorsBooksIsbn = "books___authors___books___isbn",
  BooksAuthorsBooksIsbn13 = "books___authors___books___isbn13",
  BooksAuthorsBooksLargeImageUrl = "books___authors___books___large_image_url",
  BooksAuthorsBooksLink = "books___authors___books___link",
  BooksAuthorsBooksNumPages = "books___authors___books___num_pages",
  BooksAuthorsBooksPublicationDay = "books___authors___books___publication_day",
  BooksAuthorsBooksPublicationMonth = "books___authors___books___publication_month",
  BooksAuthorsBooksPublicationYear = "books___authors___books___publication_year",
  BooksAuthorsBooksPublished = "books___authors___books___published",
  BooksAuthorsBooksPublisher = "books___authors___books___publisher",
  BooksAuthorsBooksRatingsCount = "books___authors___books___ratings_count",
  BooksAuthorsBooksReviews = "books___authors___books___reviews",
  BooksAuthorsBooksSmallImageUrl = "books___authors___books___small_image_url",
  BooksAuthorsBooksTextReviewsCount = "books___authors___books___text_reviews_count",
  BooksAuthorsBooksTitle = "books___authors___books___title",
  BooksAuthorsBooksTitleWithoutSeries = "books___authors___books___title_without_series",
  BooksAuthorsBooksUri = "books___authors___books___uri",
  BooksAuthorsChildren = "books___authors___children",
  BooksAuthorsChildrenChildren = "books___authors___children___children",
  BooksAuthorsChildrenId = "books___authors___children___id",
  BooksAuthorsGoodreadsId = "books___authors___goodreadsId",
  BooksAuthorsId = "books___authors___id",
  BooksAuthorsImageUrl = "books___authors___image_url",
  BooksAuthorsInternalContent = "books___authors___internal___content",
  BooksAuthorsInternalContentDigest = "books___authors___internal___contentDigest",
  BooksAuthorsInternalDescription = "books___authors___internal___description",
  BooksAuthorsInternalFieldOwners = "books___authors___internal___fieldOwners",
  BooksAuthorsInternalIgnoreType = "books___authors___internal___ignoreType",
  BooksAuthorsInternalMediaType = "books___authors___internal___mediaType",
  BooksAuthorsInternalOwner = "books___authors___internal___owner",
  BooksAuthorsInternalType = "books___authors___internal___type",
  BooksAuthorsLink = "books___authors___link",
  BooksAuthorsName = "books___authors___name",
  BooksAuthorsParentChildren = "books___authors___parent___children",
  BooksAuthorsParentId = "books___authors___parent___id",
  BooksAuthorsRatingsCount = "books___authors___ratings_count",
  BooksAuthorsRole = "books___authors___role",
  BooksAuthorsSmallImageUrl = "books___authors___small_image_url",
  BooksAuthorsTextReviewsCount = "books___authors___text_reviews_count",
  BooksAverageRating = "books___average_rating",
  BooksChildren = "books___children",
  BooksChildrenChildren = "books___children___children",
  BooksChildrenChildrenChildren = "books___children___children___children",
  BooksChildrenChildrenId = "books___children___children___id",
  BooksChildrenId = "books___children___id",
  BooksChildrenInternalContent = "books___children___internal___content",
  BooksChildrenInternalContentDigest = "books___children___internal___contentDigest",
  BooksChildrenInternalDescription = "books___children___internal___description",
  BooksChildrenInternalFieldOwners = "books___children___internal___fieldOwners",
  BooksChildrenInternalIgnoreType = "books___children___internal___ignoreType",
  BooksChildrenInternalMediaType = "books___children___internal___mediaType",
  BooksChildrenInternalOwner = "books___children___internal___owner",
  BooksChildrenInternalType = "books___children___internal___type",
  BooksChildrenParentChildren = "books___children___parent___children",
  BooksChildrenParentId = "books___children___parent___id",
  BooksDescription = "books___description",
  BooksEditionInformation = "books___edition_information",
  BooksFormat = "books___format",
  BooksGoodreadsId = "books___goodreadsId",
  BooksId = "books___id",
  BooksImageUrl = "books___image_url",
  BooksInternalContent = "books___internal___content",
  BooksInternalContentDigest = "books___internal___contentDigest",
  BooksInternalDescription = "books___internal___description",
  BooksInternalFieldOwners = "books___internal___fieldOwners",
  BooksInternalIgnoreType = "books___internal___ignoreType",
  BooksInternalMediaType = "books___internal___mediaType",
  BooksInternalOwner = "books___internal___owner",
  BooksInternalType = "books___internal___type",
  BooksIsbn = "books___isbn",
  BooksIsbn13 = "books___isbn13",
  BooksLargeImageUrl = "books___large_image_url",
  BooksLink = "books___link",
  BooksNumPages = "books___num_pages",
  BooksParentChildren = "books___parent___children",
  BooksParentChildrenChildren = "books___parent___children___children",
  BooksParentChildrenId = "books___parent___children___id",
  BooksParentId = "books___parent___id",
  BooksParentInternalContent = "books___parent___internal___content",
  BooksParentInternalContentDigest = "books___parent___internal___contentDigest",
  BooksParentInternalDescription = "books___parent___internal___description",
  BooksParentInternalFieldOwners = "books___parent___internal___fieldOwners",
  BooksParentInternalIgnoreType = "books___parent___internal___ignoreType",
  BooksParentInternalMediaType = "books___parent___internal___mediaType",
  BooksParentInternalOwner = "books___parent___internal___owner",
  BooksParentInternalType = "books___parent___internal___type",
  BooksParentParentChildren = "books___parent___parent___children",
  BooksParentParentId = "books___parent___parent___id",
  BooksPublicationDay = "books___publication_day",
  BooksPublicationMonth = "books___publication_month",
  BooksPublicationYear = "books___publication_year",
  BooksPublished = "books___published",
  BooksPublisher = "books___publisher",
  BooksRatingsCount = "books___ratings_count",
  BooksReviews = "books___reviews",
  BooksReviewsBody = "books___reviews___body",
  BooksReviewsBookAuthors = "books___reviews___book___authors",
  BooksReviewsBookAverageRating = "books___reviews___book___average_rating",
  BooksReviewsBookChildren = "books___reviews___book___children",
  BooksReviewsBookDescription = "books___reviews___book___description",
  BooksReviewsBookEditionInformation = "books___reviews___book___edition_information",
  BooksReviewsBookFormat = "books___reviews___book___format",
  BooksReviewsBookGoodreadsId = "books___reviews___book___goodreadsId",
  BooksReviewsBookId = "books___reviews___book___id",
  BooksReviewsBookImageUrl = "books___reviews___book___image_url",
  BooksReviewsBookIsbn = "books___reviews___book___isbn",
  BooksReviewsBookIsbn13 = "books___reviews___book___isbn13",
  BooksReviewsBookLargeImageUrl = "books___reviews___book___large_image_url",
  BooksReviewsBookLink = "books___reviews___book___link",
  BooksReviewsBookNumPages = "books___reviews___book___num_pages",
  BooksReviewsBookPublicationDay = "books___reviews___book___publication_day",
  BooksReviewsBookPublicationMonth = "books___reviews___book___publication_month",
  BooksReviewsBookPublicationYear = "books___reviews___book___publication_year",
  BooksReviewsBookPublished = "books___reviews___book___published",
  BooksReviewsBookPublisher = "books___reviews___book___publisher",
  BooksReviewsBookRatingsCount = "books___reviews___book___ratings_count",
  BooksReviewsBookReviews = "books___reviews___book___reviews",
  BooksReviewsBookSmallImageUrl = "books___reviews___book___small_image_url",
  BooksReviewsBookTextReviewsCount = "books___reviews___book___text_reviews_count",
  BooksReviewsBookTitle = "books___reviews___book___title",
  BooksReviewsBookTitleWithoutSeries = "books___reviews___book___title_without_series",
  BooksReviewsBookUri = "books___reviews___book___uri",
  BooksReviewsChildren = "books___reviews___children",
  BooksReviewsChildrenChildren = "books___reviews___children___children",
  BooksReviewsChildrenId = "books___reviews___children___id",
  BooksReviewsCommentsCount = "books___reviews___comments_count",
  BooksReviewsDateAdded = "books___reviews___date_added",
  BooksReviewsDateUpdated = "books___reviews___date_updated",
  BooksReviewsGoodreadsId = "books___reviews___goodreadsId",
  BooksReviewsId = "books___reviews___id",
  BooksReviewsInternalContent = "books___reviews___internal___content",
  BooksReviewsInternalContentDigest = "books___reviews___internal___contentDigest",
  BooksReviewsInternalDescription = "books___reviews___internal___description",
  BooksReviewsInternalFieldOwners = "books___reviews___internal___fieldOwners",
  BooksReviewsInternalIgnoreType = "books___reviews___internal___ignoreType",
  BooksReviewsInternalMediaType = "books___reviews___internal___mediaType",
  BooksReviewsInternalOwner = "books___reviews___internal___owner",
  BooksReviewsInternalType = "books___reviews___internal___type",
  BooksReviewsLink = "books___reviews___link",
  BooksReviewsOwned = "books___reviews___owned",
  BooksReviewsParentChildren = "books___reviews___parent___children",
  BooksReviewsParentId = "books___reviews___parent___id",
  BooksReviewsRating = "books___reviews___rating",
  BooksReviewsReadAt = "books___reviews___read_at",
  BooksReviewsReadCount = "books___reviews___read_count",
  BooksReviewsRecommendedBy = "books___reviews___recommended_by",
  BooksReviewsRecommendedFor = "books___reviews___recommended_for",
  BooksReviewsSpoilerFlag = "books___reviews___spoiler_flag",
  BooksReviewsSpoilersState = "books___reviews___spoilers_state",
  BooksReviewsStartedAt = "books___reviews___started_at",
  BooksReviewsUrl = "books___reviews___url",
  BooksReviewsVotes = "books___reviews___votes",
  BooksSmallImageUrl = "books___small_image_url",
  BooksTextReviewsCount = "books___text_reviews_count",
  BooksTitle = "books___title",
  BooksTitleWithoutSeries = "books___title_without_series",
  BooksUri = "books___uri",
  BooksWorkId = "books___work___id",
  BooksWorkUri = "books___work___uri",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  GoodreadsId = "goodreadsId",
  Id = "id",
  ImageUrl = "image_url",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Link = "link",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  RatingsCount = "ratings_count",
  Role = "role",
  SmallImageUrl = "small_image_url",
  TextReviewsCount = "text_reviews_count",
}

export type GoodreadsAuthorFilterInput = {
  average_rating?: InputMaybe<StringQueryOperatorInput>;
  books?: InputMaybe<GoodreadsBookFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image_url?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  ratings_count?: InputMaybe<StringQueryOperatorInput>;
  role?: InputMaybe<StringQueryOperatorInput>;
  small_image_url?: InputMaybe<StringQueryOperatorInput>;
  text_reviews_count?: InputMaybe<StringQueryOperatorInput>;
};

export type GoodreadsAuthorFilterListInput = {
  elemMatch?: InputMaybe<GoodreadsAuthorFilterInput>;
};

export type GoodreadsAuthorGroupConnection = {
  __typename?: "GoodreadsAuthorGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsAuthorEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<GoodreadsAuthorGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsAuthorGroupConnectionDistinctArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorGroupConnectionGroupArgs = {
  field: GoodreadsAuthorFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsAuthorGroupConnectionMaxArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorGroupConnectionMinArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorGroupConnectionSumArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GoodreadsAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GoodreadsBook = Node & {
  __typename?: "GoodreadsBook";
  authors?: Maybe<Array<Maybe<GoodreadsAuthor>>>;
  average_rating?: Maybe<Scalars["String"]>;
  children: Array<Node>;
  description?: Maybe<Scalars["String"]>;
  edition_information?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  image_url?: Maybe<Scalars["String"]>;
  internal: Internal;
  isbn?: Maybe<Scalars["String"]>;
  isbn13?: Maybe<Scalars["String"]>;
  large_image_url?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  num_pages?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  publication_day?: Maybe<Scalars["String"]>;
  publication_month?: Maybe<Scalars["String"]>;
  publication_year?: Maybe<Scalars["Date"]>;
  published?: Maybe<Scalars["Date"]>;
  publisher?: Maybe<Scalars["String"]>;
  ratings_count?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>;
  small_image_url?: Maybe<Scalars["String"]>;
  text_reviews_count?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  title_without_series?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
  work?: Maybe<GoodreadsBookWork>;
};

export type GoodreadsBookPublication_YearArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type GoodreadsBookPublishedArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type GoodreadsBookConnection = {
  __typename?: "GoodreadsBookConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsBookEdge>;
  group: Array<GoodreadsBookGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsBook>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsBookConnectionDistinctArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookConnectionGroupArgs = {
  field: GoodreadsBookFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsBookConnectionMaxArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookConnectionMinArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookConnectionSumArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookEdge = {
  __typename?: "GoodreadsBookEdge";
  next?: Maybe<GoodreadsBook>;
  node: GoodreadsBook;
  previous?: Maybe<GoodreadsBook>;
};

export enum GoodreadsBookFieldsEnum {
  Authors = "authors",
  AuthorsAverageRating = "authors___average_rating",
  AuthorsBooks = "authors___books",
  AuthorsBooksAuthors = "authors___books___authors",
  AuthorsBooksAuthorsAverageRating = "authors___books___authors___average_rating",
  AuthorsBooksAuthorsBooks = "authors___books___authors___books",
  AuthorsBooksAuthorsChildren = "authors___books___authors___children",
  AuthorsBooksAuthorsGoodreadsId = "authors___books___authors___goodreadsId",
  AuthorsBooksAuthorsId = "authors___books___authors___id",
  AuthorsBooksAuthorsImageUrl = "authors___books___authors___image_url",
  AuthorsBooksAuthorsLink = "authors___books___authors___link",
  AuthorsBooksAuthorsName = "authors___books___authors___name",
  AuthorsBooksAuthorsRatingsCount = "authors___books___authors___ratings_count",
  AuthorsBooksAuthorsRole = "authors___books___authors___role",
  AuthorsBooksAuthorsSmallImageUrl = "authors___books___authors___small_image_url",
  AuthorsBooksAuthorsTextReviewsCount = "authors___books___authors___text_reviews_count",
  AuthorsBooksAverageRating = "authors___books___average_rating",
  AuthorsBooksChildren = "authors___books___children",
  AuthorsBooksChildrenChildren = "authors___books___children___children",
  AuthorsBooksChildrenId = "authors___books___children___id",
  AuthorsBooksDescription = "authors___books___description",
  AuthorsBooksEditionInformation = "authors___books___edition_information",
  AuthorsBooksFormat = "authors___books___format",
  AuthorsBooksGoodreadsId = "authors___books___goodreadsId",
  AuthorsBooksId = "authors___books___id",
  AuthorsBooksImageUrl = "authors___books___image_url",
  AuthorsBooksInternalContent = "authors___books___internal___content",
  AuthorsBooksInternalContentDigest = "authors___books___internal___contentDigest",
  AuthorsBooksInternalDescription = "authors___books___internal___description",
  AuthorsBooksInternalFieldOwners = "authors___books___internal___fieldOwners",
  AuthorsBooksInternalIgnoreType = "authors___books___internal___ignoreType",
  AuthorsBooksInternalMediaType = "authors___books___internal___mediaType",
  AuthorsBooksInternalOwner = "authors___books___internal___owner",
  AuthorsBooksInternalType = "authors___books___internal___type",
  AuthorsBooksIsbn = "authors___books___isbn",
  AuthorsBooksIsbn13 = "authors___books___isbn13",
  AuthorsBooksLargeImageUrl = "authors___books___large_image_url",
  AuthorsBooksLink = "authors___books___link",
  AuthorsBooksNumPages = "authors___books___num_pages",
  AuthorsBooksParentChildren = "authors___books___parent___children",
  AuthorsBooksParentId = "authors___books___parent___id",
  AuthorsBooksPublicationDay = "authors___books___publication_day",
  AuthorsBooksPublicationMonth = "authors___books___publication_month",
  AuthorsBooksPublicationYear = "authors___books___publication_year",
  AuthorsBooksPublished = "authors___books___published",
  AuthorsBooksPublisher = "authors___books___publisher",
  AuthorsBooksRatingsCount = "authors___books___ratings_count",
  AuthorsBooksReviews = "authors___books___reviews",
  AuthorsBooksReviewsBody = "authors___books___reviews___body",
  AuthorsBooksReviewsChildren = "authors___books___reviews___children",
  AuthorsBooksReviewsCommentsCount = "authors___books___reviews___comments_count",
  AuthorsBooksReviewsDateAdded = "authors___books___reviews___date_added",
  AuthorsBooksReviewsDateUpdated = "authors___books___reviews___date_updated",
  AuthorsBooksReviewsGoodreadsId = "authors___books___reviews___goodreadsId",
  AuthorsBooksReviewsId = "authors___books___reviews___id",
  AuthorsBooksReviewsLink = "authors___books___reviews___link",
  AuthorsBooksReviewsOwned = "authors___books___reviews___owned",
  AuthorsBooksReviewsRating = "authors___books___reviews___rating",
  AuthorsBooksReviewsReadAt = "authors___books___reviews___read_at",
  AuthorsBooksReviewsReadCount = "authors___books___reviews___read_count",
  AuthorsBooksReviewsRecommendedBy = "authors___books___reviews___recommended_by",
  AuthorsBooksReviewsRecommendedFor = "authors___books___reviews___recommended_for",
  AuthorsBooksReviewsSpoilerFlag = "authors___books___reviews___spoiler_flag",
  AuthorsBooksReviewsSpoilersState = "authors___books___reviews___spoilers_state",
  AuthorsBooksReviewsStartedAt = "authors___books___reviews___started_at",
  AuthorsBooksReviewsUrl = "authors___books___reviews___url",
  AuthorsBooksReviewsVotes = "authors___books___reviews___votes",
  AuthorsBooksSmallImageUrl = "authors___books___small_image_url",
  AuthorsBooksTextReviewsCount = "authors___books___text_reviews_count",
  AuthorsBooksTitle = "authors___books___title",
  AuthorsBooksTitleWithoutSeries = "authors___books___title_without_series",
  AuthorsBooksUri = "authors___books___uri",
  AuthorsBooksWorkId = "authors___books___work___id",
  AuthorsBooksWorkUri = "authors___books___work___uri",
  AuthorsChildren = "authors___children",
  AuthorsChildrenChildren = "authors___children___children",
  AuthorsChildrenChildrenChildren = "authors___children___children___children",
  AuthorsChildrenChildrenId = "authors___children___children___id",
  AuthorsChildrenId = "authors___children___id",
  AuthorsChildrenInternalContent = "authors___children___internal___content",
  AuthorsChildrenInternalContentDigest = "authors___children___internal___contentDigest",
  AuthorsChildrenInternalDescription = "authors___children___internal___description",
  AuthorsChildrenInternalFieldOwners = "authors___children___internal___fieldOwners",
  AuthorsChildrenInternalIgnoreType = "authors___children___internal___ignoreType",
  AuthorsChildrenInternalMediaType = "authors___children___internal___mediaType",
  AuthorsChildrenInternalOwner = "authors___children___internal___owner",
  AuthorsChildrenInternalType = "authors___children___internal___type",
  AuthorsChildrenParentChildren = "authors___children___parent___children",
  AuthorsChildrenParentId = "authors___children___parent___id",
  AuthorsGoodreadsId = "authors___goodreadsId",
  AuthorsId = "authors___id",
  AuthorsImageUrl = "authors___image_url",
  AuthorsInternalContent = "authors___internal___content",
  AuthorsInternalContentDigest = "authors___internal___contentDigest",
  AuthorsInternalDescription = "authors___internal___description",
  AuthorsInternalFieldOwners = "authors___internal___fieldOwners",
  AuthorsInternalIgnoreType = "authors___internal___ignoreType",
  AuthorsInternalMediaType = "authors___internal___mediaType",
  AuthorsInternalOwner = "authors___internal___owner",
  AuthorsInternalType = "authors___internal___type",
  AuthorsLink = "authors___link",
  AuthorsName = "authors___name",
  AuthorsParentChildren = "authors___parent___children",
  AuthorsParentChildrenChildren = "authors___parent___children___children",
  AuthorsParentChildrenId = "authors___parent___children___id",
  AuthorsParentId = "authors___parent___id",
  AuthorsParentInternalContent = "authors___parent___internal___content",
  AuthorsParentInternalContentDigest = "authors___parent___internal___contentDigest",
  AuthorsParentInternalDescription = "authors___parent___internal___description",
  AuthorsParentInternalFieldOwners = "authors___parent___internal___fieldOwners",
  AuthorsParentInternalIgnoreType = "authors___parent___internal___ignoreType",
  AuthorsParentInternalMediaType = "authors___parent___internal___mediaType",
  AuthorsParentInternalOwner = "authors___parent___internal___owner",
  AuthorsParentInternalType = "authors___parent___internal___type",
  AuthorsParentParentChildren = "authors___parent___parent___children",
  AuthorsParentParentId = "authors___parent___parent___id",
  AuthorsRatingsCount = "authors___ratings_count",
  AuthorsRole = "authors___role",
  AuthorsSmallImageUrl = "authors___small_image_url",
  AuthorsTextReviewsCount = "authors___text_reviews_count",
  AverageRating = "average_rating",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Description = "description",
  EditionInformation = "edition_information",
  Format = "format",
  GoodreadsId = "goodreadsId",
  Id = "id",
  ImageUrl = "image_url",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Isbn = "isbn",
  Isbn13 = "isbn13",
  LargeImageUrl = "large_image_url",
  Link = "link",
  NumPages = "num_pages",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PublicationDay = "publication_day",
  PublicationMonth = "publication_month",
  PublicationYear = "publication_year",
  Published = "published",
  Publisher = "publisher",
  RatingsCount = "ratings_count",
  Reviews = "reviews",
  ReviewsBody = "reviews___body",
  ReviewsBookAuthors = "reviews___book___authors",
  ReviewsBookAuthorsAverageRating = "reviews___book___authors___average_rating",
  ReviewsBookAuthorsBooks = "reviews___book___authors___books",
  ReviewsBookAuthorsChildren = "reviews___book___authors___children",
  ReviewsBookAuthorsGoodreadsId = "reviews___book___authors___goodreadsId",
  ReviewsBookAuthorsId = "reviews___book___authors___id",
  ReviewsBookAuthorsImageUrl = "reviews___book___authors___image_url",
  ReviewsBookAuthorsLink = "reviews___book___authors___link",
  ReviewsBookAuthorsName = "reviews___book___authors___name",
  ReviewsBookAuthorsRatingsCount = "reviews___book___authors___ratings_count",
  ReviewsBookAuthorsRole = "reviews___book___authors___role",
  ReviewsBookAuthorsSmallImageUrl = "reviews___book___authors___small_image_url",
  ReviewsBookAuthorsTextReviewsCount = "reviews___book___authors___text_reviews_count",
  ReviewsBookAverageRating = "reviews___book___average_rating",
  ReviewsBookChildren = "reviews___book___children",
  ReviewsBookChildrenChildren = "reviews___book___children___children",
  ReviewsBookChildrenId = "reviews___book___children___id",
  ReviewsBookDescription = "reviews___book___description",
  ReviewsBookEditionInformation = "reviews___book___edition_information",
  ReviewsBookFormat = "reviews___book___format",
  ReviewsBookGoodreadsId = "reviews___book___goodreadsId",
  ReviewsBookId = "reviews___book___id",
  ReviewsBookImageUrl = "reviews___book___image_url",
  ReviewsBookInternalContent = "reviews___book___internal___content",
  ReviewsBookInternalContentDigest = "reviews___book___internal___contentDigest",
  ReviewsBookInternalDescription = "reviews___book___internal___description",
  ReviewsBookInternalFieldOwners = "reviews___book___internal___fieldOwners",
  ReviewsBookInternalIgnoreType = "reviews___book___internal___ignoreType",
  ReviewsBookInternalMediaType = "reviews___book___internal___mediaType",
  ReviewsBookInternalOwner = "reviews___book___internal___owner",
  ReviewsBookInternalType = "reviews___book___internal___type",
  ReviewsBookIsbn = "reviews___book___isbn",
  ReviewsBookIsbn13 = "reviews___book___isbn13",
  ReviewsBookLargeImageUrl = "reviews___book___large_image_url",
  ReviewsBookLink = "reviews___book___link",
  ReviewsBookNumPages = "reviews___book___num_pages",
  ReviewsBookParentChildren = "reviews___book___parent___children",
  ReviewsBookParentId = "reviews___book___parent___id",
  ReviewsBookPublicationDay = "reviews___book___publication_day",
  ReviewsBookPublicationMonth = "reviews___book___publication_month",
  ReviewsBookPublicationYear = "reviews___book___publication_year",
  ReviewsBookPublished = "reviews___book___published",
  ReviewsBookPublisher = "reviews___book___publisher",
  ReviewsBookRatingsCount = "reviews___book___ratings_count",
  ReviewsBookReviews = "reviews___book___reviews",
  ReviewsBookReviewsBody = "reviews___book___reviews___body",
  ReviewsBookReviewsChildren = "reviews___book___reviews___children",
  ReviewsBookReviewsCommentsCount = "reviews___book___reviews___comments_count",
  ReviewsBookReviewsDateAdded = "reviews___book___reviews___date_added",
  ReviewsBookReviewsDateUpdated = "reviews___book___reviews___date_updated",
  ReviewsBookReviewsGoodreadsId = "reviews___book___reviews___goodreadsId",
  ReviewsBookReviewsId = "reviews___book___reviews___id",
  ReviewsBookReviewsLink = "reviews___book___reviews___link",
  ReviewsBookReviewsOwned = "reviews___book___reviews___owned",
  ReviewsBookReviewsRating = "reviews___book___reviews___rating",
  ReviewsBookReviewsReadAt = "reviews___book___reviews___read_at",
  ReviewsBookReviewsReadCount = "reviews___book___reviews___read_count",
  ReviewsBookReviewsRecommendedBy = "reviews___book___reviews___recommended_by",
  ReviewsBookReviewsRecommendedFor = "reviews___book___reviews___recommended_for",
  ReviewsBookReviewsSpoilerFlag = "reviews___book___reviews___spoiler_flag",
  ReviewsBookReviewsSpoilersState = "reviews___book___reviews___spoilers_state",
  ReviewsBookReviewsStartedAt = "reviews___book___reviews___started_at",
  ReviewsBookReviewsUrl = "reviews___book___reviews___url",
  ReviewsBookReviewsVotes = "reviews___book___reviews___votes",
  ReviewsBookSmallImageUrl = "reviews___book___small_image_url",
  ReviewsBookTextReviewsCount = "reviews___book___text_reviews_count",
  ReviewsBookTitle = "reviews___book___title",
  ReviewsBookTitleWithoutSeries = "reviews___book___title_without_series",
  ReviewsBookUri = "reviews___book___uri",
  ReviewsBookWorkId = "reviews___book___work___id",
  ReviewsBookWorkUri = "reviews___book___work___uri",
  ReviewsChildren = "reviews___children",
  ReviewsChildrenChildren = "reviews___children___children",
  ReviewsChildrenChildrenChildren = "reviews___children___children___children",
  ReviewsChildrenChildrenId = "reviews___children___children___id",
  ReviewsChildrenId = "reviews___children___id",
  ReviewsChildrenInternalContent = "reviews___children___internal___content",
  ReviewsChildrenInternalContentDigest = "reviews___children___internal___contentDigest",
  ReviewsChildrenInternalDescription = "reviews___children___internal___description",
  ReviewsChildrenInternalFieldOwners = "reviews___children___internal___fieldOwners",
  ReviewsChildrenInternalIgnoreType = "reviews___children___internal___ignoreType",
  ReviewsChildrenInternalMediaType = "reviews___children___internal___mediaType",
  ReviewsChildrenInternalOwner = "reviews___children___internal___owner",
  ReviewsChildrenInternalType = "reviews___children___internal___type",
  ReviewsChildrenParentChildren = "reviews___children___parent___children",
  ReviewsChildrenParentId = "reviews___children___parent___id",
  ReviewsCommentsCount = "reviews___comments_count",
  ReviewsDateAdded = "reviews___date_added",
  ReviewsDateUpdated = "reviews___date_updated",
  ReviewsGoodreadsId = "reviews___goodreadsId",
  ReviewsId = "reviews___id",
  ReviewsInternalContent = "reviews___internal___content",
  ReviewsInternalContentDigest = "reviews___internal___contentDigest",
  ReviewsInternalDescription = "reviews___internal___description",
  ReviewsInternalFieldOwners = "reviews___internal___fieldOwners",
  ReviewsInternalIgnoreType = "reviews___internal___ignoreType",
  ReviewsInternalMediaType = "reviews___internal___mediaType",
  ReviewsInternalOwner = "reviews___internal___owner",
  ReviewsInternalType = "reviews___internal___type",
  ReviewsLink = "reviews___link",
  ReviewsOwned = "reviews___owned",
  ReviewsParentChildren = "reviews___parent___children",
  ReviewsParentChildrenChildren = "reviews___parent___children___children",
  ReviewsParentChildrenId = "reviews___parent___children___id",
  ReviewsParentId = "reviews___parent___id",
  ReviewsParentInternalContent = "reviews___parent___internal___content",
  ReviewsParentInternalContentDigest = "reviews___parent___internal___contentDigest",
  ReviewsParentInternalDescription = "reviews___parent___internal___description",
  ReviewsParentInternalFieldOwners = "reviews___parent___internal___fieldOwners",
  ReviewsParentInternalIgnoreType = "reviews___parent___internal___ignoreType",
  ReviewsParentInternalMediaType = "reviews___parent___internal___mediaType",
  ReviewsParentInternalOwner = "reviews___parent___internal___owner",
  ReviewsParentInternalType = "reviews___parent___internal___type",
  ReviewsParentParentChildren = "reviews___parent___parent___children",
  ReviewsParentParentId = "reviews___parent___parent___id",
  ReviewsRating = "reviews___rating",
  ReviewsReadAt = "reviews___read_at",
  ReviewsReadCount = "reviews___read_count",
  ReviewsRecommendedBy = "reviews___recommended_by",
  ReviewsRecommendedFor = "reviews___recommended_for",
  ReviewsSpoilerFlag = "reviews___spoiler_flag",
  ReviewsSpoilersState = "reviews___spoilers_state",
  ReviewsStartedAt = "reviews___started_at",
  ReviewsUrl = "reviews___url",
  ReviewsVotes = "reviews___votes",
  SmallImageUrl = "small_image_url",
  TextReviewsCount = "text_reviews_count",
  Title = "title",
  TitleWithoutSeries = "title_without_series",
  Uri = "uri",
  WorkId = "work___id",
  WorkUri = "work___uri",
}

export type GoodreadsBookFilterInput = {
  authors?: InputMaybe<GoodreadsAuthorFilterListInput>;
  average_rating?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  edition_information?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image_url?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isbn?: InputMaybe<StringQueryOperatorInput>;
  isbn13?: InputMaybe<StringQueryOperatorInput>;
  large_image_url?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  num_pages?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publication_day?: InputMaybe<StringQueryOperatorInput>;
  publication_month?: InputMaybe<StringQueryOperatorInput>;
  publication_year?: InputMaybe<DateQueryOperatorInput>;
  published?: InputMaybe<DateQueryOperatorInput>;
  publisher?: InputMaybe<StringQueryOperatorInput>;
  ratings_count?: InputMaybe<StringQueryOperatorInput>;
  reviews?: InputMaybe<GoodreadsReviewFilterListInput>;
  small_image_url?: InputMaybe<StringQueryOperatorInput>;
  text_reviews_count?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  title_without_series?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  work?: InputMaybe<GoodreadsBookWorkFilterInput>;
};

export type GoodreadsBookFilterListInput = {
  elemMatch?: InputMaybe<GoodreadsBookFilterInput>;
};

export type GoodreadsBookGroupConnection = {
  __typename?: "GoodreadsBookGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsBookEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<GoodreadsBookGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsBook>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsBookGroupConnectionDistinctArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookGroupConnectionGroupArgs = {
  field: GoodreadsBookFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsBookGroupConnectionMaxArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookGroupConnectionMinArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookGroupConnectionSumArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GoodreadsBookFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GoodreadsBookWork = {
  __typename?: "GoodreadsBookWork";
  id?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
};

export type GoodreadsBookWorkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type GoodreadsReview = Node & {
  __typename?: "GoodreadsReview";
  body?: Maybe<Scalars["String"]>;
  book?: Maybe<GoodreadsBook>;
  children: Array<Node>;
  comments_count?: Maybe<Scalars["String"]>;
  date_added?: Maybe<Scalars["String"]>;
  date_updated?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  link?: Maybe<Scalars["String"]>;
  owned?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  rating?: Maybe<Scalars["String"]>;
  read_at?: Maybe<Scalars["String"]>;
  read_count?: Maybe<Scalars["String"]>;
  recommended_by?: Maybe<Scalars["String"]>;
  recommended_for?: Maybe<Scalars["String"]>;
  spoiler_flag?: Maybe<Scalars["String"]>;
  spoilers_state?: Maybe<Scalars["String"]>;
  started_at?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  votes?: Maybe<Scalars["String"]>;
};

export type GoodreadsReviewConnection = {
  __typename?: "GoodreadsReviewConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsReviewEdge>;
  group: Array<GoodreadsReviewGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsReview>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsReviewConnectionDistinctArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewConnectionGroupArgs = {
  field: GoodreadsReviewFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsReviewConnectionMaxArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewConnectionMinArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewConnectionSumArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewEdge = {
  __typename?: "GoodreadsReviewEdge";
  next?: Maybe<GoodreadsReview>;
  node: GoodreadsReview;
  previous?: Maybe<GoodreadsReview>;
};

export enum GoodreadsReviewFieldsEnum {
  Body = "body",
  BookAuthors = "book___authors",
  BookAuthorsAverageRating = "book___authors___average_rating",
  BookAuthorsBooks = "book___authors___books",
  BookAuthorsBooksAuthors = "book___authors___books___authors",
  BookAuthorsBooksAverageRating = "book___authors___books___average_rating",
  BookAuthorsBooksChildren = "book___authors___books___children",
  BookAuthorsBooksDescription = "book___authors___books___description",
  BookAuthorsBooksEditionInformation = "book___authors___books___edition_information",
  BookAuthorsBooksFormat = "book___authors___books___format",
  BookAuthorsBooksGoodreadsId = "book___authors___books___goodreadsId",
  BookAuthorsBooksId = "book___authors___books___id",
  BookAuthorsBooksImageUrl = "book___authors___books___image_url",
  BookAuthorsBooksIsbn = "book___authors___books___isbn",
  BookAuthorsBooksIsbn13 = "book___authors___books___isbn13",
  BookAuthorsBooksLargeImageUrl = "book___authors___books___large_image_url",
  BookAuthorsBooksLink = "book___authors___books___link",
  BookAuthorsBooksNumPages = "book___authors___books___num_pages",
  BookAuthorsBooksPublicationDay = "book___authors___books___publication_day",
  BookAuthorsBooksPublicationMonth = "book___authors___books___publication_month",
  BookAuthorsBooksPublicationYear = "book___authors___books___publication_year",
  BookAuthorsBooksPublished = "book___authors___books___published",
  BookAuthorsBooksPublisher = "book___authors___books___publisher",
  BookAuthorsBooksRatingsCount = "book___authors___books___ratings_count",
  BookAuthorsBooksReviews = "book___authors___books___reviews",
  BookAuthorsBooksSmallImageUrl = "book___authors___books___small_image_url",
  BookAuthorsBooksTextReviewsCount = "book___authors___books___text_reviews_count",
  BookAuthorsBooksTitle = "book___authors___books___title",
  BookAuthorsBooksTitleWithoutSeries = "book___authors___books___title_without_series",
  BookAuthorsBooksUri = "book___authors___books___uri",
  BookAuthorsChildren = "book___authors___children",
  BookAuthorsChildrenChildren = "book___authors___children___children",
  BookAuthorsChildrenId = "book___authors___children___id",
  BookAuthorsGoodreadsId = "book___authors___goodreadsId",
  BookAuthorsId = "book___authors___id",
  BookAuthorsImageUrl = "book___authors___image_url",
  BookAuthorsInternalContent = "book___authors___internal___content",
  BookAuthorsInternalContentDigest = "book___authors___internal___contentDigest",
  BookAuthorsInternalDescription = "book___authors___internal___description",
  BookAuthorsInternalFieldOwners = "book___authors___internal___fieldOwners",
  BookAuthorsInternalIgnoreType = "book___authors___internal___ignoreType",
  BookAuthorsInternalMediaType = "book___authors___internal___mediaType",
  BookAuthorsInternalOwner = "book___authors___internal___owner",
  BookAuthorsInternalType = "book___authors___internal___type",
  BookAuthorsLink = "book___authors___link",
  BookAuthorsName = "book___authors___name",
  BookAuthorsParentChildren = "book___authors___parent___children",
  BookAuthorsParentId = "book___authors___parent___id",
  BookAuthorsRatingsCount = "book___authors___ratings_count",
  BookAuthorsRole = "book___authors___role",
  BookAuthorsSmallImageUrl = "book___authors___small_image_url",
  BookAuthorsTextReviewsCount = "book___authors___text_reviews_count",
  BookAverageRating = "book___average_rating",
  BookChildren = "book___children",
  BookChildrenChildren = "book___children___children",
  BookChildrenChildrenChildren = "book___children___children___children",
  BookChildrenChildrenId = "book___children___children___id",
  BookChildrenId = "book___children___id",
  BookChildrenInternalContent = "book___children___internal___content",
  BookChildrenInternalContentDigest = "book___children___internal___contentDigest",
  BookChildrenInternalDescription = "book___children___internal___description",
  BookChildrenInternalFieldOwners = "book___children___internal___fieldOwners",
  BookChildrenInternalIgnoreType = "book___children___internal___ignoreType",
  BookChildrenInternalMediaType = "book___children___internal___mediaType",
  BookChildrenInternalOwner = "book___children___internal___owner",
  BookChildrenInternalType = "book___children___internal___type",
  BookChildrenParentChildren = "book___children___parent___children",
  BookChildrenParentId = "book___children___parent___id",
  BookDescription = "book___description",
  BookEditionInformation = "book___edition_information",
  BookFormat = "book___format",
  BookGoodreadsId = "book___goodreadsId",
  BookId = "book___id",
  BookImageUrl = "book___image_url",
  BookInternalContent = "book___internal___content",
  BookInternalContentDigest = "book___internal___contentDigest",
  BookInternalDescription = "book___internal___description",
  BookInternalFieldOwners = "book___internal___fieldOwners",
  BookInternalIgnoreType = "book___internal___ignoreType",
  BookInternalMediaType = "book___internal___mediaType",
  BookInternalOwner = "book___internal___owner",
  BookInternalType = "book___internal___type",
  BookIsbn = "book___isbn",
  BookIsbn13 = "book___isbn13",
  BookLargeImageUrl = "book___large_image_url",
  BookLink = "book___link",
  BookNumPages = "book___num_pages",
  BookParentChildren = "book___parent___children",
  BookParentChildrenChildren = "book___parent___children___children",
  BookParentChildrenId = "book___parent___children___id",
  BookParentId = "book___parent___id",
  BookParentInternalContent = "book___parent___internal___content",
  BookParentInternalContentDigest = "book___parent___internal___contentDigest",
  BookParentInternalDescription = "book___parent___internal___description",
  BookParentInternalFieldOwners = "book___parent___internal___fieldOwners",
  BookParentInternalIgnoreType = "book___parent___internal___ignoreType",
  BookParentInternalMediaType = "book___parent___internal___mediaType",
  BookParentInternalOwner = "book___parent___internal___owner",
  BookParentInternalType = "book___parent___internal___type",
  BookParentParentChildren = "book___parent___parent___children",
  BookParentParentId = "book___parent___parent___id",
  BookPublicationDay = "book___publication_day",
  BookPublicationMonth = "book___publication_month",
  BookPublicationYear = "book___publication_year",
  BookPublished = "book___published",
  BookPublisher = "book___publisher",
  BookRatingsCount = "book___ratings_count",
  BookReviews = "book___reviews",
  BookReviewsBody = "book___reviews___body",
  BookReviewsBookAuthors = "book___reviews___book___authors",
  BookReviewsBookAverageRating = "book___reviews___book___average_rating",
  BookReviewsBookChildren = "book___reviews___book___children",
  BookReviewsBookDescription = "book___reviews___book___description",
  BookReviewsBookEditionInformation = "book___reviews___book___edition_information",
  BookReviewsBookFormat = "book___reviews___book___format",
  BookReviewsBookGoodreadsId = "book___reviews___book___goodreadsId",
  BookReviewsBookId = "book___reviews___book___id",
  BookReviewsBookImageUrl = "book___reviews___book___image_url",
  BookReviewsBookIsbn = "book___reviews___book___isbn",
  BookReviewsBookIsbn13 = "book___reviews___book___isbn13",
  BookReviewsBookLargeImageUrl = "book___reviews___book___large_image_url",
  BookReviewsBookLink = "book___reviews___book___link",
  BookReviewsBookNumPages = "book___reviews___book___num_pages",
  BookReviewsBookPublicationDay = "book___reviews___book___publication_day",
  BookReviewsBookPublicationMonth = "book___reviews___book___publication_month",
  BookReviewsBookPublicationYear = "book___reviews___book___publication_year",
  BookReviewsBookPublished = "book___reviews___book___published",
  BookReviewsBookPublisher = "book___reviews___book___publisher",
  BookReviewsBookRatingsCount = "book___reviews___book___ratings_count",
  BookReviewsBookReviews = "book___reviews___book___reviews",
  BookReviewsBookSmallImageUrl = "book___reviews___book___small_image_url",
  BookReviewsBookTextReviewsCount = "book___reviews___book___text_reviews_count",
  BookReviewsBookTitle = "book___reviews___book___title",
  BookReviewsBookTitleWithoutSeries = "book___reviews___book___title_without_series",
  BookReviewsBookUri = "book___reviews___book___uri",
  BookReviewsChildren = "book___reviews___children",
  BookReviewsChildrenChildren = "book___reviews___children___children",
  BookReviewsChildrenId = "book___reviews___children___id",
  BookReviewsCommentsCount = "book___reviews___comments_count",
  BookReviewsDateAdded = "book___reviews___date_added",
  BookReviewsDateUpdated = "book___reviews___date_updated",
  BookReviewsGoodreadsId = "book___reviews___goodreadsId",
  BookReviewsId = "book___reviews___id",
  BookReviewsInternalContent = "book___reviews___internal___content",
  BookReviewsInternalContentDigest = "book___reviews___internal___contentDigest",
  BookReviewsInternalDescription = "book___reviews___internal___description",
  BookReviewsInternalFieldOwners = "book___reviews___internal___fieldOwners",
  BookReviewsInternalIgnoreType = "book___reviews___internal___ignoreType",
  BookReviewsInternalMediaType = "book___reviews___internal___mediaType",
  BookReviewsInternalOwner = "book___reviews___internal___owner",
  BookReviewsInternalType = "book___reviews___internal___type",
  BookReviewsLink = "book___reviews___link",
  BookReviewsOwned = "book___reviews___owned",
  BookReviewsParentChildren = "book___reviews___parent___children",
  BookReviewsParentId = "book___reviews___parent___id",
  BookReviewsRating = "book___reviews___rating",
  BookReviewsReadAt = "book___reviews___read_at",
  BookReviewsReadCount = "book___reviews___read_count",
  BookReviewsRecommendedBy = "book___reviews___recommended_by",
  BookReviewsRecommendedFor = "book___reviews___recommended_for",
  BookReviewsSpoilerFlag = "book___reviews___spoiler_flag",
  BookReviewsSpoilersState = "book___reviews___spoilers_state",
  BookReviewsStartedAt = "book___reviews___started_at",
  BookReviewsUrl = "book___reviews___url",
  BookReviewsVotes = "book___reviews___votes",
  BookSmallImageUrl = "book___small_image_url",
  BookTextReviewsCount = "book___text_reviews_count",
  BookTitle = "book___title",
  BookTitleWithoutSeries = "book___title_without_series",
  BookUri = "book___uri",
  BookWorkId = "book___work___id",
  BookWorkUri = "book___work___uri",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  CommentsCount = "comments_count",
  DateAdded = "date_added",
  DateUpdated = "date_updated",
  GoodreadsId = "goodreadsId",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Link = "link",
  Owned = "owned",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Rating = "rating",
  ReadAt = "read_at",
  ReadCount = "read_count",
  RecommendedBy = "recommended_by",
  RecommendedFor = "recommended_for",
  SpoilerFlag = "spoiler_flag",
  SpoilersState = "spoilers_state",
  StartedAt = "started_at",
  Url = "url",
  Votes = "votes",
}

export type GoodreadsReviewFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  book?: InputMaybe<GoodreadsBookFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments_count?: InputMaybe<StringQueryOperatorInput>;
  date_added?: InputMaybe<StringQueryOperatorInput>;
  date_updated?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  owned?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rating?: InputMaybe<StringQueryOperatorInput>;
  read_at?: InputMaybe<StringQueryOperatorInput>;
  read_count?: InputMaybe<StringQueryOperatorInput>;
  recommended_by?: InputMaybe<StringQueryOperatorInput>;
  recommended_for?: InputMaybe<StringQueryOperatorInput>;
  spoiler_flag?: InputMaybe<StringQueryOperatorInput>;
  spoilers_state?: InputMaybe<StringQueryOperatorInput>;
  started_at?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  votes?: InputMaybe<StringQueryOperatorInput>;
};

export type GoodreadsReviewFilterListInput = {
  elemMatch?: InputMaybe<GoodreadsReviewFilterInput>;
};

export type GoodreadsReviewGroupConnection = {
  __typename?: "GoodreadsReviewGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsReviewEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<GoodreadsReviewGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsReview>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsReviewGroupConnectionDistinctArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewGroupConnectionGroupArgs = {
  field: GoodreadsReviewFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsReviewGroupConnectionMaxArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewGroupConnectionMinArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewGroupConnectionSumArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GoodreadsReviewFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GoodreadsShelf = Node & {
  __typename?: "GoodreadsShelf";
  children: Array<Node>;
  exclusive?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  review_shelf_id?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>;
  sortable?: Maybe<Scalars["String"]>;
};

export type GoodreadsShelfConnection = {
  __typename?: "GoodreadsShelfConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsShelfEdge>;
  group: Array<GoodreadsShelfGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsShelf>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsShelfConnectionDistinctArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfConnectionGroupArgs = {
  field: GoodreadsShelfFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsShelfConnectionMaxArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfConnectionMinArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfConnectionSumArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfEdge = {
  __typename?: "GoodreadsShelfEdge";
  next?: Maybe<GoodreadsShelf>;
  node: GoodreadsShelf;
  previous?: Maybe<GoodreadsShelf>;
};

export enum GoodreadsShelfFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Exclusive = "exclusive",
  GoodreadsId = "goodreadsId",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  ReviewShelfId = "review_shelf_id",
  Reviews = "reviews",
  ReviewsBody = "reviews___body",
  ReviewsBookAuthors = "reviews___book___authors",
  ReviewsBookAuthorsAverageRating = "reviews___book___authors___average_rating",
  ReviewsBookAuthorsBooks = "reviews___book___authors___books",
  ReviewsBookAuthorsChildren = "reviews___book___authors___children",
  ReviewsBookAuthorsGoodreadsId = "reviews___book___authors___goodreadsId",
  ReviewsBookAuthorsId = "reviews___book___authors___id",
  ReviewsBookAuthorsImageUrl = "reviews___book___authors___image_url",
  ReviewsBookAuthorsLink = "reviews___book___authors___link",
  ReviewsBookAuthorsName = "reviews___book___authors___name",
  ReviewsBookAuthorsRatingsCount = "reviews___book___authors___ratings_count",
  ReviewsBookAuthorsRole = "reviews___book___authors___role",
  ReviewsBookAuthorsSmallImageUrl = "reviews___book___authors___small_image_url",
  ReviewsBookAuthorsTextReviewsCount = "reviews___book___authors___text_reviews_count",
  ReviewsBookAverageRating = "reviews___book___average_rating",
  ReviewsBookChildren = "reviews___book___children",
  ReviewsBookChildrenChildren = "reviews___book___children___children",
  ReviewsBookChildrenId = "reviews___book___children___id",
  ReviewsBookDescription = "reviews___book___description",
  ReviewsBookEditionInformation = "reviews___book___edition_information",
  ReviewsBookFormat = "reviews___book___format",
  ReviewsBookGoodreadsId = "reviews___book___goodreadsId",
  ReviewsBookId = "reviews___book___id",
  ReviewsBookImageUrl = "reviews___book___image_url",
  ReviewsBookInternalContent = "reviews___book___internal___content",
  ReviewsBookInternalContentDigest = "reviews___book___internal___contentDigest",
  ReviewsBookInternalDescription = "reviews___book___internal___description",
  ReviewsBookInternalFieldOwners = "reviews___book___internal___fieldOwners",
  ReviewsBookInternalIgnoreType = "reviews___book___internal___ignoreType",
  ReviewsBookInternalMediaType = "reviews___book___internal___mediaType",
  ReviewsBookInternalOwner = "reviews___book___internal___owner",
  ReviewsBookInternalType = "reviews___book___internal___type",
  ReviewsBookIsbn = "reviews___book___isbn",
  ReviewsBookIsbn13 = "reviews___book___isbn13",
  ReviewsBookLargeImageUrl = "reviews___book___large_image_url",
  ReviewsBookLink = "reviews___book___link",
  ReviewsBookNumPages = "reviews___book___num_pages",
  ReviewsBookParentChildren = "reviews___book___parent___children",
  ReviewsBookParentId = "reviews___book___parent___id",
  ReviewsBookPublicationDay = "reviews___book___publication_day",
  ReviewsBookPublicationMonth = "reviews___book___publication_month",
  ReviewsBookPublicationYear = "reviews___book___publication_year",
  ReviewsBookPublished = "reviews___book___published",
  ReviewsBookPublisher = "reviews___book___publisher",
  ReviewsBookRatingsCount = "reviews___book___ratings_count",
  ReviewsBookReviews = "reviews___book___reviews",
  ReviewsBookReviewsBody = "reviews___book___reviews___body",
  ReviewsBookReviewsChildren = "reviews___book___reviews___children",
  ReviewsBookReviewsCommentsCount = "reviews___book___reviews___comments_count",
  ReviewsBookReviewsDateAdded = "reviews___book___reviews___date_added",
  ReviewsBookReviewsDateUpdated = "reviews___book___reviews___date_updated",
  ReviewsBookReviewsGoodreadsId = "reviews___book___reviews___goodreadsId",
  ReviewsBookReviewsId = "reviews___book___reviews___id",
  ReviewsBookReviewsLink = "reviews___book___reviews___link",
  ReviewsBookReviewsOwned = "reviews___book___reviews___owned",
  ReviewsBookReviewsRating = "reviews___book___reviews___rating",
  ReviewsBookReviewsReadAt = "reviews___book___reviews___read_at",
  ReviewsBookReviewsReadCount = "reviews___book___reviews___read_count",
  ReviewsBookReviewsRecommendedBy = "reviews___book___reviews___recommended_by",
  ReviewsBookReviewsRecommendedFor = "reviews___book___reviews___recommended_for",
  ReviewsBookReviewsSpoilerFlag = "reviews___book___reviews___spoiler_flag",
  ReviewsBookReviewsSpoilersState = "reviews___book___reviews___spoilers_state",
  ReviewsBookReviewsStartedAt = "reviews___book___reviews___started_at",
  ReviewsBookReviewsUrl = "reviews___book___reviews___url",
  ReviewsBookReviewsVotes = "reviews___book___reviews___votes",
  ReviewsBookSmallImageUrl = "reviews___book___small_image_url",
  ReviewsBookTextReviewsCount = "reviews___book___text_reviews_count",
  ReviewsBookTitle = "reviews___book___title",
  ReviewsBookTitleWithoutSeries = "reviews___book___title_without_series",
  ReviewsBookUri = "reviews___book___uri",
  ReviewsBookWorkId = "reviews___book___work___id",
  ReviewsBookWorkUri = "reviews___book___work___uri",
  ReviewsChildren = "reviews___children",
  ReviewsChildrenChildren = "reviews___children___children",
  ReviewsChildrenChildrenChildren = "reviews___children___children___children",
  ReviewsChildrenChildrenId = "reviews___children___children___id",
  ReviewsChildrenId = "reviews___children___id",
  ReviewsChildrenInternalContent = "reviews___children___internal___content",
  ReviewsChildrenInternalContentDigest = "reviews___children___internal___contentDigest",
  ReviewsChildrenInternalDescription = "reviews___children___internal___description",
  ReviewsChildrenInternalFieldOwners = "reviews___children___internal___fieldOwners",
  ReviewsChildrenInternalIgnoreType = "reviews___children___internal___ignoreType",
  ReviewsChildrenInternalMediaType = "reviews___children___internal___mediaType",
  ReviewsChildrenInternalOwner = "reviews___children___internal___owner",
  ReviewsChildrenInternalType = "reviews___children___internal___type",
  ReviewsChildrenParentChildren = "reviews___children___parent___children",
  ReviewsChildrenParentId = "reviews___children___parent___id",
  ReviewsCommentsCount = "reviews___comments_count",
  ReviewsDateAdded = "reviews___date_added",
  ReviewsDateUpdated = "reviews___date_updated",
  ReviewsGoodreadsId = "reviews___goodreadsId",
  ReviewsId = "reviews___id",
  ReviewsInternalContent = "reviews___internal___content",
  ReviewsInternalContentDigest = "reviews___internal___contentDigest",
  ReviewsInternalDescription = "reviews___internal___description",
  ReviewsInternalFieldOwners = "reviews___internal___fieldOwners",
  ReviewsInternalIgnoreType = "reviews___internal___ignoreType",
  ReviewsInternalMediaType = "reviews___internal___mediaType",
  ReviewsInternalOwner = "reviews___internal___owner",
  ReviewsInternalType = "reviews___internal___type",
  ReviewsLink = "reviews___link",
  ReviewsOwned = "reviews___owned",
  ReviewsParentChildren = "reviews___parent___children",
  ReviewsParentChildrenChildren = "reviews___parent___children___children",
  ReviewsParentChildrenId = "reviews___parent___children___id",
  ReviewsParentId = "reviews___parent___id",
  ReviewsParentInternalContent = "reviews___parent___internal___content",
  ReviewsParentInternalContentDigest = "reviews___parent___internal___contentDigest",
  ReviewsParentInternalDescription = "reviews___parent___internal___description",
  ReviewsParentInternalFieldOwners = "reviews___parent___internal___fieldOwners",
  ReviewsParentInternalIgnoreType = "reviews___parent___internal___ignoreType",
  ReviewsParentInternalMediaType = "reviews___parent___internal___mediaType",
  ReviewsParentInternalOwner = "reviews___parent___internal___owner",
  ReviewsParentInternalType = "reviews___parent___internal___type",
  ReviewsParentParentChildren = "reviews___parent___parent___children",
  ReviewsParentParentId = "reviews___parent___parent___id",
  ReviewsRating = "reviews___rating",
  ReviewsReadAt = "reviews___read_at",
  ReviewsReadCount = "reviews___read_count",
  ReviewsRecommendedBy = "reviews___recommended_by",
  ReviewsRecommendedFor = "reviews___recommended_for",
  ReviewsSpoilerFlag = "reviews___spoiler_flag",
  ReviewsSpoilersState = "reviews___spoilers_state",
  ReviewsStartedAt = "reviews___started_at",
  ReviewsUrl = "reviews___url",
  ReviewsVotes = "reviews___votes",
  Sortable = "sortable",
}

export type GoodreadsShelfFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  exclusive?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  review_shelf_id?: InputMaybe<StringQueryOperatorInput>;
  reviews?: InputMaybe<GoodreadsReviewFilterListInput>;
  sortable?: InputMaybe<StringQueryOperatorInput>;
};

export type GoodreadsShelfGroupConnection = {
  __typename?: "GoodreadsShelfGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<GoodreadsShelfEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<GoodreadsShelfGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<GoodreadsShelf>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type GoodreadsShelfGroupConnectionDistinctArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfGroupConnectionGroupArgs = {
  field: GoodreadsShelfFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type GoodreadsShelfGroupConnectionMaxArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfGroupConnectionMinArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfGroupConnectionSumArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GoodreadsShelfFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum HeadingsMdx {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum ImageCropFocus {
  Attention = "ATTENTION",
  Center = "CENTER",
  East = "EAST",
  Entropy = "ENTROPY",
  North = "NORTH",
  Northeast = "NORTHEAST",
  Northwest = "NORTHWEST",
  South = "SOUTH",
  Southeast = "SOUTHEAST",
  Southwest = "SOUTHWEST",
  West = "WEST",
}

export enum ImageFit {
  Contain = "CONTAIN",
  Cover = "COVER",
  Fill = "FILL",
  Inside = "INSIDE",
  Outside = "OUTSIDE",
}

export enum ImageFormat {
  Auto = "AUTO",
  Avif = "AVIF",
  Jpg = "JPG",
  NoChange = "NO_CHANGE",
  Png = "PNG",
  Webp = "WEBP",
}

export enum ImageLayout {
  Constrained = "CONSTRAINED",
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
}

export enum ImagePlaceholder {
  Blurred = "BLURRED",
  DominantColor = "DOMINANT_COLOR",
  None = "NONE",
  TracedSvg = "TRACED_SVG",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["GatsbyImageData"];
  id: Scalars["ID"];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  maxHeight?: InputMaybe<Scalars["Int"]>;
  maxWidth?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars["Int"]>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars["Int"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars["String"]>;
  base64?: InputMaybe<Scalars["Boolean"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  height?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars["Float"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FixedAspectRatio = "fixed___aspectRatio",
  FixedBase64 = "fixed___base64",
  FixedHeight = "fixed___height",
  FixedOriginalName = "fixed___originalName",
  FixedSrc = "fixed___src",
  FixedSrcSet = "fixed___srcSet",
  FixedSrcSetWebp = "fixed___srcSetWebp",
  FixedSrcWebp = "fixed___srcWebp",
  FixedTracedSvg = "fixed___tracedSVG",
  FixedWidth = "fixed___width",
  FluidAspectRatio = "fluid___aspectRatio",
  FluidBase64 = "fluid___base64",
  FluidOriginalImg = "fluid___originalImg",
  FluidOriginalName = "fluid___originalName",
  FluidPresentationHeight = "fluid___presentationHeight",
  FluidPresentationWidth = "fluid___presentationWidth",
  FluidSizes = "fluid___sizes",
  FluidSrc = "fluid___src",
  FluidSrcSet = "fluid___srcSet",
  FluidSrcSetWebp = "fluid___srcSetWebp",
  FluidSrcWebp = "fluid___srcWebp",
  FluidTracedSvg = "fluid___tracedSVG",
  GatsbyImageData = "gatsbyImageData",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  OriginalHeight = "original___height",
  OriginalSrc = "original___src",
  OriginalWidth = "original___width",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  ResizeAspectRatio = "resize___aspectRatio",
  ResizeHeight = "resize___height",
  ResizeOriginalName = "resize___originalName",
  ResizeSrc = "resize___src",
  ResizeTracedSvg = "resize___tracedSVG",
  ResizeWidth = "resize___width",
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  aspectRatio?: Maybe<Scalars["Float"]>;
  base64?: Maybe<Scalars["String"]>;
  height: Scalars["Float"];
  originalName?: Maybe<Scalars["String"]>;
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width: Scalars["Float"];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  aspectRatio: Scalars["Float"];
  base64?: Maybe<Scalars["String"]>;
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationHeight: Scalars["Int"];
  presentationWidth: Scalars["Int"];
  sizes: Scalars["String"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcSetWebp?: Maybe<Scalars["String"]>;
  srcWebp?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<ImageSharpEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  aspectRatio?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Int"]>;
  originalName?: Maybe<Scalars["String"]>;
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars["Boolean"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars["JSON"]>;
  glob?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  ne?: InputMaybe<Scalars["JSON"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  regex?: InputMaybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  __typename?: "Mdx";
  body: Scalars["String"];
  children: Array<Node>;
  excerpt: Scalars["String"];
  exports?: Maybe<MdxExports>;
  fields?: Maybe<MdxFields>;
  fileAbsolutePath: Scalars["String"];
  frontmatter?: Maybe<MdxFrontmatter>;
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  mdxAST?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  rawBody: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
  tableOfContents?: Maybe<Scalars["JSON"]>;
  timeToRead?: Maybe<Scalars["Int"]>;
  wordCount?: Maybe<MdxWordCount>;
};

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars["Int"]>;
  truncate?: InputMaybe<Scalars["Boolean"]>;
};

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars["Int"]>;
};

export type MdxConnection = {
  __typename?: "MdxConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: "MdxEdge";
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export type MdxExports = {
  __typename?: "MdxExports";
  meta?: Maybe<MdxExportsMeta>;
};

export type MdxExportsFilterInput = {
  meta?: InputMaybe<MdxExportsMetaFilterInput>;
};

export type MdxExportsMeta = {
  __typename?: "MdxExportsMeta";
  category?: Maybe<Scalars["String"]>;
  date: Scalars["Date"];
  description: Scalars["String"];
  draft: Scalars["Boolean"];
  image: File;
  imageAlt: Scalars["String"];
  linkText?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updated?: Maybe<Scalars["Date"]>;
};

export type MdxExportsMetaDateArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type MdxExportsMetaUpdatedArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type MdxExportsMetaFilterInput = {
  category?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  draft?: InputMaybe<BooleanQueryOperatorInput>;
  image?: InputMaybe<FileFilterInput>;
  imageAlt?: InputMaybe<StringQueryOperatorInput>;
  linkText?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updated?: InputMaybe<DateQueryOperatorInput>;
};

export type MdxFields = {
  __typename?: "MdxFields";
  slug?: Maybe<Scalars["String"]>;
};

export enum MdxFieldsEnum {
  Body = "body",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Excerpt = "excerpt",
  ExportsMetaCategory = "exports___meta___category",
  ExportsMetaDate = "exports___meta___date",
  ExportsMetaDescription = "exports___meta___description",
  ExportsMetaDraft = "exports___meta___draft",
  ExportsMetaImageAlt = "exports___meta___imageAlt",
  ExportsMetaImageAbsolutePath = "exports___meta___image___absolutePath",
  ExportsMetaImageAccessTime = "exports___meta___image___accessTime",
  ExportsMetaImageAtime = "exports___meta___image___atime",
  ExportsMetaImageAtimeMs = "exports___meta___image___atimeMs",
  ExportsMetaImageBase = "exports___meta___image___base",
  ExportsMetaImageBirthTime = "exports___meta___image___birthTime",
  ExportsMetaImageBirthtime = "exports___meta___image___birthtime",
  ExportsMetaImageBirthtimeMs = "exports___meta___image___birthtimeMs",
  ExportsMetaImageBlksize = "exports___meta___image___blksize",
  ExportsMetaImageBlocks = "exports___meta___image___blocks",
  ExportsMetaImageChangeTime = "exports___meta___image___changeTime",
  ExportsMetaImageChildren = "exports___meta___image___children",
  ExportsMetaImageChildrenImageSharp = "exports___meta___image___childrenImageSharp",
  ExportsMetaImageChildrenMdx = "exports___meta___image___childrenMdx",
  ExportsMetaImageCtime = "exports___meta___image___ctime",
  ExportsMetaImageCtimeMs = "exports___meta___image___ctimeMs",
  ExportsMetaImageDev = "exports___meta___image___dev",
  ExportsMetaImageDir = "exports___meta___image___dir",
  ExportsMetaImageExt = "exports___meta___image___ext",
  ExportsMetaImageExtension = "exports___meta___image___extension",
  ExportsMetaImageGid = "exports___meta___image___gid",
  ExportsMetaImageId = "exports___meta___image___id",
  ExportsMetaImageIno = "exports___meta___image___ino",
  ExportsMetaImageMode = "exports___meta___image___mode",
  ExportsMetaImageModifiedTime = "exports___meta___image___modifiedTime",
  ExportsMetaImageMtime = "exports___meta___image___mtime",
  ExportsMetaImageMtimeMs = "exports___meta___image___mtimeMs",
  ExportsMetaImageName = "exports___meta___image___name",
  ExportsMetaImageNlink = "exports___meta___image___nlink",
  ExportsMetaImagePrettySize = "exports___meta___image___prettySize",
  ExportsMetaImagePublicUrl = "exports___meta___image___publicURL",
  ExportsMetaImageRdev = "exports___meta___image___rdev",
  ExportsMetaImageRelativeDirectory = "exports___meta___image___relativeDirectory",
  ExportsMetaImageRelativePath = "exports___meta___image___relativePath",
  ExportsMetaImageRoot = "exports___meta___image___root",
  ExportsMetaImageSize = "exports___meta___image___size",
  ExportsMetaImageSourceInstanceName = "exports___meta___image___sourceInstanceName",
  ExportsMetaImageUid = "exports___meta___image___uid",
  ExportsMetaLinkText = "exports___meta___linkText",
  ExportsMetaTitle = "exports___meta___title",
  ExportsMetaUpdated = "exports___meta___updated",
  FieldsSlug = "fields___slug",
  FileAbsolutePath = "fileAbsolutePath",
  FrontmatterTitle = "frontmatter___title",
  Headings = "headings",
  HeadingsDepth = "headings___depth",
  HeadingsValue = "headings___value",
  Html = "html",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MdxAst = "mdxAST",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  RawBody = "rawBody",
  Slug = "slug",
  TableOfContents = "tableOfContents",
  TimeToRead = "timeToRead",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
}

export type MdxFieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  exports?: InputMaybe<MdxExportsFilterInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: "MdxFrontmatter";
  title: Scalars["String"];
};

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: "MdxGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<MdxEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<MdxGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionGroupArgs = {
  field: MdxFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum;
};

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum;
};

export type MdxHeadingMdx = {
  __typename?: "MdxHeadingMdx";
  depth?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdxFilterInput = {
  depth?: InputMaybe<IntQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: "MdxWordCount";
  paragraphs?: Maybe<Scalars["Int"]>;
  sentences?: Maybe<Scalars["Int"]>;
  words?: Maybe<Scalars["Int"]>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>;
  sentences?: InputMaybe<IntQueryOperatorInput>;
  words?: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasNextPage: Scalars["Boolean"];
  hasPreviousPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars["Float"]>;
  background?: InputMaybe<Scalars["String"]>;
  blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
  color?: InputMaybe<Scalars["String"]>;
  optCurve?: InputMaybe<Scalars["Boolean"]>;
  optTolerance?: InputMaybe<Scalars["Float"]>;
  threshold?: InputMaybe<Scalars["Int"]>;
  turdSize?: InputMaybe<Scalars["Float"]>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
}

export type Query = {
  __typename?: "Query";
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allGoodreadsAuthor: GoodreadsAuthorConnection;
  allGoodreadsBook: GoodreadsBookConnection;
  allGoodreadsReview: GoodreadsReviewConnection;
  allGoodreadsShelf: GoodreadsShelfConnection;
  allImageSharp: ImageSharpConnection;
  allMdx: MdxConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allSoftwareJson: SoftwareJsonConnection;
  allStaticImage: StaticImageConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  goodreadsAuthor?: Maybe<GoodreadsAuthor>;
  goodreadsBook?: Maybe<GoodreadsBook>;
  goodreadsReview?: Maybe<GoodreadsReview>;
  goodreadsShelf?: Maybe<GoodreadsShelf>;
  imageSharp?: Maybe<ImageSharp>;
  mdx?: Maybe<Mdx>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  softwareJson?: Maybe<SoftwareJson>;
  staticImage?: Maybe<StaticImage>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllGoodreadsAuthorArgs = {
  filter?: InputMaybe<GoodreadsAuthorFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<GoodreadsAuthorSortInput>;
};

export type QueryAllGoodreadsBookArgs = {
  filter?: InputMaybe<GoodreadsBookFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<GoodreadsBookSortInput>;
};

export type QueryAllGoodreadsReviewArgs = {
  filter?: InputMaybe<GoodreadsReviewFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<GoodreadsReviewSortInput>;
};

export type QueryAllGoodreadsShelfArgs = {
  filter?: InputMaybe<GoodreadsShelfFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<GoodreadsShelfSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<MdxSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryAllSoftwareJsonArgs = {
  filter?: InputMaybe<SoftwareJsonFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<SoftwareJsonSortInput>;
};

export type QueryAllStaticImageArgs = {
  filter?: InputMaybe<StaticImageFilterInput>;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  sort?: InputMaybe<StaticImageSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childMdx?: InputMaybe<MdxFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childrenMdx?: InputMaybe<MdxFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryGoodreadsAuthorArgs = {
  average_rating?: InputMaybe<StringQueryOperatorInput>;
  books?: InputMaybe<GoodreadsBookFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image_url?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  ratings_count?: InputMaybe<StringQueryOperatorInput>;
  role?: InputMaybe<StringQueryOperatorInput>;
  small_image_url?: InputMaybe<StringQueryOperatorInput>;
  text_reviews_count?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryGoodreadsBookArgs = {
  authors?: InputMaybe<GoodreadsAuthorFilterListInput>;
  average_rating?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  edition_information?: InputMaybe<StringQueryOperatorInput>;
  format?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  image_url?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isbn?: InputMaybe<StringQueryOperatorInput>;
  isbn13?: InputMaybe<StringQueryOperatorInput>;
  large_image_url?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  num_pages?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publication_day?: InputMaybe<StringQueryOperatorInput>;
  publication_month?: InputMaybe<StringQueryOperatorInput>;
  publication_year?: InputMaybe<DateQueryOperatorInput>;
  published?: InputMaybe<DateQueryOperatorInput>;
  publisher?: InputMaybe<StringQueryOperatorInput>;
  ratings_count?: InputMaybe<StringQueryOperatorInput>;
  reviews?: InputMaybe<GoodreadsReviewFilterListInput>;
  small_image_url?: InputMaybe<StringQueryOperatorInput>;
  text_reviews_count?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  title_without_series?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  work?: InputMaybe<GoodreadsBookWorkFilterInput>;
};

export type QueryGoodreadsReviewArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  book?: InputMaybe<GoodreadsBookFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments_count?: InputMaybe<StringQueryOperatorInput>;
  date_added?: InputMaybe<StringQueryOperatorInput>;
  date_updated?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  owned?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rating?: InputMaybe<StringQueryOperatorInput>;
  read_at?: InputMaybe<StringQueryOperatorInput>;
  read_count?: InputMaybe<StringQueryOperatorInput>;
  recommended_by?: InputMaybe<StringQueryOperatorInput>;
  recommended_for?: InputMaybe<StringQueryOperatorInput>;
  spoiler_flag?: InputMaybe<StringQueryOperatorInput>;
  spoilers_state?: InputMaybe<StringQueryOperatorInput>;
  started_at?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  votes?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryGoodreadsShelfArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  exclusive?: InputMaybe<StringQueryOperatorInput>;
  goodreadsId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  review_shelf_id?: InputMaybe<StringQueryOperatorInput>;
  reviews?: InputMaybe<GoodreadsReviewFilterListInput>;
  sortable?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QueryMdxArgs = {
  body?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  exports?: InputMaybe<MdxExportsFilterInput>;
  fields?: InputMaybe<MdxFieldsFilterInput>;
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>;
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>;
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mdxAST?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  rawBody?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>;
  timeToRead?: InputMaybe<IntQueryOperatorInput>;
  wordCount?: InputMaybe<MdxWordCountFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySoftwareJsonArgs = {
  _2019?: InputMaybe<StringQueryOperatorInput>;
  _2020?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QueryStaticImageArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<FloatQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  flags?: Maybe<SiteFlags>;
  graphqlTypegen?: Maybe<Scalars["Boolean"]>;
  host?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars["String"]>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  port?: Maybe<Scalars["Int"]>;
  siteMetadata: SiteSiteMetadata;
  trailingSlash?: Maybe<Scalars["String"]>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  buildTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = "buildTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FlagsFastDev = "flags___FAST_DEV",
  FlagsParallelSourcing = "flags___PARALLEL_SOURCING",
  FlagsPreserveFileDownloadCache = "flags___PRESERVE_FILE_DOWNLOAD_CACHE",
  GraphqlTypegen = "graphqlTypegen",
  Host = "host",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  JsxRuntime = "jsxRuntime",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PathPrefix = "pathPrefix",
  Polyfill = "polyfill",
  Port = "port",
  SiteMetadataAuthor = "siteMetadata___author",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataImage = "siteMetadata___image",
  SiteMetadataImageAlt = "siteMetadata___imageAlt",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataSocialTwitter = "siteMetadata___social___twitter",
  SiteMetadataTitle = "siteMetadata___title",
  TrailingSlash = "trailingSlash",
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlags = {
  __typename?: "SiteFlags";
  FAST_DEV?: Maybe<Scalars["Boolean"]>;
  PARALLEL_SOURCING?: Maybe<Scalars["Boolean"]>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars["Boolean"]>;
};

export type SiteFlagsFilterInput = {
  FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>;
  PARALLEL_SOURCING?: InputMaybe<BooleanQueryOperatorInput>;
  PRESERVE_FILE_DOWNLOAD_CACHE?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: "SiteFunction";
  absoluteCompiledFilePath: Scalars["String"];
  children: Array<Node>;
  functionRoute: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  matchPath?: Maybe<Scalars["String"]>;
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  parent?: Maybe<Node>;
  pluginName: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
};

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge";
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = "absoluteCompiledFilePath",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  FunctionRoute = "functionRoute",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  OriginalAbsoluteFilePath = "originalAbsoluteFilePath",
  OriginalRelativeFilePath = "originalRelativeFilePath",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginName = "pluginName",
  RelativeCompiledFilePath = "relativeCompiledFilePath",
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SiteEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  children: Array<Node>;
  component: Scalars["String"];
  componentChunkName: Scalars["String"];
  id: Scalars["ID"];
  internal: Internal;
  internalComponentName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  pageContext?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  path: Scalars["String"];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Component = "component",
  ComponentChunkName = "componentChunkName",
  Id = "id",
  InternalComponentName = "internalComponentName",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  MatchPath = "matchPath",
  PageContext = "pageContext",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  Path = "path",
  PluginCreatorBrowserApIs = "pluginCreator___browserAPIs",
  PluginCreatorChildren = "pluginCreator___children",
  PluginCreatorChildrenChildren = "pluginCreator___children___children",
  PluginCreatorChildrenChildrenChildren = "pluginCreator___children___children___children",
  PluginCreatorChildrenChildrenId = "pluginCreator___children___children___id",
  PluginCreatorChildrenId = "pluginCreator___children___id",
  PluginCreatorChildrenInternalContent = "pluginCreator___children___internal___content",
  PluginCreatorChildrenInternalContentDigest = "pluginCreator___children___internal___contentDigest",
  PluginCreatorChildrenInternalDescription = "pluginCreator___children___internal___description",
  PluginCreatorChildrenInternalFieldOwners = "pluginCreator___children___internal___fieldOwners",
  PluginCreatorChildrenInternalIgnoreType = "pluginCreator___children___internal___ignoreType",
  PluginCreatorChildrenInternalMediaType = "pluginCreator___children___internal___mediaType",
  PluginCreatorChildrenInternalOwner = "pluginCreator___children___internal___owner",
  PluginCreatorChildrenInternalType = "pluginCreator___children___internal___type",
  PluginCreatorChildrenParentChildren = "pluginCreator___children___parent___children",
  PluginCreatorChildrenParentId = "pluginCreator___children___parent___id",
  PluginCreatorId = "pluginCreator___id",
  PluginCreatorInternalContent = "pluginCreator___internal___content",
  PluginCreatorInternalContentDigest = "pluginCreator___internal___contentDigest",
  PluginCreatorInternalDescription = "pluginCreator___internal___description",
  PluginCreatorInternalFieldOwners = "pluginCreator___internal___fieldOwners",
  PluginCreatorInternalIgnoreType = "pluginCreator___internal___ignoreType",
  PluginCreatorInternalMediaType = "pluginCreator___internal___mediaType",
  PluginCreatorInternalOwner = "pluginCreator___internal___owner",
  PluginCreatorInternalType = "pluginCreator___internal___type",
  PluginCreatorName = "pluginCreator___name",
  PluginCreatorNodeApIs = "pluginCreator___nodeAPIs",
  PluginCreatorPackageJson = "pluginCreator___packageJson",
  PluginCreatorParentChildren = "pluginCreator___parent___children",
  PluginCreatorParentChildrenChildren = "pluginCreator___parent___children___children",
  PluginCreatorParentChildrenId = "pluginCreator___parent___children___id",
  PluginCreatorParentId = "pluginCreator___parent___id",
  PluginCreatorParentInternalContent = "pluginCreator___parent___internal___content",
  PluginCreatorParentInternalContentDigest = "pluginCreator___parent___internal___contentDigest",
  PluginCreatorParentInternalDescription = "pluginCreator___parent___internal___description",
  PluginCreatorParentInternalFieldOwners = "pluginCreator___parent___internal___fieldOwners",
  PluginCreatorParentInternalIgnoreType = "pluginCreator___parent___internal___ignoreType",
  PluginCreatorParentInternalMediaType = "pluginCreator___parent___internal___mediaType",
  PluginCreatorParentInternalOwner = "pluginCreator___parent___internal___owner",
  PluginCreatorParentInternalType = "pluginCreator___parent___internal___type",
  PluginCreatorParentParentChildren = "pluginCreator___parent___parent___children",
  PluginCreatorParentParentId = "pluginCreator___parent___parent___id",
  PluginCreatorPluginFilepath = "pluginCreator___pluginFilepath",
  PluginCreatorPluginOptions = "pluginCreator___pluginOptions",
  PluginCreatorResolve = "pluginCreator___resolve",
  PluginCreatorSsrApIs = "pluginCreator___ssrAPIs",
  PluginCreatorVersion = "pluginCreator___version",
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  packageJson?: Maybe<Scalars["JSON"]>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<Scalars["JSON"]>;
  resolve?: Maybe<Scalars["String"]>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = "browserAPIs",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Name = "name",
  NodeApIs = "nodeAPIs",
  PackageJson = "packageJson",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PluginFilepath = "pluginFilepath",
  PluginOptions = "pluginOptions",
  Resolve = "resolve",
  SsrApIs = "ssrAPIs",
  Version = "version",
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SitePluginEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  author: Scalars["String"];
  description: Scalars["String"];
  image: Scalars["String"];
  imageAlt: Scalars["String"];
  siteUrl: Scalars["String"];
  social: SiteSiteMetadataSocial;
  title: Scalars["String"];
};

export type SiteSiteMetadataFilterInput = {
  author?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
  imageAlt?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  social?: InputMaybe<SiteSiteMetadataSocialFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataSocial = {
  __typename?: "SiteSiteMetadataSocial";
  twitter: Scalars["String"];
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SoftwareJson = Node & {
  __typename?: "SoftwareJson";
  _2019: Array<Scalars["String"]>;
  _2020: Array<Scalars["String"]>;
  children: Array<Node>;
  id: Scalars["ID"];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SoftwareJsonConnection = {
  __typename?: "SoftwareJsonConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SoftwareJsonEdge>;
  group: Array<SoftwareJsonGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SoftwareJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SoftwareJsonConnectionDistinctArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonConnectionGroupArgs = {
  field: SoftwareJsonFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SoftwareJsonConnectionMaxArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonConnectionMinArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonConnectionSumArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonEdge = {
  __typename?: "SoftwareJsonEdge";
  next?: Maybe<SoftwareJson>;
  node: SoftwareJson;
  previous?: Maybe<SoftwareJson>;
};

export enum SoftwareJsonFieldsEnum {
  "2019" = "_2019",
  "2020" = "_2020",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Id = "id",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
}

export type SoftwareJsonFilterInput = {
  _2019?: InputMaybe<StringQueryOperatorInput>;
  _2020?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SoftwareJsonGroupConnection = {
  __typename?: "SoftwareJsonGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<SoftwareJsonEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<SoftwareJsonGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<SoftwareJson>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type SoftwareJsonGroupConnectionDistinctArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonGroupConnectionGroupArgs = {
  field: SoftwareJsonFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type SoftwareJsonGroupConnectionMaxArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonGroupConnectionMinArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonGroupConnectionSumArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SoftwareJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StaticImage = Node & {
  __typename?: "StaticImage";
  absolutePath?: Maybe<Scalars["String"]>;
  accessTime?: Maybe<Scalars["Date"]>;
  atime?: Maybe<Scalars["Date"]>;
  atimeMs?: Maybe<Scalars["Float"]>;
  base?: Maybe<Scalars["String"]>;
  birthTime?: Maybe<Scalars["Date"]>;
  birthtime?: Maybe<Scalars["Date"]>;
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  changeTime?: Maybe<Scalars["Date"]>;
  children: Array<Node>;
  ctime?: Maybe<Scalars["Date"]>;
  ctimeMs?: Maybe<Scalars["Float"]>;
  dev?: Maybe<Scalars["Float"]>;
  dir?: Maybe<Scalars["String"]>;
  ext?: Maybe<Scalars["String"]>;
  extension?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  ino?: Maybe<Scalars["Float"]>;
  internal: Internal;
  mode?: Maybe<Scalars["Int"]>;
  modifiedTime?: Maybe<Scalars["Date"]>;
  mtime?: Maybe<Scalars["Date"]>;
  mtimeMs?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
  nlink?: Maybe<Scalars["Int"]>;
  parent?: Maybe<Node>;
  prettySize?: Maybe<Scalars["String"]>;
  rdev?: Maybe<Scalars["Int"]>;
  relativeDirectory?: Maybe<Scalars["String"]>;
  relativePath?: Maybe<Scalars["String"]>;
  root?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  sourceInstanceName?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["Int"]>;
};

export type StaticImageAccessTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageAtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageBirthTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageBirthtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageChangeTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageCtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageModifiedTimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageMtimeArgs = {
  difference?: InputMaybe<Scalars["String"]>;
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type StaticImageConnection = {
  __typename?: "StaticImageConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<StaticImageEdge>;
  group: Array<StaticImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  __typename?: "StaticImageEdge";
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export enum StaticImageFieldsEnum {
  AbsolutePath = "absolutePath",
  AccessTime = "accessTime",
  Atime = "atime",
  AtimeMs = "atimeMs",
  Base = "base",
  BirthTime = "birthTime",
  Birthtime = "birthtime",
  BirthtimeMs = "birthtimeMs",
  Blksize = "blksize",
  Blocks = "blocks",
  ChangeTime = "changeTime",
  Children = "children",
  ChildrenChildren = "children___children",
  ChildrenChildrenChildren = "children___children___children",
  ChildrenChildrenChildrenChildren = "children___children___children___children",
  ChildrenChildrenChildrenId = "children___children___children___id",
  ChildrenChildrenId = "children___children___id",
  ChildrenChildrenInternalContent = "children___children___internal___content",
  ChildrenChildrenInternalContentDigest = "children___children___internal___contentDigest",
  ChildrenChildrenInternalDescription = "children___children___internal___description",
  ChildrenChildrenInternalFieldOwners = "children___children___internal___fieldOwners",
  ChildrenChildrenInternalIgnoreType = "children___children___internal___ignoreType",
  ChildrenChildrenInternalMediaType = "children___children___internal___mediaType",
  ChildrenChildrenInternalOwner = "children___children___internal___owner",
  ChildrenChildrenInternalType = "children___children___internal___type",
  ChildrenChildrenParentChildren = "children___children___parent___children",
  ChildrenChildrenParentId = "children___children___parent___id",
  ChildrenId = "children___id",
  ChildrenInternalContent = "children___internal___content",
  ChildrenInternalContentDigest = "children___internal___contentDigest",
  ChildrenInternalDescription = "children___internal___description",
  ChildrenInternalFieldOwners = "children___internal___fieldOwners",
  ChildrenInternalIgnoreType = "children___internal___ignoreType",
  ChildrenInternalMediaType = "children___internal___mediaType",
  ChildrenInternalOwner = "children___internal___owner",
  ChildrenInternalType = "children___internal___type",
  ChildrenParentChildren = "children___parent___children",
  ChildrenParentChildrenChildren = "children___parent___children___children",
  ChildrenParentChildrenId = "children___parent___children___id",
  ChildrenParentId = "children___parent___id",
  ChildrenParentInternalContent = "children___parent___internal___content",
  ChildrenParentInternalContentDigest = "children___parent___internal___contentDigest",
  ChildrenParentInternalDescription = "children___parent___internal___description",
  ChildrenParentInternalFieldOwners = "children___parent___internal___fieldOwners",
  ChildrenParentInternalIgnoreType = "children___parent___internal___ignoreType",
  ChildrenParentInternalMediaType = "children___parent___internal___mediaType",
  ChildrenParentInternalOwner = "children___parent___internal___owner",
  ChildrenParentInternalType = "children___parent___internal___type",
  ChildrenParentParentChildren = "children___parent___parent___children",
  ChildrenParentParentId = "children___parent___parent___id",
  Ctime = "ctime",
  CtimeMs = "ctimeMs",
  Dev = "dev",
  Dir = "dir",
  Ext = "ext",
  Extension = "extension",
  Id = "id",
  Ino = "ino",
  InternalContent = "internal___content",
  InternalContentDigest = "internal___contentDigest",
  InternalDescription = "internal___description",
  InternalFieldOwners = "internal___fieldOwners",
  InternalIgnoreType = "internal___ignoreType",
  InternalMediaType = "internal___mediaType",
  InternalOwner = "internal___owner",
  InternalType = "internal___type",
  Mode = "mode",
  ModifiedTime = "modifiedTime",
  Mtime = "mtime",
  MtimeMs = "mtimeMs",
  Name = "name",
  Nlink = "nlink",
  ParentChildren = "parent___children",
  ParentChildrenChildren = "parent___children___children",
  ParentChildrenChildrenChildren = "parent___children___children___children",
  ParentChildrenChildrenId = "parent___children___children___id",
  ParentChildrenId = "parent___children___id",
  ParentChildrenInternalContent = "parent___children___internal___content",
  ParentChildrenInternalContentDigest = "parent___children___internal___contentDigest",
  ParentChildrenInternalDescription = "parent___children___internal___description",
  ParentChildrenInternalFieldOwners = "parent___children___internal___fieldOwners",
  ParentChildrenInternalIgnoreType = "parent___children___internal___ignoreType",
  ParentChildrenInternalMediaType = "parent___children___internal___mediaType",
  ParentChildrenInternalOwner = "parent___children___internal___owner",
  ParentChildrenInternalType = "parent___children___internal___type",
  ParentChildrenParentChildren = "parent___children___parent___children",
  ParentChildrenParentId = "parent___children___parent___id",
  ParentId = "parent___id",
  ParentInternalContent = "parent___internal___content",
  ParentInternalContentDigest = "parent___internal___contentDigest",
  ParentInternalDescription = "parent___internal___description",
  ParentInternalFieldOwners = "parent___internal___fieldOwners",
  ParentInternalIgnoreType = "parent___internal___ignoreType",
  ParentInternalMediaType = "parent___internal___mediaType",
  ParentInternalOwner = "parent___internal___owner",
  ParentInternalType = "parent___internal___type",
  ParentParentChildren = "parent___parent___children",
  ParentParentChildrenChildren = "parent___parent___children___children",
  ParentParentChildrenId = "parent___parent___children___id",
  ParentParentId = "parent___parent___id",
  ParentParentInternalContent = "parent___parent___internal___content",
  ParentParentInternalContentDigest = "parent___parent___internal___contentDigest",
  ParentParentInternalDescription = "parent___parent___internal___description",
  ParentParentInternalFieldOwners = "parent___parent___internal___fieldOwners",
  ParentParentInternalIgnoreType = "parent___parent___internal___ignoreType",
  ParentParentInternalMediaType = "parent___parent___internal___mediaType",
  ParentParentInternalOwner = "parent___parent___internal___owner",
  ParentParentInternalType = "parent___parent___internal___type",
  ParentParentParentChildren = "parent___parent___parent___children",
  ParentParentParentId = "parent___parent___parent___id",
  PrettySize = "prettySize",
  Rdev = "rdev",
  RelativeDirectory = "relativeDirectory",
  RelativePath = "relativePath",
  Root = "root",
  Size = "size",
  SourceInstanceName = "sourceInstanceName",
  Uid = "uid",
}

export type StaticImageFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<FloatQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type StaticImageGroupConnection = {
  __typename?: "StaticImageGroupConnection";
  distinct: Array<Scalars["String"]>;
  edges: Array<StaticImageEdge>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
  group: Array<StaticImageGroupConnection>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars["Float"]>;
  totalCount: Scalars["Int"];
};

export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionGroupArgs = {
  field: StaticImageFieldsEnum;
  limit?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};

export type StaticImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]>;
  glob?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  ne?: InputMaybe<Scalars["String"]>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  regex?: InputMaybe<Scalars["String"]>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
};

export type BioQueryVariables = Exact<{ [key: string]: never }>;

export type BioQuery = {
  __typename?: "Query";
  avatar?: {
    __typename?: "File";
    childImageSharp?: {
      __typename?: "ImageSharp";
      gatsbyImageData: any;
    } | null;
  } | null;
};

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type SiteMetadataQuery = {
  __typename?: "Query";
  site?: {
    __typename?: "Site";
    siteMetadata: {
      __typename?: "SiteSiteMetadata";
      title: string;
      description: string;
      author: string;
      image: string;
      imageAlt: string;
      siteUrl: string;
      social: { __typename?: "SiteSiteMetadataSocial"; twitter: string };
    };
  } | null;
};

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>;

export type BlogIndexQuery = {
  __typename?: "Query";
  allMdx: {
    __typename?: "MdxConnection";
    edges: Array<{
      __typename?: "MdxEdge";
      node: {
        __typename?: "Mdx";
        excerpt: string;
        fields?: { __typename?: "MdxFields"; slug?: string | null } | null;
        exports?: {
          __typename?: "MdxExports";
          meta?: {
            __typename?: "MdxExportsMeta";
            draft: boolean;
            title: string;
            date: any;
            description: string;
            category?: string | null;
            linkText?: string | null;
            image: {
              __typename?: "File";
              childImageSharp?: {
                __typename?: "ImageSharp";
                gatsbyImageData: any;
              } | null;
            };
          } | null;
        } | null;
      };
    }>;
  };
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BlogPostBySlugQuery = {
  __typename?: "Query";
  mdx?: {
    __typename?: "Mdx";
    id: string;
    excerpt: string;
    body: string;
    exports?: {
      __typename?: "MdxExports";
      meta?: {
        __typename?: "MdxExportsMeta";
        title: string;
        date: any;
        updated?: any | null;
        description: string;
        category?: string | null;
        imageAlt: string;
        image: {
          __typename?: "File";
          childImageSharp?: {
            __typename?: "ImageSharp";
            gatsbyImageData: any;
          } | null;
        };
      } | null;
    } | null;
  } | null;
  books2019: {
    __typename?: "GoodreadsShelfConnection";
    edges: Array<{
      __typename?: "GoodreadsShelfEdge";
      node: {
        __typename?: "GoodreadsShelf";
        name?: string | null;
        reviews?: Array<{
          __typename?: "GoodreadsReview";
          rating?: string | null;
          book?: {
            __typename?: "GoodreadsBook";
            title?: string | null;
            link?: string | null;
            image_url?: string | null;
            authors?: Array<{
              __typename?: "GoodreadsAuthor";
              name?: string | null;
            } | null> | null;
          } | null;
        } | null> | null;
      };
    }>;
  };
  books2020: {
    __typename?: "GoodreadsShelfConnection";
    edges: Array<{
      __typename?: "GoodreadsShelfEdge";
      node: {
        __typename?: "GoodreadsShelf";
        name?: string | null;
        reviews?: Array<{
          __typename?: "GoodreadsReview";
          rating?: string | null;
          book?: {
            __typename?: "GoodreadsBook";
            title?: string | null;
            link?: string | null;
            image_url?: string | null;
            authors?: Array<{
              __typename?: "GoodreadsAuthor";
              name?: string | null;
            } | null> | null;
          } | null;
        } | null> | null;
      };
    }>;
  };
  books2021: {
    __typename?: "GoodreadsShelfConnection";
    edges: Array<{
      __typename?: "GoodreadsShelfEdge";
      node: {
        __typename?: "GoodreadsShelf";
        name?: string | null;
        reviews?: Array<{
          __typename?: "GoodreadsReview";
          rating?: string | null;
          book?: {
            __typename?: "GoodreadsBook";
            title?: string | null;
            link?: string | null;
            image_url?: string | null;
            authors?: Array<{
              __typename?: "GoodreadsAuthor";
              name?: string | null;
            } | null> | null;
          } | null;
        } | null> | null;
      };
    }>;
  };
  books2022: {
    __typename?: "GoodreadsShelfConnection";
    edges: Array<{
      __typename?: "GoodreadsShelfEdge";
      node: {
        __typename?: "GoodreadsShelf";
        name?: string | null;
        reviews?: Array<{
          __typename?: "GoodreadsReview";
          rating?: string | null;
          book?: {
            __typename?: "GoodreadsBook";
            title?: string | null;
            link?: string | null;
            image_url?: string | null;
            authors?: Array<{
              __typename?: "GoodreadsAuthor";
              name?: string | null;
            } | null> | null;
          } | null;
        } | null> | null;
      };
    }>;
  };
};
