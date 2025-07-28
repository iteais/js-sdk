export interface Resource<T> {
    data: T;
}
export interface ResourceCollection<T> {
    data: T[];
    meta: {
        current_page: number;
        last_page: number;
        from: number;
        to: number;
        per_page: number;
        total: number;
    };
}
export declare const newResource: <T>(data: T[], total: number, page: number, perPage: number) => ResourceCollection<T>;
