#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:7.0-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["Best.Buy.API.csproj", ""]
RUN dotnet restore "./Best.Buy.API.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "Best.Buy.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Best.Buy.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Best.Buy.API.dll"]