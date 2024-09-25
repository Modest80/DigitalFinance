﻿using Dapper;
using DigitalFinanceReactApp.Server.Models;
using DigitalFinanceReactApp.Server.Models.User;
using DigitalFinanceReactApp.Server.Models.Users;
using System.Data;
using System.Net;

namespace DigitalFinanceReactApp.Server.Databases {
    public class HistorieRepository : Repository, IRepository<Historie> {
        public HistorieRepository(IDbConnection dbConnection) : base(dbConnection) { }
        public int Add(Historie entity) {
            var query = "INSERT INTO Hiatories(from_account, to_account, amount, commentary) VALUES(@from_account, @to_account, @amount, @commentary);";
            return _connection.Execute(query, new { entity.FromAccount, entity.ToAccount, entity.Amount, entity.Commentary });
        }
        public int Delete(int id) {
            var query = "DELETE Histories where id = @id;";
            return _connection.Execute(query, new { id });
        }
        public List<Historie>? Get() {
            var query = "SELECT * FROM Histories; ";
            return _connection.Query<Historie>(query).ToList();
        }

        public Historie? GetById(int id) {
            var query = "SELECT * FROM Histories where id = @id;";
            return _connection.Query<Historie>(query, new { id }).FirstOrDefault();
        }

        public int Update(Historie entity) {
            throw new NotImplementedException();
        }
    }
}
