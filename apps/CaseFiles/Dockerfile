FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY CaseFiles.sln ./
COPY CaseFiles.API/CaseFiles.API.csproj CaseFiles.API/
COPY CaseFiles.Application/CaseFiles.Application.csproj CaseFiles.Application/
COPY CaseFiles.Data/CaseFiles.Data.csproj CaseFiles.Data/
COPY CaseFiles.Domain/CaseFiles.Domain.csproj CaseFiles.Domain/

RUN dotnet restore

COPY . .

RUN dotnet publish CaseFiles.API/CaseFiles.API.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "CaseFiles.API.dll"]