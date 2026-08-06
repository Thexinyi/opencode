import { Schema } from "effect"
import { ascending } from "./identifier"
import { statics } from "./schema"

export const JobID = Schema.String.check(Schema.isStartsWith("job_")).pipe(
  Schema.brand("JobID"),
  statics((schema) => ({ create: () => schema.make("job_" + ascending()) })),
)
export type JobID = typeof JobID.Type
