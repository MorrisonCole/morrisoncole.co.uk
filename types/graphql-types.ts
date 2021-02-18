export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  quality?: Maybe<Scalars["Int"]>;
  lossless?: Maybe<Scalars["Boolean"]>;
  speed?: Maybe<Scalars["Int"]>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars["Int"]>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
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
  InternalType = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: Maybe<Scalars["Int"]>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type SoftwareJson */
  childrenSoftwareJson?: Maybe<Array<Maybe<SoftwareJson>>>;
  /** Returns the first child node of type SoftwareJson or null if there are no children of given type on this node */
  childSoftwareJson?: Maybe<SoftwareJson>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
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
  ChildrenImageSharp = "childrenImageSharp",
  ChildrenImageSharpFixedBase64 = "childrenImageSharp___fixed___base64",
  ChildrenImageSharpFixedTracedSvg = "childrenImageSharp___fixed___tracedSVG",
  ChildrenImageSharpFixedAspectRatio = "childrenImageSharp___fixed___aspectRatio",
  ChildrenImageSharpFixedWidth = "childrenImageSharp___fixed___width",
  ChildrenImageSharpFixedHeight = "childrenImageSharp___fixed___height",
  ChildrenImageSharpFixedSrc = "childrenImageSharp___fixed___src",
  ChildrenImageSharpFixedSrcSet = "childrenImageSharp___fixed___srcSet",
  ChildrenImageSharpFixedSrcWebp = "childrenImageSharp___fixed___srcWebp",
  ChildrenImageSharpFixedSrcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  ChildrenImageSharpFixedOriginalName = "childrenImageSharp___fixed___originalName",
  ChildrenImageSharpResolutionsBase64 = "childrenImageSharp___resolutions___base64",
  ChildrenImageSharpResolutionsTracedSvg = "childrenImageSharp___resolutions___tracedSVG",
  ChildrenImageSharpResolutionsAspectRatio = "childrenImageSharp___resolutions___aspectRatio",
  ChildrenImageSharpResolutionsWidth = "childrenImageSharp___resolutions___width",
  ChildrenImageSharpResolutionsHeight = "childrenImageSharp___resolutions___height",
  ChildrenImageSharpResolutionsSrc = "childrenImageSharp___resolutions___src",
  ChildrenImageSharpResolutionsSrcSet = "childrenImageSharp___resolutions___srcSet",
  ChildrenImageSharpResolutionsSrcWebp = "childrenImageSharp___resolutions___srcWebp",
  ChildrenImageSharpResolutionsSrcSetWebp = "childrenImageSharp___resolutions___srcSetWebp",
  ChildrenImageSharpResolutionsOriginalName = "childrenImageSharp___resolutions___originalName",
  ChildrenImageSharpFluidBase64 = "childrenImageSharp___fluid___base64",
  ChildrenImageSharpFluidTracedSvg = "childrenImageSharp___fluid___tracedSVG",
  ChildrenImageSharpFluidAspectRatio = "childrenImageSharp___fluid___aspectRatio",
  ChildrenImageSharpFluidSrc = "childrenImageSharp___fluid___src",
  ChildrenImageSharpFluidSrcSet = "childrenImageSharp___fluid___srcSet",
  ChildrenImageSharpFluidSrcWebp = "childrenImageSharp___fluid___srcWebp",
  ChildrenImageSharpFluidSrcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  ChildrenImageSharpFluidSizes = "childrenImageSharp___fluid___sizes",
  ChildrenImageSharpFluidOriginalImg = "childrenImageSharp___fluid___originalImg",
  ChildrenImageSharpFluidOriginalName = "childrenImageSharp___fluid___originalName",
  ChildrenImageSharpFluidPresentationWidth = "childrenImageSharp___fluid___presentationWidth",
  ChildrenImageSharpFluidPresentationHeight = "childrenImageSharp___fluid___presentationHeight",
  ChildrenImageSharpSizesBase64 = "childrenImageSharp___sizes___base64",
  ChildrenImageSharpSizesTracedSvg = "childrenImageSharp___sizes___tracedSVG",
  ChildrenImageSharpSizesAspectRatio = "childrenImageSharp___sizes___aspectRatio",
  ChildrenImageSharpSizesSrc = "childrenImageSharp___sizes___src",
  ChildrenImageSharpSizesSrcSet = "childrenImageSharp___sizes___srcSet",
  ChildrenImageSharpSizesSrcWebp = "childrenImageSharp___sizes___srcWebp",
  ChildrenImageSharpSizesSrcSetWebp = "childrenImageSharp___sizes___srcSetWebp",
  ChildrenImageSharpSizesSizes = "childrenImageSharp___sizes___sizes",
  ChildrenImageSharpSizesOriginalImg = "childrenImageSharp___sizes___originalImg",
  ChildrenImageSharpSizesOriginalName = "childrenImageSharp___sizes___originalName",
  ChildrenImageSharpSizesPresentationWidth = "childrenImageSharp___sizes___presentationWidth",
  ChildrenImageSharpSizesPresentationHeight = "childrenImageSharp___sizes___presentationHeight",
  ChildrenImageSharpGatsbyImageData = "childrenImageSharp___gatsbyImageData",
  ChildrenImageSharpOriginalWidth = "childrenImageSharp___original___width",
  ChildrenImageSharpOriginalHeight = "childrenImageSharp___original___height",
  ChildrenImageSharpOriginalSrc = "childrenImageSharp___original___src",
  ChildrenImageSharpResizeSrc = "childrenImageSharp___resize___src",
  ChildrenImageSharpResizeTracedSvg = "childrenImageSharp___resize___tracedSVG",
  ChildrenImageSharpResizeWidth = "childrenImageSharp___resize___width",
  ChildrenImageSharpResizeHeight = "childrenImageSharp___resize___height",
  ChildrenImageSharpResizeAspectRatio = "childrenImageSharp___resize___aspectRatio",
  ChildrenImageSharpResizeOriginalName = "childrenImageSharp___resize___originalName",
  ChildrenImageSharpId = "childrenImageSharp___id",
  ChildrenImageSharpParentId = "childrenImageSharp___parent___id",
  ChildrenImageSharpParentParentId = "childrenImageSharp___parent___parent___id",
  ChildrenImageSharpParentParentChildren = "childrenImageSharp___parent___parent___children",
  ChildrenImageSharpParentChildren = "childrenImageSharp___parent___children",
  ChildrenImageSharpParentChildrenId = "childrenImageSharp___parent___children___id",
  ChildrenImageSharpParentChildrenChildren = "childrenImageSharp___parent___children___children",
  ChildrenImageSharpParentInternalContent = "childrenImageSharp___parent___internal___content",
  ChildrenImageSharpParentInternalContentDigest = "childrenImageSharp___parent___internal___contentDigest",
  ChildrenImageSharpParentInternalDescription = "childrenImageSharp___parent___internal___description",
  ChildrenImageSharpParentInternalFieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  ChildrenImageSharpParentInternalIgnoreType = "childrenImageSharp___parent___internal___ignoreType",
  ChildrenImageSharpParentInternalMediaType = "childrenImageSharp___parent___internal___mediaType",
  ChildrenImageSharpParentInternalOwner = "childrenImageSharp___parent___internal___owner",
  ChildrenImageSharpParentInternalType = "childrenImageSharp___parent___internal___type",
  ChildrenImageSharpChildren = "childrenImageSharp___children",
  ChildrenImageSharpChildrenId = "childrenImageSharp___children___id",
  ChildrenImageSharpChildrenParentId = "childrenImageSharp___children___parent___id",
  ChildrenImageSharpChildrenParentChildren = "childrenImageSharp___children___parent___children",
  ChildrenImageSharpChildrenChildren = "childrenImageSharp___children___children",
  ChildrenImageSharpChildrenChildrenId = "childrenImageSharp___children___children___id",
  ChildrenImageSharpChildrenChildrenChildren = "childrenImageSharp___children___children___children",
  ChildrenImageSharpChildrenInternalContent = "childrenImageSharp___children___internal___content",
  ChildrenImageSharpChildrenInternalContentDigest = "childrenImageSharp___children___internal___contentDigest",
  ChildrenImageSharpChildrenInternalDescription = "childrenImageSharp___children___internal___description",
  ChildrenImageSharpChildrenInternalFieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  ChildrenImageSharpChildrenInternalIgnoreType = "childrenImageSharp___children___internal___ignoreType",
  ChildrenImageSharpChildrenInternalMediaType = "childrenImageSharp___children___internal___mediaType",
  ChildrenImageSharpChildrenInternalOwner = "childrenImageSharp___children___internal___owner",
  ChildrenImageSharpChildrenInternalType = "childrenImageSharp___children___internal___type",
  ChildrenImageSharpInternalContent = "childrenImageSharp___internal___content",
  ChildrenImageSharpInternalContentDigest = "childrenImageSharp___internal___contentDigest",
  ChildrenImageSharpInternalDescription = "childrenImageSharp___internal___description",
  ChildrenImageSharpInternalFieldOwners = "childrenImageSharp___internal___fieldOwners",
  ChildrenImageSharpInternalIgnoreType = "childrenImageSharp___internal___ignoreType",
  ChildrenImageSharpInternalMediaType = "childrenImageSharp___internal___mediaType",
  ChildrenImageSharpInternalOwner = "childrenImageSharp___internal___owner",
  ChildrenImageSharpInternalType = "childrenImageSharp___internal___type",
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
  ChildImageSharpGatsbyImageData = "childImageSharp___gatsbyImageData",
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
  ChildrenSoftwareJson = "childrenSoftwareJson",
  ChildrenSoftwareJson_2019 = "childrenSoftwareJson____2019",
  ChildrenSoftwareJson_2020 = "childrenSoftwareJson____2020",
  ChildrenSoftwareJsonId = "childrenSoftwareJson___id",
  ChildrenSoftwareJsonParentId = "childrenSoftwareJson___parent___id",
  ChildrenSoftwareJsonParentParentId = "childrenSoftwareJson___parent___parent___id",
  ChildrenSoftwareJsonParentParentChildren = "childrenSoftwareJson___parent___parent___children",
  ChildrenSoftwareJsonParentChildren = "childrenSoftwareJson___parent___children",
  ChildrenSoftwareJsonParentChildrenId = "childrenSoftwareJson___parent___children___id",
  ChildrenSoftwareJsonParentChildrenChildren = "childrenSoftwareJson___parent___children___children",
  ChildrenSoftwareJsonParentInternalContent = "childrenSoftwareJson___parent___internal___content",
  ChildrenSoftwareJsonParentInternalContentDigest = "childrenSoftwareJson___parent___internal___contentDigest",
  ChildrenSoftwareJsonParentInternalDescription = "childrenSoftwareJson___parent___internal___description",
  ChildrenSoftwareJsonParentInternalFieldOwners = "childrenSoftwareJson___parent___internal___fieldOwners",
  ChildrenSoftwareJsonParentInternalIgnoreType = "childrenSoftwareJson___parent___internal___ignoreType",
  ChildrenSoftwareJsonParentInternalMediaType = "childrenSoftwareJson___parent___internal___mediaType",
  ChildrenSoftwareJsonParentInternalOwner = "childrenSoftwareJson___parent___internal___owner",
  ChildrenSoftwareJsonParentInternalType = "childrenSoftwareJson___parent___internal___type",
  ChildrenSoftwareJsonChildren = "childrenSoftwareJson___children",
  ChildrenSoftwareJsonChildrenId = "childrenSoftwareJson___children___id",
  ChildrenSoftwareJsonChildrenParentId = "childrenSoftwareJson___children___parent___id",
  ChildrenSoftwareJsonChildrenParentChildren = "childrenSoftwareJson___children___parent___children",
  ChildrenSoftwareJsonChildrenChildren = "childrenSoftwareJson___children___children",
  ChildrenSoftwareJsonChildrenChildrenId = "childrenSoftwareJson___children___children___id",
  ChildrenSoftwareJsonChildrenChildrenChildren = "childrenSoftwareJson___children___children___children",
  ChildrenSoftwareJsonChildrenInternalContent = "childrenSoftwareJson___children___internal___content",
  ChildrenSoftwareJsonChildrenInternalContentDigest = "childrenSoftwareJson___children___internal___contentDigest",
  ChildrenSoftwareJsonChildrenInternalDescription = "childrenSoftwareJson___children___internal___description",
  ChildrenSoftwareJsonChildrenInternalFieldOwners = "childrenSoftwareJson___children___internal___fieldOwners",
  ChildrenSoftwareJsonChildrenInternalIgnoreType = "childrenSoftwareJson___children___internal___ignoreType",
  ChildrenSoftwareJsonChildrenInternalMediaType = "childrenSoftwareJson___children___internal___mediaType",
  ChildrenSoftwareJsonChildrenInternalOwner = "childrenSoftwareJson___children___internal___owner",
  ChildrenSoftwareJsonChildrenInternalType = "childrenSoftwareJson___children___internal___type",
  ChildrenSoftwareJsonInternalContent = "childrenSoftwareJson___internal___content",
  ChildrenSoftwareJsonInternalContentDigest = "childrenSoftwareJson___internal___contentDigest",
  ChildrenSoftwareJsonInternalDescription = "childrenSoftwareJson___internal___description",
  ChildrenSoftwareJsonInternalFieldOwners = "childrenSoftwareJson___internal___fieldOwners",
  ChildrenSoftwareJsonInternalIgnoreType = "childrenSoftwareJson___internal___ignoreType",
  ChildrenSoftwareJsonInternalMediaType = "childrenSoftwareJson___internal___mediaType",
  ChildrenSoftwareJsonInternalOwner = "childrenSoftwareJson___internal___owner",
  ChildrenSoftwareJsonInternalType = "childrenSoftwareJson___internal___type",
  ChildSoftwareJson_2019 = "childSoftwareJson____2019",
  ChildSoftwareJson_2020 = "childSoftwareJson____2020",
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
  ChildrenMdx = "childrenMdx",
  ChildrenMdxRawBody = "childrenMdx___rawBody",
  ChildrenMdxFileAbsolutePath = "childrenMdx___fileAbsolutePath",
  ChildrenMdxFrontmatterTitle = "childrenMdx___frontmatter___title",
  ChildrenMdxSlug = "childrenMdx___slug",
  ChildrenMdxBody = "childrenMdx___body",
  ChildrenMdxExcerpt = "childrenMdx___excerpt",
  ChildrenMdxHeadings = "childrenMdx___headings",
  ChildrenMdxHeadingsValue = "childrenMdx___headings___value",
  ChildrenMdxHeadingsDepth = "childrenMdx___headings___depth",
  ChildrenMdxHtml = "childrenMdx___html",
  ChildrenMdxMdxAst = "childrenMdx___mdxAST",
  ChildrenMdxTableOfContents = "childrenMdx___tableOfContents",
  ChildrenMdxTimeToRead = "childrenMdx___timeToRead",
  ChildrenMdxWordCountParagraphs = "childrenMdx___wordCount___paragraphs",
  ChildrenMdxWordCountSentences = "childrenMdx___wordCount___sentences",
  ChildrenMdxWordCountWords = "childrenMdx___wordCount___words",
  ChildrenMdxExportsMetaTitle = "childrenMdx___exports___meta___title",
  ChildrenMdxExportsMetaDate = "childrenMdx___exports___meta___date",
  ChildrenMdxExportsMetaUpdated = "childrenMdx___exports___meta___updated",
  ChildrenMdxExportsMetaDescription = "childrenMdx___exports___meta___description",
  ChildrenMdxExportsMetaCategory = "childrenMdx___exports___meta___category",
  ChildrenMdxExportsMetaImageAlt = "childrenMdx___exports___meta___imageAlt",
  ChildrenMdxExportsMetaLinkText = "childrenMdx___exports___meta___linkText",
  ChildrenMdxExportsMetaDraft = "childrenMdx___exports___meta___draft",
  ChildrenMdxFieldsSlug = "childrenMdx___fields___slug",
  ChildrenMdxId = "childrenMdx___id",
  ChildrenMdxParentId = "childrenMdx___parent___id",
  ChildrenMdxParentParentId = "childrenMdx___parent___parent___id",
  ChildrenMdxParentParentChildren = "childrenMdx___parent___parent___children",
  ChildrenMdxParentChildren = "childrenMdx___parent___children",
  ChildrenMdxParentChildrenId = "childrenMdx___parent___children___id",
  ChildrenMdxParentChildrenChildren = "childrenMdx___parent___children___children",
  ChildrenMdxParentInternalContent = "childrenMdx___parent___internal___content",
  ChildrenMdxParentInternalContentDigest = "childrenMdx___parent___internal___contentDigest",
  ChildrenMdxParentInternalDescription = "childrenMdx___parent___internal___description",
  ChildrenMdxParentInternalFieldOwners = "childrenMdx___parent___internal___fieldOwners",
  ChildrenMdxParentInternalIgnoreType = "childrenMdx___parent___internal___ignoreType",
  ChildrenMdxParentInternalMediaType = "childrenMdx___parent___internal___mediaType",
  ChildrenMdxParentInternalOwner = "childrenMdx___parent___internal___owner",
  ChildrenMdxParentInternalType = "childrenMdx___parent___internal___type",
  ChildrenMdxChildren = "childrenMdx___children",
  ChildrenMdxChildrenId = "childrenMdx___children___id",
  ChildrenMdxChildrenParentId = "childrenMdx___children___parent___id",
  ChildrenMdxChildrenParentChildren = "childrenMdx___children___parent___children",
  ChildrenMdxChildrenChildren = "childrenMdx___children___children",
  ChildrenMdxChildrenChildrenId = "childrenMdx___children___children___id",
  ChildrenMdxChildrenChildrenChildren = "childrenMdx___children___children___children",
  ChildrenMdxChildrenInternalContent = "childrenMdx___children___internal___content",
  ChildrenMdxChildrenInternalContentDigest = "childrenMdx___children___internal___contentDigest",
  ChildrenMdxChildrenInternalDescription = "childrenMdx___children___internal___description",
  ChildrenMdxChildrenInternalFieldOwners = "childrenMdx___children___internal___fieldOwners",
  ChildrenMdxChildrenInternalIgnoreType = "childrenMdx___children___internal___ignoreType",
  ChildrenMdxChildrenInternalMediaType = "childrenMdx___children___internal___mediaType",
  ChildrenMdxChildrenInternalOwner = "childrenMdx___children___internal___owner",
  ChildrenMdxChildrenInternalType = "childrenMdx___children___internal___type",
  ChildrenMdxInternalContent = "childrenMdx___internal___content",
  ChildrenMdxInternalContentDigest = "childrenMdx___internal___contentDigest",
  ChildrenMdxInternalDescription = "childrenMdx___internal___description",
  ChildrenMdxInternalFieldOwners = "childrenMdx___internal___fieldOwners",
  ChildrenMdxInternalIgnoreType = "childrenMdx___internal___ignoreType",
  ChildrenMdxInternalMediaType = "childrenMdx___internal___mediaType",
  ChildrenMdxInternalOwner = "childrenMdx___internal___owner",
  ChildrenMdxInternalType = "childrenMdx___internal___type",
  ChildMdxRawBody = "childMdx___rawBody",
  ChildMdxFileAbsolutePath = "childMdx___fileAbsolutePath",
  ChildMdxFrontmatterTitle = "childMdx___frontmatter___title",
  ChildMdxSlug = "childMdx___slug",
  ChildMdxBody = "childMdx___body",
  ChildMdxExcerpt = "childMdx___excerpt",
  ChildMdxHeadings = "childMdx___headings",
  ChildMdxHeadingsValue = "childMdx___headings___value",
  ChildMdxHeadingsDepth = "childMdx___headings___depth",
  ChildMdxHtml = "childMdx___html",
  ChildMdxMdxAst = "childMdx___mdxAST",
  ChildMdxTableOfContents = "childMdx___tableOfContents",
  ChildMdxTimeToRead = "childMdx___timeToRead",
  ChildMdxWordCountParagraphs = "childMdx___wordCount___paragraphs",
  ChildMdxWordCountSentences = "childMdx___wordCount___sentences",
  ChildMdxWordCountWords = "childMdx___wordCount___words",
  ChildMdxExportsMetaTitle = "childMdx___exports___meta___title",
  ChildMdxExportsMetaDate = "childMdx___exports___meta___date",
  ChildMdxExportsMetaUpdated = "childMdx___exports___meta___updated",
  ChildMdxExportsMetaDescription = "childMdx___exports___meta___description",
  ChildMdxExportsMetaCategory = "childMdx___exports___meta___category",
  ChildMdxExportsMetaImageAlt = "childMdx___exports___meta___imageAlt",
  ChildMdxExportsMetaLinkText = "childMdx___exports___meta___linkText",
  ChildMdxExportsMetaDraft = "childMdx___exports___meta___draft",
  ChildMdxFieldsSlug = "childMdx___fields___slug",
  ChildMdxId = "childMdx___id",
  ChildMdxParentId = "childMdx___parent___id",
  ChildMdxParentParentId = "childMdx___parent___parent___id",
  ChildMdxParentParentChildren = "childMdx___parent___parent___children",
  ChildMdxParentChildren = "childMdx___parent___children",
  ChildMdxParentChildrenId = "childMdx___parent___children___id",
  ChildMdxParentChildrenChildren = "childMdx___parent___children___children",
  ChildMdxParentInternalContent = "childMdx___parent___internal___content",
  ChildMdxParentInternalContentDigest = "childMdx___parent___internal___contentDigest",
  ChildMdxParentInternalDescription = "childMdx___parent___internal___description",
  ChildMdxParentInternalFieldOwners = "childMdx___parent___internal___fieldOwners",
  ChildMdxParentInternalIgnoreType = "childMdx___parent___internal___ignoreType",
  ChildMdxParentInternalMediaType = "childMdx___parent___internal___mediaType",
  ChildMdxParentInternalOwner = "childMdx___parent___internal___owner",
  ChildMdxParentInternalType = "childMdx___parent___internal___type",
  ChildMdxChildren = "childMdx___children",
  ChildMdxChildrenId = "childMdx___children___id",
  ChildMdxChildrenParentId = "childMdx___children___parent___id",
  ChildMdxChildrenParentChildren = "childMdx___children___parent___children",
  ChildMdxChildrenChildren = "childMdx___children___children",
  ChildMdxChildrenChildrenId = "childMdx___children___children___id",
  ChildMdxChildrenChildrenChildren = "childMdx___children___children___children",
  ChildMdxChildrenInternalContent = "childMdx___children___internal___content",
  ChildMdxChildrenInternalContentDigest = "childMdx___children___internal___contentDigest",
  ChildMdxChildrenInternalDescription = "childMdx___children___internal___description",
  ChildMdxChildrenInternalFieldOwners = "childMdx___children___internal___fieldOwners",
  ChildMdxChildrenInternalIgnoreType = "childMdx___children___internal___ignoreType",
  ChildMdxChildrenInternalMediaType = "childMdx___children___internal___mediaType",
  ChildMdxChildrenInternalOwner = "childMdx___children___internal___owner",
  ChildMdxChildrenInternalType = "childMdx___children___internal___type",
  ChildMdxInternalContent = "childMdx___internal___content",
  ChildMdxInternalContentDigest = "childMdx___internal___contentDigest",
  ChildMdxInternalDescription = "childMdx___internal___description",
  ChildMdxInternalFieldOwners = "childMdx___internal___fieldOwners",
  ChildMdxInternalIgnoreType = "childMdx___internal___ignoreType",
  ChildMdxInternalMediaType = "childMdx___internal___mediaType",
  ChildMdxInternalOwner = "childMdx___internal___owner",
  ChildMdxInternalType = "childMdx___internal___type",
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
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenSoftwareJson?: Maybe<SoftwareJsonFilterListInput>;
  childSoftwareJson?: Maybe<SoftwareJsonFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type GithubData = Node & {
  __typename?: "GithubData";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  data?: Maybe<GithubDataData>;
  rawResult?: Maybe<GithubDataRawResult>;
};

export type GithubDataConnection = {
  __typename?: "GithubDataConnection";
  totalCount: Scalars["Int"];
  edges: Array<GithubDataEdge>;
  nodes: Array<GithubData>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GithubDataGroupConnection>;
};

export type GithubDataConnectionDistinctArgs = {
  field: GithubDataFieldsEnum;
};

export type GithubDataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GithubDataFieldsEnum;
};

export type GithubDataData = {
  __typename?: "GithubDataData";
  viewer?: Maybe<GithubDataDataViewer>;
};

export type GithubDataDataFilterInput = {
  viewer?: Maybe<GithubDataDataViewerFilterInput>;
};

export type GithubDataDataViewer = {
  __typename?: "GithubDataDataViewer";
  repositories?: Maybe<GithubDataDataViewerRepositories>;
};

export type GithubDataDataViewerFilterInput = {
  repositories?: Maybe<GithubDataDataViewerRepositoriesFilterInput>;
};

export type GithubDataDataViewerRepositories = {
  __typename?: "GithubDataDataViewerRepositories";
  totalCount?: Maybe<Scalars["Int"]>;
  nodes?: Maybe<Array<Maybe<GithubDataDataViewerRepositoriesNodes>>>;
};

export type GithubDataDataViewerRepositoriesFilterInput = {
  totalCount?: Maybe<IntQueryOperatorInput>;
  nodes?: Maybe<GithubDataDataViewerRepositoriesNodesFilterListInput>;
};

export type GithubDataDataViewerRepositoriesNodes = {
  __typename?: "GithubDataDataViewerRepositoriesNodes";
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  primaryLanguage?: Maybe<GithubDataDataViewerRepositoriesNodesPrimaryLanguage>;
};

export type GithubDataDataViewerRepositoriesNodesUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GithubDataDataViewerRepositoriesNodesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  primaryLanguage?: Maybe<GithubDataDataViewerRepositoriesNodesPrimaryLanguageFilterInput>;
};

export type GithubDataDataViewerRepositoriesNodesFilterListInput = {
  elemMatch?: Maybe<GithubDataDataViewerRepositoriesNodesFilterInput>;
};

export type GithubDataDataViewerRepositoriesNodesPrimaryLanguage = {
  __typename?: "GithubDataDataViewerRepositoriesNodesPrimaryLanguage";
  name?: Maybe<Scalars["String"]>;
};

export type GithubDataDataViewerRepositoriesNodesPrimaryLanguageFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type GithubDataEdge = {
  __typename?: "GithubDataEdge";
  next?: Maybe<GithubData>;
  node: GithubData;
  previous?: Maybe<GithubData>;
};

export enum GithubDataFieldsEnum {
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
  DataViewerRepositoriesTotalCount = "data___viewer___repositories___totalCount",
  DataViewerRepositoriesNodes = "data___viewer___repositories___nodes",
}

export type GithubDataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  data?: Maybe<GithubDataDataFilterInput>;
  rawResult?: Maybe<GithubDataRawResultFilterInput>;
};

export type GithubDataGroupConnection = {
  __typename?: "GithubDataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GithubDataEdge>;
  nodes: Array<GithubData>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GithubDataRawResult = {
  __typename?: "GithubDataRawResult";
  data?: Maybe<GithubDataRawResultData>;
};

export type GithubDataRawResultData = {
  __typename?: "GithubDataRawResultData";
  viewer?: Maybe<GithubDataRawResultDataViewer>;
};

export type GithubDataRawResultDataFilterInput = {
  viewer?: Maybe<GithubDataRawResultDataViewerFilterInput>;
};

export type GithubDataRawResultDataViewer = {
  __typename?: "GithubDataRawResultDataViewer";
  repositories?: Maybe<GithubDataRawResultDataViewerRepositories>;
};

export type GithubDataRawResultDataViewerFilterInput = {
  repositories?: Maybe<GithubDataRawResultDataViewerRepositoriesFilterInput>;
};

export type GithubDataRawResultDataViewerRepositories = {
  __typename?: "GithubDataRawResultDataViewerRepositories";
  totalCount?: Maybe<Scalars["Int"]>;
  nodes?: Maybe<Array<Maybe<GithubDataRawResultDataViewerRepositoriesNodes>>>;
};

export type GithubDataRawResultDataViewerRepositoriesFilterInput = {
  totalCount?: Maybe<IntQueryOperatorInput>;
  nodes?: Maybe<GithubDataRawResultDataViewerRepositoriesNodesFilterListInput>;
};

export type GithubDataRawResultDataViewerRepositoriesNodes = {
  __typename?: "GithubDataRawResultDataViewerRepositoriesNodes";
  name?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["Date"]>;
  primaryLanguage?: Maybe<GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguage>;
};

export type GithubDataRawResultDataViewerRepositoriesNodesUpdatedAtArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GithubDataRawResultDataViewerRepositoriesNodesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  primaryLanguage?: Maybe<GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguageFilterInput>;
};

export type GithubDataRawResultDataViewerRepositoriesNodesFilterListInput = {
  elemMatch?: Maybe<GithubDataRawResultDataViewerRepositoriesNodesFilterInput>;
};

export type GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguage = {
  __typename?: "GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguage";
  name?: Maybe<Scalars["String"]>;
};

export type GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguageFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type GithubDataRawResultFilterInput = {
  data?: Maybe<GithubDataRawResultDataFilterInput>;
};

export type GithubDataSortInput = {
  fields?: Maybe<Array<Maybe<GithubDataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GoodreadsAuthor = Node & {
  __typename?: "GoodreadsAuthor";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars["String"]>;
  role?: Maybe<Scalars["String"]>;
  image_url?: Maybe<Scalars["String"]>;
  small_image_url?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  average_rating?: Maybe<Scalars["String"]>;
  ratings_count?: Maybe<Scalars["String"]>;
  text_reviews_count?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  books?: Maybe<Array<Maybe<GoodreadsBook>>>;
};

export type GoodreadsAuthorConnection = {
  __typename?: "GoodreadsAuthorConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsAuthorEdge>;
  nodes: Array<GoodreadsAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GoodreadsAuthorGroupConnection>;
};

export type GoodreadsAuthorConnectionDistinctArgs = {
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GoodreadsAuthorFieldsEnum;
};

export type GoodreadsAuthorEdge = {
  __typename?: "GoodreadsAuthorEdge";
  next?: Maybe<GoodreadsAuthor>;
  node: GoodreadsAuthor;
  previous?: Maybe<GoodreadsAuthor>;
};

export enum GoodreadsAuthorFieldsEnum {
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
  Name = "name",
  Role = "role",
  ImageUrl = "image_url",
  SmallImageUrl = "small_image_url",
  Link = "link",
  AverageRating = "average_rating",
  RatingsCount = "ratings_count",
  TextReviewsCount = "text_reviews_count",
  GoodreadsId = "goodreadsId",
  Books = "books",
  BooksId = "books___id",
  BooksParentId = "books___parent___id",
  BooksParentParentId = "books___parent___parent___id",
  BooksParentParentChildren = "books___parent___parent___children",
  BooksParentChildren = "books___parent___children",
  BooksParentChildrenId = "books___parent___children___id",
  BooksParentChildrenChildren = "books___parent___children___children",
  BooksParentInternalContent = "books___parent___internal___content",
  BooksParentInternalContentDigest = "books___parent___internal___contentDigest",
  BooksParentInternalDescription = "books___parent___internal___description",
  BooksParentInternalFieldOwners = "books___parent___internal___fieldOwners",
  BooksParentInternalIgnoreType = "books___parent___internal___ignoreType",
  BooksParentInternalMediaType = "books___parent___internal___mediaType",
  BooksParentInternalOwner = "books___parent___internal___owner",
  BooksParentInternalType = "books___parent___internal___type",
  BooksChildren = "books___children",
  BooksChildrenId = "books___children___id",
  BooksChildrenParentId = "books___children___parent___id",
  BooksChildrenParentChildren = "books___children___parent___children",
  BooksChildrenChildren = "books___children___children",
  BooksChildrenChildrenId = "books___children___children___id",
  BooksChildrenChildrenChildren = "books___children___children___children",
  BooksChildrenInternalContent = "books___children___internal___content",
  BooksChildrenInternalContentDigest = "books___children___internal___contentDigest",
  BooksChildrenInternalDescription = "books___children___internal___description",
  BooksChildrenInternalFieldOwners = "books___children___internal___fieldOwners",
  BooksChildrenInternalIgnoreType = "books___children___internal___ignoreType",
  BooksChildrenInternalMediaType = "books___children___internal___mediaType",
  BooksChildrenInternalOwner = "books___children___internal___owner",
  BooksChildrenInternalType = "books___children___internal___type",
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
  BooksTextReviewsCount = "books___text_reviews_count",
  BooksUri = "books___uri",
  BooksTitle = "books___title",
  BooksTitleWithoutSeries = "books___title_without_series",
  BooksImageUrl = "books___image_url",
  BooksSmallImageUrl = "books___small_image_url",
  BooksLargeImageUrl = "books___large_image_url",
  BooksLink = "books___link",
  BooksNumPages = "books___num_pages",
  BooksFormat = "books___format",
  BooksEditionInformation = "books___edition_information",
  BooksPublisher = "books___publisher",
  BooksPublicationDay = "books___publication_day",
  BooksPublicationYear = "books___publication_year",
  BooksPublicationMonth = "books___publication_month",
  BooksAverageRating = "books___average_rating",
  BooksRatingsCount = "books___ratings_count",
  BooksDescription = "books___description",
  BooksPublished = "books___published",
  BooksWorkId = "books___work___id",
  BooksWorkUri = "books___work___uri",
  BooksGoodreadsId = "books___goodreadsId",
  BooksReviews = "books___reviews",
  BooksReviewsId = "books___reviews___id",
  BooksReviewsParentId = "books___reviews___parent___id",
  BooksReviewsParentChildren = "books___reviews___parent___children",
  BooksReviewsChildren = "books___reviews___children",
  BooksReviewsChildrenId = "books___reviews___children___id",
  BooksReviewsChildrenChildren = "books___reviews___children___children",
  BooksReviewsInternalContent = "books___reviews___internal___content",
  BooksReviewsInternalContentDigest = "books___reviews___internal___contentDigest",
  BooksReviewsInternalDescription = "books___reviews___internal___description",
  BooksReviewsInternalFieldOwners = "books___reviews___internal___fieldOwners",
  BooksReviewsInternalIgnoreType = "books___reviews___internal___ignoreType",
  BooksReviewsInternalMediaType = "books___reviews___internal___mediaType",
  BooksReviewsInternalOwner = "books___reviews___internal___owner",
  BooksReviewsInternalType = "books___reviews___internal___type",
  BooksReviewsRating = "books___reviews___rating",
  BooksReviewsVotes = "books___reviews___votes",
  BooksReviewsSpoilerFlag = "books___reviews___spoiler_flag",
  BooksReviewsSpoilersState = "books___reviews___spoilers_state",
  BooksReviewsRecommendedFor = "books___reviews___recommended_for",
  BooksReviewsRecommendedBy = "books___reviews___recommended_by",
  BooksReviewsStartedAt = "books___reviews___started_at",
  BooksReviewsReadAt = "books___reviews___read_at",
  BooksReviewsDateAdded = "books___reviews___date_added",
  BooksReviewsDateUpdated = "books___reviews___date_updated",
  BooksReviewsReadCount = "books___reviews___read_count",
  BooksReviewsBody = "books___reviews___body",
  BooksReviewsCommentsCount = "books___reviews___comments_count",
  BooksReviewsUrl = "books___reviews___url",
  BooksReviewsLink = "books___reviews___link",
  BooksReviewsOwned = "books___reviews___owned",
  BooksReviewsGoodreadsId = "books___reviews___goodreadsId",
  BooksReviewsBookId = "books___reviews___book___id",
  BooksReviewsBookChildren = "books___reviews___book___children",
  BooksReviewsBookIsbn = "books___reviews___book___isbn",
  BooksReviewsBookIsbn13 = "books___reviews___book___isbn13",
  BooksReviewsBookTextReviewsCount = "books___reviews___book___text_reviews_count",
  BooksReviewsBookUri = "books___reviews___book___uri",
  BooksReviewsBookTitle = "books___reviews___book___title",
  BooksReviewsBookTitleWithoutSeries = "books___reviews___book___title_without_series",
  BooksReviewsBookImageUrl = "books___reviews___book___image_url",
  BooksReviewsBookSmallImageUrl = "books___reviews___book___small_image_url",
  BooksReviewsBookLargeImageUrl = "books___reviews___book___large_image_url",
  BooksReviewsBookLink = "books___reviews___book___link",
  BooksReviewsBookNumPages = "books___reviews___book___num_pages",
  BooksReviewsBookFormat = "books___reviews___book___format",
  BooksReviewsBookEditionInformation = "books___reviews___book___edition_information",
  BooksReviewsBookPublisher = "books___reviews___book___publisher",
  BooksReviewsBookPublicationDay = "books___reviews___book___publication_day",
  BooksReviewsBookPublicationYear = "books___reviews___book___publication_year",
  BooksReviewsBookPublicationMonth = "books___reviews___book___publication_month",
  BooksReviewsBookAverageRating = "books___reviews___book___average_rating",
  BooksReviewsBookRatingsCount = "books___reviews___book___ratings_count",
  BooksReviewsBookDescription = "books___reviews___book___description",
  BooksReviewsBookPublished = "books___reviews___book___published",
  BooksReviewsBookGoodreadsId = "books___reviews___book___goodreadsId",
  BooksReviewsBookReviews = "books___reviews___book___reviews",
  BooksReviewsBookAuthors = "books___reviews___book___authors",
  BooksAuthors = "books___authors",
  BooksAuthorsId = "books___authors___id",
  BooksAuthorsParentId = "books___authors___parent___id",
  BooksAuthorsParentChildren = "books___authors___parent___children",
  BooksAuthorsChildren = "books___authors___children",
  BooksAuthorsChildrenId = "books___authors___children___id",
  BooksAuthorsChildrenChildren = "books___authors___children___children",
  BooksAuthorsInternalContent = "books___authors___internal___content",
  BooksAuthorsInternalContentDigest = "books___authors___internal___contentDigest",
  BooksAuthorsInternalDescription = "books___authors___internal___description",
  BooksAuthorsInternalFieldOwners = "books___authors___internal___fieldOwners",
  BooksAuthorsInternalIgnoreType = "books___authors___internal___ignoreType",
  BooksAuthorsInternalMediaType = "books___authors___internal___mediaType",
  BooksAuthorsInternalOwner = "books___authors___internal___owner",
  BooksAuthorsInternalType = "books___authors___internal___type",
  BooksAuthorsName = "books___authors___name",
  BooksAuthorsRole = "books___authors___role",
  BooksAuthorsImageUrl = "books___authors___image_url",
  BooksAuthorsSmallImageUrl = "books___authors___small_image_url",
  BooksAuthorsLink = "books___authors___link",
  BooksAuthorsAverageRating = "books___authors___average_rating",
  BooksAuthorsRatingsCount = "books___authors___ratings_count",
  BooksAuthorsTextReviewsCount = "books___authors___text_reviews_count",
  BooksAuthorsGoodreadsId = "books___authors___goodreadsId",
  BooksAuthorsBooks = "books___authors___books",
  BooksAuthorsBooksId = "books___authors___books___id",
  BooksAuthorsBooksChildren = "books___authors___books___children",
  BooksAuthorsBooksIsbn = "books___authors___books___isbn",
  BooksAuthorsBooksIsbn13 = "books___authors___books___isbn13",
  BooksAuthorsBooksTextReviewsCount = "books___authors___books___text_reviews_count",
  BooksAuthorsBooksUri = "books___authors___books___uri",
  BooksAuthorsBooksTitle = "books___authors___books___title",
  BooksAuthorsBooksTitleWithoutSeries = "books___authors___books___title_without_series",
  BooksAuthorsBooksImageUrl = "books___authors___books___image_url",
  BooksAuthorsBooksSmallImageUrl = "books___authors___books___small_image_url",
  BooksAuthorsBooksLargeImageUrl = "books___authors___books___large_image_url",
  BooksAuthorsBooksLink = "books___authors___books___link",
  BooksAuthorsBooksNumPages = "books___authors___books___num_pages",
  BooksAuthorsBooksFormat = "books___authors___books___format",
  BooksAuthorsBooksEditionInformation = "books___authors___books___edition_information",
  BooksAuthorsBooksPublisher = "books___authors___books___publisher",
  BooksAuthorsBooksPublicationDay = "books___authors___books___publication_day",
  BooksAuthorsBooksPublicationYear = "books___authors___books___publication_year",
  BooksAuthorsBooksPublicationMonth = "books___authors___books___publication_month",
  BooksAuthorsBooksAverageRating = "books___authors___books___average_rating",
  BooksAuthorsBooksRatingsCount = "books___authors___books___ratings_count",
  BooksAuthorsBooksDescription = "books___authors___books___description",
  BooksAuthorsBooksPublished = "books___authors___books___published",
  BooksAuthorsBooksGoodreadsId = "books___authors___books___goodreadsId",
  BooksAuthorsBooksReviews = "books___authors___books___reviews",
  BooksAuthorsBooksAuthors = "books___authors___books___authors",
}

export type GoodreadsAuthorFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  role?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  small_image_url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  average_rating?: Maybe<StringQueryOperatorInput>;
  ratings_count?: Maybe<StringQueryOperatorInput>;
  text_reviews_count?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  books?: Maybe<GoodreadsBookFilterListInput>;
};

export type GoodreadsAuthorFilterListInput = {
  elemMatch?: Maybe<GoodreadsAuthorFilterInput>;
};

export type GoodreadsAuthorGroupConnection = {
  __typename?: "GoodreadsAuthorGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsAuthorEdge>;
  nodes: Array<GoodreadsAuthor>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GoodreadsAuthorSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GoodreadsBook = Node & {
  __typename?: "GoodreadsBook";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isbn?: Maybe<Scalars["String"]>;
  isbn13?: Maybe<Scalars["String"]>;
  text_reviews_count?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  title_without_series?: Maybe<Scalars["String"]>;
  image_url?: Maybe<Scalars["String"]>;
  small_image_url?: Maybe<Scalars["String"]>;
  large_image_url?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  num_pages?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  edition_information?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Scalars["String"]>;
  publication_day?: Maybe<Scalars["String"]>;
  publication_year?: Maybe<Scalars["Date"]>;
  publication_month?: Maybe<Scalars["String"]>;
  average_rating?: Maybe<Scalars["String"]>;
  ratings_count?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["Date"]>;
  work?: Maybe<GoodreadsBookWork>;
  goodreadsId?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>;
  authors?: Maybe<Array<Maybe<GoodreadsAuthor>>>;
};

export type GoodreadsBookPublication_YearArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GoodreadsBookPublishedArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type GoodreadsBookConnection = {
  __typename?: "GoodreadsBookConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsBookEdge>;
  nodes: Array<GoodreadsBook>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GoodreadsBookGroupConnection>;
};

export type GoodreadsBookConnectionDistinctArgs = {
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GoodreadsBookFieldsEnum;
};

export type GoodreadsBookEdge = {
  __typename?: "GoodreadsBookEdge";
  next?: Maybe<GoodreadsBook>;
  node: GoodreadsBook;
  previous?: Maybe<GoodreadsBook>;
};

export enum GoodreadsBookFieldsEnum {
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
  Isbn = "isbn",
  Isbn13 = "isbn13",
  TextReviewsCount = "text_reviews_count",
  Uri = "uri",
  Title = "title",
  TitleWithoutSeries = "title_without_series",
  ImageUrl = "image_url",
  SmallImageUrl = "small_image_url",
  LargeImageUrl = "large_image_url",
  Link = "link",
  NumPages = "num_pages",
  Format = "format",
  EditionInformation = "edition_information",
  Publisher = "publisher",
  PublicationDay = "publication_day",
  PublicationYear = "publication_year",
  PublicationMonth = "publication_month",
  AverageRating = "average_rating",
  RatingsCount = "ratings_count",
  Description = "description",
  Published = "published",
  WorkId = "work___id",
  WorkUri = "work___uri",
  GoodreadsId = "goodreadsId",
  Reviews = "reviews",
  ReviewsId = "reviews___id",
  ReviewsParentId = "reviews___parent___id",
  ReviewsParentParentId = "reviews___parent___parent___id",
  ReviewsParentParentChildren = "reviews___parent___parent___children",
  ReviewsParentChildren = "reviews___parent___children",
  ReviewsParentChildrenId = "reviews___parent___children___id",
  ReviewsParentChildrenChildren = "reviews___parent___children___children",
  ReviewsParentInternalContent = "reviews___parent___internal___content",
  ReviewsParentInternalContentDigest = "reviews___parent___internal___contentDigest",
  ReviewsParentInternalDescription = "reviews___parent___internal___description",
  ReviewsParentInternalFieldOwners = "reviews___parent___internal___fieldOwners",
  ReviewsParentInternalIgnoreType = "reviews___parent___internal___ignoreType",
  ReviewsParentInternalMediaType = "reviews___parent___internal___mediaType",
  ReviewsParentInternalOwner = "reviews___parent___internal___owner",
  ReviewsParentInternalType = "reviews___parent___internal___type",
  ReviewsChildren = "reviews___children",
  ReviewsChildrenId = "reviews___children___id",
  ReviewsChildrenParentId = "reviews___children___parent___id",
  ReviewsChildrenParentChildren = "reviews___children___parent___children",
  ReviewsChildrenChildren = "reviews___children___children",
  ReviewsChildrenChildrenId = "reviews___children___children___id",
  ReviewsChildrenChildrenChildren = "reviews___children___children___children",
  ReviewsChildrenInternalContent = "reviews___children___internal___content",
  ReviewsChildrenInternalContentDigest = "reviews___children___internal___contentDigest",
  ReviewsChildrenInternalDescription = "reviews___children___internal___description",
  ReviewsChildrenInternalFieldOwners = "reviews___children___internal___fieldOwners",
  ReviewsChildrenInternalIgnoreType = "reviews___children___internal___ignoreType",
  ReviewsChildrenInternalMediaType = "reviews___children___internal___mediaType",
  ReviewsChildrenInternalOwner = "reviews___children___internal___owner",
  ReviewsChildrenInternalType = "reviews___children___internal___type",
  ReviewsInternalContent = "reviews___internal___content",
  ReviewsInternalContentDigest = "reviews___internal___contentDigest",
  ReviewsInternalDescription = "reviews___internal___description",
  ReviewsInternalFieldOwners = "reviews___internal___fieldOwners",
  ReviewsInternalIgnoreType = "reviews___internal___ignoreType",
  ReviewsInternalMediaType = "reviews___internal___mediaType",
  ReviewsInternalOwner = "reviews___internal___owner",
  ReviewsInternalType = "reviews___internal___type",
  ReviewsRating = "reviews___rating",
  ReviewsVotes = "reviews___votes",
  ReviewsSpoilerFlag = "reviews___spoiler_flag",
  ReviewsSpoilersState = "reviews___spoilers_state",
  ReviewsRecommendedFor = "reviews___recommended_for",
  ReviewsRecommendedBy = "reviews___recommended_by",
  ReviewsStartedAt = "reviews___started_at",
  ReviewsReadAt = "reviews___read_at",
  ReviewsDateAdded = "reviews___date_added",
  ReviewsDateUpdated = "reviews___date_updated",
  ReviewsReadCount = "reviews___read_count",
  ReviewsBody = "reviews___body",
  ReviewsCommentsCount = "reviews___comments_count",
  ReviewsUrl = "reviews___url",
  ReviewsLink = "reviews___link",
  ReviewsOwned = "reviews___owned",
  ReviewsGoodreadsId = "reviews___goodreadsId",
  ReviewsBookId = "reviews___book___id",
  ReviewsBookParentId = "reviews___book___parent___id",
  ReviewsBookParentChildren = "reviews___book___parent___children",
  ReviewsBookChildren = "reviews___book___children",
  ReviewsBookChildrenId = "reviews___book___children___id",
  ReviewsBookChildrenChildren = "reviews___book___children___children",
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
  ReviewsBookTextReviewsCount = "reviews___book___text_reviews_count",
  ReviewsBookUri = "reviews___book___uri",
  ReviewsBookTitle = "reviews___book___title",
  ReviewsBookTitleWithoutSeries = "reviews___book___title_without_series",
  ReviewsBookImageUrl = "reviews___book___image_url",
  ReviewsBookSmallImageUrl = "reviews___book___small_image_url",
  ReviewsBookLargeImageUrl = "reviews___book___large_image_url",
  ReviewsBookLink = "reviews___book___link",
  ReviewsBookNumPages = "reviews___book___num_pages",
  ReviewsBookFormat = "reviews___book___format",
  ReviewsBookEditionInformation = "reviews___book___edition_information",
  ReviewsBookPublisher = "reviews___book___publisher",
  ReviewsBookPublicationDay = "reviews___book___publication_day",
  ReviewsBookPublicationYear = "reviews___book___publication_year",
  ReviewsBookPublicationMonth = "reviews___book___publication_month",
  ReviewsBookAverageRating = "reviews___book___average_rating",
  ReviewsBookRatingsCount = "reviews___book___ratings_count",
  ReviewsBookDescription = "reviews___book___description",
  ReviewsBookPublished = "reviews___book___published",
  ReviewsBookWorkId = "reviews___book___work___id",
  ReviewsBookWorkUri = "reviews___book___work___uri",
  ReviewsBookGoodreadsId = "reviews___book___goodreadsId",
  ReviewsBookReviews = "reviews___book___reviews",
  ReviewsBookReviewsId = "reviews___book___reviews___id",
  ReviewsBookReviewsChildren = "reviews___book___reviews___children",
  ReviewsBookReviewsRating = "reviews___book___reviews___rating",
  ReviewsBookReviewsVotes = "reviews___book___reviews___votes",
  ReviewsBookReviewsSpoilerFlag = "reviews___book___reviews___spoiler_flag",
  ReviewsBookReviewsSpoilersState = "reviews___book___reviews___spoilers_state",
  ReviewsBookReviewsRecommendedFor = "reviews___book___reviews___recommended_for",
  ReviewsBookReviewsRecommendedBy = "reviews___book___reviews___recommended_by",
  ReviewsBookReviewsStartedAt = "reviews___book___reviews___started_at",
  ReviewsBookReviewsReadAt = "reviews___book___reviews___read_at",
  ReviewsBookReviewsDateAdded = "reviews___book___reviews___date_added",
  ReviewsBookReviewsDateUpdated = "reviews___book___reviews___date_updated",
  ReviewsBookReviewsReadCount = "reviews___book___reviews___read_count",
  ReviewsBookReviewsBody = "reviews___book___reviews___body",
  ReviewsBookReviewsCommentsCount = "reviews___book___reviews___comments_count",
  ReviewsBookReviewsUrl = "reviews___book___reviews___url",
  ReviewsBookReviewsLink = "reviews___book___reviews___link",
  ReviewsBookReviewsOwned = "reviews___book___reviews___owned",
  ReviewsBookReviewsGoodreadsId = "reviews___book___reviews___goodreadsId",
  ReviewsBookAuthors = "reviews___book___authors",
  ReviewsBookAuthorsId = "reviews___book___authors___id",
  ReviewsBookAuthorsChildren = "reviews___book___authors___children",
  ReviewsBookAuthorsName = "reviews___book___authors___name",
  ReviewsBookAuthorsRole = "reviews___book___authors___role",
  ReviewsBookAuthorsImageUrl = "reviews___book___authors___image_url",
  ReviewsBookAuthorsSmallImageUrl = "reviews___book___authors___small_image_url",
  ReviewsBookAuthorsLink = "reviews___book___authors___link",
  ReviewsBookAuthorsAverageRating = "reviews___book___authors___average_rating",
  ReviewsBookAuthorsRatingsCount = "reviews___book___authors___ratings_count",
  ReviewsBookAuthorsTextReviewsCount = "reviews___book___authors___text_reviews_count",
  ReviewsBookAuthorsGoodreadsId = "reviews___book___authors___goodreadsId",
  ReviewsBookAuthorsBooks = "reviews___book___authors___books",
  Authors = "authors",
  AuthorsId = "authors___id",
  AuthorsParentId = "authors___parent___id",
  AuthorsParentParentId = "authors___parent___parent___id",
  AuthorsParentParentChildren = "authors___parent___parent___children",
  AuthorsParentChildren = "authors___parent___children",
  AuthorsParentChildrenId = "authors___parent___children___id",
  AuthorsParentChildrenChildren = "authors___parent___children___children",
  AuthorsParentInternalContent = "authors___parent___internal___content",
  AuthorsParentInternalContentDigest = "authors___parent___internal___contentDigest",
  AuthorsParentInternalDescription = "authors___parent___internal___description",
  AuthorsParentInternalFieldOwners = "authors___parent___internal___fieldOwners",
  AuthorsParentInternalIgnoreType = "authors___parent___internal___ignoreType",
  AuthorsParentInternalMediaType = "authors___parent___internal___mediaType",
  AuthorsParentInternalOwner = "authors___parent___internal___owner",
  AuthorsParentInternalType = "authors___parent___internal___type",
  AuthorsChildren = "authors___children",
  AuthorsChildrenId = "authors___children___id",
  AuthorsChildrenParentId = "authors___children___parent___id",
  AuthorsChildrenParentChildren = "authors___children___parent___children",
  AuthorsChildrenChildren = "authors___children___children",
  AuthorsChildrenChildrenId = "authors___children___children___id",
  AuthorsChildrenChildrenChildren = "authors___children___children___children",
  AuthorsChildrenInternalContent = "authors___children___internal___content",
  AuthorsChildrenInternalContentDigest = "authors___children___internal___contentDigest",
  AuthorsChildrenInternalDescription = "authors___children___internal___description",
  AuthorsChildrenInternalFieldOwners = "authors___children___internal___fieldOwners",
  AuthorsChildrenInternalIgnoreType = "authors___children___internal___ignoreType",
  AuthorsChildrenInternalMediaType = "authors___children___internal___mediaType",
  AuthorsChildrenInternalOwner = "authors___children___internal___owner",
  AuthorsChildrenInternalType = "authors___children___internal___type",
  AuthorsInternalContent = "authors___internal___content",
  AuthorsInternalContentDigest = "authors___internal___contentDigest",
  AuthorsInternalDescription = "authors___internal___description",
  AuthorsInternalFieldOwners = "authors___internal___fieldOwners",
  AuthorsInternalIgnoreType = "authors___internal___ignoreType",
  AuthorsInternalMediaType = "authors___internal___mediaType",
  AuthorsInternalOwner = "authors___internal___owner",
  AuthorsInternalType = "authors___internal___type",
  AuthorsName = "authors___name",
  AuthorsRole = "authors___role",
  AuthorsImageUrl = "authors___image_url",
  AuthorsSmallImageUrl = "authors___small_image_url",
  AuthorsLink = "authors___link",
  AuthorsAverageRating = "authors___average_rating",
  AuthorsRatingsCount = "authors___ratings_count",
  AuthorsTextReviewsCount = "authors___text_reviews_count",
  AuthorsGoodreadsId = "authors___goodreadsId",
  AuthorsBooks = "authors___books",
  AuthorsBooksId = "authors___books___id",
  AuthorsBooksParentId = "authors___books___parent___id",
  AuthorsBooksParentChildren = "authors___books___parent___children",
  AuthorsBooksChildren = "authors___books___children",
  AuthorsBooksChildrenId = "authors___books___children___id",
  AuthorsBooksChildrenChildren = "authors___books___children___children",
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
  AuthorsBooksTextReviewsCount = "authors___books___text_reviews_count",
  AuthorsBooksUri = "authors___books___uri",
  AuthorsBooksTitle = "authors___books___title",
  AuthorsBooksTitleWithoutSeries = "authors___books___title_without_series",
  AuthorsBooksImageUrl = "authors___books___image_url",
  AuthorsBooksSmallImageUrl = "authors___books___small_image_url",
  AuthorsBooksLargeImageUrl = "authors___books___large_image_url",
  AuthorsBooksLink = "authors___books___link",
  AuthorsBooksNumPages = "authors___books___num_pages",
  AuthorsBooksFormat = "authors___books___format",
  AuthorsBooksEditionInformation = "authors___books___edition_information",
  AuthorsBooksPublisher = "authors___books___publisher",
  AuthorsBooksPublicationDay = "authors___books___publication_day",
  AuthorsBooksPublicationYear = "authors___books___publication_year",
  AuthorsBooksPublicationMonth = "authors___books___publication_month",
  AuthorsBooksAverageRating = "authors___books___average_rating",
  AuthorsBooksRatingsCount = "authors___books___ratings_count",
  AuthorsBooksDescription = "authors___books___description",
  AuthorsBooksPublished = "authors___books___published",
  AuthorsBooksWorkId = "authors___books___work___id",
  AuthorsBooksWorkUri = "authors___books___work___uri",
  AuthorsBooksGoodreadsId = "authors___books___goodreadsId",
  AuthorsBooksReviews = "authors___books___reviews",
  AuthorsBooksReviewsId = "authors___books___reviews___id",
  AuthorsBooksReviewsChildren = "authors___books___reviews___children",
  AuthorsBooksReviewsRating = "authors___books___reviews___rating",
  AuthorsBooksReviewsVotes = "authors___books___reviews___votes",
  AuthorsBooksReviewsSpoilerFlag = "authors___books___reviews___spoiler_flag",
  AuthorsBooksReviewsSpoilersState = "authors___books___reviews___spoilers_state",
  AuthorsBooksReviewsRecommendedFor = "authors___books___reviews___recommended_for",
  AuthorsBooksReviewsRecommendedBy = "authors___books___reviews___recommended_by",
  AuthorsBooksReviewsStartedAt = "authors___books___reviews___started_at",
  AuthorsBooksReviewsReadAt = "authors___books___reviews___read_at",
  AuthorsBooksReviewsDateAdded = "authors___books___reviews___date_added",
  AuthorsBooksReviewsDateUpdated = "authors___books___reviews___date_updated",
  AuthorsBooksReviewsReadCount = "authors___books___reviews___read_count",
  AuthorsBooksReviewsBody = "authors___books___reviews___body",
  AuthorsBooksReviewsCommentsCount = "authors___books___reviews___comments_count",
  AuthorsBooksReviewsUrl = "authors___books___reviews___url",
  AuthorsBooksReviewsLink = "authors___books___reviews___link",
  AuthorsBooksReviewsOwned = "authors___books___reviews___owned",
  AuthorsBooksReviewsGoodreadsId = "authors___books___reviews___goodreadsId",
  AuthorsBooksAuthors = "authors___books___authors",
  AuthorsBooksAuthorsId = "authors___books___authors___id",
  AuthorsBooksAuthorsChildren = "authors___books___authors___children",
  AuthorsBooksAuthorsName = "authors___books___authors___name",
  AuthorsBooksAuthorsRole = "authors___books___authors___role",
  AuthorsBooksAuthorsImageUrl = "authors___books___authors___image_url",
  AuthorsBooksAuthorsSmallImageUrl = "authors___books___authors___small_image_url",
  AuthorsBooksAuthorsLink = "authors___books___authors___link",
  AuthorsBooksAuthorsAverageRating = "authors___books___authors___average_rating",
  AuthorsBooksAuthorsRatingsCount = "authors___books___authors___ratings_count",
  AuthorsBooksAuthorsTextReviewsCount = "authors___books___authors___text_reviews_count",
  AuthorsBooksAuthorsGoodreadsId = "authors___books___authors___goodreadsId",
  AuthorsBooksAuthorsBooks = "authors___books___authors___books",
}

export type GoodreadsBookFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isbn?: Maybe<StringQueryOperatorInput>;
  isbn13?: Maybe<StringQueryOperatorInput>;
  text_reviews_count?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_without_series?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  small_image_url?: Maybe<StringQueryOperatorInput>;
  large_image_url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  num_pages?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  edition_information?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<StringQueryOperatorInput>;
  publication_day?: Maybe<StringQueryOperatorInput>;
  publication_year?: Maybe<DateQueryOperatorInput>;
  publication_month?: Maybe<StringQueryOperatorInput>;
  average_rating?: Maybe<StringQueryOperatorInput>;
  ratings_count?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  work?: Maybe<GoodreadsBookWorkFilterInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  reviews?: Maybe<GoodreadsReviewFilterListInput>;
  authors?: Maybe<GoodreadsAuthorFilterListInput>;
};

export type GoodreadsBookFilterListInput = {
  elemMatch?: Maybe<GoodreadsBookFilterInput>;
};

export type GoodreadsBookGroupConnection = {
  __typename?: "GoodreadsBookGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsBookEdge>;
  nodes: Array<GoodreadsBook>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GoodreadsBookSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsBookFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GoodreadsBookWork = {
  __typename?: "GoodreadsBookWork";
  id?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
};

export type GoodreadsBookWorkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type GoodreadsReview = Node & {
  __typename?: "GoodreadsReview";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  rating?: Maybe<Scalars["String"]>;
  votes?: Maybe<Scalars["String"]>;
  spoiler_flag?: Maybe<Scalars["String"]>;
  spoilers_state?: Maybe<Scalars["String"]>;
  recommended_for?: Maybe<Scalars["String"]>;
  recommended_by?: Maybe<Scalars["String"]>;
  started_at?: Maybe<Scalars["String"]>;
  read_at?: Maybe<Scalars["String"]>;
  date_added?: Maybe<Scalars["String"]>;
  date_updated?: Maybe<Scalars["String"]>;
  read_count?: Maybe<Scalars["String"]>;
  body?: Maybe<Scalars["String"]>;
  comments_count?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  link?: Maybe<Scalars["String"]>;
  owned?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  book?: Maybe<GoodreadsBook>;
};

export type GoodreadsReviewConnection = {
  __typename?: "GoodreadsReviewConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsReviewEdge>;
  nodes: Array<GoodreadsReview>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GoodreadsReviewGroupConnection>;
};

export type GoodreadsReviewConnectionDistinctArgs = {
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GoodreadsReviewFieldsEnum;
};

export type GoodreadsReviewEdge = {
  __typename?: "GoodreadsReviewEdge";
  next?: Maybe<GoodreadsReview>;
  node: GoodreadsReview;
  previous?: Maybe<GoodreadsReview>;
};

export enum GoodreadsReviewFieldsEnum {
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
  Rating = "rating",
  Votes = "votes",
  SpoilerFlag = "spoiler_flag",
  SpoilersState = "spoilers_state",
  RecommendedFor = "recommended_for",
  RecommendedBy = "recommended_by",
  StartedAt = "started_at",
  ReadAt = "read_at",
  DateAdded = "date_added",
  DateUpdated = "date_updated",
  ReadCount = "read_count",
  Body = "body",
  CommentsCount = "comments_count",
  Url = "url",
  Link = "link",
  Owned = "owned",
  GoodreadsId = "goodreadsId",
  BookId = "book___id",
  BookParentId = "book___parent___id",
  BookParentParentId = "book___parent___parent___id",
  BookParentParentChildren = "book___parent___parent___children",
  BookParentChildren = "book___parent___children",
  BookParentChildrenId = "book___parent___children___id",
  BookParentChildrenChildren = "book___parent___children___children",
  BookParentInternalContent = "book___parent___internal___content",
  BookParentInternalContentDigest = "book___parent___internal___contentDigest",
  BookParentInternalDescription = "book___parent___internal___description",
  BookParentInternalFieldOwners = "book___parent___internal___fieldOwners",
  BookParentInternalIgnoreType = "book___parent___internal___ignoreType",
  BookParentInternalMediaType = "book___parent___internal___mediaType",
  BookParentInternalOwner = "book___parent___internal___owner",
  BookParentInternalType = "book___parent___internal___type",
  BookChildren = "book___children",
  BookChildrenId = "book___children___id",
  BookChildrenParentId = "book___children___parent___id",
  BookChildrenParentChildren = "book___children___parent___children",
  BookChildrenChildren = "book___children___children",
  BookChildrenChildrenId = "book___children___children___id",
  BookChildrenChildrenChildren = "book___children___children___children",
  BookChildrenInternalContent = "book___children___internal___content",
  BookChildrenInternalContentDigest = "book___children___internal___contentDigest",
  BookChildrenInternalDescription = "book___children___internal___description",
  BookChildrenInternalFieldOwners = "book___children___internal___fieldOwners",
  BookChildrenInternalIgnoreType = "book___children___internal___ignoreType",
  BookChildrenInternalMediaType = "book___children___internal___mediaType",
  BookChildrenInternalOwner = "book___children___internal___owner",
  BookChildrenInternalType = "book___children___internal___type",
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
  BookTextReviewsCount = "book___text_reviews_count",
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
  BookPublished = "book___published",
  BookWorkId = "book___work___id",
  BookWorkUri = "book___work___uri",
  BookGoodreadsId = "book___goodreadsId",
  BookReviews = "book___reviews",
  BookReviewsId = "book___reviews___id",
  BookReviewsParentId = "book___reviews___parent___id",
  BookReviewsParentChildren = "book___reviews___parent___children",
  BookReviewsChildren = "book___reviews___children",
  BookReviewsChildrenId = "book___reviews___children___id",
  BookReviewsChildrenChildren = "book___reviews___children___children",
  BookReviewsInternalContent = "book___reviews___internal___content",
  BookReviewsInternalContentDigest = "book___reviews___internal___contentDigest",
  BookReviewsInternalDescription = "book___reviews___internal___description",
  BookReviewsInternalFieldOwners = "book___reviews___internal___fieldOwners",
  BookReviewsInternalIgnoreType = "book___reviews___internal___ignoreType",
  BookReviewsInternalMediaType = "book___reviews___internal___mediaType",
  BookReviewsInternalOwner = "book___reviews___internal___owner",
  BookReviewsInternalType = "book___reviews___internal___type",
  BookReviewsRating = "book___reviews___rating",
  BookReviewsVotes = "book___reviews___votes",
  BookReviewsSpoilerFlag = "book___reviews___spoiler_flag",
  BookReviewsSpoilersState = "book___reviews___spoilers_state",
  BookReviewsRecommendedFor = "book___reviews___recommended_for",
  BookReviewsRecommendedBy = "book___reviews___recommended_by",
  BookReviewsStartedAt = "book___reviews___started_at",
  BookReviewsReadAt = "book___reviews___read_at",
  BookReviewsDateAdded = "book___reviews___date_added",
  BookReviewsDateUpdated = "book___reviews___date_updated",
  BookReviewsReadCount = "book___reviews___read_count",
  BookReviewsBody = "book___reviews___body",
  BookReviewsCommentsCount = "book___reviews___comments_count",
  BookReviewsUrl = "book___reviews___url",
  BookReviewsLink = "book___reviews___link",
  BookReviewsOwned = "book___reviews___owned",
  BookReviewsGoodreadsId = "book___reviews___goodreadsId",
  BookReviewsBookId = "book___reviews___book___id",
  BookReviewsBookChildren = "book___reviews___book___children",
  BookReviewsBookIsbn = "book___reviews___book___isbn",
  BookReviewsBookIsbn13 = "book___reviews___book___isbn13",
  BookReviewsBookTextReviewsCount = "book___reviews___book___text_reviews_count",
  BookReviewsBookUri = "book___reviews___book___uri",
  BookReviewsBookTitle = "book___reviews___book___title",
  BookReviewsBookTitleWithoutSeries = "book___reviews___book___title_without_series",
  BookReviewsBookImageUrl = "book___reviews___book___image_url",
  BookReviewsBookSmallImageUrl = "book___reviews___book___small_image_url",
  BookReviewsBookLargeImageUrl = "book___reviews___book___large_image_url",
  BookReviewsBookLink = "book___reviews___book___link",
  BookReviewsBookNumPages = "book___reviews___book___num_pages",
  BookReviewsBookFormat = "book___reviews___book___format",
  BookReviewsBookEditionInformation = "book___reviews___book___edition_information",
  BookReviewsBookPublisher = "book___reviews___book___publisher",
  BookReviewsBookPublicationDay = "book___reviews___book___publication_day",
  BookReviewsBookPublicationYear = "book___reviews___book___publication_year",
  BookReviewsBookPublicationMonth = "book___reviews___book___publication_month",
  BookReviewsBookAverageRating = "book___reviews___book___average_rating",
  BookReviewsBookRatingsCount = "book___reviews___book___ratings_count",
  BookReviewsBookDescription = "book___reviews___book___description",
  BookReviewsBookPublished = "book___reviews___book___published",
  BookReviewsBookGoodreadsId = "book___reviews___book___goodreadsId",
  BookReviewsBookReviews = "book___reviews___book___reviews",
  BookReviewsBookAuthors = "book___reviews___book___authors",
  BookAuthors = "book___authors",
  BookAuthorsId = "book___authors___id",
  BookAuthorsParentId = "book___authors___parent___id",
  BookAuthorsParentChildren = "book___authors___parent___children",
  BookAuthorsChildren = "book___authors___children",
  BookAuthorsChildrenId = "book___authors___children___id",
  BookAuthorsChildrenChildren = "book___authors___children___children",
  BookAuthorsInternalContent = "book___authors___internal___content",
  BookAuthorsInternalContentDigest = "book___authors___internal___contentDigest",
  BookAuthorsInternalDescription = "book___authors___internal___description",
  BookAuthorsInternalFieldOwners = "book___authors___internal___fieldOwners",
  BookAuthorsInternalIgnoreType = "book___authors___internal___ignoreType",
  BookAuthorsInternalMediaType = "book___authors___internal___mediaType",
  BookAuthorsInternalOwner = "book___authors___internal___owner",
  BookAuthorsInternalType = "book___authors___internal___type",
  BookAuthorsName = "book___authors___name",
  BookAuthorsRole = "book___authors___role",
  BookAuthorsImageUrl = "book___authors___image_url",
  BookAuthorsSmallImageUrl = "book___authors___small_image_url",
  BookAuthorsLink = "book___authors___link",
  BookAuthorsAverageRating = "book___authors___average_rating",
  BookAuthorsRatingsCount = "book___authors___ratings_count",
  BookAuthorsTextReviewsCount = "book___authors___text_reviews_count",
  BookAuthorsGoodreadsId = "book___authors___goodreadsId",
  BookAuthorsBooks = "book___authors___books",
  BookAuthorsBooksId = "book___authors___books___id",
  BookAuthorsBooksChildren = "book___authors___books___children",
  BookAuthorsBooksIsbn = "book___authors___books___isbn",
  BookAuthorsBooksIsbn13 = "book___authors___books___isbn13",
  BookAuthorsBooksTextReviewsCount = "book___authors___books___text_reviews_count",
  BookAuthorsBooksUri = "book___authors___books___uri",
  BookAuthorsBooksTitle = "book___authors___books___title",
  BookAuthorsBooksTitleWithoutSeries = "book___authors___books___title_without_series",
  BookAuthorsBooksImageUrl = "book___authors___books___image_url",
  BookAuthorsBooksSmallImageUrl = "book___authors___books___small_image_url",
  BookAuthorsBooksLargeImageUrl = "book___authors___books___large_image_url",
  BookAuthorsBooksLink = "book___authors___books___link",
  BookAuthorsBooksNumPages = "book___authors___books___num_pages",
  BookAuthorsBooksFormat = "book___authors___books___format",
  BookAuthorsBooksEditionInformation = "book___authors___books___edition_information",
  BookAuthorsBooksPublisher = "book___authors___books___publisher",
  BookAuthorsBooksPublicationDay = "book___authors___books___publication_day",
  BookAuthorsBooksPublicationYear = "book___authors___books___publication_year",
  BookAuthorsBooksPublicationMonth = "book___authors___books___publication_month",
  BookAuthorsBooksAverageRating = "book___authors___books___average_rating",
  BookAuthorsBooksRatingsCount = "book___authors___books___ratings_count",
  BookAuthorsBooksDescription = "book___authors___books___description",
  BookAuthorsBooksPublished = "book___authors___books___published",
  BookAuthorsBooksGoodreadsId = "book___authors___books___goodreadsId",
  BookAuthorsBooksReviews = "book___authors___books___reviews",
  BookAuthorsBooksAuthors = "book___authors___books___authors",
}

export type GoodreadsReviewFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  votes?: Maybe<StringQueryOperatorInput>;
  spoiler_flag?: Maybe<StringQueryOperatorInput>;
  spoilers_state?: Maybe<StringQueryOperatorInput>;
  recommended_for?: Maybe<StringQueryOperatorInput>;
  recommended_by?: Maybe<StringQueryOperatorInput>;
  started_at?: Maybe<StringQueryOperatorInput>;
  read_at?: Maybe<StringQueryOperatorInput>;
  date_added?: Maybe<StringQueryOperatorInput>;
  date_updated?: Maybe<StringQueryOperatorInput>;
  read_count?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  comments_count?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  owned?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  book?: Maybe<GoodreadsBookFilterInput>;
};

export type GoodreadsReviewFilterListInput = {
  elemMatch?: Maybe<GoodreadsReviewFilterInput>;
};

export type GoodreadsReviewGroupConnection = {
  __typename?: "GoodreadsReviewGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsReviewEdge>;
  nodes: Array<GoodreadsReview>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GoodreadsReviewSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsReviewFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GoodreadsShelf = Node & {
  __typename?: "GoodreadsShelf";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  exclusive?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  review_shelf_id?: Maybe<Scalars["String"]>;
  sortable?: Maybe<Scalars["String"]>;
  goodreadsId?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Array<Maybe<GoodreadsReview>>>;
};

export type GoodreadsShelfConnection = {
  __typename?: "GoodreadsShelfConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsShelfEdge>;
  nodes: Array<GoodreadsShelf>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<GoodreadsShelfGroupConnection>;
};

export type GoodreadsShelfConnectionDistinctArgs = {
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: GoodreadsShelfFieldsEnum;
};

export type GoodreadsShelfEdge = {
  __typename?: "GoodreadsShelfEdge";
  next?: Maybe<GoodreadsShelf>;
  node: GoodreadsShelf;
  previous?: Maybe<GoodreadsShelf>;
};

export enum GoodreadsShelfFieldsEnum {
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
  Exclusive = "exclusive",
  Name = "name",
  ReviewShelfId = "review_shelf_id",
  Sortable = "sortable",
  GoodreadsId = "goodreadsId",
  Reviews = "reviews",
  ReviewsId = "reviews___id",
  ReviewsParentId = "reviews___parent___id",
  ReviewsParentParentId = "reviews___parent___parent___id",
  ReviewsParentParentChildren = "reviews___parent___parent___children",
  ReviewsParentChildren = "reviews___parent___children",
  ReviewsParentChildrenId = "reviews___parent___children___id",
  ReviewsParentChildrenChildren = "reviews___parent___children___children",
  ReviewsParentInternalContent = "reviews___parent___internal___content",
  ReviewsParentInternalContentDigest = "reviews___parent___internal___contentDigest",
  ReviewsParentInternalDescription = "reviews___parent___internal___description",
  ReviewsParentInternalFieldOwners = "reviews___parent___internal___fieldOwners",
  ReviewsParentInternalIgnoreType = "reviews___parent___internal___ignoreType",
  ReviewsParentInternalMediaType = "reviews___parent___internal___mediaType",
  ReviewsParentInternalOwner = "reviews___parent___internal___owner",
  ReviewsParentInternalType = "reviews___parent___internal___type",
  ReviewsChildren = "reviews___children",
  ReviewsChildrenId = "reviews___children___id",
  ReviewsChildrenParentId = "reviews___children___parent___id",
  ReviewsChildrenParentChildren = "reviews___children___parent___children",
  ReviewsChildrenChildren = "reviews___children___children",
  ReviewsChildrenChildrenId = "reviews___children___children___id",
  ReviewsChildrenChildrenChildren = "reviews___children___children___children",
  ReviewsChildrenInternalContent = "reviews___children___internal___content",
  ReviewsChildrenInternalContentDigest = "reviews___children___internal___contentDigest",
  ReviewsChildrenInternalDescription = "reviews___children___internal___description",
  ReviewsChildrenInternalFieldOwners = "reviews___children___internal___fieldOwners",
  ReviewsChildrenInternalIgnoreType = "reviews___children___internal___ignoreType",
  ReviewsChildrenInternalMediaType = "reviews___children___internal___mediaType",
  ReviewsChildrenInternalOwner = "reviews___children___internal___owner",
  ReviewsChildrenInternalType = "reviews___children___internal___type",
  ReviewsInternalContent = "reviews___internal___content",
  ReviewsInternalContentDigest = "reviews___internal___contentDigest",
  ReviewsInternalDescription = "reviews___internal___description",
  ReviewsInternalFieldOwners = "reviews___internal___fieldOwners",
  ReviewsInternalIgnoreType = "reviews___internal___ignoreType",
  ReviewsInternalMediaType = "reviews___internal___mediaType",
  ReviewsInternalOwner = "reviews___internal___owner",
  ReviewsInternalType = "reviews___internal___type",
  ReviewsRating = "reviews___rating",
  ReviewsVotes = "reviews___votes",
  ReviewsSpoilerFlag = "reviews___spoiler_flag",
  ReviewsSpoilersState = "reviews___spoilers_state",
  ReviewsRecommendedFor = "reviews___recommended_for",
  ReviewsRecommendedBy = "reviews___recommended_by",
  ReviewsStartedAt = "reviews___started_at",
  ReviewsReadAt = "reviews___read_at",
  ReviewsDateAdded = "reviews___date_added",
  ReviewsDateUpdated = "reviews___date_updated",
  ReviewsReadCount = "reviews___read_count",
  ReviewsBody = "reviews___body",
  ReviewsCommentsCount = "reviews___comments_count",
  ReviewsUrl = "reviews___url",
  ReviewsLink = "reviews___link",
  ReviewsOwned = "reviews___owned",
  ReviewsGoodreadsId = "reviews___goodreadsId",
  ReviewsBookId = "reviews___book___id",
  ReviewsBookParentId = "reviews___book___parent___id",
  ReviewsBookParentChildren = "reviews___book___parent___children",
  ReviewsBookChildren = "reviews___book___children",
  ReviewsBookChildrenId = "reviews___book___children___id",
  ReviewsBookChildrenChildren = "reviews___book___children___children",
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
  ReviewsBookTextReviewsCount = "reviews___book___text_reviews_count",
  ReviewsBookUri = "reviews___book___uri",
  ReviewsBookTitle = "reviews___book___title",
  ReviewsBookTitleWithoutSeries = "reviews___book___title_without_series",
  ReviewsBookImageUrl = "reviews___book___image_url",
  ReviewsBookSmallImageUrl = "reviews___book___small_image_url",
  ReviewsBookLargeImageUrl = "reviews___book___large_image_url",
  ReviewsBookLink = "reviews___book___link",
  ReviewsBookNumPages = "reviews___book___num_pages",
  ReviewsBookFormat = "reviews___book___format",
  ReviewsBookEditionInformation = "reviews___book___edition_information",
  ReviewsBookPublisher = "reviews___book___publisher",
  ReviewsBookPublicationDay = "reviews___book___publication_day",
  ReviewsBookPublicationYear = "reviews___book___publication_year",
  ReviewsBookPublicationMonth = "reviews___book___publication_month",
  ReviewsBookAverageRating = "reviews___book___average_rating",
  ReviewsBookRatingsCount = "reviews___book___ratings_count",
  ReviewsBookDescription = "reviews___book___description",
  ReviewsBookPublished = "reviews___book___published",
  ReviewsBookWorkId = "reviews___book___work___id",
  ReviewsBookWorkUri = "reviews___book___work___uri",
  ReviewsBookGoodreadsId = "reviews___book___goodreadsId",
  ReviewsBookReviews = "reviews___book___reviews",
  ReviewsBookReviewsId = "reviews___book___reviews___id",
  ReviewsBookReviewsChildren = "reviews___book___reviews___children",
  ReviewsBookReviewsRating = "reviews___book___reviews___rating",
  ReviewsBookReviewsVotes = "reviews___book___reviews___votes",
  ReviewsBookReviewsSpoilerFlag = "reviews___book___reviews___spoiler_flag",
  ReviewsBookReviewsSpoilersState = "reviews___book___reviews___spoilers_state",
  ReviewsBookReviewsRecommendedFor = "reviews___book___reviews___recommended_for",
  ReviewsBookReviewsRecommendedBy = "reviews___book___reviews___recommended_by",
  ReviewsBookReviewsStartedAt = "reviews___book___reviews___started_at",
  ReviewsBookReviewsReadAt = "reviews___book___reviews___read_at",
  ReviewsBookReviewsDateAdded = "reviews___book___reviews___date_added",
  ReviewsBookReviewsDateUpdated = "reviews___book___reviews___date_updated",
  ReviewsBookReviewsReadCount = "reviews___book___reviews___read_count",
  ReviewsBookReviewsBody = "reviews___book___reviews___body",
  ReviewsBookReviewsCommentsCount = "reviews___book___reviews___comments_count",
  ReviewsBookReviewsUrl = "reviews___book___reviews___url",
  ReviewsBookReviewsLink = "reviews___book___reviews___link",
  ReviewsBookReviewsOwned = "reviews___book___reviews___owned",
  ReviewsBookReviewsGoodreadsId = "reviews___book___reviews___goodreadsId",
  ReviewsBookAuthors = "reviews___book___authors",
  ReviewsBookAuthorsId = "reviews___book___authors___id",
  ReviewsBookAuthorsChildren = "reviews___book___authors___children",
  ReviewsBookAuthorsName = "reviews___book___authors___name",
  ReviewsBookAuthorsRole = "reviews___book___authors___role",
  ReviewsBookAuthorsImageUrl = "reviews___book___authors___image_url",
  ReviewsBookAuthorsSmallImageUrl = "reviews___book___authors___small_image_url",
  ReviewsBookAuthorsLink = "reviews___book___authors___link",
  ReviewsBookAuthorsAverageRating = "reviews___book___authors___average_rating",
  ReviewsBookAuthorsRatingsCount = "reviews___book___authors___ratings_count",
  ReviewsBookAuthorsTextReviewsCount = "reviews___book___authors___text_reviews_count",
  ReviewsBookAuthorsGoodreadsId = "reviews___book___authors___goodreadsId",
  ReviewsBookAuthorsBooks = "reviews___book___authors___books",
}

export type GoodreadsShelfFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  exclusive?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  review_shelf_id?: Maybe<StringQueryOperatorInput>;
  sortable?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  reviews?: Maybe<GoodreadsReviewFilterListInput>;
};

export type GoodreadsShelfGroupConnection = {
  __typename?: "GoodreadsShelfGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<GoodreadsShelfEdge>;
  nodes: Array<GoodreadsShelf>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type GoodreadsShelfSortInput = {
  fields?: Maybe<Array<Maybe<GoodreadsShelfFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  Attention = "ATTENTION",
}

export enum ImageFit {
  Cover = "COVER",
  Contain = "CONTAIN",
  Fill = "FILL",
  Inside = "INSIDE",
  Outside = "OUTSIDE",
}

export enum ImageFormat {
  NoChange = "NO_CHANGE",
  Auto = "AUTO",
  Jpg = "JPG",
  Png = "PNG",
  Webp = "WEBP",
  Avif = "AVIF",
}

export enum ImageLayout {
  Fixed = "FIXED",
  FullWidth = "FULL_WIDTH",
  Constrained = "CONSTRAINED",
}

export enum ImagePlaceholder {
  DominantColor = "DOMINANT_COLOR",
  TracedSvg = "TRACED_SVG",
  Blurred = "BLURRED",
  None = "NONE",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp";
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars["JSON"];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars["Int"]>;
  maxHeight?: Maybe<Scalars["Int"]>;
  base64Width?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  sizes?: Maybe<Scalars["String"]>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  sizes?: Maybe<Scalars["String"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  quality?: Maybe<Scalars["Int"]>;
  jpegQuality?: Maybe<Scalars["Int"]>;
  pngQuality?: Maybe<Scalars["Int"]>;
  webpQuality?: Maybe<Scalars["Int"]>;
  jpegProgressive?: Maybe<Scalars["Boolean"]>;
  pngCompressionLevel?: Maybe<Scalars["Int"]>;
  pngCompressionSpeed?: Maybe<Scalars["Int"]>;
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars["Boolean"]>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars["String"]>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
};

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge";
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
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
  GatsbyImageData = "gatsbyImageData",
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
  InternalType = "internal___type",
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal";
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: "ImageSharpResize";
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: "ImageSharpResolutions";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: "ImageSharpSizes";
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars["Int"]>;
  progressive?: Maybe<Scalars["Boolean"]>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>;
  ne?: Maybe<Scalars["JSON"]>;
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>;
  regex?: Maybe<Scalars["JSON"]>;
  glob?: Maybe<Scalars["JSON"]>;
};

export type Mdx = Node & {
  __typename?: "Mdx";
  rawBody: Scalars["String"];
  fileAbsolutePath: Scalars["String"];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars["String"]>;
  body: Scalars["String"];
  excerpt: Scalars["String"];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars["String"]>;
  mdxAST?: Maybe<Scalars["JSON"]>;
  tableOfContents?: Maybe<Scalars["JSON"]>;
  timeToRead?: Maybe<Scalars["Int"]>;
  wordCount?: Maybe<MdxWordCount>;
  exports?: Maybe<MdxExports>;
  fields?: Maybe<MdxFields>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>;
  truncate?: Maybe<Scalars["Boolean"]>;
};

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars["Int"]>;
};

export type MdxConnection = {
  __typename?: "MdxConnection";
  totalCount: Scalars["Int"];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<MdxGroupConnection>;
};

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};

export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  meta?: Maybe<MdxExportsMetaFilterInput>;
};

export type MdxExportsMeta = {
  __typename?: "MdxExportsMeta";
  title?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["Date"]>;
  updated?: Maybe<Scalars["Date"]>;
  description?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  image?: Maybe<File>;
  imageAlt?: Maybe<Scalars["String"]>;
  linkText?: Maybe<Scalars["String"]>;
  draft?: Maybe<Scalars["Boolean"]>;
};

export type MdxExportsMetaDateArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type MdxExportsMetaUpdatedArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type MdxExportsMetaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  updated?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  linkText?: Maybe<StringQueryOperatorInput>;
  draft?: Maybe<BooleanQueryOperatorInput>;
};

export type MdxFields = {
  __typename?: "MdxFields";
  slug?: Maybe<Scalars["String"]>;
};

export enum MdxFieldsEnum {
  RawBody = "rawBody",
  FileAbsolutePath = "fileAbsolutePath",
  FrontmatterTitle = "frontmatter___title",
  Slug = "slug",
  Body = "body",
  Excerpt = "excerpt",
  Headings = "headings",
  HeadingsValue = "headings___value",
  HeadingsDepth = "headings___depth",
  Html = "html",
  MdxAst = "mdxAST",
  TableOfContents = "tableOfContents",
  TimeToRead = "timeToRead",
  WordCountParagraphs = "wordCount___paragraphs",
  WordCountSentences = "wordCount___sentences",
  WordCountWords = "wordCount___words",
  ExportsMetaTitle = "exports___meta___title",
  ExportsMetaDate = "exports___meta___date",
  ExportsMetaUpdated = "exports___meta___updated",
  ExportsMetaDescription = "exports___meta___description",
  ExportsMetaCategory = "exports___meta___category",
  ExportsMetaImageSourceInstanceName = "exports___meta___image___sourceInstanceName",
  ExportsMetaImageAbsolutePath = "exports___meta___image___absolutePath",
  ExportsMetaImageRelativePath = "exports___meta___image___relativePath",
  ExportsMetaImageExtension = "exports___meta___image___extension",
  ExportsMetaImageSize = "exports___meta___image___size",
  ExportsMetaImagePrettySize = "exports___meta___image___prettySize",
  ExportsMetaImageModifiedTime = "exports___meta___image___modifiedTime",
  ExportsMetaImageAccessTime = "exports___meta___image___accessTime",
  ExportsMetaImageChangeTime = "exports___meta___image___changeTime",
  ExportsMetaImageBirthTime = "exports___meta___image___birthTime",
  ExportsMetaImageRoot = "exports___meta___image___root",
  ExportsMetaImageDir = "exports___meta___image___dir",
  ExportsMetaImageBase = "exports___meta___image___base",
  ExportsMetaImageExt = "exports___meta___image___ext",
  ExportsMetaImageName = "exports___meta___image___name",
  ExportsMetaImageRelativeDirectory = "exports___meta___image___relativeDirectory",
  ExportsMetaImageDev = "exports___meta___image___dev",
  ExportsMetaImageMode = "exports___meta___image___mode",
  ExportsMetaImageNlink = "exports___meta___image___nlink",
  ExportsMetaImageUid = "exports___meta___image___uid",
  ExportsMetaImageGid = "exports___meta___image___gid",
  ExportsMetaImageRdev = "exports___meta___image___rdev",
  ExportsMetaImageIno = "exports___meta___image___ino",
  ExportsMetaImageAtimeMs = "exports___meta___image___atimeMs",
  ExportsMetaImageMtimeMs = "exports___meta___image___mtimeMs",
  ExportsMetaImageCtimeMs = "exports___meta___image___ctimeMs",
  ExportsMetaImageAtime = "exports___meta___image___atime",
  ExportsMetaImageMtime = "exports___meta___image___mtime",
  ExportsMetaImageCtime = "exports___meta___image___ctime",
  ExportsMetaImageBirthtime = "exports___meta___image___birthtime",
  ExportsMetaImageBirthtimeMs = "exports___meta___image___birthtimeMs",
  ExportsMetaImageBlksize = "exports___meta___image___blksize",
  ExportsMetaImageBlocks = "exports___meta___image___blocks",
  ExportsMetaImagePublicUrl = "exports___meta___image___publicURL",
  ExportsMetaImageChildrenImageSharp = "exports___meta___image___childrenImageSharp",
  ExportsMetaImageChildrenSoftwareJson = "exports___meta___image___childrenSoftwareJson",
  ExportsMetaImageChildrenMdx = "exports___meta___image___childrenMdx",
  ExportsMetaImageId = "exports___meta___image___id",
  ExportsMetaImageChildren = "exports___meta___image___children",
  ExportsMetaImageAlt = "exports___meta___imageAlt",
  ExportsMetaLinkText = "exports___meta___linkText",
  ExportsMetaDraft = "exports___meta___draft",
  FieldsSlug = "fields___slug",
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
}

export type MdxFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  exports?: Maybe<MdxExportsFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: "MdxFrontmatter";
  title: Scalars["String"];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: "MdxGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type MdxHeadingMdx = {
  __typename?: "MdxHeadingMdx";
  value?: Maybe<Scalars["String"]>;
  depth?: Maybe<Scalars["Int"]>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: "MdxWordCount";
  paragraphs?: Maybe<Scalars["Int"]>;
  sentences?: Maybe<Scalars["Int"]>;
  words?: Maybe<Scalars["Int"]>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type PngOptions = {
  quality?: Maybe<Scalars["Int"]>;
  compressionSpeed?: Maybe<Scalars["Int"]>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars["Float"]>;
  alphaMax?: Maybe<Scalars["Float"]>;
  optCurve?: Maybe<Scalars["Boolean"]>;
  optTolerance?: Maybe<Scalars["Float"]>;
  threshold?: Maybe<Scalars["Int"]>;
  blackOnWhite?: Maybe<Scalars["Boolean"]>;
  color?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = "TURNPOLICY_BLACK",
  TurnpolicyWhite = "TURNPOLICY_WHITE",
  TurnpolicyLeft = "TURNPOLICY_LEFT",
  TurnpolicyRight = "TURNPOLICY_RIGHT",
  TurnpolicyMinority = "TURNPOLICY_MINORITY",
  TurnpolicyMajority = "TURNPOLICY_MAJORITY",
}

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  softwareJson?: Maybe<SoftwareJson>;
  allSoftwareJson: SoftwareJsonConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  githubData?: Maybe<GithubData>;
  allGithubData: GithubDataConnection;
  goodreadsShelf?: Maybe<GoodreadsShelf>;
  allGoodreadsShelf: GoodreadsShelfConnection;
  goodreadsBook?: Maybe<GoodreadsBook>;
  allGoodreadsBook: GoodreadsBookConnection;
  goodreadsAuthor?: Maybe<GoodreadsAuthor>;
  allGoodreadsAuthor: GoodreadsAuthorConnection;
  goodreadsReview?: Maybe<GoodreadsReview>;
  allGoodreadsReview: GoodreadsReviewConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenSoftwareJson?: Maybe<SoftwareJsonFilterListInput>;
  childSoftwareJson?: Maybe<SoftwareJsonFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySoftwareJsonArgs = {
  _2019?: Maybe<StringQueryOperatorInput>;
  _2020?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSoftwareJsonArgs = {
  filter?: Maybe<SoftwareJsonFilterInput>;
  sort?: Maybe<SoftwareJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  exports?: Maybe<MdxExportsFilterInput>;
  fields?: Maybe<MdxFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGithubDataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  data?: Maybe<GithubDataDataFilterInput>;
  rawResult?: Maybe<GithubDataRawResultFilterInput>;
};

export type QueryAllGithubDataArgs = {
  filter?: Maybe<GithubDataFilterInput>;
  sort?: Maybe<GithubDataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGoodreadsShelfArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  exclusive?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  review_shelf_id?: Maybe<StringQueryOperatorInput>;
  sortable?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  reviews?: Maybe<GoodreadsReviewFilterListInput>;
};

export type QueryAllGoodreadsShelfArgs = {
  filter?: Maybe<GoodreadsShelfFilterInput>;
  sort?: Maybe<GoodreadsShelfSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGoodreadsBookArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isbn?: Maybe<StringQueryOperatorInput>;
  isbn13?: Maybe<StringQueryOperatorInput>;
  text_reviews_count?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  title_without_series?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  small_image_url?: Maybe<StringQueryOperatorInput>;
  large_image_url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  num_pages?: Maybe<StringQueryOperatorInput>;
  format?: Maybe<StringQueryOperatorInput>;
  edition_information?: Maybe<StringQueryOperatorInput>;
  publisher?: Maybe<StringQueryOperatorInput>;
  publication_day?: Maybe<StringQueryOperatorInput>;
  publication_year?: Maybe<DateQueryOperatorInput>;
  publication_month?: Maybe<StringQueryOperatorInput>;
  average_rating?: Maybe<StringQueryOperatorInput>;
  ratings_count?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  work?: Maybe<GoodreadsBookWorkFilterInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  reviews?: Maybe<GoodreadsReviewFilterListInput>;
  authors?: Maybe<GoodreadsAuthorFilterListInput>;
};

export type QueryAllGoodreadsBookArgs = {
  filter?: Maybe<GoodreadsBookFilterInput>;
  sort?: Maybe<GoodreadsBookSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGoodreadsAuthorArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  role?: Maybe<StringQueryOperatorInput>;
  image_url?: Maybe<StringQueryOperatorInput>;
  small_image_url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  average_rating?: Maybe<StringQueryOperatorInput>;
  ratings_count?: Maybe<StringQueryOperatorInput>;
  text_reviews_count?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  books?: Maybe<GoodreadsBookFilterListInput>;
};

export type QueryAllGoodreadsAuthorArgs = {
  filter?: Maybe<GoodreadsAuthorFilterInput>;
  sort?: Maybe<GoodreadsAuthorSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryGoodreadsReviewArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  rating?: Maybe<StringQueryOperatorInput>;
  votes?: Maybe<StringQueryOperatorInput>;
  spoiler_flag?: Maybe<StringQueryOperatorInput>;
  spoilers_state?: Maybe<StringQueryOperatorInput>;
  recommended_for?: Maybe<StringQueryOperatorInput>;
  recommended_by?: Maybe<StringQueryOperatorInput>;
  started_at?: Maybe<StringQueryOperatorInput>;
  read_at?: Maybe<StringQueryOperatorInput>;
  date_added?: Maybe<StringQueryOperatorInput>;
  date_updated?: Maybe<StringQueryOperatorInput>;
  read_count?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  comments_count?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  owned?: Maybe<StringQueryOperatorInput>;
  goodreadsId?: Maybe<StringQueryOperatorInput>;
  book?: Maybe<GoodreadsBookFilterInput>;
};

export type QueryAllGoodreadsReviewArgs = {
  filter?: Maybe<GoodreadsReviewFilterInput>;
  sort?: Maybe<GoodreadsReviewSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata: SiteSiteMetadata;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
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
  BuildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
  SiteMetadataTitle = "siteMetadata___title",
  SiteMetadataDescription = "siteMetadata___description",
  SiteMetadataAuthor = "siteMetadata___author",
  SiteMetadataSiteUrl = "siteMetadata___siteUrl",
  SiteMetadataImage = "siteMetadata___image",
  SiteMetadataImageAlt = "siteMetadata___imageAlt",
  SiteMetadataSocialTwitter = "siteMetadata___social___twitter",
  Port = "port",
  Host = "host",
  Polyfill = "polyfill",
  PathPrefix = "pathPrefix",
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
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  slug?: Maybe<Scalars["String"]>;
  previous?: Maybe<SitePageContextPrevious>;
  next?: Maybe<SitePageContextNext>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  previous?: Maybe<SitePageContextPreviousFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
};

export type SitePageContextNext = {
  __typename?: "SitePageContextNext";
  exports?: Maybe<SitePageContextNextExports>;
  fields?: Maybe<SitePageContextNextFields>;
};

export type SitePageContextNextExports = {
  __typename?: "SitePageContextNextExports";
  meta?: Maybe<SitePageContextNextExportsMeta>;
};

export type SitePageContextNextExportsFilterInput = {
  meta?: Maybe<SitePageContextNextExportsMetaFilterInput>;
};

export type SitePageContextNextExportsMeta = {
  __typename?: "SitePageContextNextExportsMeta";
  title?: Maybe<Scalars["String"]>;
};

export type SitePageContextNextExportsMetaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFields = {
  __typename?: "SitePageContextNextFields";
  slug?: Maybe<Scalars["String"]>;
};

export type SitePageContextNextFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  exports?: Maybe<SitePageContextNextExportsFilterInput>;
  fields?: Maybe<SitePageContextNextFieldsFilterInput>;
};

export type SitePageContextPrevious = {
  __typename?: "SitePageContextPrevious";
  exports?: Maybe<SitePageContextPreviousExports>;
  fields?: Maybe<SitePageContextPreviousFields>;
};

export type SitePageContextPreviousExports = {
  __typename?: "SitePageContextPreviousExports";
  meta?: Maybe<SitePageContextPreviousExportsMeta>;
};

export type SitePageContextPreviousExportsFilterInput = {
  meta?: Maybe<SitePageContextPreviousExportsMetaFilterInput>;
};

export type SitePageContextPreviousExportsMeta = {
  __typename?: "SitePageContextPreviousExportsMeta";
  title?: Maybe<Scalars["String"]>;
};

export type SitePageContextPreviousExportsMetaFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPreviousFields = {
  __typename?: "SitePageContextPreviousFields";
  slug?: Maybe<Scalars["String"]>;
};

export type SitePageContextPreviousFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPreviousFilterInput = {
  exports?: Maybe<SitePageContextPreviousExportsFilterInput>;
  fields?: Maybe<SitePageContextPreviousFieldsFilterInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = "path",
  Component = "component",
  InternalComponentName = "internalComponentName",
  ComponentChunkName = "componentChunkName",
  MatchPath = "matchPath",
  IsCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  ContextSlug = "context___slug",
  ContextPreviousFieldsSlug = "context___previous___fields___slug",
  ContextNextFieldsSlug = "context___next___fields___slug",
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
  PluginCreatorPluginOptionsDomains = "pluginCreator___pluginOptions___domains",
  PluginCreatorPluginOptionsGoogleFamilies = "pluginCreator___pluginOptions___google___families",
  PluginCreatorPluginOptionsSiteUrl = "pluginCreator___pluginOptions___siteUrl",
  PluginCreatorPluginOptionsKey = "pluginCreator___pluginOptions___key",
  PluginCreatorPluginOptionsId = "pluginCreator___pluginOptions___id",
  PluginCreatorPluginOptionsToken = "pluginCreator___pluginOptions___token",
  PluginCreatorPluginOptionsGraphQlQuery = "pluginCreator___pluginOptions___graphQLQuery",
  PluginCreatorPluginOptionsPath = "pluginCreator___pluginOptions___path",
  PluginCreatorPluginOptionsName = "pluginCreator___pluginOptions___name",
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = "pluginCreator___pluginOptions___gatsbyRemarkPlugins",
  PluginCreatorPluginOptionsGatsbyRemarkPluginsResolve = "pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve",
  PluginCreatorPluginOptionsDefaultsFormats = "pluginCreator___pluginOptions___defaults___formats",
  PluginCreatorPluginOptionsIncludeInDevelopment = "pluginCreator___pluginOptions___includeInDevelopment",
  PluginCreatorPluginOptionsDefaultDataLayerType = "pluginCreator___pluginOptions___defaultDataLayer___type",
  PluginCreatorPluginOptionsRouteChangeEventName = "pluginCreator___pluginOptions___routeChangeEventName",
  PluginCreatorPluginOptionsShortName = "pluginCreator___pluginOptions___short_name",
  PluginCreatorPluginOptionsStartUrl = "pluginCreator___pluginOptions___start_url",
  PluginCreatorPluginOptionsBackgroundColor = "pluginCreator___pluginOptions___background_color",
  PluginCreatorPluginOptionsThemeColor = "pluginCreator___pluginOptions___theme_color",
  PluginCreatorPluginOptionsDisplay = "pluginCreator___pluginOptions___display",
  PluginCreatorPluginOptionsIcon = "pluginCreator___pluginOptions___icon",
  PluginCreatorPluginOptionsCacheBustingMode = "pluginCreator___pluginOptions___cache_busting_mode",
  PluginCreatorPluginOptionsIncludeFavicon = "pluginCreator___pluginOptions___include_favicon",
  PluginCreatorPluginOptionsLegacy = "pluginCreator___pluginOptions___legacy",
  PluginCreatorPluginOptionsThemeColorInHead = "pluginCreator___pluginOptions___theme_color_in_head",
  PluginCreatorPluginOptionsCacheDigest = "pluginCreator___pluginOptions___cacheDigest",
  PluginCreatorPluginOptionsAllExtensions = "pluginCreator___pluginOptions___allExtensions",
  PluginCreatorPluginOptionsIsTsx = "pluginCreator___pluginOptions___isTSX",
  PluginCreatorPluginOptionsJsxPragma = "pluginCreator___pluginOptions___jsxPragma",
  PluginCreatorPluginOptionsComponent = "pluginCreator___pluginOptions___component",
  PluginCreatorPluginOptionsBucketName = "pluginCreator___pluginOptions___bucketName",
  PluginCreatorPluginOptionsProtocol = "pluginCreator___pluginOptions___protocol",
  PluginCreatorPluginOptionsHostname = "pluginCreator___pluginOptions___hostname",
  PluginCreatorPluginOptionsConfigDir = "pluginCreator___pluginOptions___configDir",
  PluginCreatorPluginOptionsBabel = "pluginCreator___pluginOptions___babel",
  PluginCreatorPluginOptionsTsNodeProject = "pluginCreator___pluginOptions___tsNode___project",
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
  InternalType = "internal___type",
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
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
  PluginOptionsDomains = "pluginOptions___domains",
  PluginOptionsGoogleFamilies = "pluginOptions___google___families",
  PluginOptionsSiteUrl = "pluginOptions___siteUrl",
  PluginOptionsKey = "pluginOptions___key",
  PluginOptionsId = "pluginOptions___id",
  PluginOptionsToken = "pluginOptions___token",
  PluginOptionsGraphQlQuery = "pluginOptions___graphQLQuery",
  PluginOptionsPath = "pluginOptions___path",
  PluginOptionsName = "pluginOptions___name",
  PluginOptionsGatsbyRemarkPlugins = "pluginOptions___gatsbyRemarkPlugins",
  PluginOptionsGatsbyRemarkPluginsResolve = "pluginOptions___gatsbyRemarkPlugins___resolve",
  PluginOptionsGatsbyRemarkPluginsOptionsMaintainCase = "pluginOptions___gatsbyRemarkPlugins___options___maintainCase",
  PluginOptionsGatsbyRemarkPluginsOptionsRemoveAccents = "pluginOptions___gatsbyRemarkPlugins___options___removeAccents",
  PluginOptionsGatsbyRemarkPluginsOptionsIsIconAfterHeader = "pluginOptions___gatsbyRemarkPlugins___options___isIconAfterHeader",
  PluginOptionsGatsbyRemarkPluginsOptionsIcon = "pluginOptions___gatsbyRemarkPlugins___options___icon",
  PluginOptionsGatsbyRemarkPluginsOptionsWidth = "pluginOptions___gatsbyRemarkPlugins___options___width",
  PluginOptionsGatsbyRemarkPluginsOptionsRatio = "pluginOptions___gatsbyRemarkPlugins___options___ratio",
  PluginOptionsGatsbyRemarkPluginsOptionsRelated = "pluginOptions___gatsbyRemarkPlugins___options___related",
  PluginOptionsGatsbyRemarkPluginsOptionsNoIframeBorder = "pluginOptions___gatsbyRemarkPlugins___options___noIframeBorder",
  PluginOptionsGatsbyRemarkPluginsOptionsMaxWidth = "pluginOptions___gatsbyRemarkPlugins___options___maxWidth",
  PluginOptionsGatsbyRemarkPluginsOptionsWrapperStyle = "pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle",
  PluginOptionsGatsbyRemarkPluginsOptionsLinkImagesToOriginal = "pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal",
  PluginOptionsDefaultsFormats = "pluginOptions___defaults___formats",
  PluginOptionsIncludeInDevelopment = "pluginOptions___includeInDevelopment",
  PluginOptionsDefaultDataLayerType = "pluginOptions___defaultDataLayer___type",
  PluginOptionsDefaultDataLayerValueEnvironment = "pluginOptions___defaultDataLayer___value___environment",
  PluginOptionsRouteChangeEventName = "pluginOptions___routeChangeEventName",
  PluginOptionsShortName = "pluginOptions___short_name",
  PluginOptionsStartUrl = "pluginOptions___start_url",
  PluginOptionsBackgroundColor = "pluginOptions___background_color",
  PluginOptionsThemeColor = "pluginOptions___theme_color",
  PluginOptionsDisplay = "pluginOptions___display",
  PluginOptionsIcon = "pluginOptions___icon",
  PluginOptionsCacheBustingMode = "pluginOptions___cache_busting_mode",
  PluginOptionsIncludeFavicon = "pluginOptions___include_favicon",
  PluginOptionsLegacy = "pluginOptions___legacy",
  PluginOptionsThemeColorInHead = "pluginOptions___theme_color_in_head",
  PluginOptionsCacheDigest = "pluginOptions___cacheDigest",
  PluginOptionsAllExtensions = "pluginOptions___allExtensions",
  PluginOptionsIsTsx = "pluginOptions___isTSX",
  PluginOptionsJsxPragma = "pluginOptions___jsxPragma",
  PluginOptionsComponent = "pluginOptions___component",
  PluginOptionsBucketName = "pluginOptions___bucketName",
  PluginOptionsProtocol = "pluginOptions___protocol",
  PluginOptionsHostname = "pluginOptions___hostname",
  PluginOptionsConfigDir = "pluginOptions___configDir",
  PluginOptionsBabel = "pluginOptions___babel",
  PluginOptionsTsNodeProject = "pluginOptions___tsNode___project",
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
  PackageJsonKeywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  domains?: Maybe<Array<Maybe<Scalars["String"]>>>;
  google?: Maybe<SitePluginPluginOptionsGoogle>;
  siteUrl?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  graphQLQuery?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  gatsbyRemarkPlugins?: Maybe<
    Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>
  >;
  defaults?: Maybe<SitePluginPluginOptionsDefaults>;
  includeInDevelopment?: Maybe<Scalars["Boolean"]>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  routeChangeEventName?: Maybe<Scalars["String"]>;
  short_name?: Maybe<Scalars["String"]>;
  start_url?: Maybe<Scalars["String"]>;
  background_color?: Maybe<Scalars["String"]>;
  theme_color?: Maybe<Scalars["String"]>;
  display?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  cache_busting_mode?: Maybe<Scalars["String"]>;
  include_favicon?: Maybe<Scalars["Boolean"]>;
  legacy?: Maybe<Scalars["Boolean"]>;
  theme_color_in_head?: Maybe<Scalars["Boolean"]>;
  cacheDigest?: Maybe<Scalars["String"]>;
  allExtensions?: Maybe<Scalars["Boolean"]>;
  isTSX?: Maybe<Scalars["Boolean"]>;
  jsxPragma?: Maybe<Scalars["String"]>;
  component?: Maybe<Scalars["String"]>;
  bucketName?: Maybe<Scalars["String"]>;
  protocol?: Maybe<Scalars["String"]>;
  hostname?: Maybe<Scalars["String"]>;
  configDir?: Maybe<Scalars["String"]>;
  babel?: Maybe<Scalars["Boolean"]>;
  tsNode?: Maybe<SitePluginPluginOptionsTsNode>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsDefaultDataLayer = {
  __typename?: "SitePluginPluginOptionsDefaultDataLayer";
  type?: Maybe<Scalars["String"]>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValue>;
};

export type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<SitePluginPluginOptionsDefaultDataLayerValueFilterInput>;
};

export type SitePluginPluginOptionsDefaultDataLayerValue = {
  __typename?: "SitePluginPluginOptionsDefaultDataLayerValue";
  environment?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsDefaultDataLayerValueFilterInput = {
  environment?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaults = {
  __typename?: "SitePluginPluginOptionsDefaults";
  formats?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
  formats?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  domains?: Maybe<StringQueryOperatorInput>;
  google?: Maybe<SitePluginPluginOptionsGoogleFilterInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  token?: Maybe<StringQueryOperatorInput>;
  graphQLQuery?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>;
  defaults?: Maybe<SitePluginPluginOptionsDefaultsFilterInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  defaultDataLayer?: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  routeChangeEventName?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  bucketName?: Maybe<StringQueryOperatorInput>;
  protocol?: Maybe<StringQueryOperatorInput>;
  hostname?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  babel?: Maybe<BooleanQueryOperatorInput>;
  tsNode?: Maybe<SitePluginPluginOptionsTsNodeFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  __typename?: "SitePluginPluginOptionsGatsbyRemarkPlugins";
  resolve?: Maybe<Scalars["String"]>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  __typename?: "SitePluginPluginOptionsGatsbyRemarkPluginsOptions";
  maintainCase?: Maybe<Scalars["Boolean"]>;
  removeAccents?: Maybe<Scalars["Boolean"]>;
  isIconAfterHeader?: Maybe<Scalars["Boolean"]>;
  icon?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  ratio?: Maybe<Scalars["Float"]>;
  related?: Maybe<Scalars["Boolean"]>;
  noIframeBorder?: Maybe<Scalars["Boolean"]>;
  maxWidth?: Maybe<Scalars["Int"]>;
  wrapperStyle?: Maybe<Scalars["String"]>;
  linkImagesToOriginal?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  maintainCase?: Maybe<BooleanQueryOperatorInput>;
  removeAccents?: Maybe<BooleanQueryOperatorInput>;
  isIconAfterHeader?: Maybe<BooleanQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  ratio?: Maybe<FloatQueryOperatorInput>;
  related?: Maybe<BooleanQueryOperatorInput>;
  noIframeBorder?: Maybe<BooleanQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogle = {
  __typename?: "SitePluginPluginOptionsGoogle";
  families?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPluginOptionsGoogleFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsTsNode = {
  __typename?: "SitePluginPluginOptionsTsNode";
  project?: Maybe<Scalars["String"]>;
};

export type SitePluginPluginOptionsTsNodeFilterInput = {
  project?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  title: Scalars["String"];
  description: Scalars["String"];
  author: Scalars["String"];
  siteUrl: Scalars["String"];
  image: Scalars["String"];
  imageAlt: Scalars["String"];
  social: SiteSiteMetadataSocial;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  imageAlt?: Maybe<StringQueryOperatorInput>;
  social?: Maybe<SiteSiteMetadataSocialFilterInput>;
};

export type SiteSiteMetadataSocial = {
  __typename?: "SiteSiteMetadataSocial";
  twitter: Scalars["String"];
};

export type SiteSiteMetadataSocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SoftwareJson = Node & {
  __typename?: "SoftwareJson";
  _2019: Array<Scalars["String"]>;
  _2020: Array<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SoftwareJsonConnection = {
  __typename?: "SoftwareJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<SoftwareJsonEdge>;
  nodes: Array<SoftwareJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SoftwareJsonGroupConnection>;
};

export type SoftwareJsonConnectionDistinctArgs = {
  field: SoftwareJsonFieldsEnum;
};

export type SoftwareJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
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
}

export type SoftwareJsonFilterInput = {
  _2019?: Maybe<StringQueryOperatorInput>;
  _2020?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SoftwareJsonFilterListInput = {
  elemMatch?: Maybe<SoftwareJsonFilterInput>;
};

export type SoftwareJsonGroupConnection = {
  __typename?: "SoftwareJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SoftwareJsonEdge>;
  nodes: Array<SoftwareJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SoftwareJsonSortInput = {
  fields?: Maybe<Array<Maybe<SoftwareJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars["Boolean"]>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars["Int"]>;
  trim?: Maybe<Scalars["Float"]>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars["Int"]>;
};

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "base64" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "tracedSVG" | "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<ImageSharpFixed, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed";
} & Pick<
  ImageSharpFixed,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid";
} & {
  maxHeight: ImageSharpFluid["presentationHeight"];
  maxWidth: ImageSharpFluid["presentationWidth"];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<ImageSharpFluid, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid";
} & Pick<
  ImageSharpFluid,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet"
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "base64" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "tracedSVG" | "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<ImageSharpResolutions, "width" | "height" | "src" | "srcSet">;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpResolutions";
} & Pick<
  ImageSharpResolutions,
  "width" | "height" | "src" | "srcSet" | "srcWebp" | "srcSetWebp"
>;

export type GatsbyImageSharpSizesFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "base64" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "tracedSVG" | "aspectRatio" | "src" | "srcSet" | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "base64"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  | "tracedSVG"
  | "aspectRatio"
  | "src"
  | "srcSet"
  | "srcWebp"
  | "srcSetWebp"
  | "sizes"
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<ImageSharpSizes, "aspectRatio" | "src" | "srcSet" | "sizes">;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpSizes";
} & Pick<
  ImageSharpSizes,
  "aspectRatio" | "src" | "srcSet" | "srcWebp" | "srcSetWebp" | "sizes"
>;

export type BioQueryVariables = Exact<{ [key: string]: never }>;

export type BioQuery = { __typename?: "Query" } & {
  avatar?: Maybe<
    { __typename?: "File" } & {
      childImageSharp?: Maybe<
        { __typename?: "ImageSharp" } & Pick<ImageSharp, "gatsbyImageData">
      >;
    }
  >;
};

export type HeaderQueryVariables = Exact<{ [key: string]: never }>;

export type HeaderQuery = { __typename?: "Query" } & {
  avatar?: Maybe<
    { __typename?: "File" } & {
      childImageSharp?: Maybe<
        { __typename?: "ImageSharp" } & Pick<ImageSharp, "gatsbyImageData">
      >;
    }
  >;
};

export type BlogPagesQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPagesQuery = { __typename?: "Query" } & {
  allMdx: { __typename?: "MdxConnection" } & {
    edges: Array<
      { __typename?: "MdxEdge" } & {
        node: { __typename?: "Mdx" } & {
          exports?: Maybe<
            { __typename?: "MdxExports" } & {
              meta?: Maybe<
                { __typename?: "MdxExportsMeta" } & Pick<
                  MdxExportsMeta,
                  "title"
                >
              >;
            }
          >;
          fields?: Maybe<
            { __typename?: "MdxFields" } & Pick<MdxFields, "slug">
          >;
        };
      }
    >;
  };
};

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type SiteMetadataQuery = { __typename?: "Query" } & {
  site?: Maybe<
    { __typename?: "Site" } & {
      siteMetadata: { __typename?: "SiteSiteMetadata" } & Pick<
        SiteSiteMetadata,
        "title" | "description" | "author" | "image" | "imageAlt" | "siteUrl"
      > & {
          social: { __typename?: "SiteSiteMetadataSocial" } & Pick<
            SiteSiteMetadataSocial,
            "twitter"
          >;
        };
    }
  >;
};

export type BlogIndexQueryVariables = Exact<{ [key: string]: never }>;

export type BlogIndexQuery = { __typename?: "Query" } & {
  allMdx: { __typename?: "MdxConnection" } & {
    edges: Array<
      { __typename?: "MdxEdge" } & {
        node: { __typename?: "Mdx" } & Pick<Mdx, "excerpt"> & {
            fields?: Maybe<
              { __typename?: "MdxFields" } & Pick<MdxFields, "slug">
            >;
            exports?: Maybe<
              { __typename?: "MdxExports" } & {
                meta?: Maybe<
                  { __typename?: "MdxExportsMeta" } & Pick<
                    MdxExportsMeta,
                    "draft" | "title" | "date" | "description" | "linkText"
                  > & {
                      image?: Maybe<
                        { __typename?: "File" } & {
                          childImageSharp?: Maybe<
                            { __typename?: "ImageSharp" } & Pick<
                              ImageSharp,
                              "gatsbyImageData"
                            >
                          >;
                        }
                      >;
                    }
                >;
              }
            >;
          };
      }
    >;
  };
};

export type TimelineIndexQueryVariables = Exact<{ [key: string]: never }>;

export type TimelineIndexQuery = { __typename?: "Query" } & {
  allFile: { __typename?: "FileConnection" } & {
    edges: Array<
      { __typename?: "FileEdge" } & {
        node: { __typename?: "File" } & Pick<File, "name"> & {
            childImageSharp?: Maybe<
              { __typename?: "ImageSharp" } & Pick<
                ImageSharp,
                "gatsbyImageData"
              >
            >;
          };
      }
    >;
  };
};

export type MusicQueryVariables = Exact<{ [key: string]: never }>;

export type MusicQuery = { __typename?: "Query" } & {
  latentSignal?: Maybe<
    { __typename?: "File" } & {
      childImageSharp?: Maybe<
        { __typename?: "ImageSharp" } & Pick<ImageSharp, "gatsbyImageData">
      >;
    }
  >;
  clioCover?: Maybe<
    { __typename?: "File" } & {
      childImageSharp?: Maybe<
        { __typename?: "ImageSharp" } & Pick<ImageSharp, "gatsbyImageData">
      >;
    }
  >;
};

export type SoftwareQueryVariables = Exact<{ [key: string]: never }>;

export type SoftwareQuery = { __typename?: "Query" } & {
  softwareJson?: Maybe<
    { __typename?: "SoftwareJson" } & Pick<SoftwareJson, "_2019" | "_2020">
  >;
  allGithubData: { __typename?: "GithubDataConnection" } & {
    edges: Array<
      { __typename?: "GithubDataEdge" } & {
        node: { __typename?: "GithubData" } & Pick<GithubData, "id"> & {
            rawResult?: Maybe<
              { __typename?: "GithubDataRawResult" } & {
                data?: Maybe<
                  { __typename?: "GithubDataRawResultData" } & {
                    viewer?: Maybe<
                      { __typename?: "GithubDataRawResultDataViewer" } & {
                        repositories?: Maybe<
                          {
                            __typename?: "GithubDataRawResultDataViewerRepositories";
                          } & Pick<
                            GithubDataRawResultDataViewerRepositories,
                            "totalCount"
                          > & {
                              nodes?: Maybe<
                                Array<
                                  Maybe<
                                    {
                                      __typename?: "GithubDataRawResultDataViewerRepositoriesNodes";
                                    } & Pick<
                                      GithubDataRawResultDataViewerRepositoriesNodes,
                                      "name" | "url" | "updatedAt"
                                    > & {
                                        primaryLanguage?: Maybe<
                                          {
                                            __typename?: "GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguage";
                                          } & Pick<
                                            GithubDataRawResultDataViewerRepositoriesNodesPrimaryLanguage,
                                            "name"
                                          >
                                        >;
                                      }
                                  >
                                >
                              >;
                            }
                        >;
                      }
                    >;
                  }
                >;
              }
            >;
          };
      }
    >;
  };
};

export type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars["String"];
}>;

export type BlogPostBySlugQuery = { __typename?: "Query" } & {
  mdx?: Maybe<
    { __typename?: "Mdx" } & Pick<Mdx, "id" | "excerpt" | "body"> & {
        exports?: Maybe<
          { __typename?: "MdxExports" } & {
            meta?: Maybe<
              { __typename?: "MdxExportsMeta" } & Pick<
                MdxExportsMeta,
                | "title"
                | "date"
                | "updated"
                | "description"
                | "category"
                | "imageAlt"
              > & {
                  image?: Maybe<
                    { __typename?: "File" } & {
                      childImageSharp?: Maybe<
                        { __typename?: "ImageSharp" } & Pick<
                          ImageSharp,
                          "gatsbyImageData"
                        >
                      >;
                    }
                  >;
                }
            >;
          }
        >;
      }
  >;
  books2019: { __typename?: "GoodreadsShelfConnection" } & {
    edges: Array<
      { __typename?: "GoodreadsShelfEdge" } & {
        node: { __typename?: "GoodreadsShelf" } & Pick<
          GoodreadsShelf,
          "name"
        > & {
            reviews?: Maybe<
              Array<
                Maybe<
                  { __typename?: "GoodreadsReview" } & Pick<
                    GoodreadsReview,
                    "rating"
                  > & {
                      book?: Maybe<
                        { __typename?: "GoodreadsBook" } & Pick<
                          GoodreadsBook,
                          "title" | "link" | "image_url"
                        > & {
                            authors?: Maybe<
                              Array<
                                Maybe<
                                  { __typename?: "GoodreadsAuthor" } & Pick<
                                    GoodreadsAuthor,
                                    "name"
                                  >
                                >
                              >
                            >;
                          }
                      >;
                    }
                >
              >
            >;
          };
      }
    >;
  };
  books2020: { __typename?: "GoodreadsShelfConnection" } & {
    edges: Array<
      { __typename?: "GoodreadsShelfEdge" } & {
        node: { __typename?: "GoodreadsShelf" } & Pick<
          GoodreadsShelf,
          "name"
        > & {
            reviews?: Maybe<
              Array<
                Maybe<
                  { __typename?: "GoodreadsReview" } & Pick<
                    GoodreadsReview,
                    "rating"
                  > & {
                      book?: Maybe<
                        { __typename?: "GoodreadsBook" } & Pick<
                          GoodreadsBook,
                          "title" | "link" | "image_url"
                        > & {
                            authors?: Maybe<
                              Array<
                                Maybe<
                                  { __typename?: "GoodreadsAuthor" } & Pick<
                                    GoodreadsAuthor,
                                    "name"
                                  >
                                >
                              >
                            >;
                          }
                      >;
                    }
                >
              >
            >;
          };
      }
    >;
  };
  books2021: { __typename?: "GoodreadsShelfConnection" } & {
    edges: Array<
      { __typename?: "GoodreadsShelfEdge" } & {
        node: { __typename?: "GoodreadsShelf" } & Pick<
          GoodreadsShelf,
          "name"
        > & {
            reviews?: Maybe<
              Array<
                Maybe<
                  { __typename?: "GoodreadsReview" } & Pick<
                    GoodreadsReview,
                    "rating"
                  > & {
                      book?: Maybe<
                        { __typename?: "GoodreadsBook" } & Pick<
                          GoodreadsBook,
                          "title" | "link" | "image_url"
                        > & {
                            authors?: Maybe<
                              Array<
                                Maybe<
                                  { __typename?: "GoodreadsAuthor" } & Pick<
                                    GoodreadsAuthor,
                                    "name"
                                  >
                                >
                              >
                            >;
                          }
                      >;
                    }
                >
              >
            >;
          };
      }
    >;
  };
};
