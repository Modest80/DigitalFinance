using Dapper;
using DigitalFinanceReactApp.Server.Models;
using System.Data;

namespace DigitalFinanceReactApp.Server.Databases
{
	public class TypeAccountRepository : Repository, IRepository<TypeAccount>
	{
		public TypeAccountRepository(IDbConnection dbConnection) : base(dbConnection) { }

		public int Add(TypeAccount entity)
		{
			throw new NotImplementedException();
		}

		public int Delete(int id)
		{
			throw new NotImplementedException();
		}

		public List<TypeAccount>? Get()
		{
			var query = "SELECT * FROM All_Accounts;";
			return _connection.Query<TypeAccount>(query).ToList();
		}

		public TypeAccount? GetById(int id)
		{
			throw new NotImplementedException();
		}

		public int Update(TypeAccount entity)
		{
			throw new NotImplementedException();
		}
	}
}
