using System.Security.Cryptography;
using System.Text;

namespace DigitalFinanceReactApp.Server.Librarys {
    public class CryptoHelper {
        public static string CryptMD5(string input) {
            return Convert.ToBase64String(
            MD5.Create().ComputeHash(
                        Encoding.UTF8.GetBytes(
                            input)));
        }
        public static bool VerifyPassword(string password,string hashed_password) {
            return CryptMD5(password) == hashed_password;
        }
    }
}
