//Custom Middleware

using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MiddlewareDemoApp.Middleware
{
    public class RequestLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        public RequestLoggingMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task Invoke(HttpContext context)
        {
            Console.WriteLine($"[Log] Request for: {context.Request.Path}");
            await _next(context); //calls next middleware
        }
    }

    //Extension method to use in Program.cs
    public static class RequestLoggingMiddlewareExtensions
    {
        public static IApplicationBuilder UseRequestLogging(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<RequestLoggingMiddleware>();
        }
    }
}