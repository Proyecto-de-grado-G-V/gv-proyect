using DotNetEnv;
using LegalProcessQuoting.API.Extensions;
using LegalProcessQuoting.Data.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

builder.Services.AddProjectServices(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<PostgreSqlContext>();
    context.Database.Migrate();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();