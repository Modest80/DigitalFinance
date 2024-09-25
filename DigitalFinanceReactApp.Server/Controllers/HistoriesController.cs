using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.User;
using DigitalFinanceReactApp.Server.Models.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DigitalFinanceReactApp.Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class HistoriesController : ControllerBase {
        private readonly IRepository<Historie> _historyRepository;
        public HistoriesController(IRepository<Historie> repository) {
            _historyRepository = repository;
        }
        [HttpPost]
        public IActionResult Add(Historie historie) {
            if (historie == null) {
                return BadRequest(new { Message = "Ошибка в запросе" });
            }
            if (_historyRepository.Add(historie) != 0) {
                return Ok(new { Message = "Данные успешно сохранены!" });
            } else {
                return BadRequest(new { Message = "Ошибка записи" });
            }
        }
        
    }
}
