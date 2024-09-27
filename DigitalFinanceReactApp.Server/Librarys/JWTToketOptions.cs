using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace DigitalFinanceReactApp.Server.Librarys {
    public class JWTToketOptions {
        public const string ISSUER = "DigitalFinanceServer";

        public const string AUDIENCE = "DigitalFinanceClient";

        private const string KEY = "mysuperdigit_key_secret_password";

        public static SymmetricSecurityKey GetSymmetricSecurityKey() {
            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes(KEY));
        }
    }
}