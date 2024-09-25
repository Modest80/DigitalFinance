using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.CompilerServices;

namespace DigitalFinanceReactApp.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TypesAccountsController : ControllerBase
	{
		private readonly IRepository<TypeAccount> _typeRepository;
        public TypesAccountsController(IRepository<TypeAccount> repository)
        {
            _typeRepository = repository;
        }
		[HttpGet]
		public ActionResult Get()
		{
			try
			{
				var type = _typeRepository.Get();
				if(type == null) 
				{
					return NotFound("По запросу ничего не найдено");
				}
				return Ok(type);
			}
			catch (Exception)
			{
				return StatusCode(500, "Ошибка сервера");
			}
		}
    }
}
