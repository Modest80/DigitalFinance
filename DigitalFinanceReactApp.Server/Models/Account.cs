using DigitalFinanceReactApp.Server.Models.User;

namespace DigitalFinanceReactApp.Server.Models
{
	public class Account
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public string AccountNumberReg { get; set; }
		public decimal Balance { get; set; }
		public long CreatedAt { get; set; }
		public long UpdatedAt { get; set; }
		public string Status { get; set; }
		public TypeAccount TypeAccount { get; set; }
		public AbstractUser User { get; set; }
	}
}
