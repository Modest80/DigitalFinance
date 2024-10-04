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

                if (account == null) {
                    return BadRequest(new { Message = "Ошибка в запросе" });
                }
                if (await _accountRepository.AddAsync(account) != 0) {
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

        [Authorize]
        [HttpPut("Replen")]
        public async Task<IActionResult> UpdateAccount(int accountId, decimal updateBalance) {
            int user_id = int.Parse(User.FindFirstValue(ClaimTypes.Sid));
            if (user_id == 0) {
                return BadRequest(new { Message = "Ошибка в запросе" });
            }
            if (accountId == 0) { return BadRequest(new { Message = "Ошибка в запросе" }); }

            var account = _accountRepository.GetById(accountId);
            account.Balance += updateBalance;
            account.UpdatedAt = 0;
            //int result = await _accountRepository.UpdateParametr("balance", account.Balance.ToString(), "id", accountId.ToString());

            if (_accountRepository.Update(account) != 0) {
                return Ok(new { Message = "Данные успешно обновлены" });
            }

            return BadRequest(new { Message = "Данные НЕ обновлены!" });
        }

        [Authorize]
        [HttpPut("TransferBetween")]
        public async Task<IActionResult> TransferBetweenAccounts(int accountFromId, int accountToId, decimal transferAmount) {
            int user_id = int.Parse(User.FindFirstValue(ClaimTypes.Sid));
            if (user_id == 0) {
                return BadRequest(new { Message = "Ошибка в запросе" });
            }
            if (accountFromId == 0 || accountToId == 0) {
                return BadRequest(new { Message = "Ошибка в запросе" });
            }

            var accountFrom = _accountRepository.GetById(accountFromId);
            var accountTo = _accountRepository.GetById(accountToId);

            if (accountFrom == null || accountTo == null) {
                return BadRequest(new { Message = "Один из счетов не найден" });
            }

            if (accountFrom.Balance < transferAmount) {
                return BadRequest(new { Message = "Недостаточно средств на счете" });
            }

            accountFrom.Balance -= transferAmount; // Уменьшаем баланс счета
            accountTo.Balance += transferAmount; // Увеличиваем баланс счета

            // Обновляем оба счета в репозитории
            if (_accountRepository.Update(accountFrom) != 0 && _accountRepository.Update(accountTo) != 0) {
                return Ok(new { Message = "Перевод выполнен успешно" });
            }

            return BadRequest(new { Message = "Перевод не выполнен!" });
        }

        [Authorize]
        [HttpDelete]
        public async Task<IActionResult> DeleteAccount(int accountId) {
            if (accountId != 0) {
                _accountRepository.Delete(accountId);
                return Ok(new { Message = "Аккаунт удалён!" });
            } else {
                return BadRequest(new { Message = "Не указан счёт" });
            }            
        }
    }
}
