namespace backend.Models;

public class User
{
    public Guid Id { get; set; } required   
        public string UserName { get; set; } required 
        public string Email { get; set; } required 
        public string Password { get; set; }
}