import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'lib/apolloClient';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A type that describes a beer. */
export type Beer = {
  __typename?: 'beer';
  abv?: Maybe<Scalars['Float']>;
  beerLabel?: Maybe<Scalars['String']>;
  brewery?: Maybe<Scalars['String']>;
  breweryLabel?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  checkinDate?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  ibu?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  salesStartDate?: Maybe<Scalars['String']>;
  stockType?: Maybe<Scalars['String']>;
  stockTypeId?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  supplier?: Maybe<Scalars['String']>;
  systembolagetArticleId?: Maybe<Scalars['Int']>;
  systembolagetId?: Maybe<Scalars['Int']>;
  systembolagetUrl?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  untappdDeepLink?: Maybe<Scalars['String']>;
  untappdId?: Maybe<Scalars['Int']>;
  untappdUrl?: Maybe<Scalars['String']>;
  userRating?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
};

/** A type that describes a user. */
export type User = {
  __typename?: 'user';
  admin: Scalars['Boolean'];
  avatar: Scalars['String'];
  name: Scalars['String'];
  id: Scalars['Int'];
  totalBeers: Scalars['Int'];
};

/** A type that describes a named list of beers. */
export type List = {
  __typename?: 'list';
  beers?: Maybe<Array<Maybe<Beer>>>;
  name?: Maybe<Scalars['String']>;
};

/** A type that describes a stock. */
export type Stock = {
  __typename?: 'stock';
  name: Scalars['String'];
  nrOfBeers: Scalars['Int'];
  nextRelease: Scalars['String'];
  nextReleaseTimestamp: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  /** The lates [size] beers of the [stockType] decoreted with untappd data */
  decoratedLatest?: Maybe<List>;
  /** The recommended [size] beers */
  recommended?: Maybe<List>;
  /** The [size] latest beers from systembolaget */
  systembolagetLatest?: Maybe<Array<Maybe<Beer>>>;
  /** The [size] latest beers from systembolaget */
  systembolagetSearch?: Maybe<Array<Maybe<Beer>>>;
  /** The avaliable stock-types in systembolaget */
  systembolagetStock: Array<Maybe<Stock>>;
  /** Search untappd using the [id] */
  untappdById?: Maybe<Beer>;
  /** The users friends */
  untappdFriends?: Maybe<Array<Maybe<User>>>;
  /** Check if the user is a friend to the admin */
  untappdIsFriend?: Maybe<Scalars['Boolean']>;
  /** Search untappd using a [query] */
  untappdSearch?: Maybe<Array<Maybe<Beer>>>;
  /** The untappd user */
  untappdUser: User;
  /** The users latest checkins */
  untappdUserBeers?: Maybe<Array<Maybe<Beer>>>;
};


export type QueryDecoratedLatestArgs = {
  size?: Maybe<Scalars['Int']>;
  stockType?: Maybe<Scalars['String']>;
};


export type QueryRecommendedArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type QuerySystembolagetLatestArgs = {
  size?: Maybe<Scalars['Int']>;
};


export type QuerySystembolagetSearchArgs = {
  searchType?: Maybe<Scalars['String']>;
  sortType?: Maybe<Scalars['String']>;
  searchString?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
};


export type QueryUntappdByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUntappdSearchArgs = {
  query: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Delete the beer with [systembolagetArticleId] */
  deleteBeer: Scalars['Boolean'];
  /** Set [untappdId] on beer with [systembolagetArticleId] */
  updateUntappdId: Scalars['Boolean'];
};


export type MutationDeleteBeerArgs = {
  systembolagetArticleId: Scalars['Int'];
};


export type MutationUpdateUntappdIdArgs = {
  systembolagetArticleId: Scalars['Int'];
  untappdId: Scalars['Int'];
};

export type UpdateUntappdIdMutationVariables = {
  systembolagetArticleId: Scalars['Int'];
  untappdId: Scalars['Int'];
};


export type UpdateUntappdIdMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUntappdId'>
);

export type DeleteBeerMutationVariables = {
  systembolagetArticleId: Scalars['Int'];
};


export type DeleteBeerMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBeer'>
);

export type BeerFragmentFragment = (
  { __typename?: 'beer' }
  & Pick<Beer, 'id' | 'name' | 'beerLabel' | 'brewery' | 'userRating' | 'rating' | 'price' | 'abv' | 'salesStartDate' | 'checkinDate' | 'systembolagetId' | 'systembolagetArticleId' | 'untappdId' | 'untappdUrl' | 'untappdDeepLink' | 'type' | 'style' | 'country' | 'stockType' | 'systembolagetUrl' | 'ibu' | 'description'>
);

export type UntappdUserQueryVariables = {};


export type UntappdUserQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'untappdIsFriend'>
  & { untappdUser: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'totalBeers' | 'avatar'>
  ) }
);

export type UntappdUserBeersQueryVariables = {};


export type UntappdUserBeersQuery = (
  { __typename?: 'Query' }
  & { untappdUserBeers?: Maybe<Array<Maybe<(
    { __typename?: 'beer' }
    & BeerFragmentFragment
  )>>> }
);

export type StockQueryVariables = {};


export type StockQuery = (
  { __typename?: 'Query' }
  & { systembolagetStock: Array<Maybe<(
    { __typename?: 'stock' }
    & Pick<Stock, 'nrOfBeers' | 'name' | 'nextRelease'>
  )>> }
);

export type RecommemdedQueryVariables = {};


export type RecommemdedQuery = (
  { __typename?: 'Query' }
  & { recommended?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'name'>
    & { beers?: Maybe<Array<Maybe<(
      { __typename?: 'beer' }
      & BeerFragmentFragment
    )>>> }
  )>, untappdUser: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'admin'>
  ) }
);

export type DecoratedLatestQueryVariables = {
  stockType: Scalars['String'];
};


export type DecoratedLatestQuery = (
  { __typename?: 'Query' }
  & { decoratedLatest?: Maybe<(
    { __typename?: 'list' }
    & Pick<List, 'name'>
    & { beers?: Maybe<Array<Maybe<(
      { __typename?: 'beer' }
      & BeerFragmentFragment
    )>>> }
  )>, untappdUser: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'admin'>
  ) }
);

export type SearchQueryVariables = {
  searchString: Scalars['String'];
  searchType?: Maybe<Scalars['String']>;
  sortType?: Maybe<Scalars['String']>;
};


export type SearchQuery = (
  { __typename?: 'Query' }
  & { systembolagetSearch?: Maybe<Array<Maybe<(
    { __typename?: 'beer' }
    & BeerFragmentFragment
  )>>>, untappdUser: (
    { __typename?: 'user' }
    & Pick<User, 'id' | 'admin'>
  ) }
);

export const BeerFragmentFragmentDoc = gql`
    fragment BeerFragment on beer {
  id
  name
  beerLabel
  brewery
  userRating
  rating
  price
  abv
  salesStartDate
  checkinDate
  systembolagetId
  systembolagetArticleId
  untappdId
  untappdUrl
  untappdDeepLink
  type
  style
  country
  stockType
  systembolagetUrl
  ibu
  description
}
    `;
export const UpdateUntappdIdDocument = gql`
    mutation UpdateUntappdId($systembolagetArticleId: Int!, $untappdId: Int!) {
  updateUntappdId(systembolagetArticleId: $systembolagetArticleId, untappdId: $untappdId)
}
    `;
export type UpdateUntappdIdMutationFn = ApolloReactCommon.MutationFunction<UpdateUntappdIdMutation, UpdateUntappdIdMutationVariables>;

/**
 * __useUpdateUntappdIdMutation__
 *
 * To run a mutation, you first call `useUpdateUntappdIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUntappdIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUntappdIdMutation, { data, loading, error }] = useUpdateUntappdIdMutation({
 *   variables: {
 *      systembolagetArticleId: // value for 'systembolagetArticleId'
 *      untappdId: // value for 'untappdId'
 *   },
 * });
 */
export function useUpdateUntappdIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUntappdIdMutation, UpdateUntappdIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUntappdIdMutation, UpdateUntappdIdMutationVariables>(UpdateUntappdIdDocument, baseOptions);
      }
export type UpdateUntappdIdMutationHookResult = ReturnType<typeof useUpdateUntappdIdMutation>;
export type UpdateUntappdIdMutationResult = ApolloReactCommon.MutationResult<UpdateUntappdIdMutation>;
export type UpdateUntappdIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUntappdIdMutation, UpdateUntappdIdMutationVariables>;
export const DeleteBeerDocument = gql`
    mutation DeleteBeer($systembolagetArticleId: Int!) {
  deleteBeer(systembolagetArticleId: $systembolagetArticleId)
}
    `;
export type DeleteBeerMutationFn = ApolloReactCommon.MutationFunction<DeleteBeerMutation, DeleteBeerMutationVariables>;

/**
 * __useDeleteBeerMutation__
 *
 * To run a mutation, you first call `useDeleteBeerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBeerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBeerMutation, { data, loading, error }] = useDeleteBeerMutation({
 *   variables: {
 *      systembolagetArticleId: // value for 'systembolagetArticleId'
 *   },
 * });
 */
export function useDeleteBeerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBeerMutation, DeleteBeerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBeerMutation, DeleteBeerMutationVariables>(DeleteBeerDocument, baseOptions);
      }
export type DeleteBeerMutationHookResult = ReturnType<typeof useDeleteBeerMutation>;
export type DeleteBeerMutationResult = ApolloReactCommon.MutationResult<DeleteBeerMutation>;
export type DeleteBeerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBeerMutation, DeleteBeerMutationVariables>;
export const UntappdUserDocument = gql`
    query UntappdUser {
  untappdUser {
    id
    name
    totalBeers
    avatar
  }
  untappdIsFriend
}
    `;

/**
 * __useUntappdUserQuery__
 *
 * To run a query within a React component, call `useUntappdUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUntappdUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUntappdUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUntappdUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UntappdUserQuery, UntappdUserQueryVariables>) {
        return ApolloReactHooks.useQuery<UntappdUserQuery, UntappdUserQueryVariables>(UntappdUserDocument, baseOptions);
      }
export function useUntappdUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UntappdUserQuery, UntappdUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UntappdUserQuery, UntappdUserQueryVariables>(UntappdUserDocument, baseOptions);
        }
export type UntappdUserQueryHookResult = ReturnType<typeof useUntappdUserQuery>;
export type UntappdUserLazyQueryHookResult = ReturnType<typeof useUntappdUserLazyQuery>;
export type UntappdUserQueryResult = ApolloReactCommon.QueryResult<UntappdUserQuery, UntappdUserQueryVariables>;
export const UntappdUserBeersDocument = gql`
    query UntappdUserBeers {
  untappdUserBeers {
    ...BeerFragment
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useUntappdUserBeersQuery__
 *
 * To run a query within a React component, call `useUntappdUserBeersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUntappdUserBeersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUntappdUserBeersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUntappdUserBeersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UntappdUserBeersQuery, UntappdUserBeersQueryVariables>) {
        return ApolloReactHooks.useQuery<UntappdUserBeersQuery, UntappdUserBeersQueryVariables>(UntappdUserBeersDocument, baseOptions);
      }
export function useUntappdUserBeersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UntappdUserBeersQuery, UntappdUserBeersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UntappdUserBeersQuery, UntappdUserBeersQueryVariables>(UntappdUserBeersDocument, baseOptions);
        }
export type UntappdUserBeersQueryHookResult = ReturnType<typeof useUntappdUserBeersQuery>;
export type UntappdUserBeersLazyQueryHookResult = ReturnType<typeof useUntappdUserBeersLazyQuery>;
export type UntappdUserBeersQueryResult = ApolloReactCommon.QueryResult<UntappdUserBeersQuery, UntappdUserBeersQueryVariables>;
export const StockDocument = gql`
    query Stock {
  systembolagetStock {
    nrOfBeers
    name
    nextRelease
  }
}
    `;

/**
 * __useStockQuery__
 *
 * To run a query within a React component, call `useStockQuery` and pass it any options that fit your needs.
 * When your component renders, `useStockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStockQuery({
 *   variables: {
 *   },
 * });
 */
export function useStockQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StockQuery, StockQueryVariables>) {
        return ApolloReactHooks.useQuery<StockQuery, StockQueryVariables>(StockDocument, baseOptions);
      }
export function useStockLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StockQuery, StockQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StockQuery, StockQueryVariables>(StockDocument, baseOptions);
        }
export type StockQueryHookResult = ReturnType<typeof useStockQuery>;
export type StockLazyQueryHookResult = ReturnType<typeof useStockLazyQuery>;
export type StockQueryResult = ApolloReactCommon.QueryResult<StockQuery, StockQueryVariables>;
export const RecommemdedDocument = gql`
    query Recommemded {
  recommended(size: 40) {
    name
    beers {
      ...BeerFragment
    }
  }
  untappdUser {
    id
    admin
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useRecommemdedQuery__
 *
 * To run a query within a React component, call `useRecommemdedQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommemdedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommemdedQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommemdedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RecommemdedQuery, RecommemdedQueryVariables>) {
        return ApolloReactHooks.useQuery<RecommemdedQuery, RecommemdedQueryVariables>(RecommemdedDocument, baseOptions);
      }
export function useRecommemdedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RecommemdedQuery, RecommemdedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RecommemdedQuery, RecommemdedQueryVariables>(RecommemdedDocument, baseOptions);
        }
export type RecommemdedQueryHookResult = ReturnType<typeof useRecommemdedQuery>;
export type RecommemdedLazyQueryHookResult = ReturnType<typeof useRecommemdedLazyQuery>;
export type RecommemdedQueryResult = ApolloReactCommon.QueryResult<RecommemdedQuery, RecommemdedQueryVariables>;
export const DecoratedLatestDocument = gql`
    query DecoratedLatest($stockType: String!) {
  decoratedLatest(size: 120, stockType: $stockType) {
    name
    beers {
      ...BeerFragment
    }
  }
  untappdUser {
    id
    admin
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useDecoratedLatestQuery__
 *
 * To run a query within a React component, call `useDecoratedLatestQuery` and pass it any options that fit your needs.
 * When your component renders, `useDecoratedLatestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDecoratedLatestQuery({
 *   variables: {
 *      stockType: // value for 'stockType'
 *   },
 * });
 */
export function useDecoratedLatestQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DecoratedLatestQuery, DecoratedLatestQueryVariables>) {
        return ApolloReactHooks.useQuery<DecoratedLatestQuery, DecoratedLatestQueryVariables>(DecoratedLatestDocument, baseOptions);
      }
export function useDecoratedLatestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DecoratedLatestQuery, DecoratedLatestQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DecoratedLatestQuery, DecoratedLatestQueryVariables>(DecoratedLatestDocument, baseOptions);
        }
export type DecoratedLatestQueryHookResult = ReturnType<typeof useDecoratedLatestQuery>;
export type DecoratedLatestLazyQueryHookResult = ReturnType<typeof useDecoratedLatestLazyQuery>;
export type DecoratedLatestQueryResult = ApolloReactCommon.QueryResult<DecoratedLatestQuery, DecoratedLatestQueryVariables>;
export const SearchDocument = gql`
    query Search($searchString: String!, $searchType: String, $sortType: String) {
  systembolagetSearch(searchString: $searchString, sortType: $sortType, searchType: $searchType, size: 100) {
    ...BeerFragment
  }
  untappdUser {
    id
    admin
  }
}
    ${BeerFragmentFragmentDoc}`;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      searchString: // value for 'searchString'
 *      searchType: // value for 'searchType'
 *      sortType: // value for 'sortType'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  beer: ResolverTypeWrapper<Beer>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  user: ResolverTypeWrapper<User>;
  list: ResolverTypeWrapper<List>;
  stock: ResolverTypeWrapper<Stock>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  beer: Beer;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  user: User;
  list: List;
  stock: Stock;
  Query: {};
  ID: Scalars['ID'];
  Mutation: {};
}>;

export type BeerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['beer'] = ResolversParentTypes['beer']> = ResolversObject<{
  abv?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  beerLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  brewery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  breweryLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  checkinDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ibu?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  salesStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  style?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supplier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  systembolagetArticleId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  systembolagetId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  systembolagetUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  untappdDeepLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  untappdId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  untappdUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userRating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = ResolversObject<{
  admin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalBeers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ListResolvers<ContextType = Context, ParentType extends ResolversParentTypes['list'] = ResolversParentTypes['list']> = ResolversObject<{
  beers?: Resolver<Maybe<Array<Maybe<ResolversTypes['beer']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type StockResolvers<ContextType = Context, ParentType extends ResolversParentTypes['stock'] = ResolversParentTypes['stock']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nrOfBeers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nextRelease?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nextReleaseTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  decoratedLatest?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, RequireFields<QueryDecoratedLatestArgs, never>>;
  recommended?: Resolver<Maybe<ResolversTypes['list']>, ParentType, ContextType, RequireFields<QueryRecommendedArgs, never>>;
  systembolagetLatest?: Resolver<Maybe<Array<Maybe<ResolversTypes['beer']>>>, ParentType, ContextType, RequireFields<QuerySystembolagetLatestArgs, never>>;
  systembolagetSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['beer']>>>, ParentType, ContextType, RequireFields<QuerySystembolagetSearchArgs, never>>;
  systembolagetStock?: Resolver<Array<Maybe<ResolversTypes['stock']>>, ParentType, ContextType>;
  untappdById?: Resolver<Maybe<ResolversTypes['beer']>, ParentType, ContextType, RequireFields<QueryUntappdByIdArgs, 'id'>>;
  untappdFriends?: Resolver<Maybe<Array<Maybe<ResolversTypes['user']>>>, ParentType, ContextType>;
  untappdIsFriend?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  untappdSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['beer']>>>, ParentType, ContextType, RequireFields<QueryUntappdSearchArgs, 'query'>>;
  untappdUser?: Resolver<ResolversTypes['user'], ParentType, ContextType>;
  untappdUserBeers?: Resolver<Maybe<Array<Maybe<ResolversTypes['beer']>>>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deleteBeer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBeerArgs, 'systembolagetArticleId'>>;
  updateUntappdId?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUntappdIdArgs, 'systembolagetArticleId' | 'untappdId'>>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  beer?: BeerResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
  list?: ListResolvers<ContextType>;
  stock?: StockResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
