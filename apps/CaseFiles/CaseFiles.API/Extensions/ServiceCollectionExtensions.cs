using CaseFiles.Application.Abstract;
using CaseFiles.Application.Concrete;
using CaseFiles.Data.Concrete;
using CaseFiles.Data.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

namespace CaseFiles.API.Extensions;

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
            services.AddScoped<ILegalCaseFileService, LegalCaseFileService>();
            return services;
        }

        private static IServiceCollection AddInfrastructureLayer(this IServiceCollection services)
        {
            services.AddScoped<ILegalCaseFileRepository, LegalCaseFileRepository>();
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
                    Title = "Legal Case Files API",
                    Version = "v1"
                });
            });

            return services;
        }
    }