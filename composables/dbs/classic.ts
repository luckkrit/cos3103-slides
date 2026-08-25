import { PGlite } from '@electric-sql/pglite'
import schemaSql from '../../data/classicmodels.sql?raw'

export const db = new PGlite()
export const dbReady = db.exec(schemaSql)