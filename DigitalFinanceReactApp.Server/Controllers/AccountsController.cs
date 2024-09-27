using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.Accounts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace DigitalFinanceReactApp.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase {
        private readonly AccountRepository _accountRepository;
        public AccountsController(IRepository<Account> repository) {
            _accountRepository = (AccountRepository)repository;
        }
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post(AccountCreateDTO account) {
            try {
                int user_id = int.Parse(User.FindFirstValue(ClaimTypes.Sid));
                account.User_id = user_id;
                if(account == null) {
                    return BadRequest(new { Message = "Ошибка в запросе" });
                }
                if(await _accountRepository.AddAsync(account) != 0) {
                    return Ok(new { Message = "Счет успешно создан" });
                }

                return BadRequest(new { Message = "Ошибка сооздания пользователя" });

            } catch(Exception ex) {
                Console.WriteLine(ex.Message);
                return StatusCode(500,"Ошибка сервера");
            }

        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUserAccounts() {
            int user_id = int.Parse(User.FindFirstValue(ClaimTypes.Sid));
            return Ok(await _accountRepository.GetUserAccounts(user_id));
        }
    }
}
