using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using EPWeb.MockAPI.Data;
using EPWeb.MockAPI.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace EPWeb.MockAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            services.AddCors();

            services.AddAutoMapper();

            services.AddMvc().AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddScoped<IAuthRepository, AuthRepository>();

            services.AddScoped<IResourceGroupRepository, ResourceGroupRepository>();

            services.AddScoped<IResourceRepository, ResourceRepository>();

            services.AddScoped<IResourceAllocationRepository, ResourceAllocationRepository>();

            var key = Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(key),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                });

            services.AddTransient<Seed>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, Seed seeder)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // Global error handling in production mode
                app.UseExceptionHandler(builder =>
                {

                    builder.Run(async context =>
                    {

                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if (error != null)
                        {
                            context.Response.AppApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message);
                        }

                    });
                });
            }
            
            /* seeder -> seeding fake data whenever we start app, Uncomment section below only in case of fresh and empty database to fill it with mock data */
            /* seeder.SeedData(); */

            app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            app.UseAuthentication();
            app.UseMvc();
        }
    }
}
