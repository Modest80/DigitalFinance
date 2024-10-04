using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Librarys;
using DigitalFinanceReactApp.Server.Models.User;
using DigitalFinanceReactApp.Server.Models.Users;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Text.RegularExpressions;

namespace DigitalFinanceReactApp.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase {
        private const string EMAILPATTERN = @"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"; // Если хотите вынесите в класс какой нибудь

        private readonly UserRepository _userRepository;

        public AuthController(IRepository<AbstractUser> repo) {
            _userRepository = (UserRepository)repo;
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserAuthDTO user) {
            if(string.IsNullOrWhiteSpace(user.Email)) return BadRequest(new { Message = "Неправильный логин или пароль" });
            if(string.IsNullOrWhiteSpace(user.Password)) return BadRequest(new { Message = "Неправильный логин или пароль" });
            if(!Regex.IsMatch(user.Email,EMAILPATTERN)) return BadRequest(new { Message = "Некорректный логин" });
            User? db_user = await _userRepository.GetByEmail(user.Email);
            #region Какой варинт лучше?
            //if(db_user == null) return NoContent();
            if(db_user == null) return BadRequest(new { Message = "Пользователь не найден" });
            #endregion
            if(!CryptoHelper.VerifyPassword(user.Password, db_user.Password)) {
                return BadRequest(new { Message = "Неправильный логин или пароль" });
            }
            return Ok(new { token = $"Bearer {new JwtSecurityTokenHandler().WriteToken(JWTTokenHandler.CreateToken(db_user.Id,db_user.Email))}" });
        }
        [HttpOptions]
        public async Task<IActionResult> Options() {
            return Ok();
        }

        [HttpGet("logout")]
        public async Task<IActionResult> Logout() {
            return Ok();
        }
    }
}
