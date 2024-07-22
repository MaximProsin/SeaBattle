using backend.Contracts;
using backend.DataAccess;
using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IdentificationController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;

        public IdentificationController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] CreateUserRequest request, AuthService authService)
        {
            var existingUser = await _appDbContext.Users.FirstOrDefaultAsync(u => u.UserName == request.UserName);
            if (existingUser != null)
            {
                return BadRequest("Пользователь уже зарегистрирован");
            }

            var newUser = new User
            {
                UserName = request.UserName,
                Email = request.Email,
                Password = request.Password
            };

            _appDbContext.Users.Add(newUser);
            await _appDbContext.SaveChangesAsync();

            // Generate authentication token
            var token = authService.GenerateToken(newUser);

            return Ok(token);
        }
        
        [HttpPost("authorization")]
        public async Task<IActionResult> Authorization([FromBody] AuthUserRequest request, AuthService authService)
        {
            var existingUser =
                await _appDbContext.Users.FirstOrDefaultAsync(u =>
                    (u.UserName == request.UserName && u.Password == request.Password));
            if (existingUser == null)
            {
                return BadRequest("Такого пользователя не существует");
            }
            
            var token = authService.GenerateToken(existingUser);
            return Ok(token);
        }
    }
}