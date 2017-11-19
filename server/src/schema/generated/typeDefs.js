let typeDefs = `
  type Test implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type Question implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
    answers(first: Int, after: String, last: Int, before: String): AnswerConnection
  }
  type Comment implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    created: Date
    parent: Comment
    post: Post
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
  }
  interface Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
  }
  type Device implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    deviceOs: String
  }
  type TestReference implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type Post implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    title: String
    author: User
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    picture: String
  }
  type Reference implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    text: String
  }
  type User implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type Embedded {
    string: String
  }
  type Answer implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
  }
  type Role implements Node, Object {
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    name: String
    users: [User]
  }
  type StringTestReferenceMapEntry {
    key: String
    value: TestReference
  }
  type StringStringMapEntry {
    key: String
    value: String
  }
  type StringEmbeddedMapEntry {
    key: String
    value: Embedded
  }
  type TestReferenceTestReferenceMapEntry {
    key: TestReference
    value: TestReference
  }
  type TestConnection {
    total: Int
    edges: [TestEdge]
    pageInfo: PageInfo!
  }
  type TestEdge {
    cursor: String!
    node: Test
  }
  type QuestionConnection {
    total: Int
    edges: [QuestionEdge]
    pageInfo: PageInfo!
  }
  type QuestionEdge {
    cursor: String!
    node: Question
  }
  type CommentConnection {
    total: Int
    edges: [CommentEdge]
    pageInfo: PageInfo!
  }
  type CommentEdge {
    cursor: String!
    node: Comment
  }
  type DeviceConnection {
    total: Int
    edges: [DeviceEdge]
    pageInfo: PageInfo!
  }
  type DeviceEdge {
    cursor: String!
    node: Device
  }
  type TestReferenceConnection {
    total: Int
    edges: [TestReferenceEdge]
    pageInfo: PageInfo!
  }
  type TestReferenceEdge {
    cursor: String!
    node: TestReference
  }
  type PostConnection {
    total: Int
    edges: [PostEdge]
    pageInfo: PageInfo!
  }
  type PostEdge {
    cursor: String!
    node: Post
  }
  type ReferenceConnection {
    total: Int
    edges: [ReferenceEdge]
    pageInfo: PageInfo!
  }
  type ReferenceEdge {
    cursor: String!
    node: Reference
  }
  type UserConnection {
    total: Int
    edges: [UserEdge]
    pageInfo: PageInfo!
  }
  type UserEdge {
    cursor: String!
    node: User
  }
  type EmbeddedConnection {
    total: Int
    edges: [EmbeddedEdge]
    pageInfo: PageInfo!
  }
  type EmbeddedEdge {
    cursor: String!
    node: Embedded
  }
  type AnswerConnection {
    total: Int
    edges: [AnswerEdge]
    pageInfo: PageInfo!
  }
  type AnswerEdge {
    cursor: String!
    node: Answer
  }
  type RoleConnection {
    total: Int
    edges: [RoleEdge]
    pageInfo: PageInfo!
  }
  type RoleEdge {
    cursor: String!
    node: Role
  }
  input TestFilter {
    or: [TestFilter!]
    and: [TestFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    string: StringFilter
    double: FloatFilter
    integer: IntFilter
    boolean: BooleanFilter
    datetime: DateFilter
    date: DateFilter
    time: DateFilter
    array: JSONFilter
    json: JSONFilter
    reference: ObjectFilter
    embedded: EmbeddedFilter
    referenceList: CollectionFilter
    referenceSet: CollectionFilter
    referenceMap: CollectionFilter
    stringList: CollectionFilter
    stringSet: CollectionFilter
    stringMap: CollectionFilter
    embeddedList: CollectionFilter
    embeddedMap: CollectionFilter
    refRefMap: CollectionFilter
    geopoint: GeoPointFilter
  }
  input TestSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    string: Direction
    double: Direction
    integer: Direction
    boolean: Direction
    datetime: Direction
    date: Direction
    time: Direction
    array: Direction
    json: Direction
    reference: Direction
    embedded: Direction
    referenceList: Direction
    referenceSet: Direction
    referenceMap: Direction
    stringList: Direction
    stringSet: Direction
    stringMap: Direction
    embeddedList: Direction
    embeddedMap: Direction
    refRefMap: Direction
    geopoint: Direction
  }
  input QuestionFilter {
    or: [QuestionFilter!]
    and: [QuestionFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    author: ObjectFilter
    text: StringFilter
    upvotes: IntFilter
    answers: CollectionFilter
  }
  input QuestionSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    author: Direction
    text: Direction
    upvotes: Direction
    answers: Direction
  }
  input CommentFilter {
    or: [CommentFilter!]
    and: [CommentFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    author: ObjectFilter
    text: StringFilter
    created: DateFilter
    parent: ObjectFilter
    post: ObjectFilter
    comments: CollectionFilter
  }
  input CommentSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    author: Direction
    text: Direction
    created: Direction
    parent: Direction
    post: Direction
    comments: Direction
  }
  input DeviceFilter {
    or: [DeviceFilter!]
    and: [DeviceFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    deviceOs: StringFilter
  }
  input DeviceSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    deviceOs: Direction
  }
  input TestReferenceFilter {
    or: [TestReferenceFilter!]
    and: [TestReferenceFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    string: StringFilter
    reference: ObjectFilter
    map1: CollectionFilter
    map2: CollectionFilter
    map3: CollectionFilter
  }
  input TestReferenceSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    string: Direction
    reference: Direction
    map1: Direction
    map2: Direction
    map3: Direction
  }
  input PostFilter {
    or: [PostFilter!]
    and: [PostFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    title: StringFilter
    author: ObjectFilter
    created: DateFilter
    url: StringFilter
    text: StringFilter
    type: StringFilter
    score: IntFilter
    descendants: IntFilter
    comments: CollectionFilter
    picture: StringFilter
  }
  input PostSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    title: Direction
    author: Direction
    created: Direction
    url: Direction
    text: Direction
    type: Direction
    score: Direction
    descendants: Direction
    comments: Direction
    picture: Direction
  }
  input ReferenceFilter {
    or: [ReferenceFilter!]
    and: [ReferenceFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    text: StringFilter
  }
  input ReferenceSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    text: Direction
  }
  input UserFilter {
    or: [UserFilter!]
    and: [UserFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    username: StringFilter
    email: StringFilter
    name: StringFilter
    inactive: BooleanFilter
    comments: CollectionFilter
    posts: CollectionFilter
    reference: ObjectFilter
  }
  input UserSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    username: Direction
    email: Direction
    name: Direction
    inactive: Direction
    comments: Direction
    posts: Direction
    reference: Direction
  }
  input EmbeddedFilter {
    or: [EmbeddedFilter!]
    and: [EmbeddedFilter!]
    string: StringFilter
  }
  input EmbeddedSortBy {
    string: Direction
  }
  input AnswerFilter {
    or: [AnswerFilter!]
    and: [AnswerFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    author: ObjectFilter
    text: StringFilter
    upvotes: IntFilter
  }
  input AnswerSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    author: Direction
    text: Direction
    upvotes: Direction
  }
  input RoleFilter {
    or: [RoleFilter!]
    and: [RoleFilter!]
    id: IDFilter
    version: IntFilter
    acl: JSONFilter
    createdAt: DateFilter
    updatedAt: DateFilter
    name: StringFilter
    users: CollectionFilter
  }
  input RoleSortBy {
    id: Direction
    version: Direction
    acl: Direction
    createdAt: Direction
    updatedAt: Direction
    name: Direction
    users: Direction
  }
  input StringTestReferenceMapInput {
    key: String!
    value: TestReferenceInput!
  }
  input StringTestReferenceMapInputIds {
    key: String!
    value: ID!
  }
  input StringStringMapInput {
    key: String!
    value: String!
  }
  input StringEmbeddedMapInput {
    key: String!
    value: EmbeddedInput!
  }
  input TestReferenceTestReferenceMapInput {
    key: ID!
    value: TestReferenceInput!
  }
  input TestReferenceTestReferenceMapInputIds {
    key: ID!
    value: ID!
  }
  input TestInput {
    id: ID
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    referenceId: ID
    reference: TestReferenceInput
    embedded: EmbeddedInput
    referenceListIds: [ID!]
    referenceList: [TestReferenceInput!]
    referenceSetIds: [ID!]
    referenceSet: [TestReferenceInput!]
    referenceMapIds: [StringTestReferenceMapInputIds!]
    referenceMap: [StringTestReferenceMapInput!]
    stringList: [String!]
    stringSet: [String!]
    stringMap: [StringStringMapInput!]
    embeddedList: [EmbeddedInput!]
    embeddedMap: [StringEmbeddedMapInput!]
    refRefMapIds: [TestReferenceTestReferenceMapInputIds!]
    refRefMap: [TestReferenceTestReferenceMapInput!]
    geopoint: GeoPoint
  }
  input CreateTestInput {
    clientMutationId: String!
    id: ID
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    referenceId: ID
    reference: TestReferenceInput
    embedded: EmbeddedInput
    referenceListIds: [ID!]
    referenceList: [TestReferenceInput!]
    referenceSetIds: [ID!]
    referenceSet: [TestReferenceInput!]
    referenceMapIds: [StringTestReferenceMapInputIds!]
    referenceMap: [StringTestReferenceMapInput!]
    stringList: [String!]
    stringSet: [String!]
    stringMap: [StringStringMapInput!]
    embeddedList: [EmbeddedInput!]
    embeddedMap: [StringEmbeddedMapInput!]
    refRefMapIds: [TestReferenceTestReferenceMapInputIds!]
    refRefMap: [TestReferenceTestReferenceMapInput!]
    geopoint: GeoPoint
  }
  input UpdateTestInput {
    clientMutationId: String!
    id: ID!
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    referenceId: ID
    reference: TestReferenceInput
    embedded: EmbeddedInput
    referenceListIds: [ID!]
    referenceList: [TestReferenceInput!]
    referenceSetIds: [ID!]
    referenceSet: [TestReferenceInput!]
    referenceMapIds: [StringTestReferenceMapInputIds!]
    referenceMap: [StringTestReferenceMapInput!]
    stringList: [String!]
    stringSet: [String!]
    stringMap: [StringStringMapInput!]
    embeddedList: [EmbeddedInput!]
    embeddedMap: [StringEmbeddedMapInput!]
    refRefMapIds: [TestReferenceTestReferenceMapInputIds!]
    refRefMap: [TestReferenceTestReferenceMapInput!]
    geopoint: GeoPoint
  }
  input DeleteTestInput {
    clientMutationId: String!
    id: ID!
  }
  input AddTestReferenceToTestReferenceListInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: TestReferenceInput
  }
  input RemoveTestReferenceFromTestReferenceListInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input AddTestReferenceToTestReferenceSetInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: TestReferenceInput
  }
  input RemoveTestReferenceFromTestReferenceSetInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input AddEntryToTestReferenceMapInput {
    clientMutationId: String!
    id: ID!
    entryIds: StringTestReferenceMapInputIds
    entry: StringTestReferenceMapInput
  }
  input RemoveEntryFromTestReferenceMapInput {
    clientMutationId: String!
    id: ID!
    entryIds: StringTestReferenceMapInputIds
  }
  input AddStringToTestStringListInput {
    clientMutationId: String!
    id: ID!
    entry: String
  }
  input RemoveStringFromTestStringListInput {
    clientMutationId: String!
    id: ID!
    entry: String
  }
  input AddStringToTestStringSetInput {
    clientMutationId: String!
    id: ID!
    entry: String
  }
  input RemoveStringFromTestStringSetInput {
    clientMutationId: String!
    id: ID!
    entry: String
  }
  input AddEntryToTestStringMapInput {
    clientMutationId: String!
    id: ID!
    entry: StringStringMapInput
  }
  input RemoveEntryFromTestStringMapInput {
    clientMutationId: String!
    id: ID!
    entry: StringStringMapInput
  }
  input AddEmbeddedToTestEmbeddedListInput {
    clientMutationId: String!
    id: ID!
    entry: EmbeddedInput
  }
  input RemoveEmbeddedFromTestEmbeddedListInput {
    clientMutationId: String!
    id: ID!
    entry: EmbeddedInput
  }
  input AddEntryToTestEmbeddedMapInput {
    clientMutationId: String!
    id: ID!
    entry: StringEmbeddedMapInput
  }
  input RemoveEntryFromTestEmbeddedMapInput {
    clientMutationId: String!
    id: ID!
    entry: StringEmbeddedMapInput
  }
  input AddEntryToTestRefRefMapInput {
    clientMutationId: String!
    id: ID!
    entryIds: TestReferenceTestReferenceMapInputIds
    entry: TestReferenceTestReferenceMapInput
  }
  input RemoveEntryFromTestRefRefMapInput {
    clientMutationId: String!
    id: ID!
    entryIds: TestReferenceTestReferenceMapInputIds
  }
  input QuestionInput {
    id: ID
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
    answersIds: [ID!]
    answers: [AnswerInput!]
  }
  input CreateQuestionInput {
    clientMutationId: String!
    id: ID
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
    answersIds: [ID!]
    answers: [AnswerInput!]
  }
  input UpdateQuestionInput {
    clientMutationId: String!
    id: ID!
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
    answersIds: [ID!]
    answers: [AnswerInput!]
  }
  input DeleteQuestionInput {
    clientMutationId: String!
    id: ID!
  }
  input AddAnswerToQuestionAnswersInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: AnswerInput
  }
  input RemoveAnswerFromQuestionAnswersInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input CommentInput {
    id: ID
    authorId: ID
    author: UserInput
    text: String
    created: Date
    parentId: ID
    parent: CommentInput
    postId: ID
    post: PostInput
    commentsIds: [ID!]
    comments: [CommentInput!]
  }
  input CreateCommentInput {
    clientMutationId: String!
    id: ID
    authorId: ID
    author: UserInput
    text: String
    created: Date
    parentId: ID
    parent: CommentInput
    postId: ID
    post: PostInput
    commentsIds: [ID!]
    comments: [CommentInput!]
  }
  input UpdateCommentInput {
    clientMutationId: String!
    id: ID!
    authorId: ID
    author: UserInput
    text: String
    created: Date
    parentId: ID
    parent: CommentInput
    postId: ID
    post: PostInput
    commentsIds: [ID!]
    comments: [CommentInput!]
  }
  input DeleteCommentInput {
    clientMutationId: String!
    id: ID!
  }
  input AddCommentToCommentCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: CommentInput
  }
  input RemoveCommentFromCommentCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input DeviceInput {
    id: ID
    deviceOs: String
  }
  input CreateDeviceInput {
    clientMutationId: String!
    id: ID
    deviceOs: String
  }
  input UpdateDeviceInput {
    clientMutationId: String!
    id: ID!
    deviceOs: String
  }
  input DeleteDeviceInput {
    clientMutationId: String!
    id: ID!
  }
  input TestReferenceInput {
    id: ID
    string: String
    referenceId: ID
    reference: TestReferenceInput
    map1: [StringStringMapInput!]
    map2Ids: [TestReferenceTestReferenceMapInputIds!]
    map2: [TestReferenceTestReferenceMapInput!]
    map3Ids: [StringTestReferenceMapInputIds!]
    map3: [StringTestReferenceMapInput!]
  }
  input CreateTestReferenceInput {
    clientMutationId: String!
    id: ID
    string: String
    referenceId: ID
    reference: TestReferenceInput
    map1: [StringStringMapInput!]
    map2Ids: [TestReferenceTestReferenceMapInputIds!]
    map2: [TestReferenceTestReferenceMapInput!]
    map3Ids: [StringTestReferenceMapInputIds!]
    map3: [StringTestReferenceMapInput!]
  }
  input UpdateTestReferenceInput {
    clientMutationId: String!
    id: ID!
    string: String
    referenceId: ID
    reference: TestReferenceInput
    map1: [StringStringMapInput!]
    map2Ids: [TestReferenceTestReferenceMapInputIds!]
    map2: [TestReferenceTestReferenceMapInput!]
    map3Ids: [StringTestReferenceMapInputIds!]
    map3: [StringTestReferenceMapInput!]
  }
  input DeleteTestReferenceInput {
    clientMutationId: String!
    id: ID!
  }
  input AddEntryToTestReferenceMap1Input {
    clientMutationId: String!
    id: ID!
    entry: StringStringMapInput
  }
  input RemoveEntryFromTestReferenceMap1Input {
    clientMutationId: String!
    id: ID!
    entry: StringStringMapInput
  }
  input AddEntryToTestReferenceMap2Input {
    clientMutationId: String!
    id: ID!
    entryIds: TestReferenceTestReferenceMapInputIds
    entry: TestReferenceTestReferenceMapInput
  }
  input RemoveEntryFromTestReferenceMap2Input {
    clientMutationId: String!
    id: ID!
    entryIds: TestReferenceTestReferenceMapInputIds
  }
  input AddEntryToTestReferenceMap3Input {
    clientMutationId: String!
    id: ID!
    entryIds: StringTestReferenceMapInputIds
    entry: StringTestReferenceMapInput
  }
  input RemoveEntryFromTestReferenceMap3Input {
    clientMutationId: String!
    id: ID!
    entryIds: StringTestReferenceMapInputIds
  }
  input PostInput {
    id: ID
    title: String
    authorId: ID
    author: UserInput
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    commentsIds: [ID!]
    comments: [CommentInput!]
    picture: String
  }
  input CreatePostInput {
    clientMutationId: String!
    id: ID
    title: String
    authorId: ID
    author: UserInput
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    commentsIds: [ID!]
    comments: [CommentInput!]
    picture: String
  }
  input UpdatePostInput {
    clientMutationId: String!
    id: ID!
    title: String
    authorId: ID
    author: UserInput
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    commentsIds: [ID!]
    comments: [CommentInput!]
    picture: String
  }
  input DeletePostInput {
    clientMutationId: String!
    id: ID!
  }
  input AddCommentToPostCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: CommentInput
  }
  input RemoveCommentFromPostCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input ReferenceInput {
    id: ID
    text: String
  }
  input CreateReferenceInput {
    clientMutationId: String!
    id: ID
    text: String
  }
  input UpdateReferenceInput {
    clientMutationId: String!
    id: ID!
    text: String
  }
  input DeleteReferenceInput {
    clientMutationId: String!
    id: ID!
  }
  input UserInput {
    id: ID
    username: String
    email: String
    name: String
    inactive: Boolean
    commentsIds: [ID!]
    comments: [CommentInput!]
    postsIds: [ID!]
    posts: [PostInput!]
    referenceId: ID
    reference: ReferenceInput
  }
  input CreateUserInput {
    clientMutationId: String!
    id: ID
    username: String
    email: String
    name: String
    inactive: Boolean
    commentsIds: [ID!]
    comments: [CommentInput!]
    postsIds: [ID!]
    posts: [PostInput!]
    referenceId: ID
    reference: ReferenceInput
  }
  input UpdateUserInput {
    clientMutationId: String!
    id: ID!
    username: String
    email: String
    name: String
    inactive: Boolean
    commentsIds: [ID!]
    comments: [CommentInput!]
    postsIds: [ID!]
    posts: [PostInput!]
    referenceId: ID
    reference: ReferenceInput
  }
  input DeleteUserInput {
    clientMutationId: String!
    id: ID!
  }
  input AddCommentToUserCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: CommentInput
  }
  input RemoveCommentFromUserCommentsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input AddPostToUserPostsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: PostInput
  }
  input RemovePostFromUserPostsInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  input EmbeddedInput {
    string: String
  }
  input AnswerInput {
    id: ID
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
  }
  input CreateAnswerInput {
    clientMutationId: String!
    id: ID
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
  }
  input UpdateAnswerInput {
    clientMutationId: String!
    id: ID!
    authorId: ID
    author: UserInput
    text: String
    upvotes: Int
  }
  input DeleteAnswerInput {
    clientMutationId: String!
    id: ID!
  }
  input RoleInput {
    id: ID
    name: String
    usersIds: [ID!]
    users: [UserInput!]
  }
  input CreateRoleInput {
    clientMutationId: String!
    id: ID
    name: String
    usersIds: [ID!]
    users: [UserInput!]
  }
  input UpdateRoleInput {
    clientMutationId: String!
    id: ID!
    name: String
    usersIds: [ID!]
    users: [UserInput!]
  }
  input DeleteRoleInput {
    clientMutationId: String!
    id: ID!
  }
  input AddUserToRoleUsersInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
    entry: UserInput
  }
  input RemoveUserFromRoleUsersInput {
    clientMutationId: String!
    id: ID!
    entryId: ID
  }
  type CreateTestPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type UpdateTestPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type DeleteTestPayload {
    clientMutationId: String!
    id: ID!
  }
  type AddTestReferenceToTestReferenceListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveTestReferenceFromTestReferenceListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddTestReferenceToTestReferenceSetPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveTestReferenceFromTestReferenceSetPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddEntryToTestReferenceMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveEntryFromTestReferenceMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddStringToTestStringListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveStringFromTestStringListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddStringToTestStringSetPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveStringFromTestStringSetPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddEntryToTestStringMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveEntryFromTestStringMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddEmbeddedToTestEmbeddedListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveEmbeddedFromTestEmbeddedListPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddEntryToTestEmbeddedMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveEntryFromTestEmbeddedMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type AddEntryToTestRefRefMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type RemoveEntryFromTestRefRefMapPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    double: Float
    integer: Int
    boolean: Boolean
    datetime: Date
    date: Date
    time: Date
    array: JSON
    json: JSON
    reference: TestReference
    embedded: Embedded
    referenceList(first: Int, after: String, last: Int, before: String): TestReferenceConnection
    referenceSet: [TestReference]
    referenceMap: [StringTestReferenceMapEntry]
    stringList(first: Int, after: String, last: Int, before: String): StringConnection
    stringSet: [String]
    stringMap: [StringStringMapEntry]
    embeddedList(first: Int, after: String, last: Int, before: String): EmbeddedConnection
    embeddedMap: [StringEmbeddedMapEntry]
    refRefMap: [TestReferenceTestReferenceMapEntry]
    geopoint: GeoPoint
  }
  type CreateQuestionPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
    answers(first: Int, after: String, last: Int, before: String): AnswerConnection
  }
  type UpdateQuestionPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
    answers(first: Int, after: String, last: Int, before: String): AnswerConnection
  }
  type DeleteQuestionPayload {
    clientMutationId: String!
    id: ID!
  }
  type AddAnswerToQuestionAnswersPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
    answers(first: Int, after: String, last: Int, before: String): AnswerConnection
  }
  type RemoveAnswerFromQuestionAnswersPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
    answers(first: Int, after: String, last: Int, before: String): AnswerConnection
  }
  type CreateCommentPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    created: Date
    parent: Comment
    post: Post
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
  }
  type UpdateCommentPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    created: Date
    parent: Comment
    post: Post
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
  }
  type DeleteCommentPayload {
    clientMutationId: String!
    id: ID!
  }
  type AddCommentToCommentCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    created: Date
    parent: Comment
    post: Post
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
  }
  type RemoveCommentFromCommentCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    created: Date
    parent: Comment
    post: Post
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
  }
  type CreateDevicePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    deviceOs: String
  }
  type UpdateDevicePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    deviceOs: String
  }
  type DeleteDevicePayload {
    clientMutationId: String!
    id: ID!
  }
  type CreateTestReferencePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type UpdateTestReferencePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type DeleteTestReferencePayload {
    clientMutationId: String!
    id: ID!
  }
  type AddEntryToTestReferenceMap1Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type RemoveEntryFromTestReferenceMap1Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type AddEntryToTestReferenceMap2Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type RemoveEntryFromTestReferenceMap2Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type AddEntryToTestReferenceMap3Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type RemoveEntryFromTestReferenceMap3Payload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    string: String
    reference: TestReference
    map1: [StringStringMapEntry]
    map2: [TestReferenceTestReferenceMapEntry]
    map3: [StringTestReferenceMapEntry]
  }
  type CreatePostPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    title: String
    author: User
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    picture: String
  }
  type UpdatePostPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    title: String
    author: User
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    picture: String
  }
  type DeletePostPayload {
    clientMutationId: String!
    id: ID!
  }
  type AddCommentToPostCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    title: String
    author: User
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    picture: String
  }
  type RemoveCommentFromPostCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    title: String
    author: User
    created: Date
    url: String
    text: String
    type: String
    score: Int
    descendants: Int
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    picture: String
  }
  type CreateReferencePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    text: String
  }
  type UpdateReferencePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    text: String
  }
  type DeleteReferencePayload {
    clientMutationId: String!
    id: ID!
  }
  type CreateUserPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type UpdateUserPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type DeleteUserPayload {
    clientMutationId: String!
    id: ID!
  }
  type AddCommentToUserCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type RemoveCommentFromUserCommentsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type AddPostToUserPostsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type RemovePostFromUserPostsPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    username: String
    email: String
    name: String
    inactive: Boolean
    comments(first: Int, after: String, last: Int, before: String): CommentConnection
    posts(first: Int, after: String, last: Int, before: String): PostConnection
    reference: Reference
  }
  type CreateAnswerPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
  }
  type UpdateAnswerPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    author: User
    text: String
    upvotes: Int
  }
  type DeleteAnswerPayload {
    clientMutationId: String!
    id: ID!
  }
  type CreateRolePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    name: String
    users: [User]
  }
  type UpdateRolePayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    name: String
    users: [User]
  }
  type DeleteRolePayload {
    clientMutationId: String!
    id: ID!
  }
  type AddUserToRoleUsersPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    name: String
    users: [User]
  }
  type RemoveUserFromRoleUsersPayload {
    clientMutationId: String!
    id: ID!
    version: Int
    acl: JSON
    createdAt: Date
    updatedAt: Date
    name: String
    users: [User]
  }
  extend type Query {
    Test(id: ID!): Test
    allTests(filter: TestFilter, sortBy: TestSortBy, first: Int, after: String, last: Int, before: String): TestConnection
    Question(id: ID!): Question
    allQuestions(filter: QuestionFilter, sortBy: QuestionSortBy, first: Int, after: String, last: Int, before: String): QuestionConnection
    Comment(id: ID!): Comment
    allComments(filter: CommentFilter, sortBy: CommentSortBy, first: Int, after: String, last: Int, before: String): CommentConnection
    Device(id: ID!): Device
    allDevices(filter: DeviceFilter, sortBy: DeviceSortBy, first: Int, after: String, last: Int, before: String): DeviceConnection
    TestReference(id: ID!): TestReference
    allTestReferences(filter: TestReferenceFilter, sortBy: TestReferenceSortBy, first: Int, after: String, last: Int, before: String): TestReferenceConnection
    Post(id: ID!): Post
    allPosts(filter: PostFilter, sortBy: PostSortBy, first: Int, after: String, last: Int, before: String): PostConnection
    Reference(id: ID!): Reference
    allReferences(filter: ReferenceFilter, sortBy: ReferenceSortBy, first: Int, after: String, last: Int, before: String): ReferenceConnection
    User(id: ID!): User
    allUsers(filter: UserFilter, sortBy: UserSortBy, first: Int, after: String, last: Int, before: String): UserConnection
    Answer(id: ID!): Answer
    allAnswers(filter: AnswerFilter, sortBy: AnswerSortBy, first: Int, after: String, last: Int, before: String): AnswerConnection
    Role(id: ID!): Role
    allRoles(filter: RoleFilter, sortBy: RoleSortBy, first: Int, after: String, last: Int, before: String): RoleConnection
  }
  type Mutation {
    createTest(input: CreateTestInput): CreateTestPayload
    updateTest(input: UpdateTestInput): UpdateTestPayload
    deleteTest(input: DeleteTestInput): DeleteTestPayload
    addTestReferenceToTestReferenceList(input: AddTestReferenceToTestReferenceListInput): AddTestReferenceToTestReferenceListPayload
    removeTestReferenceFromTestReferenceList(input: RemoveTestReferenceFromTestReferenceListInput): RemoveTestReferenceFromTestReferenceListPayload
    addTestReferenceToTestReferenceSet(input: AddTestReferenceToTestReferenceSetInput): AddTestReferenceToTestReferenceSetPayload
    removeTestReferenceFromTestReferenceSet(input: RemoveTestReferenceFromTestReferenceSetInput): RemoveTestReferenceFromTestReferenceSetPayload
    addEntryToTestReferenceMap(input: AddEntryToTestReferenceMapInput): AddEntryToTestReferenceMapPayload
    removeEntryFromTestReferenceMap(input: RemoveEntryFromTestReferenceMapInput): RemoveEntryFromTestReferenceMapPayload
    addStringToTestStringList(input: AddStringToTestStringListInput): AddStringToTestStringListPayload
    removeStringFromTestStringList(input: RemoveStringFromTestStringListInput): RemoveStringFromTestStringListPayload
    addStringToTestStringSet(input: AddStringToTestStringSetInput): AddStringToTestStringSetPayload
    removeStringFromTestStringSet(input: RemoveStringFromTestStringSetInput): RemoveStringFromTestStringSetPayload
    addEntryToTestStringMap(input: AddEntryToTestStringMapInput): AddEntryToTestStringMapPayload
    removeEntryFromTestStringMap(input: RemoveEntryFromTestStringMapInput): RemoveEntryFromTestStringMapPayload
    addEmbeddedToTestEmbeddedList(input: AddEmbeddedToTestEmbeddedListInput): AddEmbeddedToTestEmbeddedListPayload
    removeEmbeddedFromTestEmbeddedList(input: RemoveEmbeddedFromTestEmbeddedListInput): RemoveEmbeddedFromTestEmbeddedListPayload
    addEntryToTestEmbeddedMap(input: AddEntryToTestEmbeddedMapInput): AddEntryToTestEmbeddedMapPayload
    removeEntryFromTestEmbeddedMap(input: RemoveEntryFromTestEmbeddedMapInput): RemoveEntryFromTestEmbeddedMapPayload
    addEntryToTestRefRefMap(input: AddEntryToTestRefRefMapInput): AddEntryToTestRefRefMapPayload
    removeEntryFromTestRefRefMap(input: RemoveEntryFromTestRefRefMapInput): RemoveEntryFromTestRefRefMapPayload
    createQuestion(input: CreateQuestionInput): CreateQuestionPayload
    updateQuestion(input: UpdateQuestionInput): UpdateQuestionPayload
    deleteQuestion(input: DeleteQuestionInput): DeleteQuestionPayload
    addAnswerToQuestionAnswers(input: AddAnswerToQuestionAnswersInput): AddAnswerToQuestionAnswersPayload
    removeAnswerFromQuestionAnswers(input: RemoveAnswerFromQuestionAnswersInput): RemoveAnswerFromQuestionAnswersPayload
    createComment(input: CreateCommentInput): CreateCommentPayload
    updateComment(input: UpdateCommentInput): UpdateCommentPayload
    deleteComment(input: DeleteCommentInput): DeleteCommentPayload
    addCommentToCommentComments(input: AddCommentToCommentCommentsInput): AddCommentToCommentCommentsPayload
    removeCommentFromCommentComments(input: RemoveCommentFromCommentCommentsInput): RemoveCommentFromCommentCommentsPayload
    createDevice(input: CreateDeviceInput): CreateDevicePayload
    updateDevice(input: UpdateDeviceInput): UpdateDevicePayload
    deleteDevice(input: DeleteDeviceInput): DeleteDevicePayload
    createTestReference(input: CreateTestReferenceInput): CreateTestReferencePayload
    updateTestReference(input: UpdateTestReferenceInput): UpdateTestReferencePayload
    deleteTestReference(input: DeleteTestReferenceInput): DeleteTestReferencePayload
    addEntryToTestReferenceMap1(input: AddEntryToTestReferenceMap1Input): AddEntryToTestReferenceMap1Payload
    removeEntryFromTestReferenceMap1(input: RemoveEntryFromTestReferenceMap1Input): RemoveEntryFromTestReferenceMap1Payload
    addEntryToTestReferenceMap2(input: AddEntryToTestReferenceMap2Input): AddEntryToTestReferenceMap2Payload
    removeEntryFromTestReferenceMap2(input: RemoveEntryFromTestReferenceMap2Input): RemoveEntryFromTestReferenceMap2Payload
    addEntryToTestReferenceMap3(input: AddEntryToTestReferenceMap3Input): AddEntryToTestReferenceMap3Payload
    removeEntryFromTestReferenceMap3(input: RemoveEntryFromTestReferenceMap3Input): RemoveEntryFromTestReferenceMap3Payload
    createPost(input: CreatePostInput): CreatePostPayload
    updatePost(input: UpdatePostInput): UpdatePostPayload
    deletePost(input: DeletePostInput): DeletePostPayload
    addCommentToPostComments(input: AddCommentToPostCommentsInput): AddCommentToPostCommentsPayload
    removeCommentFromPostComments(input: RemoveCommentFromPostCommentsInput): RemoveCommentFromPostCommentsPayload
    createReference(input: CreateReferenceInput): CreateReferencePayload
    updateReference(input: UpdateReferenceInput): UpdateReferencePayload
    deleteReference(input: DeleteReferenceInput): DeleteReferencePayload
    createUser(input: CreateUserInput): CreateUserPayload
    updateUser(input: UpdateUserInput): UpdateUserPayload
    deleteUser(input: DeleteUserInput): DeleteUserPayload
    addCommentToUserComments(input: AddCommentToUserCommentsInput): AddCommentToUserCommentsPayload
    removeCommentFromUserComments(input: RemoveCommentFromUserCommentsInput): RemoveCommentFromUserCommentsPayload
    addPostToUserPosts(input: AddPostToUserPostsInput): AddPostToUserPostsPayload
    removePostFromUserPosts(input: RemovePostFromUserPostsInput): RemovePostFromUserPostsPayload
    createAnswer(input: CreateAnswerInput): CreateAnswerPayload
    updateAnswer(input: UpdateAnswerInput): UpdateAnswerPayload
    deleteAnswer(input: DeleteAnswerInput): DeleteAnswerPayload
    createRole(input: CreateRoleInput): CreateRolePayload
    updateRole(input: UpdateRoleInput): UpdateRolePayload
    deleteRole(input: DeleteRoleInput): DeleteRolePayload
    addUserToRoleUsers(input: AddUserToRoleUsersInput): AddUserToRoleUsersPayload
    removeUserFromRoleUsers(input: RemoveUserFromRoleUsersInput): RemoveUserFromRoleUsersPayload
  }
`
export default typeDefs