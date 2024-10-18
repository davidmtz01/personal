
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
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model empleado
 * 
 */
export type empleado = $Result.DefaultSelection<Prisma.$empleadoPayload>
/**
 * Model asistencia
 * 
 */
export type asistencia = $Result.DefaultSelection<Prisma.$asistenciaPayload>
/**
 * Model seguridad_personal
 * 
 */
export type seguridad_personal = $Result.DefaultSelection<Prisma.$seguridad_personalPayload>
/**
 * Model evaluacion
 * 
 */
export type evaluacion = $Result.DefaultSelection<Prisma.$evaluacionPayload>
/**
 * Model nomina
 * 
 */
export type nomina = $Result.DefaultSelection<Prisma.$nominaPayload>
/**
 * Model horario
 * 
 */
export type horario = $Result.DefaultSelection<Prisma.$horarioPayload>
/**
 * Model bitacora_personal
 * 
 */
export type bitacora_personal = $Result.DefaultSelection<Prisma.$bitacora_personalPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Rols
 * const rols = await prisma.rol.findMany()
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
   * // Fetch zero or more Rols
   * const rols = await prisma.rol.findMany()
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
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs>;

  /**
   * `prisma.empleado`: Exposes CRUD operations for the **empleado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Empleados
    * const empleados = await prisma.empleado.findMany()
    * ```
    */
  get empleado(): Prisma.empleadoDelegate<ExtArgs>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.asistenciaDelegate<ExtArgs>;

  /**
   * `prisma.seguridad_personal`: Exposes CRUD operations for the **seguridad_personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seguridad_personals
    * const seguridad_personals = await prisma.seguridad_personal.findMany()
    * ```
    */
  get seguridad_personal(): Prisma.seguridad_personalDelegate<ExtArgs>;

  /**
   * `prisma.evaluacion`: Exposes CRUD operations for the **evaluacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluacions
    * const evaluacions = await prisma.evaluacion.findMany()
    * ```
    */
  get evaluacion(): Prisma.evaluacionDelegate<ExtArgs>;

  /**
   * `prisma.nomina`: Exposes CRUD operations for the **nomina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nominas
    * const nominas = await prisma.nomina.findMany()
    * ```
    */
  get nomina(): Prisma.nominaDelegate<ExtArgs>;

  /**
   * `prisma.horario`: Exposes CRUD operations for the **horario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horario.findMany()
    * ```
    */
  get horario(): Prisma.horarioDelegate<ExtArgs>;

  /**
   * `prisma.bitacora_personal`: Exposes CRUD operations for the **bitacora_personal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacora_personals
    * const bitacora_personals = await prisma.bitacora_personal.findMany()
    * ```
    */
  get bitacora_personal(): Prisma.bitacora_personalDelegate<ExtArgs>;
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
    rol: 'rol',
    empleado: 'empleado',
    asistencia: 'asistencia',
    seguridad_personal: 'seguridad_personal',
    evaluacion: 'evaluacion',
    nomina: 'nomina',
    horario: 'horario',
    bitacora_personal: 'bitacora_personal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    personal_db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "rol" | "empleado" | "asistencia" | "seguridad_personal" | "evaluacion" | "nomina" | "horario" | "bitacora_personal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      empleado: {
        payload: Prisma.$empleadoPayload<ExtArgs>
        fields: Prisma.empleadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.empleadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.empleadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findFirst: {
            args: Prisma.empleadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.empleadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          findMany: {
            args: Prisma.empleadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>[]
          }
          create: {
            args: Prisma.empleadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          createMany: {
            args: Prisma.empleadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.empleadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          update: {
            args: Prisma.empleadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          deleteMany: {
            args: Prisma.empleadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.empleadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.empleadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$empleadoPayload>
          }
          aggregate: {
            args: Prisma.EmpleadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmpleado>
          }
          groupBy: {
            args: Prisma.empleadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.empleadoCountArgs<ExtArgs>
            result: $Utils.Optional<EmpleadoCountAggregateOutputType> | number
          }
        }
      }
      asistencia: {
        payload: Prisma.$asistenciaPayload<ExtArgs>
        fields: Prisma.asistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asistenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asistenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findFirst: {
            args: Prisma.asistenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asistenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          findMany: {
            args: Prisma.asistenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>[]
          }
          create: {
            args: Prisma.asistenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          createMany: {
            args: Prisma.asistenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.asistenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          update: {
            args: Prisma.asistenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          deleteMany: {
            args: Prisma.asistenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asistenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.asistenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.asistenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.asistenciaCountArgs<ExtArgs>
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
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
      evaluacion: {
        payload: Prisma.$evaluacionPayload<ExtArgs>
        fields: Prisma.evaluacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.evaluacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.evaluacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          findFirst: {
            args: Prisma.evaluacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.evaluacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          findMany: {
            args: Prisma.evaluacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>[]
          }
          create: {
            args: Prisma.evaluacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          createMany: {
            args: Prisma.evaluacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.evaluacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          update: {
            args: Prisma.evaluacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          deleteMany: {
            args: Prisma.evaluacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.evaluacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.evaluacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$evaluacionPayload>
          }
          aggregate: {
            args: Prisma.EvaluacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluacion>
          }
          groupBy: {
            args: Prisma.evaluacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.evaluacionCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluacionCountAggregateOutputType> | number
          }
        }
      }
      nomina: {
        payload: Prisma.$nominaPayload<ExtArgs>
        fields: Prisma.nominaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nominaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nominaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          findFirst: {
            args: Prisma.nominaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nominaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          findMany: {
            args: Prisma.nominaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>[]
          }
          create: {
            args: Prisma.nominaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          createMany: {
            args: Prisma.nominaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.nominaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          update: {
            args: Prisma.nominaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          deleteMany: {
            args: Prisma.nominaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nominaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nominaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nominaPayload>
          }
          aggregate: {
            args: Prisma.NominaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNomina>
          }
          groupBy: {
            args: Prisma.nominaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NominaGroupByOutputType>[]
          }
          count: {
            args: Prisma.nominaCountArgs<ExtArgs>
            result: $Utils.Optional<NominaCountAggregateOutputType> | number
          }
        }
      }
      horario: {
        payload: Prisma.$horarioPayload<ExtArgs>
        fields: Prisma.horarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          findFirst: {
            args: Prisma.horarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          findMany: {
            args: Prisma.horarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>[]
          }
          create: {
            args: Prisma.horarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          createMany: {
            args: Prisma.horarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.horarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          update: {
            args: Prisma.horarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          deleteMany: {
            args: Prisma.horarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.horarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horarioPayload>
          }
          aggregate: {
            args: Prisma.HorarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorario>
          }
          groupBy: {
            args: Prisma.horarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.horarioCountArgs<ExtArgs>
            result: $Utils.Optional<HorarioCountAggregateOutputType> | number
          }
        }
      }
      bitacora_personal: {
        payload: Prisma.$bitacora_personalPayload<ExtArgs>
        fields: Prisma.bitacora_personalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bitacora_personalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bitacora_personalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          findFirst: {
            args: Prisma.bitacora_personalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bitacora_personalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          findMany: {
            args: Prisma.bitacora_personalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>[]
          }
          create: {
            args: Prisma.bitacora_personalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          createMany: {
            args: Prisma.bitacora_personalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bitacora_personalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          update: {
            args: Prisma.bitacora_personalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          deleteMany: {
            args: Prisma.bitacora_personalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bitacora_personalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bitacora_personalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacora_personalPayload>
          }
          aggregate: {
            args: Prisma.Bitacora_personalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora_personal>
          }
          groupBy: {
            args: Prisma.bitacora_personalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bitacora_personalGroupByOutputType>[]
          }
          count: {
            args: Prisma.bitacora_personalCountArgs<ExtArgs>
            result: $Utils.Optional<Bitacora_personalCountAggregateOutputType> | number
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
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    empleados: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | RolCountOutputTypeCountEmpleadosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountEmpleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadoWhereInput
  }


  /**
   * Count Type EmpleadoCountOutputType
   */

  export type EmpleadoCountOutputType = {
    asistencias: number
    evaluaciones: number
    nominas: number
    horarios: number
    bitacoras: number
    seguridad: number
  }

  export type EmpleadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asistencias?: boolean | EmpleadoCountOutputTypeCountAsistenciasArgs
    evaluaciones?: boolean | EmpleadoCountOutputTypeCountEvaluacionesArgs
    nominas?: boolean | EmpleadoCountOutputTypeCountNominasArgs
    horarios?: boolean | EmpleadoCountOutputTypeCountHorariosArgs
    bitacoras?: boolean | EmpleadoCountOutputTypeCountBitacorasArgs
    seguridad?: boolean | EmpleadoCountOutputTypeCountSeguridadArgs
  }

  // Custom InputTypes
  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmpleadoCountOutputType
     */
    select?: EmpleadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountAsistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountEvaluacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluacionWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountNominasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nominaWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horarioWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountBitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacora_personalWhereInput
  }

  /**
   * EmpleadoCountOutputType without action
   */
  export type EmpleadoCountOutputTypeCountSeguridadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seguridad_personalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolMinAggregateOutputType = {
    id_rol: string | null
    descripcion: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type RolMaxAggregateOutputType = {
    id_rol: string | null
    descripcion: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type RolCountAggregateOutputType = {
    id_rol: number
    descripcion: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type RolMinAggregateInputType = {
    id_rol?: true
    descripcion?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type RolMaxAggregateInputType = {
    id_rol?: true
    descripcion?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type RolCountAggregateInputType = {
    id_rol?: true
    descripcion?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion: Date
    _count: RolCountAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_rol?: boolean
    descripcion?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleados?: boolean | rol$empleadosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>


  export type rolSelectScalar = {
    id_rol?: boolean
    descripcion?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type rolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleados?: boolean | rol$empleadosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {
      empleados: Prisma.$empleadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_rol: string
      descripcion: string
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id_rol`
     * const rolWithId_rolOnly = await prisma.rol.findMany({ select: { id_rol: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
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
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleados<T extends rol$empleadosArgs<ExtArgs> = {}>(args?: Subset<T, rol$empleadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the rol model
   */ 
  interface rolFieldRefs {
    readonly id_rol: FieldRef<"rol", 'String'>
    readonly descripcion: FieldRef<"rol", 'String'>
    readonly estatus: FieldRef<"rol", 'String'>
    readonly fecha_modificacion: FieldRef<"rol", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
  }

  /**
   * rol.empleados
   */
  export type rol$empleadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    where?: empleadoWhereInput
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    cursor?: empleadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
  }


  /**
   * Model empleado
   */

  export type AggregateEmpleado = {
    _count: EmpleadoCountAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  export type EmpleadoMinAggregateOutputType = {
    id_empleado: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    correo: string | null
    fecha_ingreso: Date | null
    id_rol: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type EmpleadoMaxAggregateOutputType = {
    id_empleado: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    correo: string | null
    fecha_ingreso: Date | null
    id_rol: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type EmpleadoCountAggregateOutputType = {
    id_empleado: number
    nombre: number
    direccion: number
    telefono: number
    correo: number
    fecha_ingreso: number
    id_rol: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type EmpleadoMinAggregateInputType = {
    id_empleado?: true
    nombre?: true
    direccion?: true
    telefono?: true
    correo?: true
    fecha_ingreso?: true
    id_rol?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type EmpleadoMaxAggregateInputType = {
    id_empleado?: true
    nombre?: true
    direccion?: true
    telefono?: true
    correo?: true
    fecha_ingreso?: true
    id_rol?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type EmpleadoCountAggregateInputType = {
    id_empleado?: true
    nombre?: true
    direccion?: true
    telefono?: true
    correo?: true
    fecha_ingreso?: true
    id_rol?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type EmpleadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleado to aggregate.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned empleados
    **/
    _count?: true | EmpleadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmpleadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmpleadoMaxAggregateInputType
  }

  export type GetEmpleadoAggregateType<T extends EmpleadoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmpleado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmpleado[P]>
      : GetScalarType<T[P], AggregateEmpleado[P]>
  }




  export type empleadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: empleadoWhereInput
    orderBy?: empleadoOrderByWithAggregationInput | empleadoOrderByWithAggregationInput[]
    by: EmpleadoScalarFieldEnum[] | EmpleadoScalarFieldEnum
    having?: empleadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmpleadoCountAggregateInputType | true
    _min?: EmpleadoMinAggregateInputType
    _max?: EmpleadoMaxAggregateInputType
  }

  export type EmpleadoGroupByOutputType = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date
    id_rol: string | null
    estatus: string
    fecha_modificacion: Date
    _count: EmpleadoCountAggregateOutputType | null
    _min: EmpleadoMinAggregateOutputType | null
    _max: EmpleadoMaxAggregateOutputType | null
  }

  type GetEmpleadoGroupByPayload<T extends empleadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmpleadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmpleadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
            : GetScalarType<T[P], EmpleadoGroupByOutputType[P]>
        }
      >
    >


  export type empleadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_empleado?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    correo?: boolean
    fecha_ingreso?: boolean
    id_rol?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    rol?: boolean | empleado$rolArgs<ExtArgs>
    asistencias?: boolean | empleado$asistenciasArgs<ExtArgs>
    evaluaciones?: boolean | empleado$evaluacionesArgs<ExtArgs>
    nominas?: boolean | empleado$nominasArgs<ExtArgs>
    horarios?: boolean | empleado$horariosArgs<ExtArgs>
    bitacoras?: boolean | empleado$bitacorasArgs<ExtArgs>
    seguridad?: boolean | empleado$seguridadArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["empleado"]>


  export type empleadoSelectScalar = {
    id_empleado?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    correo?: boolean
    fecha_ingreso?: boolean
    id_rol?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type empleadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | empleado$rolArgs<ExtArgs>
    asistencias?: boolean | empleado$asistenciasArgs<ExtArgs>
    evaluaciones?: boolean | empleado$evaluacionesArgs<ExtArgs>
    nominas?: boolean | empleado$nominasArgs<ExtArgs>
    horarios?: boolean | empleado$horariosArgs<ExtArgs>
    bitacoras?: boolean | empleado$bitacorasArgs<ExtArgs>
    seguridad?: boolean | empleado$seguridadArgs<ExtArgs>
    _count?: boolean | EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $empleadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "empleado"
    objects: {
      rol: Prisma.$rolPayload<ExtArgs> | null
      asistencias: Prisma.$asistenciaPayload<ExtArgs>[]
      evaluaciones: Prisma.$evaluacionPayload<ExtArgs>[]
      nominas: Prisma.$nominaPayload<ExtArgs>[]
      horarios: Prisma.$horarioPayload<ExtArgs>[]
      bitacoras: Prisma.$bitacora_personalPayload<ExtArgs>[]
      seguridad: Prisma.$seguridad_personalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_empleado: string
      nombre: string
      direccion: string
      telefono: string
      correo: string
      fecha_ingreso: Date
      id_rol: string | null
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["empleado"]>
    composites: {}
  }

  type empleadoGetPayload<S extends boolean | null | undefined | empleadoDefaultArgs> = $Result.GetResult<Prisma.$empleadoPayload, S>

  type empleadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<empleadoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmpleadoCountAggregateInputType | true
    }

  export interface empleadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['empleado'], meta: { name: 'empleado' } }
    /**
     * Find zero or one Empleado that matches the filter.
     * @param {empleadoFindUniqueArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends empleadoFindUniqueArgs>(args: SelectSubset<T, empleadoFindUniqueArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Empleado that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {empleadoFindUniqueOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends empleadoFindUniqueOrThrowArgs>(args: SelectSubset<T, empleadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Empleado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends empleadoFindFirstArgs>(args?: SelectSubset<T, empleadoFindFirstArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Empleado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindFirstOrThrowArgs} args - Arguments to find a Empleado
     * @example
     * // Get one Empleado
     * const empleado = await prisma.empleado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends empleadoFindFirstOrThrowArgs>(args?: SelectSubset<T, empleadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Empleados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Empleados
     * const empleados = await prisma.empleado.findMany()
     * 
     * // Get first 10 Empleados
     * const empleados = await prisma.empleado.findMany({ take: 10 })
     * 
     * // Only select the `id_empleado`
     * const empleadoWithId_empleadoOnly = await prisma.empleado.findMany({ select: { id_empleado: true } })
     * 
     */
    findMany<T extends empleadoFindManyArgs>(args?: SelectSubset<T, empleadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Empleado.
     * @param {empleadoCreateArgs} args - Arguments to create a Empleado.
     * @example
     * // Create one Empleado
     * const Empleado = await prisma.empleado.create({
     *   data: {
     *     // ... data to create a Empleado
     *   }
     * })
     * 
     */
    create<T extends empleadoCreateArgs>(args: SelectSubset<T, empleadoCreateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Empleados.
     * @param {empleadoCreateManyArgs} args - Arguments to create many Empleados.
     * @example
     * // Create many Empleados
     * const empleado = await prisma.empleado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends empleadoCreateManyArgs>(args?: SelectSubset<T, empleadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Empleado.
     * @param {empleadoDeleteArgs} args - Arguments to delete one Empleado.
     * @example
     * // Delete one Empleado
     * const Empleado = await prisma.empleado.delete({
     *   where: {
     *     // ... filter to delete one Empleado
     *   }
     * })
     * 
     */
    delete<T extends empleadoDeleteArgs>(args: SelectSubset<T, empleadoDeleteArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Empleado.
     * @param {empleadoUpdateArgs} args - Arguments to update one Empleado.
     * @example
     * // Update one Empleado
     * const empleado = await prisma.empleado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends empleadoUpdateArgs>(args: SelectSubset<T, empleadoUpdateArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Empleados.
     * @param {empleadoDeleteManyArgs} args - Arguments to filter Empleados to delete.
     * @example
     * // Delete a few Empleados
     * const { count } = await prisma.empleado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends empleadoDeleteManyArgs>(args?: SelectSubset<T, empleadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Empleados
     * const empleado = await prisma.empleado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends empleadoUpdateManyArgs>(args: SelectSubset<T, empleadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Empleado.
     * @param {empleadoUpsertArgs} args - Arguments to update or create a Empleado.
     * @example
     * // Update or create a Empleado
     * const empleado = await prisma.empleado.upsert({
     *   create: {
     *     // ... data to create a Empleado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Empleado we want to update
     *   }
     * })
     */
    upsert<T extends empleadoUpsertArgs>(args: SelectSubset<T, empleadoUpsertArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Empleados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoCountArgs} args - Arguments to filter Empleados to count.
     * @example
     * // Count the number of Empleados
     * const count = await prisma.empleado.count({
     *   where: {
     *     // ... the filter for the Empleados we want to count
     *   }
     * })
    **/
    count<T extends empleadoCountArgs>(
      args?: Subset<T, empleadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmpleadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmpleadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmpleadoAggregateArgs>(args: Subset<T, EmpleadoAggregateArgs>): Prisma.PrismaPromise<GetEmpleadoAggregateType<T>>

    /**
     * Group by Empleado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {empleadoGroupByArgs} args - Group by arguments.
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
      T extends empleadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: empleadoGroupByArgs['orderBy'] }
        : { orderBy?: empleadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, empleadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmpleadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the empleado model
   */
  readonly fields: empleadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for empleado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__empleadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rol<T extends empleado$rolArgs<ExtArgs> = {}>(args?: Subset<T, empleado$rolArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    asistencias<T extends empleado$asistenciasArgs<ExtArgs> = {}>(args?: Subset<T, empleado$asistenciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany"> | Null>
    evaluaciones<T extends empleado$evaluacionesArgs<ExtArgs> = {}>(args?: Subset<T, empleado$evaluacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findMany"> | Null>
    nominas<T extends empleado$nominasArgs<ExtArgs> = {}>(args?: Subset<T, empleado$nominasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findMany"> | Null>
    horarios<T extends empleado$horariosArgs<ExtArgs> = {}>(args?: Subset<T, empleado$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findMany"> | Null>
    bitacoras<T extends empleado$bitacorasArgs<ExtArgs> = {}>(args?: Subset<T, empleado$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findMany"> | Null>
    seguridad<T extends empleado$seguridadArgs<ExtArgs> = {}>(args?: Subset<T, empleado$seguridadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seguridad_personalPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the empleado model
   */ 
  interface empleadoFieldRefs {
    readonly id_empleado: FieldRef<"empleado", 'String'>
    readonly nombre: FieldRef<"empleado", 'String'>
    readonly direccion: FieldRef<"empleado", 'String'>
    readonly telefono: FieldRef<"empleado", 'String'>
    readonly correo: FieldRef<"empleado", 'String'>
    readonly fecha_ingreso: FieldRef<"empleado", 'DateTime'>
    readonly id_rol: FieldRef<"empleado", 'String'>
    readonly estatus: FieldRef<"empleado", 'String'>
    readonly fecha_modificacion: FieldRef<"empleado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * empleado findUnique
   */
  export type empleadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findUniqueOrThrow
   */
  export type empleadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado findFirst
   */
  export type empleadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findFirstOrThrow
   */
  export type empleadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleado to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of empleados.
     */
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado findMany
   */
  export type empleadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter, which empleados to fetch.
     */
    where?: empleadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of empleados to fetch.
     */
    orderBy?: empleadoOrderByWithRelationInput | empleadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing empleados.
     */
    cursor?: empleadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` empleados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` empleados.
     */
    skip?: number
    distinct?: EmpleadoScalarFieldEnum | EmpleadoScalarFieldEnum[]
  }

  /**
   * empleado create
   */
  export type empleadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The data needed to create a empleado.
     */
    data: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
  }

  /**
   * empleado createMany
   */
  export type empleadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many empleados.
     */
    data: empleadoCreateManyInput | empleadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * empleado update
   */
  export type empleadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The data needed to update a empleado.
     */
    data: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
    /**
     * Choose, which empleado to update.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado updateMany
   */
  export type empleadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update empleados.
     */
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyInput>
    /**
     * Filter which empleados to update
     */
    where?: empleadoWhereInput
  }

  /**
   * empleado upsert
   */
  export type empleadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * The filter to search for the empleado to update in case it exists.
     */
    where: empleadoWhereUniqueInput
    /**
     * In case the empleado found by the `where` argument doesn't exist, create a new empleado with this data.
     */
    create: XOR<empleadoCreateInput, empleadoUncheckedCreateInput>
    /**
     * In case the empleado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<empleadoUpdateInput, empleadoUncheckedUpdateInput>
  }

  /**
   * empleado delete
   */
  export type empleadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
    /**
     * Filter which empleado to delete.
     */
    where: empleadoWhereUniqueInput
  }

  /**
   * empleado deleteMany
   */
  export type empleadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which empleados to delete
     */
    where?: empleadoWhereInput
  }

  /**
   * empleado.rol
   */
  export type empleado$rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolInclude<ExtArgs> | null
    where?: rolWhereInput
  }

  /**
   * empleado.asistencias
   */
  export type empleado$asistenciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    cursor?: asistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * empleado.evaluaciones
   */
  export type empleado$evaluacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    where?: evaluacionWhereInput
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    cursor?: evaluacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * empleado.nominas
   */
  export type empleado$nominasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    where?: nominaWhereInput
    orderBy?: nominaOrderByWithRelationInput | nominaOrderByWithRelationInput[]
    cursor?: nominaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NominaScalarFieldEnum | NominaScalarFieldEnum[]
  }

  /**
   * empleado.horarios
   */
  export type empleado$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    where?: horarioWhereInput
    orderBy?: horarioOrderByWithRelationInput | horarioOrderByWithRelationInput[]
    cursor?: horarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * empleado.bitacoras
   */
  export type empleado$bitacorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    where?: bitacora_personalWhereInput
    orderBy?: bitacora_personalOrderByWithRelationInput | bitacora_personalOrderByWithRelationInput[]
    cursor?: bitacora_personalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bitacora_personalScalarFieldEnum | Bitacora_personalScalarFieldEnum[]
  }

  /**
   * empleado.seguridad
   */
  export type empleado$seguridadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seguridad_personal
     */
    select?: seguridad_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seguridad_personalInclude<ExtArgs> | null
    where?: seguridad_personalWhereInput
    orderBy?: seguridad_personalOrderByWithRelationInput | seguridad_personalOrderByWithRelationInput[]
    cursor?: seguridad_personalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seguridad_personalScalarFieldEnum | Seguridad_personalScalarFieldEnum[]
  }

  /**
   * empleado without action
   */
  export type empleadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the empleado
     */
    select?: empleadoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: empleadoInclude<ExtArgs> | null
  }


  /**
   * Model asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id_asistencia: string | null
    id_empleado: string | null
    fecha: Date | null
    hora_entrada: Date | null
    hora_salida: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id_asistencia: string | null
    id_empleado: string | null
    fecha: Date | null
    hora_entrada: Date | null
    hora_salida: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id_asistencia: number
    id_empleado: number
    fecha: number
    hora_entrada: number
    hora_salida: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type AsistenciaMinAggregateInputType = {
    id_asistencia?: true
    id_empleado?: true
    fecha?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id_asistencia?: true
    id_empleado?: true
    fecha?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id_asistencia?: true
    id_empleado?: true
    fecha?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencia to aggregate.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type asistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asistenciaWhereInput
    orderBy?: asistenciaOrderByWithAggregationInput | asistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: asistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id_asistencia: string
    id_empleado: string
    fecha: Date
    hora_entrada: Date
    hora_salida: Date
    estatus: string
    fecha_modificacion: Date
    _count: AsistenciaCountAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends asistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type asistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asistencia?: boolean
    id_empleado?: boolean
    fecha?: boolean
    hora_entrada?: boolean
    hora_salida?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>


  export type asistenciaSelectScalar = {
    id_asistencia?: boolean
    id_empleado?: boolean
    fecha?: boolean
    hora_entrada?: boolean
    hora_salida?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type asistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $asistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asistencia"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asistencia: string
      id_empleado: string
      fecha: Date
      hora_entrada: Date
      hora_salida: Date
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }

  type asistenciaGetPayload<S extends boolean | null | undefined | asistenciaDefaultArgs> = $Result.GetResult<Prisma.$asistenciaPayload, S>

  type asistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<asistenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface asistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asistencia'], meta: { name: 'asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {asistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenciaFindUniqueArgs>(args: SelectSubset<T, asistenciaFindUniqueArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {asistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, asistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenciaFindFirstArgs>(args?: SelectSubset<T, asistenciaFindFirstArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, asistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id_asistencia`
     * const asistenciaWithId_asistenciaOnly = await prisma.asistencia.findMany({ select: { id_asistencia: true } })
     * 
     */
    findMany<T extends asistenciaFindManyArgs>(args?: SelectSubset<T, asistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Asistencia.
     * @param {asistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
     */
    create<T extends asistenciaCreateArgs>(args: SelectSubset<T, asistenciaCreateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Asistencias.
     * @param {asistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asistenciaCreateManyArgs>(args?: SelectSubset<T, asistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asistencia.
     * @param {asistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
     */
    delete<T extends asistenciaDeleteArgs>(args: SelectSubset<T, asistenciaDeleteArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Asistencia.
     * @param {asistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asistenciaUpdateArgs>(args: SelectSubset<T, asistenciaUpdateArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Asistencias.
     * @param {asistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asistenciaDeleteManyArgs>(args?: SelectSubset<T, asistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asistenciaUpdateManyArgs>(args: SelectSubset<T, asistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistencia.
     * @param {asistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends asistenciaUpsertArgs>(args: SelectSubset<T, asistenciaUpsertArgs<ExtArgs>>): Prisma__asistenciaClient<$Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends asistenciaCountArgs>(
      args?: Subset<T, asistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaGroupByArgs} args - Group by arguments.
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
      T extends asistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asistenciaGroupByArgs['orderBy'] }
        : { orderBy?: asistenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, asistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asistencia model
   */
  readonly fields: asistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the asistencia model
   */ 
  interface asistenciaFieldRefs {
    readonly id_asistencia: FieldRef<"asistencia", 'String'>
    readonly id_empleado: FieldRef<"asistencia", 'String'>
    readonly fecha: FieldRef<"asistencia", 'DateTime'>
    readonly hora_entrada: FieldRef<"asistencia", 'DateTime'>
    readonly hora_salida: FieldRef<"asistencia", 'DateTime'>
    readonly estatus: FieldRef<"asistencia", 'String'>
    readonly fecha_modificacion: FieldRef<"asistencia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * asistencia findUnique
   */
  export type asistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findUniqueOrThrow
   */
  export type asistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia findFirst
   */
  export type asistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findFirstOrThrow
   */
  export type asistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencia to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia findMany
   */
  export type asistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter, which asistencias to fetch.
     */
    where?: asistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asistencias to fetch.
     */
    orderBy?: asistenciaOrderByWithRelationInput | asistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asistencias.
     */
    cursor?: asistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }

  /**
   * asistencia create
   */
  export type asistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a asistencia.
     */
    data: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
  }

  /**
   * asistencia createMany
   */
  export type asistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistencias.
     */
    data: asistenciaCreateManyInput | asistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asistencia update
   */
  export type asistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a asistencia.
     */
    data: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
    /**
     * Choose, which asistencia to update.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia updateMany
   */
  export type asistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asistencias.
     */
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyInput>
    /**
     * Filter which asistencias to update
     */
    where?: asistenciaWhereInput
  }

  /**
   * asistencia upsert
   */
  export type asistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the asistencia to update in case it exists.
     */
    where: asistenciaWhereUniqueInput
    /**
     * In case the asistencia found by the `where` argument doesn't exist, create a new asistencia with this data.
     */
    create: XOR<asistenciaCreateInput, asistenciaUncheckedCreateInput>
    /**
     * In case the asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asistenciaUpdateInput, asistenciaUncheckedUpdateInput>
  }

  /**
   * asistencia delete
   */
  export type asistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
    /**
     * Filter which asistencia to delete.
     */
    where: asistenciaWhereUniqueInput
  }

  /**
   * asistencia deleteMany
   */
  export type asistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asistencias to delete
     */
    where?: asistenciaWhereInput
  }

  /**
   * asistencia without action
   */
  export type asistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: asistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asistenciaInclude<ExtArgs> | null
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
    id_empleado: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type Seguridad_personalMaxAggregateOutputType = {
    id_usuario: string | null
    usuario: string | null
    contrasena: string | null
    rol: string | null
    ultimo_acceso: Date | null
    id_empleado: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type Seguridad_personalCountAggregateOutputType = {
    id_usuario: number
    usuario: number
    contrasena: number
    rol: number
    ultimo_acceso: number
    id_empleado: number
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
    id_empleado?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type Seguridad_personalMaxAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contrasena?: true
    rol?: true
    ultimo_acceso?: true
    id_empleado?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type Seguridad_personalCountAggregateInputType = {
    id_usuario?: true
    usuario?: true
    contrasena?: true
    rol?: true
    ultimo_acceso?: true
    id_empleado?: true
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
    id_empleado: string
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
    id_empleado?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seguridad_personal"]>


  export type seguridad_personalSelectScalar = {
    id_usuario?: boolean
    usuario?: boolean
    contrasena?: boolean
    rol?: boolean
    ultimo_acceso?: boolean
    id_empleado?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type seguridad_personalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $seguridad_personalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seguridad_personal"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: string
      usuario: string
      contrasena: string
      rol: string
      ultimo_acceso: Date
      id_empleado: string
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
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly id_empleado: FieldRef<"seguridad_personal", 'String'>
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
   * Model evaluacion
   */

  export type AggregateEvaluacion = {
    _count: EvaluacionCountAggregateOutputType | null
    _avg: EvaluacionAvgAggregateOutputType | null
    _sum: EvaluacionSumAggregateOutputType | null
    _min: EvaluacionMinAggregateOutputType | null
    _max: EvaluacionMaxAggregateOutputType | null
  }

  export type EvaluacionAvgAggregateOutputType = {
    puntuacion: number | null
  }

  export type EvaluacionSumAggregateOutputType = {
    puntuacion: number | null
  }

  export type EvaluacionMinAggregateOutputType = {
    id_evaluacion: string | null
    id_empleado: string | null
    fecha: Date | null
    puntuacion: number | null
    comentarios: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type EvaluacionMaxAggregateOutputType = {
    id_evaluacion: string | null
    id_empleado: string | null
    fecha: Date | null
    puntuacion: number | null
    comentarios: string | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type EvaluacionCountAggregateOutputType = {
    id_evaluacion: number
    id_empleado: number
    fecha: number
    puntuacion: number
    comentarios: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type EvaluacionAvgAggregateInputType = {
    puntuacion?: true
  }

  export type EvaluacionSumAggregateInputType = {
    puntuacion?: true
  }

  export type EvaluacionMinAggregateInputType = {
    id_evaluacion?: true
    id_empleado?: true
    fecha?: true
    puntuacion?: true
    comentarios?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type EvaluacionMaxAggregateInputType = {
    id_evaluacion?: true
    id_empleado?: true
    fecha?: true
    puntuacion?: true
    comentarios?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type EvaluacionCountAggregateInputType = {
    id_evaluacion?: true
    id_empleado?: true
    fecha?: true
    puntuacion?: true
    comentarios?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type EvaluacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluacion to aggregate.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned evaluacions
    **/
    _count?: true | EvaluacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluacionMaxAggregateInputType
  }

  export type GetEvaluacionAggregateType<T extends EvaluacionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluacion[P]>
      : GetScalarType<T[P], AggregateEvaluacion[P]>
  }




  export type evaluacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: evaluacionWhereInput
    orderBy?: evaluacionOrderByWithAggregationInput | evaluacionOrderByWithAggregationInput[]
    by: EvaluacionScalarFieldEnum[] | EvaluacionScalarFieldEnum
    having?: evaluacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluacionCountAggregateInputType | true
    _avg?: EvaluacionAvgAggregateInputType
    _sum?: EvaluacionSumAggregateInputType
    _min?: EvaluacionMinAggregateInputType
    _max?: EvaluacionMaxAggregateInputType
  }

  export type EvaluacionGroupByOutputType = {
    id_evaluacion: string
    id_empleado: string
    fecha: Date
    puntuacion: number
    comentarios: string | null
    estatus: string
    fecha_modificacion: Date
    _count: EvaluacionCountAggregateOutputType | null
    _avg: EvaluacionAvgAggregateOutputType | null
    _sum: EvaluacionSumAggregateOutputType | null
    _min: EvaluacionMinAggregateOutputType | null
    _max: EvaluacionMaxAggregateOutputType | null
  }

  type GetEvaluacionGroupByPayload<T extends evaluacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluacionGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluacionGroupByOutputType[P]>
        }
      >
    >


  export type evaluacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evaluacion?: boolean
    id_empleado?: boolean
    fecha?: boolean
    puntuacion?: boolean
    comentarios?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluacion"]>


  export type evaluacionSelectScalar = {
    id_evaluacion?: boolean
    id_empleado?: boolean
    fecha?: boolean
    puntuacion?: boolean
    comentarios?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type evaluacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $evaluacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evaluacion"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evaluacion: string
      id_empleado: string
      fecha: Date
      puntuacion: number
      comentarios: string | null
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["evaluacion"]>
    composites: {}
  }

  type evaluacionGetPayload<S extends boolean | null | undefined | evaluacionDefaultArgs> = $Result.GetResult<Prisma.$evaluacionPayload, S>

  type evaluacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<evaluacionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EvaluacionCountAggregateInputType | true
    }

  export interface evaluacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evaluacion'], meta: { name: 'evaluacion' } }
    /**
     * Find zero or one Evaluacion that matches the filter.
     * @param {evaluacionFindUniqueArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends evaluacionFindUniqueArgs>(args: SelectSubset<T, evaluacionFindUniqueArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Evaluacion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {evaluacionFindUniqueOrThrowArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends evaluacionFindUniqueOrThrowArgs>(args: SelectSubset<T, evaluacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Evaluacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindFirstArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends evaluacionFindFirstArgs>(args?: SelectSubset<T, evaluacionFindFirstArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Evaluacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindFirstOrThrowArgs} args - Arguments to find a Evaluacion
     * @example
     * // Get one Evaluacion
     * const evaluacion = await prisma.evaluacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends evaluacionFindFirstOrThrowArgs>(args?: SelectSubset<T, evaluacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Evaluacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluacions
     * const evaluacions = await prisma.evaluacion.findMany()
     * 
     * // Get first 10 Evaluacions
     * const evaluacions = await prisma.evaluacion.findMany({ take: 10 })
     * 
     * // Only select the `id_evaluacion`
     * const evaluacionWithId_evaluacionOnly = await prisma.evaluacion.findMany({ select: { id_evaluacion: true } })
     * 
     */
    findMany<T extends evaluacionFindManyArgs>(args?: SelectSubset<T, evaluacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Evaluacion.
     * @param {evaluacionCreateArgs} args - Arguments to create a Evaluacion.
     * @example
     * // Create one Evaluacion
     * const Evaluacion = await prisma.evaluacion.create({
     *   data: {
     *     // ... data to create a Evaluacion
     *   }
     * })
     * 
     */
    create<T extends evaluacionCreateArgs>(args: SelectSubset<T, evaluacionCreateArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Evaluacions.
     * @param {evaluacionCreateManyArgs} args - Arguments to create many Evaluacions.
     * @example
     * // Create many Evaluacions
     * const evaluacion = await prisma.evaluacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends evaluacionCreateManyArgs>(args?: SelectSubset<T, evaluacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluacion.
     * @param {evaluacionDeleteArgs} args - Arguments to delete one Evaluacion.
     * @example
     * // Delete one Evaluacion
     * const Evaluacion = await prisma.evaluacion.delete({
     *   where: {
     *     // ... filter to delete one Evaluacion
     *   }
     * })
     * 
     */
    delete<T extends evaluacionDeleteArgs>(args: SelectSubset<T, evaluacionDeleteArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Evaluacion.
     * @param {evaluacionUpdateArgs} args - Arguments to update one Evaluacion.
     * @example
     * // Update one Evaluacion
     * const evaluacion = await prisma.evaluacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends evaluacionUpdateArgs>(args: SelectSubset<T, evaluacionUpdateArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Evaluacions.
     * @param {evaluacionDeleteManyArgs} args - Arguments to filter Evaluacions to delete.
     * @example
     * // Delete a few Evaluacions
     * const { count } = await prisma.evaluacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends evaluacionDeleteManyArgs>(args?: SelectSubset<T, evaluacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluacions
     * const evaluacion = await prisma.evaluacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends evaluacionUpdateManyArgs>(args: SelectSubset<T, evaluacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluacion.
     * @param {evaluacionUpsertArgs} args - Arguments to update or create a Evaluacion.
     * @example
     * // Update or create a Evaluacion
     * const evaluacion = await prisma.evaluacion.upsert({
     *   create: {
     *     // ... data to create a Evaluacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluacion we want to update
     *   }
     * })
     */
    upsert<T extends evaluacionUpsertArgs>(args: SelectSubset<T, evaluacionUpsertArgs<ExtArgs>>): Prisma__evaluacionClient<$Result.GetResult<Prisma.$evaluacionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Evaluacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionCountArgs} args - Arguments to filter Evaluacions to count.
     * @example
     * // Count the number of Evaluacions
     * const count = await prisma.evaluacion.count({
     *   where: {
     *     // ... the filter for the Evaluacions we want to count
     *   }
     * })
    **/
    count<T extends evaluacionCountArgs>(
      args?: Subset<T, evaluacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluacionAggregateArgs>(args: Subset<T, EvaluacionAggregateArgs>): Prisma.PrismaPromise<GetEvaluacionAggregateType<T>>

    /**
     * Group by Evaluacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {evaluacionGroupByArgs} args - Group by arguments.
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
      T extends evaluacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: evaluacionGroupByArgs['orderBy'] }
        : { orderBy?: evaluacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, evaluacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evaluacion model
   */
  readonly fields: evaluacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evaluacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__evaluacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the evaluacion model
   */ 
  interface evaluacionFieldRefs {
    readonly id_evaluacion: FieldRef<"evaluacion", 'String'>
    readonly id_empleado: FieldRef<"evaluacion", 'String'>
    readonly fecha: FieldRef<"evaluacion", 'DateTime'>
    readonly puntuacion: FieldRef<"evaluacion", 'Int'>
    readonly comentarios: FieldRef<"evaluacion", 'String'>
    readonly estatus: FieldRef<"evaluacion", 'String'>
    readonly fecha_modificacion: FieldRef<"evaluacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * evaluacion findUnique
   */
  export type evaluacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion findUniqueOrThrow
   */
  export type evaluacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion findFirst
   */
  export type evaluacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluacions.
     */
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion findFirstOrThrow
   */
  export type evaluacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacion to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of evaluacions.
     */
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion findMany
   */
  export type evaluacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter, which evaluacions to fetch.
     */
    where?: evaluacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of evaluacions to fetch.
     */
    orderBy?: evaluacionOrderByWithRelationInput | evaluacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing evaluacions.
     */
    cursor?: evaluacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` evaluacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` evaluacions.
     */
    skip?: number
    distinct?: EvaluacionScalarFieldEnum | EvaluacionScalarFieldEnum[]
  }

  /**
   * evaluacion create
   */
  export type evaluacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to create a evaluacion.
     */
    data: XOR<evaluacionCreateInput, evaluacionUncheckedCreateInput>
  }

  /**
   * evaluacion createMany
   */
  export type evaluacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many evaluacions.
     */
    data: evaluacionCreateManyInput | evaluacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evaluacion update
   */
  export type evaluacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The data needed to update a evaluacion.
     */
    data: XOR<evaluacionUpdateInput, evaluacionUncheckedUpdateInput>
    /**
     * Choose, which evaluacion to update.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion updateMany
   */
  export type evaluacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update evaluacions.
     */
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyInput>
    /**
     * Filter which evaluacions to update
     */
    where?: evaluacionWhereInput
  }

  /**
   * evaluacion upsert
   */
  export type evaluacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * The filter to search for the evaluacion to update in case it exists.
     */
    where: evaluacionWhereUniqueInput
    /**
     * In case the evaluacion found by the `where` argument doesn't exist, create a new evaluacion with this data.
     */
    create: XOR<evaluacionCreateInput, evaluacionUncheckedCreateInput>
    /**
     * In case the evaluacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<evaluacionUpdateInput, evaluacionUncheckedUpdateInput>
  }

  /**
   * evaluacion delete
   */
  export type evaluacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
    /**
     * Filter which evaluacion to delete.
     */
    where: evaluacionWhereUniqueInput
  }

  /**
   * evaluacion deleteMany
   */
  export type evaluacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evaluacions to delete
     */
    where?: evaluacionWhereInput
  }

  /**
   * evaluacion without action
   */
  export type evaluacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evaluacion
     */
    select?: evaluacionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: evaluacionInclude<ExtArgs> | null
  }


  /**
   * Model nomina
   */

  export type AggregateNomina = {
    _count: NominaCountAggregateOutputType | null
    _avg: NominaAvgAggregateOutputType | null
    _sum: NominaSumAggregateOutputType | null
    _min: NominaMinAggregateOutputType | null
    _max: NominaMaxAggregateOutputType | null
  }

  export type NominaAvgAggregateOutputType = {
    salario: Decimal | null
  }

  export type NominaSumAggregateOutputType = {
    salario: Decimal | null
  }

  export type NominaMinAggregateOutputType = {
    id_nomina: string | null
    id_empleado: string | null
    periodo: Date | null
    salario: Decimal | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type NominaMaxAggregateOutputType = {
    id_nomina: string | null
    id_empleado: string | null
    periodo: Date | null
    salario: Decimal | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type NominaCountAggregateOutputType = {
    id_nomina: number
    id_empleado: number
    periodo: number
    salario: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type NominaAvgAggregateInputType = {
    salario?: true
  }

  export type NominaSumAggregateInputType = {
    salario?: true
  }

  export type NominaMinAggregateInputType = {
    id_nomina?: true
    id_empleado?: true
    periodo?: true
    salario?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type NominaMaxAggregateInputType = {
    id_nomina?: true
    id_empleado?: true
    periodo?: true
    salario?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type NominaCountAggregateInputType = {
    id_nomina?: true
    id_empleado?: true
    periodo?: true
    salario?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type NominaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nomina to aggregate.
     */
    where?: nominaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nominas to fetch.
     */
    orderBy?: nominaOrderByWithRelationInput | nominaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nominaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nominas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nominas
    **/
    _count?: true | NominaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NominaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NominaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NominaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NominaMaxAggregateInputType
  }

  export type GetNominaAggregateType<T extends NominaAggregateArgs> = {
        [P in keyof T & keyof AggregateNomina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNomina[P]>
      : GetScalarType<T[P], AggregateNomina[P]>
  }




  export type nominaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nominaWhereInput
    orderBy?: nominaOrderByWithAggregationInput | nominaOrderByWithAggregationInput[]
    by: NominaScalarFieldEnum[] | NominaScalarFieldEnum
    having?: nominaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NominaCountAggregateInputType | true
    _avg?: NominaAvgAggregateInputType
    _sum?: NominaSumAggregateInputType
    _min?: NominaMinAggregateInputType
    _max?: NominaMaxAggregateInputType
  }

  export type NominaGroupByOutputType = {
    id_nomina: string
    id_empleado: string
    periodo: Date
    salario: Decimal
    estatus: string
    fecha_modificacion: Date
    _count: NominaCountAggregateOutputType | null
    _avg: NominaAvgAggregateOutputType | null
    _sum: NominaSumAggregateOutputType | null
    _min: NominaMinAggregateOutputType | null
    _max: NominaMaxAggregateOutputType | null
  }

  type GetNominaGroupByPayload<T extends nominaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NominaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NominaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NominaGroupByOutputType[P]>
            : GetScalarType<T[P], NominaGroupByOutputType[P]>
        }
      >
    >


  export type nominaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_nomina?: boolean
    id_empleado?: boolean
    periodo?: boolean
    salario?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nomina"]>


  export type nominaSelectScalar = {
    id_nomina?: boolean
    id_empleado?: boolean
    periodo?: boolean
    salario?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type nominaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $nominaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nomina"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_nomina: string
      id_empleado: string
      periodo: Date
      salario: Prisma.Decimal
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["nomina"]>
    composites: {}
  }

  type nominaGetPayload<S extends boolean | null | undefined | nominaDefaultArgs> = $Result.GetResult<Prisma.$nominaPayload, S>

  type nominaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<nominaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NominaCountAggregateInputType | true
    }

  export interface nominaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nomina'], meta: { name: 'nomina' } }
    /**
     * Find zero or one Nomina that matches the filter.
     * @param {nominaFindUniqueArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nominaFindUniqueArgs>(args: SelectSubset<T, nominaFindUniqueArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nomina that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {nominaFindUniqueOrThrowArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nominaFindUniqueOrThrowArgs>(args: SelectSubset<T, nominaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nomina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindFirstArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nominaFindFirstArgs>(args?: SelectSubset<T, nominaFindFirstArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nomina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindFirstOrThrowArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nominaFindFirstOrThrowArgs>(args?: SelectSubset<T, nominaFindFirstOrThrowArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nominas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nominas
     * const nominas = await prisma.nomina.findMany()
     * 
     * // Get first 10 Nominas
     * const nominas = await prisma.nomina.findMany({ take: 10 })
     * 
     * // Only select the `id_nomina`
     * const nominaWithId_nominaOnly = await prisma.nomina.findMany({ select: { id_nomina: true } })
     * 
     */
    findMany<T extends nominaFindManyArgs>(args?: SelectSubset<T, nominaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nomina.
     * @param {nominaCreateArgs} args - Arguments to create a Nomina.
     * @example
     * // Create one Nomina
     * const Nomina = await prisma.nomina.create({
     *   data: {
     *     // ... data to create a Nomina
     *   }
     * })
     * 
     */
    create<T extends nominaCreateArgs>(args: SelectSubset<T, nominaCreateArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nominas.
     * @param {nominaCreateManyArgs} args - Arguments to create many Nominas.
     * @example
     * // Create many Nominas
     * const nomina = await prisma.nomina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nominaCreateManyArgs>(args?: SelectSubset<T, nominaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nomina.
     * @param {nominaDeleteArgs} args - Arguments to delete one Nomina.
     * @example
     * // Delete one Nomina
     * const Nomina = await prisma.nomina.delete({
     *   where: {
     *     // ... filter to delete one Nomina
     *   }
     * })
     * 
     */
    delete<T extends nominaDeleteArgs>(args: SelectSubset<T, nominaDeleteArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nomina.
     * @param {nominaUpdateArgs} args - Arguments to update one Nomina.
     * @example
     * // Update one Nomina
     * const nomina = await prisma.nomina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nominaUpdateArgs>(args: SelectSubset<T, nominaUpdateArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nominas.
     * @param {nominaDeleteManyArgs} args - Arguments to filter Nominas to delete.
     * @example
     * // Delete a few Nominas
     * const { count } = await prisma.nomina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nominaDeleteManyArgs>(args?: SelectSubset<T, nominaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nominas
     * const nomina = await prisma.nomina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nominaUpdateManyArgs>(args: SelectSubset<T, nominaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nomina.
     * @param {nominaUpsertArgs} args - Arguments to update or create a Nomina.
     * @example
     * // Update or create a Nomina
     * const nomina = await prisma.nomina.upsert({
     *   create: {
     *     // ... data to create a Nomina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomina we want to update
     *   }
     * })
     */
    upsert<T extends nominaUpsertArgs>(args: SelectSubset<T, nominaUpsertArgs<ExtArgs>>): Prisma__nominaClient<$Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaCountArgs} args - Arguments to filter Nominas to count.
     * @example
     * // Count the number of Nominas
     * const count = await prisma.nomina.count({
     *   where: {
     *     // ... the filter for the Nominas we want to count
     *   }
     * })
    **/
    count<T extends nominaCountArgs>(
      args?: Subset<T, nominaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NominaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NominaAggregateArgs>(args: Subset<T, NominaAggregateArgs>): Prisma.PrismaPromise<GetNominaAggregateType<T>>

    /**
     * Group by Nomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaGroupByArgs} args - Group by arguments.
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
      T extends nominaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nominaGroupByArgs['orderBy'] }
        : { orderBy?: nominaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nominaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNominaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nomina model
   */
  readonly fields: nominaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nomina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nominaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the nomina model
   */ 
  interface nominaFieldRefs {
    readonly id_nomina: FieldRef<"nomina", 'String'>
    readonly id_empleado: FieldRef<"nomina", 'String'>
    readonly periodo: FieldRef<"nomina", 'DateTime'>
    readonly salario: FieldRef<"nomina", 'Decimal'>
    readonly estatus: FieldRef<"nomina", 'String'>
    readonly fecha_modificacion: FieldRef<"nomina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nomina findUnique
   */
  export type nominaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter, which nomina to fetch.
     */
    where: nominaWhereUniqueInput
  }

  /**
   * nomina findUniqueOrThrow
   */
  export type nominaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter, which nomina to fetch.
     */
    where: nominaWhereUniqueInput
  }

  /**
   * nomina findFirst
   */
  export type nominaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter, which nomina to fetch.
     */
    where?: nominaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nominas to fetch.
     */
    orderBy?: nominaOrderByWithRelationInput | nominaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nominas.
     */
    cursor?: nominaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nominas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nominas.
     */
    distinct?: NominaScalarFieldEnum | NominaScalarFieldEnum[]
  }

  /**
   * nomina findFirstOrThrow
   */
  export type nominaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter, which nomina to fetch.
     */
    where?: nominaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nominas to fetch.
     */
    orderBy?: nominaOrderByWithRelationInput | nominaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nominas.
     */
    cursor?: nominaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nominas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nominas.
     */
    distinct?: NominaScalarFieldEnum | NominaScalarFieldEnum[]
  }

  /**
   * nomina findMany
   */
  export type nominaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter, which nominas to fetch.
     */
    where?: nominaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nominas to fetch.
     */
    orderBy?: nominaOrderByWithRelationInput | nominaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nominas.
     */
    cursor?: nominaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nominas.
     */
    skip?: number
    distinct?: NominaScalarFieldEnum | NominaScalarFieldEnum[]
  }

  /**
   * nomina create
   */
  export type nominaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * The data needed to create a nomina.
     */
    data: XOR<nominaCreateInput, nominaUncheckedCreateInput>
  }

  /**
   * nomina createMany
   */
  export type nominaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nominas.
     */
    data: nominaCreateManyInput | nominaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nomina update
   */
  export type nominaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * The data needed to update a nomina.
     */
    data: XOR<nominaUpdateInput, nominaUncheckedUpdateInput>
    /**
     * Choose, which nomina to update.
     */
    where: nominaWhereUniqueInput
  }

  /**
   * nomina updateMany
   */
  export type nominaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nominas.
     */
    data: XOR<nominaUpdateManyMutationInput, nominaUncheckedUpdateManyInput>
    /**
     * Filter which nominas to update
     */
    where?: nominaWhereInput
  }

  /**
   * nomina upsert
   */
  export type nominaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * The filter to search for the nomina to update in case it exists.
     */
    where: nominaWhereUniqueInput
    /**
     * In case the nomina found by the `where` argument doesn't exist, create a new nomina with this data.
     */
    create: XOR<nominaCreateInput, nominaUncheckedCreateInput>
    /**
     * In case the nomina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nominaUpdateInput, nominaUncheckedUpdateInput>
  }

  /**
   * nomina delete
   */
  export type nominaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
    /**
     * Filter which nomina to delete.
     */
    where: nominaWhereUniqueInput
  }

  /**
   * nomina deleteMany
   */
  export type nominaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nominas to delete
     */
    where?: nominaWhereInput
  }

  /**
   * nomina without action
   */
  export type nominaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: nominaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nominaInclude<ExtArgs> | null
  }


  /**
   * Model horario
   */

  export type AggregateHorario = {
    _count: HorarioCountAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  export type HorarioMinAggregateOutputType = {
    id_horario: string | null
    id_empleado: string | null
    dia: string | null
    hora_entrada: Date | null
    hora_salida: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type HorarioMaxAggregateOutputType = {
    id_horario: string | null
    id_empleado: string | null
    dia: string | null
    hora_entrada: Date | null
    hora_salida: Date | null
    estatus: string | null
    fecha_modificacion: Date | null
  }

  export type HorarioCountAggregateOutputType = {
    id_horario: number
    id_empleado: number
    dia: number
    hora_entrada: number
    hora_salida: number
    estatus: number
    fecha_modificacion: number
    _all: number
  }


  export type HorarioMinAggregateInputType = {
    id_horario?: true
    id_empleado?: true
    dia?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type HorarioMaxAggregateInputType = {
    id_horario?: true
    id_empleado?: true
    dia?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
  }

  export type HorarioCountAggregateInputType = {
    id_horario?: true
    id_empleado?: true
    dia?: true
    hora_entrada?: true
    hora_salida?: true
    estatus?: true
    fecha_modificacion?: true
    _all?: true
  }

  export type HorarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horario to aggregate.
     */
    where?: horarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horarioOrderByWithRelationInput | horarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios
    **/
    _count?: true | HorarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorarioMaxAggregateInputType
  }

  export type GetHorarioAggregateType<T extends HorarioAggregateArgs> = {
        [P in keyof T & keyof AggregateHorario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorario[P]>
      : GetScalarType<T[P], AggregateHorario[P]>
  }




  export type horarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horarioWhereInput
    orderBy?: horarioOrderByWithAggregationInput | horarioOrderByWithAggregationInput[]
    by: HorarioScalarFieldEnum[] | HorarioScalarFieldEnum
    having?: horarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorarioCountAggregateInputType | true
    _min?: HorarioMinAggregateInputType
    _max?: HorarioMaxAggregateInputType
  }

  export type HorarioGroupByOutputType = {
    id_horario: string
    id_empleado: string
    dia: string
    hora_entrada: Date
    hora_salida: Date
    estatus: string
    fecha_modificacion: Date
    _count: HorarioCountAggregateOutputType | null
    _min: HorarioMinAggregateOutputType | null
    _max: HorarioMaxAggregateOutputType | null
  }

  type GetHorarioGroupByPayload<T extends horarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorarioGroupByOutputType[P]>
            : GetScalarType<T[P], HorarioGroupByOutputType[P]>
        }
      >
    >


  export type horarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_horario?: boolean
    id_empleado?: boolean
    dia?: boolean
    hora_entrada?: boolean
    hora_salida?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["horario"]>


  export type horarioSelectScalar = {
    id_horario?: boolean
    id_empleado?: boolean
    dia?: boolean
    hora_entrada?: boolean
    hora_salida?: boolean
    estatus?: boolean
    fecha_modificacion?: boolean
  }

  export type horarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $horarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horario"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_horario: string
      id_empleado: string
      dia: string
      hora_entrada: Date
      hora_salida: Date
      estatus: string
      fecha_modificacion: Date
    }, ExtArgs["result"]["horario"]>
    composites: {}
  }

  type horarioGetPayload<S extends boolean | null | undefined | horarioDefaultArgs> = $Result.GetResult<Prisma.$horarioPayload, S>

  type horarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<horarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HorarioCountAggregateInputType | true
    }

  export interface horarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horario'], meta: { name: 'horario' } }
    /**
     * Find zero or one Horario that matches the filter.
     * @param {horarioFindUniqueArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horarioFindUniqueArgs>(args: SelectSubset<T, horarioFindUniqueArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Horario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {horarioFindUniqueOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horarioFindUniqueOrThrowArgs>(args: SelectSubset<T, horarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Horario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioFindFirstArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horarioFindFirstArgs>(args?: SelectSubset<T, horarioFindFirstArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Horario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioFindFirstOrThrowArgs} args - Arguments to find a Horario
     * @example
     * // Get one Horario
     * const horario = await prisma.horario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horarioFindFirstOrThrowArgs>(args?: SelectSubset<T, horarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horario.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horario.findMany({ take: 10 })
     * 
     * // Only select the `id_horario`
     * const horarioWithId_horarioOnly = await prisma.horario.findMany({ select: { id_horario: true } })
     * 
     */
    findMany<T extends horarioFindManyArgs>(args?: SelectSubset<T, horarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Horario.
     * @param {horarioCreateArgs} args - Arguments to create a Horario.
     * @example
     * // Create one Horario
     * const Horario = await prisma.horario.create({
     *   data: {
     *     // ... data to create a Horario
     *   }
     * })
     * 
     */
    create<T extends horarioCreateArgs>(args: SelectSubset<T, horarioCreateArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Horarios.
     * @param {horarioCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horario = await prisma.horario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horarioCreateManyArgs>(args?: SelectSubset<T, horarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Horario.
     * @param {horarioDeleteArgs} args - Arguments to delete one Horario.
     * @example
     * // Delete one Horario
     * const Horario = await prisma.horario.delete({
     *   where: {
     *     // ... filter to delete one Horario
     *   }
     * })
     * 
     */
    delete<T extends horarioDeleteArgs>(args: SelectSubset<T, horarioDeleteArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Horario.
     * @param {horarioUpdateArgs} args - Arguments to update one Horario.
     * @example
     * // Update one Horario
     * const horario = await prisma.horario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horarioUpdateArgs>(args: SelectSubset<T, horarioUpdateArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Horarios.
     * @param {horarioDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horarioDeleteManyArgs>(args?: SelectSubset<T, horarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horario = await prisma.horario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horarioUpdateManyArgs>(args: SelectSubset<T, horarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Horario.
     * @param {horarioUpsertArgs} args - Arguments to update or create a Horario.
     * @example
     * // Update or create a Horario
     * const horario = await prisma.horario.upsert({
     *   create: {
     *     // ... data to create a Horario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horario we want to update
     *   }
     * })
     */
    upsert<T extends horarioUpsertArgs>(args: SelectSubset<T, horarioUpsertArgs<ExtArgs>>): Prisma__horarioClient<$Result.GetResult<Prisma.$horarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horario.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends horarioCountArgs>(
      args?: Subset<T, horarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HorarioAggregateArgs>(args: Subset<T, HorarioAggregateArgs>): Prisma.PrismaPromise<GetHorarioAggregateType<T>>

    /**
     * Group by Horario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horarioGroupByArgs} args - Group by arguments.
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
      T extends horarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horarioGroupByArgs['orderBy'] }
        : { orderBy?: horarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, horarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horario model
   */
  readonly fields: horarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the horario model
   */ 
  interface horarioFieldRefs {
    readonly id_horario: FieldRef<"horario", 'String'>
    readonly id_empleado: FieldRef<"horario", 'String'>
    readonly dia: FieldRef<"horario", 'String'>
    readonly hora_entrada: FieldRef<"horario", 'DateTime'>
    readonly hora_salida: FieldRef<"horario", 'DateTime'>
    readonly estatus: FieldRef<"horario", 'String'>
    readonly fecha_modificacion: FieldRef<"horario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * horario findUnique
   */
  export type horarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter, which horario to fetch.
     */
    where: horarioWhereUniqueInput
  }

  /**
   * horario findUniqueOrThrow
   */
  export type horarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter, which horario to fetch.
     */
    where: horarioWhereUniqueInput
  }

  /**
   * horario findFirst
   */
  export type horarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter, which horario to fetch.
     */
    where?: horarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horarioOrderByWithRelationInput | horarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * horario findFirstOrThrow
   */
  export type horarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter, which horario to fetch.
     */
    where?: horarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horarioOrderByWithRelationInput | horarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * horario findMany
   */
  export type horarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horarioOrderByWithRelationInput | horarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios.
     */
    cursor?: horarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    distinct?: HorarioScalarFieldEnum | HorarioScalarFieldEnum[]
  }

  /**
   * horario create
   */
  export type horarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * The data needed to create a horario.
     */
    data: XOR<horarioCreateInput, horarioUncheckedCreateInput>
  }

  /**
   * horario createMany
   */
  export type horarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios.
     */
    data: horarioCreateManyInput | horarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horario update
   */
  export type horarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * The data needed to update a horario.
     */
    data: XOR<horarioUpdateInput, horarioUncheckedUpdateInput>
    /**
     * Choose, which horario to update.
     */
    where: horarioWhereUniqueInput
  }

  /**
   * horario updateMany
   */
  export type horarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios.
     */
    data: XOR<horarioUpdateManyMutationInput, horarioUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horarioWhereInput
  }

  /**
   * horario upsert
   */
  export type horarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * The filter to search for the horario to update in case it exists.
     */
    where: horarioWhereUniqueInput
    /**
     * In case the horario found by the `where` argument doesn't exist, create a new horario with this data.
     */
    create: XOR<horarioCreateInput, horarioUncheckedCreateInput>
    /**
     * In case the horario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horarioUpdateInput, horarioUncheckedUpdateInput>
  }

  /**
   * horario delete
   */
  export type horarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
    /**
     * Filter which horario to delete.
     */
    where: horarioWhereUniqueInput
  }

  /**
   * horario deleteMany
   */
  export type horarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to delete
     */
    where?: horarioWhereInput
  }

  /**
   * horario without action
   */
  export type horarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horario
     */
    select?: horarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horarioInclude<ExtArgs> | null
  }


  /**
   * Model bitacora_personal
   */

  export type AggregateBitacora_personal = {
    _count: Bitacora_personalCountAggregateOutputType | null
    _min: Bitacora_personalMinAggregateOutputType | null
    _max: Bitacora_personalMaxAggregateOutputType | null
  }

  export type Bitacora_personalMinAggregateOutputType = {
    id_bitacora: string | null
    id_empleado: string | null
    accion: string | null
    fecha: Date | null
  }

  export type Bitacora_personalMaxAggregateOutputType = {
    id_bitacora: string | null
    id_empleado: string | null
    accion: string | null
    fecha: Date | null
  }

  export type Bitacora_personalCountAggregateOutputType = {
    id_bitacora: number
    id_empleado: number
    accion: number
    fecha: number
    _all: number
  }


  export type Bitacora_personalMinAggregateInputType = {
    id_bitacora?: true
    id_empleado?: true
    accion?: true
    fecha?: true
  }

  export type Bitacora_personalMaxAggregateInputType = {
    id_bitacora?: true
    id_empleado?: true
    accion?: true
    fecha?: true
  }

  export type Bitacora_personalCountAggregateInputType = {
    id_bitacora?: true
    id_empleado?: true
    accion?: true
    fecha?: true
    _all?: true
  }

  export type Bitacora_personalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacora_personal to aggregate.
     */
    where?: bitacora_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_personals to fetch.
     */
    orderBy?: bitacora_personalOrderByWithRelationInput | bitacora_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bitacora_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bitacora_personals
    **/
    _count?: true | Bitacora_personalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bitacora_personalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bitacora_personalMaxAggregateInputType
  }

  export type GetBitacora_personalAggregateType<T extends Bitacora_personalAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora_personal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora_personal[P]>
      : GetScalarType<T[P], AggregateBitacora_personal[P]>
  }




  export type bitacora_personalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacora_personalWhereInput
    orderBy?: bitacora_personalOrderByWithAggregationInput | bitacora_personalOrderByWithAggregationInput[]
    by: Bitacora_personalScalarFieldEnum[] | Bitacora_personalScalarFieldEnum
    having?: bitacora_personalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bitacora_personalCountAggregateInputType | true
    _min?: Bitacora_personalMinAggregateInputType
    _max?: Bitacora_personalMaxAggregateInputType
  }

  export type Bitacora_personalGroupByOutputType = {
    id_bitacora: string
    id_empleado: string
    accion: string
    fecha: Date
    _count: Bitacora_personalCountAggregateOutputType | null
    _min: Bitacora_personalMinAggregateOutputType | null
    _max: Bitacora_personalMaxAggregateOutputType | null
  }

  type GetBitacora_personalGroupByPayload<T extends bitacora_personalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bitacora_personalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bitacora_personalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bitacora_personalGroupByOutputType[P]>
            : GetScalarType<T[P], Bitacora_personalGroupByOutputType[P]>
        }
      >
    >


  export type bitacora_personalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    id_empleado?: boolean
    accion?: boolean
    fecha?: boolean
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora_personal"]>


  export type bitacora_personalSelectScalar = {
    id_bitacora?: boolean
    id_empleado?: boolean
    accion?: boolean
    fecha?: boolean
  }

  export type bitacora_personalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empleado?: boolean | empleadoDefaultArgs<ExtArgs>
  }

  export type $bitacora_personalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bitacora_personal"
    objects: {
      empleado: Prisma.$empleadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_bitacora: string
      id_empleado: string
      accion: string
      fecha: Date
    }, ExtArgs["result"]["bitacora_personal"]>
    composites: {}
  }

  type bitacora_personalGetPayload<S extends boolean | null | undefined | bitacora_personalDefaultArgs> = $Result.GetResult<Prisma.$bitacora_personalPayload, S>

  type bitacora_personalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bitacora_personalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Bitacora_personalCountAggregateInputType | true
    }

  export interface bitacora_personalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bitacora_personal'], meta: { name: 'bitacora_personal' } }
    /**
     * Find zero or one Bitacora_personal that matches the filter.
     * @param {bitacora_personalFindUniqueArgs} args - Arguments to find a Bitacora_personal
     * @example
     * // Get one Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bitacora_personalFindUniqueArgs>(args: SelectSubset<T, bitacora_personalFindUniqueArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bitacora_personal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bitacora_personalFindUniqueOrThrowArgs} args - Arguments to find a Bitacora_personal
     * @example
     * // Get one Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bitacora_personalFindUniqueOrThrowArgs>(args: SelectSubset<T, bitacora_personalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bitacora_personal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalFindFirstArgs} args - Arguments to find a Bitacora_personal
     * @example
     * // Get one Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bitacora_personalFindFirstArgs>(args?: SelectSubset<T, bitacora_personalFindFirstArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bitacora_personal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalFindFirstOrThrowArgs} args - Arguments to find a Bitacora_personal
     * @example
     * // Get one Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bitacora_personalFindFirstOrThrowArgs>(args?: SelectSubset<T, bitacora_personalFindFirstOrThrowArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bitacora_personals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacora_personals
     * const bitacora_personals = await prisma.bitacora_personal.findMany()
     * 
     * // Get first 10 Bitacora_personals
     * const bitacora_personals = await prisma.bitacora_personal.findMany({ take: 10 })
     * 
     * // Only select the `id_bitacora`
     * const bitacora_personalWithId_bitacoraOnly = await prisma.bitacora_personal.findMany({ select: { id_bitacora: true } })
     * 
     */
    findMany<T extends bitacora_personalFindManyArgs>(args?: SelectSubset<T, bitacora_personalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bitacora_personal.
     * @param {bitacora_personalCreateArgs} args - Arguments to create a Bitacora_personal.
     * @example
     * // Create one Bitacora_personal
     * const Bitacora_personal = await prisma.bitacora_personal.create({
     *   data: {
     *     // ... data to create a Bitacora_personal
     *   }
     * })
     * 
     */
    create<T extends bitacora_personalCreateArgs>(args: SelectSubset<T, bitacora_personalCreateArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bitacora_personals.
     * @param {bitacora_personalCreateManyArgs} args - Arguments to create many Bitacora_personals.
     * @example
     * // Create many Bitacora_personals
     * const bitacora_personal = await prisma.bitacora_personal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bitacora_personalCreateManyArgs>(args?: SelectSubset<T, bitacora_personalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bitacora_personal.
     * @param {bitacora_personalDeleteArgs} args - Arguments to delete one Bitacora_personal.
     * @example
     * // Delete one Bitacora_personal
     * const Bitacora_personal = await prisma.bitacora_personal.delete({
     *   where: {
     *     // ... filter to delete one Bitacora_personal
     *   }
     * })
     * 
     */
    delete<T extends bitacora_personalDeleteArgs>(args: SelectSubset<T, bitacora_personalDeleteArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bitacora_personal.
     * @param {bitacora_personalUpdateArgs} args - Arguments to update one Bitacora_personal.
     * @example
     * // Update one Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bitacora_personalUpdateArgs>(args: SelectSubset<T, bitacora_personalUpdateArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bitacora_personals.
     * @param {bitacora_personalDeleteManyArgs} args - Arguments to filter Bitacora_personals to delete.
     * @example
     * // Delete a few Bitacora_personals
     * const { count } = await prisma.bitacora_personal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bitacora_personalDeleteManyArgs>(args?: SelectSubset<T, bitacora_personalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacora_personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacora_personals
     * const bitacora_personal = await prisma.bitacora_personal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bitacora_personalUpdateManyArgs>(args: SelectSubset<T, bitacora_personalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bitacora_personal.
     * @param {bitacora_personalUpsertArgs} args - Arguments to update or create a Bitacora_personal.
     * @example
     * // Update or create a Bitacora_personal
     * const bitacora_personal = await prisma.bitacora_personal.upsert({
     *   create: {
     *     // ... data to create a Bitacora_personal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora_personal we want to update
     *   }
     * })
     */
    upsert<T extends bitacora_personalUpsertArgs>(args: SelectSubset<T, bitacora_personalUpsertArgs<ExtArgs>>): Prisma__bitacora_personalClient<$Result.GetResult<Prisma.$bitacora_personalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bitacora_personals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalCountArgs} args - Arguments to filter Bitacora_personals to count.
     * @example
     * // Count the number of Bitacora_personals
     * const count = await prisma.bitacora_personal.count({
     *   where: {
     *     // ... the filter for the Bitacora_personals we want to count
     *   }
     * })
    **/
    count<T extends bitacora_personalCountArgs>(
      args?: Subset<T, bitacora_personalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bitacora_personalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora_personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bitacora_personalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bitacora_personalAggregateArgs>(args: Subset<T, Bitacora_personalAggregateArgs>): Prisma.PrismaPromise<GetBitacora_personalAggregateType<T>>

    /**
     * Group by Bitacora_personal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacora_personalGroupByArgs} args - Group by arguments.
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
      T extends bitacora_personalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bitacora_personalGroupByArgs['orderBy'] }
        : { orderBy?: bitacora_personalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bitacora_personalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacora_personalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bitacora_personal model
   */
  readonly fields: bitacora_personalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bitacora_personal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bitacora_personalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empleado<T extends empleadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, empleadoDefaultArgs<ExtArgs>>): Prisma__empleadoClient<$Result.GetResult<Prisma.$empleadoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the bitacora_personal model
   */ 
  interface bitacora_personalFieldRefs {
    readonly id_bitacora: FieldRef<"bitacora_personal", 'String'>
    readonly id_empleado: FieldRef<"bitacora_personal", 'String'>
    readonly accion: FieldRef<"bitacora_personal", 'String'>
    readonly fecha: FieldRef<"bitacora_personal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * bitacora_personal findUnique
   */
  export type bitacora_personalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_personal to fetch.
     */
    where: bitacora_personalWhereUniqueInput
  }

  /**
   * bitacora_personal findUniqueOrThrow
   */
  export type bitacora_personalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_personal to fetch.
     */
    where: bitacora_personalWhereUniqueInput
  }

  /**
   * bitacora_personal findFirst
   */
  export type bitacora_personalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_personal to fetch.
     */
    where?: bitacora_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_personals to fetch.
     */
    orderBy?: bitacora_personalOrderByWithRelationInput | bitacora_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacora_personals.
     */
    cursor?: bitacora_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacora_personals.
     */
    distinct?: Bitacora_personalScalarFieldEnum | Bitacora_personalScalarFieldEnum[]
  }

  /**
   * bitacora_personal findFirstOrThrow
   */
  export type bitacora_personalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_personal to fetch.
     */
    where?: bitacora_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_personals to fetch.
     */
    orderBy?: bitacora_personalOrderByWithRelationInput | bitacora_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacora_personals.
     */
    cursor?: bitacora_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_personals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacora_personals.
     */
    distinct?: Bitacora_personalScalarFieldEnum | Bitacora_personalScalarFieldEnum[]
  }

  /**
   * bitacora_personal findMany
   */
  export type bitacora_personalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter, which bitacora_personals to fetch.
     */
    where?: bitacora_personalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacora_personals to fetch.
     */
    orderBy?: bitacora_personalOrderByWithRelationInput | bitacora_personalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bitacora_personals.
     */
    cursor?: bitacora_personalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacora_personals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacora_personals.
     */
    skip?: number
    distinct?: Bitacora_personalScalarFieldEnum | Bitacora_personalScalarFieldEnum[]
  }

  /**
   * bitacora_personal create
   */
  export type bitacora_personalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * The data needed to create a bitacora_personal.
     */
    data: XOR<bitacora_personalCreateInput, bitacora_personalUncheckedCreateInput>
  }

  /**
   * bitacora_personal createMany
   */
  export type bitacora_personalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bitacora_personals.
     */
    data: bitacora_personalCreateManyInput | bitacora_personalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bitacora_personal update
   */
  export type bitacora_personalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * The data needed to update a bitacora_personal.
     */
    data: XOR<bitacora_personalUpdateInput, bitacora_personalUncheckedUpdateInput>
    /**
     * Choose, which bitacora_personal to update.
     */
    where: bitacora_personalWhereUniqueInput
  }

  /**
   * bitacora_personal updateMany
   */
  export type bitacora_personalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bitacora_personals.
     */
    data: XOR<bitacora_personalUpdateManyMutationInput, bitacora_personalUncheckedUpdateManyInput>
    /**
     * Filter which bitacora_personals to update
     */
    where?: bitacora_personalWhereInput
  }

  /**
   * bitacora_personal upsert
   */
  export type bitacora_personalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * The filter to search for the bitacora_personal to update in case it exists.
     */
    where: bitacora_personalWhereUniqueInput
    /**
     * In case the bitacora_personal found by the `where` argument doesn't exist, create a new bitacora_personal with this data.
     */
    create: XOR<bitacora_personalCreateInput, bitacora_personalUncheckedCreateInput>
    /**
     * In case the bitacora_personal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bitacora_personalUpdateInput, bitacora_personalUncheckedUpdateInput>
  }

  /**
   * bitacora_personal delete
   */
  export type bitacora_personalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
    /**
     * Filter which bitacora_personal to delete.
     */
    where: bitacora_personalWhereUniqueInput
  }

  /**
   * bitacora_personal deleteMany
   */
  export type bitacora_personalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacora_personals to delete
     */
    where?: bitacora_personalWhereInput
  }

  /**
   * bitacora_personal without action
   */
  export type bitacora_personalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora_personal
     */
    select?: bitacora_personalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacora_personalInclude<ExtArgs> | null
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


  export const RolScalarFieldEnum: {
    id_rol: 'id_rol',
    descripcion: 'descripcion',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const EmpleadoScalarFieldEnum: {
    id_empleado: 'id_empleado',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono',
    correo: 'correo',
    fecha_ingreso: 'fecha_ingreso',
    id_rol: 'id_rol',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type EmpleadoScalarFieldEnum = (typeof EmpleadoScalarFieldEnum)[keyof typeof EmpleadoScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id_asistencia: 'id_asistencia',
    id_empleado: 'id_empleado',
    fecha: 'fecha',
    hora_entrada: 'hora_entrada',
    hora_salida: 'hora_salida',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const Seguridad_personalScalarFieldEnum: {
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    contrasena: 'contrasena',
    rol: 'rol',
    ultimo_acceso: 'ultimo_acceso',
    id_empleado: 'id_empleado',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type Seguridad_personalScalarFieldEnum = (typeof Seguridad_personalScalarFieldEnum)[keyof typeof Seguridad_personalScalarFieldEnum]


  export const EvaluacionScalarFieldEnum: {
    id_evaluacion: 'id_evaluacion',
    id_empleado: 'id_empleado',
    fecha: 'fecha',
    puntuacion: 'puntuacion',
    comentarios: 'comentarios',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type EvaluacionScalarFieldEnum = (typeof EvaluacionScalarFieldEnum)[keyof typeof EvaluacionScalarFieldEnum]


  export const NominaScalarFieldEnum: {
    id_nomina: 'id_nomina',
    id_empleado: 'id_empleado',
    periodo: 'periodo',
    salario: 'salario',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type NominaScalarFieldEnum = (typeof NominaScalarFieldEnum)[keyof typeof NominaScalarFieldEnum]


  export const HorarioScalarFieldEnum: {
    id_horario: 'id_horario',
    id_empleado: 'id_empleado',
    dia: 'dia',
    hora_entrada: 'hora_entrada',
    hora_salida: 'hora_salida',
    estatus: 'estatus',
    fecha_modificacion: 'fecha_modificacion'
  };

  export type HorarioScalarFieldEnum = (typeof HorarioScalarFieldEnum)[keyof typeof HorarioScalarFieldEnum]


  export const Bitacora_personalScalarFieldEnum: {
    id_bitacora: 'id_bitacora',
    id_empleado: 'id_empleado',
    accion: 'accion',
    fecha: 'fecha'
  };

  export type Bitacora_personalScalarFieldEnum = (typeof Bitacora_personalScalarFieldEnum)[keyof typeof Bitacora_personalScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id_rol?: StringFilter<"rol"> | string
    descripcion?: StringFilter<"rol"> | string
    estatus?: StringFilter<"rol"> | string
    fecha_modificacion?: DateTimeFilter<"rol"> | Date | string
    empleados?: EmpleadoListRelationFilter
  }

  export type rolOrderByWithRelationInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleados?: empleadoOrderByRelationAggregateInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: string
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    descripcion?: StringFilter<"rol"> | string
    estatus?: StringFilter<"rol"> | string
    fecha_modificacion?: DateTimeFilter<"rol"> | Date | string
    empleados?: EmpleadoListRelationFilter
  }, "id_rol">

  export type rolOrderByWithAggregationInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id_rol?: StringWithAggregatesFilter<"rol"> | string
    descripcion?: StringWithAggregatesFilter<"rol"> | string
    estatus?: StringWithAggregatesFilter<"rol"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"rol"> | Date | string
  }

  export type empleadoWhereInput = {
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    id_empleado?: StringFilter<"empleado"> | string
    nombre?: StringFilter<"empleado"> | string
    direccion?: StringFilter<"empleado"> | string
    telefono?: StringFilter<"empleado"> | string
    correo?: StringFilter<"empleado"> | string
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_rol?: StringNullableFilter<"empleado"> | string | null
    estatus?: StringFilter<"empleado"> | string
    fecha_modificacion?: DateTimeFilter<"empleado"> | Date | string
    rol?: XOR<RolNullableRelationFilter, rolWhereInput> | null
    asistencias?: AsistenciaListRelationFilter
    evaluaciones?: EvaluacionListRelationFilter
    nominas?: NominaListRelationFilter
    horarios?: HorarioListRelationFilter
    bitacoras?: Bitacora_personalListRelationFilter
    seguridad?: Seguridad_personalListRelationFilter
  }

  export type empleadoOrderByWithRelationInput = {
    id_empleado?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fecha_ingreso?: SortOrder
    id_rol?: SortOrderInput | SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    rol?: rolOrderByWithRelationInput
    asistencias?: asistenciaOrderByRelationAggregateInput
    evaluaciones?: evaluacionOrderByRelationAggregateInput
    nominas?: nominaOrderByRelationAggregateInput
    horarios?: horarioOrderByRelationAggregateInput
    bitacoras?: bitacora_personalOrderByRelationAggregateInput
    seguridad?: seguridad_personalOrderByRelationAggregateInput
  }

  export type empleadoWhereUniqueInput = Prisma.AtLeast<{
    id_empleado?: string
    AND?: empleadoWhereInput | empleadoWhereInput[]
    OR?: empleadoWhereInput[]
    NOT?: empleadoWhereInput | empleadoWhereInput[]
    nombre?: StringFilter<"empleado"> | string
    direccion?: StringFilter<"empleado"> | string
    telefono?: StringFilter<"empleado"> | string
    correo?: StringFilter<"empleado"> | string
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_rol?: StringNullableFilter<"empleado"> | string | null
    estatus?: StringFilter<"empleado"> | string
    fecha_modificacion?: DateTimeFilter<"empleado"> | Date | string
    rol?: XOR<RolNullableRelationFilter, rolWhereInput> | null
    asistencias?: AsistenciaListRelationFilter
    evaluaciones?: EvaluacionListRelationFilter
    nominas?: NominaListRelationFilter
    horarios?: HorarioListRelationFilter
    bitacoras?: Bitacora_personalListRelationFilter
    seguridad?: Seguridad_personalListRelationFilter
  }, "id_empleado">

  export type empleadoOrderByWithAggregationInput = {
    id_empleado?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fecha_ingreso?: SortOrder
    id_rol?: SortOrderInput | SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: empleadoCountOrderByAggregateInput
    _max?: empleadoMaxOrderByAggregateInput
    _min?: empleadoMinOrderByAggregateInput
  }

  export type empleadoScalarWhereWithAggregatesInput = {
    AND?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    OR?: empleadoScalarWhereWithAggregatesInput[]
    NOT?: empleadoScalarWhereWithAggregatesInput | empleadoScalarWhereWithAggregatesInput[]
    id_empleado?: StringWithAggregatesFilter<"empleado"> | string
    nombre?: StringWithAggregatesFilter<"empleado"> | string
    direccion?: StringWithAggregatesFilter<"empleado"> | string
    telefono?: StringWithAggregatesFilter<"empleado"> | string
    correo?: StringWithAggregatesFilter<"empleado"> | string
    fecha_ingreso?: DateTimeWithAggregatesFilter<"empleado"> | Date | string
    id_rol?: StringNullableWithAggregatesFilter<"empleado"> | string | null
    estatus?: StringWithAggregatesFilter<"empleado"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"empleado"> | Date | string
  }

  export type asistenciaWhereInput = {
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id_asistencia?: StringFilter<"asistencia"> | string
    id_empleado?: StringFilter<"asistencia"> | string
    fecha?: DateTimeFilter<"asistencia"> | Date | string
    hora_entrada?: DateTimeFilter<"asistencia"> | Date | string
    hora_salida?: DateTimeFilter<"asistencia"> | Date | string
    estatus?: StringFilter<"asistencia"> | string
    fecha_modificacion?: DateTimeFilter<"asistencia"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type asistenciaOrderByWithRelationInput = {
    id_asistencia?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type asistenciaWhereUniqueInput = Prisma.AtLeast<{
    id_asistencia?: string
    AND?: asistenciaWhereInput | asistenciaWhereInput[]
    OR?: asistenciaWhereInput[]
    NOT?: asistenciaWhereInput | asistenciaWhereInput[]
    id_empleado?: StringFilter<"asistencia"> | string
    fecha?: DateTimeFilter<"asistencia"> | Date | string
    hora_entrada?: DateTimeFilter<"asistencia"> | Date | string
    hora_salida?: DateTimeFilter<"asistencia"> | Date | string
    estatus?: StringFilter<"asistencia"> | string
    fecha_modificacion?: DateTimeFilter<"asistencia"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_asistencia">

  export type asistenciaOrderByWithAggregationInput = {
    id_asistencia?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: asistenciaCountOrderByAggregateInput
    _max?: asistenciaMaxOrderByAggregateInput
    _min?: asistenciaMinOrderByAggregateInput
  }

  export type asistenciaScalarWhereWithAggregatesInput = {
    AND?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    OR?: asistenciaScalarWhereWithAggregatesInput[]
    NOT?: asistenciaScalarWhereWithAggregatesInput | asistenciaScalarWhereWithAggregatesInput[]
    id_asistencia?: StringWithAggregatesFilter<"asistencia"> | string
    id_empleado?: StringWithAggregatesFilter<"asistencia"> | string
    fecha?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
    hora_entrada?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
    hora_salida?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
    estatus?: StringWithAggregatesFilter<"asistencia"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"asistencia"> | Date | string
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
    id_empleado?: StringFilter<"seguridad_personal"> | string
    estatus?: StringFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeFilter<"seguridad_personal"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type seguridad_personalOrderByWithRelationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    id_empleado?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
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
    id_empleado?: StringFilter<"seguridad_personal"> | string
    estatus?: StringFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeFilter<"seguridad_personal"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_usuario">

  export type seguridad_personalOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    id_empleado?: SortOrder
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
    id_empleado?: StringWithAggregatesFilter<"seguridad_personal"> | string
    estatus?: StringWithAggregatesFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"seguridad_personal"> | Date | string
  }

  export type evaluacionWhereInput = {
    AND?: evaluacionWhereInput | evaluacionWhereInput[]
    OR?: evaluacionWhereInput[]
    NOT?: evaluacionWhereInput | evaluacionWhereInput[]
    id_evaluacion?: StringFilter<"evaluacion"> | string
    id_empleado?: StringFilter<"evaluacion"> | string
    fecha?: DateTimeFilter<"evaluacion"> | Date | string
    puntuacion?: IntFilter<"evaluacion"> | number
    comentarios?: StringNullableFilter<"evaluacion"> | string | null
    estatus?: StringFilter<"evaluacion"> | string
    fecha_modificacion?: DateTimeFilter<"evaluacion"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type evaluacionOrderByWithRelationInput = {
    id_evaluacion?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    puntuacion?: SortOrder
    comentarios?: SortOrderInput | SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type evaluacionWhereUniqueInput = Prisma.AtLeast<{
    id_evaluacion?: string
    AND?: evaluacionWhereInput | evaluacionWhereInput[]
    OR?: evaluacionWhereInput[]
    NOT?: evaluacionWhereInput | evaluacionWhereInput[]
    id_empleado?: StringFilter<"evaluacion"> | string
    fecha?: DateTimeFilter<"evaluacion"> | Date | string
    puntuacion?: IntFilter<"evaluacion"> | number
    comentarios?: StringNullableFilter<"evaluacion"> | string | null
    estatus?: StringFilter<"evaluacion"> | string
    fecha_modificacion?: DateTimeFilter<"evaluacion"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_evaluacion">

  export type evaluacionOrderByWithAggregationInput = {
    id_evaluacion?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    puntuacion?: SortOrder
    comentarios?: SortOrderInput | SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: evaluacionCountOrderByAggregateInput
    _avg?: evaluacionAvgOrderByAggregateInput
    _max?: evaluacionMaxOrderByAggregateInput
    _min?: evaluacionMinOrderByAggregateInput
    _sum?: evaluacionSumOrderByAggregateInput
  }

  export type evaluacionScalarWhereWithAggregatesInput = {
    AND?: evaluacionScalarWhereWithAggregatesInput | evaluacionScalarWhereWithAggregatesInput[]
    OR?: evaluacionScalarWhereWithAggregatesInput[]
    NOT?: evaluacionScalarWhereWithAggregatesInput | evaluacionScalarWhereWithAggregatesInput[]
    id_evaluacion?: StringWithAggregatesFilter<"evaluacion"> | string
    id_empleado?: StringWithAggregatesFilter<"evaluacion"> | string
    fecha?: DateTimeWithAggregatesFilter<"evaluacion"> | Date | string
    puntuacion?: IntWithAggregatesFilter<"evaluacion"> | number
    comentarios?: StringNullableWithAggregatesFilter<"evaluacion"> | string | null
    estatus?: StringWithAggregatesFilter<"evaluacion"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"evaluacion"> | Date | string
  }

  export type nominaWhereInput = {
    AND?: nominaWhereInput | nominaWhereInput[]
    OR?: nominaWhereInput[]
    NOT?: nominaWhereInput | nominaWhereInput[]
    id_nomina?: StringFilter<"nomina"> | string
    id_empleado?: StringFilter<"nomina"> | string
    periodo?: DateTimeFilter<"nomina"> | Date | string
    salario?: DecimalFilter<"nomina"> | Decimal | DecimalJsLike | number | string
    estatus?: StringFilter<"nomina"> | string
    fecha_modificacion?: DateTimeFilter<"nomina"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type nominaOrderByWithRelationInput = {
    id_nomina?: SortOrder
    id_empleado?: SortOrder
    periodo?: SortOrder
    salario?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type nominaWhereUniqueInput = Prisma.AtLeast<{
    id_nomina?: string
    AND?: nominaWhereInput | nominaWhereInput[]
    OR?: nominaWhereInput[]
    NOT?: nominaWhereInput | nominaWhereInput[]
    id_empleado?: StringFilter<"nomina"> | string
    periodo?: DateTimeFilter<"nomina"> | Date | string
    salario?: DecimalFilter<"nomina"> | Decimal | DecimalJsLike | number | string
    estatus?: StringFilter<"nomina"> | string
    fecha_modificacion?: DateTimeFilter<"nomina"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_nomina">

  export type nominaOrderByWithAggregationInput = {
    id_nomina?: SortOrder
    id_empleado?: SortOrder
    periodo?: SortOrder
    salario?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: nominaCountOrderByAggregateInput
    _avg?: nominaAvgOrderByAggregateInput
    _max?: nominaMaxOrderByAggregateInput
    _min?: nominaMinOrderByAggregateInput
    _sum?: nominaSumOrderByAggregateInput
  }

  export type nominaScalarWhereWithAggregatesInput = {
    AND?: nominaScalarWhereWithAggregatesInput | nominaScalarWhereWithAggregatesInput[]
    OR?: nominaScalarWhereWithAggregatesInput[]
    NOT?: nominaScalarWhereWithAggregatesInput | nominaScalarWhereWithAggregatesInput[]
    id_nomina?: StringWithAggregatesFilter<"nomina"> | string
    id_empleado?: StringWithAggregatesFilter<"nomina"> | string
    periodo?: DateTimeWithAggregatesFilter<"nomina"> | Date | string
    salario?: DecimalWithAggregatesFilter<"nomina"> | Decimal | DecimalJsLike | number | string
    estatus?: StringWithAggregatesFilter<"nomina"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"nomina"> | Date | string
  }

  export type horarioWhereInput = {
    AND?: horarioWhereInput | horarioWhereInput[]
    OR?: horarioWhereInput[]
    NOT?: horarioWhereInput | horarioWhereInput[]
    id_horario?: StringFilter<"horario"> | string
    id_empleado?: StringFilter<"horario"> | string
    dia?: StringFilter<"horario"> | string
    hora_entrada?: DateTimeFilter<"horario"> | Date | string
    hora_salida?: DateTimeFilter<"horario"> | Date | string
    estatus?: StringFilter<"horario"> | string
    fecha_modificacion?: DateTimeFilter<"horario"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type horarioOrderByWithRelationInput = {
    id_horario?: SortOrder
    id_empleado?: SortOrder
    dia?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type horarioWhereUniqueInput = Prisma.AtLeast<{
    id_horario?: string
    AND?: horarioWhereInput | horarioWhereInput[]
    OR?: horarioWhereInput[]
    NOT?: horarioWhereInput | horarioWhereInput[]
    id_empleado?: StringFilter<"horario"> | string
    dia?: StringFilter<"horario"> | string
    hora_entrada?: DateTimeFilter<"horario"> | Date | string
    hora_salida?: DateTimeFilter<"horario"> | Date | string
    estatus?: StringFilter<"horario"> | string
    fecha_modificacion?: DateTimeFilter<"horario"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_horario">

  export type horarioOrderByWithAggregationInput = {
    id_horario?: SortOrder
    id_empleado?: SortOrder
    dia?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
    _count?: horarioCountOrderByAggregateInput
    _max?: horarioMaxOrderByAggregateInput
    _min?: horarioMinOrderByAggregateInput
  }

  export type horarioScalarWhereWithAggregatesInput = {
    AND?: horarioScalarWhereWithAggregatesInput | horarioScalarWhereWithAggregatesInput[]
    OR?: horarioScalarWhereWithAggregatesInput[]
    NOT?: horarioScalarWhereWithAggregatesInput | horarioScalarWhereWithAggregatesInput[]
    id_horario?: StringWithAggregatesFilter<"horario"> | string
    id_empleado?: StringWithAggregatesFilter<"horario"> | string
    dia?: StringWithAggregatesFilter<"horario"> | string
    hora_entrada?: DateTimeWithAggregatesFilter<"horario"> | Date | string
    hora_salida?: DateTimeWithAggregatesFilter<"horario"> | Date | string
    estatus?: StringWithAggregatesFilter<"horario"> | string
    fecha_modificacion?: DateTimeWithAggregatesFilter<"horario"> | Date | string
  }

  export type bitacora_personalWhereInput = {
    AND?: bitacora_personalWhereInput | bitacora_personalWhereInput[]
    OR?: bitacora_personalWhereInput[]
    NOT?: bitacora_personalWhereInput | bitacora_personalWhereInput[]
    id_bitacora?: StringFilter<"bitacora_personal"> | string
    id_empleado?: StringFilter<"bitacora_personal"> | string
    accion?: StringFilter<"bitacora_personal"> | string
    fecha?: DateTimeFilter<"bitacora_personal"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }

  export type bitacora_personalOrderByWithRelationInput = {
    id_bitacora?: SortOrder
    id_empleado?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    empleado?: empleadoOrderByWithRelationInput
  }

  export type bitacora_personalWhereUniqueInput = Prisma.AtLeast<{
    id_bitacora?: string
    AND?: bitacora_personalWhereInput | bitacora_personalWhereInput[]
    OR?: bitacora_personalWhereInput[]
    NOT?: bitacora_personalWhereInput | bitacora_personalWhereInput[]
    id_empleado?: StringFilter<"bitacora_personal"> | string
    accion?: StringFilter<"bitacora_personal"> | string
    fecha?: DateTimeFilter<"bitacora_personal"> | Date | string
    empleado?: XOR<EmpleadoRelationFilter, empleadoWhereInput>
  }, "id_bitacora">

  export type bitacora_personalOrderByWithAggregationInput = {
    id_bitacora?: SortOrder
    id_empleado?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    _count?: bitacora_personalCountOrderByAggregateInput
    _max?: bitacora_personalMaxOrderByAggregateInput
    _min?: bitacora_personalMinOrderByAggregateInput
  }

  export type bitacora_personalScalarWhereWithAggregatesInput = {
    AND?: bitacora_personalScalarWhereWithAggregatesInput | bitacora_personalScalarWhereWithAggregatesInput[]
    OR?: bitacora_personalScalarWhereWithAggregatesInput[]
    NOT?: bitacora_personalScalarWhereWithAggregatesInput | bitacora_personalScalarWhereWithAggregatesInput[]
    id_bitacora?: StringWithAggregatesFilter<"bitacora_personal"> | string
    id_empleado?: StringWithAggregatesFilter<"bitacora_personal"> | string
    accion?: StringWithAggregatesFilter<"bitacora_personal"> | string
    fecha?: DateTimeWithAggregatesFilter<"bitacora_personal"> | Date | string
  }

  export type rolCreateInput = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion?: Date | string
    empleados?: empleadoCreateNestedManyWithoutRolInput
  }

  export type rolUncheckedCreateInput = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion?: Date | string
    empleados?: empleadoUncheckedCreateNestedManyWithoutRolInput
  }

  export type rolUpdateInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: empleadoUpdateManyWithoutRolNestedInput
  }

  export type rolUncheckedUpdateInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleados?: empleadoUncheckedUpdateManyWithoutRolNestedInput
  }

  export type rolCreateManyInput = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type rolUpdateManyMutationInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolUncheckedUpdateManyInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empleadoCreateInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUpdateInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateManyInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type empleadoUpdateManyMutationInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type empleadoUncheckedUpdateManyInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateInput = {
    id_asistencia: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    empleado: empleadoCreateNestedOneWithoutAsistenciasInput
  }

  export type asistenciaUncheckedCreateInput = {
    id_asistencia: string
    id_empleado: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type asistenciaUpdateInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutAsistenciasNestedInput
  }

  export type asistenciaUncheckedUpdateInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateManyInput = {
    id_asistencia: string
    id_empleado: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type asistenciaUpdateManyMutationInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateManyInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalCreateInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    empleado: empleadoCreateNestedOneWithoutSeguridadInput
  }

  export type seguridad_personalUncheckedCreateInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    id_empleado: string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutSeguridadNestedInput
  }

  export type seguridad_personalUncheckedUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalCreateManyInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    id_empleado: string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
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
    id_empleado?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionCreateInput = {
    id_evaluacion: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    empleado: empleadoCreateNestedOneWithoutEvaluacionesInput
  }

  export type evaluacionUncheckedCreateInput = {
    id_evaluacion: string
    id_empleado: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type evaluacionUpdateInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutEvaluacionesNestedInput
  }

  export type evaluacionUncheckedUpdateInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionCreateManyInput = {
    id_evaluacion: string
    id_empleado: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type evaluacionUpdateManyMutationInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionUncheckedUpdateManyInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaCreateInput = {
    id_nomina: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
    empleado: empleadoCreateNestedOneWithoutNominasInput
  }

  export type nominaUncheckedCreateInput = {
    id_nomina: string
    id_empleado: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type nominaUpdateInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutNominasNestedInput
  }

  export type nominaUncheckedUpdateInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaCreateManyInput = {
    id_nomina: string
    id_empleado: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type nominaUpdateManyMutationInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaUncheckedUpdateManyInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioCreateInput = {
    id_horario: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    empleado: empleadoCreateNestedOneWithoutHorariosInput
  }

  export type horarioUncheckedCreateInput = {
    id_horario: string
    id_empleado: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type horarioUpdateInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutHorariosNestedInput
  }

  export type horarioUncheckedUpdateInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioCreateManyInput = {
    id_horario: string
    id_empleado: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type horarioUpdateManyMutationInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioUncheckedUpdateManyInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalCreateInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
    empleado: empleadoCreateNestedOneWithoutBitacorasInput
  }

  export type bitacora_personalUncheckedCreateInput = {
    id_bitacora: string
    id_empleado: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_personalUpdateInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    empleado?: empleadoUpdateOneRequiredWithoutBitacorasNestedInput
  }

  export type bitacora_personalUncheckedUpdateInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalCreateManyInput = {
    id_bitacora: string
    id_empleado: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_personalUpdateManyMutationInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalUncheckedUpdateManyInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    id_empleado?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EmpleadoListRelationFilter = {
    every?: empleadoWhereInput
    some?: empleadoWhereInput
    none?: empleadoWhereInput
  }

  export type empleadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolCountOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id_rol?: SortOrder
    descripcion?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RolNullableRelationFilter = {
    is?: rolWhereInput | null
    isNot?: rolWhereInput | null
  }

  export type AsistenciaListRelationFilter = {
    every?: asistenciaWhereInput
    some?: asistenciaWhereInput
    none?: asistenciaWhereInput
  }

  export type EvaluacionListRelationFilter = {
    every?: evaluacionWhereInput
    some?: evaluacionWhereInput
    none?: evaluacionWhereInput
  }

  export type NominaListRelationFilter = {
    every?: nominaWhereInput
    some?: nominaWhereInput
    none?: nominaWhereInput
  }

  export type HorarioListRelationFilter = {
    every?: horarioWhereInput
    some?: horarioWhereInput
    none?: horarioWhereInput
  }

  export type Bitacora_personalListRelationFilter = {
    every?: bitacora_personalWhereInput
    some?: bitacora_personalWhereInput
    none?: bitacora_personalWhereInput
  }

  export type Seguridad_personalListRelationFilter = {
    every?: seguridad_personalWhereInput
    some?: seguridad_personalWhereInput
    none?: seguridad_personalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type asistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type evaluacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nominaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type horarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bitacora_personalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type seguridad_personalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type empleadoCountOrderByAggregateInput = {
    id_empleado?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fecha_ingreso?: SortOrder
    id_rol?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type empleadoMaxOrderByAggregateInput = {
    id_empleado?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fecha_ingreso?: SortOrder
    id_rol?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type empleadoMinOrderByAggregateInput = {
    id_empleado?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fecha_ingreso?: SortOrder
    id_rol?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EmpleadoRelationFilter = {
    is?: empleadoWhereInput
    isNot?: empleadoWhereInput
  }

  export type asistenciaCountOrderByAggregateInput = {
    id_asistencia?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type asistenciaMaxOrderByAggregateInput = {
    id_asistencia?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type asistenciaMinOrderByAggregateInput = {
    id_asistencia?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type seguridad_personalCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    id_empleado?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type seguridad_personalMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    id_empleado?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type seguridad_personalMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    contrasena?: SortOrder
    rol?: SortOrder
    ultimo_acceso?: SortOrder
    id_empleado?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
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

  export type evaluacionCountOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    puntuacion?: SortOrder
    comentarios?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type evaluacionAvgOrderByAggregateInput = {
    puntuacion?: SortOrder
  }

  export type evaluacionMaxOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    puntuacion?: SortOrder
    comentarios?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type evaluacionMinOrderByAggregateInput = {
    id_evaluacion?: SortOrder
    id_empleado?: SortOrder
    fecha?: SortOrder
    puntuacion?: SortOrder
    comentarios?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type evaluacionSumOrderByAggregateInput = {
    puntuacion?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type nominaCountOrderByAggregateInput = {
    id_nomina?: SortOrder
    id_empleado?: SortOrder
    periodo?: SortOrder
    salario?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type nominaAvgOrderByAggregateInput = {
    salario?: SortOrder
  }

  export type nominaMaxOrderByAggregateInput = {
    id_nomina?: SortOrder
    id_empleado?: SortOrder
    periodo?: SortOrder
    salario?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type nominaMinOrderByAggregateInput = {
    id_nomina?: SortOrder
    id_empleado?: SortOrder
    periodo?: SortOrder
    salario?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type nominaSumOrderByAggregateInput = {
    salario?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type horarioCountOrderByAggregateInput = {
    id_horario?: SortOrder
    id_empleado?: SortOrder
    dia?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type horarioMaxOrderByAggregateInput = {
    id_horario?: SortOrder
    id_empleado?: SortOrder
    dia?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type horarioMinOrderByAggregateInput = {
    id_horario?: SortOrder
    id_empleado?: SortOrder
    dia?: SortOrder
    hora_entrada?: SortOrder
    hora_salida?: SortOrder
    estatus?: SortOrder
    fecha_modificacion?: SortOrder
  }

  export type bitacora_personalCountOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_empleado?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type bitacora_personalMaxOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_empleado?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type bitacora_personalMinOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_empleado?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
  }

  export type empleadoCreateNestedManyWithoutRolInput = {
    create?: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput> | empleadoCreateWithoutRolInput[] | empleadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutRolInput | empleadoCreateOrConnectWithoutRolInput[]
    createMany?: empleadoCreateManyRolInputEnvelope
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
  }

  export type empleadoUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput> | empleadoCreateWithoutRolInput[] | empleadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutRolInput | empleadoCreateOrConnectWithoutRolInput[]
    createMany?: empleadoCreateManyRolInputEnvelope
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type empleadoUpdateManyWithoutRolNestedInput = {
    create?: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput> | empleadoCreateWithoutRolInput[] | empleadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutRolInput | empleadoCreateOrConnectWithoutRolInput[]
    upsert?: empleadoUpsertWithWhereUniqueWithoutRolInput | empleadoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: empleadoCreateManyRolInputEnvelope
    set?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    disconnect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    delete?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    update?: empleadoUpdateWithWhereUniqueWithoutRolInput | empleadoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: empleadoUpdateManyWithWhereWithoutRolInput | empleadoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
  }

  export type empleadoUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput> | empleadoCreateWithoutRolInput[] | empleadoUncheckedCreateWithoutRolInput[]
    connectOrCreate?: empleadoCreateOrConnectWithoutRolInput | empleadoCreateOrConnectWithoutRolInput[]
    upsert?: empleadoUpsertWithWhereUniqueWithoutRolInput | empleadoUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: empleadoCreateManyRolInputEnvelope
    set?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    disconnect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    delete?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    connect?: empleadoWhereUniqueInput | empleadoWhereUniqueInput[]
    update?: empleadoUpdateWithWhereUniqueWithoutRolInput | empleadoUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: empleadoUpdateManyWithWhereWithoutRolInput | empleadoUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
  }

  export type rolCreateNestedOneWithoutEmpleadosInput = {
    create?: XOR<rolCreateWithoutEmpleadosInput, rolUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rolCreateOrConnectWithoutEmpleadosInput
    connect?: rolWhereUniqueInput
  }

  export type asistenciaCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput> | asistenciaCreateWithoutEmpleadoInput[] | asistenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutEmpleadoInput | asistenciaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: asistenciaCreateManyEmpleadoInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type evaluacionCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput> | evaluacionCreateWithoutEmpleadoInput[] | evaluacionUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutEmpleadoInput | evaluacionCreateOrConnectWithoutEmpleadoInput[]
    createMany?: evaluacionCreateManyEmpleadoInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type nominaCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput> | nominaCreateWithoutEmpleadoInput[] | nominaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: nominaCreateOrConnectWithoutEmpleadoInput | nominaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: nominaCreateManyEmpleadoInputEnvelope
    connect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
  }

  export type horarioCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput> | horarioCreateWithoutEmpleadoInput[] | horarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: horarioCreateOrConnectWithoutEmpleadoInput | horarioCreateOrConnectWithoutEmpleadoInput[]
    createMany?: horarioCreateManyEmpleadoInputEnvelope
    connect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
  }

  export type bitacora_personalCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput> | bitacora_personalCreateWithoutEmpleadoInput[] | bitacora_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: bitacora_personalCreateOrConnectWithoutEmpleadoInput | bitacora_personalCreateOrConnectWithoutEmpleadoInput[]
    createMany?: bitacora_personalCreateManyEmpleadoInputEnvelope
    connect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
  }

  export type seguridad_personalCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput> | seguridad_personalCreateWithoutEmpleadoInput[] | seguridad_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutEmpleadoInput | seguridad_personalCreateOrConnectWithoutEmpleadoInput[]
    createMany?: seguridad_personalCreateManyEmpleadoInputEnvelope
    connect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
  }

  export type asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput> | asistenciaCreateWithoutEmpleadoInput[] | asistenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutEmpleadoInput | asistenciaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: asistenciaCreateManyEmpleadoInputEnvelope
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
  }

  export type evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput> | evaluacionCreateWithoutEmpleadoInput[] | evaluacionUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutEmpleadoInput | evaluacionCreateOrConnectWithoutEmpleadoInput[]
    createMany?: evaluacionCreateManyEmpleadoInputEnvelope
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
  }

  export type nominaUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput> | nominaCreateWithoutEmpleadoInput[] | nominaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: nominaCreateOrConnectWithoutEmpleadoInput | nominaCreateOrConnectWithoutEmpleadoInput[]
    createMany?: nominaCreateManyEmpleadoInputEnvelope
    connect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
  }

  export type horarioUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput> | horarioCreateWithoutEmpleadoInput[] | horarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: horarioCreateOrConnectWithoutEmpleadoInput | horarioCreateOrConnectWithoutEmpleadoInput[]
    createMany?: horarioCreateManyEmpleadoInputEnvelope
    connect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
  }

  export type bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput> | bitacora_personalCreateWithoutEmpleadoInput[] | bitacora_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: bitacora_personalCreateOrConnectWithoutEmpleadoInput | bitacora_personalCreateOrConnectWithoutEmpleadoInput[]
    createMany?: bitacora_personalCreateManyEmpleadoInputEnvelope
    connect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
  }

  export type seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput = {
    create?: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput> | seguridad_personalCreateWithoutEmpleadoInput[] | seguridad_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutEmpleadoInput | seguridad_personalCreateOrConnectWithoutEmpleadoInput[]
    createMany?: seguridad_personalCreateManyEmpleadoInputEnvelope
    connect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
  }

  export type rolUpdateOneWithoutEmpleadosNestedInput = {
    create?: XOR<rolCreateWithoutEmpleadosInput, rolUncheckedCreateWithoutEmpleadosInput>
    connectOrCreate?: rolCreateOrConnectWithoutEmpleadosInput
    upsert?: rolUpsertWithoutEmpleadosInput
    disconnect?: rolWhereInput | boolean
    delete?: rolWhereInput | boolean
    connect?: rolWhereUniqueInput
    update?: XOR<XOR<rolUpdateToOneWithWhereWithoutEmpleadosInput, rolUpdateWithoutEmpleadosInput>, rolUncheckedUpdateWithoutEmpleadosInput>
  }

  export type asistenciaUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput> | asistenciaCreateWithoutEmpleadoInput[] | asistenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutEmpleadoInput | asistenciaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutEmpleadoInput | asistenciaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: asistenciaCreateManyEmpleadoInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutEmpleadoInput | asistenciaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutEmpleadoInput | asistenciaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type evaluacionUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput> | evaluacionCreateWithoutEmpleadoInput[] | evaluacionUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutEmpleadoInput | evaluacionCreateOrConnectWithoutEmpleadoInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutEmpleadoInput | evaluacionUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: evaluacionCreateManyEmpleadoInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutEmpleadoInput | evaluacionUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutEmpleadoInput | evaluacionUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
  }

  export type nominaUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput> | nominaCreateWithoutEmpleadoInput[] | nominaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: nominaCreateOrConnectWithoutEmpleadoInput | nominaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: nominaUpsertWithWhereUniqueWithoutEmpleadoInput | nominaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: nominaCreateManyEmpleadoInputEnvelope
    set?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    disconnect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    delete?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    connect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    update?: nominaUpdateWithWhereUniqueWithoutEmpleadoInput | nominaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: nominaUpdateManyWithWhereWithoutEmpleadoInput | nominaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: nominaScalarWhereInput | nominaScalarWhereInput[]
  }

  export type horarioUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput> | horarioCreateWithoutEmpleadoInput[] | horarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: horarioCreateOrConnectWithoutEmpleadoInput | horarioCreateOrConnectWithoutEmpleadoInput[]
    upsert?: horarioUpsertWithWhereUniqueWithoutEmpleadoInput | horarioUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: horarioCreateManyEmpleadoInputEnvelope
    set?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    disconnect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    delete?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    connect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    update?: horarioUpdateWithWhereUniqueWithoutEmpleadoInput | horarioUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: horarioUpdateManyWithWhereWithoutEmpleadoInput | horarioUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: horarioScalarWhereInput | horarioScalarWhereInput[]
  }

  export type bitacora_personalUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput> | bitacora_personalCreateWithoutEmpleadoInput[] | bitacora_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: bitacora_personalCreateOrConnectWithoutEmpleadoInput | bitacora_personalCreateOrConnectWithoutEmpleadoInput[]
    upsert?: bitacora_personalUpsertWithWhereUniqueWithoutEmpleadoInput | bitacora_personalUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: bitacora_personalCreateManyEmpleadoInputEnvelope
    set?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    disconnect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    delete?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    connect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    update?: bitacora_personalUpdateWithWhereUniqueWithoutEmpleadoInput | bitacora_personalUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: bitacora_personalUpdateManyWithWhereWithoutEmpleadoInput | bitacora_personalUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: bitacora_personalScalarWhereInput | bitacora_personalScalarWhereInput[]
  }

  export type seguridad_personalUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput> | seguridad_personalCreateWithoutEmpleadoInput[] | seguridad_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutEmpleadoInput | seguridad_personalCreateOrConnectWithoutEmpleadoInput[]
    upsert?: seguridad_personalUpsertWithWhereUniqueWithoutEmpleadoInput | seguridad_personalUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: seguridad_personalCreateManyEmpleadoInputEnvelope
    set?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    disconnect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    delete?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    connect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    update?: seguridad_personalUpdateWithWhereUniqueWithoutEmpleadoInput | seguridad_personalUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: seguridad_personalUpdateManyWithWhereWithoutEmpleadoInput | seguridad_personalUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: seguridad_personalScalarWhereInput | seguridad_personalScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput> | asistenciaCreateWithoutEmpleadoInput[] | asistenciaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: asistenciaCreateOrConnectWithoutEmpleadoInput | asistenciaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: asistenciaUpsertWithWhereUniqueWithoutEmpleadoInput | asistenciaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: asistenciaCreateManyEmpleadoInputEnvelope
    set?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    disconnect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    delete?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    connect?: asistenciaWhereUniqueInput | asistenciaWhereUniqueInput[]
    update?: asistenciaUpdateWithWhereUniqueWithoutEmpleadoInput | asistenciaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: asistenciaUpdateManyWithWhereWithoutEmpleadoInput | asistenciaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
  }

  export type evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput> | evaluacionCreateWithoutEmpleadoInput[] | evaluacionUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: evaluacionCreateOrConnectWithoutEmpleadoInput | evaluacionCreateOrConnectWithoutEmpleadoInput[]
    upsert?: evaluacionUpsertWithWhereUniqueWithoutEmpleadoInput | evaluacionUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: evaluacionCreateManyEmpleadoInputEnvelope
    set?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    disconnect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    delete?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    connect?: evaluacionWhereUniqueInput | evaluacionWhereUniqueInput[]
    update?: evaluacionUpdateWithWhereUniqueWithoutEmpleadoInput | evaluacionUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: evaluacionUpdateManyWithWhereWithoutEmpleadoInput | evaluacionUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
  }

  export type nominaUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput> | nominaCreateWithoutEmpleadoInput[] | nominaUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: nominaCreateOrConnectWithoutEmpleadoInput | nominaCreateOrConnectWithoutEmpleadoInput[]
    upsert?: nominaUpsertWithWhereUniqueWithoutEmpleadoInput | nominaUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: nominaCreateManyEmpleadoInputEnvelope
    set?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    disconnect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    delete?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    connect?: nominaWhereUniqueInput | nominaWhereUniqueInput[]
    update?: nominaUpdateWithWhereUniqueWithoutEmpleadoInput | nominaUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: nominaUpdateManyWithWhereWithoutEmpleadoInput | nominaUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: nominaScalarWhereInput | nominaScalarWhereInput[]
  }

  export type horarioUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput> | horarioCreateWithoutEmpleadoInput[] | horarioUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: horarioCreateOrConnectWithoutEmpleadoInput | horarioCreateOrConnectWithoutEmpleadoInput[]
    upsert?: horarioUpsertWithWhereUniqueWithoutEmpleadoInput | horarioUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: horarioCreateManyEmpleadoInputEnvelope
    set?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    disconnect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    delete?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    connect?: horarioWhereUniqueInput | horarioWhereUniqueInput[]
    update?: horarioUpdateWithWhereUniqueWithoutEmpleadoInput | horarioUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: horarioUpdateManyWithWhereWithoutEmpleadoInput | horarioUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: horarioScalarWhereInput | horarioScalarWhereInput[]
  }

  export type bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput> | bitacora_personalCreateWithoutEmpleadoInput[] | bitacora_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: bitacora_personalCreateOrConnectWithoutEmpleadoInput | bitacora_personalCreateOrConnectWithoutEmpleadoInput[]
    upsert?: bitacora_personalUpsertWithWhereUniqueWithoutEmpleadoInput | bitacora_personalUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: bitacora_personalCreateManyEmpleadoInputEnvelope
    set?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    disconnect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    delete?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    connect?: bitacora_personalWhereUniqueInput | bitacora_personalWhereUniqueInput[]
    update?: bitacora_personalUpdateWithWhereUniqueWithoutEmpleadoInput | bitacora_personalUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: bitacora_personalUpdateManyWithWhereWithoutEmpleadoInput | bitacora_personalUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: bitacora_personalScalarWhereInput | bitacora_personalScalarWhereInput[]
  }

  export type seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput = {
    create?: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput> | seguridad_personalCreateWithoutEmpleadoInput[] | seguridad_personalUncheckedCreateWithoutEmpleadoInput[]
    connectOrCreate?: seguridad_personalCreateOrConnectWithoutEmpleadoInput | seguridad_personalCreateOrConnectWithoutEmpleadoInput[]
    upsert?: seguridad_personalUpsertWithWhereUniqueWithoutEmpleadoInput | seguridad_personalUpsertWithWhereUniqueWithoutEmpleadoInput[]
    createMany?: seguridad_personalCreateManyEmpleadoInputEnvelope
    set?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    disconnect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    delete?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    connect?: seguridad_personalWhereUniqueInput | seguridad_personalWhereUniqueInput[]
    update?: seguridad_personalUpdateWithWhereUniqueWithoutEmpleadoInput | seguridad_personalUpdateWithWhereUniqueWithoutEmpleadoInput[]
    updateMany?: seguridad_personalUpdateManyWithWhereWithoutEmpleadoInput | seguridad_personalUpdateManyWithWhereWithoutEmpleadoInput[]
    deleteMany?: seguridad_personalScalarWhereInput | seguridad_personalScalarWhereInput[]
  }

  export type empleadoCreateNestedOneWithoutAsistenciasInput = {
    create?: XOR<empleadoCreateWithoutAsistenciasInput, empleadoUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutAsistenciasInput
    connect?: empleadoWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutAsistenciasNestedInput = {
    create?: XOR<empleadoCreateWithoutAsistenciasInput, empleadoUncheckedCreateWithoutAsistenciasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutAsistenciasInput
    upsert?: empleadoUpsertWithoutAsistenciasInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutAsistenciasInput, empleadoUpdateWithoutAsistenciasInput>, empleadoUncheckedUpdateWithoutAsistenciasInput>
  }

  export type empleadoCreateNestedOneWithoutSeguridadInput = {
    create?: XOR<empleadoCreateWithoutSeguridadInput, empleadoUncheckedCreateWithoutSeguridadInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutSeguridadInput
    connect?: empleadoWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutSeguridadNestedInput = {
    create?: XOR<empleadoCreateWithoutSeguridadInput, empleadoUncheckedCreateWithoutSeguridadInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutSeguridadInput
    upsert?: empleadoUpsertWithoutSeguridadInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutSeguridadInput, empleadoUpdateWithoutSeguridadInput>, empleadoUncheckedUpdateWithoutSeguridadInput>
  }

  export type empleadoCreateNestedOneWithoutEvaluacionesInput = {
    create?: XOR<empleadoCreateWithoutEvaluacionesInput, empleadoUncheckedCreateWithoutEvaluacionesInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutEvaluacionesInput
    connect?: empleadoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type empleadoUpdateOneRequiredWithoutEvaluacionesNestedInput = {
    create?: XOR<empleadoCreateWithoutEvaluacionesInput, empleadoUncheckedCreateWithoutEvaluacionesInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutEvaluacionesInput
    upsert?: empleadoUpsertWithoutEvaluacionesInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutEvaluacionesInput, empleadoUpdateWithoutEvaluacionesInput>, empleadoUncheckedUpdateWithoutEvaluacionesInput>
  }

  export type empleadoCreateNestedOneWithoutNominasInput = {
    create?: XOR<empleadoCreateWithoutNominasInput, empleadoUncheckedCreateWithoutNominasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutNominasInput
    connect?: empleadoWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type empleadoUpdateOneRequiredWithoutNominasNestedInput = {
    create?: XOR<empleadoCreateWithoutNominasInput, empleadoUncheckedCreateWithoutNominasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutNominasInput
    upsert?: empleadoUpsertWithoutNominasInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutNominasInput, empleadoUpdateWithoutNominasInput>, empleadoUncheckedUpdateWithoutNominasInput>
  }

  export type empleadoCreateNestedOneWithoutHorariosInput = {
    create?: XOR<empleadoCreateWithoutHorariosInput, empleadoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutHorariosInput
    connect?: empleadoWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutHorariosNestedInput = {
    create?: XOR<empleadoCreateWithoutHorariosInput, empleadoUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutHorariosInput
    upsert?: empleadoUpsertWithoutHorariosInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutHorariosInput, empleadoUpdateWithoutHorariosInput>, empleadoUncheckedUpdateWithoutHorariosInput>
  }

  export type empleadoCreateNestedOneWithoutBitacorasInput = {
    create?: XOR<empleadoCreateWithoutBitacorasInput, empleadoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutBitacorasInput
    connect?: empleadoWhereUniqueInput
  }

  export type empleadoUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: XOR<empleadoCreateWithoutBitacorasInput, empleadoUncheckedCreateWithoutBitacorasInput>
    connectOrCreate?: empleadoCreateOrConnectWithoutBitacorasInput
    upsert?: empleadoUpsertWithoutBitacorasInput
    connect?: empleadoWhereUniqueInput
    update?: XOR<XOR<empleadoUpdateToOneWithWhereWithoutBitacorasInput, empleadoUpdateWithoutBitacorasInput>, empleadoUncheckedUpdateWithoutBitacorasInput>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type empleadoCreateWithoutRolInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutRolInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutRolInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput>
  }

  export type empleadoCreateManyRolInputEnvelope = {
    data: empleadoCreateManyRolInput | empleadoCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type empleadoUpsertWithWhereUniqueWithoutRolInput = {
    where: empleadoWhereUniqueInput
    update: XOR<empleadoUpdateWithoutRolInput, empleadoUncheckedUpdateWithoutRolInput>
    create: XOR<empleadoCreateWithoutRolInput, empleadoUncheckedCreateWithoutRolInput>
  }

  export type empleadoUpdateWithWhereUniqueWithoutRolInput = {
    where: empleadoWhereUniqueInput
    data: XOR<empleadoUpdateWithoutRolInput, empleadoUncheckedUpdateWithoutRolInput>
  }

  export type empleadoUpdateManyWithWhereWithoutRolInput = {
    where: empleadoScalarWhereInput
    data: XOR<empleadoUpdateManyMutationInput, empleadoUncheckedUpdateManyWithoutRolInput>
  }

  export type empleadoScalarWhereInput = {
    AND?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
    OR?: empleadoScalarWhereInput[]
    NOT?: empleadoScalarWhereInput | empleadoScalarWhereInput[]
    id_empleado?: StringFilter<"empleado"> | string
    nombre?: StringFilter<"empleado"> | string
    direccion?: StringFilter<"empleado"> | string
    telefono?: StringFilter<"empleado"> | string
    correo?: StringFilter<"empleado"> | string
    fecha_ingreso?: DateTimeFilter<"empleado"> | Date | string
    id_rol?: StringNullableFilter<"empleado"> | string | null
    estatus?: StringFilter<"empleado"> | string
    fecha_modificacion?: DateTimeFilter<"empleado"> | Date | string
  }

  export type rolCreateWithoutEmpleadosInput = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type rolUncheckedCreateWithoutEmpleadosInput = {
    id_rol: string
    descripcion: string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type rolCreateOrConnectWithoutEmpleadosInput = {
    where: rolWhereUniqueInput
    create: XOR<rolCreateWithoutEmpleadosInput, rolUncheckedCreateWithoutEmpleadosInput>
  }

  export type asistenciaCreateWithoutEmpleadoInput = {
    id_asistencia: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type asistenciaUncheckedCreateWithoutEmpleadoInput = {
    id_asistencia: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type asistenciaCreateOrConnectWithoutEmpleadoInput = {
    where: asistenciaWhereUniqueInput
    create: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput>
  }

  export type asistenciaCreateManyEmpleadoInputEnvelope = {
    data: asistenciaCreateManyEmpleadoInput | asistenciaCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type evaluacionCreateWithoutEmpleadoInput = {
    id_evaluacion: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type evaluacionUncheckedCreateWithoutEmpleadoInput = {
    id_evaluacion: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type evaluacionCreateOrConnectWithoutEmpleadoInput = {
    where: evaluacionWhereUniqueInput
    create: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput>
  }

  export type evaluacionCreateManyEmpleadoInputEnvelope = {
    data: evaluacionCreateManyEmpleadoInput | evaluacionCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type nominaCreateWithoutEmpleadoInput = {
    id_nomina: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type nominaUncheckedCreateWithoutEmpleadoInput = {
    id_nomina: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type nominaCreateOrConnectWithoutEmpleadoInput = {
    where: nominaWhereUniqueInput
    create: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput>
  }

  export type nominaCreateManyEmpleadoInputEnvelope = {
    data: nominaCreateManyEmpleadoInput | nominaCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type horarioCreateWithoutEmpleadoInput = {
    id_horario: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type horarioUncheckedCreateWithoutEmpleadoInput = {
    id_horario: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type horarioCreateOrConnectWithoutEmpleadoInput = {
    where: horarioWhereUniqueInput
    create: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type horarioCreateManyEmpleadoInputEnvelope = {
    data: horarioCreateManyEmpleadoInput | horarioCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type bitacora_personalCreateWithoutEmpleadoInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_personalUncheckedCreateWithoutEmpleadoInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type bitacora_personalCreateOrConnectWithoutEmpleadoInput = {
    where: bitacora_personalWhereUniqueInput
    create: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput>
  }

  export type bitacora_personalCreateManyEmpleadoInputEnvelope = {
    data: bitacora_personalCreateManyEmpleadoInput | bitacora_personalCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type seguridad_personalCreateWithoutEmpleadoInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalUncheckedCreateWithoutEmpleadoInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type seguridad_personalCreateOrConnectWithoutEmpleadoInput = {
    where: seguridad_personalWhereUniqueInput
    create: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput>
  }

  export type seguridad_personalCreateManyEmpleadoInputEnvelope = {
    data: seguridad_personalCreateManyEmpleadoInput | seguridad_personalCreateManyEmpleadoInput[]
    skipDuplicates?: boolean
  }

  export type rolUpsertWithoutEmpleadosInput = {
    update: XOR<rolUpdateWithoutEmpleadosInput, rolUncheckedUpdateWithoutEmpleadosInput>
    create: XOR<rolCreateWithoutEmpleadosInput, rolUncheckedCreateWithoutEmpleadosInput>
    where?: rolWhereInput
  }

  export type rolUpdateToOneWithWhereWithoutEmpleadosInput = {
    where?: rolWhereInput
    data: XOR<rolUpdateWithoutEmpleadosInput, rolUncheckedUpdateWithoutEmpleadosInput>
  }

  export type rolUpdateWithoutEmpleadosInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolUncheckedUpdateWithoutEmpleadosInput = {
    id_rol?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: asistenciaWhereUniqueInput
    update: XOR<asistenciaUpdateWithoutEmpleadoInput, asistenciaUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<asistenciaCreateWithoutEmpleadoInput, asistenciaUncheckedCreateWithoutEmpleadoInput>
  }

  export type asistenciaUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: asistenciaWhereUniqueInput
    data: XOR<asistenciaUpdateWithoutEmpleadoInput, asistenciaUncheckedUpdateWithoutEmpleadoInput>
  }

  export type asistenciaUpdateManyWithWhereWithoutEmpleadoInput = {
    where: asistenciaScalarWhereInput
    data: XOR<asistenciaUpdateManyMutationInput, asistenciaUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type asistenciaScalarWhereInput = {
    AND?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    OR?: asistenciaScalarWhereInput[]
    NOT?: asistenciaScalarWhereInput | asistenciaScalarWhereInput[]
    id_asistencia?: StringFilter<"asistencia"> | string
    id_empleado?: StringFilter<"asistencia"> | string
    fecha?: DateTimeFilter<"asistencia"> | Date | string
    hora_entrada?: DateTimeFilter<"asistencia"> | Date | string
    hora_salida?: DateTimeFilter<"asistencia"> | Date | string
    estatus?: StringFilter<"asistencia"> | string
    fecha_modificacion?: DateTimeFilter<"asistencia"> | Date | string
  }

  export type evaluacionUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: evaluacionWhereUniqueInput
    update: XOR<evaluacionUpdateWithoutEmpleadoInput, evaluacionUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<evaluacionCreateWithoutEmpleadoInput, evaluacionUncheckedCreateWithoutEmpleadoInput>
  }

  export type evaluacionUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: evaluacionWhereUniqueInput
    data: XOR<evaluacionUpdateWithoutEmpleadoInput, evaluacionUncheckedUpdateWithoutEmpleadoInput>
  }

  export type evaluacionUpdateManyWithWhereWithoutEmpleadoInput = {
    where: evaluacionScalarWhereInput
    data: XOR<evaluacionUpdateManyMutationInput, evaluacionUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type evaluacionScalarWhereInput = {
    AND?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
    OR?: evaluacionScalarWhereInput[]
    NOT?: evaluacionScalarWhereInput | evaluacionScalarWhereInput[]
    id_evaluacion?: StringFilter<"evaluacion"> | string
    id_empleado?: StringFilter<"evaluacion"> | string
    fecha?: DateTimeFilter<"evaluacion"> | Date | string
    puntuacion?: IntFilter<"evaluacion"> | number
    comentarios?: StringNullableFilter<"evaluacion"> | string | null
    estatus?: StringFilter<"evaluacion"> | string
    fecha_modificacion?: DateTimeFilter<"evaluacion"> | Date | string
  }

  export type nominaUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: nominaWhereUniqueInput
    update: XOR<nominaUpdateWithoutEmpleadoInput, nominaUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<nominaCreateWithoutEmpleadoInput, nominaUncheckedCreateWithoutEmpleadoInput>
  }

  export type nominaUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: nominaWhereUniqueInput
    data: XOR<nominaUpdateWithoutEmpleadoInput, nominaUncheckedUpdateWithoutEmpleadoInput>
  }

  export type nominaUpdateManyWithWhereWithoutEmpleadoInput = {
    where: nominaScalarWhereInput
    data: XOR<nominaUpdateManyMutationInput, nominaUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type nominaScalarWhereInput = {
    AND?: nominaScalarWhereInput | nominaScalarWhereInput[]
    OR?: nominaScalarWhereInput[]
    NOT?: nominaScalarWhereInput | nominaScalarWhereInput[]
    id_nomina?: StringFilter<"nomina"> | string
    id_empleado?: StringFilter<"nomina"> | string
    periodo?: DateTimeFilter<"nomina"> | Date | string
    salario?: DecimalFilter<"nomina"> | Decimal | DecimalJsLike | number | string
    estatus?: StringFilter<"nomina"> | string
    fecha_modificacion?: DateTimeFilter<"nomina"> | Date | string
  }

  export type horarioUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: horarioWhereUniqueInput
    update: XOR<horarioUpdateWithoutEmpleadoInput, horarioUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<horarioCreateWithoutEmpleadoInput, horarioUncheckedCreateWithoutEmpleadoInput>
  }

  export type horarioUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: horarioWhereUniqueInput
    data: XOR<horarioUpdateWithoutEmpleadoInput, horarioUncheckedUpdateWithoutEmpleadoInput>
  }

  export type horarioUpdateManyWithWhereWithoutEmpleadoInput = {
    where: horarioScalarWhereInput
    data: XOR<horarioUpdateManyMutationInput, horarioUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type horarioScalarWhereInput = {
    AND?: horarioScalarWhereInput | horarioScalarWhereInput[]
    OR?: horarioScalarWhereInput[]
    NOT?: horarioScalarWhereInput | horarioScalarWhereInput[]
    id_horario?: StringFilter<"horario"> | string
    id_empleado?: StringFilter<"horario"> | string
    dia?: StringFilter<"horario"> | string
    hora_entrada?: DateTimeFilter<"horario"> | Date | string
    hora_salida?: DateTimeFilter<"horario"> | Date | string
    estatus?: StringFilter<"horario"> | string
    fecha_modificacion?: DateTimeFilter<"horario"> | Date | string
  }

  export type bitacora_personalUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: bitacora_personalWhereUniqueInput
    update: XOR<bitacora_personalUpdateWithoutEmpleadoInput, bitacora_personalUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<bitacora_personalCreateWithoutEmpleadoInput, bitacora_personalUncheckedCreateWithoutEmpleadoInput>
  }

  export type bitacora_personalUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: bitacora_personalWhereUniqueInput
    data: XOR<bitacora_personalUpdateWithoutEmpleadoInput, bitacora_personalUncheckedUpdateWithoutEmpleadoInput>
  }

  export type bitacora_personalUpdateManyWithWhereWithoutEmpleadoInput = {
    where: bitacora_personalScalarWhereInput
    data: XOR<bitacora_personalUpdateManyMutationInput, bitacora_personalUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type bitacora_personalScalarWhereInput = {
    AND?: bitacora_personalScalarWhereInput | bitacora_personalScalarWhereInput[]
    OR?: bitacora_personalScalarWhereInput[]
    NOT?: bitacora_personalScalarWhereInput | bitacora_personalScalarWhereInput[]
    id_bitacora?: StringFilter<"bitacora_personal"> | string
    id_empleado?: StringFilter<"bitacora_personal"> | string
    accion?: StringFilter<"bitacora_personal"> | string
    fecha?: DateTimeFilter<"bitacora_personal"> | Date | string
  }

  export type seguridad_personalUpsertWithWhereUniqueWithoutEmpleadoInput = {
    where: seguridad_personalWhereUniqueInput
    update: XOR<seguridad_personalUpdateWithoutEmpleadoInput, seguridad_personalUncheckedUpdateWithoutEmpleadoInput>
    create: XOR<seguridad_personalCreateWithoutEmpleadoInput, seguridad_personalUncheckedCreateWithoutEmpleadoInput>
  }

  export type seguridad_personalUpdateWithWhereUniqueWithoutEmpleadoInput = {
    where: seguridad_personalWhereUniqueInput
    data: XOR<seguridad_personalUpdateWithoutEmpleadoInput, seguridad_personalUncheckedUpdateWithoutEmpleadoInput>
  }

  export type seguridad_personalUpdateManyWithWhereWithoutEmpleadoInput = {
    where: seguridad_personalScalarWhereInput
    data: XOR<seguridad_personalUpdateManyMutationInput, seguridad_personalUncheckedUpdateManyWithoutEmpleadoInput>
  }

  export type seguridad_personalScalarWhereInput = {
    AND?: seguridad_personalScalarWhereInput | seguridad_personalScalarWhereInput[]
    OR?: seguridad_personalScalarWhereInput[]
    NOT?: seguridad_personalScalarWhereInput | seguridad_personalScalarWhereInput[]
    id_usuario?: StringFilter<"seguridad_personal"> | string
    usuario?: StringFilter<"seguridad_personal"> | string
    contrasena?: StringFilter<"seguridad_personal"> | string
    rol?: StringFilter<"seguridad_personal"> | string
    ultimo_acceso?: DateTimeFilter<"seguridad_personal"> | Date | string
    id_empleado?: StringFilter<"seguridad_personal"> | string
    estatus?: StringFilter<"seguridad_personal"> | string
    fecha_modificacion?: DateTimeFilter<"seguridad_personal"> | Date | string
  }

  export type empleadoCreateWithoutAsistenciasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutAsistenciasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutAsistenciasInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutAsistenciasInput, empleadoUncheckedCreateWithoutAsistenciasInput>
  }

  export type empleadoUpsertWithoutAsistenciasInput = {
    update: XOR<empleadoUpdateWithoutAsistenciasInput, empleadoUncheckedUpdateWithoutAsistenciasInput>
    create: XOR<empleadoCreateWithoutAsistenciasInput, empleadoUncheckedCreateWithoutAsistenciasInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutAsistenciasInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutAsistenciasInput, empleadoUncheckedUpdateWithoutAsistenciasInput>
  }

  export type empleadoUpdateWithoutAsistenciasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutAsistenciasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateWithoutSeguridadInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutSeguridadInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutSeguridadInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutSeguridadInput, empleadoUncheckedCreateWithoutSeguridadInput>
  }

  export type empleadoUpsertWithoutSeguridadInput = {
    update: XOR<empleadoUpdateWithoutSeguridadInput, empleadoUncheckedUpdateWithoutSeguridadInput>
    create: XOR<empleadoCreateWithoutSeguridadInput, empleadoUncheckedCreateWithoutSeguridadInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutSeguridadInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutSeguridadInput, empleadoUncheckedUpdateWithoutSeguridadInput>
  }

  export type empleadoUpdateWithoutSeguridadInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutSeguridadInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateWithoutEvaluacionesInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutEvaluacionesInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutEvaluacionesInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutEvaluacionesInput, empleadoUncheckedCreateWithoutEvaluacionesInput>
  }

  export type empleadoUpsertWithoutEvaluacionesInput = {
    update: XOR<empleadoUpdateWithoutEvaluacionesInput, empleadoUncheckedUpdateWithoutEvaluacionesInput>
    create: XOR<empleadoCreateWithoutEvaluacionesInput, empleadoUncheckedCreateWithoutEvaluacionesInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutEvaluacionesInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutEvaluacionesInput, empleadoUncheckedUpdateWithoutEvaluacionesInput>
  }

  export type empleadoUpdateWithoutEvaluacionesInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutEvaluacionesInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateWithoutNominasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutNominasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutNominasInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutNominasInput, empleadoUncheckedCreateWithoutNominasInput>
  }

  export type empleadoUpsertWithoutNominasInput = {
    update: XOR<empleadoUpdateWithoutNominasInput, empleadoUncheckedUpdateWithoutNominasInput>
    create: XOR<empleadoCreateWithoutNominasInput, empleadoUncheckedCreateWithoutNominasInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutNominasInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutNominasInput, empleadoUncheckedUpdateWithoutNominasInput>
  }

  export type empleadoUpdateWithoutNominasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutNominasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateWithoutHorariosInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutHorariosInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    bitacoras?: bitacora_personalUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutHorariosInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutHorariosInput, empleadoUncheckedCreateWithoutHorariosInput>
  }

  export type empleadoUpsertWithoutHorariosInput = {
    update: XOR<empleadoUpdateWithoutHorariosInput, empleadoUncheckedUpdateWithoutHorariosInput>
    create: XOR<empleadoCreateWithoutHorariosInput, empleadoUncheckedCreateWithoutHorariosInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutHorariosInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutHorariosInput, empleadoUncheckedUpdateWithoutHorariosInput>
  }

  export type empleadoUpdateWithoutHorariosInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutHorariosInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateWithoutBitacorasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
    rol?: rolCreateNestedOneWithoutEmpleadosInput
    asistencias?: asistenciaCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoUncheckedCreateWithoutBitacorasInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    id_rol?: string | null
    estatus: string
    fecha_modificacion?: Date | string
    asistencias?: asistenciaUncheckedCreateNestedManyWithoutEmpleadoInput
    evaluaciones?: evaluacionUncheckedCreateNestedManyWithoutEmpleadoInput
    nominas?: nominaUncheckedCreateNestedManyWithoutEmpleadoInput
    horarios?: horarioUncheckedCreateNestedManyWithoutEmpleadoInput
    seguridad?: seguridad_personalUncheckedCreateNestedManyWithoutEmpleadoInput
  }

  export type empleadoCreateOrConnectWithoutBitacorasInput = {
    where: empleadoWhereUniqueInput
    create: XOR<empleadoCreateWithoutBitacorasInput, empleadoUncheckedCreateWithoutBitacorasInput>
  }

  export type empleadoUpsertWithoutBitacorasInput = {
    update: XOR<empleadoUpdateWithoutBitacorasInput, empleadoUncheckedUpdateWithoutBitacorasInput>
    create: XOR<empleadoCreateWithoutBitacorasInput, empleadoUncheckedCreateWithoutBitacorasInput>
    where?: empleadoWhereInput
  }

  export type empleadoUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: empleadoWhereInput
    data: XOR<empleadoUpdateWithoutBitacorasInput, empleadoUncheckedUpdateWithoutBitacorasInput>
  }

  export type empleadoUpdateWithoutBitacorasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: rolUpdateOneWithoutEmpleadosNestedInput
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutBitacorasInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    id_rol?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoCreateManyRolInput = {
    id_empleado: string
    nombre: string
    direccion: string
    telefono: string
    correo: string
    fecha_ingreso: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type empleadoUpdateWithoutRolInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateWithoutRolInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
    asistencias?: asistenciaUncheckedUpdateManyWithoutEmpleadoNestedInput
    evaluaciones?: evaluacionUncheckedUpdateManyWithoutEmpleadoNestedInput
    nominas?: nominaUncheckedUpdateManyWithoutEmpleadoNestedInput
    horarios?: horarioUncheckedUpdateManyWithoutEmpleadoNestedInput
    bitacoras?: bitacora_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
    seguridad?: seguridad_personalUncheckedUpdateManyWithoutEmpleadoNestedInput
  }

  export type empleadoUncheckedUpdateManyWithoutRolInput = {
    id_empleado?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaCreateManyEmpleadoInput = {
    id_asistencia: string
    fecha: Date | string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type evaluacionCreateManyEmpleadoInput = {
    id_evaluacion: string
    fecha: Date | string
    puntuacion: number
    comentarios?: string | null
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type nominaCreateManyEmpleadoInput = {
    id_nomina: string
    periodo: Date | string
    salario: Decimal | DecimalJsLike | number | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type horarioCreateManyEmpleadoInput = {
    id_horario: string
    dia: string
    hora_entrada: Date | string
    hora_salida: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type bitacora_personalCreateManyEmpleadoInput = {
    id_bitacora: string
    accion: string
    fecha?: Date | string
  }

  export type seguridad_personalCreateManyEmpleadoInput = {
    id_usuario: string
    usuario: string
    contrasena: string
    rol: string
    ultimo_acceso?: Date | string
    estatus: string
    fecha_modificacion?: Date | string
  }

  export type asistenciaUpdateWithoutEmpleadoInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateWithoutEmpleadoInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type asistenciaUncheckedUpdateManyWithoutEmpleadoInput = {
    id_asistencia?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionUpdateWithoutEmpleadoInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionUncheckedUpdateWithoutEmpleadoInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type evaluacionUncheckedUpdateManyWithoutEmpleadoInput = {
    id_evaluacion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    puntuacion?: IntFieldUpdateOperationsInput | number
    comentarios?: NullableStringFieldUpdateOperationsInput | string | null
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaUpdateWithoutEmpleadoInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaUncheckedUpdateWithoutEmpleadoInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nominaUncheckedUpdateManyWithoutEmpleadoInput = {
    id_nomina?: StringFieldUpdateOperationsInput | string
    periodo?: DateTimeFieldUpdateOperationsInput | Date | string
    salario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioUpdateWithoutEmpleadoInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioUncheckedUpdateWithoutEmpleadoInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type horarioUncheckedUpdateManyWithoutEmpleadoInput = {
    id_horario?: StringFieldUpdateOperationsInput | string
    dia?: StringFieldUpdateOperationsInput | string
    hora_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_salida?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalUpdateWithoutEmpleadoInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalUncheckedUpdateWithoutEmpleadoInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacora_personalUncheckedUpdateManyWithoutEmpleadoInput = {
    id_bitacora?: StringFieldUpdateOperationsInput | string
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalUpdateWithoutEmpleadoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalUncheckedUpdateWithoutEmpleadoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seguridad_personalUncheckedUpdateManyWithoutEmpleadoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    rol?: StringFieldUpdateOperationsInput | string
    ultimo_acceso?: DateTimeFieldUpdateOperationsInput | Date | string
    estatus?: StringFieldUpdateOperationsInput | string
    fecha_modificacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolCountOutputTypeDefaultArgs instead
     */
    export type RolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmpleadoCountOutputTypeDefaultArgs instead
     */
    export type EmpleadoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmpleadoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use rolDefaultArgs instead
     */
    export type rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = rolDefaultArgs<ExtArgs>
    /**
     * @deprecated Use empleadoDefaultArgs instead
     */
    export type empleadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = empleadoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use asistenciaDefaultArgs instead
     */
    export type asistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = asistenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use seguridad_personalDefaultArgs instead
     */
    export type seguridad_personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = seguridad_personalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use evaluacionDefaultArgs instead
     */
    export type evaluacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = evaluacionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use nominaDefaultArgs instead
     */
    export type nominaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = nominaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use horarioDefaultArgs instead
     */
    export type horarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = horarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bitacora_personalDefaultArgs instead
     */
    export type bitacora_personalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bitacora_personalDefaultArgs<ExtArgs>

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