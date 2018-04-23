using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace EPWeb.MockAPI.Migrations
{
    public partial class SeedingRoles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Roles (Name) VALUES ('Super Admin user')");
            migrationBuilder.Sql("INSERT INTO Roles (Name) VALUES ('Admin user')");
            migrationBuilder.Sql("INSERT INTO Roles (Name) VALUES ('Normal user')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Roles WHERE Name IN ('Normal user', 'Admin user', 'Super Admin user')");
        }
    }
}
