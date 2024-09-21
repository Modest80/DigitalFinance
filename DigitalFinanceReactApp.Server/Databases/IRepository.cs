namespace DigitalFinanceReactApp.Server.Databases {
    public interface IRepository<T> where T : class {
        List<T>? Get();
        int Add(T entity);
        T? GetById(int id);
        int Delete(int id);
        int Update(T entity);
    }
}
