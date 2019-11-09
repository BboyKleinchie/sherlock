export interface IServiceGET<T> {
    getAll(): Promise<T[]>;
}