using System.Data;

namespace DigitalFinanceReactApp.Server.Databases
{
	public abstract class Repository
	{
        protected readonly IDbConnection _connection;
		protected Repository(IDbConnection dbConnection)
        {
            _connection = dbConnection;
        }
    }
}
