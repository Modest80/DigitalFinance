namespace DigitalFinanceReactApp.Server.Models.Users {
    public class UserAuthDTO {
        public string Email { get; set; }
        public string Password { get; set; }
        public UserAuthDTO(string email,string password) {
            Email = email;
            Password = password;
        }
    }
}
