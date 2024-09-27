using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace DigitalFinanceReactApp.Server.Librarys {
    public class JWTTokenHandler {
        public static JwtSecurityToken CreateToken(int id,string email) {
            return new JwtSecurityToken(
                issuer: JWTToketOptions.ISSUER,
                audience: JWTToketOptions.AUDIENCE,
                claims: new List<Claim>() {
                    new(ClaimTypes.Email,email),
                    new(ClaimTypes.Sid,id.ToString())
                },
                expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(30)),
                signingCredentials: new SigningCredentials(JWTToketOptions.GetSymmetricSecurityKey(),SecurityAlgorithms.HmacSha256)
            );
        }
        public static JwtSecurityToken UpdateTokenLifeTime(JwtSecurityToken oldToken) {
            return new JwtSecurityToken(
                issuer: JWTToketOptions.ISSUER,
                audience: JWTToketOptions.AUDIENCE,
                claims: oldToken.Claims,
                expires: DateTime.UtcNow.Add(TimeSpan.FromMinutes(30)),
                signingCredentials: new SigningCredentials(JWTToketOptions.GetSymmetricSecurityKey(),SecurityAlgorithms.HmacSha256)
            );
        }
    }
}
