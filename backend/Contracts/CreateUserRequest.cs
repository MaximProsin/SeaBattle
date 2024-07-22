namespace backend.Contracts;

public record CreateUserRequest(string UserName, string Email, string Password);