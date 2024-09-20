namespace DigitalFinanceReactApp.Server.Models.User {
    public abstract class AbstractUser {
        public int Id { get; set; }
        public string Name { get; set; }
        protected AbstractUser(int id,string name) {
            Id = id;
            Name = name;
        }
        protected AbstractUser(string name) {
            Name = name;
        }
    }
}
