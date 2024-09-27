using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace DigitalFinanceReactApp.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class TypesAccountsController : ControllerBase {
        private readonly IRepository<TypeAccount> _typeRepository;
        public TypesAccountsController(IRepository<TypeAccount> repository) {
            _typeRepository = repository;
        }
        [HttpGet]
        public ActionResult Get() {
            try {
                var type = _typeRepository.Get();
                if(type == null) {
                    return NotFound(new { Message = "По запросу ничего не найдено" });
                }
                return Ok(type);
            } catch(Exception) {
                return StatusCode(500, new { Message = "Ошибка сервера" });
            }
        }
    }
}
