using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DigitalFinanceReactApp.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AccountsController : ControllerBase
	{
		private readonly IRepository<Account> _historyRepository;
		public AccountsController(IRepository<Account> repository)
		{
			_historyRepository = repository;
		}
		[HttpPost]
		public ActionResult Post(Account account)
		{
			try
			{
				if (account == null)
				{
					return BadRequest(new { Message = "Ошибка в запросе" });
				}
				if(_historyRepository.Add(account) != 0)
				{
					return Ok(new { Message = "Счет успешно создан" });
				}
				
				return BadRequest(new { Message = "Ошибка сооздания пользователя" });

			}
			catch (Exception)
			{

				return StatusCode(500, "Ошибка сервера");
			}
			
		}
	}
}
