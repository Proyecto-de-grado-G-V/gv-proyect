using LegalProcessQuoting.Application.Abstract;
using LegalProcessQuoting.Application.Concrete;
using LegalProcessQuoting.Data.Abstract;
using LegalProcessQuoting.Data.Concrete;
using LegalProcessQuoting.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace LegalProcessQuoting.API.Extensions;

public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddProjectServices(this IServiceCollection services, IConfiguration configuration)
        {
            services
                .AddDatabase(configuration)
                .AddApplicationLayer()
                .AddInfrastructureLayer()
                .AddAutoMapperSetup()
                .AddControllersSetup()
                .AddSwaggerDocumentation();

            return services;
        }

        private static IServiceCollection AddDatabase(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING")
                                   ?? configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<PostgreSqlContext>(options =>
                options.UseNpgsql(connectionString)); 

            return services;
        }

        private static IServiceCollection AddApplicationLayer(this IServiceCollection services)
        {
            services.AddScoped<ILegalProcessService, LegalProcessService>();
            services.AddScoped<ISubProcessService, SubProcessService>();
            return services;
        }

        private static IServiceCollection AddInfrastructureLayer(this IServiceCollection services)
        {
            services.AddScoped<ILegalProcessRepository, LegalProcessRepository>();
            services.AddScoped<ISubProcessRepository, SubProcessRepository>();
            return services;
        }

        private static IServiceCollection AddAutoMapperSetup(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(Program));
            return services;
        }

        private static IServiceCollection AddControllersSetup(this IServiceCollection services)
        {
            services.AddControllers();
            return services;
        }

        private static IServiceCollection AddSwaggerDocumentation(this IServiceCollection services)
        {
            services.AddEndpointsApiExplorer();

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Legal Process Quoting API",
                    Version = "v1"
                });
            });

            return services;
        }
    }