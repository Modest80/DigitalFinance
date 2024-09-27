using DigitalFinanceReactApp.Server.Databases;
using DigitalFinanceReactApp.Server.Librarys;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.User;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Npgsql;
using System.Data;

namespace DigitalFinanceReactApp.Server {
    public class Program {
        public static void Main(string[] args) {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors(options => {
                options.AddPolicy("AllowAll",
                    builder => {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            builder.Services.AddScoped<IDbConnection>(db => new NpgsqlConnection(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddScoped<IRepository<AbstractUser>,UserRepository>();
            builder.Services.AddScoped<IRepository<Historie>,HistorieRepository>();
            builder.Services.AddScoped<IRepository<Account>,AccountRepository>();

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options => {
                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuer = true,
                        ValidIssuer = JWTToketOptions.ISSUER,
                        ValidateAudience = true,
                        ValidAudience = JWTToketOptions.AUDIENCE,
                        ValidateLifetime = true,
                        IssuerSigningKey = JWTToketOptions.GetSymmetricSecurityKey(),
                        ValidateIssuerSigningKey = true
                    };
                });

            builder.Services.AddAuthorization();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddControllers();

            builder.Services.AddSwaggerGen(options => {
                options.AddSecurityDefinition("Bearer",new OpenApiSecurityScheme() {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                });
                options.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme {
                            Reference = new OpenApiReference {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] { }
                    }
                });
            });
            

            var app = builder.Build();

            app.UseAuthentication();

            app.UseAuthorization();

            if(app.Environment.IsDevelopment()) {

                app.UseSwagger();

                app.UseSwaggerUI();

            };

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app.MapControllers();

            app.Run();
        }

    }
}
