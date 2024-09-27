namespace DigitalFinanceReactApp.Server.Models.Accounts {
    public class AccountCreateDTO {
        public string Title { get; set; }
        public int User_id { get; set; }
        public string AccountType { get; set; }
        public AccountCreateDTO(string title,int user_id,string accountType) {
            Title = title;
            User_id = user_id;
            AccountType = accountType;
        }
    }
}
