using Dapper;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.Accounts;
using System.Data;

namespace DigitalFinanceReactApp.Server.Databases {
    public class AccountRepository : Repository, IRepository<Account> {
        public AccountRepository(IDbConnection dbConnection) : base(dbConnection) { }

        public int Add(Account entity) {
            var query = "INSERT INTO Accounts (Title, AccountNumberReg, Balance, CreatedAt, UpdatedAt, Status, TypeAccountId, User_id) " +
                "VALUES (@Title, @AccountNumberReg, @Balance, @CreatedAt, @UpdatedAt, @Status, @TypeAccountId, @User_id);";

            return _connection.Execute(query,
                new {
                    entity.Title,
                    entity.AccountNumberReg,
                    entity.Balance,
                    entity.CreatedAt,
                    entity.UpdatedAt,
                    entity.Status,
                    entity.TypeAccount.Id,
                    User_id = entity.User.Id
                });
        }

        public int Delete(int id) {
            return _connection.Execute("DELETE FROM accounts WHERE id = @id",new { id });
        }

        public List<Account>? Get() {
            return _connection.Query<Account>("SELECT * FROM accounts").ToList();
        }

        public Account? GetById(int id) {
            return _connection.QuerySingleOrDefault<Account>("SELECT id, title, account_number_reg AccountNumberReg, balance, created_at CreatedAt, updated_at UpdatedAt, status" +
                " FROM accounts WHERE id = @id", new { id });
        }

        public int Update(Account entity) {
            string query = "UPDATE accounts SET balance = @balance, title = @title, status = @status " +
                "WHERE id = @id; ";
            return _connection.Execute(query, new { 
                entity.Balance,
                entity.Title,
                entity.Status,
                entity.Id
            });
        }
        public async Task<int> UpdateParametr(string parametrKey, string parametrsValue, string whereKey, string whereValue) {
            return await _connection.ExecuteAsync(
                                    $"UPDATE accounts SET {parametrKey} = @parametrKey WHERE {whereKey} = @whereKey; ",
                                    new { parametrKey = parametrsValue, whereKey = whereValue });
        }

        public async Task<int> AddAsync(AccountCreateDTO entity) {

            int account_type_id = await _connection.QueryFirstOrDefaultAsync<int>(
                "SELECT id FROM all_accounts WHERE type = @type",
                new { type = entity.AccountType });

            int changedRows = await _connection.ExecuteAsync(
                "INSERT INTO accounts (title,user_id,accounts_id) VALUES (@title,@user_id,@account_type_id)",
                new { title = entity.Title,user_id = entity.User_id,account_type_id });

            return changedRows;
        }

        public async Task<IEnumerable<Account>> GetUserAccounts(int user_id) {
            return await _connection.QueryAsync<Account>(
                "SELECT id, title, account_number_reg AccountNumberReg, balance, status " +
                "  FROM accounts WHERE user_id = @user_id", 
            new { user_id });
        }
    }
}
