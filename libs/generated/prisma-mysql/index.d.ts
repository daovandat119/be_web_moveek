
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CinemaBrand
 * 
 */
export type CinemaBrand = $Result.DefaultSelection<Prisma.$CinemaBrandPayload>
/**
 * Model Provinces
 * 
 */
export type Provinces = $Result.DefaultSelection<Prisma.$ProvincesPayload>
/**
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  BRAND_MANAGER: 'BRAND_MANAGER',
  CINEMA_MANAGER: 'CINEMA_MANAGER',
  COUNTER_STAFF: 'COUNTER_STAFF',
  USER: 'USER',
  REVIEWER: 'REVIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CinemaBrands
 * const cinemaBrands = await prisma.cinemaBrand.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CinemaBrands
   * const cinemaBrands = await prisma.cinemaBrand.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cinemaBrand`: Exposes CRUD operations for the **CinemaBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CinemaBrands
    * const cinemaBrands = await prisma.cinemaBrand.findMany()
    * ```
    */
  get cinemaBrand(): Prisma.CinemaBrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provinces`: Exposes CRUD operations for the **Provinces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.provinces.findMany()
    * ```
    */
  get provinces(): Prisma.ProvincesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CinemaBrand: 'CinemaBrand',
    Provinces: 'Provinces',
    Cinema: 'Cinema',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cinemaBrand" | "provinces" | "cinema" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CinemaBrand: {
        payload: Prisma.$CinemaBrandPayload<ExtArgs>
        fields: Prisma.CinemaBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          findFirst: {
            args: Prisma.CinemaBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          findMany: {
            args: Prisma.CinemaBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>[]
          }
          create: {
            args: Prisma.CinemaBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          createMany: {
            args: Prisma.CinemaBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CinemaBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          update: {
            args: Prisma.CinemaBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          deleteMany: {
            args: Prisma.CinemaBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CinemaBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaBrandPayload>
          }
          aggregate: {
            args: Prisma.CinemaBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinemaBrand>
          }
          groupBy: {
            args: Prisma.CinemaBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaBrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaBrandCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaBrandCountAggregateOutputType> | number
          }
        }
      }
      Provinces: {
        payload: Prisma.$ProvincesPayload<ExtArgs>
        fields: Prisma.ProvincesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvincesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvincesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          findFirst: {
            args: Prisma.ProvincesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvincesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          findMany: {
            args: Prisma.ProvincesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>[]
          }
          create: {
            args: Prisma.ProvincesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          createMany: {
            args: Prisma.ProvincesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProvincesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          update: {
            args: Prisma.ProvincesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          deleteMany: {
            args: Prisma.ProvincesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvincesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProvincesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincesPayload>
          }
          aggregate: {
            args: Prisma.ProvincesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvinces>
          }
          groupBy: {
            args: Prisma.ProvincesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvincesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvincesCountArgs<ExtArgs>
            result: $Utils.Optional<ProvincesCountAggregateOutputType> | number
          }
        }
      }
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cinemaBrand?: CinemaBrandOmit
    provinces?: ProvincesOmit
    cinema?: CinemaOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CinemaBrandCountOutputType
   */

  export type CinemaBrandCountOutputType = {
    users: number
    cinemas: number
  }

  export type CinemaBrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CinemaBrandCountOutputTypeCountUsersArgs
    cinemas?: boolean | CinemaBrandCountOutputTypeCountCinemasArgs
  }

  // Custom InputTypes
  /**
   * CinemaBrandCountOutputType without action
   */
  export type CinemaBrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrandCountOutputType
     */
    select?: CinemaBrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaBrandCountOutputType without action
   */
  export type CinemaBrandCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CinemaBrandCountOutputType without action
   */
  export type CinemaBrandCountOutputTypeCountCinemasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
  }


  /**
   * Count Type ProvincesCountOutputType
   */

  export type ProvincesCountOutputType = {
    cinemas: number
  }

  export type ProvincesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinemas?: boolean | ProvincesCountOutputTypeCountCinemasArgs
  }

  // Custom InputTypes
  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvincesCountOutputType
     */
    select?: ProvincesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvincesCountOutputType without action
   */
  export type ProvincesCountOutputTypeCountCinemasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
  }


  /**
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    users: number
  }

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CinemaCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CinemaBrand
   */

  export type AggregateCinemaBrand = {
    _count: CinemaBrandCountAggregateOutputType | null
    _avg: CinemaBrandAvgAggregateOutputType | null
    _sum: CinemaBrandSumAggregateOutputType | null
    _min: CinemaBrandMinAggregateOutputType | null
    _max: CinemaBrandMaxAggregateOutputType | null
  }

  export type CinemaBrandAvgAggregateOutputType = {
    id: number | null
  }

  export type CinemaBrandSumAggregateOutputType = {
    id: number | null
  }

  export type CinemaBrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type CinemaBrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    logo: string | null
    createdAt: Date | null
  }

  export type CinemaBrandCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    logo: number
    createdAt: number
    _all: number
  }


  export type CinemaBrandAvgAggregateInputType = {
    id?: true
  }

  export type CinemaBrandSumAggregateInputType = {
    id?: true
  }

  export type CinemaBrandMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    createdAt?: true
  }

  export type CinemaBrandMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    createdAt?: true
  }

  export type CinemaBrandCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    logo?: true
    createdAt?: true
    _all?: true
  }

  export type CinemaBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CinemaBrand to aggregate.
     */
    where?: CinemaBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CinemaBrands to fetch.
     */
    orderBy?: CinemaBrandOrderByWithRelationInput | CinemaBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CinemaBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CinemaBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CinemaBrands
    **/
    _count?: true | CinemaBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaBrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaBrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaBrandMaxAggregateInputType
  }

  export type GetCinemaBrandAggregateType<T extends CinemaBrandAggregateArgs> = {
        [P in keyof T & keyof AggregateCinemaBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinemaBrand[P]>
      : GetScalarType<T[P], AggregateCinemaBrand[P]>
  }




  export type CinemaBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaBrandWhereInput
    orderBy?: CinemaBrandOrderByWithAggregationInput | CinemaBrandOrderByWithAggregationInput[]
    by: CinemaBrandScalarFieldEnum[] | CinemaBrandScalarFieldEnum
    having?: CinemaBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaBrandCountAggregateInputType | true
    _avg?: CinemaBrandAvgAggregateInputType
    _sum?: CinemaBrandSumAggregateInputType
    _min?: CinemaBrandMinAggregateInputType
    _max?: CinemaBrandMaxAggregateInputType
  }

  export type CinemaBrandGroupByOutputType = {
    id: number
    name: string
    slug: string
    logo: string | null
    createdAt: Date
    _count: CinemaBrandCountAggregateOutputType | null
    _avg: CinemaBrandAvgAggregateOutputType | null
    _sum: CinemaBrandSumAggregateOutputType | null
    _min: CinemaBrandMinAggregateOutputType | null
    _max: CinemaBrandMaxAggregateOutputType | null
  }

  type GetCinemaBrandGroupByPayload<T extends CinemaBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaBrandGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaBrandGroupByOutputType[P]>
        }
      >
    >


  export type CinemaBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    logo?: boolean
    createdAt?: boolean
    users?: boolean | CinemaBrand$usersArgs<ExtArgs>
    cinemas?: boolean | CinemaBrand$cinemasArgs<ExtArgs>
    _count?: boolean | CinemaBrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinemaBrand"]>



  export type CinemaBrandSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    logo?: boolean
    createdAt?: boolean
  }

  export type CinemaBrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "logo" | "createdAt", ExtArgs["result"]["cinemaBrand"]>
  export type CinemaBrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CinemaBrand$usersArgs<ExtArgs>
    cinemas?: boolean | CinemaBrand$cinemasArgs<ExtArgs>
    _count?: boolean | CinemaBrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CinemaBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CinemaBrand"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      cinemas: Prisma.$CinemaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      logo: string | null
      createdAt: Date
    }, ExtArgs["result"]["cinemaBrand"]>
    composites: {}
  }

  type CinemaBrandGetPayload<S extends boolean | null | undefined | CinemaBrandDefaultArgs> = $Result.GetResult<Prisma.$CinemaBrandPayload, S>

  type CinemaBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaBrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaBrandCountAggregateInputType | true
    }

  export interface CinemaBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CinemaBrand'], meta: { name: 'CinemaBrand' } }
    /**
     * Find zero or one CinemaBrand that matches the filter.
     * @param {CinemaBrandFindUniqueArgs} args - Arguments to find a CinemaBrand
     * @example
     * // Get one CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaBrandFindUniqueArgs>(args: SelectSubset<T, CinemaBrandFindUniqueArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CinemaBrand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaBrandFindUniqueOrThrowArgs} args - Arguments to find a CinemaBrand
     * @example
     * // Get one CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CinemaBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandFindFirstArgs} args - Arguments to find a CinemaBrand
     * @example
     * // Get one CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaBrandFindFirstArgs>(args?: SelectSubset<T, CinemaBrandFindFirstArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CinemaBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandFindFirstOrThrowArgs} args - Arguments to find a CinemaBrand
     * @example
     * // Get one CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CinemaBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CinemaBrands
     * const cinemaBrands = await prisma.cinemaBrand.findMany()
     * 
     * // Get first 10 CinemaBrands
     * const cinemaBrands = await prisma.cinemaBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaBrandWithIdOnly = await prisma.cinemaBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaBrandFindManyArgs>(args?: SelectSubset<T, CinemaBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CinemaBrand.
     * @param {CinemaBrandCreateArgs} args - Arguments to create a CinemaBrand.
     * @example
     * // Create one CinemaBrand
     * const CinemaBrand = await prisma.cinemaBrand.create({
     *   data: {
     *     // ... data to create a CinemaBrand
     *   }
     * })
     * 
     */
    create<T extends CinemaBrandCreateArgs>(args: SelectSubset<T, CinemaBrandCreateArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CinemaBrands.
     * @param {CinemaBrandCreateManyArgs} args - Arguments to create many CinemaBrands.
     * @example
     * // Create many CinemaBrands
     * const cinemaBrand = await prisma.cinemaBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaBrandCreateManyArgs>(args?: SelectSubset<T, CinemaBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CinemaBrand.
     * @param {CinemaBrandDeleteArgs} args - Arguments to delete one CinemaBrand.
     * @example
     * // Delete one CinemaBrand
     * const CinemaBrand = await prisma.cinemaBrand.delete({
     *   where: {
     *     // ... filter to delete one CinemaBrand
     *   }
     * })
     * 
     */
    delete<T extends CinemaBrandDeleteArgs>(args: SelectSubset<T, CinemaBrandDeleteArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CinemaBrand.
     * @param {CinemaBrandUpdateArgs} args - Arguments to update one CinemaBrand.
     * @example
     * // Update one CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaBrandUpdateArgs>(args: SelectSubset<T, CinemaBrandUpdateArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CinemaBrands.
     * @param {CinemaBrandDeleteManyArgs} args - Arguments to filter CinemaBrands to delete.
     * @example
     * // Delete a few CinemaBrands
     * const { count } = await prisma.cinemaBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaBrandDeleteManyArgs>(args?: SelectSubset<T, CinemaBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CinemaBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CinemaBrands
     * const cinemaBrand = await prisma.cinemaBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaBrandUpdateManyArgs>(args: SelectSubset<T, CinemaBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CinemaBrand.
     * @param {CinemaBrandUpsertArgs} args - Arguments to update or create a CinemaBrand.
     * @example
     * // Update or create a CinemaBrand
     * const cinemaBrand = await prisma.cinemaBrand.upsert({
     *   create: {
     *     // ... data to create a CinemaBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CinemaBrand we want to update
     *   }
     * })
     */
    upsert<T extends CinemaBrandUpsertArgs>(args: SelectSubset<T, CinemaBrandUpsertArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CinemaBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandCountArgs} args - Arguments to filter CinemaBrands to count.
     * @example
     * // Count the number of CinemaBrands
     * const count = await prisma.cinemaBrand.count({
     *   where: {
     *     // ... the filter for the CinemaBrands we want to count
     *   }
     * })
    **/
    count<T extends CinemaBrandCountArgs>(
      args?: Subset<T, CinemaBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CinemaBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CinemaBrandAggregateArgs>(args: Subset<T, CinemaBrandAggregateArgs>): Prisma.PrismaPromise<GetCinemaBrandAggregateType<T>>

    /**
     * Group by CinemaBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaBrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CinemaBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaBrandGroupByArgs['orderBy'] }
        : { orderBy?: CinemaBrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CinemaBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CinemaBrand model
   */
  readonly fields: CinemaBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CinemaBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends CinemaBrand$usersArgs<ExtArgs> = {}>(args?: Subset<T, CinemaBrand$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cinemas<T extends CinemaBrand$cinemasArgs<ExtArgs> = {}>(args?: Subset<T, CinemaBrand$cinemasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CinemaBrand model
   */
  interface CinemaBrandFieldRefs {
    readonly id: FieldRef<"CinemaBrand", 'Int'>
    readonly name: FieldRef<"CinemaBrand", 'String'>
    readonly slug: FieldRef<"CinemaBrand", 'String'>
    readonly logo: FieldRef<"CinemaBrand", 'String'>
    readonly createdAt: FieldRef<"CinemaBrand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CinemaBrand findUnique
   */
  export type CinemaBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter, which CinemaBrand to fetch.
     */
    where: CinemaBrandWhereUniqueInput
  }

  /**
   * CinemaBrand findUniqueOrThrow
   */
  export type CinemaBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter, which CinemaBrand to fetch.
     */
    where: CinemaBrandWhereUniqueInput
  }

  /**
   * CinemaBrand findFirst
   */
  export type CinemaBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter, which CinemaBrand to fetch.
     */
    where?: CinemaBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CinemaBrands to fetch.
     */
    orderBy?: CinemaBrandOrderByWithRelationInput | CinemaBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CinemaBrands.
     */
    cursor?: CinemaBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CinemaBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CinemaBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CinemaBrands.
     */
    distinct?: CinemaBrandScalarFieldEnum | CinemaBrandScalarFieldEnum[]
  }

  /**
   * CinemaBrand findFirstOrThrow
   */
  export type CinemaBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter, which CinemaBrand to fetch.
     */
    where?: CinemaBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CinemaBrands to fetch.
     */
    orderBy?: CinemaBrandOrderByWithRelationInput | CinemaBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CinemaBrands.
     */
    cursor?: CinemaBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CinemaBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CinemaBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CinemaBrands.
     */
    distinct?: CinemaBrandScalarFieldEnum | CinemaBrandScalarFieldEnum[]
  }

  /**
   * CinemaBrand findMany
   */
  export type CinemaBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter, which CinemaBrands to fetch.
     */
    where?: CinemaBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CinemaBrands to fetch.
     */
    orderBy?: CinemaBrandOrderByWithRelationInput | CinemaBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CinemaBrands.
     */
    cursor?: CinemaBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CinemaBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CinemaBrands.
     */
    skip?: number
    distinct?: CinemaBrandScalarFieldEnum | CinemaBrandScalarFieldEnum[]
  }

  /**
   * CinemaBrand create
   */
  export type CinemaBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * The data needed to create a CinemaBrand.
     */
    data: XOR<CinemaBrandCreateInput, CinemaBrandUncheckedCreateInput>
  }

  /**
   * CinemaBrand createMany
   */
  export type CinemaBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CinemaBrands.
     */
    data: CinemaBrandCreateManyInput | CinemaBrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CinemaBrand update
   */
  export type CinemaBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * The data needed to update a CinemaBrand.
     */
    data: XOR<CinemaBrandUpdateInput, CinemaBrandUncheckedUpdateInput>
    /**
     * Choose, which CinemaBrand to update.
     */
    where: CinemaBrandWhereUniqueInput
  }

  /**
   * CinemaBrand updateMany
   */
  export type CinemaBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CinemaBrands.
     */
    data: XOR<CinemaBrandUpdateManyMutationInput, CinemaBrandUncheckedUpdateManyInput>
    /**
     * Filter which CinemaBrands to update
     */
    where?: CinemaBrandWhereInput
    /**
     * Limit how many CinemaBrands to update.
     */
    limit?: number
  }

  /**
   * CinemaBrand upsert
   */
  export type CinemaBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * The filter to search for the CinemaBrand to update in case it exists.
     */
    where: CinemaBrandWhereUniqueInput
    /**
     * In case the CinemaBrand found by the `where` argument doesn't exist, create a new CinemaBrand with this data.
     */
    create: XOR<CinemaBrandCreateInput, CinemaBrandUncheckedCreateInput>
    /**
     * In case the CinemaBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaBrandUpdateInput, CinemaBrandUncheckedUpdateInput>
  }

  /**
   * CinemaBrand delete
   */
  export type CinemaBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    /**
     * Filter which CinemaBrand to delete.
     */
    where: CinemaBrandWhereUniqueInput
  }

  /**
   * CinemaBrand deleteMany
   */
  export type CinemaBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CinemaBrands to delete
     */
    where?: CinemaBrandWhereInput
    /**
     * Limit how many CinemaBrands to delete.
     */
    limit?: number
  }

  /**
   * CinemaBrand.users
   */
  export type CinemaBrand$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * CinemaBrand.cinemas
   */
  export type CinemaBrand$cinemasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    cursor?: CinemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * CinemaBrand without action
   */
  export type CinemaBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
  }


  /**
   * Model Provinces
   */

  export type AggregateProvinces = {
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  export type ProvincesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProvincesSumAggregateOutputType = {
    id: number | null
  }

  export type ProvincesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProvincesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
  }

  export type ProvincesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type ProvincesAvgAggregateInputType = {
    id?: true
  }

  export type ProvincesSumAggregateInputType = {
    id?: true
  }

  export type ProvincesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProvincesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type ProvincesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type ProvincesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to aggregate.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvincesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProvincesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProvincesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvincesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvincesMaxAggregateInputType
  }

  export type GetProvincesAggregateType<T extends ProvincesAggregateArgs> = {
        [P in keyof T & keyof AggregateProvinces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvinces[P]>
      : GetScalarType<T[P], AggregateProvinces[P]>
  }




  export type ProvincesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvincesWhereInput
    orderBy?: ProvincesOrderByWithAggregationInput | ProvincesOrderByWithAggregationInput[]
    by: ProvincesScalarFieldEnum[] | ProvincesScalarFieldEnum
    having?: ProvincesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvincesCountAggregateInputType | true
    _avg?: ProvincesAvgAggregateInputType
    _sum?: ProvincesSumAggregateInputType
    _min?: ProvincesMinAggregateInputType
    _max?: ProvincesMaxAggregateInputType
  }

  export type ProvincesGroupByOutputType = {
    id: number
    name: string
    slug: string
    _count: ProvincesCountAggregateOutputType | null
    _avg: ProvincesAvgAggregateOutputType | null
    _sum: ProvincesSumAggregateOutputType | null
    _min: ProvincesMinAggregateOutputType | null
    _max: ProvincesMaxAggregateOutputType | null
  }

  type GetProvincesGroupByPayload<T extends ProvincesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvincesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvincesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
            : GetScalarType<T[P], ProvincesGroupByOutputType[P]>
        }
      >
    >


  export type ProvincesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    cinemas?: boolean | Provinces$cinemasArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provinces"]>



  export type ProvincesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type ProvincesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["provinces"]>
  export type ProvincesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinemas?: boolean | Provinces$cinemasArgs<ExtArgs>
    _count?: boolean | ProvincesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProvincesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provinces"
    objects: {
      cinemas: Prisma.$CinemaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
    }, ExtArgs["result"]["provinces"]>
    composites: {}
  }

  type ProvincesGetPayload<S extends boolean | null | undefined | ProvincesDefaultArgs> = $Result.GetResult<Prisma.$ProvincesPayload, S>

  type ProvincesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvincesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvincesCountAggregateInputType | true
    }

  export interface ProvincesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provinces'], meta: { name: 'Provinces' } }
    /**
     * Find zero or one Provinces that matches the filter.
     * @param {ProvincesFindUniqueArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvincesFindUniqueArgs>(args: SelectSubset<T, ProvincesFindUniqueArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provinces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvincesFindUniqueOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvincesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvincesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindFirstArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvincesFindFirstArgs>(args?: SelectSubset<T, ProvincesFindFirstArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provinces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindFirstOrThrowArgs} args - Arguments to find a Provinces
     * @example
     * // Get one Provinces
     * const provinces = await prisma.provinces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvincesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvincesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.provinces.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.provinces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provincesWithIdOnly = await prisma.provinces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvincesFindManyArgs>(args?: SelectSubset<T, ProvincesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provinces.
     * @param {ProvincesCreateArgs} args - Arguments to create a Provinces.
     * @example
     * // Create one Provinces
     * const Provinces = await prisma.provinces.create({
     *   data: {
     *     // ... data to create a Provinces
     *   }
     * })
     * 
     */
    create<T extends ProvincesCreateArgs>(args: SelectSubset<T, ProvincesCreateArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Provinces.
     * @param {ProvincesCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const provinces = await prisma.provinces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvincesCreateManyArgs>(args?: SelectSubset<T, ProvincesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Provinces.
     * @param {ProvincesDeleteArgs} args - Arguments to delete one Provinces.
     * @example
     * // Delete one Provinces
     * const Provinces = await prisma.provinces.delete({
     *   where: {
     *     // ... filter to delete one Provinces
     *   }
     * })
     * 
     */
    delete<T extends ProvincesDeleteArgs>(args: SelectSubset<T, ProvincesDeleteArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provinces.
     * @param {ProvincesUpdateArgs} args - Arguments to update one Provinces.
     * @example
     * // Update one Provinces
     * const provinces = await prisma.provinces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvincesUpdateArgs>(args: SelectSubset<T, ProvincesUpdateArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Provinces.
     * @param {ProvincesDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.provinces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvincesDeleteManyArgs>(args?: SelectSubset<T, ProvincesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const provinces = await prisma.provinces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvincesUpdateManyArgs>(args: SelectSubset<T, ProvincesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Provinces.
     * @param {ProvincesUpsertArgs} args - Arguments to update or create a Provinces.
     * @example
     * // Update or create a Provinces
     * const provinces = await prisma.provinces.upsert({
     *   create: {
     *     // ... data to create a Provinces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provinces we want to update
     *   }
     * })
     */
    upsert<T extends ProvincesUpsertArgs>(args: SelectSubset<T, ProvincesUpsertArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.provinces.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvincesCountArgs>(
      args?: Subset<T, ProvincesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvincesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvincesAggregateArgs>(args: Subset<T, ProvincesAggregateArgs>): Prisma.PrismaPromise<GetProvincesAggregateType<T>>

    /**
     * Group by Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvincesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvincesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvincesGroupByArgs['orderBy'] }
        : { orderBy?: ProvincesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvincesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvincesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provinces model
   */
  readonly fields: ProvincesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provinces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvincesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinemas<T extends Provinces$cinemasArgs<ExtArgs> = {}>(args?: Subset<T, Provinces$cinemasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Provinces model
   */
  interface ProvincesFieldRefs {
    readonly id: FieldRef<"Provinces", 'Int'>
    readonly name: FieldRef<"Provinces", 'String'>
    readonly slug: FieldRef<"Provinces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Provinces findUnique
   */
  export type ProvincesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces findUniqueOrThrow
   */
  export type ProvincesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces findFirst
   */
  export type ProvincesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces findFirstOrThrow
   */
  export type ProvincesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces findMany
   */
  export type ProvincesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvincesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvincesOrderByWithRelationInput | ProvincesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvincesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvincesScalarFieldEnum | ProvincesScalarFieldEnum[]
  }

  /**
   * Provinces create
   */
  export type ProvincesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The data needed to create a Provinces.
     */
    data: XOR<ProvincesCreateInput, ProvincesUncheckedCreateInput>
  }

  /**
   * Provinces createMany
   */
  export type ProvincesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvincesCreateManyInput | ProvincesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provinces update
   */
  export type ProvincesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The data needed to update a Provinces.
     */
    data: XOR<ProvincesUpdateInput, ProvincesUncheckedUpdateInput>
    /**
     * Choose, which Provinces to update.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces updateMany
   */
  export type ProvincesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvincesUpdateManyMutationInput, ProvincesUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvincesWhereInput
    /**
     * Limit how many Provinces to update.
     */
    limit?: number
  }

  /**
   * Provinces upsert
   */
  export type ProvincesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * The filter to search for the Provinces to update in case it exists.
     */
    where: ProvincesWhereUniqueInput
    /**
     * In case the Provinces found by the `where` argument doesn't exist, create a new Provinces with this data.
     */
    create: XOR<ProvincesCreateInput, ProvincesUncheckedCreateInput>
    /**
     * In case the Provinces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvincesUpdateInput, ProvincesUncheckedUpdateInput>
  }

  /**
   * Provinces delete
   */
  export type ProvincesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
    /**
     * Filter which Provinces to delete.
     */
    where: ProvincesWhereUniqueInput
  }

  /**
   * Provinces deleteMany
   */
  export type ProvincesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvincesWhereInput
    /**
     * Limit how many Provinces to delete.
     */
    limit?: number
  }

  /**
   * Provinces.cinemas
   */
  export type Provinces$cinemasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    cursor?: CinemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Provinces without action
   */
  export type ProvincesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provinces
     */
    select?: ProvincesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provinces
     */
    omit?: ProvincesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvincesInclude<ExtArgs> | null
  }


  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
    provinceId: number | null
  }

  export type CinemaSumAggregateOutputType = {
    id: number | null
    brandId: number | null
    provinceId: number | null
  }

  export type CinemaMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    address: string | null
    status: $Enums.Status | null
    map_link: string | null
    brandId: number | null
    provinceId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    address: string | null
    status: $Enums.Status | null
    map_link: string | null
    brandId: number | null
    provinceId: number | null
    description: string | null
    createdAt: Date | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    address: number
    status: number
    map_link: number
    brandId: number
    provinceId: number
    description: number
    createdAt: number
    _all: number
  }


  export type CinemaAvgAggregateInputType = {
    id?: true
    brandId?: true
    provinceId?: true
  }

  export type CinemaSumAggregateInputType = {
    id?: true
    brandId?: true
    provinceId?: true
  }

  export type CinemaMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    status?: true
    map_link?: true
    brandId?: true
    provinceId?: true
    description?: true
    createdAt?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    status?: true
    map_link?: true
    brandId?: true
    provinceId?: true
    description?: true
    createdAt?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    address?: true
    status?: true
    map_link?: true
    brandId?: true
    provinceId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _avg?: CinemaAvgAggregateInputType
    _sum?: CinemaSumAggregateInputType
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: number
    name: string
    slug: string
    address: string
    status: $Enums.Status
    map_link: string
    brandId: number
    provinceId: number
    description: string
    createdAt: Date
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    address?: boolean
    status?: boolean
    map_link?: boolean
    brandId?: boolean
    provinceId?: boolean
    description?: boolean
    createdAt?: boolean
    brand?: boolean | CinemaBrandDefaultArgs<ExtArgs>
    province?: boolean | ProvincesDefaultArgs<ExtArgs>
    users?: boolean | Cinema$usersArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinema"]>



  export type CinemaSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    address?: boolean
    status?: boolean
    map_link?: boolean
    brandId?: boolean
    provinceId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "address" | "status" | "map_link" | "brandId" | "provinceId" | "description" | "createdAt", ExtArgs["result"]["cinema"]>
  export type CinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | CinemaBrandDefaultArgs<ExtArgs>
    province?: boolean | ProvincesDefaultArgs<ExtArgs>
    users?: boolean | Cinema$usersArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {
      brand: Prisma.$CinemaBrandPayload<ExtArgs>
      province: Prisma.$ProvincesPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      address: string
      status: $Enums.Status
      map_link: string
      brandId: number
      provinceId: number
      description: string
      createdAt: Date
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends CinemaBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaBrandDefaultArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    province<T extends ProvincesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvincesDefaultArgs<ExtArgs>>): Prisma__ProvincesClient<$Result.GetResult<Prisma.$ProvincesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Cinema$usersArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'Int'>
    readonly name: FieldRef<"Cinema", 'String'>
    readonly slug: FieldRef<"Cinema", 'String'>
    readonly address: FieldRef<"Cinema", 'String'>
    readonly status: FieldRef<"Cinema", 'Status'>
    readonly map_link: FieldRef<"Cinema", 'String'>
    readonly brandId: FieldRef<"Cinema", 'Int'>
    readonly provinceId: FieldRef<"Cinema", 'Int'>
    readonly description: FieldRef<"Cinema", 'String'>
    readonly createdAt: FieldRef<"Cinema", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema.users
   */
  export type Cinema$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    brandId: number | null
    cinemaId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    balance: number | null
    brandId: number | null
    cinemaId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    fullName: string | null
    region: string | null
    avatar: string | null
    balance: number | null
    password: string | null
    refreshToken: string | null
    codeId: string | null
    codeExpired: Date | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    brandId: number | null
    cinemaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    emailVerified: boolean | null
    phone: string | null
    phoneVerified: boolean | null
    fullName: string | null
    region: string | null
    avatar: string | null
    balance: number | null
    password: string | null
    refreshToken: string | null
    codeId: string | null
    codeExpired: Date | null
    role: $Enums.Role | null
    status: $Enums.Status | null
    brandId: number | null
    cinemaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    emailVerified: number
    phone: number
    phoneVerified: number
    fullName: number
    region: number
    avatar: number
    balance: number
    password: number
    refreshToken: number
    codeId: number
    codeExpired: number
    role: number
    status: number
    brandId: number
    cinemaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    balance?: true
    brandId?: true
    cinemaId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    balance?: true
    brandId?: true
    cinemaId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    fullName?: true
    region?: true
    avatar?: true
    balance?: true
    password?: true
    refreshToken?: true
    codeId?: true
    codeExpired?: true
    role?: true
    status?: true
    brandId?: true
    cinemaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    fullName?: true
    region?: true
    avatar?: true
    balance?: true
    password?: true
    refreshToken?: true
    codeId?: true
    codeExpired?: true
    role?: true
    status?: true
    brandId?: true
    cinemaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    emailVerified?: true
    phone?: true
    phoneVerified?: true
    fullName?: true
    region?: true
    avatar?: true
    balance?: true
    password?: true
    refreshToken?: true
    codeId?: true
    codeExpired?: true
    role?: true
    status?: true
    brandId?: true
    cinemaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    emailVerified: boolean
    phone: string | null
    phoneVerified: boolean
    fullName: string | null
    region: string | null
    avatar: string | null
    balance: number
    password: string
    refreshToken: string | null
    codeId: string | null
    codeExpired: Date | null
    role: $Enums.Role
    status: $Enums.Status
    brandId: number | null
    cinemaId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    fullName?: boolean
    region?: boolean
    avatar?: boolean
    balance?: boolean
    password?: boolean
    refreshToken?: boolean
    codeId?: boolean
    codeExpired?: boolean
    role?: boolean
    status?: boolean
    brandId?: boolean
    cinemaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | User$brandArgs<ExtArgs>
    cinema?: boolean | User$cinemaArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    phone?: boolean
    phoneVerified?: boolean
    fullName?: boolean
    region?: boolean
    avatar?: boolean
    balance?: boolean
    password?: boolean
    refreshToken?: boolean
    codeId?: boolean
    codeExpired?: boolean
    role?: boolean
    status?: boolean
    brandId?: boolean
    cinemaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "emailVerified" | "phone" | "phoneVerified" | "fullName" | "region" | "avatar" | "balance" | "password" | "refreshToken" | "codeId" | "codeExpired" | "role" | "status" | "brandId" | "cinemaId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | User$brandArgs<ExtArgs>
    cinema?: boolean | User$cinemaArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      brand: Prisma.$CinemaBrandPayload<ExtArgs> | null
      cinema: Prisma.$CinemaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      emailVerified: boolean
      phone: string | null
      phoneVerified: boolean
      fullName: string | null
      region: string | null
      avatar: string | null
      balance: number
      password: string
      refreshToken: string | null
      codeId: string | null
      codeExpired: Date | null
      role: $Enums.Role
      status: $Enums.Status
      brandId: number | null
      cinemaId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends User$brandArgs<ExtArgs> = {}>(args?: Subset<T, User$brandArgs<ExtArgs>>): Prisma__CinemaBrandClient<$Result.GetResult<Prisma.$CinemaBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cinema<T extends User$cinemaArgs<ExtArgs> = {}>(args?: Subset<T, User$cinemaArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'Boolean'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly region: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Int'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly codeId: FieldRef<"User", 'String'>
    readonly codeExpired: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'Status'>
    readonly brandId: FieldRef<"User", 'Int'>
    readonly cinemaId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.brand
   */
  export type User$brandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaBrand
     */
    select?: CinemaBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CinemaBrand
     */
    omit?: CinemaBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaBrandInclude<ExtArgs> | null
    where?: CinemaBrandWhereInput
  }

  /**
   * User.cinema
   */
  export type User$cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    where?: CinemaWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CinemaBrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    logo: 'logo',
    createdAt: 'createdAt'
  };

  export type CinemaBrandScalarFieldEnum = (typeof CinemaBrandScalarFieldEnum)[keyof typeof CinemaBrandScalarFieldEnum]


  export const ProvincesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type ProvincesScalarFieldEnum = (typeof ProvincesScalarFieldEnum)[keyof typeof ProvincesScalarFieldEnum]


  export const CinemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    address: 'address',
    status: 'status',
    map_link: 'map_link',
    brandId: 'brandId',
    provinceId: 'provinceId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    emailVerified: 'emailVerified',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    fullName: 'fullName',
    region: 'region',
    avatar: 'avatar',
    balance: 'balance',
    password: 'password',
    refreshToken: 'refreshToken',
    codeId: 'codeId',
    codeExpired: 'codeExpired',
    role: 'role',
    status: 'status',
    brandId: 'brandId',
    cinemaId: 'cinemaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CinemaBrandOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    logo: 'logo'
  };

  export type CinemaBrandOrderByRelevanceFieldEnum = (typeof CinemaBrandOrderByRelevanceFieldEnum)[keyof typeof CinemaBrandOrderByRelevanceFieldEnum]


  export const ProvincesOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug'
  };

  export type ProvincesOrderByRelevanceFieldEnum = (typeof ProvincesOrderByRelevanceFieldEnum)[keyof typeof ProvincesOrderByRelevanceFieldEnum]


  export const CinemaOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    address: 'address',
    map_link: 'map_link',
    description: 'description'
  };

  export type CinemaOrderByRelevanceFieldEnum = (typeof CinemaOrderByRelevanceFieldEnum)[keyof typeof CinemaOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    phone: 'phone',
    fullName: 'fullName',
    region: 'region',
    avatar: 'avatar',
    password: 'password',
    refreshToken: 'refreshToken',
    codeId: 'codeId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CinemaBrandWhereInput = {
    AND?: CinemaBrandWhereInput | CinemaBrandWhereInput[]
    OR?: CinemaBrandWhereInput[]
    NOT?: CinemaBrandWhereInput | CinemaBrandWhereInput[]
    id?: IntFilter<"CinemaBrand"> | number
    name?: StringFilter<"CinemaBrand"> | string
    slug?: StringFilter<"CinemaBrand"> | string
    logo?: StringNullableFilter<"CinemaBrand"> | string | null
    createdAt?: DateTimeFilter<"CinemaBrand"> | Date | string
    users?: UserListRelationFilter
    cinemas?: CinemaListRelationFilter
  }

  export type CinemaBrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    cinemas?: CinemaOrderByRelationAggregateInput
    _relevance?: CinemaBrandOrderByRelevanceInput
  }

  export type CinemaBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CinemaBrandWhereInput | CinemaBrandWhereInput[]
    OR?: CinemaBrandWhereInput[]
    NOT?: CinemaBrandWhereInput | CinemaBrandWhereInput[]
    logo?: StringNullableFilter<"CinemaBrand"> | string | null
    createdAt?: DateTimeFilter<"CinemaBrand"> | Date | string
    users?: UserListRelationFilter
    cinemas?: CinemaListRelationFilter
  }, "id" | "name" | "slug">

  export type CinemaBrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CinemaBrandCountOrderByAggregateInput
    _avg?: CinemaBrandAvgOrderByAggregateInput
    _max?: CinemaBrandMaxOrderByAggregateInput
    _min?: CinemaBrandMinOrderByAggregateInput
    _sum?: CinemaBrandSumOrderByAggregateInput
  }

  export type CinemaBrandScalarWhereWithAggregatesInput = {
    AND?: CinemaBrandScalarWhereWithAggregatesInput | CinemaBrandScalarWhereWithAggregatesInput[]
    OR?: CinemaBrandScalarWhereWithAggregatesInput[]
    NOT?: CinemaBrandScalarWhereWithAggregatesInput | CinemaBrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CinemaBrand"> | number
    name?: StringWithAggregatesFilter<"CinemaBrand"> | string
    slug?: StringWithAggregatesFilter<"CinemaBrand"> | string
    logo?: StringNullableWithAggregatesFilter<"CinemaBrand"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CinemaBrand"> | Date | string
  }

  export type ProvincesWhereInput = {
    AND?: ProvincesWhereInput | ProvincesWhereInput[]
    OR?: ProvincesWhereInput[]
    NOT?: ProvincesWhereInput | ProvincesWhereInput[]
    id?: IntFilter<"Provinces"> | number
    name?: StringFilter<"Provinces"> | string
    slug?: StringFilter<"Provinces"> | string
    cinemas?: CinemaListRelationFilter
  }

  export type ProvincesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    cinemas?: CinemaOrderByRelationAggregateInput
    _relevance?: ProvincesOrderByRelevanceInput
  }

  export type ProvincesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: ProvincesWhereInput | ProvincesWhereInput[]
    OR?: ProvincesWhereInput[]
    NOT?: ProvincesWhereInput | ProvincesWhereInput[]
    cinemas?: CinemaListRelationFilter
  }, "id" | "name" | "slug">

  export type ProvincesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: ProvincesCountOrderByAggregateInput
    _avg?: ProvincesAvgOrderByAggregateInput
    _max?: ProvincesMaxOrderByAggregateInput
    _min?: ProvincesMinOrderByAggregateInput
    _sum?: ProvincesSumOrderByAggregateInput
  }

  export type ProvincesScalarWhereWithAggregatesInput = {
    AND?: ProvincesScalarWhereWithAggregatesInput | ProvincesScalarWhereWithAggregatesInput[]
    OR?: ProvincesScalarWhereWithAggregatesInput[]
    NOT?: ProvincesScalarWhereWithAggregatesInput | ProvincesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Provinces"> | number
    name?: StringWithAggregatesFilter<"Provinces"> | string
    slug?: StringWithAggregatesFilter<"Provinces"> | string
  }

  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: IntFilter<"Cinema"> | number
    name?: StringFilter<"Cinema"> | string
    slug?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    status?: EnumStatusFilter<"Cinema"> | $Enums.Status
    map_link?: StringFilter<"Cinema"> | string
    brandId?: IntFilter<"Cinema"> | number
    provinceId?: IntFilter<"Cinema"> | number
    description?: StringFilter<"Cinema"> | string
    createdAt?: DateTimeFilter<"Cinema"> | Date | string
    brand?: XOR<CinemaBrandScalarRelationFilter, CinemaBrandWhereInput>
    province?: XOR<ProvincesScalarRelationFilter, ProvincesWhereInput>
    users?: UserListRelationFilter
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    status?: SortOrder
    map_link?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    brand?: CinemaBrandOrderByWithRelationInput
    province?: ProvincesOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: CinemaOrderByRelevanceInput
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    address?: StringFilter<"Cinema"> | string
    status?: EnumStatusFilter<"Cinema"> | $Enums.Status
    map_link?: StringFilter<"Cinema"> | string
    brandId?: IntFilter<"Cinema"> | number
    provinceId?: IntFilter<"Cinema"> | number
    description?: StringFilter<"Cinema"> | string
    createdAt?: DateTimeFilter<"Cinema"> | Date | string
    brand?: XOR<CinemaBrandScalarRelationFilter, CinemaBrandWhereInput>
    province?: XOR<ProvincesScalarRelationFilter, ProvincesWhereInput>
    users?: UserListRelationFilter
  }, "id" | "name" | "slug">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    status?: SortOrder
    map_link?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _avg?: CinemaAvgOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
    _sum?: CinemaSumOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cinema"> | number
    name?: StringWithAggregatesFilter<"Cinema"> | string
    slug?: StringWithAggregatesFilter<"Cinema"> | string
    address?: StringWithAggregatesFilter<"Cinema"> | string
    status?: EnumStatusWithAggregatesFilter<"Cinema"> | $Enums.Status
    map_link?: StringWithAggregatesFilter<"Cinema"> | string
    brandId?: IntWithAggregatesFilter<"Cinema"> | number
    provinceId?: IntWithAggregatesFilter<"Cinema"> | number
    description?: StringWithAggregatesFilter<"Cinema"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cinema"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    fullName?: StringNullableFilter<"User"> | string | null
    region?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    codeId?: StringNullableFilter<"User"> | string | null
    codeExpired?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    brandId?: IntNullableFilter<"User"> | number | null
    cinemaId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    brand?: XOR<CinemaBrandNullableScalarRelationFilter, CinemaBrandWhereInput> | null
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    fullName?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    codeId?: SortOrderInput | SortOrder
    codeExpired?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    brandId?: SortOrderInput | SortOrder
    cinemaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: CinemaBrandOrderByWithRelationInput
    cinema?: CinemaOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    emailVerified?: BoolFilter<"User"> | boolean
    phoneVerified?: BoolFilter<"User"> | boolean
    fullName?: StringNullableFilter<"User"> | string | null
    region?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    codeId?: StringNullableFilter<"User"> | string | null
    codeExpired?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    brandId?: IntNullableFilter<"User"> | number | null
    cinemaId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    brand?: XOR<CinemaBrandNullableScalarRelationFilter, CinemaBrandWhereInput> | null
    cinema?: XOR<CinemaNullableScalarRelationFilter, CinemaWhereInput> | null
  }, "id" | "username" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrder
    fullName?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    balance?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    codeId?: SortOrderInput | SortOrder
    codeExpired?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    brandId?: SortOrderInput | SortOrder
    cinemaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneVerified?: BoolWithAggregatesFilter<"User"> | boolean
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    region?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: IntWithAggregatesFilter<"User"> | number
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    codeId?: StringNullableWithAggregatesFilter<"User"> | string | null
    codeExpired?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumStatusWithAggregatesFilter<"User"> | $Enums.Status
    brandId?: IntNullableWithAggregatesFilter<"User"> | number | null
    cinemaId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CinemaBrandCreateInput = {
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBrandInput
    cinemas?: CinemaCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrandInput
    cinemas?: CinemaUncheckedCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrandNestedInput
    cinemas?: CinemaUpdateManyWithoutBrandNestedInput
  }

  export type CinemaBrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrandNestedInput
    cinemas?: CinemaUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type CinemaBrandCreateManyInput = {
    id?: number
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
  }

  export type CinemaBrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaBrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvincesCreateInput = {
    name: string
    slug: string
    cinemas?: CinemaCreateNestedManyWithoutProvinceInput
  }

  export type ProvincesUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    cinemas?: CinemaUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvincesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cinemas?: CinemaUpdateManyWithoutProvinceNestedInput
  }

  export type ProvincesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cinemas?: CinemaUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvincesCreateManyInput = {
    id?: number
    name: string
    slug: string
  }

  export type ProvincesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProvincesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CinemaCreateInput = {
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    description: string
    createdAt?: Date | string
    brand: CinemaBrandCreateNestedOneWithoutCinemasInput
    province: ProvincesCreateNestedOneWithoutCinemasInput
    users?: UserCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    brandId: number
    provinceId: number
    description: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: CinemaBrandUpdateOneRequiredWithoutCinemasNestedInput
    province?: ProvincesUpdateOneRequiredWithoutCinemasNestedInput
    users?: UserUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaCreateManyInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    brandId: number
    provinceId: number
    description: string
    createdAt?: Date | string
  }

  export type CinemaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: CinemaBrandCreateNestedOneWithoutUsersInput
    cinema?: CinemaCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    brandId?: number | null
    cinemaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: CinemaBrandUpdateOneWithoutUsersNestedInput
    cinema?: CinemaUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    brandId?: number | null
    cinemaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CinemaListRelationFilter = {
    every?: CinemaWhereInput
    some?: CinemaWhereInput
    none?: CinemaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaBrandOrderByRelevanceInput = {
    fields: CinemaBrandOrderByRelevanceFieldEnum | CinemaBrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CinemaBrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaBrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CinemaBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaBrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaBrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProvincesOrderByRelevanceInput = {
    fields: ProvincesOrderByRelevanceFieldEnum | ProvincesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProvincesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProvincesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProvincesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProvincesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type ProvincesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type CinemaBrandScalarRelationFilter = {
    is?: CinemaBrandWhereInput
    isNot?: CinemaBrandWhereInput
  }

  export type ProvincesScalarRelationFilter = {
    is?: ProvincesWhereInput
    isNot?: ProvincesWhereInput
  }

  export type CinemaOrderByRelevanceInput = {
    fields: CinemaOrderByRelevanceFieldEnum | CinemaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    status?: SortOrder
    map_link?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    status?: SortOrder
    map_link?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    address?: SortOrder
    status?: SortOrder
    map_link?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CinemaSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
    provinceId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CinemaBrandNullableScalarRelationFilter = {
    is?: CinemaBrandWhereInput | null
    isNot?: CinemaBrandWhereInput | null
  }

  export type CinemaNullableScalarRelationFilter = {
    is?: CinemaWhereInput | null
    isNot?: CinemaWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    fullName?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    codeId?: SortOrder
    codeExpired?: SortOrder
    role?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    cinemaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    brandId?: SortOrder
    cinemaId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    fullName?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    codeId?: SortOrder
    codeExpired?: SortOrder
    role?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    cinemaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    fullName?: SortOrder
    region?: SortOrder
    avatar?: SortOrder
    balance?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    codeId?: SortOrder
    codeExpired?: SortOrder
    role?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    cinemaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    brandId?: SortOrder
    cinemaId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedManyWithoutBrandInput = {
    create?: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput> | UserCreateWithoutBrandInput[] | UserUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrandInput | UserCreateOrConnectWithoutBrandInput[]
    createMany?: UserCreateManyBrandInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CinemaCreateNestedManyWithoutBrandInput = {
    create?: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput> | CinemaCreateWithoutBrandInput[] | CinemaUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutBrandInput | CinemaCreateOrConnectWithoutBrandInput[]
    createMany?: CinemaCreateManyBrandInputEnvelope
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput> | UserCreateWithoutBrandInput[] | UserUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrandInput | UserCreateOrConnectWithoutBrandInput[]
    createMany?: UserCreateManyBrandInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CinemaUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput> | CinemaCreateWithoutBrandInput[] | CinemaUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutBrandInput | CinemaCreateOrConnectWithoutBrandInput[]
    createMany?: CinemaCreateManyBrandInputEnvelope
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutBrandNestedInput = {
    create?: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput> | UserCreateWithoutBrandInput[] | UserUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrandInput | UserCreateOrConnectWithoutBrandInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBrandInput | UserUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: UserCreateManyBrandInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBrandInput | UserUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBrandInput | UserUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CinemaUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput> | CinemaCreateWithoutBrandInput[] | CinemaUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutBrandInput | CinemaCreateOrConnectWithoutBrandInput[]
    upsert?: CinemaUpsertWithWhereUniqueWithoutBrandInput | CinemaUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CinemaCreateManyBrandInputEnvelope
    set?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    disconnect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    delete?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    update?: CinemaUpdateWithWhereUniqueWithoutBrandInput | CinemaUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CinemaUpdateManyWithWhereWithoutBrandInput | CinemaUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput> | UserCreateWithoutBrandInput[] | UserUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrandInput | UserCreateOrConnectWithoutBrandInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBrandInput | UserUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: UserCreateManyBrandInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBrandInput | UserUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBrandInput | UserUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CinemaUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput> | CinemaCreateWithoutBrandInput[] | CinemaUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutBrandInput | CinemaCreateOrConnectWithoutBrandInput[]
    upsert?: CinemaUpsertWithWhereUniqueWithoutBrandInput | CinemaUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: CinemaCreateManyBrandInputEnvelope
    set?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    disconnect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    delete?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    update?: CinemaUpdateWithWhereUniqueWithoutBrandInput | CinemaUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: CinemaUpdateManyWithWhereWithoutBrandInput | CinemaUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
  }

  export type CinemaCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput> | CinemaCreateWithoutProvinceInput[] | CinemaUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutProvinceInput | CinemaCreateOrConnectWithoutProvinceInput[]
    createMany?: CinemaCreateManyProvinceInputEnvelope
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
  }

  export type CinemaUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput> | CinemaCreateWithoutProvinceInput[] | CinemaUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutProvinceInput | CinemaCreateOrConnectWithoutProvinceInput[]
    createMany?: CinemaCreateManyProvinceInputEnvelope
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
  }

  export type CinemaUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput> | CinemaCreateWithoutProvinceInput[] | CinemaUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutProvinceInput | CinemaCreateOrConnectWithoutProvinceInput[]
    upsert?: CinemaUpsertWithWhereUniqueWithoutProvinceInput | CinemaUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CinemaCreateManyProvinceInputEnvelope
    set?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    disconnect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    delete?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    update?: CinemaUpdateWithWhereUniqueWithoutProvinceInput | CinemaUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CinemaUpdateManyWithWhereWithoutProvinceInput | CinemaUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
  }

  export type CinemaUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput> | CinemaCreateWithoutProvinceInput[] | CinemaUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: CinemaCreateOrConnectWithoutProvinceInput | CinemaCreateOrConnectWithoutProvinceInput[]
    upsert?: CinemaUpsertWithWhereUniqueWithoutProvinceInput | CinemaUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: CinemaCreateManyProvinceInputEnvelope
    set?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    disconnect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    delete?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    connect?: CinemaWhereUniqueInput | CinemaWhereUniqueInput[]
    update?: CinemaUpdateWithWhereUniqueWithoutProvinceInput | CinemaUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: CinemaUpdateManyWithWhereWithoutProvinceInput | CinemaUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
  }

  export type CinemaBrandCreateNestedOneWithoutCinemasInput = {
    create?: XOR<CinemaBrandCreateWithoutCinemasInput, CinemaBrandUncheckedCreateWithoutCinemasInput>
    connectOrCreate?: CinemaBrandCreateOrConnectWithoutCinemasInput
    connect?: CinemaBrandWhereUniqueInput
  }

  export type ProvincesCreateNestedOneWithoutCinemasInput = {
    create?: XOR<ProvincesCreateWithoutCinemasInput, ProvincesUncheckedCreateWithoutCinemasInput>
    connectOrCreate?: ProvincesCreateOrConnectWithoutCinemasInput
    connect?: ProvincesWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCinemaInput = {
    create?: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput> | UserCreateWithoutCinemaInput[] | UserUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCinemaInput | UserCreateOrConnectWithoutCinemaInput[]
    createMany?: UserCreateManyCinemaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput> | UserCreateWithoutCinemaInput[] | UserUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCinemaInput | UserCreateOrConnectWithoutCinemaInput[]
    createMany?: UserCreateManyCinemaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type CinemaBrandUpdateOneRequiredWithoutCinemasNestedInput = {
    create?: XOR<CinemaBrandCreateWithoutCinemasInput, CinemaBrandUncheckedCreateWithoutCinemasInput>
    connectOrCreate?: CinemaBrandCreateOrConnectWithoutCinemasInput
    upsert?: CinemaBrandUpsertWithoutCinemasInput
    connect?: CinemaBrandWhereUniqueInput
    update?: XOR<XOR<CinemaBrandUpdateToOneWithWhereWithoutCinemasInput, CinemaBrandUpdateWithoutCinemasInput>, CinemaBrandUncheckedUpdateWithoutCinemasInput>
  }

  export type ProvincesUpdateOneRequiredWithoutCinemasNestedInput = {
    create?: XOR<ProvincesCreateWithoutCinemasInput, ProvincesUncheckedCreateWithoutCinemasInput>
    connectOrCreate?: ProvincesCreateOrConnectWithoutCinemasInput
    upsert?: ProvincesUpsertWithoutCinemasInput
    connect?: ProvincesWhereUniqueInput
    update?: XOR<XOR<ProvincesUpdateToOneWithWhereWithoutCinemasInput, ProvincesUpdateWithoutCinemasInput>, ProvincesUncheckedUpdateWithoutCinemasInput>
  }

  export type UserUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput> | UserCreateWithoutCinemaInput[] | UserUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCinemaInput | UserCreateOrConnectWithoutCinemaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCinemaInput | UserUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: UserCreateManyCinemaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCinemaInput | UserUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCinemaInput | UserUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput> | UserCreateWithoutCinemaInput[] | UserUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCinemaInput | UserCreateOrConnectWithoutCinemaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCinemaInput | UserUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: UserCreateManyCinemaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCinemaInput | UserUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCinemaInput | UserUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CinemaBrandCreateNestedOneWithoutUsersInput = {
    create?: XOR<CinemaBrandCreateWithoutUsersInput, CinemaBrandUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CinemaBrandCreateOrConnectWithoutUsersInput
    connect?: CinemaBrandWhereUniqueInput
  }

  export type CinemaCreateNestedOneWithoutUsersInput = {
    create?: XOR<CinemaCreateWithoutUsersInput, CinemaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutUsersInput
    connect?: CinemaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CinemaBrandUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CinemaBrandCreateWithoutUsersInput, CinemaBrandUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CinemaBrandCreateOrConnectWithoutUsersInput
    upsert?: CinemaBrandUpsertWithoutUsersInput
    disconnect?: CinemaBrandWhereInput | boolean
    delete?: CinemaBrandWhereInput | boolean
    connect?: CinemaBrandWhereUniqueInput
    update?: XOR<XOR<CinemaBrandUpdateToOneWithWhereWithoutUsersInput, CinemaBrandUpdateWithoutUsersInput>, CinemaBrandUncheckedUpdateWithoutUsersInput>
  }

  export type CinemaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CinemaCreateWithoutUsersInput, CinemaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutUsersInput
    upsert?: CinemaUpsertWithoutUsersInput
    disconnect?: CinemaWhereInput | boolean
    delete?: CinemaWhereInput | boolean
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutUsersInput, CinemaUpdateWithoutUsersInput>, CinemaUncheckedUpdateWithoutUsersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutBrandInput = {
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    cinema?: CinemaCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBrandInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    cinemaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBrandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput>
  }

  export type UserCreateManyBrandInputEnvelope = {
    data: UserCreateManyBrandInput | UserCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type CinemaCreateWithoutBrandInput = {
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    description: string
    createdAt?: Date | string
    province: ProvincesCreateNestedOneWithoutCinemasInput
    users?: UserCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    provinceId: number
    description: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutBrandInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput>
  }

  export type CinemaCreateManyBrandInputEnvelope = {
    data: CinemaCreateManyBrandInput | CinemaCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBrandInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBrandInput, UserUncheckedUpdateWithoutBrandInput>
    create: XOR<UserCreateWithoutBrandInput, UserUncheckedCreateWithoutBrandInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBrandInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBrandInput, UserUncheckedUpdateWithoutBrandInput>
  }

  export type UserUpdateManyWithWhereWithoutBrandInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBrandInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: BoolFilter<"User"> | boolean
    fullName?: StringNullableFilter<"User"> | string | null
    region?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    balance?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    codeId?: StringNullableFilter<"User"> | string | null
    codeExpired?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumStatusFilter<"User"> | $Enums.Status
    brandId?: IntNullableFilter<"User"> | number | null
    cinemaId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CinemaUpsertWithWhereUniqueWithoutBrandInput = {
    where: CinemaWhereUniqueInput
    update: XOR<CinemaUpdateWithoutBrandInput, CinemaUncheckedUpdateWithoutBrandInput>
    create: XOR<CinemaCreateWithoutBrandInput, CinemaUncheckedCreateWithoutBrandInput>
  }

  export type CinemaUpdateWithWhereUniqueWithoutBrandInput = {
    where: CinemaWhereUniqueInput
    data: XOR<CinemaUpdateWithoutBrandInput, CinemaUncheckedUpdateWithoutBrandInput>
  }

  export type CinemaUpdateManyWithWhereWithoutBrandInput = {
    where: CinemaScalarWhereInput
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyWithoutBrandInput>
  }

  export type CinemaScalarWhereInput = {
    AND?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
    OR?: CinemaScalarWhereInput[]
    NOT?: CinemaScalarWhereInput | CinemaScalarWhereInput[]
    id?: IntFilter<"Cinema"> | number
    name?: StringFilter<"Cinema"> | string
    slug?: StringFilter<"Cinema"> | string
    address?: StringFilter<"Cinema"> | string
    status?: EnumStatusFilter<"Cinema"> | $Enums.Status
    map_link?: StringFilter<"Cinema"> | string
    brandId?: IntFilter<"Cinema"> | number
    provinceId?: IntFilter<"Cinema"> | number
    description?: StringFilter<"Cinema"> | string
    createdAt?: DateTimeFilter<"Cinema"> | Date | string
  }

  export type CinemaCreateWithoutProvinceInput = {
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    description: string
    createdAt?: Date | string
    brand: CinemaBrandCreateNestedOneWithoutCinemasInput
    users?: UserCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutProvinceInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    brandId: number
    description: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutProvinceInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput>
  }

  export type CinemaCreateManyProvinceInputEnvelope = {
    data: CinemaCreateManyProvinceInput | CinemaCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type CinemaUpsertWithWhereUniqueWithoutProvinceInput = {
    where: CinemaWhereUniqueInput
    update: XOR<CinemaUpdateWithoutProvinceInput, CinemaUncheckedUpdateWithoutProvinceInput>
    create: XOR<CinemaCreateWithoutProvinceInput, CinemaUncheckedCreateWithoutProvinceInput>
  }

  export type CinemaUpdateWithWhereUniqueWithoutProvinceInput = {
    where: CinemaWhereUniqueInput
    data: XOR<CinemaUpdateWithoutProvinceInput, CinemaUncheckedUpdateWithoutProvinceInput>
  }

  export type CinemaUpdateManyWithWhereWithoutProvinceInput = {
    where: CinemaScalarWhereInput
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyWithoutProvinceInput>
  }

  export type CinemaBrandCreateWithoutCinemasInput = {
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandUncheckedCreateWithoutCinemasInput = {
    id?: number
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandCreateOrConnectWithoutCinemasInput = {
    where: CinemaBrandWhereUniqueInput
    create: XOR<CinemaBrandCreateWithoutCinemasInput, CinemaBrandUncheckedCreateWithoutCinemasInput>
  }

  export type ProvincesCreateWithoutCinemasInput = {
    name: string
    slug: string
  }

  export type ProvincesUncheckedCreateWithoutCinemasInput = {
    id?: number
    name: string
    slug: string
  }

  export type ProvincesCreateOrConnectWithoutCinemasInput = {
    where: ProvincesWhereUniqueInput
    create: XOR<ProvincesCreateWithoutCinemasInput, ProvincesUncheckedCreateWithoutCinemasInput>
  }

  export type UserCreateWithoutCinemaInput = {
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: CinemaBrandCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCinemaInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    brandId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCinemaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput>
  }

  export type UserCreateManyCinemaInputEnvelope = {
    data: UserCreateManyCinemaInput | UserCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type CinemaBrandUpsertWithoutCinemasInput = {
    update: XOR<CinemaBrandUpdateWithoutCinemasInput, CinemaBrandUncheckedUpdateWithoutCinemasInput>
    create: XOR<CinemaBrandCreateWithoutCinemasInput, CinemaBrandUncheckedCreateWithoutCinemasInput>
    where?: CinemaBrandWhereInput
  }

  export type CinemaBrandUpdateToOneWithWhereWithoutCinemasInput = {
    where?: CinemaBrandWhereInput
    data: XOR<CinemaBrandUpdateWithoutCinemasInput, CinemaBrandUncheckedUpdateWithoutCinemasInput>
  }

  export type CinemaBrandUpdateWithoutCinemasInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrandNestedInput
  }

  export type CinemaBrandUncheckedUpdateWithoutCinemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProvincesUpsertWithoutCinemasInput = {
    update: XOR<ProvincesUpdateWithoutCinemasInput, ProvincesUncheckedUpdateWithoutCinemasInput>
    create: XOR<ProvincesCreateWithoutCinemasInput, ProvincesUncheckedCreateWithoutCinemasInput>
    where?: ProvincesWhereInput
  }

  export type ProvincesUpdateToOneWithWhereWithoutCinemasInput = {
    where?: ProvincesWhereInput
    data: XOR<ProvincesUpdateWithoutCinemasInput, ProvincesUncheckedUpdateWithoutCinemasInput>
  }

  export type ProvincesUpdateWithoutCinemasInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProvincesUncheckedUpdateWithoutCinemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutCinemaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCinemaInput, UserUncheckedUpdateWithoutCinemaInput>
    create: XOR<UserCreateWithoutCinemaInput, UserUncheckedCreateWithoutCinemaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCinemaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCinemaInput, UserUncheckedUpdateWithoutCinemaInput>
  }

  export type UserUpdateManyWithWhereWithoutCinemaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCinemaInput>
  }

  export type CinemaBrandCreateWithoutUsersInput = {
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    cinemas?: CinemaCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    slug: string
    logo?: string | null
    createdAt?: Date | string
    cinemas?: CinemaUncheckedCreateNestedManyWithoutBrandInput
  }

  export type CinemaBrandCreateOrConnectWithoutUsersInput = {
    where: CinemaBrandWhereUniqueInput
    create: XOR<CinemaBrandCreateWithoutUsersInput, CinemaBrandUncheckedCreateWithoutUsersInput>
  }

  export type CinemaCreateWithoutUsersInput = {
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    description: string
    createdAt?: Date | string
    brand: CinemaBrandCreateNestedOneWithoutCinemasInput
    province: ProvincesCreateNestedOneWithoutCinemasInput
  }

  export type CinemaUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    brandId: number
    provinceId: number
    description: string
    createdAt?: Date | string
  }

  export type CinemaCreateOrConnectWithoutUsersInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutUsersInput, CinemaUncheckedCreateWithoutUsersInput>
  }

  export type CinemaBrandUpsertWithoutUsersInput = {
    update: XOR<CinemaBrandUpdateWithoutUsersInput, CinemaBrandUncheckedUpdateWithoutUsersInput>
    create: XOR<CinemaBrandCreateWithoutUsersInput, CinemaBrandUncheckedCreateWithoutUsersInput>
    where?: CinemaBrandWhereInput
  }

  export type CinemaBrandUpdateToOneWithWhereWithoutUsersInput = {
    where?: CinemaBrandWhereInput
    data: XOR<CinemaBrandUpdateWithoutUsersInput, CinemaBrandUncheckedUpdateWithoutUsersInput>
  }

  export type CinemaBrandUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cinemas?: CinemaUpdateManyWithoutBrandNestedInput
  }

  export type CinemaBrandUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cinemas?: CinemaUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type CinemaUpsertWithoutUsersInput = {
    update: XOR<CinemaUpdateWithoutUsersInput, CinemaUncheckedUpdateWithoutUsersInput>
    create: XOR<CinemaCreateWithoutUsersInput, CinemaUncheckedCreateWithoutUsersInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutUsersInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutUsersInput, CinemaUncheckedUpdateWithoutUsersInput>
  }

  export type CinemaUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: CinemaBrandUpdateOneRequiredWithoutCinemasNestedInput
    province?: ProvincesUpdateOneRequiredWithoutCinemasNestedInput
  }

  export type CinemaUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    provinceId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBrandInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    cinemaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CinemaCreateManyBrandInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    provinceId: number
    description: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBrandInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cinema?: CinemaUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cinemaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: ProvincesUpdateOneRequiredWithoutCinemasNestedInput
    users?: UserUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    provinceId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaCreateManyProvinceInput = {
    id?: number
    name: string
    slug: string
    address: string
    status?: $Enums.Status
    map_link: string
    brandId: number
    description: string
    createdAt?: Date | string
  }

  export type CinemaUpdateWithoutProvinceInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: CinemaBrandUpdateOneRequiredWithoutCinemasNestedInput
    users?: UserUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateManyWithoutProvinceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    map_link?: StringFieldUpdateOperationsInput | string
    brandId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCinemaInput = {
    id?: number
    username: string
    email: string
    emailVerified?: boolean
    phone?: string | null
    phoneVerified?: boolean
    fullName?: string | null
    region?: string | null
    avatar?: string | null
    balance?: number
    password: string
    refreshToken?: string | null
    codeId?: string | null
    codeExpired?: Date | string | null
    role?: $Enums.Role
    status?: $Enums.Status
    brandId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCinemaInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: CinemaBrandUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: BoolFieldUpdateOperationsInput | boolean
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    codeId?: NullableStringFieldUpdateOperationsInput | string | null
    codeExpired?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    brandId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}