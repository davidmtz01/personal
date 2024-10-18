
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
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model rol_seguridad
 * 
 */
export type rol_seguridad = $Result.DefaultSelection<Prisma.$rol_seguridadPayload>
/**
 * Model bitacora_seguridad
 * 
 */
export type bitacora_seguridad = $Result.DefaultSelection<Prisma.$bitacora_seguridadPayload>
/**
 * Model seguridad_personal
 * 
 */
export type seguridad_personal = $Result.DefaultSelection<Prisma.$seguridad_personalPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs>;

  /**
   * `prisma.rol_seguridad`: Exposes CRUD operations for the **rol_seguridad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rol_seguridads
    * const rol_seguridads = await prisma.rol_seguridad.findMany()
    * ```
    */
  get rol_seguridad(): Prisma.rol_seguridadDelegate<ExtArgs>;

  /**
   * `prisma.bitacora_seguridad`: Exposes CRUD operations for the **bitacora_seguridad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacora_seguridads
    * const bitacora_seguridads = await prisma.bitacora_seguridad.findMany()
    * ```
    */
  get bitacora_seguridad(): Prisma.bitacora_seguridadDelegate<ExtArgs>;

  /**
   * `prisma.seguridad_personal`: Exposes CRUD operations for the **seguridad_personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguridad_personals
    * const seguridad_personals = await prisma.seguridad_personal.findMany()
    * ```
    */
  get seguridad_personal(): Prisma.seguridad_personalDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.21.0
   * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    usuario: 'usuario',
    rol_seguridad: 'rol_seguridad',
    bitacora_seguridad: 'bitacora_seguridad',
    seguridad_personal: 'seguridad_personal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    seguridad_db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "rol_seguridad" | "bitacora_seguridad" | "seguridad_personal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      rol_seguridad: {
        payload: Prisma.$rol_seguridadPayload<ExtArgs>
        fields: Prisma.rol_seguridadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rol_seguridadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rol_seguridadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          findFirst: {
            args: Prisma.rol_seguridadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rol_seguridadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          findMany: {
            args: Prisma.rol_seguridadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>[]
          }
          create: {
            args: Prisma.rol_seguridadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          createMany: {
            args: Prisma.rol_seguridadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rol_seguridadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          update: {
            args: Prisma.rol_seguridadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          deleteMany: {
            args: Prisma.rol_seguridadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rol_seguridadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rol_seguridadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rol_seguridadPayload>
          }
          aggregate: {
            args: Prisma.Rol_seguridadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol_seguridad>
          }
          groupBy: {
            args: Prisma.rol_seguridadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rol_seguridadGroupByOutputType>[]
          }
          count: {
            args: Prisma.rol_seguridadCountArgs<ExtArgs>
            result: $Utils.Optional<Rol_seguridadCountAggregateOutputType> | number
          }
        }
      }
      bitacora_seguridad: {
        payload: Prisma.$bitacora_seguridadPayload<ExtArgs>
        fields: Prisma.bitacora_seguridadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bitacora_seguridadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bitacora_seguridadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          findFirst: {
            args: Prisma.bitacora_seguridadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bitacora_seguridadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          findMany: {
            args: Prisma.bitacora_seguridadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>[]
          }
          create: {
            args: Prisma.bitacora_seguridadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          createMany: {
            args: Prisma.bitacora_seguridadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bitacora_seguridadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          update: {
            args: Prisma.bitacora_seguridadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          deleteMany: {
            args: Prisma.bitacora_seguridadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bitacora_seguridadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bitacora_seguridadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_seguridadPayload>
          }
          aggregate: {
            args: Prisma.Bitacora_seguridadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora_seguridad>
          }
          groupBy: {
            args: Prisma.bitacora_seguridadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bitacora_seguridadGroupByOutputType>[]
          }
          count: {
            args: Prisma.bitacora_seguridadCountArgs<ExtArgs>
            result: $Utils.Optional<Bitacora_seguridadCountAggregateOutputType> | number
          }
        }
      }
      seguridad_personal: {
        payload: Prisma.$seguridad_personalPayload<ExtArgs>
        fields: Prisma.seguridad_personalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seguridad_personalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seguridad_personalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          findFirst: {
            args: Prisma.seguridad_personalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seguridad_personalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          findMany: {
            args: Prisma.seguridad_personalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>[]
          }
          create: {
            args: Prisma.seguridad_personalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          createMany: {
            args: Prisma.seguridad_personalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.seguridad_personalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          update: {
            args: Prisma.seguridad_personalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          deleteMany: {
            args: Prisma.seguridad_personalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seguridad_personalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seguridad_personalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seguridad_personalPayload>
          }
          aggregate: {
            args: Prisma.Seguridad_personalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeguridad_personal>
          }
          groupBy: {
            args: Prisma.seguridad_personalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Seguridad_personalGroupByOutputType>[]
          }
          count: {
            args: Prisma.seguridad_personalCountArgs<ExtArgs>
            result: $Utils.Optional<Seguridad_personalCountAggregateOutputType> | number
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    bitacoras: number
    roles: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | UsuarioCountOutputTypeCountBitacorasArgs
    roles?: boolean | UsuarioCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacora_seguridadWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rol_seguridadWhereInput
  }


  /**
   * Count Type Rol_seguridadCountOutputType
   */

  export type Rol_seguridadCountOutputType = {
    usuarios: number
  }

  export type Rol_seguridadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol_seguridadCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Rol_seguridadCountOutputType without action
   */
  export type Rol_seguridadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol_seguridadCountOutputType
     */
    select?: Rol_seguridadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Rol_seguridadCountOutputType without action
   */
  export type Rol_seguridadCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id_usuario: string | null
    nombre_usuario: string | null
    contrasena: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id_usuario: string | null
    nombre_usuario: string | null
    contrasena: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id_usuario: number
    nombre_usuario: number
    contrasena: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    contrasena?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    contrasena?: true
  }

  export type UsuarioCountAggregateInputType = {
    id_usuario?: true
    nombre_usuario?: true
    contrasena?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre_usuario?: boolean
    contrasena?: boolean
    bitacoras?: boolean | usuario$bitacorasArgs<ExtArgs>
    roles?: boolean | usuario$rolesArgs<ExtArgs>
    seguridad_personal?: boolean | usuario$seguridad_personalArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type usuarioSelectScalar = {
    id_usuario?: boolean
    nombre_usuario?: boolean
    contrasena?: boolean
  }

  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacoras?: boolean | usuario$bitacorasArgs<ExtArgs>
    roles?: boolean | usuario$rolesArgs<ExtArgs>
    seguridad_personal?: boolean | usuario$seguridad_personalArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      bitacoras: Prisma.$bitacora_seguridadPayload<ExtArgs>[]
      roles: Prisma.$rol_seguridadPayload<ExtArgs>[]
      seguridad_personal: Prisma.$seguridad_personalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      nombre_usuario: string
      contrasena: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuarioWithId_usuarioOnly = await prisma.usuario.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bitacoras<T extends usuario$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, usuario$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findMany"> | Null>
    roles<T extends usuario$rolesArgs<ExtArgs> = {}>(args?: Subset<T, usuario$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findMany"> | Null>
    seguridad_personal<T extends usuario$seguridad_personalArgs<ExtArgs> = {}>(args?: Subset<T, usuario$seguridad_personalArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the usuario model
   */ 
  interface usuarioFieldRefs {
    readonly id_usuario: FieldRef<"usuario", 'String'>
    readonly nombre_usuario: FieldRef<"usuario", 'String'>
    readonly contrasena: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
  }

  /**
   * usuario.bitacoras
   */
  export type usuario$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    where?: bitacora_seguridadWhereInput
    orderBy?: bitacora_seguridadOrderByWithRelationInput | bitacora_seguridadOrderByWithRelationInput[]
    cursor?: bitacora_seguridadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bitacora_seguridadScalarFieldEnum | Bitacora_seguridadScalarFieldEnum[]
  }

  /**
   * usuario.roles
   */
  export type usuario$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    where?: rol_seguridadWhereInput
    orderBy?: rol_seguridadOrderByWithRelationInput | rol_seguridadOrderByWithRelationInput[]
    cursor?: rol_seguridadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rol_seguridadScalarFieldEnum | Rol_seguridadScalarFieldEnum[]
  }

  /**
   * usuario.seguridad_personal
   */
  export type usuario$seguridad_personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    where?: seguridad_personalWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model rol_seguridad
   */

  export type AggregateRol_seguridad = {
    _count: Rol_seguridadCountAggregateOutputType | null
    _min: Rol_seguridadMinAggregateOutputType | null
    _max: Rol_seguridadMaxAggregateOutputType | null
  }

  export type Rol_seguridadMinAggregateOutputType = {
    id_rol: string | null
    descripcion: string | null
  }

  export type Rol_seguridadMaxAggregateOutputType = {
    id_rol: string | null
    descripcion: string | null
  }

  export type Rol_seguridadCountAggregateOutputType = {
    id_rol: number
    descripcion: number
    _all: number
  }


  export type Rol_seguridadMinAggregateInputType = {
    id_rol?: true
    descripcion?: true
  }

  export type Rol_seguridadMaxAggregateInputType = {
    id_rol?: true
    descripcion?: true
  }

  export type Rol_seguridadCountAggregateInputType = {
    id_rol?: true
    descripcion?: true
    _all?: true
  }

  export type Rol_seguridadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol_seguridad to aggregate.
     */
    where?: rol_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_seguridads to fetch.
     */
    orderBy?: rol_seguridadOrderByWithRelationInput | rol_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rol_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rol_seguridads
    **/
    _count?: true | Rol_seguridadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rol_seguridadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rol_seguridadMaxAggregateInputType
  }

  export type GetRol_seguridadAggregateType<T extends Rol_seguridadAggregateArgs> = {
        [P in keyof T & keyof AggregateRol_seguridad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol_seguridad[P]>
      : GetScalarType<T[P], AggregateRol_seguridad[P]>
  }




  export type rol_seguridadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rol_seguridadWhereInput
    orderBy?: rol_seguridadOrderByWithAggregationInput | rol_seguridadOrderByWithAggregationInput[]
    by: Rol_seguridadScalarFieldEnum[] | Rol_seguridadScalarFieldEnum
    having?: rol_seguridadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rol_seguridadCountAggregateInputType | true
    _min?: Rol_seguridadMinAggregateInputType
    _max?: Rol_seguridadMaxAggregateInputType
  }

  export type Rol_seguridadGroupByOutputType = {
    id_rol: string
    descripcion: string
    _count: Rol_seguridadCountAggregateOutputType | null
    _min: Rol_seguridadMinAggregateOutputType | null
    _max: Rol_seguridadMaxAggregateOutputType | null
  }

  type GetRol_seguridadGroupByPayload<T extends rol_seguridadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rol_seguridadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rol_seguridadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rol_seguridadGroupByOutputType[P]>
            : GetScalarType<T[P], Rol_seguridadGroupByOutputType[P]>
        }
      >
    >


  export type rol_seguridadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    descripcion?: boolean
    usuarios?: boolean | rol_seguridad$usuariosArgs<ExtArgs>
    _count?: boolean | Rol_seguridadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol_seguridad"]>


  export type rol_seguridadSelectScalar = {
    id_rol?: boolean
    descripcion?: boolean
  }

  export type rol_seguridadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | rol_seguridad$usuariosArgs<ExtArgs>
    _count?: boolean | Rol_seguridadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rol_seguridadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol_seguridad"
    objects: {
      usuarios: Prisma.$usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: string
      descripcion: string
    }, ExtArgs["result"]["rol_seguridad"]>
    composites: {}
  }

  type rol_seguridadGetPayload<S extends boolean | null | undefined | rol_seguridadDefaultArgs> = $Result.GetResult<Prisma.$rol_seguridadPayload, S>

  type rol_seguridadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rol_seguridadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Rol_seguridadCountAggregateInputType | true
    }

  export interface rol_seguridadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol_seguridad'], meta: { name: 'rol_seguridad' } }
    /**
     * Find zero or one Rol_seguridad that matches the filter.
     * @param {rol_seguridadFindUniqueArgs} args - Arguments to find a Rol_seguridad
     * @example
     * // Get one Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rol_seguridadFindUniqueArgs>(args: SelectSubset<T, rol_seguridadFindUniqueArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rol_seguridad that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rol_seguridadFindUniqueOrThrowArgs} args - Arguments to find a Rol_seguridad
     * @example
     * // Get one Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rol_seguridadFindUniqueOrThrowArgs>(args: SelectSubset<T, rol_seguridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rol_seguridad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadFindFirstArgs} args - Arguments to find a Rol_seguridad
     * @example
     * // Get one Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rol_seguridadFindFirstArgs>(args?: SelectSubset<T, rol_seguridadFindFirstArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rol_seguridad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadFindFirstOrThrowArgs} args - Arguments to find a Rol_seguridad
     * @example
     * // Get one Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rol_seguridadFindFirstOrThrowArgs>(args?: SelectSubset<T, rol_seguridadFindFirstOrThrowArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rol_seguridads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rol_seguridads
     * const rol_seguridads = await prisma.rol_seguridad.findMany()
     * 
     * // Get first 10 Rol_seguridads
     * const rol_seguridads = await prisma.rol_seguridad.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rol_seguridadWithId_rolOnly = await prisma.rol_seguridad.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rol_seguridadFindManyArgs>(args?: SelectSubset<T, rol_seguridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rol_seguridad.
     * @param {rol_seguridadCreateArgs} args - Arguments to create a Rol_seguridad.
     * @example
     * // Create one Rol_seguridad
     * const Rol_seguridad = await prisma.rol_seguridad.create({
     *   data: {
     *     // ... data to create a Rol_seguridad
     *   }
     * })
     * 
     */
    create<T extends rol_seguridadCreateArgs>(args: SelectSubset<T, rol_seguridadCreateArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rol_seguridads.
     * @param {rol_seguridadCreateManyArgs} args - Arguments to create many Rol_seguridads.
     * @example
     * // Create many Rol_seguridads
     * const rol_seguridad = await prisma.rol_seguridad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rol_seguridadCreateManyArgs>(args?: SelectSubset<T, rol_seguridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol_seguridad.
     * @param {rol_seguridadDeleteArgs} args - Arguments to delete one Rol_seguridad.
     * @example
     * // Delete one Rol_seguridad
     * const Rol_seguridad = await prisma.rol_seguridad.delete({
     *   where: {
     *     // ... filter to delete one Rol_seguridad
     *   }
     * })
     * 
     */
    delete<T extends rol_seguridadDeleteArgs>(args: SelectSubset<T, rol_seguridadDeleteArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rol_seguridad.
     * @param {rol_seguridadUpdateArgs} args - Arguments to update one Rol_seguridad.
     * @example
     * // Update one Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rol_seguridadUpdateArgs>(args: SelectSubset<T, rol_seguridadUpdateArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rol_seguridads.
     * @param {rol_seguridadDeleteManyArgs} args - Arguments to filter Rol_seguridads to delete.
     * @example
     * // Delete a few Rol_seguridads
     * const { count } = await prisma.rol_seguridad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rol_seguridadDeleteManyArgs>(args?: SelectSubset<T, rol_seguridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rol_seguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rol_seguridads
     * const rol_seguridad = await prisma.rol_seguridad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rol_seguridadUpdateManyArgs>(args: SelectSubset<T, rol_seguridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol_seguridad.
     * @param {rol_seguridadUpsertArgs} args - Arguments to update or create a Rol_seguridad.
     * @example
     * // Update or create a Rol_seguridad
     * const rol_seguridad = await prisma.rol_seguridad.upsert({
     *   create: {
     *     // ... data to create a Rol_seguridad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol_seguridad we want to update
     *   }
     * })
     */
    upsert<T extends rol_seguridadUpsertArgs>(args: SelectSubset<T, rol_seguridadUpsertArgs<ExtArgs>>): Prisma__rol_seguridadClient<$Result.GetResult<Prisma.$rol_seguridadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rol_seguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadCountArgs} args - Arguments to filter Rol_seguridads to count.
     * @example
     * // Count the number of Rol_seguridads
     * const count = await prisma.rol_seguridad.count({
     *   where: {
     *     // ... the filter for the Rol_seguridads we want to count
     *   }
     * })
    **/
    count<T extends rol_seguridadCountArgs>(
      args?: Subset<T, rol_seguridadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rol_seguridadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol_seguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rol_seguridadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rol_seguridadAggregateArgs>(args: Subset<T, Rol_seguridadAggregateArgs>): Prisma.PrismaPromise<GetRol_seguridadAggregateType<T>>

    /**
     * Group by Rol_seguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rol_seguridadGroupByArgs} args - Group by arguments.
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
      T extends rol_seguridadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rol_seguridadGroupByArgs['orderBy'] }
        : { orderBy?: rol_seguridadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rol_seguridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRol_seguridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol_seguridad model
   */
  readonly fields: rol_seguridadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol_seguridad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rol_seguridadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends rol_seguridad$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, rol_seguridad$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the rol_seguridad model
   */ 
  interface rol_seguridadFieldRefs {
    readonly id_rol: FieldRef<"rol_seguridad", 'String'>
    readonly descripcion: FieldRef<"rol_seguridad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol_seguridad findUnique
   */
  export type rol_seguridadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which rol_seguridad to fetch.
     */
    where: rol_seguridadWhereUniqueInput
  }

  /**
   * rol_seguridad findUniqueOrThrow
   */
  export type rol_seguridadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which rol_seguridad to fetch.
     */
    where: rol_seguridadWhereUniqueInput
  }

  /**
   * rol_seguridad findFirst
   */
  export type rol_seguridadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which rol_seguridad to fetch.
     */
    where?: rol_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_seguridads to fetch.
     */
    orderBy?: rol_seguridadOrderByWithRelationInput | rol_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rol_seguridads.
     */
    cursor?: rol_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rol_seguridads.
     */
    distinct?: Rol_seguridadScalarFieldEnum | Rol_seguridadScalarFieldEnum[]
  }

  /**
   * rol_seguridad findFirstOrThrow
   */
  export type rol_seguridadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which rol_seguridad to fetch.
     */
    where?: rol_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_seguridads to fetch.
     */
    orderBy?: rol_seguridadOrderByWithRelationInput | rol_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rol_seguridads.
     */
    cursor?: rol_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rol_seguridads.
     */
    distinct?: Rol_seguridadScalarFieldEnum | Rol_seguridadScalarFieldEnum[]
  }

  /**
   * rol_seguridad findMany
   */
  export type rol_seguridadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which rol_seguridads to fetch.
     */
    where?: rol_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rol_seguridads to fetch.
     */
    orderBy?: rol_seguridadOrderByWithRelationInput | rol_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rol_seguridads.
     */
    cursor?: rol_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rol_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rol_seguridads.
     */
    skip?: number
    distinct?: Rol_seguridadScalarFieldEnum | Rol_seguridadScalarFieldEnum[]
  }

  /**
   * rol_seguridad create
   */
  export type rol_seguridadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * The data needed to create a rol_seguridad.
     */
    data: XOR<rol_seguridadCreateInput, rol_seguridadUncheckedCreateInput>
  }

  /**
   * rol_seguridad createMany
   */
  export type rol_seguridadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rol_seguridads.
     */
    data: rol_seguridadCreateManyInput | rol_seguridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol_seguridad update
   */
  export type rol_seguridadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * The data needed to update a rol_seguridad.
     */
    data: XOR<rol_seguridadUpdateInput, rol_seguridadUncheckedUpdateInput>
    /**
     * Choose, which rol_seguridad to update.
     */
    where: rol_seguridadWhereUniqueInput
  }

  /**
   * rol_seguridad updateMany
   */
  export type rol_seguridadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rol_seguridads.
     */
    data: XOR<rol_seguridadUpdateManyMutationInput, rol_seguridadUncheckedUpdateManyInput>
    /**
     * Filter which rol_seguridads to update
     */
    where?: rol_seguridadWhereInput
  }

  /**
   * rol_seguridad upsert
   */
  export type rol_seguridadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * The filter to search for the rol_seguridad to update in case it exists.
     */
    where: rol_seguridadWhereUniqueInput
    /**
     * In case the rol_seguridad found by the `where` argument doesn't exist, create a new rol_seguridad with this data.
     */
    create: XOR<rol_seguridadCreateInput, rol_seguridadUncheckedCreateInput>
    /**
     * In case the rol_seguridad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rol_seguridadUpdateInput, rol_seguridadUncheckedUpdateInput>
  }

  /**
   * rol_seguridad delete
   */
  export type rol_seguridadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
    /**
     * Filter which rol_seguridad to delete.
     */
    where: rol_seguridadWhereUniqueInput
  }

  /**
   * rol_seguridad deleteMany
   */
  export type rol_seguridadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol_seguridads to delete
     */
    where?: rol_seguridadWhereInput
  }

  /**
   * rol_seguridad.usuarios
   */
  export type rol_seguridad$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    cursor?: usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * rol_seguridad without action
   */
  export type rol_seguridadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol_seguridad
     */
    select?: rol_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rol_seguridadInclude<ExtArgs> | null
  }


  /**
   * Model bitacora_seguridad
   */

  export type AggregateBitacora_seguridad = {
    _count: Bitacora_seguridadCountAggregateOutputType | null
    _min: Bitacora_seguridadMinAggregateOutputType | null
    _max: Bitacora_seguridadMaxAggregateOutputType | null
  }

  export type Bitacora_seguridadMinAggregateOutputType = {
    id_bitacora: string | null
    id_usuario: string | null
    accion: string | null
    fecha: Date | null
  }

  export type Bitacora_seguridadMaxAggregateOutputType = {
    id_bitacora: string | null
    id_usuario: string | null
    accion: string | null
    fecha: Date | null
  }

  export type Bitacora_seguridadCountAggregateOutputType = {
    id_bitacora: number
    id_usuario: number
    accion: number
    fecha: number
    _all: number
  }


  export type Bitacora_seguridadMinAggregateInputType = {
    id_bitacora?: true
    id_usuario?: true
    accion?: true
    fecha?: true
  }

  export type Bitacora_seguridadMaxAggregateInputType = {
    id_bitacora?: true
    id_usuario?: true
    accion?: true
    fecha?: true
  }

  export type Bitacora_seguridadCountAggregateInputType = {
    id_bitacora?: true
    id_usuario?: true
    accion?: true
    fecha?: true
    _all?: true
  }

  export type Bitacora_seguridadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacora_seguridad to aggregate.
     */
    where?: bitacora_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_seguridads to fetch.
     */
    orderBy?: bitacora_seguridadOrderByWithRelationInput | bitacora_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bitacora_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bitacora_seguridads
    **/
    _count?: true | Bitacora_seguridadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bitacora_seguridadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bitacora_seguridadMaxAggregateInputType
  }

  export type GetBitacora_seguridadAggregateType<T extends Bitacora_seguridadAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora_seguridad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora_seguridad[P]>
      : GetScalarType<T[P], AggregateBitacora_seguridad[P]>
  }




  export type bitacora_seguridadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacora_seguridadWhereInput
    orderBy?: bitacora_seguridadOrderByWithAggregationInput | bitacora_seguridadOrderByWithAggregationInput[]
    by: Bitacora_seguridadScalarFieldEnum[] | Bitacora_seguridadScalarFieldEnum
    having?: bitacora_seguridadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bitacora_seguridadCountAggregateInputType | true
    _min?: Bitacora_seguridadMinAggregateInputType
    _max?: Bitacora_seguridadMaxAggregateInputType
  }

  export type Bitacora_seguridadGroupByOutputType = {
    id_bitacora: string
    id_usuario: string
    accion: string
    fecha: Date
    _count: Bitacora_seguridadCountAggregateOutputType | null
    _min: Bitacora_seguridadMinAggregateOutputType | null
    _max: Bitacora_seguridadMaxAggregateOutputType | null
  }

  type GetBitacora_seguridadGroupByPayload<T extends bitacora_seguridadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bitacora_seguridadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bitacora_seguridadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bitacora_seguridadGroupByOutputType[P]>
            : GetScalarType<T[P], Bitacora_seguridadGroupByOutputType[P]>
        }
      >
    >


  export type bitacora_seguridadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora_seguridad"]>


  export type bitacora_seguridadSelectScalar = {
    id_bitacora?: boolean
    id_usuario?: boolean
    accion?: boolean
    fecha?: boolean
  }

  export type bitacora_seguridadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $bitacora_seguridadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bitacora_seguridad"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_bitacora: string
      id_usuario: string
      accion: string
      fecha: Date
    }, ExtArgs["result"]["bitacora_seguridad"]>
    composites: {}
  }

  type bitacora_seguridadGetPayload<S extends boolean | null | undefined | bitacora_seguridadDefaultArgs> = $Result.GetResult<Prisma.$bitacora_seguridadPayload, S>

  type bitacora_seguridadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bitacora_seguridadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Bitacora_seguridadCountAggregateInputType | true
    }

  export interface bitacora_seguridadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bitacora_seguridad'], meta: { name: 'bitacora_seguridad' } }
    /**
     * Find zero or one Bitacora_seguridad that matches the filter.
     * @param {bitacora_seguridadFindUniqueArgs} args - Arguments to find a Bitacora_seguridad
     * @example
     * // Get one Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bitacora_seguridadFindUniqueArgs>(args: SelectSubset<T, bitacora_seguridadFindUniqueArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bitacora_seguridad that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bitacora_seguridadFindUniqueOrThrowArgs} args - Arguments to find a Bitacora_seguridad
     * @example
     * // Get one Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bitacora_seguridadFindUniqueOrThrowArgs>(args: SelectSubset<T, bitacora_seguridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bitacora_seguridad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadFindFirstArgs} args - Arguments to find a Bitacora_seguridad
     * @example
     * // Get one Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bitacora_seguridadFindFirstArgs>(args?: SelectSubset<T, bitacora_seguridadFindFirstArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bitacora_seguridad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadFindFirstOrThrowArgs} args - Arguments to find a Bitacora_seguridad
     * @example
     * // Get one Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bitacora_seguridadFindFirstOrThrowArgs>(args?: SelectSubset<T, bitacora_seguridadFindFirstOrThrowArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bitacora_seguridads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacora_seguridads
     * const bitacora_seguridads = await prisma.bitacora_seguridad.findMany()
     * 
     * // Get first 10 Bitacora_seguridads
     * const bitacora_seguridads = await prisma.bitacora_seguridad.findMany({ take: 10 })
     * 
     * // Only select the `id_bitacora`
     * const bitacora_seguridadWithId_bitacoraOnly = await prisma.bitacora_seguridad.findMany({ select: { id_bitacora: true } })
     * 
     */
    findMany<T extends bitacora_seguridadFindManyArgs>(args?: SelectSubset<T, bitacora_seguridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bitacora_seguridad.
     * @param {bitacora_seguridadCreateArgs} args - Arguments to create a Bitacora_seguridad.
     * @example
     * // Create one Bitacora_seguridad
     * const Bitacora_seguridad = await prisma.bitacora_seguridad.create({
     *   data: {
     *     // ... data to create a Bitacora_seguridad
     *   }
     * })
     * 
     */
    create<T extends bitacora_seguridadCreateArgs>(args: SelectSubset<T, bitacora_seguridadCreateArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bitacora_seguridads.
     * @param {bitacora_seguridadCreateManyArgs} args - Arguments to create many Bitacora_seguridads.
     * @example
     * // Create many Bitacora_seguridads
     * const bitacora_seguridad = await prisma.bitacora_seguridad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bitacora_seguridadCreateManyArgs>(args?: SelectSubset<T, bitacora_seguridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bitacora_seguridad.
     * @param {bitacora_seguridadDeleteArgs} args - Arguments to delete one Bitacora_seguridad.
     * @example
     * // Delete one Bitacora_seguridad
     * const Bitacora_seguridad = await prisma.bitacora_seguridad.delete({
     *   where: {
     *     // ... filter to delete one Bitacora_seguridad
     *   }
     * })
     * 
     */
    delete<T extends bitacora_seguridadDeleteArgs>(args: SelectSubset<T, bitacora_seguridadDeleteArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bitacora_seguridad.
     * @param {bitacora_seguridadUpdateArgs} args - Arguments to update one Bitacora_seguridad.
     * @example
     * // Update one Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bitacora_seguridadUpdateArgs>(args: SelectSubset<T, bitacora_seguridadUpdateArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bitacora_seguridads.
     * @param {bitacora_seguridadDeleteManyArgs} args - Arguments to filter Bitacora_seguridads to delete.
     * @example
     * // Delete a few Bitacora_seguridads
     * const { count } = await prisma.bitacora_seguridad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bitacora_seguridadDeleteManyArgs>(args?: SelectSubset<T, bitacora_seguridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacora_seguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacora_seguridads
     * const bitacora_seguridad = await prisma.bitacora_seguridad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bitacora_seguridadUpdateManyArgs>(args: SelectSubset<T, bitacora_seguridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bitacora_seguridad.
     * @param {bitacora_seguridadUpsertArgs} args - Arguments to update or create a Bitacora_seguridad.
     * @example
     * // Update or create a Bitacora_seguridad
     * const bitacora_seguridad = await prisma.bitacora_seguridad.upsert({
     *   create: {
     *     // ... data to create a Bitacora_seguridad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora_seguridad we want to update
     *   }
     * })
     */
    upsert<T extends bitacora_seguridadUpsertArgs>(args: SelectSubset<T, bitacora_seguridadUpsertArgs<ExtArgs>>): Prisma__bitacora_seguridadClient<$Result.GetResult<Prisma.$bitacora_seguridadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bitacora_seguridads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadCountArgs} args - Arguments to filter Bitacora_seguridads to count.
     * @example
     * // Count the number of Bitacora_seguridads
     * const count = await prisma.bitacora_seguridad.count({
     *   where: {
     *     // ... the filter for the Bitacora_seguridads we want to count
     *   }
     * })
    **/
    count<T extends bitacora_seguridadCountArgs>(
      args?: Subset<T, bitacora_seguridadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bitacora_seguridadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora_seguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bitacora_seguridadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bitacora_seguridadAggregateArgs>(args: Subset<T, Bitacora_seguridadAggregateArgs>): Prisma.PrismaPromise<GetBitacora_seguridadAggregateType<T>>

    /**
     * Group by Bitacora_seguridad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_seguridadGroupByArgs} args - Group by arguments.
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
      T extends bitacora_seguridadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bitacora_seguridadGroupByArgs['orderBy'] }
        : { orderBy?: bitacora_seguridadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bitacora_seguridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacora_seguridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bitacora_seguridad model
   */
  readonly fields: bitacora_seguridadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bitacora_seguridad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bitacora_seguridadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the bitacora_seguridad model
   */ 
  interface bitacora_seguridadFieldRefs {
    readonly id_bitacora: FieldRef<"bitacora_seguridad", 'String'>
    readonly id_usuario: FieldRef<"bitacora_seguridad", 'String'>
    readonly accion: FieldRef<"bitacora_seguridad", 'String'>
    readonly fecha: FieldRef<"bitacora_seguridad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bitacora_seguridad findUnique
   */
  export type bitacora_seguridadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_seguridad to fetch.
     */
    where: bitacora_seguridadWhereUniqueInput
  }

  /**
   * bitacora_seguridad findUniqueOrThrow
   */
  export type bitacora_seguridadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_seguridad to fetch.
     */
    where: bitacora_seguridadWhereUniqueInput
  }

  /**
   * bitacora_seguridad findFirst
   */
  export type bitacora_seguridadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_seguridad to fetch.
     */
    where?: bitacora_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_seguridads to fetch.
     */
    orderBy?: bitacora_seguridadOrderByWithRelationInput | bitacora_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacora_seguridads.
     */
    cursor?: bitacora_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacora_seguridads.
     */
    distinct?: Bitacora_seguridadScalarFieldEnum | Bitacora_seguridadScalarFieldEnum[]
  }

  /**
   * bitacora_seguridad findFirstOrThrow
   */
  export type bitacora_seguridadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_seguridad to fetch.
     */
    where?: bitacora_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_seguridads to fetch.
     */
    orderBy?: bitacora_seguridadOrderByWithRelationInput | bitacora_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacora_seguridads.
     */
    cursor?: bitacora_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_seguridads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacora_seguridads.
     */
    distinct?: Bitacora_seguridadScalarFieldEnum | Bitacora_seguridadScalarFieldEnum[]
  }

  /**
   * bitacora_seguridad findMany
   */
  export type bitacora_seguridadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_seguridads to fetch.
     */
    where?: bitacora_seguridadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_seguridads to fetch.
     */
    orderBy?: bitacora_seguridadOrderByWithRelationInput | bitacora_seguridadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bitacora_seguridads.
     */
    cursor?: bitacora_seguridadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_seguridads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_seguridads.
     */
    skip?: number
    distinct?: Bitacora_seguridadScalarFieldEnum | Bitacora_seguridadScalarFieldEnum[]
  }

  /**
   * bitacora_seguridad create
   */
  export type bitacora_seguridadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * The data needed to create a bitacora_seguridad.
     */
    data: XOR<bitacora_seguridadCreateInput, bitacora_seguridadUncheckedCreateInput>
  }

  /**
   * bitacora_seguridad createMany
   */
  export type bitacora_seguridadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bitacora_seguridads.
     */
    data: bitacora_seguridadCreateManyInput | bitacora_seguridadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bitacora_seguridad update
   */
  export type bitacora_seguridadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * The data needed to update a bitacora_seguridad.
     */
    data: XOR<bitacora_seguridadUpdateInput, bitacora_seguridadUncheckedUpdateInput>
    /**
     * Choose, which bitacora_seguridad to update.
     */
    where: bitacora_seguridadWhereUniqueInput
  }

  /**
   * bitacora_seguridad updateMany
   */
  export type bitacora_seguridadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bitacora_seguridads.
     */
    data: XOR<bitacora_seguridadUpdateManyMutationInput, bitacora_seguridadUncheckedUpdateManyInput>
    /**
     * Filter which bitacora_seguridads to update
     */
    where?: bitacora_seguridadWhereInput
  }

  /**
   * bitacora_seguridad upsert
   */
  export type bitacora_seguridadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * The filter to search for the bitacora_seguridad to update in case it exists.
     */
    where: bitacora_seguridadWhereUniqueInput
    /**
     * In case the bitacora_seguridad found by the `where` argument doesn't exist, create a new bitacora_seguridad with this data.
     */
    create: XOR<bitacora_seguridadCreateInput, bitacora_seguridadUncheckedCreateInput>
    /**
     * In case the bitacora_seguridad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bitacora_seguridadUpdateInput, bitacora_seguridadUncheckedUpdateInput>
  }

  /**
   * bitacora_seguridad delete
   */
  export type bitacora_seguridadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
    /**
     * Filter which bitacora_seguridad to delete.
     */
    where: bitacora_seguridadWhereUniqueInput
  }

  /**
   * bitacora_seguridad deleteMany
   */
  export type bitacora_seguridadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacora_seguridads to delete
     */
    where?: bitacora_seguridadWhereInput
  }

  /**
   * bitacora_seguridad without action
   */
  export type bitacora_seguridadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_seguridad
     */
    select?: bitacora_seguridadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_seguridadInclude<ExtArgs> | null
  }


  /**
   * Model seguridad_personal
   */

  export type AggregateSeguridad_personal = {
    _count: Seguridad_personalCountAggregateOutputType | null
    _min: Seguridad_personalMinAggregateOutputType | null
    _max: Seguridad_personalMaxAggregateOutputType | null
  }

  export type Seguridad_personalMinAggregateOutputType = {
    id_usuario: string | null
    usuario: string | null
    contrasena: string | null
    rol: string | null
    ultimo_acceso: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type Seguridad_personalMaxAggregateOutputType = {
    id_usuario: string | null
    usuario: string | null
    contrasena: string | null
    rol: string | null
    ultimo_acceso: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type Seguridad_personalCountAggregateOutputType = {
    id_usuario: number
    usuario: number
    contrasena: number
    rol: number
    ultimo_acceso: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type Seguridad_personalMinAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contrasena?: true
    rol?: true
    ultimo_acceso?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type Seguridad_personalMaxAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contrasena?: true
    rol?: true
    ultimo_acceso?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type Seguridad_personalCountAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contrasena?: true
    rol?: true
    ultimo_acceso?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type Seguridad_personalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seguridad_personal to aggregate.
     */
    where?: seguridad_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguridad_personals to fetch.
     */
    orderBy?: seguridad_personalOrderByWithRelationInput | seguridad_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seguridad_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguridad_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguridad_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seguridad_personals
    **/
    _count?: true | Seguridad_personalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Seguridad_personalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Seguridad_personalMaxAggregateInputType
  }

  export type GetSeguridad_personalAggregateType<T extends Seguridad_personalAggregateArgs> = {
        [P in keyof T & keyof AggregateSeguridad_personal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeguridad_personal[P]>
      : GetScalarType<T[P], AggregateSeguridad_personal[P]>
  }




  export type seguridad_personalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguridad_personalWhereInput
    orderBy?: seguridad_personalOrderByWithAggregationInput | seguridad_personalOrderByWithAggregationInput[]
    by: Seguridad_personalScalarFieldEnum[] | Seguridad_personalScalarFieldEnum
    having?: seguridad_personalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Seguridad_personalCountAggregateInputType | true
    _min?: Seguridad_personalMinAggregateInputType
    _max?: Seguridad_personalMaxAggregateInputType
  }

  export type Seguridad_personalGroupByOutputType = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso: Date
    estatus: string
    fecha_modificacion: Date
    _count: Seguridad_personalCountAggregateOutputType | null
    _min: Seguridad_personalMinAggregateOutputType | null
    _max: Seguridad_personalMaxAggregateOutputType | null
  }

  type GetSeguridad_personalGroupByPayload<T extends seguridad_personalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seguridad_personalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Seguridad_personalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Seguridad_personalGroupByOutputType[P]>
            : GetScalarType<T[P], Seguridad_personalGroupByOutputType[P]>
        }
      >
    >


  export type seguridad_personalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    contrasena?: boolean
    rol?: boolean
    ultimo_acceso?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    usuario_rel?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguridad_personal"]>


  export type seguridad_personalSelectScalar = {
    id_usuario?: boolean
    usuario?: boolean
    contrasena?: boolean
    rol?: boolean
    ultimo_acceso?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type seguridad_personalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario_rel?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $seguridad_personalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seguridad_personal"
    objects: {
      usuario_rel: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      usuario: string
      contrasena: string
      rol: string
      ultimo_acceso: Date
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["seguridad_personal"]>
    composites: {}
  }

  type seguridad_personalGetPayload<S extends boolean | null | undefined | seguridad_personalDefaultArgs> = $Result.GetResult<Prisma.$seguridad_personalPayload, S>

  type seguridad_personalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<seguridad_personalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Seguridad_personalCountAggregateInputType | true
    }

  export interface seguridad_personalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seguridad_personal'], meta: { name: 'seguridad_personal' } }
    /**
     * Find zero or one Seguridad_personal that matches the filter.
     * @param {seguridad_personalFindUniqueArgs} args - Arguments to find a Seguridad_personal
     * @example
     * // Get one Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seguridad_personalFindUniqueArgs>(args: SelectSubset<T, seguridad_personalFindUniqueArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Seguridad_personal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {seguridad_personalFindUniqueOrThrowArgs} args - Arguments to find a Seguridad_personal
     * @example
     * // Get one Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seguridad_personalFindUniqueOrThrowArgs>(args: SelectSubset<T, seguridad_personalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Seguridad_personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalFindFirstArgs} args - Arguments to find a Seguridad_personal
     * @example
     * // Get one Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seguridad_personalFindFirstArgs>(args?: SelectSubset<T, seguridad_personalFindFirstArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Seguridad_personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalFindFirstOrThrowArgs} args - Arguments to find a Seguridad_personal
     * @example
     * // Get one Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seguridad_personalFindFirstOrThrowArgs>(args?: SelectSubset<T, seguridad_personalFindFirstOrThrowArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Seguridad_personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seguridad_personals
     * const seguridad_personals = await prisma.seguridad_personal.findMany()
     * 
     * // Get first 10 Seguridad_personals
     * const seguridad_personals = await prisma.seguridad_personal.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const seguridad_personalWithId_usuarioOnly = await prisma.seguridad_personal.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends seguridad_personalFindManyArgs>(args?: SelectSubset<T, seguridad_personalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Seguridad_personal.
     * @param {seguridad_personalCreateArgs} args - Arguments to create a Seguridad_personal.
     * @example
     * // Create one Seguridad_personal
     * const Seguridad_personal = await prisma.seguridad_personal.create({
     *   data: {
     *     // ... data to create a Seguridad_personal
     *   }
     * })
     * 
     */
    create<T extends seguridad_personalCreateArgs>(args: SelectSubset<T, seguridad_personalCreateArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Seguridad_personals.
     * @param {seguridad_personalCreateManyArgs} args - Arguments to create many Seguridad_personals.
     * @example
     * // Create many Seguridad_personals
     * const seguridad_personal = await prisma.seguridad_personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seguridad_personalCreateManyArgs>(args?: SelectSubset<T, seguridad_personalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seguridad_personal.
     * @param {seguridad_personalDeleteArgs} args - Arguments to delete one Seguridad_personal.
     * @example
     * // Delete one Seguridad_personal
     * const Seguridad_personal = await prisma.seguridad_personal.delete({
     *   where: {
     *     // ... filter to delete one Seguridad_personal
     *   }
     * })
     * 
     */
    delete<T extends seguridad_personalDeleteArgs>(args: SelectSubset<T, seguridad_personalDeleteArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Seguridad_personal.
     * @param {seguridad_personalUpdateArgs} args - Arguments to update one Seguridad_personal.
     * @example
     * // Update one Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seguridad_personalUpdateArgs>(args: SelectSubset<T, seguridad_personalUpdateArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Seguridad_personals.
     * @param {seguridad_personalDeleteManyArgs} args - Arguments to filter Seguridad_personals to delete.
     * @example
     * // Delete a few Seguridad_personals
     * const { count } = await prisma.seguridad_personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seguridad_personalDeleteManyArgs>(args?: SelectSubset<T, seguridad_personalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seguridad_personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seguridad_personals
     * const seguridad_personal = await prisma.seguridad_personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seguridad_personalUpdateManyArgs>(args: SelectSubset<T, seguridad_personalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seguridad_personal.
     * @param {seguridad_personalUpsertArgs} args - Arguments to update or create a Seguridad_personal.
     * @example
     * // Update or create a Seguridad_personal
     * const seguridad_personal = await prisma.seguridad_personal.upsert({
     *   create: {
     *     // ... data to create a Seguridad_personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seguridad_personal we want to update
     *   }
     * })
     */
    upsert<T extends seguridad_personalUpsertArgs>(args: SelectSubset<T, seguridad_personalUpsertArgs<ExtArgs>>): Prisma__seguridad_personalClient<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Seguridad_personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalCountArgs} args - Arguments to filter Seguridad_personals to count.
     * @example
     * // Count the number of Seguridad_personals
     * const count = await prisma.seguridad_personal.count({
     *   where: {
     *     // ... the filter for the Seguridad_personals we want to count
     *   }
     * })
    **/
    count<T extends seguridad_personalCountArgs>(
      args?: Subset<T, seguridad_personalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seguridad_personalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seguridad_personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seguridad_personalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Seguridad_personalAggregateArgs>(args: Subset<T, Seguridad_personalAggregateArgs>): Prisma.PrismaPromise<GetSeguridad_personalAggregateType<T>>

    /**
     * Group by Seguridad_personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seguridad_personalGroupByArgs} args - Group by arguments.
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
      T extends seguridad_personalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seguridad_personalGroupByArgs['orderBy'] }
        : { orderBy?: seguridad_personalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, seguridad_personalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguridad_personalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seguridad_personal model
   */
  readonly fields: seguridad_personalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seguridad_personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seguridad_personalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario_rel<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the seguridad_personal model
   */ 
  interface seguridad_personalFieldRefs {
    readonly id_usuario: FieldRef<"seguridad_personal", 'String'>
    readonly usuario: FieldRef<"seguridad_personal", 'String'>
    readonly contrasena: FieldRef<"seguridad_personal", 'String'>
    readonly rol: FieldRef<"seguridad_personal", 'String'>
    readonly ultimo_acceso: FieldRef<"seguridad_personal", 'DateTime'>
    readonly estatus: FieldRef<"seguridad_personal", 'String'>
    readonly fecha_modificacion: FieldRef<"seguridad_personal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * seguridad_personal findUnique
   */
  export type seguridad_personalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter, which seguridad_personal to fetch.
     */
    where: seguridad_personalWhereUniqueInput
  }

  /**
   * seguridad_personal findUniqueOrThrow
   */
  export type seguridad_personalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter, which seguridad_personal to fetch.
     */
    where: seguridad_personalWhereUniqueInput
  }

  /**
   * seguridad_personal findFirst
   */
  export type seguridad_personalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter, which seguridad_personal to fetch.
     */
    where?: seguridad_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguridad_personals to fetch.
     */
    orderBy?: seguridad_personalOrderByWithRelationInput | seguridad_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seguridad_personals.
     */
    cursor?: seguridad_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguridad_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguridad_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seguridad_personals.
     */
    distinct?: Seguridad_personalScalarFieldEnum | Seguridad_personalScalarFieldEnum[]
  }

  /**
   * seguridad_personal findFirstOrThrow
   */
  export type seguridad_personalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter, which seguridad_personal to fetch.
     */
    where?: seguridad_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguridad_personals to fetch.
     */
    orderBy?: seguridad_personalOrderByWithRelationInput | seguridad_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seguridad_personals.
     */
    cursor?: seguridad_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguridad_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguridad_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seguridad_personals.
     */
    distinct?: Seguridad_personalScalarFieldEnum | Seguridad_personalScalarFieldEnum[]
  }

  /**
   * seguridad_personal findMany
   */
  export type seguridad_personalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter, which seguridad_personals to fetch.
     */
    where?: seguridad_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seguridad_personals to fetch.
     */
    orderBy?: seguridad_personalOrderByWithRelationInput | seguridad_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seguridad_personals.
     */
    cursor?: seguridad_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seguridad_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seguridad_personals.
     */
    skip?: number
    distinct?: Seguridad_personalScalarFieldEnum | Seguridad_personalScalarFieldEnum[]
  }

  /**
   * seguridad_personal create
   */
  export type seguridad_personalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * The data needed to create a seguridad_personal.
     */
    data: XOR<seguridad_personalCreateInput, seguridad_personalUncheckedCreateInput>
  }

  /**
   * seguridad_personal createMany
   */
  export type seguridad_personalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seguridad_personals.
     */
    data: seguridad_personalCreateManyInput | seguridad_personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seguridad_personal update
   */
  export type seguridad_personalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * The data needed to update a seguridad_personal.
     */
    data: XOR<seguridad_personalUpdateInput, seguridad_personalUncheckedUpdateInput>
    /**
     * Choose, which seguridad_personal to update.
     */
    where: seguridad_personalWhereUniqueInput
  }

  /**
   * seguridad_personal updateMany
   */
  export type seguridad_personalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seguridad_personals.
     */
    data: XOR<seguridad_personalUpdateManyMutationInput, seguridad_personalUncheckedUpdateManyInput>
    /**
     * Filter which seguridad_personals to update
     */
    where?: seguridad_personalWhereInput
  }

  /**
   * seguridad_personal upsert
   */
  export type seguridad_personalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * The filter to search for the seguridad_personal to update in case it exists.
     */
    where: seguridad_personalWhereUniqueInput
    /**
     * In case the seguridad_personal found by the `where` argument doesn't exist, create a new seguridad_personal with this data.
     */
    create: XOR<seguridad_personalCreateInput, seguridad_personalUncheckedCreateInput>
    /**
     * In case the seguridad_personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seguridad_personalUpdateInput, seguridad_personalUncheckedUpdateInput>
  }

  /**
   * seguridad_personal delete
   */
  export type seguridad_personalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    /**
     * Filter which seguridad_personal to delete.
     */
    where: seguridad_personalWhereUniqueInput
  }

  /**
   * seguridad_personal deleteMany
   */
  export type seguridad_personalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seguridad_personals to delete
     */
    where?: seguridad_personalWhereInput
  }

  /**
   * seguridad_personal without action
   */
  export type seguridad_personalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre_usuario: 'nombre_usuario',
    contrasena: 'contrasena'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Rol_seguridadScalarFieldEnum: {
    id_rol: 'id_rol',
    descripcion: 'descripcion'
  };

  export type Rol_seguridadScalarFieldEnum = (typeof Rol_seguridadScalarFieldEnum)[keyof typeof Rol_seguridadScalarFieldEnum]


  export const Bitacora_seguridadScalarFieldEnum: {
    id_bitacora: 'id_bitacora',
    id_usuario: 'id_usuario',
    accion: 'accion',
    fecha: 'fecha'
  };

  export type Bitacora_seguridadScalarFieldEnum = (typeof Bitacora_seguridadScalarFieldEnum)[keyof typeof Bitacora_seguridadScalarFieldEnum]


  export const Seguridad_personalScalarFieldEnum: {
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    contrasena: 'contrasena',
    rol: 'rol',
    ultimo_acceso: 'ultimo_acceso',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type Seguridad_personalScalarFieldEnum = (typeof Seguridad_personalScalarFieldEnum)[keyof typeof Seguridad_personalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_usuario?: StringFilter<"usuario"> | string
    nombre_usuario?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    bitacoras?: Bitacora_seguridadListRelationFilter
    roles?: Rol_seguridadListRelationFilter
    seguridad_personal?: XOR<Seguridad_personalNullableRelationFilter, seguridad_personalWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    contrasena?: SortOrder
    bitacoras?: bitacora_seguridadOrderByRelationAggregateInput
    roles?: rol_seguridadOrderByRelationAggregateInput
    seguridad_personal?: seguridad_personalOrderByWithRelationInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    nombre_usuario?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    bitacoras?: Bitacora_seguridadListRelationFilter
    roles?: Rol_seguridadListRelationFilter
    seguridad_personal?: XOR<Seguridad_personalNullableRelationFilter, seguridad_personalWhereInput> | null
  }, "id_usuario">

  export type usuarioOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    contrasena?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id_usuario?: StringWithAggregatesFilter<"usuario"> | string
    nombre_usuario?: StringWithAggregatesFilter<"usuario"> | string
    contrasena?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type rol_seguridadWhereInput = {
    AND?: rol_seguridadWhereInput | rol_seguridadWhereInput[]
    OR?: rol_seguridadWhereInput[]
    NOT?: rol_seguridadWhereInput | rol_seguridadWhereInput[]
    id_rol?: StringFilter<"rol_seguridad"> | string
    descripcion?: StringFilter<"rol_seguridad"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type rol_seguridadOrderByWithRelationInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    usuarios?: usuarioOrderByRelationAggregateInput
  }

  export type rol_seguridadWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: string
    AND?: rol_seguridadWhereInput | rol_seguridadWhereInput[]
    OR?: rol_seguridadWhereInput[]
    NOT?: rol_seguridadWhereInput | rol_seguridadWhereInput[]
    descripcion?: StringFilter<"rol_seguridad"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id_rol">

  export type rol_seguridadOrderByWithAggregationInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    _count?: rol_seguridadCountOrderByAggregateInput
    _max?: rol_seguridadMaxOrderByAggregateInput
    _min?: rol_seguridadMinOrderByAggregateInput
  }

  export type rol_seguridadScalarWhereWithAggregatesInput = {
    AND?: rol_seguridadScalarWhereWithAggregatesInput | rol_seguridadScalarWhereWithAggregatesInput[]
    OR?: rol_seguridadScalarWhereWithAggregatesInput[]
    NOT?: rol_seguridadScalarWhereWithAggregatesInput | rol_seguridadScalarWhereWithAggregatesInput[]
    id_rol?: StringWithAggregatesFilter<"rol_seguridad"> | string
    descripcion?: StringWithAggregatesFilter<"rol_seguridad"> | string
  }

  export type bitacora_seguridadWhereInput = {
    AND?: bitacora_seguridadWhereInput | bitacora_seguridadWhereInput[]
    OR?: bitacora_seguridadWhereInput[]
    NOT?: bitacora_seguridadWhereInput | bitacora_seguridadWhereInput[]
    id_bitacora?: StringFilter<"bitacora_seguridad"> | string
    id_usuario?: StringFilter<"bitacora_seguridad"> | string
    accion?: StringFilter<"bitacora_seguridad"> | string
    fecha?: DateTimeFilter<"bitacora_seguridad"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }

  export type bitacora_seguridadOrderByWithRelationInput = {
    id_bitacora?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
  }

  export type bitacora_seguridadWhereUniqueInput = Prisma.AtLeast<{
    id_bitacora?: string
    AND?: bitacora_seguridadWhereInput | bitacora_seguridadWhereInput[]
    OR?: bitacora_seguridadWhereInput[]
    NOT?: bitacora_seguridadWhereInput | bitacora_seguridadWhereInput[]
    id_usuario?: StringFilter<"bitacora_seguridad"> | string
    accion?: StringFilter<"bitacora_seguridad"> | string
    fecha?: DateTimeFilter<"bitacora_seguridad"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }, "id_bitacora">

  export type bitacora_seguridadOrderByWithAggregationInput = {
    id_bitacora?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    _count?: bitacora_seguridadCountOrderByAggregateInput
    _max?: bitacora_seguridadMaxOrderByAggregateInput
    _min?: bitacora_seguridadMinOrderByAggregateInput
  }

  export type bitacora_seguridadScalarWhereWithAggregatesInput = {
    AND?: bitacora_seguridadScalarWhereWithAggregatesInput | bitacora_seguridadScalarWhereWithAggregatesInput[]
    OR?: bitacora_seguridadScalarWhereWithAggregatesInput[]
    NOT?: bitacora_seguridadScalarWhereWithAggregatesInput | bitacora_seguridadScalarWhereWithAggregatesInput[]
    id_bitacora?: StringWithAggregatesFilter<"bitacora_seguridad"> | string
    id_usuario?: StringWithAggregatesFilter<"bitacora_seguridad"> | string
    accion?: StringWithAggregatesFilter<"bitacora_seguridad"> | string
    fecha?: DateTimeWithAggregatesFilter<"bitacora_seguridad"> | Date | string
  }

  export type seguridad_personalWhereInput = {
    AND?: seguridad_personalWhereInput | seguridad_personalWhereInput[]
    OR?: seguridad_personalWhereInput[]
    NOT?: seguridad_personalWhereInput | seguridad_personalWhereInput[]
    id_usuario?: StringFilter<"seguridad_personal"> | string
    usuario?: StringFilter<"seguridad_personal"> | string
    contrasena?: StringFilter<"seguridad_personal"> | string
    rol?: StringFilter<"seguridad_personal"> | string
    ultimo_acceso?: DateTimeFilter<"seguridad_personal"> | Date | string
    estatus?: StringFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeFilter<"seguridad_personal"> | Date | string
    usuario_rel?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }

  export type seguridad_personalOrderByWithRelationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    usuario_rel?: usuarioOrderByWithRelationInput
  }

  export type seguridad_personalWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: string
    AND?: seguridad_personalWhereInput | seguridad_personalWhereInput[]
    OR?: seguridad_personalWhereInput[]
    NOT?: seguridad_personalWhereInput | seguridad_personalWhereInput[]
    usuario?: StringFilter<"seguridad_personal"> | string
    contrasena?: StringFilter<"seguridad_personal"> | string
    rol?: StringFilter<"seguridad_personal"> | string
    ultimo_acceso?: DateTimeFilter<"seguridad_personal"> | Date | string
    estatus?: StringFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeFilter<"seguridad_personal"> | Date | string
    usuario_rel?: XOR<UsuarioRelationFilter, usuarioWhereInput>
  }, "id_usuario">

  export type seguridad_personalOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: seguridad_personalCountOrderByAggregateInput
    _max?: seguridad_personalMaxOrderByAggregateInput
    _min?: seguridad_personalMinOrderByAggregateInput
  }

  export type seguridad_personalScalarWhereWithAggregatesInput = {
    AND?: seguridad_personalScalarWhereWithAggregatesInput | seguridad_personalScalarWhereWithAggregatesInput[]
    OR?: seguridad_personalScalarWhereWithAggregatesInput[]
    NOT?: seguridad_personalScalarWhereWithAggregatesInput | seguridad_personalScalarWhereWithAggregatesInput[]
    id_usuario?: StringWithAggregatesFilter<"seguridad_personal"> | string
    usuario?: StringWithAggregatesFilter<"seguridad_personal"> | string
    contrasena?: StringWithAggregatesFilter<"seguridad_personal"> | string
    rol?: StringWithAggregatesFilter<"seguridad_personal"> | string
    ultimo_acceso?: DateTimeWithAggregatesFilter<"seguridad_personal"> | Date | string
    estatus?: StringWithAggregatesFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"seguridad_personal"> | Date | string
  }

  export type usuarioCreateInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadCreateNestedManyWithoutUsuarioInput
    roles?: rol_seguridadCreateNestedManyWithoutUsuariosInput
    seguridad_personal?: seguridad_personalCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioUncheckedCreateInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadUncheckedCreateNestedManyWithoutUsuarioInput
    roles?: rol_seguridadUncheckedCreateNestedManyWithoutUsuariosInput
    seguridad_personal?: seguridad_personalUncheckedCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUpdateManyWithoutUsuarioNestedInput
    roles?: rol_seguridadUpdateManyWithoutUsuariosNestedInput
    seguridad_personal?: seguridad_personalUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUncheckedUpdateManyWithoutUsuarioNestedInput
    roles?: rol_seguridadUncheckedUpdateManyWithoutUsuariosNestedInput
    seguridad_personal?: seguridad_personalUncheckedUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioCreateManyInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
  }

  export type usuarioUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }

  export type rol_seguridadCreateInput = {
    id_rol: string
    descripcion: string
    usuarios?: usuarioCreateNestedManyWithoutRolesInput
  }

  export type rol_seguridadUncheckedCreateInput = {
    id_rol: string
    descripcion: string
    usuarios?: usuarioUncheckedCreateNestedManyWithoutRolesInput
  }

  export type rol_seguridadUpdateInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUpdateManyWithoutRolesNestedInput
  }

  export type rol_seguridadUncheckedUpdateInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    usuarios?: usuarioUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type rol_seguridadCreateManyInput = {
    id_rol: string
    descripcion: string
  }

  export type rol_seguridadUpdateManyMutationInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type rol_seguridadUncheckedUpdateManyInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type bitacora_seguridadCreateInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
    usuario: usuarioCreateNestedOneWithoutBitacorasInput
  }

  export type bitacora_seguridadUncheckedCreateInput = {
    id_bitacora: string
    id_usuario: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_seguridadUpdateInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type bitacora_seguridadUncheckedUpdateInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_seguridadCreateManyInput = {
    id_bitacora: string
    id_usuario: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_seguridadUpdateManyMutationInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_seguridadUncheckedUpdateManyInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    id_usuario?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalCreateInput = {
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    usuario_rel: usuarioCreateNestedOneWithoutSeguridad_personalInput
  }

  export type seguridad_personalUncheckedCreateInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario_rel?: usuarioUpdateOneRequiredWithoutSeguridad_personalNestedInput
  }

  export type seguridad_personalUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalCreateManyInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalUncheckedUpdateManyInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
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
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Bitacora_seguridadListRelationFilter = {
    every?: bitacora_seguridadWhereInput
    some?: bitacora_seguridadWhereInput
    none?: bitacora_seguridadWhereInput
  }

  export type Rol_seguridadListRelationFilter = {
    every?: rol_seguridadWhereInput
    some?: rol_seguridadWhereInput
    none?: rol_seguridadWhereInput
  }

  export type Seguridad_personalNullableRelationFilter = {
    is?: seguridad_personalWhereInput | null
    isNot?: seguridad_personalWhereInput | null
  }

  export type bitacora_seguridadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rol_seguridadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    contrasena?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    contrasena?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre_usuario?: SortOrder
    contrasena?: SortOrder
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: usuarioWhereInput
    some?: usuarioWhereInput
    none?: usuarioWhereInput
  }

  export type usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rol_seguridadCountOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
  }

  export type rol_seguridadMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
  }

  export type rol_seguridadMinOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
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

  export type UsuarioRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type bitacora_seguridadCountOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type bitacora_seguridadMaxOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type bitacora_seguridadMinOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_usuario?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
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

  export type seguridad_personalCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type seguridad_personalMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type seguridad_personalMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type bitacora_seguridadCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput> | bitacora_seguridadCreateWithoutUsuarioInput[] | bitacora_seguridadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: bitacora_seguridadCreateOrConnectWithoutUsuarioInput | bitacora_seguridadCreateOrConnectWithoutUsuarioInput[]
    createMany?: bitacora_seguridadCreateManyUsuarioInputEnvelope
    connect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
  }

  export type rol_seguridadCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput> | rol_seguridadCreateWithoutUsuariosInput[] | rol_seguridadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rol_seguridadCreateOrConnectWithoutUsuariosInput | rol_seguridadCreateOrConnectWithoutUsuariosInput[]
    connect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
  }

  export type seguridad_personalCreateNestedOneWithoutUsuario_relInput = {
    create?: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutUsuario_relInput
    connect?: seguridad_personalWhereUniqueInput
  }

  export type bitacora_seguridadUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput> | bitacora_seguridadCreateWithoutUsuarioInput[] | bitacora_seguridadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: bitacora_seguridadCreateOrConnectWithoutUsuarioInput | bitacora_seguridadCreateOrConnectWithoutUsuarioInput[]
    createMany?: bitacora_seguridadCreateManyUsuarioInputEnvelope
    connect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
  }

  export type rol_seguridadUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput> | rol_seguridadCreateWithoutUsuariosInput[] | rol_seguridadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rol_seguridadCreateOrConnectWithoutUsuariosInput | rol_seguridadCreateOrConnectWithoutUsuariosInput[]
    connect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
  }

  export type seguridad_personalUncheckedCreateNestedOneWithoutUsuario_relInput = {
    create?: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutUsuario_relInput
    connect?: seguridad_personalWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type bitacora_seguridadUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput> | bitacora_seguridadCreateWithoutUsuarioInput[] | bitacora_seguridadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: bitacora_seguridadCreateOrConnectWithoutUsuarioInput | bitacora_seguridadCreateOrConnectWithoutUsuarioInput[]
    upsert?: bitacora_seguridadUpsertWithWhereUniqueWithoutUsuarioInput | bitacora_seguridadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: bitacora_seguridadCreateManyUsuarioInputEnvelope
    set?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    disconnect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    delete?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    connect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    update?: bitacora_seguridadUpdateWithWhereUniqueWithoutUsuarioInput | bitacora_seguridadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: bitacora_seguridadUpdateManyWithWhereWithoutUsuarioInput | bitacora_seguridadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: bitacora_seguridadScalarWhereInput | bitacora_seguridadScalarWhereInput[]
  }

  export type rol_seguridadUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput> | rol_seguridadCreateWithoutUsuariosInput[] | rol_seguridadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rol_seguridadCreateOrConnectWithoutUsuariosInput | rol_seguridadCreateOrConnectWithoutUsuariosInput[]
    upsert?: rol_seguridadUpsertWithWhereUniqueWithoutUsuariosInput | rol_seguridadUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    disconnect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    delete?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    connect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    update?: rol_seguridadUpdateWithWhereUniqueWithoutUsuariosInput | rol_seguridadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: rol_seguridadUpdateManyWithWhereWithoutUsuariosInput | rol_seguridadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: rol_seguridadScalarWhereInput | rol_seguridadScalarWhereInput[]
  }

  export type seguridad_personalUpdateOneWithoutUsuario_relNestedInput = {
    create?: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutUsuario_relInput
    upsert?: seguridad_personalUpsertWithoutUsuario_relInput
    disconnect?: seguridad_personalWhereInput | boolean
    delete?: seguridad_personalWhereInput | boolean
    connect?: seguridad_personalWhereUniqueInput
    update?: XOR<XOR<seguridad_personalUpdateToOneWithWhereWithoutUsuario_relInput, seguridad_personalUpdateWithoutUsuario_relInput>, seguridad_personalUncheckedUpdateWithoutUsuario_relInput>
  }

  export type bitacora_seguridadUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput> | bitacora_seguridadCreateWithoutUsuarioInput[] | bitacora_seguridadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: bitacora_seguridadCreateOrConnectWithoutUsuarioInput | bitacora_seguridadCreateOrConnectWithoutUsuarioInput[]
    upsert?: bitacora_seguridadUpsertWithWhereUniqueWithoutUsuarioInput | bitacora_seguridadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: bitacora_seguridadCreateManyUsuarioInputEnvelope
    set?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    disconnect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    delete?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    connect?: bitacora_seguridadWhereUniqueInput | bitacora_seguridadWhereUniqueInput[]
    update?: bitacora_seguridadUpdateWithWhereUniqueWithoutUsuarioInput | bitacora_seguridadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: bitacora_seguridadUpdateManyWithWhereWithoutUsuarioInput | bitacora_seguridadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: bitacora_seguridadScalarWhereInput | bitacora_seguridadScalarWhereInput[]
  }

  export type rol_seguridadUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput> | rol_seguridadCreateWithoutUsuariosInput[] | rol_seguridadUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: rol_seguridadCreateOrConnectWithoutUsuariosInput | rol_seguridadCreateOrConnectWithoutUsuariosInput[]
    upsert?: rol_seguridadUpsertWithWhereUniqueWithoutUsuariosInput | rol_seguridadUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    disconnect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    delete?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    connect?: rol_seguridadWhereUniqueInput | rol_seguridadWhereUniqueInput[]
    update?: rol_seguridadUpdateWithWhereUniqueWithoutUsuariosInput | rol_seguridadUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: rol_seguridadUpdateManyWithWhereWithoutUsuariosInput | rol_seguridadUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: rol_seguridadScalarWhereInput | rol_seguridadScalarWhereInput[]
  }

  export type seguridad_personalUncheckedUpdateOneWithoutUsuario_relNestedInput = {
    create?: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutUsuario_relInput
    upsert?: seguridad_personalUpsertWithoutUsuario_relInput
    disconnect?: seguridad_personalWhereInput | boolean
    delete?: seguridad_personalWhereInput | boolean
    connect?: seguridad_personalWhereUniqueInput
    update?: XOR<XOR<seguridad_personalUpdateToOneWithWhereWithoutUsuario_relInput, seguridad_personalUpdateWithoutUsuario_relInput>, seguridad_personalUncheckedUpdateWithoutUsuario_relInput>
  }

  export type usuarioCreateNestedManyWithoutRolesInput = {
    create?: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput> | usuarioCreateWithoutRolesInput[] | usuarioUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolesInput | usuarioCreateOrConnectWithoutRolesInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput> | usuarioCreateWithoutRolesInput[] | usuarioUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolesInput | usuarioCreateOrConnectWithoutRolesInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
  }

  export type usuarioUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput> | usuarioCreateWithoutRolesInput[] | usuarioUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolesInput | usuarioCreateOrConnectWithoutRolesInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolesInput | usuarioUpsertWithWhereUniqueWithoutRolesInput[]
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolesInput | usuarioUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolesInput | usuarioUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput> | usuarioCreateWithoutRolesInput[] | usuarioUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usuarioCreateOrConnectWithoutRolesInput | usuarioCreateOrConnectWithoutRolesInput[]
    upsert?: usuarioUpsertWithWhereUniqueWithoutRolesInput | usuarioUpsertWithWhereUniqueWithoutRolesInput[]
    set?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    disconnect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    delete?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    connect?: usuarioWhereUniqueInput | usuarioWhereUniqueInput[]
    update?: usuarioUpdateWithWhereUniqueWithoutRolesInput | usuarioUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usuarioUpdateManyWithWhereWithoutRolesInput | usuarioUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<usuarioCreateWithoutBitacorasInput, usuarioUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutBitacorasInput
    connect?: usuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuarioUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<usuarioCreateWithoutBitacorasInput, usuarioUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutBitacorasInput
    upsert?: usuarioUpsertWithoutBitacorasInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutBitacorasInput, usuarioUpdateWithoutBitacorasInput>, usuarioUncheckedUpdateWithoutBitacorasInput>
  }

  export type usuarioCreateNestedOneWithoutSeguridad_personalInput = {
    create?: XOR<usuarioCreateWithoutSeguridad_personalInput, usuarioUncheckedCreateWithoutSeguridad_personalInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguridad_personalInput
    connect?: usuarioWhereUniqueInput
  }

  export type usuarioUpdateOneRequiredWithoutSeguridad_personalNestedInput = {
    create?: XOR<usuarioCreateWithoutSeguridad_personalInput, usuarioUncheckedCreateWithoutSeguridad_personalInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSeguridad_personalInput
    upsert?: usuarioUpsertWithoutSeguridad_personalInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSeguridad_personalInput, usuarioUpdateWithoutSeguridad_personalInput>, usuarioUncheckedUpdateWithoutSeguridad_personalInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type bitacora_seguridadCreateWithoutUsuarioInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_seguridadUncheckedCreateWithoutUsuarioInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_seguridadCreateOrConnectWithoutUsuarioInput = {
    where: bitacora_seguridadWhereUniqueInput
    create: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput>
  }

  export type bitacora_seguridadCreateManyUsuarioInputEnvelope = {
    data: bitacora_seguridadCreateManyUsuarioInput | bitacora_seguridadCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type rol_seguridadCreateWithoutUsuariosInput = {
    id_rol: string
    descripcion: string
  }

  export type rol_seguridadUncheckedCreateWithoutUsuariosInput = {
    id_rol: string
    descripcion: string
  }

  export type rol_seguridadCreateOrConnectWithoutUsuariosInput = {
    where: rol_seguridadWhereUniqueInput
    create: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput>
  }

  export type seguridad_personalCreateWithoutUsuario_relInput = {
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUncheckedCreateWithoutUsuario_relInput = {
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalCreateOrConnectWithoutUsuario_relInput = {
    where: seguridad_personalWhereUniqueInput
    create: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
  }

  export type bitacora_seguridadUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: bitacora_seguridadWhereUniqueInput
    update: XOR<bitacora_seguridadUpdateWithoutUsuarioInput, bitacora_seguridadUncheckedUpdateWithoutUsuarioInput>
    create: XOR<bitacora_seguridadCreateWithoutUsuarioInput, bitacora_seguridadUncheckedCreateWithoutUsuarioInput>
  }

  export type bitacora_seguridadUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: bitacora_seguridadWhereUniqueInput
    data: XOR<bitacora_seguridadUpdateWithoutUsuarioInput, bitacora_seguridadUncheckedUpdateWithoutUsuarioInput>
  }

  export type bitacora_seguridadUpdateManyWithWhereWithoutUsuarioInput = {
    where: bitacora_seguridadScalarWhereInput
    data: XOR<bitacora_seguridadUpdateManyMutationInput, bitacora_seguridadUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type bitacora_seguridadScalarWhereInput = {
    AND?: bitacora_seguridadScalarWhereInput | bitacora_seguridadScalarWhereInput[]
    OR?: bitacora_seguridadScalarWhereInput[]
    NOT?: bitacora_seguridadScalarWhereInput | bitacora_seguridadScalarWhereInput[]
    id_bitacora?: StringFilter<"bitacora_seguridad"> | string
    id_usuario?: StringFilter<"bitacora_seguridad"> | string
    accion?: StringFilter<"bitacora_seguridad"> | string
    fecha?: DateTimeFilter<"bitacora_seguridad"> | Date | string
  }

  export type rol_seguridadUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: rol_seguridadWhereUniqueInput
    update: XOR<rol_seguridadUpdateWithoutUsuariosInput, rol_seguridadUncheckedUpdateWithoutUsuariosInput>
    create: XOR<rol_seguridadCreateWithoutUsuariosInput, rol_seguridadUncheckedCreateWithoutUsuariosInput>
  }

  export type rol_seguridadUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: rol_seguridadWhereUniqueInput
    data: XOR<rol_seguridadUpdateWithoutUsuariosInput, rol_seguridadUncheckedUpdateWithoutUsuariosInput>
  }

  export type rol_seguridadUpdateManyWithWhereWithoutUsuariosInput = {
    where: rol_seguridadScalarWhereInput
    data: XOR<rol_seguridadUpdateManyMutationInput, rol_seguridadUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type rol_seguridadScalarWhereInput = {
    AND?: rol_seguridadScalarWhereInput | rol_seguridadScalarWhereInput[]
    OR?: rol_seguridadScalarWhereInput[]
    NOT?: rol_seguridadScalarWhereInput | rol_seguridadScalarWhereInput[]
    id_rol?: StringFilter<"rol_seguridad"> | string
    descripcion?: StringFilter<"rol_seguridad"> | string
  }

  export type seguridad_personalUpsertWithoutUsuario_relInput = {
    update: XOR<seguridad_personalUpdateWithoutUsuario_relInput, seguridad_personalUncheckedUpdateWithoutUsuario_relInput>
    create: XOR<seguridad_personalCreateWithoutUsuario_relInput, seguridad_personalUncheckedCreateWithoutUsuario_relInput>
    where?: seguridad_personalWhereInput
  }

  export type seguridad_personalUpdateToOneWithWhereWithoutUsuario_relInput = {
    where?: seguridad_personalWhereInput
    data: XOR<seguridad_personalUpdateWithoutUsuario_relInput, seguridad_personalUncheckedUpdateWithoutUsuario_relInput>
  }

  export type seguridad_personalUpdateWithoutUsuario_relInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalUncheckedUpdateWithoutUsuario_relInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioCreateWithoutRolesInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadCreateNestedManyWithoutUsuarioInput
    seguridad_personal?: seguridad_personalCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioUncheckedCreateWithoutRolesInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadUncheckedCreateNestedManyWithoutUsuarioInput
    seguridad_personal?: seguridad_personalUncheckedCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioCreateOrConnectWithoutRolesInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput>
  }

  export type usuarioUpsertWithWhereUniqueWithoutRolesInput = {
    where: usuarioWhereUniqueInput
    update: XOR<usuarioUpdateWithoutRolesInput, usuarioUncheckedUpdateWithoutRolesInput>
    create: XOR<usuarioCreateWithoutRolesInput, usuarioUncheckedCreateWithoutRolesInput>
  }

  export type usuarioUpdateWithWhereUniqueWithoutRolesInput = {
    where: usuarioWhereUniqueInput
    data: XOR<usuarioUpdateWithoutRolesInput, usuarioUncheckedUpdateWithoutRolesInput>
  }

  export type usuarioUpdateManyWithWhereWithoutRolesInput = {
    where: usuarioScalarWhereInput
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyWithoutRolesInput>
  }

  export type usuarioScalarWhereInput = {
    AND?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    OR?: usuarioScalarWhereInput[]
    NOT?: usuarioScalarWhereInput | usuarioScalarWhereInput[]
    id_usuario?: StringFilter<"usuario"> | string
    nombre_usuario?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
  }

  export type usuarioCreateWithoutBitacorasInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    roles?: rol_seguridadCreateNestedManyWithoutUsuariosInput
    seguridad_personal?: seguridad_personalCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioUncheckedCreateWithoutBitacorasInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    roles?: rol_seguridadUncheckedCreateNestedManyWithoutUsuariosInput
    seguridad_personal?: seguridad_personalUncheckedCreateNestedOneWithoutUsuario_relInput
  }

  export type usuarioCreateOrConnectWithoutBitacorasInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutBitacorasInput, usuarioUncheckedCreateWithoutBitacorasInput>
  }

  export type usuarioUpsertWithoutBitacorasInput = {
    update: XOR<usuarioUpdateWithoutBitacorasInput, usuarioUncheckedUpdateWithoutBitacorasInput>
    create: XOR<usuarioCreateWithoutBitacorasInput, usuarioUncheckedCreateWithoutBitacorasInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutBitacorasInput, usuarioUncheckedUpdateWithoutBitacorasInput>
  }

  export type usuarioUpdateWithoutBitacorasInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    roles?: rol_seguridadUpdateManyWithoutUsuariosNestedInput
    seguridad_personal?: seguridad_personalUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioUncheckedUpdateWithoutBitacorasInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    roles?: rol_seguridadUncheckedUpdateManyWithoutUsuariosNestedInput
    seguridad_personal?: seguridad_personalUncheckedUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioCreateWithoutSeguridad_personalInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadCreateNestedManyWithoutUsuarioInput
    roles?: rol_seguridadCreateNestedManyWithoutUsuariosInput
  }

  export type usuarioUncheckedCreateWithoutSeguridad_personalInput = {
    id_usuario: string
    nombre_usuario: string
    contrasena: string
    bitacoras?: bitacora_seguridadUncheckedCreateNestedManyWithoutUsuarioInput
    roles?: rol_seguridadUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuarioCreateOrConnectWithoutSeguridad_personalInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSeguridad_personalInput, usuarioUncheckedCreateWithoutSeguridad_personalInput>
  }

  export type usuarioUpsertWithoutSeguridad_personalInput = {
    update: XOR<usuarioUpdateWithoutSeguridad_personalInput, usuarioUncheckedUpdateWithoutSeguridad_personalInput>
    create: XOR<usuarioCreateWithoutSeguridad_personalInput, usuarioUncheckedCreateWithoutSeguridad_personalInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSeguridad_personalInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSeguridad_personalInput, usuarioUncheckedUpdateWithoutSeguridad_personalInput>
  }

  export type usuarioUpdateWithoutSeguridad_personalInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUpdateManyWithoutUsuarioNestedInput
    roles?: rol_seguridadUpdateManyWithoutUsuariosNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSeguridad_personalInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUncheckedUpdateManyWithoutUsuarioNestedInput
    roles?: rol_seguridadUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type bitacora_seguridadCreateManyUsuarioInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_seguridadUpdateWithoutUsuarioInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_seguridadUncheckedUpdateWithoutUsuarioInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_seguridadUncheckedUpdateManyWithoutUsuarioInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rol_seguridadUpdateWithoutUsuariosInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type rol_seguridadUncheckedUpdateWithoutUsuariosInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type rol_seguridadUncheckedUpdateManyWithoutUsuariosInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUpdateWithoutRolesInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUpdateManyWithoutUsuarioNestedInput
    seguridad_personal?: seguridad_personalUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioUncheckedUpdateWithoutRolesInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    bitacoras?: bitacora_seguridadUncheckedUpdateManyWithoutUsuarioNestedInput
    seguridad_personal?: seguridad_personalUncheckedUpdateOneWithoutUsuario_relNestedInput
  }

  export type usuarioUncheckedUpdateManyWithoutRolesInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    nombre_usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Rol_seguridadCountOutputTypeDefaultArgs instead
     */
    export type Rol_seguridadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Rol_seguridadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usuarioDefaultArgs instead
     */
    export type usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rol_seguridadDefaultArgs instead
     */
    export type rol_seguridadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rol_seguridadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bitacora_seguridadDefaultArgs instead
     */
    export type bitacora_seguridadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bitacora_seguridadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use seguridad_personalDefaultArgs instead
     */
    export type seguridad_personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = seguridad_personalDefaultArgs<ExtArgs>

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