using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.User;
using DigitalFinanceReactApp.Server.Models.Users;
using Npgsql;
using System.Data;

namespace DigitalFinanceReactApp.Server {
    public class Program {
        public static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll",
                    builder => {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            builder.Services.AddScoped<IDbConnection>(db => new NpgsqlConnection(builder.Configuration.GetConnectionString("DefaultConnection")));
            builder.Services.AddScoped<IRepository<AbstractUser>, UserRepository>();
            builder.Services.AddScoped<IRepository<Historie>, HistorieRepository>();

            builder.Services.AddAuthorization();

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddControllers();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();
            app.UseCors("AllowAll");
            app.UseDefaultFiles();
            app.UseStaticFiles();

            if (app.Environment.IsDevelopment()) {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
