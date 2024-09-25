namespace DigitalFinanceReactApp.Server.Models {
    public class Historie {
        public int Id { get; set; }
        public string FromAccount { get; set; }
        public string ToAccount { get; set; }
        public decimal Amount { get; set;}
        public string Commentary { get; set; }
        public long CreatedAt { get; set; }
        public Historie(int id, string fromAccount, string toAccount, decimal amount, string commentary, long createdAt) {
            Id = id;
            FromAccount = fromAccount;
            ToAccount = toAccount;
            Amount = amount;
            Commentary = commentary;
            CreatedAt = createdAt;
        }
    
    }
}
