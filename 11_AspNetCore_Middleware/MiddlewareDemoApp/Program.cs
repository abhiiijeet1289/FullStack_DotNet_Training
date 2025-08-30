using MiddlewareDemoApp.Middleware;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//custom middleware 
app.UseRequestLogging();

//Enable static files from wwwroot
app.UseStaticFiles();


// Endpoint
app.MapGet("/hello", () => "Hello from ASP.NET Core!");


// Run
app.Run();
