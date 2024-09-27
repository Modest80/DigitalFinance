using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Librarys;
using DigitalFinanceReactApp.Server.Models.User;
using DigitalFinanceReactApp.Server.Models.Users;
using Microsoft.AspNetCore.Mvc;

namespace DigitalFinanceReactApp.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase {
        private readonly IRepository<AbstractUser> _userRepository;
        public UsersController(IRepository<AbstractUser> repo) { 
            _userRepository = repo;
        }
        [HttpPost]
        public IActionResult Registration(User user) {
            if (user == null) {
                return BadRequest(new { Message = "Ошибка в данных" });
            }
            user.Password = CryptoHelper.CryptMD5(user.Password);
            if (_userRepository.Add(user) != 0) {
                return Ok(new { Message = "Данные успешно сохранены!" });
            } else {
                return BadRequest(new { Message = "Ошибка сооздания пользователя" });
            }
        }
    }
}
