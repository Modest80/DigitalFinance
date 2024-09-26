using Dapper;
using DigitalFinanceReactApp.Server.Models;
using System.Data;

namespace DigitalFinanceReactApp.Server.Databases {
    public class TypeAccountRepository : Repository, IRepository<TypeAccount> {
        public TypeAccountRepository(IDbConnection dbConnection) : base(dbConnection) { }

        public int Add(TypeAccount entity) {
            return _connection.Execute("INSERT INTO all_accounts (type) VALUES (@type)",new { type = entity.Type });
        }

        public int Delete(int id) {
            return _connection.Execute("DELETE FROM all_accounts WHERE id = @id",new { id });
        }

        public List<TypeAccount>? Get() {
            var query = "SELECT * FROM All_Accounts;";
            return _connection.Query<TypeAccount>(query).ToList();
        }

        public TypeAccount? GetById(int id) {
            return _connection.QuerySingleOrDefault("SELECT * FROM all_accounts WHERE id = @id",new { id });
        }

        public int Update(TypeAccount entity) {
            return _connection.Execute("UPDATE all_accounts SET type = @type WHERE id = @id",new { id = entity.Id });
        }
    }
}
