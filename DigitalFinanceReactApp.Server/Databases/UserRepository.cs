using Dapper;
using DigitalFinanceReactApp.Server.Models.User;
using System.Data;

namespace DigitalFinanceReactApp.Server.Databases
{
	public class UserRepository : Repository, IRepository<AbstractUser>
	{
		public UserRepository(IDbConnection dbConnection) : base(dbConnection) { }
		public int Add(AbstractUser entity)
		{
			var query = "INSERT INTO Users(name, email, phone, password) VALUES(@name, @email, @phone, @password);";
			return _connection.Execute(query, new { entity.Name, entity.Email, entity.Phone, entity.Password });
		}

		public int Delete(int id)
		{
			var query = "DELETE Users where id = @id;";
			return _connection.Execute(query, new {id});
		}

		public List<AbstractUser>? Get()
		{
			var query = "SELECT * FROM Users;";
			return _connection.Query<AbstractUser>(query).ToList();
		}

		public AbstractUser? GetById(int id)
		{
			var query = "SELECT * FROM Users where id = @id;";
			return _connection.Query<AbstractUser>(query, new {id}).FirstOrDefault();
		}

		public int Update(AbstractUser entity)
		{
			var query = "UPDATE Users SET(name = @name) where id = @id;";
			return _connection.Execute(query, new {entity.Id, entity.Name, entity.Email, entity.Phone, entity.Password });
		}
	}
}
