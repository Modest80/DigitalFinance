namespace DigitalFinanceReactApp.Server.Databases {
    public interface IRepository<T> where T : class {
        T? Get();
        int Add(T entity);
        T? GetById(int id);
        int Delete(T entity);
        int Update(T entity);
    }
}
