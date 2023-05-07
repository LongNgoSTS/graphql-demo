import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  author: Profile;
  body: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  favorited: Scalars['Boolean'];
  favoritesCount: Scalars['Int'];
  slug: Scalars['String'];
  tagList?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor: Scalars['String'];
  node?: Maybe<Article>;
};

export type ArticlePayload = {
  __typename?: 'ArticlePayload';
  article?: Maybe<Article>;
};

export type ArticlesConnection = {
  __typename?: 'ArticlesConnection';
  count: Scalars['Int'];
  edges?: Maybe<Array<Maybe<ArticleEdge>>>;
  pageInfo: PageInfo;
};

export type CreateArticleInput = {
  body: Scalars['String'];
  description: Scalars['String'];
  tagList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type DeletionStatus = {
  __typename?: 'DeletionStatus';
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticle?: Maybe<ArticlePayload>;
  createUser?: Maybe<UserPayload>;
  deleteArticle?: Maybe<DeletionStatus>;
  favoriteArticle?: Maybe<ArticlePayload>;
  followUser?: Maybe<ProfilePayload>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  unfollowUser?: Maybe<ProfilePayload>;
  updateArticle?: Maybe<ArticlePayload>;
  updateUser?: Maybe<UserPayload>;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteArticleArgs = {
  slug: Scalars['String'];
};


export type MutationFavoriteArticleArgs = {
  slug: Scalars['String'];
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  changes: UpdateArticleInput;
  slug: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  changes: UpdateUserInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  articles?: Maybe<ArticlesConnection>;
  bio?: Maybe<Scalars['String']>;
  favorites?: Maybe<ArticlesConnection>;
  feed?: Maybe<ArticlesConnection>;
  following: Scalars['Boolean'];
  image?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type ProfileArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ProfileFavoritesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ProfileFeedArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type ProfilePayload = {
  __typename?: 'ProfilePayload';
  profile?: Maybe<Profile>;
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<ArticlesConnection>;
  profile?: Maybe<Profile>;
};


export type QueryArticleArgs = {
  slug: Scalars['String'];
};


export type QueryArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  authoredBy?: InputMaybe<Scalars['String']>;
  favoritedBy?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  withTag?: InputMaybe<Scalars['String']>;
};


export type QueryProfileArgs = {
  username: Scalars['String'];
};

export type UpdateArticleInput = {
  body?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  profile: Profile;
  token: Scalars['String'];
  username: Scalars['String'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  user?: Maybe<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<Article>;
  ArticleEdge: ResolverTypeWrapper<ArticleEdge>;
  ArticlePayload: ResolverTypeWrapper<ArticlePayload>;
  ArticlesConnection: ResolverTypeWrapper<ArticlesConnection>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateArticleInput: CreateArticleInput;
  CreateUserInput: CreateUserInput;
  DeletionStatus: ResolverTypeWrapper<DeletionStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfilePayload: ResolverTypeWrapper<ProfilePayload>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateArticleInput: UpdateArticleInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolverTypeWrapper<UserPayload>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: Article;
  ArticleEdge: ArticleEdge;
  ArticlePayload: ArticlePayload;
  ArticlesConnection: ArticlesConnection;
  Boolean: Scalars['Boolean'];
  CreateArticleInput: CreateArticleInput;
  CreateUserInput: CreateUserInput;
  DeletionStatus: DeletionStatus;
  Int: Scalars['Int'];
  Mutation: {};
  PageInfo: PageInfo;
  Profile: Profile;
  ProfilePayload: ProfilePayload;
  Query: {};
  String: Scalars['String'];
  UpdateArticleInput: UpdateArticleInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserPayload: UserPayload;
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  author?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favorited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  favoritesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tagList?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleEdge'] = ResolversParentTypes['ArticleEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticlePayload'] = ResolversParentTypes['ArticlePayload']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticlesConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticlesConnection'] = ResolversParentTypes['ArticlesConnection']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletionStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletionStatus'] = ResolversParentTypes['DeletionStatus']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createArticle?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<MutationCreateArticleArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  deleteArticle?: Resolver<Maybe<ResolversTypes['DeletionStatus']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'slug'>>;
  favoriteArticle?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<MutationFavoriteArticleArgs, 'slug'>>;
  followUser?: Resolver<Maybe<ResolversTypes['ProfilePayload']>, ParentType, ContextType, RequireFields<MutationFollowUserArgs, 'username'>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  unfollowUser?: Resolver<Maybe<ResolversTypes['ProfilePayload']>, ParentType, ContextType, RequireFields<MutationUnfollowUserArgs, 'username'>>;
  updateArticle?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'changes' | 'slug'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'changes'>>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  articles?: Resolver<Maybe<ResolversTypes['ArticlesConnection']>, ParentType, ContextType, Partial<ProfileArticlesArgs>>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favorites?: Resolver<Maybe<ResolversTypes['ArticlesConnection']>, ParentType, ContextType, Partial<ProfileFavoritesArgs>>;
  feed?: Resolver<Maybe<ResolversTypes['ArticlesConnection']>, ParentType, ContextType, Partial<ProfileFeedArgs>>;
  following?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfilePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfilePayload'] = ResolversParentTypes['ProfilePayload']> = {
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, RequireFields<QueryArticleArgs, 'slug'>>;
  articles?: Resolver<Maybe<ResolversTypes['ArticlesConnection']>, ParentType, ContextType, Partial<QueryArticlesArgs>>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryProfileArgs, 'username'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']> = {
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>;
  ArticleEdge?: ArticleEdgeResolvers<ContextType>;
  ArticlePayload?: ArticlePayloadResolvers<ContextType>;
  ArticlesConnection?: ArticlesConnectionResolvers<ContextType>;
  DeletionStatus?: DeletionStatusResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfilePayload?: ProfilePayloadResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
};

