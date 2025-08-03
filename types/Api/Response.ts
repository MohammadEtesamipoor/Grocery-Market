export interface Response<T> {
    data: EntityDataType<T>[]
    meta: Meta
}

export interface EntityDataType<T> {
    id: number
    attributes: T
}


export interface Meta {
    pagination: Pagination
}

export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
}
