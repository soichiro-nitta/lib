// 参照： https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
export default function <T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`)
  }
}
