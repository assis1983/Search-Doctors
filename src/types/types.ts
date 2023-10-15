export type Variant =
  | "total"
  | "available"
  | "unavailable"
  | "totalcontracts"
  | "active"
  | "inactive";

  type Pagination = {
    pageable: {
      pageNumber: number
      pageSize: number
      sort: {
        empty: boolean
        unsorted: boolean
        sorted: boolean
      }
      offset: number
      paged: boolean
      unpaged: boolean
    }
    last: boolean
    totalPages: number
    totalElements: number
    size: number
    number: number
    sort: {
      empty: boolean
      unsorted: boolean
      sorted: boolean
    }
    first: boolean
    numberOfElements: number
    empty: boolean
  }

export default Pagination