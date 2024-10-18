
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.0
 * Query Engine version: 08713a93b99d58f31485621c634b04983ae01d95
 */
Prisma.prismaVersion = {
  client: "5.21.0",
  engine: "08713a93b99d58f31485621c634b04983ae01d95"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id_usuario: 'id_usuario',
  nombre_usuario: 'nombre_usuario',
  contrasena: 'contrasena'
};

exports.Prisma.Rol_seguridadScalarFieldEnum = {
  id_rol: 'id_rol',
  descripcion: 'descripcion'
};

exports.Prisma.Bitacora_seguridadScalarFieldEnum = {
  id_bitacora: 'id_bitacora',
  id_usuario: 'id_usuario',
  accion: 'accion',
  fecha: 'fecha'
};

exports.Prisma.Seguridad_personalScalarFieldEnum = {
  id_usuario: 'id_usuario',
  usuario: 'usuario',
  contrasena: 'contrasena',
  rol: 'rol',
  ultimo_acceso: 'ultimo_acceso',
  estatus: 'estatus',
  fecha_modificacion: 'fecha_modificacion'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};


exports.Prisma.ModelName = {
  usuario: 'usuario',
  rol_seguridad: 'rol_seguridad',
  bitacora_seguridad: 'bitacora_seguridad',
  seguridad_personal: 'seguridad_personal'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\laragon\\www\\proyecto2\\prisma\\generated\\seguridad",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\laragon\\www\\proyecto2\\prisma\\schema_seguridad.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.21.0",
  "engineVersion": "08713a93b99d58f31485621c634b04983ae01d95",
  "datasourceNames": [
    "seguridad_db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "seguridad_db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_SEGURIDAD",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file for the security database,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// This is your Prisma schema file for the security database\n\ndatasource seguridad_db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_SEGURIDAD\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../prisma/generated/seguridad\"\n}\n\nmodel usuario {\n  id_usuario     String @id @seguridad_db.VarChar(10)\n  nombre_usuario String @seguridad_db.VarChar(50)\n  contrasena     String @seguridad_db.VarChar(255)\n\n  bitacoras bitacora_seguridad[] @relation(\"UsuarioBitacoras\")\n  roles     rol_seguridad[]      @relation(\"RolUsuarios\")\n\n  seguridad_personal seguridad_personal? @relation(\"UsuarioSeguridad\")\n}\n\nmodel rol_seguridad {\n  id_rol      String @id @seguridad_db.VarChar(10)\n  descripcion String @seguridad_db.VarChar(100)\n\n  usuarios usuario[] @relation(\"RolUsuarios\")\n}\n\nmodel bitacora_seguridad {\n  id_bitacora String   @id @seguridad_db.VarChar(10)\n  id_usuario  String   @seguridad_db.VarChar(10)\n  accion      String   @seguridad_db.VarChar(255)\n  fecha       DateTime @default(now())\n\n  usuario usuario @relation(\"UsuarioBitacoras\", fields: [id_usuario], references: [id_usuario])\n}\n\nmodel seguridad_personal {\n  id_usuario         String   @id @seguridad_db.VarChar(10)\n  usuario            String   @seguridad_db.VarChar(50)\n  contrasena         String   @seguridad_db.VarChar(255)\n  rol                String\n  ultimo_acceso      DateTime @default(now())\n  estatus            String\n  fecha_modificacion DateTime @default(now())\n\n  // Relación con el modelo usuario\n  usuario_rel usuario @relation(\"UsuarioSeguridad\", fields: [id_usuario], references: [id_usuario])\n}\n",
  "inlineSchemaHash": "a8bab8aa24eca018fb70abb2c693812f18f4f0f38252f8e3547c548ffb57bb82",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"usuario\":{\"dbName\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bitacoras\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bitacora_seguridad\",\"relationName\":\"UsuarioBitacoras\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"rol_seguridad\",\"relationName\":\"RolUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"seguridad_personal\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"seguridad_personal\",\"relationName\":\"UsuarioSeguridad\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"rol_seguridad\":{\"dbName\":null,\"fields\":[{\"name\":\"id_rol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuarios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"RolUsuarios\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bitacora_seguridad\":{\"dbName\":null,\"fields\":[{\"name\":\"id_bitacora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"UsuarioBitacoras\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id_usuario\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"seguridad_personal\":{\"dbName\":null,\"fields\":[{\"name\":\"id_usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"contrasena\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ultimo_acceso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_modificacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_rel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"UsuarioSeguridad\",\"relationFromFields\":[\"id_usuario\"],\"relationToFields\":[\"id_usuario\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_SEGURIDAD: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_SEGURIDAD'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_SEGURIDAD || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

