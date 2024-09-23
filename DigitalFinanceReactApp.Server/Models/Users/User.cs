using DigitalFinanceReactApp.Server.Models.User;

namespace DigitalFinanceReactApp.Server.Models.Users {
    public class User : AbstractUser {
        public string? Email;
        public string? Phone;
        public string? Password;
        public User(int id, string? name, string? email, string? phone, string? password):
            base (id, name) {
            Email = email;
            Phone = phone;
            Password = password;
        }
    }
}
