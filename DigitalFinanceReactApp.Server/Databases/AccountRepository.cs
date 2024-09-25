using Dapper;
using DigitalFinanceReactApp.Server.Models;
using System.Data;

namespace DigitalFinanceReactApp.Server.Databases
{
	public class AccountRepository : Repository, IRepository<Account>
	{
		public AccountRepository(IDbConnection dbConnection) : base(dbConnection) { }

		public int Add(Account entity)
		{
			var query = "INSERT INTO Accounts (Title, AccountNumberReg, Balance, CreatedAt, UpdatedAt, Status, TypeAccountId, User_id) " +
				"VALUES (@Title, @AccountNumberReg, @Balance, @CreatedAt, @UpdatedAt, @Status, @TypeAccountId, @User_id);";

			return _connection.Execute(query,
				new
				{
					entity.Title,
					entity.AccountNumberReg,
					entity.Balance,
					entity.CreatedAt,
					entity.UpdatedAt,
					entity.Status,
					entity.TypeAccount.Id,
					User_id = entity.Usr.Id
				});
		}

		public int Delete(int id)
		{
			throw new NotImplementedException();
		}

		public List<Account>? Get()
		{
			throw new NotImplementedException();
		}

		public Account? GetById(int id)
		{
			throw new NotImplementedException();
		}

		public int Update(Account entity)
		{
			throw new NotImplementedException();
		}
	}
}
